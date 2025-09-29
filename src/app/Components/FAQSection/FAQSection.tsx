"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState(1); // default open

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-12 ">
            Frequently <br/>asked question
          </h2>
          <a
            href="#"
            className="text-indigo-600 hover:underline font-bold"
          >
            Contact us for more info
          </a>
        </div>

        {/* Right Section (FAQ) */}
        <div className="flex flex-col space-y-6">
          {/* FAQ 1 */}
          <div className="border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(1)}
            >
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 font-semibold">01</span>
                <h3 className="font-bold text-lg">
                  How much time does it take ?
                </h3>
              </div>
              <div className="text-gray-500">
                {openId === 1 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </div>
            {openId === 1 && (
              <p className="mt-3 text-gray-600 leading-relaxed font-sans">
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black, and the stars had ceased to twinkle.
              </p>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(2)}
            >
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 font-semibold">02</span>
                <h3 className="font-bold text-lg">
                  What is your class naming convention ?
                </h3>
              </div>
              <div className="text-gray-500">
                {openId === 2 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </div>
            {openId === 2 && (
              <p className="mt-3 text-gray-600 leading-relaxed font-sans">
                We follow BEM and utility-first approach with Tailwind CSS for
                clean and scalable code.
              </p>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(3)}
            >
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 font-semibold">03</span>
                <h3 className="font-bold text-lg">How do we communicate ?</h3>
              </div>
              <div className="text-gray-500">
                {openId === 3 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </div>
            {openId === 3 && (
              <p className="mt-3 text-gray-600 leading-relaxed font-sans">
                We use Slack, Email, and regular video calls to stay aligned
                with our clients.
              </p>
            )}
          </div>

          {/* FAQ 4 */}
          <div className="border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(4)}
            >
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 font-semibold">04</span>
                <h3 className="font-bold text-lg">
                  I have a bigger project. Can you handle it ?
                </h3>
              </div>
              <div className="text-gray-500">
                {openId === 4 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </div>
            {openId === 4 && (
              <p className="mt-3 text-gray-600 leading-relaxed font-sans">
                Yes, our team is well equipped to manage small to enterprise-level
                projects with full dedication.
              </p>
            )}
          </div>

          {/* FAQ 5 */}
          <div className="border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(5)}
            >
              <div className="flex items-center gap-3">
                <span className="text-indigo-600 font-semibold">05</span>
                <h3 className="font-bold text-lg">
                  What is your class naming convention ?
                </h3>
              </div>
              <div className="text-gray-500">
                {openId === 5 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </div>
            {openId === 5 && (
              <p className="mt-3 text-gray-600 leading-relaxed font-sans">
                We strictly maintain readability and scalability in naming
                conventions using Tailwind and React best practices.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
