"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import './card.css';

const Card = ({ imageSrc, title, description }) => {
  const letterBackRef = useRef(null);
  const mainImageRef = useRef(null);
  const letterFrontRef = useRef(null);
  const textRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false); // Track hover state

  useEffect(() => {
    // Initial GSAP animations
    gsap.fromTo(
      letterBackRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      mainImageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      letterFrontRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (isHovered) {
      gsap.to(mainImageRef.current, { y: -50, scale: 1, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(mainImageRef.current, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
    }
  }, [isHovered]); // Trigger hover effect when `isHovered` changes

  return (
    <div className="bg-dark-white">
      <div
        className="card-container relative"
        onMouseEnter={() => setIsHovered(true)}  // Set hover state to true
        onMouseLeave={() => setIsHovered(false)} // Set hover state to false
      >
        {/* Letter Back */}
        <Image
          ref={letterBackRef}
          src="/Letter-Back.svg"
          alt="Letter Back"
          width={500}
          height={600}
          className="letter-back h-auto"
        />

        {/* Main Image */}
        <div ref={mainImageRef} className="main-image-container">
          <div className="rectangle">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={30}
            className="main-image h-auto p-4"
          />
          </div>
        </div>

        {/* Letter Front */}
        <div className="text-container">
          <div ref={textRef} className="text-content">
            <h3 className="title font-nooksbold">{title}</h3>
            <p className="description">{description}</p>
          </div>
        </div>


        <Image
          ref={letterFrontRef}
          src="/Letter-Front.svg"
          alt="Letter Front"
          width={506}
          height={300}
          className="letter-front h-auto"
        />
      </div>
    </div>
  );
};

export { Card };
