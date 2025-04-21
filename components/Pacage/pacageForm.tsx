'use client';
import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({ name: '', phone: '' ,pacageName:''});
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/sendinquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Inquiry sent successfully!');
        setFormData({ name: '', phone: '' ,pacageName:''});
      } else {
        setStatus('Failed to send inquiry.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Something went wrong!');
    }
  };

  return (
    <div className=" flex  items-center  text-left bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md  rounded-lg space-y-4">
       

        <div>
          {/* <label className="block text-sm font-medium text-gray-700">Name</label> */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <div>
          {/* <label className="block text-sm font-medium text-gray-700">Phone Number</label> */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
 
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
         Send Inquiry
        </button>

        <p className="text-center text-sm text-gray-600">{status}</p>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.5rem;
          margin-top: 0.25rem;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
