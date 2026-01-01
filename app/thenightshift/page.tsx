"use client";

import React from "react";
import Image from "next/image";

const TNS: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center p-8 ">
      {/* Left Side: Title and Text */}
      <div className="text-left lg:w-1/3 mb-8 lg:mb-0">
        <h2 className="text-red-bright text-4xl font-nooksbold uppercase tracking-wide ">
          The Night Shift
        </h2>
        <div className="font-adonis text-xl leading-relaxed pt-4">
          <p>
            The Night Shift by SUTD Productions is a creative YouTube series
            showcasing life at SUTD. The series features a mix of entertaining and informative
            content which highlights student activities, organizations, and
            events.
            <br />  
            <span className="small-break"></span>
            
            My involvement spanned the entire production pipeline— from creative direction
            and hosting to videography and postproduction editing. My approach was driven 
            by a deep passion for content creation and storytelling.           
            I didn’t just want to document campus life, I wanted to create shareable, thumb–stopping content. 
            
            <br />
            <span className="small-break"></span>

            I focused on highlighting SUTD’s vibrant campus culture via student–centric narratives 
            and leveraging platform specific trends and high–energy editing to maximize viewer retention. 
            Whether coordinating with student organizations or scouting local supper spots, 
            every episode aims to increase campus visibility and fostered community engagement.
            <br />
            <span className="small-break"></span>
            If you’d like to explore episodes, you can find the series on our
            official YouTube playlist​ 
            <a href="https://youtube.com/playlist?list=PLaWOuRIztD2GqnPc68BqNR2QOnqqu-_OE&si=ZvX2oWqmjZrgrFYVhttps://youtube.com/playlist?list=PLaWOuRIztD2GqnPc68BqNR2QOnqqu-_OE&si=ZvX2oWqmjZrgrFYV" target="_blank" rel="noopener" className="text-red-bright"> here.</a>
          </p>
        </div>
      </div>

      {/* Right Side: Image Grid */}
      <div className="lg:w-1/3 grid grid-cols-1 gap-4">
        {/* Images */}
        <div className="flex justify-center">
          <Image
            src="/TNS-EP1.jpeg"
            alt="The Night Shift Episode 1"
            width={400}
            height={300}
            className="h-auto object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/TNS-EP2.jpeg"
            alt="The Night Shift Episode 2"
            width={400}
            height={300}
            className="h-auto object-contain"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/TNS-EP3.jpeg"
            alt="The Night Shift Episode 3"
            width={400}
            height={300}
            className="h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TNS;
