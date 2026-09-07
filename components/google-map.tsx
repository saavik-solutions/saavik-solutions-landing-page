"use client"

export default function GoogleMapComponent() {
  return (
    <div className="relative h-full w-full min-h-[300px]">
      <iframe
        src="https://maps.google.com/maps?q=110,+Saifabad,+Khairtabad,+Hyderabad,+Telangana+500004&t=&z=16&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full rounded-lg"
      />
    </div>
  )
}

