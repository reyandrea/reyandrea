"use client";

import React from "react";
import Image from "next/image";

const TNS: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-8 ">
      {/* Left Side: Title and Text */}
      <div className="text-left lg:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-red-bright text-5xl font-nooksbold uppercase tracking-wide ">
          The Night Shift
        </h2>
        <div className="font-adonis text-xl leading-relaxed pt-4">
          <p>
            The Night Shift by SUTD Productions is a creative YouTube series
            showcasing life at the Singapore University of Technology and Design
            (SUTD). The series features a mix of entertaining and informative
            content, often spotlighting student activities, organizations, and
            events. It provides insights into campus culture with humor and
            storytelling. For instance, episodes explore topics like favorite
            supper spots near SUTD, student clubs such as the Cat Appreciation
            Team, and cultural events like Ramadan with the SUTD Muslim Society&#39;s​.
            <br />
            <br />
            If you&apos;d like to explore episodes, you can find the series on their
            official YouTube playlist​.
          </p>
        </div>
      </div>

      {/* Right Side: Image Grid */}
      <div className="lg:w-1/3 grid grid-cols-1 pt-4 gap-4">
        {/* Images */}
        <div className="flex justify-center">
          <Image
            src="/TNS-EP1.jpeg"
            alt="The Night Shift Episode 1"
            width={400}
            className="h-auto object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/TNS-EP2.jpeg"
            alt="The Night Shift Episode 2"
            width={400}
            className="h-auto object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/TNS-EP3.jpeg"
            alt="The Night Shift Episode 3"
            width={400}
            className="h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TNS;
