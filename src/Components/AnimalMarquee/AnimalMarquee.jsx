"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaShieldAlt, FaCheckCircle, FaTruck, FaAward, FaLeaf } from "react-icons/fa";

const AnimalMarquee = () => {
  const highlights = [
    { text: "100% Healthy & Vaccinated Livestock", icon: <FaShieldAlt /> },
    { text: "Direct Farm-to-Home Delivery", icon: <FaTruck /> },
    { text: "Purely Organic & Naturally Fed", icon: <FaLeaf /> },
    { text: "Live Weight Verification Facility", icon: <FaAward /> },
    { text: "Best Market Price Guaranteed", icon: <FaCheckCircle /> },
  ];

  return (
    <div className="bg-emerald-50 border-y border-emerald-100 py-3 shadow-sm">
      <Marquee 
        speed={55} 
        gradient={true} 
        gradientColor={[249, 250, 251]} 
        gradientWidth={100} 
        pauseOnHover={true}
      >
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center gap-3 mx-12 group cursor-pointer">
            <span className="text-xl text-primary bg-white p-2 rounded-lg shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {item.icon}
            </span>
            
            <span className="text-gray-700 text-lg font-bold font-heading tracking-tight">
              {item.text}
            </span>
            
            <div className="ml-12 h-2 w-2 rounded-full bg-primary/30"></div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AnimalMarquee;