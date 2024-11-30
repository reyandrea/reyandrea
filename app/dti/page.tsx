"use client";

import React from "react";

const Dti: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-8 ">
      {/* Left Side: Title and Text */}
      <div className="text-left lg:w-1/3 mb-8 lg:mb-0 pr-10">
        <h2 className="text-red-bright text-5xl font-nooksbold uppercase tracking-wide ">
          HARPY
        </h2>
        <div className="font-adonis text-xl leading-relaxed pt-4">
          <p>
          Developed a Resource Management Application for a technology company’s presales department to streamline the process of managing workshop requests from clients.
          The web application enables clients to submit workshop requests, admin to assign trainers and manage schedules, and trainers to view and manage their assigned workshops.
          <br/>
          <br/>
          Key features include:
          Client-side: Clients can submit requests with workshop details (e.g., type, duration, location).
          Admin-side: Admins can view, manage, and allocate resources to requests, with dynamic trainer availability and scheduling.
          Trainer-side: Trainers can track their allocated workshops and availability.
          Reporting Dashboard: Provides insights into trainer utilization, workshop trends, and deal potential.
          <br/>
          <br/>
          Utilized ReactJS for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage. The project was tested using Jest for reliability. 
          Delivered a working prototype with documentation, architecture diagrams, and a live demo, enhancing the efficiency of the presales team and improving client engagement.
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
      </div>
    </div>
  );
};



export default Dti;

