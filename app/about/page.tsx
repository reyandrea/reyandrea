"use client";

import React from "react";
import Image from "next/image";

const AboutHome: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center p-8 ">
        {/* Left Side: Title and Text */}
        <div className="text-left lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-red-bright text-5xl font-nooksbold  tracking-wide ">
            All About Andrea
          </h2>
          <div className="font-adonis text-xl leading-relaxed pt-4">
            <p>
              I&rsquo;m Andrea—a software engineer and designer based in Singapore,
              currently pursuing a major in Computer Science with a minor in Data
              Science and AI, specializing in Financial Technology. I&rsquo;m
              passionate about blending creativity with technology to bring
              innovative ideas to life.
            </p>
            <br />
            <p>
              Currently, I&rsquo;m on the lookout for an internship where I can apply
              my skills and grow professionally.
            </p>
            <br />
            <p>
              Beyond my studies, I&rsquo;m working on developing a water filtration
              product designed to support people with sensitive skin, enhancing
              overall wellness and beauty. On top of that, I&rsquo;m also the
              co-founder of a café startup, which serves refreshing açaí bowls
              and coffee.
            </p>
            <br />
            <p>
              I&rsquo;m all about curiosity and capturing life&rsquo;s little moments. When
              I&rsquo;m not gathering inspiration, you&rsquo;ll find me in Visual Studio
              bringing ideas to life.
            </p>
            <br />
            <p>
              Oh, and you&rsquo;ll never catch me in a bad outfit—With a keen eye for
              detail and a strong sense of personal style, I bring a mix of
              passion, precision, and flair to every new endeavor.
            </p>
          </div>
        </div>

        {/* Right Side: Image Grid */}
        <div className="lg:w-1/3 grid grid-cols-1 pt-4 gap-4">
          <div className="flex justify-center">
            <Image
              src="/Profile-Pic-About.jpg"
              alt="The Night Shift Episode 1"
              width={400}
              height={300}
              className="h-auto object-contain pt-8"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "left",
            }}
            className="pl-12"
          >
            <Image
              src="https://img.shields.io/badge/python-%233776AB.svg?&style=for-the-badge&logo=python&logoColor=white"
              alt="Python Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black"
              alt="JavaScript Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/java-%23007396.svg?&style=for-the-badge&logo=java&logoColor=white"
              alt="Java Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"
              alt="HTML5 Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/react-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=black"
              alt="React Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/next.js-%23000000.svg?&style=for-the-badge&logo=next.js&logoColor=white"
              alt="Next.js Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/express-%23000000.svg?&style=for-the-badge&logo=express&logoColor=white"
              alt="Express Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/node.js-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"
              alt="Node.js Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/mongodb-%2347A248.svg?&style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/rstudio-%2375AADB.svg?&style=for-the-badge&logo=rstudio&logoColor=black"
              alt="RStudio Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/mysql-%234479A1.svg?&style=for-the-badge&logo=mysql&logoColor=white"
              alt="MySQL Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/postgresql-%23336791.svg?&style=for-the-badge&logo=postgresql&logoColor=white"
              alt="PostgreSQL Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/docker-%232496ED.svg?&style=for-the-badge&logo=docker&logoColor=white"
              alt="Docker Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/adobe%20creative%20cloud-%23DA1F26.svg?&style=for-the-badge&logo=adobe%20creative%20cloud&logoColor=white"
              alt="Adobe Creative Cloud Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/figma-%23F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white"
              alt="Figma Badge"
              width={100}
              height={30}
              className="w-auto"
            />
            <Image
              src="https://img.shields.io/badge/swift-%23FA7343.svg?&style=for-the-badge&logo=swift&logoColor=white"
              alt="Swift Badge"
              width={100}
              height={30}
              className="w-auto"
            />
          </div>

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

      <div className="text-center">
        <h2 className="text-red-bright text-2xl font-nooksbold uppercase tracking-wide p-4">
          LET&rsquo;S CONNECT
        </h2>
      </div>
    </div>
  );
};

export default AboutHome;
