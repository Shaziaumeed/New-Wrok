"use client";
import { CircleDot, Square, Globe2, Waves, MapPin } from "lucide-react";

export default function LogoSection() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 text-gray-700 text-center">
        
        {/* Stats */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800">100.000+</h2>
          <p className="text-gray-500 py-2 font-sans">Figma Users</p>
        </div>

        {/* Icons in same line */}
       <div className="flex flex-wrap justify-center items-center gap-12">
  <div className="flex items-center gap-2">
    <CircleDot className="w-10 h-10" />
    <span className="font-bold">logoipsum</span>
  </div>
  <div className="flex items-center gap-2">
    <Square className="w-10 h-10" />
    <span className="font-bold">logoipsum</span>
  </div>
  <div className="flex items-center gap-2">
    <Globe2 className="w-10 h-10" />
    <span className="font-bold">logoipsum</span>
  </div>
  <div className="flex items-center gap-2">
    <Waves className="w-10 h-10" />
    <span className="font-bold">logoipsum</span>
  </div>
  <div className="flex items-center gap-2">
    <MapPin className="w-10 h-10" />
    <span className="font-bold">logoipsum</span>
  </div>
</div>

      </div>
    </section>
  );
}
