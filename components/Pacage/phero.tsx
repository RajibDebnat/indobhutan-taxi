"use client";

export default function TourPackagesHero() {
  return (
    <section className="relative bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-blue-900">
          Explore Our Tour Packages
        </h2>
        <p className="mt-4 text-lg md:text-xl font-outfit text-gray-600">
          Experience the beauty of Bhutan and the charm of India with our curated travel plans.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Bhutan Tour",
              desc: "Discover the serene monasteries, lush valleys, and vibrant culture of Bhutan.",
              price: "₹18,999",
              image: "/pacages/bhutan-gate.jpg",
            },
            {
              title: "India Tour",
              desc: "From heritage cities to spiritual destinations – explore India like never before.",
              price: "₹15,499",
              image: "/details/delhi-trip-plan-india.webp",
            },
            {
              title: "Boxa Tour",
              desc: "A perfect getaway into the wilderness of West Bengal’s hidden gem – Boxa.",
              price: "₹12,999",
              image: "/pacages/boxa-tour.webp",
            },
            {
              title: "Jaldapara Tour",
              desc: "Experience the wildlife and scenic beauty of Jaldapara National Park.",
              price: "₹13,499",
              image: "/pacages/jaldapara.jpg",
            },
            {
              title: "Kalimpong & Lava",
              desc: "Enjoy the tranquility of the hills in Kalimpong, Lava & surrounding regions.",
              price: "₹16,999",
              image: "/pacages/Lava-Kalimpong.webp",
            },
            {
              title: "Thimphu & Paro",
              desc: "Visit Bhutan's iconic cities with beautiful landscapes and ancient dzongs.",
              price: "₹20,999",
              image: "/pacages/paro.jpg",
            },
          ].map((tour, idx) => (
            <div
              key={idx}
              className="bg-white border shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.97] flex flex-col justify-between"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold font-montserrat text-blue-800">
                  {tour.title}
                </h3>
                <p className="text-sm text-gray-600 font-outfit">
                  {tour.desc}
                </p>
                <p className="text-base text-green-600 font-bold">
                  Price: {tour.price}
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Add Your Number"
                    className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    Inquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
