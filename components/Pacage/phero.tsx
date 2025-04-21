"use client";

import { useState } from "react";
import InquiryForm from "@/components/Pacage/pacageForm";

// Define the type for the tour data
interface Tour {
  title: string;
  desc: string;
  price: string;
  image: string;
}

export default function TourPackagesHero() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendinquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData }),
      });

      if (response.ok) {
        setMessage("Inquiry sent successfully!");
        setFormData({ name: "", phone: "" });
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending the inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Sample tour data
  const tourData: Tour[] = [
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
  ];

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
          {tourData.map((tour, idx) => (
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
                <InquiryForm/>
                {message && <p className="mt-3 text-gray-600">{message}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
