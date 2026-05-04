import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* 1. About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">QurbaniHat 🐄</h2>
          <p className="text-sm leading-relaxed text-gray-300">
            QurbaniHat is your trusted digital marketplace for healthy and organic livestock. 
            We ensure the best quality cows and goats from verified farms to make your 
            sacred sacrifice meaningful and hassle-free.
          </p>
        </div>

        {/* 2. Contact Info Section */}
        <div className="space-y-4">
          <h3 className="footer-title text-white opacity-100 border-b-2 border-primary w-fit pb-1 text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm hover:text-primary transition-colors cursor-default">
              <IoMail className="text-primary text-lg" />
              <span>support@qurbanihat.com</span>
            </li>
            <li className="flex items-center gap-3 text-sm hover:text-primary transition-colors cursor-default">
              <FaPhoneAlt className="text-primary" />
              <span>+880 1234 567 890</span>
            </li>
            <li className="flex items-center gap-3 text-sm hover:text-primary transition-colors cursor-default">
              <FaMapMarkerAlt className="text-primary" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* 3. Social Links Section */}
        <div className="space-y-4">
          <h3 className="footer-title text-white opacity-100 border-b-2 border-primary w-fit pb-1 text-lg mb-4">Follow Us</h3>
          <p className="text-sm text-gray-300">Stay updated with our latest collections and tips.</p>
          <div className="flex gap-4">
            <a href="#" className="btn btn-circle btn-sm btn-outline hover:bg-primary border-gray-600 transition-all">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-outline hover:bg-primary border-gray-600 transition-all">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="btn btn-circle btn-sm btn-outline hover:bg-primary border-gray-600 transition-all">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="divider divider-neutral px-12 mt-12 opacity-30"></div>
      <div className="text-center text-sm text-gray-400">
        <p>©<span></span> {new Date().getFullYear()} - All right reserved by Md. Abdus Salam</p>
      </div>
    </footer>
  );
};

export default Footer;