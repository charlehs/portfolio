import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function Home() {
  const tl = useRef;
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      // Animate the text up
      tl.fromTo(
        containerRef.current?.querySelector(".text-8xl"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 }
      );
    },
    { scope: container }
  );

  return (
    <div
      className="px-4 py-6 flex flex-col justify-between h-screen "
      ref="container"
    >
      <main className=" flex flex-col h-[75%] justify-between">
        <div>
          <p className=" text-8xl">
            Hi I'm Charlie 👋
            <br />{" "}
            <span>
              Graphic Designer, Web Developer
              <br /> & Brand strategist
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3  text-xs max-w-[50%] gap-6">
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
      <footer className=" ">
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
