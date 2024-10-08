import React from "react";
import { useInView } from 'react-intersection-observer';
import h_img from '../../../../assets/home/homee.webp'; // Ensure this path is correct

const Section1 = React.forwardRef((props, sectionRef) => {
  // Intersection Observer hook for animations
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5,    // Trigger when 50% of the section is visible  
  });

  return (
    <section 
        ref={inViewRef} data-title="Home"
        className="bg-cover h-full w-full relative">
       <img src={h_img} alt="Descriptive alt text" className="object-cover h-full w-full" />
    

    </section>
  );
});

export default Section1;
