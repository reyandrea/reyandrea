"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../globals.css";

import Tiktok from "./tiktok";
import MailIcon from "./mail";
import GitHub from "./github";
import Instagram from "./insta";



// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ribbonRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    // Create the GSAP animation
    const ribbon = ribbonRef.current;
    const profile = profileRef.current;

    if (ribbon) {
      // GSAP animation to reverse the opacity
      gsap.to(ribbon, {
        opacity: 1, // Fade in (from fully transparent)
        ease: "power3.out", // Exponential-like easing
        scrollTrigger: {
          trigger: ribbon, // Element to trigger animation
          start: "bottom top", // Start when ribbon's bottom reaches the top of the viewport
          end: "center center", // End when ribbon's top reaches the center of the viewport
          scrub: 1, // Smooth interpolation during scroll
          toggleActions: "play none reverse none", // Ensure smooth reverse when scrolling up
          markers: false, // Debug markers (remove for production)
        },
      });
    }
    if (ribbon) {
      // GSAP animation to decrease the opacity
      gsap.to(ribbon, {
        opacity: 0, // Fade out when scoll down (from fully transparent)
        ease: "easeOutQuint",
        duration: 0.5,
        scrollTrigger: {
          trigger: ribbon, // Element to trigger animation
          start: "center top", // Start when ribbon's bottom reaches the top of the viewport
          end: "bottom bottom", // End when ribbon's center reaches the center of the viewport
          scrub: 1, // Smooth interpolation during scroll
          toggleActions: "play none reverse none", // Ensure smooth reverse when scrolling up
          markers: false, // Debug markers (remove for production)
        },
      });
    }
    if (profile) {
      // GSAP animation to reverse the opacity
      gsap.to(profile, {
        opacity: 1, // Fade in (from fully transparent)
        ease: "power3.out", // Exponential-like easing
        scrollTrigger: {
          trigger: profile, // Element to trigger animation
          start: "center bottom", // Start when ribbon's bottom reaches the top of the viewport
          end: "top bottom", // End when ribbon's top reaches the center of the viewport
          scrub: 1, // Smooth interpolation during scroll
          toggleActions: "play none reverse none", // Ensure smooth reverse when scrolling up
          markers: false, // Debug markers (remove for production)
        },
      });
    }
    if (profile) {
      // GSAP animation to decrease the opacity
      gsap.to(profile, {
        opacity: 0, // Fade out when scoll down (from fully transparent)
        ease: "linear",
        duration: 0.5,
        scrollTrigger: {
          trigger: profile, // Element to trigger animation
          end: "bottom center", // Start when ribbon's bottom reaches the top of the viewport
          start: "center top", // End when ribbon's center reaches the center of the viewport
          scrub: 1, // Smooth interpolation during scroll
          toggleActions: "play none reverse none", // Ensure smooth reverse when scrolling up
          markers: false, // Debug markers (remove for production)
          
        },
      });
    }
  }, 
  
  []);

  return (
    
    <div className="hero-section bg-dark-white text-red-dark dark:bg-light-white dark:text-dark-blue">
      
      <div >

    <div>
    <img
  ref={ribbonRef} // Reference to the Blue Ribbon
  src="/Blue-Ribbon.svg"
  alt="Blue ribbon"
  className="blue-ribbon"
/>

    <div style={{paddingLeft: "100px"}}>
    <img
  src="/Logo.png"
  alt="bouquet"
  className="logo-image"
/>
</div>


<div style={{ paddingLeft: "160px" }}>
  <p className="andrea-text font-hm text-red-dark">andrea</p>
  <p className="larioza-text font-hm text-red-dark">larioza</p>
  <p className="description-text font-adonis">
    an aspiring software engineer, <br />
    designer, and content creator
  </p>

    <div className="flex gap-2 icons-container" >
      <Tiktok/>
      <MailIcon/>
      <GitHub/>
      <Instagram/>
      </div>
      </div>

  




      


      <img
  ref={profileRef}
  src={"/test.png"}
  alt="Andrea"
  className="profile-responsive-image"
/>

      
      </div>
      </div>

</div>
    );
}
