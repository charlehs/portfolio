import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-4 my-6 flex flex-col space-between ">
      <main className=" bg-red-600">
        <p className=" text-6xl">
          Hi I'm Charlie Smith
          <br />{" "}
          <span className="text-6xl">
            Graphic Designer, Web Developer & Brand strategist
          </span>
        </p>
      </main>
      <footer className=" bg-blue-600">test</footer>
    </div>
  );
}
