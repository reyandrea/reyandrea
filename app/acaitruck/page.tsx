"use client";

import Image from "next/image";
import React from "react";

const AcaiTruck: React.FC = () => {
  return (
    <div>
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 p-8">
        {/* Text Section */}
        <div className="font-adonis text-xl leading-relaxed lg:w-3/5">
          <h2 className="font-nooksbold text-3xl text-red-bright">THE ACAI TRUCK</h2>
          <p>
            I run The Acai Truck with my co-founder, Mohan. <br />
            Despite the fact we have &apos;truck&apos; in our name, we don&apos;t actually have a truck. <br />
            I joined the company and led the development of our first retail product from conception to production. <br />
            My responsibilities mainly involve marketing, graphic design, and operations. <br />
            We initially started by catering to many school events across different educational levels in Singapore. <br />
            Now we have a small cafe that not only sells acai bowls but also coffee and waffles.
          </p>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/3 lg:-top-40">
          <Image
            src="/AcaiTruck-Logo.png"
            alt="The Acai Truck"
            width={250}
            height={300}
            className="h-auto"
          />
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          Our Store Front
        </h2>
      </div>

      {/* Two Images Side by Side Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 pb-12">
        <Image
          src="/AcaiTruck-Shop.JPG"
          alt="The Acai Truck Poster 2"
          width={314}
          height={300}
          className="h-auto object-contain shadow-md"
        />
        <Image
          src="/AcaiTruck-P4.png"
          alt="The Acai Truck Poster 3"
          width={300}
          height={300}
          className="h-auto object-contain"
        />
        <Image
          src="/AcaiTruck-P5.png"
          alt="The Acai Truck Poster 1"
          width={300}
          height={500}
          className="h-auto object-contain"
        />
      </div>

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold uppercase tracking-wide p-4">
          Our Menu
        </h2>
      </div>

      <div className="flex justify-center pb-12">
        <div className="flex items-center space-x-8">
          <Image
            src="/AcaiTruck-Menu.png"
            alt="Acai Truck Menu"
            width={408}
            height={300}
            className="h-auto object-contain"
          />

          {/* Right Side: Three Stacked Images */}
          <div className="flex flex-col gap-4">
            <Image
              src="/AcaiTruck-Acai.jpg"
              alt="Acai Bowl"
              width={496}
              height={200}
              className="h-auto object-contain"
            />
            <Image
              src="/AcaiTruck-Waffles.jpg"
              alt="Waffles"
              width={496}
              height={400}
              className="h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          Our Promotional Posters
        </h2>
      </div>

      {/* Two Images Side by Side Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8 pb-12">
        <Image
          src="/AcaiTruck-P2.png"
          alt="The Acai Truck Poster 2"
          width={300}
          height={300}
          className="h-auto shadow-md"
        />
        <Image
          src="/AcaiTruck-P3.png"
          alt="The Acai Truck Poster 3"
          width={300}
          height={300}
          className="h-auto shadow-md"
        />
        <Image
          src="/AcaiTruck-P1.png"
          alt="The Acai Truck Poster 1"
          width={300}
          height={300}
          className="h-auto shadow-md"
        />
      </div>

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold uppercase tracking-wide p-4">
          Our Retail Product
        </h2>
      </div>

      {/* Images Grid */}
      <div className="flex justify-center pb-12">
        <div className="flex items-center space-x-8">
          {/* Video Section */}
          <iframe
            src="https://www.instagram.com/reel/C2Rxja0LP3H/embed"
            style={{
              width: "700px", // Adjust width to make the video bigger
              height: "500px", // Set a custom height
              border: "none", // Removes the default border
              borderRadius: "10px", // Optional, to add rounded corners
            }}
            frameBorder="0"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title="Instagram Video"
          />

          {/* Right Side: Two Stacked Images */}
          <div className="flex flex-col gap-4">
            <Image
              src="/AcaiTruck-LotusCrunch.png"
              alt="Lotus Crunch Product"
              width={250}
              height={200}
              className="h-auto object-contain"
            />
            <Image
              src="/AcaiTruck-TropicalHaven.png"
              alt="Tropical Haven Product"
              width={250}
              height={300}
              className="h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold uppercase tracking-wide p-4">
          Our Events
        </h2>
      </div>

      {/* Add content for events if needed */}
      
    </div>
  );
};

export default AcaiTruck;
