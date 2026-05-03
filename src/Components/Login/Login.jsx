"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaLock,
  FaCheck,
  FaUndo,
  FaSpinner,
} from "react-icons/fa";

const Login = () => {
  // const [loading, setLoading] = useState(false);

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   const formData = new FormData(e.target);
  //   const { email, password } = Object.fromEntries(formData.entries());

  //   try {
  //     const { data, error } = await authClient.signIn.email({
  //       email,
  //       password,
  //       callbackURL: "/", // লগইন সফল হলে যেখানে রিডাইরেক্ট হবে
  //     }, {
  //       onRequest: () => {
  //         setLoading(true);
  //       },
  //       onSuccess: () => {
  //         setLoading(false);
  //         toast.success("Welcome back! Logging in...", {
  //           position: "top-center",
  //           autoClose: 2000,
  //           theme: "colored",
  //         });
  //       },
  //       onError: (ctx) => {
  //         setLoading(false);
  //         toast.error(ctx.error.message || "Invalid email or password!", {
  //           position: "top-center",
  //           theme: "dark",
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
      {/* Toast Container */}
      <ToastContainer />

      <div className="card w-full max-w-[500px] bg-base-100 shadow-2xl border border-gray-100 rounded-[2.5rem] overflow-hidden">
        <div className="h-2 bg-primary w-full"></div>

        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-gray-800 font-heading">
              Welcome <span className="text-primary">Back</span>
            </h1>
            <p className="text-gray-400 mt-2 font-medium">
              Log in to manage your animals and account
            </p>
          </div>
    {/* onSubmit={onSubmit} */}
          <form  className="space-y-6">
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
                placeholder="yourname@example.com"
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
              />
              <div className="flex justify-end mt-2">
                <Link href="/forgot-password" size="sm" className="text-xs text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>
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
                    <FaCheck /> Log In
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
            Don't have an account?
            <Link
              href="/register"
              className="text-primary font-bold ml-1 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;