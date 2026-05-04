"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaSpinner, FaWeightHanging, FaCalendarAlt, FaPaw } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const AnimalCard = ({ animal }) => {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  const { data: session, isPending } = authClient.useSession();
  
  const animalId = animal._id || animal.id;
  const detailsPath = `/animals/${animalId}`;

  const handleNavigation = () => {
    setIsRedirecting(true);

    if (!session) {
      toast.info("Please login first to view details!", {
        position: "top-center",
        autoClose: 2000,
      });
      
      setTimeout(() => {
        router.push(`/login?callbackURL=${encodeURIComponent(detailsPath)}`);
      }, 1500);
    } else {
      router.push(detailsPath);
    }
  };

  if (isPending) {
    return (
      <div className="h-[450px] w-full bg-gray-100 rounded-[2.5rem] animate-pulse flex items-center justify-center">
        <FaSpinner className="animate-spin text-primary/30 text-3xl" />
      </div>
    );
  }

  return (
    <div className="group relative bg-white rounded-[2.5rem] p-3 shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-primary/20">
      
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden rounded-[2rem]">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Price Tag - Floating Gradient */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-2xl font-black shadow-lg backdrop-blur-sm bg-opacity-90">
          ৳ {animal.price}
        </div>

        {/* Breed Badge */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1 rounded-xl text-xs font-bold text-primary flex items-center gap-2">
          <FaPaw /> {animal.breed}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-black text-gray-800 group-hover:text-primary transition-colors">
            {animal.name}
          </h3>
        </div>

        <p className="text-gray-500 text-sm line-clamp-2 mb-5 font-medium">
          {animal.description}
        </p>

        {/* Info Grid - More Colorful */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center gap-3 bg-primary/5 p-3 rounded-2xl border border-primary/10">
            <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
              <FaWeightHanging size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Weight</p>
              <p className="text-sm font-bold text-gray-700">{animal.weight}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-secondary/5 p-3 rounded-2xl border border-secondary/10">
            <div className="bg-white p-2 rounded-lg text-secondary shadow-sm">
              <FaCalendarAlt size={14} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Age</p>
              <p className="text-sm font-bold text-gray-700">{animal.age}</p>
            </div>
          </div>
        </div>

        {/* Action Button - Animated Gradient */}
        <button
          onClick={handleNavigation}
          disabled={isRedirecting}
          className="relative w-full overflow-hidden group/btn btn border-none bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white rounded-2xl h-14 font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 disabled:opacity-70"
        >
          {isRedirecting ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span className="tracking-wide">View Details</span>
              <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </div>
          )}
          
          {/* Subtle Shine Effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;