export default function MissionVision() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* First Column */}
          <div className="flex flex-col gap-6">
            {/* Mission Card */}
            <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-md h-[220px] md:h-[240px] lg:h-[220px]">
              <h2 className="mb-4 text-xl font-bold uppercase">MISSION</h2>
              <p className="text-sm leading-relaxed text-gray-300">
                To revolutionize businesses with smart, scalable, and efficient digital solutions that enhance
                performance, optimize operations, and foster long-term success.
              </p>
            </div>

            {/* Vision Card */}
            <div className="overflow-hidden rounded-lg bg-gray-800 p-6 text-white shadow-md h-[220px] md:h-[240px] lg:h-[220px]">
              <h2 className="mb-4 text-xl font-bold uppercase">VISION</h2>
              <p className="text-sm leading-relaxed text-gray-300">
                To revolutionize businesses with smart, scalable, and efficient digital solutions that enhance
                performance, optimize operations, and foster long-term success.
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-6">
            {/* Rocket Launch Image */}
            <div className="overflow-hidden rounded-lg shadow-md h-[330px] md:h-[360px] lg:h-[330px]">
              <img
                src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Rocket launch"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Code/Text Image - restored to original height */}
            <div className="overflow-hidden rounded-lg shadow-md h-[220px] md:h-[240px] lg:h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Blurred code"
                className="h-full w-full object-cover brightness-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

