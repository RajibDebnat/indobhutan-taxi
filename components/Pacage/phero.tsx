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
              image: "/tours/bhutan.jpg",
            },
            {
              title: "India Tour",
              desc: "From heritage cities to spiritual destinations – explore India like never before.",
              image: "/tours/india.jpg",
            },
            {
              title: "Boxa Tour",
              desc: "A perfect getaway into the wilderness of West Bengal’s hidden gem – Boxa.",
              image: "/tours/boxa.jpg",
            },
            {
              title: "Jaldapara Tour",
              desc: "Experience the wildlife and scenic beauty of Jaldapara National Park.",
              image: "/tours/jaldapara.jpg",
            },
            {
              title: "Kalimpong & Lava",
              desc: "Enjoy the tranquility of the hills in Kalimpong, Lava & surrounding regions.",
              image: "/tours/kalimpong.jpg",
            },
            {
              title: "Thimphu & Paro",
              desc: "Visit Bhutan's iconic cities with beautiful landscapes and ancient dzongs.",
              image: "/tours/thimphu-paro.jpg",
            },
          ].map((tour, idx) => (
            <div
              key={idx}
              className="bg-white border shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.97]"
            >
              {/* <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-5">
                <h3 className="text-xl font-semibold font-montserrat text-blue-800">
                  {tour.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 font-outfit">
                  {tour.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
