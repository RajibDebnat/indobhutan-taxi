"use client";

const cars = [
  {
    name: "Innova Crysta",
    price: "₹3,500 / day",
    image: "/carrent/inova-crysta.avif",
  },
  {
    name: "Swift Dzire",
    price: "₹2,000 / day",
    image: "/carrent/swift-szire.avif",
  },
  {
    name: "Hyundai Creta",
    price: "₹3,200 / day",
    image: "/carrent/Hyundai-creta.jpg",
  },
  {
    name: "Toyota Fortuner",
    price: "₹4,500 / day",
    image: "/carrent/toyota-fortunar.avif",
  },
  {
    name: "Mahindra Scorpio",
    price: "₹3,000 / day",
    image: "/carrent/Scorpio.webp",
  },
  {
    name: "Ertiga",
    price: "₹2,800 / day",
    image: "/carrent/ertiga.jpg",
  },
  {
    name: "Wagon R",
    price: "₹1,800 / day",
    image: "/carrent/wagorr.webp",
  },
];

export default function CarRentPage() {
  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
        Rent a Car with Indo Bhutan Travels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 rounded-xl shadow p-5"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">{car.name}</h3>
            <p className="text-gray-700 font-medium mb-4">{car.price}</p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md p-2 text-sm"
                required
              />
              <textarea
                rows={2}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md p-2 text-sm resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md font-medium transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        ))}
      </div>
    </section>
  );
}
