import { FaUserTie, FaCertificate, FaMapMarkedAlt, FaRoad, FaMoneyBillWave, FaTags, FaClock, FaCar, FaPlaneDeparture, FaSmile } from "react-icons/fa";
import { MdAltRoute, MdSupportAgent } from "react-icons/md";

const OurServices = () => {
  const services = [
    {
      title: "ROUNDTRIP CABS",
      image: "/services/roundtrip-desktop.webp",
      description:
        "Our premium services will pamper you with an absolutely comfortable drive to and fro, back. Our chauffeurs are not just courteous but are also expert road trippers that will make your road travel memorable. Affordable luxury, as we’d like to call it.",
      features: [
        { label: "Expert Chauffeurs", icon: <FaUserTie /> },
        { label: "Certified Drivers", icon: <FaCertificate /> },
        { label: "Multiple Stops", icon: <FaMapMarkedAlt /> },
      ],
    },
    {
      title: "ONEWAY DROPS",
      image: "/services/one-ways-desktop.webp",
      description:
        "Our network of over 15 lakh one-way routes ensures that there is no corner of the country that you can’t reach with us. Pay only one-side fare at rock bottom rates. If you need to be somewhere, we’ll get you there.",
      features: [
        { label: "15 Lakh Routes", icon: <MdAltRoute /> },
        { label: "Lowest Fares", icon: <FaMoneyBillWave /> },
        { label: "All Inclusive Prices", icon: <FaTags /> },
      ],
    },
    {
      title: "LOCAL RENTALS",
      image: "/services/local-desktop.webp",
      description:
        "Book our flexible hourly rental cabs and get chauffeured within the city as your business meetings or shopping hotspots. Our local rentals are available for 4 hours, 8 hours or 12 hours, based on your needs. Explore your city like a local.",
      features: [
        { label: "Flexible Packages", icon: <FaClock /> },
        { label: "Cab At Your Disposal", icon: <FaCar /> },
        { label: "Multiple Stops", icon: <FaMapMarkedAlt /> },
      ],
    },
    {
      title: "AIRPORT TRANSFERS",
      image: "/services/airport-desktop.webp",
      description:
        "We care about your flight as much as you do. Our airport transfer services across airports in the country offer pickups and drops with complete reliability. Book in advance and rest easy – we will take care of the rest.",
      features: [
        { label: "Reliability Guaranteed", icon: <FaPlaneDeparture /> },
        { label: "Lowest Fares", icon: <FaMoneyBillWave /> },
        { label: "Courteous Chauffeurs", icon: <MdSupportAgent /> },
      ],
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-white text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-10">OUR SERVICES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <ul className="mt-auto space-y-2 text-left text-sm text-blue-600 font-medium">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-600 text-2xl">{feat.icon}</span>
                    {feat.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
