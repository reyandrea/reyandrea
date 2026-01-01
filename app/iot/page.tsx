"use client";

import React from "react";


const iot: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 pl-6 font-adonis text-xl leading-relaxed pt-0 ">
          <h2 className="text-red-bright text-3xl font-nooksbold uppercase tracking-wide ">
          CLOUD + IOT DEVELOPMENT
        </h2>


                  <p className="lg:w-7/10">
                  For this project, we designed and implemented a scalable, end-to-end IoT and Cloud solution to 
                  retrofit legacy washing machines with smart capabilities to improve operational efficiency 
                  for laundromat owners and convenience for customers. 
                  One focus was our business pitch in the DELL Innovation Competition where we placed 2nd. 

                </p>
              </div>
              </div>
    <div className="flex flex-col lg:flex-row justify-center p-8 ">
      {/* Left Side: Title and Text */}
      {/*
      <div className="text-left lg:w-1/3 mb-8 lg:mb-0">

        <h2 className="text-red-bright text-3xl font-nooksbold uppercase tracking-wide ">
          CLOUD + IOT DEVELOPMENT
        </h2>
        <div className="font-adonis text-xl leading-relaxed pt-4">
          <p>
          For this project, we designed and implemented a scalable, end-to-end IoT and Cloud solution to retrofit legacy washing machines with smart capabilities to improve operational efficiency for laundromat owners and convenienc
e for customers. One focus was our business pitch in the DELL Innovation Competition where we placed 2nd. 
          <br />
          <br />
          */}
          <div className="text-left lg:w-1/3 mb-8 lg:mb-0">
          <div className="font-adonis text-xl leading-relaxed pt-4">
          <p className="mb-4 text-red-bright text-xl font-nooksbold uppercase">
          Key features</p>

<div className="mb-2"><span className="text-dark-blue">Real–Time Dashboard </span> An interface for users to monitor machine status, estimated time of completion and usage in real-time.</div>

<div className="mb-2"><span className="text-dark-blue">Predictive Maintenance: </span> Automated health monitoring that alerts owners via AWS SES when anomalies occur. </div>

<div className="mb-2"><span className="text-dark-blue">Universal Retrofitting: </span>Smart sensors that integrate with legacy machines without hardware modifications. </div>   
          
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
    </div>
  );
};



export default iot;

