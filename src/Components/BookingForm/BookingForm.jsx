"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaShoppingCart, FaSpinner } from "react-icons/fa";

const BookingForm = ({ animalName, user }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
    }
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setTimeout(() => {
      toast.success(`Successfully booked ${animalName}!`);
      reset();
      setLoading(false);
    }, 1500);
  };

  if (!user) {
    return (
      <div className="bg-orange-50 border border-orange-200 p-6 rounded-3xl text-center">
        <p className="text-orange-700 font-bold">Please login to book this animal.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-50 p-6 rounded-3xl border border-gray-100">
      <h3 className="text-xl font-black text-gray-800 mb-4">Book This Animal</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="input input-bordered w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <input
            {...register("email", { required: true })}
            placeholder="Your Email"
            className="input input-bordered w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <input
            {...register("phone", { required: true })}
            placeholder="Phone Number"
            className="input input-bordered w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <input
            {...register("address", { required: true })}
            placeholder="Delivery Address"
            className="input input-bordered w-full rounded-xl"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full text-white rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all"
      >
        {loading ? <FaSpinner className="animate-spin" /> : <div className="flex items-center gap-2"><FaShoppingCart /> Confirm Booking</div>}
      </button>
    </form>
  );
};

export default BookingForm;