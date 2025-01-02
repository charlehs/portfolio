import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <p className=" text-8xl">
          Hi I'm <span className="extra-bold ">Charlie Smith</span>
          <br />{" "}
          <span className="text-6xl">
            Graphic Designer, Web Developer & Brand strategist
          </span>
        </p>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer> */}
    </div>
  );
}
