import React from "react";
import collage from '../../../../assets/home/collage_1.webp' ;
import sign from '../../../../assets/home/sign.webp' ;
import { useInView } from 'react-intersection-observer';


const Section2 = React.forwardRef((props, sectionRef) => {
    // Intersection Observer hook for animations
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 50% of the section is visible  
    });

  return (
    <>
 <div className="flex font-sans flex-col lg:flex-row items-center justify-center min-h-screen bg-[#0f0f0f] text-white">
      {/* Left Column for Text */}
      <div className="flex-1 flex items-center justify-end  p-4">
        <div className="max-w-lg text-center lg:text-left">
          <h2 className="text-5xl text-center font-semibold pl-20  text-[#D8B069] tracking-widest  ">About</h2>
      
          <p className="text-medium -mx-20 my-5 text-left pr-14 leading-relaxed">
            Shayan Khan is a US-based Pakistani actor and film producer. He featured as 
            the lead actor in <i>Na Band Na Baraati</i>, a 2018 Pakistani romantic comedy film. 
            He produced <i>Money Back Guarantee</i>, a Pakistani film directed by Faisal Qureshi 
            and also featured as a lead actor in the movie. 
            <span className="text-[#D8B069] cursor-pointer"> See More...</span>
          </p>
          <div className="flex justify-end items-end">
            <img src={sign} alt="" className="items-end " />
        </div>
        </div>
        
      </div>
    

      {/* Right Column for Image */}
      <div className="flex-1 p-6">
        <img
          src={collage}
          alt="Shayan Khan"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    

    </>
  ) ;
});

export default Section2 ;