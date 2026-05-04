"use client";
import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { FaUser, FaEnvelope, FaIdBadge, FaArrowLeft, FaEdit } from "react-icons/fa";
import Image from "next/image";

const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();

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

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold mb-8 transition-colors">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-white">
          {/* Header/Cover */}
          <div className="h-40 bg-linear-to-r from-primary to-secondary relative">
            <div className="absolute -bottom-16 left-12">
              <div className="p-2 bg-white rounded-[2.5rem] shadow-xl overflow-hidden">
                
                <Image
                  src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`} 
                  alt="Profile" 
                  width={128} 
                  height={128} 
                  className="rounded-4xl object-cover"
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
              <button className="btn btn-outline border-gray-200 rounded-2xl gap-2 font-bold hover:bg-primary hover:border-primary transition-all">
                <FaEdit /> Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Info Card 1 */}
              <div className="flex items-center gap-5 p-6 bg-gray-50 rounded-4xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Email Address</p>
                  <p className="font-bold text-gray-700">{session.user.email}</p>
                </div>
              </div>

              {/* Info Card 2 */}
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
                type="button"
                className="relative group/update overflow-hidden btn border-none bg-linear-to-r from-blue-600 to-primary h-14 px-10 rounded-2xl text-white shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 font-black tracking-wide uppercase">
                  <svg 
                    className="w-5 h-5 group-hover/update:rotate-180 transition-transform duration-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Update Profile
                </span>
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white opacity-30 group-hover/update:animate-shine" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;