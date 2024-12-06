//text.jsx//

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./OverlapComponent.css";

const OverlapComponent = ({ imageSrc, title }) => {
  const overlapContainerRef = useRef(null);
  const rectLayerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);


  // GSAP entry animation for the overlap container
  useEffect(() => {
    gsap.fromTo(
      overlapContainerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 , ease: "power2.out" }
    );
  }, []); 

  // GSAP hover effect for rect-layer (only for desktop)
  useEffect(() => {
    if (isHovered) {
      gsap.to(rectLayerRef.current, { y: -55, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(rectLayerRef.current, { y: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [isHovered]);

  



  return (

    <div>
      
    <div
      ref={overlapContainerRef}
      className="overlap-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-layer">
        <img src="./BACKT.png" alt="Background" className="image image-1" />
        <div className="rect-layer">
          <div className="rect" ref={rectLayerRef}>
            <img src={imageSrc} alt={title} className="rect-image" />
          </div>
        </div>
        <img src="./FRONT.png" alt="Top Layer" className="image image-3" />
      </div>
      <div className="text-layer">
        <h1 className="title font-nooksbold">{title}</h1>
      </div>
    </div>
    </div>
  );
};

export default OverlapComponent;
