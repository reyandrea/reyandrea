"use client";

import React from "react";
import Image from "next/image";

const Assembly: React.FC = () => {
  return (
    <div>
    <div className="flex flex-col lg:flex-row justify-center p-8 ">
      {/* Left Side: Title and Text */}
      <div className="text-left lg:w-1/3 mb-8 lg:mb-0 pr-10">
        <h2 className="text-red-bright text-4xl font-nooksbold uppercase tracking-wide ">
          ASSEMBLY GAME DEVELOPMENT
        </h2>
        <div className="font-adonis text-xl leading-relaxed pt-4">
          <p>
          Recall is a memory maze navigation game where the player is presented with three mazes to commit to memory, before being asked to blindly navigate through one of the three maps.
          With every maze successfully completed, the player is passes and the time given to memorise the next maze is reduced.
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
        src="https://www.youtube.com/embed/QIyJ8JZWWxQ?si=fVZkDvcoZHYxaDK_"  // Replace with your YouTube video URL
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
        </div>
      </div>
    </div>

    {/* Section Title */}
    <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          Our Prototype
        </h2>
      </div>

      <div className="flex justify-center pb-12">
        <div className="flex items-center space-x-8">
          <Image
            src="/Recall-FinalProduct.jpg"
            alt="Acai Truck Menu"
            width={450}
            height={300}
            className="h-auto object-contain"
          />

          {/* Right Side: Three Stacked Images */}
          <div className="flex flex-col gap-4">
            <Image
              src="/Recall-Code.jpeg"
              alt="Acai Bowl"
              width={520}
              height={200}
              className="h-auto object-contain"
            />
            <Image
              src="/Recall-LedGrid.jpeg"
              alt="Waffles"
              width={520}
              height={400}
              className="h-auto object-contain"
            />
          </div>
        </div>
      </div>




      {/* Section Title */}
    <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          Our Datapath
        </h2>

        <div className="flex flex-col lg:flex-row justify-center">
    <Image
      src="/Recall-Datapath.png"
      alt="Tropical Haven Product"
      width={900}
      height={300}
      className="h-auto object-contain"
    />
    </div>
      </div>


    {/* Section Title */}
    <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          Our FSM
        </h2>

        <div className="flex flex-col lg:flex-row justify-center">
    <Image
      src="/Recall-FSM.png"
      alt="Tropical Haven Product"
      width={900}
      height={300}
      className="h-auto object-contain"
    />
    </div>
      </div>








    </div>
  );
};

export default Assembly;

