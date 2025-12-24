// vCard (VCF) file generation utility for digital business cards

export interface VCardProfile {
  name: string;
  title?: string;
  company?: string;
  phone?: string;
  email?: string;
  website?: string;
  linkedin?: string;
}

/**
 * Generates a vCard 3.0 string from profile data
 */
export function generateVCard(profile: VCardProfile): string {
  const lines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeVCardValue(profile.name)}`,
    `N:${parseNameParts(profile.name)}`,
  ];

  if (profile.company) {
    lines.push(`ORG:${escapeVCardValue(profile.company)}`);
  }

  if (profile.title) {
    lines.push(`TITLE:${escapeVCardValue(profile.title)}`);
  }

  if (profile.phone) {
    lines.push(`TEL;TYPE=CELL:${profile.phone}`);
  }

  if (profile.email) {
    lines.push(`EMAIL;TYPE=INTERNET:${profile.email}`);
  }

  if (profile.website) {
    lines.push(`URL:${profile.website}`);
  }

  if (profile.linkedin) {
    lines.push(`URL;TYPE=LinkedIn:${profile.linkedin}`);
  }

  lines.push('END:VCARD');

  return lines.join('\r\n');
}

/**
 * Escapes special characters in vCard values
 */
function escapeVCardValue(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

/**
 * Parses a full name into vCard N field format (Last;First;Middle;Prefix;Suffix)
 */
function parseNameParts(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return `${parts[0]};;;;`;
  }
  const lastName = parts[parts.length - 1];
  const firstName = parts[0];
  const middleName = parts.length > 2 ? parts.slice(1, -1).join(' ') : '';
  return `${escapeVCardValue(lastName)};${escapeVCardValue(firstName)};${escapeVCardValue(middleName)};;`;
}

/**
 * Downloads a vCard file for the given profile
 */
export function downloadVCard(profile: VCardProfile): void {
  const vcard = generateVCard(profile);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${profile.name.replace(/\s+/g, '_')}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Cleanup
  setTimeout(() => URL.revokeObjectURL(url), 100);
}
