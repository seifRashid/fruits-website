import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#011e1c] text-[#efe1b0] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h3 className="text-2xl font-bold text-[#b2bd34] mb-4">Fruitopia</h3>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for fresh, organic, and juicy fruits delivered right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-[#b2bd34] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-white transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-[#b2bd34] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FiPhoneCall className="text-[#b2bd34]" />
              <span>+254 712 345 678</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMail className="text-[#b2bd34]" />
              <span>support@fruitopia.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMapPin className="text-[#b2bd34]" />
              <span>Mombasa, Kenya</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-xl font-semibold text-[#b2bd34] mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-[#b2bd34] hover:text-white transition text-xl"><FaFacebookF /></a>
            <a href="#" className="text-[#b2bd34] hover:text-white transition text-xl"><FaTwitter /></a>
            <a href="#" className="text-[#b2bd34] hover:text-white transition text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-sm text-[#a9aa7c]">
        &copy; {new Date().getFullYear()} Fruitopia. All rights reserved.
      </div>
    </footer>
  );
}
