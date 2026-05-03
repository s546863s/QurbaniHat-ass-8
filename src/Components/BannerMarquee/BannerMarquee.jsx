import React from "react";
import Marquee from "react-fast-marquee";
import { FaBolt, FaTruck, FaLeaf, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const BannerMarquee = () => {
  const announcements = [
    { text: "Exclusive Discounts on Qurbani Animals!", icon: <FaBolt className="text-yellow-400" /> },
    { text: "Free Home Delivery within selected areas.", icon: <FaTruck /> },
    { text: "100% Organic & Naturally Fed Livestock.", icon: <FaLeaf className="text-green-400" /> },
    { text: "Book your favorite animal today!", icon: <FaStar className="text-orange-400" /> },
    { text: "Visit our farm to see animals in person.", icon: <FaMapMarkerAlt /> }
  ];

  return (
    <div className="relative bg-primary overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-b border-white/10">
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary opacity-20 pointer-events-none z-10"></div>
      
      <Marquee 
        speed={70} 
        gradient={false} 
        pauseOnHover={true} 
        className="py-4"
      >
        {announcements.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 mx-16 group"
          >
           
            <span className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform duration-300 text-white shadow-sm">
              {item.icon}
            </span>
            
            <span className="text-white text-lg font-bold tracking-wide uppercase font-heading italic">
              {item.text}
            </span>
            
            
            <div className="ml-16 h-2 w-2 rounded-full bg-white/40 shadow-glow"></div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BannerMarquee;