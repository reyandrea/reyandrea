"use client";
import Hero from "./components/hero";
import Link from "next/link";
import OverlapComponent from "./components/text"


export default function Home() {

  const cardData = [
    { imageSrc: "/AcaiTruck-Thumbnail.png", title: "THE ACAI TRUCK", href: "/acaitruck" },
    { imageSrc: "/TNS-EP2.jpeg", title: "SUTD PRODUCTION: THE NIGHT SHIFT", href: "/thenightshift" },
    { imageSrc: "/Mern-Thumbnail.png", title: "MERN APP DEVELOPMENT", href: "/mern" },
    { imageSrc: "/Recall-Thumbnail.png", title: "ASSEMBLY GAME DEVELOPMENT", href: "/assembly" },
    { imageSrc: "/Butterfly2.jpg", title: "PHOTOGRAPHY", href: "/photography" },
  ];



  return (
    
    <div className="w-screen bg-dark-white text-red-dark dark:bg-light-white dark:text-dark-blue">
      
      <Hero/>

      <div className="text-center font-nooksbold text-5xl pt-12 pb-8">MY WORKS</div>

      <div className="flex w-screen justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-x-12 sm:gap-y-14 lg:gap-x-16 lg:gap-y-20">
        {cardData.map((card, index) => (
          <Link key={index} href={card.href}>
            <OverlapComponent
              imageSrc={card.imageSrc}
              title={card.title}
            />
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
