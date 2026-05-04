"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";


import {
  FaUser,
  FaLink,
  FaEnvelope,
  FaLock,
  FaCheck,
  FaUndo,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {


   const {register, handleSubmit, watch, formState: { errors },} =  useForm();
  
  

  
    const handelSignUpFunc = async(data) =>{
     
  
      console.log(data);

      const {FullName, imageUrl, email, password} = data;

      console.log(FullName, imageUrl, email, password)
  
      const {data: res, error} = await authClient.signUp.email(
        {
          name: FullName, // required
          email: email, // required
          password: password, // required
          image: imageUrl,
          callbackURL: "/",
        }
      );

      console.log(res, error);
  
if(res){
  alert(res.message)
}

if(error){
  alert("Log in SecessFul");
}

    }


  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10  bg-base-200">
      

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

          <form className="space-y-5" onSubmit={handleSubmit(handelSignUpFunc)}>
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaUser className="text-primary text-xs" /> Full Name
                </span>
              </label>
              <input
              {...register("FullName", { required: "Full Name Field is required" })} 
                type="text"
                placeholder="Ex: Md. Abdus Salam"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                
              />
                         {errors.FullName && <p className="text-red-500 mt-1">{errors.FullName.message}</p>}

            </div>

            {/* Image URL Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaLink className="text-primary text-xs" /> Profile Image URL
                </span>
              </label>
              <input
            {...register("imageUrl", { required: "Image url Field is required" })} 
              type="text"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
              />
         {errors.imageUrl && <p className="text-red-500 mt-1">{errors.imageUrl.message}</p>}

            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-primary text-xs" /> Email Address
                </span>
              </label>
              <input
               {...register("email", { required: "Email Field is required" })} 
              type="email"
                placeholder="john@example.com"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                
              />
             {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}

            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaLock className="text-primary text-xs" /> Password
                </span>
              </label>
              <input
               {...register("password", { required: "Password Field is required" })} 
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                
              />
                         {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}

              <label className="label">
                <span className="label-text-alt text-gray-400 italic">
                  Must be 8+ chars with 1 uppercase & 1 number
                </span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="btn btn-primary flex-1 text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 transition-all"
              >
                <FaCheck /> SignUp
              </button>
              <button
                type="reset"
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