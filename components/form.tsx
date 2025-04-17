// app/page.tsx or app/home/page.tsx
'use client';
import { useState, useRef, useEffect } from "react";

export default function Home() {
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

  // Location suggestions state
  const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
  const [toSuggestions, setToSuggestions] = useState<string[]>([]);
  const [fromFocused, setFromFocused] = useState(false);
  const [toFocused, setToFocused] = useState(false);
  
  // Refs for handling click outside
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState("");

  // Default location suggestions
  const defaultLocations = [
    "IXB Bagdogra Airport",
    "Jaigaon",
    "Phuentsholing","Bhutan",
    "Siliguri",
    "Darjeeling"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Handle location filtering for from and to fields
    if (name === "from") {
      if (value.trim() === '') {
        setFromSuggestions(defaultLocations);
      } else {
        const filtered = defaultLocations.filter(location => 
          location.toLowerCase().includes(value.toLowerCase())
        );
        setFromSuggestions(filtered);
      }
    } else if (name === "to") {
      if (value.trim() === '') {
        setToSuggestions(defaultLocations);
      } else {
        const filtered = defaultLocations.filter(location => 
          location.toLowerCase().includes(value.toLowerCase())
        );
        setToSuggestions(filtered);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/book", {
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
        setStatus("Failed to send booking. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending booking.");
    }
  };

  // Location selection handlers
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

  // Handle clicks outside the location dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) {
        setFromFocused(false);
      }
      if (toRef.current && !toRef.current.contains(event.target as Node)) {
        setToFocused(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Cab Booking Form
        </h2>

        <div className="grid grid-cols-1 text-left text-slate-900 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter your full name"
              title="Full Name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              required
              className="input"
              placeholder="Enter your email"
              title="Email Address"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter your phone number"
              title="Phone Number"
            />
          </div>

          {/* Trip Type */}
          <div>
            <label htmlFor="tripType">Trip Type</label>
            <select
              id="tripType"
              name="tripType"
              value={formData.tripType}
              onChange={handleChange}
              className="input"
              title="Select your trip type"
            >
              <option value="oneway">One Way</option>
              <option value="roundtrip">Round Trip</option>
              <option value="local">Local</option>
              <option value="airport">Airport</option>
            </select>
          </div>

          {/* From - with autosuggest */}
          <div ref={fromRef} className="relative">
            <label htmlFor="from">From</label>
            <input
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              onFocus={handleFromFocus}
              required
              className="input"
              placeholder="Pickup location"
              title="Pickup Location"
            />
            {/* From Suggestions Dropdown */}
            {fromFocused && fromSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {fromSuggestions.map((location, index) => (
                  <li 
                    key={index}
                    onClick={() => handleSelectFrom(location)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* To - with autosuggest */}
          <div ref={toRef} className="relative">
            <label htmlFor="to">To</label>
            <input
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              onFocus={handleToFocus}
              required
              className="input"
              placeholder="Drop-off location"
              title="Drop-off Location"
            />
            {/* To Suggestions Dropdown */}
            {toFocused && toSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {toSuggestions.map((location, index) => (
                  <li 
                    key={index}
                    onClick={() => handleSelectTo(location)}
                    className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-gray-700"
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Date */}
          <div>
            <label htmlFor="pickupDate">Pick Up Date</label>
            <input
              id="pickupDate"
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              required
              className="input"
              title="Select pickup date"
            />
          </div>

          {/* Time */}
          <div>
            <label htmlFor="pickupTime">Pick Up Time</label>
            <input
              id="pickupTime"
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              required
              className="input"
              title="Select pickup time"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message">Additional Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="input h-24"
            placeholder="Any special instructions or requests"
            title="Message"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl"
        >
          Book Now
        </button>

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