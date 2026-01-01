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

                <p className=" text-red-bright text-2xl font-nooksbold uppercase">
          Key features</p>
          
</div>
          </div>

              <div className="flex justify-center items-center ">
                  

                      <div className="grid grid-cols-3 gap-8 p-4 ">
                        <div className="text-left font-adonis text-xl leading-relaxed ">
          <div className="mb-2"><span className="text-dark-blue font-nooksbold uppercase">Real–Time Dashboard: </span>
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
          <div className="mb-2"><span className="text-dark-blue font-nooksbold uppercase">Predictive Maintenance: </span>
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
                      <div className="grid grid-cols-3 gap-8 ">
                        <div className="col-span-2 text-left font-adonis text-xl leading-relaxed">
                <div className="mb-2"><span className="text-dark-blue font-nooksbold uppercase">Universal Retrofitting: 
                  <br/></span> 
                  The hardware solution was designed as a non-intrusive retrofit for 
                  legacy <br/> machines
                  by using a Raspberry Pi as a central gateway 
                  and MQTT broker. <br/>
                  I integrated Shelly Plus Plugs for power-based 
                  cycle detection via a 
                  <br/>threshold to distinguish between active and idle states.
                  <br/>For door state detection, we used an ESP32 microcontroller paired with 
                  <br/> a Hall Effect
                  Sensor and a permanent magnet. 
                  This approach was chosen for <br/>its high specificity and ability 
                  to ensure near-zero false positives and reliable <br/> operation in humid laundromat environments.
                </div></div>
                <div className="col-span-1">
                        
                        <Image
                        src="/iot_elec.jpg"
                        alt="The Acai Truck Poster 3"
                        width={300}
                        height={300}
                        className="h-auto object-contain"
                        />
                        </div>
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
          <div className="lg:w-8/12 p-8 font-adonis text-xl leading-relaxed ">

                <p className=" text-dark-blue font-nooksbold text-xl uppercase">
          Cloud Implementation</p>


                  <p className="lg:w-7/10">
                  I architected a robust, scalable cloud backend leveraging AWS IoT Core as the primary gateway for secure device connectivity and message routing. 
                  Telemetry data is transmitted via MQTT/TLS from edge devices to the cloud where it is processed through an AWS EC2 (Ubuntu) instance hosting the application’s API layer and backend logic. 
                  For data persistence, I implemented a dual-table architecture using AWS RDS (PostgreSQL) using JSONB format to manage both real-time machine status and extensive historical logs for business intelligence. 
                  To support proactive maintenance, I integrated AWS Lambda and AWS Simple Email Service (SES), which automatically trigger and deliver email alerts to business owners whenever abnormal power readings
                  are detected by the IoT message broker

                </p><br/>

          <p className=" text-dark-blue font-nooksbold text-xl uppercase">
          Machine Learning</p>

                <p className="lg:w-7/10">
                  To provide granular insights into wash cycles, I developed a machine learning pipeline using a Random Forest Classifier trained on an AWS EC2 instance. 
                  I engineered features from raw power telemetry by applying Savitzky-Golay smoothing and extracting metrics like signal derivative and oscillation range across sliding time windows. 
                  This model achieved 92% accuracy in identifying four operational states: Idle, Washing, Rinsing, and Spinning. 
                  Leveraging these real-time classifications and historical data, I implemented a predictive algorithm for Estimated Time of Completion, providing users with a dynamic countdown 
                  that optimizes their time and reduces facility congestion.

                </p><br/>

          
</div>
          </div>





<div className="pb-[10vh]"> </div>
      </div>

  );
};



export default iot;

