import Image from "next/image";

const data = [
  {
    title: "Pan-India Presence – 2000+ Cities",
    description: "We are India’s largest chauffeur-driven cab rental network, ready to serve you in over 2000+ cities, from metros to remote towns.",
    image: "/details/Pan-India Presence.webp", // replace with your actual image path
  },
  {
    title: "Why Road Trips with INDO-BHUTAN TRAVELS Are Special",
    description: "Enjoy every mile with clean cars, flexible packages & friendly chauffeurs. Travel isn’t about the destination, it’s about the ride.",
    image: "/details/road-trip-with-family.jpg",
  },
  {
    title: "Explore Local, Go Beyond the Usual",
    description: "Full-day city rentals to discover hidden gems, street food, heritage sites, or just a joyride in your own town.",
    image: "/details/local-desktop.webp",
  },
  {
    title: "Airport Transfers Made Easy",
    description: "Pre-booked airport pick-up & drop in top cities. No stress. No delay. Just seamless travel from the terminal to your doorstep.",
    image: "/details/airport-desktop.webp",
  },
  {
    title: "Plan Your Trip Effortlessly",
    description: "Book online or call 9045450000. Get travel kits, route help, and expert planning support for every road trip.",
    image: "/details/customer.png",
  },
  {
    title: "One-Way Drops & Custom Rides",
    description: "Need a one-side cab? Pay only for what you use. Ideal for solo trips or exploring lesser-known towns.",
    image: "/details/singleroadtrip.png",
  },
  {
    title: "Wherever You Go – We've Got a Cab",
    description: "Family holidays, friends' getaways, spiritual tours — we’re ready. Reliable rides for all your travel moods.",
    image: "/details/delhi-trip-plan-india.webp",
  },
  {
    title: "Trust the Journey – Trust INDO-BHUTAN TRAVELS",
    description: "We believe travel starts the moment you book your cab. From smooth bookings to great experiences, INDO-BHUTAN TRAVELS is your road partner.",
    image: "/details/driver2.jpg",
  },
];

const  SavariSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-blue-800">
          India's Largest Intercity and Local Cab Services
        </h2>
        <p className="text-gray-600 mb-10">Travel begins with INDO-BHUTAN TRAVELS.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-start md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-xl object-cover w-full"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavariSection;
