import Image from "next/image";

export default function FreeSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image Section */}
        <div className="flex justify-center order-2 md:order-1">
          <Image
            src="/Images/image3.png"
            alt="Features Illustration"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold text-gray-800 mb-3">
            Free Revision Rounds
          </p>
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug">
            Get free Revisions and one week <br />
            of free maintenance
          </h2>
          <p className="mt-5 text-gray-500 text-base leading-relaxed font-sans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam.
          </p>
        </div>
      </div>
    </section>
  );
}
