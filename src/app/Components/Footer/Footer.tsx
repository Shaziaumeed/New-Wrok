import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="bg-[#1C1E53] text-white px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{`{Finsweet}`}</h2>
            <p className="text-gray-300 mb-6 max-w-md font-sans">
              We are always open to discuss your project and improve your
              online presence.
            </p>

            <div className="bg-[#FCD980] text-black p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-semibold">Email me at</h3>
                <p className="text-sm font-sans">contact@website.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Call us</h3>
                <p className="text-sm font-sans">0927 6277 28525</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Lets Talk!</h2>
            <p className="text-gray-300 mb-6 max-w-md font-sans">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#FCD980]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FCD980]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FCD980]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#FCD980]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white border-t px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            Copyright 2021, Finsweet.com
          </p>
          <ul className="flex gap-6 text-sm font-normal  text-gray-800">
            <li><a href="#" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="hover:text-indigo-600">About us</a></li>
            <li><a href="#" className="hover:text-indigo-600">Features</a></li>
            <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-600">FAQ</a></li>
            <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
