import Image from "next/image";
import bhutan from "../public/bhutan.png";
import driver from "../public/driver.jpg";
import chardham from "../public/CHARDHAM.webp";

const HighlightsSection = () => {
  return (
    <section className="bg-white py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Char Dham Yatra */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={chardham.src}
            alt="Char Dham Yatra"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-blue-700">Char Dham Yatra</h3>
            <p className="text-gray-600 text-sm mt-1">
              Start your sacred journey to the Char Dhams with our reliable and comfortable rides.
            </p>
          </div>
        </div>

        {/* Our Driver Partners */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={driver.src}
            alt="Our Driver Partners"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-blue-700">Our Driver Partners</h3>
            <p className="text-gray-600 text-sm mt-1">
              Punctual, Courteous, and Knowledgeable – our drivers make your trip stress-free.
            </p>
          </div>
        </div>

        {/* Custom Add-on: Luxury Cars */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={bhutan.src}
            alt="Luxury Cars"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-blue-700">Bhutan Travel</h3>
            <p className="text-gray-600 text-sm mt-1">
              Experience premium rides in Bhutan and in India, VIP travel, and business trips.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
