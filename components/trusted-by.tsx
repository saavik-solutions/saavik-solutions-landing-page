import Image from "next/image"

export default function TrustedBy() {
  return (
    <section className="relative w-full bg-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start md:flex-row md:items-center">
          <div className="relative">
            {/* Black background with angled edge */}
            <div className="absolute -left-4 top-0 h-full w-[250px] bg-black md:w-[300px]">
              <div className="absolute -right-12 h-full w-24 bg-black skew-x-[30deg]"></div>
            </div>

            {/* Text */}
            <div className="relative z-10 py-2 pr-16 font-bold uppercase text-white">WE ARE TRUSTED BY</div>
          </div>

          {/* Logos */}
          <div className="mt-6 flex w-full flex-wrap items-center justify-end gap-8 md:mt-0 md:justify-end">
            <Image
              src="/images/logo1.png"
              alt="Logoipsum"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <Image src="/images/logo2.png" alt="Logo" width={120} height={40} className="h-8 w-auto object-contain" />
            <Image
              src="/images/logo3.png"
              alt="Logo Ipsum"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/images/logo4.png"
              alt="Logoipsum"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

