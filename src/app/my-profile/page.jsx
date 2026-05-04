"use client";
import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaUser, FaEnvelope, FaIdBadge, FaArrowLeft, FaEdit, FaTimes, FaImage, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="text-center bg-white p-10 rounded-[2.5rem] shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Please log in to view your profile.</h2>
          <Link href="/login" className="btn btn-primary rounded-xl px-8">Go to Login</Link>
        </div>
      </div>
    );
  }

const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    try {
      const { data, error } = await authClient.updateUser({
        name: name,
        image: image,
      });

      if (error) {
        
        toast.error(error.message || "Failed to update profile");
        return;
      }

      
      toast.success("Profile updated successfully!");
      setIsModalOpen(false); 
      
    } catch (err) {
      
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold mb-8 transition-colors">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-white">
          {/* Header/Cover */}
          <div className="h-40 bg-gradient-to-r from-primary to-secondary relative">
            <div className="absolute -bottom-16 left-12">
              <div className="p-2 bg-white rounded-[2.5rem] shadow-xl overflow-hidden">
                <Image
                  src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`} 
                  alt="Profile" 
                  width={128} 
                  height={128} 
                  className="rounded-4xl object-cover h-32 w-32"
                />
              </div>
            </div>
          </div>

          <div className="pt-20 pb-12 px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl font-black text-gray-800">{session.user.name}</h1>
                <p className="text-primary font-bold">Verified Member</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn btn-outline border-gray-200 rounded-2xl gap-2 font-bold hover:bg-primary hover:border-primary transition-all"
              >
                <FaEdit /> Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-4xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Email Address</p>
                  <p className="font-bold text-gray-700">{session.user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-4xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-secondary shadow-sm">
                  <FaIdBadge />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Account ID</p>
                  <p className="font-bold text-gray-700">#{session.user.id.substring(0, 8)}</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-end">
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="relative group/update overflow-hidden btn border-none bg-gradient-to-r from-blue-600 to-primary h-14 px-10 rounded-2xl text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 font-black tracking-wide uppercase">
                  <svg className="w-5 h-5 group-hover/update:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Update Information
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL SECTION --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-gray-800 flex items-center gap-2">
                   Update Profile
                </h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 bg-gray-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-6">
  {/* Name Input */}
  <div className="space-y-2">
    <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
    <div className="relative">
      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input 
        name="name" 
        type="text" 
        defaultValue={session.user.name}
        required
        placeholder="Enter your name"
        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-bold text-gray-700"
      />
    </div>
  </div>

  {/* Photo URL Input */}
  <div className="space-y-2">
    <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">Photo URL</label>
    <div className="relative">
      <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input 
        name="image" 
        type="url" 
        defaultValue={session.user.image}
        required
        placeholder="https://example.com/photo.jpg"
        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white outline-none transition-all font-bold text-gray-700"
      />
    </div>
  </div>

  <div className="pt-4">
    <button
      type="submit"
      className="w-full bg-primary hover:bg-primary-focus text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/30 transition-all active:scale-95 flex items-center justify-center gap-2"
    >
      <FaCheckCircle /> Save Changes
    </button>
  </div>
</form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;