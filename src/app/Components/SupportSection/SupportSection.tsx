import Image from "next/image";
export default function SupportSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-3 px-8">24/7 Support</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug px-8">
            Working with us, you will be <br />
            getting 24/7 priority support
          </h2>
          <p className="mt-5 text-gray-500 text-base leading-relaxed font-sans px-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <Image
                     src="/Images/image4.png" 
                     alt="Client-first example"
                      width={500}
                     height={400}
                     className="  object-cover"
                   />
        </div>
      </div>
    </section>
  );
}
