"use client";
import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import {
  FaEnvelope,
  FaLock,
  FaCheck,
  FaUndo,
  FaSpinner,
} from "react-icons/fa";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handelLoginFunc = async (data) => {
    setLoading(true);
    try {
      const { data: res, error } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (res) {
        toast.success("Welcome back! Login successful.");
        router.push("/"); // go home
      }

      if (error) {
        toast.error(error.message || "Invalid email or password!");
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

      <div className="card w-full max-w-[500px] bg-base-100 shadow-2xl border border-gray-100 rounded-[2.5rem] overflow-hidden transform transition-all hover:shadow-primary/10">
        {/* Top Decorative Border */}
        <div className="h-3 bg-primary w-full"></div>

        <div className="card-body p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-gray-800 tracking-tight">
              Welcome <span className="text-primary italic">Back</span>
            </h1>
            <p className="text-gray-400 mt-2 font-medium">
              Log in to manage your animals and account
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handelLoginFunc)}>
            {/* Email Field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-primary text-xs" /> Email Address
                </span>
              </label>
              <input
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format"
                  }
                })}
                placeholder="yourname@example.com"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${errors.email ? 'border-red-400' : ''}`}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 ml-1 font-medium">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaLock className="text-primary text-xs" /> Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="••••••••"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${errors.password ? 'border-red-400' : ''}`}
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1 ml-1 font-medium">
                  {errors.password.message}
                </span>
              )}
              
              <div className="flex justify-end mt-2">
                <Link href="/forgot-password" size="sm" className="text-xs text-primary font-bold hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary flex-1 text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all disabled:bg-gray-400"
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
                type="button"
                onClick={() => reset()}
                disabled={loading}
                className="btn btn-outline btn-secondary rounded-xl hover:bg-secondary hover:text-white transition-all"
              >
                <FaUndo /> Reset
              </button>
            </div>
          </form>

          {/* Footer Navigation */}
          <p className="text-center mt-10 text-sm text-gray-500 font-medium">
            Don't have an account?
            <Link
              href="/signUp"
              className="text-primary font-bold ml-1 hover:underline transition-all"
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