"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 1 ? 2 : 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    {
      id: 1,
      image: "/banner1.png", 
      title: "Find Your Perfect Qurbani Animal",
      desc: "Explore the best collection of healthy, organic, and verified livestock for your sacred sacrifice.",
    },
    {
      id: 2,
      image: "/banner2.png", 
      title: "Fresh & Healthy Livestock",
      desc: "Get your desired cow or goat from the comfort of your home with guaranteed quality.",
    },
  ];

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden   shadow-2xl">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === banner.id ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={banner.image}
            alt="Banners"
            fill
            priority
            className="object-fill"
            
          />
          
          {/* Overlay and Centered Content */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl text-white space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight">
                {banner.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mx-auto max-w-lg">
                {banner.desc}
              </p>
              <div className="pt-4">
                <Link
                  href="/animals"
                  className="btn btn-primary btn-lg text-white border-none shadow-lg px-10 hover:scale-105 transition-transform"
                >
                  Browse All Animals
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        <button 
          onClick={() => setActiveSlide(1)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === 1 ? 'bg-primary w-10' : 'bg-white/50'}`}
        ></button>
        <button 
          onClick={() => setActiveSlide(2)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === 2 ? 'bg-primary w-10' : 'bg-white/50'}`}
        ></button>
      </div>
    </div>
  );
};

export default HeroSection;