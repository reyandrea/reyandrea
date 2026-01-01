"use client";

import React from "react";
import Image from "next/image";


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

                </p><br/>

                <p className=" text-red-bright text-xl font-nooksbold uppercase">
          Key features</p>
          
</div>
          </div>

              <div className="flex justify-center items-center ">
                  

                      <div className="grid grid-cols-3 gap-8 p-4 ">
                        <div className="text-left font-adonis text-xl leading-relaxed ">
          <div className="mb-2"><span className="text-dark-blue">Real–Time Dashboard: </span>
          <br/> for users to monitor machine status, 
          <br/> estimated time of completion
          <br/> and usage in real–time.</div></div>
        

                        <Image
                        src="/iot_all.png"
                        alt="The Acai Truck Poster 2"
                        width={295}
                        height={300}
                        className="h-auto object-contain shadow-md"
                        />
                        <Image
                        src="/iot_detail.png"
                        alt="The Acai Truck Poster 3"
                        width={303}
                        height={300}
                        className="h-auto object-contain"
                        />
                    </div>
                    </div>

                    

          <div className="flex justify-center items-center p-4">
                      <div className="grid grid-cols-3 gap-8 pt-4 ">
                        <div className="text-left font-adonis text-xl leading-relaxed pt-4">
          <div className="mb-2"><span className="text-dark-blue">Predictive Maintenance: </span>
          <br/> Automated health monitoring <br/>that alerts owners 
          via AWS <br/> SES when anomalies occur.
              </div></div>


                        <Image
                        src="/iot_alert.png"
                        alt="The Acai Truck Poster 2"
                        width={300}
                        height={300}
                        className="h-auto object-contain shadow-md"
                        />
                        
                        <Image
                        src="/iot_detaile.png"
                        alt="The Acai Truck Poster 3"
                        width={300}
                        height={300}
                        className="h-auto object-contain"
                        />
                    </div>
                    </div>

                    <div className="flex justify-center items-center p-4">
                      <div className="grid grid-cols-3 gap-8 pt-4 ">
                        <div className="text-left font-adonis text-xl leading-relaxed pt-4">
                <div className="mb-2"><span className="text-dark-blue">Universal Retrofitting: 
                  <br/></span>Smart sensors that integrate
                <br/> with legacy machines 
                <br/>without hardware modifications.  
                </div></div>
              


                        <Image
                        src="/iot_alert.png"
                        alt="The Acai Truck Poster 2"
                        width={300}
                        height={300}
                        className="h-auto object-contain shadow-md"
                        />
                        
                        <Image
                        src="/iot_detaile.png"
                        alt="The Acai Truck Poster 3"
                        width={300}
                        height={300}
                        className="h-auto object-contain"
                        />
                    </div>
                    </div>


          <div className="flex flex-col lg:flex-row justify-center pt-8">
          <div className="lg:w-8/12 pl-6 font-adonis text-xl leading-relaxed pt-0 ">

                <p className=" text-red-bright text-2xl font-nooksbold uppercase">
          Technical Implementation</p>
          </div>

          </div>
          <div className="flex p-4 justify-center ">
                    <Image
                        src="/iot_cloud.png"
                        alt="The Acai Truck Poster 3"
                        width={1000}
                        height={300}
                        className="h-auto object-contain"
                        />
                        </div>
          <div className="flex flex-col lg:flex-row justify-center">
          <div className="lg:w-8/12 pl-6 font-adonis text-xl leading-relaxed pt-0 ">



                  <p className="lg:w-7/10">
                  For this project, we designed and implemented a scalable, end-to-end IoT and Cloud solution to 
                  retrofit legacy washing machines with smart capabilities to improve operational efficiency 
                  for laundromat owners and convenience for customers. 
                  One focus was our business pitch in the DELL Innovation Competition where we placed 2nd. 

                </p><br/>
          
</div>
          </div>





<div className="pb-[10vh]"> </div>
      </div>

  );
};



export default iot;

