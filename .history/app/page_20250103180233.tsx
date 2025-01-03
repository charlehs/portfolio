"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null); // Create the container ref

  useGSAP(
    () => {
      // Animate each line individually
      gsap.fromTo(
        containerRef.current?.querySelectorAll(".line"), // Select all elements with the "line" class
        { y: 100, opacity: 0 }, // Start state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.inOut",
          stagger: 0.2, // Add a stagger of 0.2 seconds between animations
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      className="px-4 py-6 flex flex-col justify-between h-screen "
      ref={containerRef}
    >
      <main className=" flex flex-col h-[75%] justify-between">
        <div>
          <p className="text-8xl">
            <span className="line">Hi I'm Charlie 👋</span>
            <br />
            <span className="line">Graphic Designer, Web Developer</span>
            <br />
            <span className="line">& Brand strategist</span>
          </p>
        </div>
        <div className="grid grid-cols-3  text-xs max-w-[50%] gap-6 line">
          <div>
            <h3 className="font-mono pb-2">Work </h3>
            <p>
              I led creative and technical efforts as Web Developer & Designer
              at{" "}
              <span>
                <a href="https://reveng.ai">RevEng.AI</a>
              </span>
              , where I designed the brand identity, developed a sleek web app
              dashboard with React and Next.js, and crafted a cohesive user
              experience with Tailwind CSS. <br />
              Previously, I was a Designer at Playground XYZ, where I
              established brand guidelines, rebuilt the company website in
              Webflow, and shaped the creative direction for core products.
              <br />
              Before that I was Design team leader at The Cheeky Panda, where I
              combined design and marketing expertise to drive product success
              on global Amazon marketplaces.
            </p>
          </div>

          <div>
            <h3 className="font-mono pb-2">Awards Etc </h3>
            <a
              href={
                "https://trumanbrewery.com/files/rooms/3526/OTB_NEWS_1706_2.html"
              }
            >
              <p>Free Range catalogue cover — 2017</p>
            </a>
            <a
              href={
                "https://www.nescafe.com/gb/campaigns/azera-by-design-archive"
              }
            >
              <p>Nescafe Azera — 2016</p>
            </a>
          </div>
        </div>
      </main>
      <footer className=" line ">
        <p className=" text-6xl">
          <a href="https://linkedin.com/in/charliedev" target={"_blank"}>
            LinkedIn
          </a>{" "}
          /{" "}
          <a href="https://github.com/charlehs" target={"_blank"}>
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
