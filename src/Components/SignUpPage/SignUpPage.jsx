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
import { redirect, useRouter } from "next/navigation";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // email with signUp
  const handelSignUpFunc = async (data) => {
    setLoading(true);
    const { FullName, imageUrl, email, password } = data;

    try {
      const { data: res, error } = await authClient.signUp.email({
        name: FullName,
        email: email,
        password: password,
        image: imageUrl,
        callbackURL: "/",
      });

      if (res) {
        toast.success("Account created successfully!");
        reset();
        router.push("/");
        //  redirect("/login")
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

  // Google with sin up
  const handleGoogleSignUp = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google sign up failed!");
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

          {/* google sinUp button */}
          <div className="mb-6">
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="btn btn-outline w-full border-gray-200 hover:border-primary hover:bg-primary/5 rounded-2xl flex items-center justify-center gap-3 normal-case font-bold text-gray-600 transition-all active:scale-95 py-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.64,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.251-2.22,4.147-4.088,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              Sign up with Google
            </button>

            <div className="divider my-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
              Or with email
            </div>
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
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${
                  errors.FullName ? "border-red-400" : ""
                }`}
              />
              {errors.FullName && (
                <span className="text-red-500 text-xs mt-1 ml-1 font-medium">
                  {errors.FullName.message}
                </span>
              )}
            </div>

            {/* Profile Image URL */}
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
                    value:
                      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|avif))(\?.*)?$/i,
                    message:
                      "Please enter a valid image URL (jpg, png, webp, etc.)",
                  },
                })}
                type="text"
                placeholder="https://example.com/photo.jpg"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${
                  errors.imageUrl ? "border-red-400" : ""
                }`}
              />
              {errors.imageUrl && (
                <span className="text-red-500 text-xs mt-1 ml-1 font-medium">
                  {errors.imageUrl.message}
                </span>
              )}
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
                    message: "Invalid email format",
                  },
                })}
                type="email"
                placeholder="salam@example.com"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${
                  errors.email ? "border-red-400" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1 ml-1 font-medium">
                  {errors.email.message}
                </span>
              )}
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
                  minLength: { value: 8, message: "Minimum 8 characters" },
                })}
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200 ${
                  errors.password ? "border-red-400" : ""
                }`}
              />
              {errors.password && (
                <span className="text-red-500 text-xs mt-1 ml-1 font-medium">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary flex-1 text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all disabled:bg-gray-400"
              >
                {loading ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <>
                    <FaCheck /> Create Account
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

          <p className="text-center mt-10 text-sm text-gray-500 font-medium">
            Already have an account?
            <Link
              href="/login"
              className="text-primary font-bold ml-1 hover:underline transition-all"
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