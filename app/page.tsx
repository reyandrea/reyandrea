"use client";
import Hero from "./components/hero";
import { Card } from "./components/card";
import Link from "next/link";


export default function Home() {



  return (
    
    <div className="h-max bg-dark-white text-red-dark dark:bg-light-white dark:text-dark-blue">
      
      <Hero/>
      
      <h1 className="text-center font-nooksbold text-3xl dark:text-dark-blue">MY WORKS</h1>
      <div className="flex flex-wrap justify-center  gap-y-24 gap-x-12 p-8">
  {/* First row */}
  <Link href="/acaitruck">
  <Card
    imageSrc="/AcaiTruck-Thumbnail.png"
    title="THE ACAI TRUCK"
  />
  </Link>
  <Link href={"/thenightshift"}>
  <Card
    imageSrc="/TNS-EP2.jpeg"
    title="SUTD PRODUCTION: THE NIGHT SHIFT"
  />
  </Link>

  {/* Second row */}
  <Link href={"/mern"}>
  <Card
    imageSrc="/Mern-Thumbnail.png"
    title="MERN APP DEVELOPMENT"
  />
  </Link>
  <Link href={"/assembly"}>
  <Card
    imageSrc="/Recall-Thumbnail.png"
    title="ASSEMBLY GAME DEVELOPMENT"
  />
  </Link>

  <Link href={"/photography"}>
  <Card
    imageSrc="/Butterfly2.jpg"
    title="PHOTOGRAPHY"
  />
  </Link>
</div>
      
    </div>
  );
}
