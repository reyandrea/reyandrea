"use client";

import React from "react";


const iot: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-8 ">
      {/* Left Side: Title and Text */}
      <div className="text-left lg:w-1/3 mb-8 lg:mb-0 pr-10">
        <h2 className="text-red-bright text-3xl font-nooksbold uppercase tracking-wide ">
          CLOUD + IOT DEVELOPMENT
        </h2>
        <div className="font-adonis text-xl leading-relaxed pt-4">
          <p>
          For this project, we designed and implemented a scalable, end-to-end IoT and Cloud solution to retrofit legacy washing machines with smart capabilities to improve operational efficiency for laundromat owners and convenienc
e for customers. One focus was our business pitch in the DELL Innovation Competition where we placed 2nd. 
          <br />
          <br />
    </p>
        </div>
      </div>

      {/* Right Side: Image Grid */}
      <div className="lg:w-1/3 grid grid-cols-1 gap-8">
        {/* Images */}
        <div className="flex justify-center">
        
        </div>
        <div  className="font-adonis text-xl leading-relaxed pt-4">
        <p className="text-red-bright text-xl font-nooksbold uppercase">
          Technical Implementation </p>
          <br className="small-break"/>

          <p>
 </p>
        </div>
      </div>
    </div>
  );
};



export default iot;

