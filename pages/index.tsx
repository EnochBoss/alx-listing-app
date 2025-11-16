import Image from "next/image";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Beachfront",
    "City View",
    "Luxury",
    "Pet Friendly",
  ];

  return (
    <div className="flex flex-col gap-12 mt-6">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] rounded-xl overflow-hidden">
        <Image
          src="/hero-background.jpg" // must import into public folder or constants
          alt="Hero Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl mt-4">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="flex flex-wrap gap-3">
        {filters.map((f, i) => (
          <Pill key={i} label={f} />
        ))}
      </section>

      {/* PROPERTY LISTINGS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h2 className="font-semibold text-xl">{property.name}</h2>

              <p className="text-gray-600 mt-1">
                {property.address.city}, {property.address.country}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-blue-600 font-bold text-lg">
                  ${property.price}
                </span>
                <span className="text-yellow-500 font-medium">
                  ⭐ {property.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
