const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Paths
const svgPath = path.join(__dirname, 'public', 'saavik-icon.svg');
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(svgPath)) {
  console.error('Error: saavik-icon.svg not found at', svgPath);
  process.exit(1);
}

const svgBuffer = fs.readFileSync(svgPath);

/**
 * Builds a standard Windows/web ICO file containing multiple PNG images.
 * @param {Buffer[]} pngBuffers - Array of PNG buffers in order of size.
 * @param {number[]} sizes - Corresponding square sizes (e.g. [16, 32, 48]).
 * @returns {Buffer} The binary ICO file buffer.
 */
function createIco(pngBuffers, sizes) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved, must be 0
  header.writeUInt16LE(1, 2); // image type: 1 = icon (.ico)
  header.writeUInt16LE(count, 4); // number of images

  const entries = [];
  for (let i = 0; i < count; i++) {
    const size = sizes[i];
    const buf = pngBuffers[i];
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height (0 = 256)
    entry.writeUInt8(0, 2); // color palette count (0 = no palette)
    entry.writeUInt8(0, 3); // reserved, must be 0
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel (32-bit RGBA)
    entry.writeUInt32LE(buf.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // offset of image data from beginning of file
    entries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

async function build() {
  console.log('Generating favicon and app icon assets from saavik-icon.svg...\n');

  // 1. Generate standard square transparent PNGs
  const pngConfigs = [
    { file: 'favicon-16x16.png', size: 16 },
    { file: 'favicon-32x32.png', size: 32 },
    { file: 'favicon-48x48.png', size: 48 },
    { file: 'android-chrome-192x192.png', size: 192 },
    { file: 'android-chrome-512x512.png', size: 512 },
  ];

  const icoPngBuffers = [];
  const icoSizes = [16, 32, 48];

  for (const { file, size } of pngConfigs) {
    const targetPath = path.join(publicDir, file);
    const buf = await sharp(svgBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();

    fs.writeFileSync(targetPath, buf);
    console.log(`✓ Created public/${file} (${size}x${size}, ${buf.length} bytes)`);

    if (icoSizes.includes(size)) {
      icoPngBuffers.push(buf);
    }
  }

  // 2. Generate Apple Touch Icon (180x180)
  // Apple recommends non-transparent or lightly padded square on white / clean base for iOS home screens
  const appleTouchPath = path.join(publicDir, 'apple-touch-icon.png');
  const innerIconSize = 144; // 80% with 18px padding
  const innerIcon = await sharp(svgBuffer)
    .resize(innerIconSize, innerIconSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const appleTouchBuf = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      {
        input: innerIcon,
        gravity: 'center',
      },
    ])
    .png()
    .toBuffer();

  fs.writeFileSync(appleTouchPath, appleTouchBuf);
  console.log(`✓ Created public/apple-touch-icon.png (180x180 on white background, ${appleTouchBuf.length} bytes)`);

  // 3. Generate multi-resolution favicon.ico containing 16x16, 32x32, 48x48
  const icoPath = path.join(publicDir, 'favicon.ico');
  const icoBuf = createIco(icoPngBuffers, icoSizes);
  fs.writeFileSync(icoPath, icoBuf);
  console.log(`✓ Created public/favicon.ico (multi-size 16x16, 32x32, 48x48, ${icoBuf.length} bytes)`);

  console.log('\nAll favicons and app icons generated successfully!');
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
