'use client';
import { useState } from "react";

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

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
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

  return (
    <div className="min-h-screen  flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">Cab Booking Form</h2>

        <div className="grid grid-cols-1 text-left text-slate-900 sm:grid-cols-2 gap-4">
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
          <div>
            <label htmlFor="from">From</label>
            <input
              id="from"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
              className="input"
              placeholder="Pickup location"
              title="Pickup Location"
            />
          </div>
          <div>
            <label htmlFor="to">To</label>
            <input
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="input"
              placeholder="Drop-off location"
              title="Drop-off Location"
            />
          </div>
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

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl">
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
