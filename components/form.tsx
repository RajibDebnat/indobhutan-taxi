'use client';
import { useState, useRef, useEffect } from "react";

export default function CabBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    from: "",
    to: "",
    pickupDate: "",
    pickupTime: "",
    tripType: "oneway",
    message: "",
  });

  const [status, setStatus] = useState("");

  const defaultLocations = [
    "IXB Bagdogra Airport", "Jaigaon", "Phuentsholing, Bhutan",
    "Siliguri", "Kolkata", "Thimphu, Bhutan",
    "Alipurduar", "Darjeeling", "Gangtok", "Kalimpong",
  ];
  const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
  const [toSuggestions, setToSuggestions] = useState<string[]>([]);
  const [fromFocused, setFromFocused] = useState(false);
  const [toFocused, setToFocused] = useState(false);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "from") {
      setFromSuggestions(
        value.trim() ? defaultLocations.filter(location =>
          location.toLowerCase().includes(value.toLowerCase())) : defaultLocations
      );
    } else if (name === "to") {
      setToSuggestions(
        value.trim() ? defaultLocations.filter(location =>
          location.toLowerCase().includes(value.toLowerCase())) : defaultLocations
      );
    }
  };

  const handleSelectFrom = (location: string) => {
    setFormData({ ...formData, from: location });
    setFromSuggestions([]);
    setFromFocused(false);
  };

  const handleSelectTo = (location: string) => {
    setFormData({ ...formData, to: location });
    setToSuggestions([]);
    setToFocused(false);
  };

  const handleFromFocus = () => {
    setFromFocused(true);
    setFromSuggestions(defaultLocations);
  };

  const handleToFocus = () => {
    setToFocused(true);
    setToSuggestions(defaultLocations);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(e.target as Node)) {
        setFromFocused(false);
      }
      if (toRef.current && !toRef.current.contains(e.target as Node)) {
        setToFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Booking sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          from: "",
          to: "",
          pickupDate: "",
          pickupTime: "",
          tripType: "oneway",
          message: "",
        });
      } else {
        setStatus("Failed to send booking. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-bold text-center text-blue-700">Cab Booking Form</h2>

        <div className="grid grid-cols-1 text-left text-slate-900 sm:grid-cols-2 gap-4">
          <div>
            <label title="Enter your full name">Name</label>
            <input name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required className="input" />
          </div>
          <div>
            <label title="Enter your email address">Email</label>
            <input type="email" name="email" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required className="input" />
          </div>
          <div>
            <label title="Enter your contact number">Phone</label>
            <input name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required className="input" />
          </div>
          <div>
            <label title="Select your trip type">Trip Type</label>
            <select title="trip type" name="tripType" value={formData.tripType} onChange={handleChange} className="input">
              <option value="oneway">One Way</option>
              <option value="roundtrip">Round Trip</option>
              <option value="local">Local</option>
              <option value="airport">Airport</option>
            </select>
          </div>

          <div ref={fromRef} className="relative">
            <label title="Enter or select your pickup location">From</label>
            <input name="from" placeholder="Pickup location" value={formData.from} onChange={handleChange} onFocus={handleFromFocus} required className="input" />
            {fromFocused && fromSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {fromSuggestions.map((loc, i) => (
                  <li key={i} onClick={() => handleSelectFrom(loc)} className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700">{loc}</li>
                ))}
              </ul>
            )}
          </div>

          <div ref={toRef} className="relative">
            <label title="Enter or select your drop-off location">To</label>
            <input name="to" placeholder="Drop-off location" value={formData.to} onChange={handleChange} onFocus={handleToFocus} required className="input" />
            {toFocused && toSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {toSuggestions.map((loc, i) => (
                  <li key={i} onClick={() => handleSelectTo(loc)} className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700">{loc}</li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label title="Select your pickup date">Pick Up Date</label>
            <input type="date" placeholder="pickup date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required className="input" />
          </div>
          <div>
            <label title="Select your pickup time">Pick Up Time</label>
            <input placeholder="pickup time" type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required className="input" />
          </div>
        </div>

        <div>
          <label title="Add any special instructions or additional details">Additional Message</label>
          <textarea name="message" placeholder="Any special instructions" value={formData.message} onChange={handleChange} className=" text-black input h-24" />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl">Book Now</button>
        <p className="text-center text-sm text-gray-600">{status}</p>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
}
