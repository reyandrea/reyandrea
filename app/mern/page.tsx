"use client";

import React from "react";


const Mern: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-8 ">
      {/* Left Side: Title and Text */}
      <div className="text-left lg:w-1/3 mb-8 lg:mb-0 pr-10">
        <h2 className="text-red-bright text-3xl font-nooksbold uppercase tracking-wide ">
          MERN APP
        </h2>
        <div className="font-adonis text-xl leading-relaxed pt-4">
          <p>
          For this project, we developed a specialized Resource Management System designed to optimize the presales workflow for a technology firm. 
          The platform leverages a MongoDB, Express.js, React, Node.js architecture to handle complex relational data within a non–relational database structure
          specifically managing the tri–factor relationship between client demand, resource availability, and trainer expertise.
          <br />
          <br />
        The platform serves three distinct user ecosystems <br /><br />

<div className="mb-4"><span className="text-dark-blue">Client Interface: </span> A seamless portal for submitting detailed workshop requests, including technical requirements and geographical data. </div>

<div className="mb-4"><span className="text-dark-blue">Admin Center: </span> A centralized dashboard for resource allocation, featuring dynamic scheduling and real–time trainer availability tracking. 
It also includes a dashboard providing high–level insights into trainer utilization rates and workshop trends. </div>

<div className="mb-4"><span className="text-dark-blue">Trainer Management: </span> A dedicated workspace for trainers to manage their assigned sessions and update availability. </div>   
          </p>
        </div>
      </div>

      {/* Right Side: Image Grid */}
      <div className="lg:w-1/3 grid grid-cols-1 gap-8">
        {/* Images */}
        <div className="flex justify-center">
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Caeye_56qRI"  // Replace with your YouTube video URL
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
        </div>
        <div  className="font-adonis text-xl leading-relaxed pt-4">
        <p className="text-red-bright text-xl font-nooksbold uppercase">
          Technical Implementation </p>
          <br className="small-break"/>

          <p>
            <div className="mb-4"><span className="text-dark-blue">Frontend Architecture: </span> 
          Engineered a responsive ReactJS SPA utilizing functional components, hooks for state management, and AJAX for real-time, asynchronous data synchronization.</div>

          <div className="mb-4"><span className="text-dark-blue">Backend and API Design: </span> Developed a RESTful API via Node.js and Express.js</div>

          <div className="mb-4"><span className="text-dark-blue">Database Schema: </span> Architected a scalable MongoDB schema optimized for high-read and write performance, structured to cross–reference trainer competencies with complex workshop requirements.</div>
        </p>
        </div>
      </div>
    </div>
  );
};



export default Mern;

