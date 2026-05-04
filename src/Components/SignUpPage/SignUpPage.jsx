"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaLink,
  FaEnvelope,
  FaLock,
  FaCheck,
  FaUndo,
  FaSpinner,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const router = useRouter(); 
  

  const handelSignUpFunc = async (data) => {
    setLoading(true);
    const { FullName, imageUrl, email, password } = data;

    try {
      const { data: res, error } = await authClient.signUp.email({
        name: FullName,
        email: email,
        password: password,
        image: imageUrl,
         
      });

      if (res) {
        toast.success("Account created successfully!");
        reset(); 
        
        
        router.push("/"); 
      }

      if (error) {
        toast.error(error.message || "Signup failed!");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 bg-base-200">
      <ToastContainer position="top-center" />

      <div className="card w-full max-w-[550px] bg-base-100 shadow-2xl border border-gray-100 rounded-[2.5rem] overflow-hidden transform transition-all hover:shadow-primary/10">
        <div className="h-3 bg-primary w-full"></div>

        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-gray-800 tracking-tight">
              Join <span className="text-primary italic">Us</span>
            </h1>
            <p className="text-gray-400 mt-2 font-medium">
              Start your journey with the best animal community
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handelSignUpFunc)}>
            {/* Full Name */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaUser className="text-primary text-xs" /> Full Name
                </span>
              </label>
              <input
                {...register("FullName", { required: "Name is required" })}
                type="text"
                placeholder="Md. Abdus Salam"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${errors.FullName ? 'border-red-400' : ''}`}
              />
              {errors.FullName && <span className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.FullName.message}</span>}
            </div>

            {/* Image URL with Regex Validation */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaLink className="text-primary text-xs" /> Profile Image URL
                </span>
              </label>
              <input
                {...register("imageUrl", { 
                  required: "Image URL is required",
                  pattern: {
                    value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|avif))(\?.*)?$/i,
                    message: "Please enter a valid image URL (jpg, png, webp, etc.)"
                  }
                })}
                type="text"
                placeholder="https://example.com/photo.jpg"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${errors.imageUrl ? 'border-red-400' : ''}`}
              />
              {errors.imageUrl && <span className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.imageUrl.message}</span>}
            </div>

            {/* Email Address */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-primary text-xs" /> Email Address
                </span>
              </label>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format"
                  }
                })}
                type="email"
                placeholder="salam@example.com"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${errors.email ? 'border-red-400' : ''}`}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaLock className="text-primary text-xs" /> Password
                </span>
              </label>
              <input
                {...register("password", { 
                  required: "Password is required",
                  minLength: { value: 8, message: "Minimum 8 characters" }
                })}
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${errors.password ? 'border-red-400' : ''}`}
              />
              {errors.password && <span className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.password.message}</span>}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary flex-1 text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
              >
                {loading ? <FaSpinner className="animate-spin" /> : <><FaCheck /> Create Account</>}
              </button>
              <button
                type="button"
                onClick={() => reset()}
                className="btn btn-outline btn-secondary rounded-xl hover:bg-secondary hover:text-white transition-all"
              >
                <FaUndo /> Reset
              </button>
            </div>
          </form>

          <p className="text-center mt-10 text-sm text-gray-500 font-medium">
            Already have an account? 
            <Link href="/login" className="text-primary font-bold ml-1 hover:underline transition-all">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;