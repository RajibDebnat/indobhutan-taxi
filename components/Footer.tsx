import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 px-4 md:px-16 rounded-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

        {/* Logo & Description */}
        <div>
          <Image src="/images/logo.png" alt="Indo-Bhutan Taxi Service Logo" width={120} height={60} />
          <p className="mt-4 text-sm">
            Indo-Bhutan Taxi Service is India's largest chauffeur-driven car rental service. Safe, reliable, and hassle-free travel across 2000+ cities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link href="/faqs" className="hover:text-blue-600">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/intercity" className="hover:text-blue-600">Intercity Cabs</Link></li>
            <li><Link href="/local" className="hover:text-blue-600">Local Cabs</Link></li>
            <li><Link href="/airport" className="hover:text-blue-600">Airport Transfers</Link></li>
            <li><Link href="/oneway" className="hover:text-blue-600">One-Way Drops</Link></li>
            <li><Link href="/rentals" className="hover:text-blue-600">Hourly Rentals</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Reach Us</h3>
          <p className="text-sm mb-2">📞 090454 50000</p>
          <p className="text-sm mb-4">📧 support@Indo-Bhutan Taxi Service.com</p>

          <div className="flex gap-4 text-xl text-gray-600">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>

          
        </div>
      </div>

      <div className="border-t pt-6 text-center text-sm text-gray-500 mb-5">
        &copy; {new Date().getFullYear()} Indo-Bhutan Taxi Service Car Rentals. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
