"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

import {
  FaEnvelope,
  FaLock,
  FaCheck,
  FaUndo,
} from "react-icons/fa";

const Login = () => {
  const {register, handleSubmit, watch, formState: { errors },} =  useForm();

  

  const handelLoginFunc = async(data) =>{
  
    console.log(data);

    const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});

console.log(res, error)

  }



  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-10 bg-base-200">
     

      <div className="card w-full max-w-[500px] bg-base-100 shadow-2xl border border-gray-100 rounded-[2.5rem] overflow-hidden">
        {/* Top Decorative Border */}
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

          <form className="space-y-6" onSubmit={handleSubmit(handelLoginFunc)}>
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-primary text-xs" /> Email Address
                </span>
              </label>
              <input
                type="email"
                // name="email"
                 {...register("email", { required: "Email Field is required" })} 
                placeholder="yourname@example.com"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                // required
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
                type="password"
                // name="password"
                 {...register("password", { required: "Password Field is required" })} 
                placeholder="••••••••"
                className="input input-bordered w-full rounded-xl focus:outline-primary bg-gray-50 border-gray-200"
                // required
              />
              {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
              <div className="flex justify-end mt-2">
                <Link href="/forgot-password" size="sm" className="text-xs text-primary hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button

                type="submit"
                className="btn btn-primary flex-1 text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-105 transition-all"
              >
                <FaCheck /> Log In
              </button>
              <button
                type="reset"
                className="btn btn-outline btn-secondary rounded-xl hover:scale-105 transition-all"
              >
                <FaUndo /> Reset
              </button>
            </div>
          </form>

          {/* Footer Navigation */}
          <p className="text-center mt-8 text-sm text-gray-500">
            Do not have an account?
            <Link
              href="/signUp"
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