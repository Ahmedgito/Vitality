import React from "react";
import img1 from "../../../../assets/home/01.webp";

const Section1 = React.forwardRef((props, sectionRef) => {
  return (
    <section className="bg-[#1a1a1a] text-[#e9debf] py-16 px-8 relative">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold uppercase mb-8 animate-slideInLeft">
          About Us
        </h2>

        <p className="text-lg leading-relaxed mb-12 max-w-3xl mx-auto animate-slideInRight">
          We are pioneers in creating luxurious, sustainable, and architecturally stunning real estate developments that redefine the urban landscape. Our passion lies in blending cutting-edge design with high-quality materials to craft spaces that reflect timeless elegance and provide unmatched comfort. Every project is built on our commitment to excellence, ensuring the highest standards of living for our clients.
        </p>

        {/* Image and Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-center">
          {/* Creative Image with Parallax/Overlay */}
          <div className="relative animate-slideInLeft">
            <img
              src={img1}
              alt="About Us"
              className="rounded-lg shadow-lg object-cover w-full h-[400px] transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]/80 rounded-lg"></div>
          </div>

          <div className="space-y-6 animate-slideInRight">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🏛️</div>
              <p className="text-left">
                <strong>Architectural Excellence:</strong> We collaborate with world-renowned architects to deliver projects that are both aesthetically beautiful and functionally superior.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🌿</div>
              <p className="text-left">
                <strong>Sustainability:</strong> Our commitment to green building practices ensures that our developments are environmentally responsible and energy-efficient.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">🤝</div>
              <p className="text-left">
                <strong>Customer-Centric Approach:</strong> We place the utmost importance on our clients’ needs and ensure personalized service every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section1;

