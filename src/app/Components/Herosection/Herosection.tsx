"use client";
import Image from "next/image";

export default function Herosection() {
  return (
    <section className="bg-[#101345] text-white py-36 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            All the features <br /> you need
          </h2>
          <p className="text-gray-300 mb-10 font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-yellow-200 text-[#101345] font-sans px-7 py-3 rounded-full hover:bg-yellow-300 transition">
            View Pricing
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center relative">
          <Image
            src="/Images/image1.svg"
            alt="Features Illustration"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
