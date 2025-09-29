"use client";

import { Pencil, Ruler, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12 leading-14">
          The benefits of working <br/> with our team
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-4">
              <Pencil className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Customize with ease
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-4">
              <Ruler className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Perfectly Responsive
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Friendly Support
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
