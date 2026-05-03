"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import Link from "next/link";
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

const SignUpPage = () => {

    
  const [loading, setLoading] = useState(false);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = new FormData(e.target);
  //   const { name, image, email, password } = Object.fromEntries(formData.entries());

  //   try {
  //     const { data, error } = await authClient.signUp.email({
  //       email,
  //       password,
  //       name,
  //       image: image || "",
  //       callbackURL: "/", 
  //     }, {
  //       onRequest: () => {
  //         setLoading(true);
  //       },
  //       onSuccess: () => {
  //         setLoading(false);
  //         toast.success("Account created successfully! Redirecting...", {
  //           position: "top-center",
  //           autoClose: 3000,
  //           theme: "colored",
  //         });
  //         e.target.reset(); 
  //       },
  //       onError: (ctx) => {
  //         setLoading(false);
  //         toast.error(ctx.error.message || "Something went wrong!", {
  //          position: "top-center",
  //           theme: "colored",
  //         });
  //       },
  //     });

  //     if (error) {
        
  //       toast.error(error.message);
  //     }
  //   } catch (err) {
  //     setLoading(false);
  //     toast.error("An unexpected error occurred.");
  //   }
  // };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 bg-base-200">
      {/* Toast Container  */}
      <ToastContainer />

      <div className="card w-full max-w-[500px] bg-base-100 shadow-2xl border border-gray-100 rounded-[2.5rem] overflow-hidden">
        <div className="h-2 bg-primary w-full"></div>

        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-800 font-heading">
              Join <span className="text-primary">Us</span>
            </h1>
            <p className="text-gray-400 mt-2 font-medium">
              Create your account to find the best animals
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaUser className="text-primary text-xs" /> Full Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Ex: Md. Abdus Salam"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                required
              />
            </div>

            {/* Image URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaLink className="text-primary text-xs" /> Profile Image URL
                </span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-primary text-xs" /> Email Address
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaLock className="text-primary text-xs" /> Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                required
                minLength={8}
              />
              <label className="label">
                <span className="label-text-alt text-gray-400 italic">
                  Must be 8+ chars with 1 uppercase & 1 number
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary flex-1 text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 transition-all disabled:bg-gray-400"
              >
                {loading ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <>
                    <FaCheck /> SignUp
                  </>
                )}
              </button>
              <button
                type="reset"
                disabled={loading}
                className="btn btn-outline btn-secondary rounded-xl hover:scale-105 transition-all"
              >
                <FaUndo /> Reset
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <p className="text-center mt-8 text-sm text-gray-500">
            Already have an account?
            <Link
              href="/login"
              className="text-primary font-bold ml-1 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;