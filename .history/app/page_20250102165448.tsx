import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-6 flex flex-col justify-between h-screen ">
      <main className=" ">
        <p className=" text-8xl">
          Hi I'm Charlie Smith 👋
          <br />{" "}
          <span>
            Graphic Designer, Web Developer
            <br /> & Brand strategist
          </span>
        </p>
        <div className="grid grid-cols-3 bg-red-500"></div>
      </main>
      <footer className=" ">
        <p className=" text-6xl">LinkedIn / GitHub</p>
      </footer>
    </div>
  );
}
