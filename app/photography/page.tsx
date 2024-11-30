"use client";

import React from "react";
import Image from "next/image";

const Mern: React.FC = () => {
  return (
    <div className="pt-8">
    <div>

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          Candids @marina barrage
        </h2>
      </div>

      {/* Two Images Side by Side Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 pb-12">
        <Image
          src="/Family1.jpeg"
          alt="The Acai Truck Poster 2"
          width={300}
          height={300}
          className="h-auto object-contain shadow-md"
        />
        <Image
          src="/Family2.jpeg"
          alt="The Acai Truck Poster 3"
          width={300}
          height={300}
          className="h-auto object-contain"
        />
      </div>





      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          Cloud Dome @Gardens by the bay
        </h2>
      </div>

      {/* Two Images Side by Side Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 pb-12">
        <Image
          src="/Garden-1.jpg"
          alt="The Acai Truck Poster 2"
          width={300}
          height={300}
          className="h-auto object-contain shadow-md"
        />
        <Image
          src="/Garden-2.jpg"
          alt="The Acai Truck Poster 3"
          width={300}
          height={300}
          className="h-auto object-contain"
        />
        <Image
          src="/Garden-3.jpg"
          alt="The Acai Truck Poster 1"
          width={300}
          height={500}
          className="h-auto object-contain"
        />
      </div>





      <div className="flex justify-center items-center p-4">
      <div className="text-center">
        <h2 className="text-2xl text-red-dark font-nooksbold uppercase tracking-wide p-4">
          NGEE ANN PHOTOGRAPHIC EXHIBITION
        </h2>
        <div className="grid grid-cols-2 gap-8 pt-4 ">
          <Image
            src="/Butterfly1.jpg"
            alt="NDP-1"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
          <Image
            src="/Butterfly2.jpg"
            alt="Butterfly2"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
          
        </div>
      </div>
      </div>



      <div className="flex justify-center items-center p-4">
      <div className="text-center">
        <h2 className="text-2xl text-red-dark font-nooksbold uppercase tracking-wide p-4">
          NDP 2022
        </h2>
        <div className="grid grid-cols-2 gap-8 pt-4 ">
          <Image
            src="/NDP-1.jpg"
            alt="NDP-1"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
          <Image
            src="/NDP-2.jpg"
            alt="NDP-2"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
          <Image
            src="/NDP-3.jpg"
            alt="NDP-3"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
          <Image
            src="/NDP-4.jpg"
            alt="NDP-4"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
          <Image
            src="/NDP-5.jpg"
            alt="NDP-5"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
          <Image
            src="/NDP-6.jpg"
            alt="NDP-6"
            width={408}
            height={300}
            className="h-auto object-contain"
          />
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Mern;
