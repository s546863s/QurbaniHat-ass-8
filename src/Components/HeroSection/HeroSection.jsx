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
    <div className="relative  w-full h-[70vh] md:h-[80vh] overflow-hidden shadow-2xl ">
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
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
            <div className={`max-w-3xl text-white space-y-8 transition-all duration-1000 transform ${activeSlide === banner.id ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              
              {/* Highlighted Title */}
              <h1 className="text-2xl md:text-6xl font-black tracking-tight leading-[1.1] drop-shadow-2xl">
                {banner.title.split(" ").map((word, i) => (
                  
                  <span key={i} className={i >= 3 ? "text-primary" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </h1>

              {/* Refined Description */}
              <p className="text-lg  text-gray-200 opacity-95 mx-auto max-w-xl leading-relaxed font-medium">
                {banner.desc}
              </p>

              {/* Premium Button with Shine Effect */}
              <div className="mb-2">
                <Link
                  href="/animals"
                  className="relative mb-16 overflow-hidden group/btn btn border-none bg-linear-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-2xl h-14 font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-70"
                >
                  <span className="relative z-10 font-black text-xl uppercase tracking-wider">
                    Browse All Animals
                  </span>
                  {/* Shine Animation */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white opacity-30 group-hover/btn:animate-shine" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-10  left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/20 backdrop-blur-md p-3 rounded-full">
        <button
          onClick={() => setActiveSlide(1)}
          className={`h-2 rounded-full transition-all duration-500 ${
            activeSlide === 1 ? "bg-primary w-12" : "bg-white/40 w-4 hover:bg-white/60"
          }`}
        ></button>
        <button
          onClick={() => setActiveSlide(2)}
          className={`h-2 rounded-full transition-all duration-500 ${
            activeSlide === 2 ? "bg-primary w-12" : "bg-white/40 w-4 hover:bg-white/60"
          }`}
        ></button>
      </div>
    </div>
  );
};

export default HeroSection;