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
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden shadow-2xl rounded-b-[2rem] md:rounded-b-[4rem]">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === banner.id ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image - Optimized */}
          <Image
            src={banner.image}
            alt="Banners"
            fill
            priority
            quality={100} // ইমেজের সর্বোচ্চ কোয়ালিটি নিশ্চিত করবে
            className="object-cover object-center transition-transform duration-[5000ms] scale-105 active-zoom"
            // scale-105 এবং transition দিয়ে একটি ধীরগতির জুম এফেক্ট তৈরি হবে যা দেখতে প্রিমিয়াম লাগে
          />
          
          {/* Overlay and Centered Content */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl text-white space-y-6 md:space-y-8">
              <h1 className="text-4xl md:text-7xl font-extrabold font-heading leading-tight tracking-tight drop-shadow-2xl">
                {banner.title}
              </h1>
              <p className="text-lg md:text-2xl font-light opacity-95 mx-auto max-w-2xl drop-shadow-lg">
                {banner.desc}
              </p>
              <div className="pt-6">
                <Link
                  href="/animals"
                  className="btn btn-primary btn-lg text-white border-none shadow-2xl px-12 rounded-full hover:scale-110 transition-all duration-300 bg-gradient-to-r from-emerald-500 to-green-600"
                >
                  Browse All Animals
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators - Styled */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full">
        <button 
          onClick={() => setActiveSlide(1)}
          className={`h-2 rounded-full transition-all duration-500 ${activeSlide === 1 ? 'bg-primary w-12' : 'bg-white/40 w-4'}`}
        ></button>
        <button 
          onClick={() => setActiveSlide(2)}
          className={`h-2 rounded-full transition-all duration-500 ${activeSlide === 2 ? 'bg-primary w-12' : 'bg-white/40 w-4'}`}
        ></button>
      </div>
    </div>
  );
};

export default HeroSection;