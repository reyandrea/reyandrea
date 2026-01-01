"use client";

import Image from "next/image";
import React from "react";

const AcaiTruck: React.FC = () => {
  return (

    <div className=" p-8 ">

      
      {/* intro Content Section */}
      <div className="flex flex-col lg:flex-row justify-center p-8 ">
            {/* Left Side: Title and Text */}
            <div className="text-left lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-red-bright text-4xl font-nooksbold uppercase tracking-wide ">
                The Acai Truck
              </h2>
              <div className="font-adonis text-xl leading-relaxed pt-4">
                <p>
                  The Acai Truck SG is a homegrown FnB startup that evolved from an event 
          catering service for schools and business into a permanent retail cafe and vending machine. 
          Despite the “truck” in our name, we don’t actually operate on a truck. 
          Regardless of the means, we aim to bring affordable acai bowls to everyone

                </p>
              </div>
            </div>
      
            {/* Right Side: Image Grid */}
            <div className="lg:w-1/5 grid grid-cols-1 pt-0 gap-4">
              {/* Images */}
              <div className="flex justify- align-top">
                <Image
                  src="/AcaiTruck-Logo.png"
                  alt="The Acai Truck"
                  width={250} // Increased base size for scaling
                  height={200}
                  className="align-top h-auto object-contain"
                />
              </div>
            </div>
            
          </div>
          

          
      {/* executive summary Content Section */}
          <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:w-8/12 font-adonis text-xl leading-relaxed pt-0 ">


                  <p>
                  As Co-Founder and Managing Partner, I have spearheaded the strategic evolution of our brand from a service-oriented model into a scalable FnB enterprise. 
                  By overseeing the end-to-end product lifecycle—from RnD to a successful retail debut at Pick n Go—I facilitated a pivotal shift toward a product based business. 
                  Following our retail success, I led the launch of our flagship cafe. I oversaw the breadth of the operation from maximizing high margin revenue to increasing customer lifetime value. 
                  Looking for new ways to approach retail, I launched Singapore’s first acai vending machine concept. This innovation focused on using automation to create a low overhead, scalable business. 
                  This experience taught me the founder’s mindset —thriving in fast–paced environments, managing shifting priorities, and building a brand from the ground up.

                </p>
              </div>
              </div>


      {/* beginning Content Section */}
              <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 font-adonis text-xl leading-relaxed pt-0 ">
          <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide ">
                small beginnings: events
              </h2>
                  <p className="lg:w-7/10">
                  We started out with events catering service, providing acai bowls for school events and corporate functions. 
                  This allowed us to build a customer base and refine our product offerings based on direct feedback.
                  </p>
              </div>
              </div>

        <div className="flex justify-center items-center">
              <div className="grid grid-cols-7 gap-4 pt-4 ">
                <div className="col-span-3">
                <Image
                src="/AcaiTruck-setup.jpg"
                alt="The Acai Truck Poster 2"
                width={450}
                height={300}
                className="h-auto shadow-md col-span-2"
                />
                </div>
                <div className="col-span-2">
                <Image
                src="/AcaiTruck-event1.jpg"
                alt="The Acai Truck Poster 3"
                height={200}
                width={300}
                className="h-auto object-contain"
                />
                </div>
                <div className="col-span-2">
                <Image
                src="/AcaiTruck-event2.jpg"
                alt="The Acai Truck Poster 3"
                height={200}
                width={300}
                className="h-auto object-contain"
                />
                </div>
                
              </div>
            </div>


      {/* pick n go Content Section */}

      <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 font-adonis text-xl leading-relaxed pt-0 ">
          <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide ">
                Our First retail product
              </h2>
                  <p className="lg:w-7/10">
I drove our expansion by launching our first retail product line. I managed the product lifecycle— from RnD and Standard Operating Procedures to marketing and logistics. 
By recognizing a growing demand for accessibility and end–to–end management, this led to a seamless launch into the retail market at Pick n Go.
By leading the creative direction and production of this campaign, I successfully communicated our product’s premium quality and convenience.
Thus, this successful transition pivoted the brand from a service model to a scalable product-based business.
                  </p>
              </div>

              </div>

      {/* Images Grid */}
      <div className="flex justify-center  p-4">
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


      <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 font-adonis text-xl leading-relaxed pt-0 ">
          <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide ">
                Our First Flagship Store
              </h2>
                  <p className="lg:w-7/10">
Following a significant surge in retail sales, we capitalized on that market validation by opening our first permanent flagship cafe. 
This allowed us to deepen our brand presence and increase customer lifetime value. My role spanned the design and development —from site selection and interior design to menu engineering. 
By strategically integrating high margin offerings like specialty coffee and waffles alongside our signature acai, I optimized the revenue mix and established a sustainable, scalable operational model.
                  </p>
              </div>
              </div>




      
      {/* 1st Content Section */}
      <div className="flex justify-center items-center p-4">
            <div className="text-center">
              <h2 className="text-2xl text-red-bright font-nooksbold uppercase tracking-wide p-4">
                Our Store Front
              </h2>
              <div className="grid grid-cols-3 gap-8 pt-4 ">
                <Image
                src="/AcaiTruck-Shop.JPG"
                alt="The Acai Truck Poster 2"
                width={300}
                height={300}
                className="h-auto shadow-md"
                />
                <Image
                src="/AcaiTruck-P4.png"
                alt="The Acai Truck Poster 3"
                height={300}
                width={300}
                className="h-auto object-contain"
                />
                <Image
                src="/AcaiTruck-P5.png"
                alt="The Acai Truck Poster 1"
                width={300}
                height={300}
                className="h-auto object-contain"
              />
                
              </div>
            </div>
      </div>


      <div className="flex justify-center items-center p-4">
            <div className="text-center">
              <h2 className="text-2xl text-red-bright font-nooksbold uppercase tracking-wide p-4">
                Our Menu
              </h2>
      <div className=" grid grid-cols-2 gap-8 pt-4 ">
        <div className="flex justify-center">
          <Image
            src="/AcaiTruck-Menu.png"
            alt="Acai Truck Menu"
            width={375}
            height={200}
            className="h-auto object-contain pl-4"
          />
          </div>
                <div className="flex justify-center items-center">
                  <div className="flex flex-col gap-4">
            <Image
              src="/AcaiTruck-Acai.jpg"
              alt="Acai Bowl"
              width={460}
              height={200}
              className="h-auto object-contain pr-4"
            />
            <Image
              src="/AcaiTruck-Waffles.jpg"
              alt="Waffles"
              width={460}
              height={400}
              className="h-auto object-contain pr-4"
            />
          </div>
        </div>
      </div>
      </div>
      </div>



            {/* beginning Content Section */}
              <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 font-adonis text-xl leading-relaxed pt-0 ">
          <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide ">
                Vending machine
              </h2>
                  <p className="lg:w-7/10">
                  More recently, I spearheaded our expansion into automated retail with the launch of Singapore’s first acai vending machine. 
                  This initiative was a strategic response to the rising demand for grab–and–go nutrition. I was responsible for the graphics of our vending machine. 
                  This concept serves as a scalable, low overhead model that allows us to penetrate high traffic locations like gyms, offices, and transport hubs 
                  where a full cafe wouldn’t be feasible
                  </p>
              </div>
              </div>

        <div className="flex justify-center items-center p-4">
              <div className="grid grid-cols-3 gap-4 pt-4 ">
                <div className="col-span-1">
                <Image
                src="/AcaiTruck-Vending.jpg"
                alt="The Acai Truck Poster 2"
                width={300}
                height={300}
                className="h-auto shadow-md col-span-2"
                />
                </div>
                <div className="col-span-2">
                <Image
                src="/AcaiTruck-vending2.png"
                alt="The Acai Truck Poster 3"
                height={200}
                width={600}
                className="h-auto object-contain"
                />
                </div>

                
              </div>
            </div>


      



      <div className="flex justify-center items-center p-4">
            <div className="text-center">
              <h2 className="text-2xl text-red-bright font-nooksbold uppercase tracking-wide p-4">
                Our Promotional Posters
              </h2>
              <div className="grid grid-cols-3 gap-8 pt-4 ">
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
            </div>
      </div>
      

      

      {/* Section Title */}
      <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 font-adonis text-xl leading-relaxed pt-0 text-center">
          <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide ">
          Our Events
        </h2>
      </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 font-adonis text-xl leading-relaxed pt-0 text-center">
          <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide ">
                Our partners
              </h2>
              </div>
              </div>

      {/* Add content for events if needed */}

      <div className="pb-[10vh]"></div>
      
    </div>

  );
};

export default AcaiTruck;
