import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-6 flex flex-col justify-between h-screen ">
      <main className=" ">
        <p className=" text-6xl">
          Hi I'm Charlie Smith
          <br />{" "}
          <span className="text-6xl">
            Graphic Designer, Web Developer
            <br /> & Brand strategist
          </span>
        </p>
      </main>
      <footer className=" ">
        <p className=" text-6xl">LinkedIn / GitHub</p>
      </footer>
    </div>
  );
}
