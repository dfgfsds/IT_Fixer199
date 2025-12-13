import Image from "next/image";
import { FaStarHalfAlt, FaUsers } from "react-icons/fa";

export default function HeroServices({ services, setOpenApplianceModal }:any) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SECTION */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-snug">
              Home services at your <br /> doorstep
            </h1>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-600 mb-6">
                What are you looking for?
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services?.map((service:any, index:number) => (
                  <div
                    key={index}
                    onClick={() => setOpenApplianceModal(true)}
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 transition rounded-lg min-h-[90px]">
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={48}
                        height={48}
                      />
                    </div>
                    <p className="text-xs text-center font-medium text-gray-800 mt-2">
                      {service.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RATING SECTION */}
            <div className="flex gap-12 mt-10">
              <div className="flex items-center gap-3">
                <FaStarHalfAlt className="text-2xl text-black" />
                <div>
                  <p className="text-xl font-bold text-black">4.8</p>
                  <p className="text-sm text-gray-500">Service Rating*</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaUsers className="text-2xl text-black" />
                <div>
                  <p className="text-xl font-bold text-black">12M+</p>
                  <p className="text-sm text-gray-500">Customers Globally*</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION – IMAGE GRID */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Large Image */}
            <div className="row-span-2 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
                alt="AC Service"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg"
                alt="Bathroom Cleaning"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4254146/pexels-photo-4254146.jpeg"
                alt="Fan Repair"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Right */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/6474295/pexels-photo-6474295.jpeg"
                alt="Painting"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
