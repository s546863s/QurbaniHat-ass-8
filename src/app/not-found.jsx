"use client"; // এই লাইনটি যোগ করা বাধ্যতামূলক


import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            <h1 className="text-4xl font-bold text-error">Oops! Something went wrong</h1>
            <p className="text-gray-500">We couldn't load this page. Please try again.</p>
            
            {/* DaisyUI বাটন ব্যবহার করে ট্রাই এগেইন বাটন দিতে পারেন */}
           <Link className="btn btn-primary" href={'/'}>Go Home</Link>
        </div>
    );
};

export default ErrorPage;