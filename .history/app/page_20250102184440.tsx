import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4 py-6 flex flex-col justify-between h-screen ">
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
            <h3>Awards Etc </h3>
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
          <p>
            Awards Etc ICAD Awards — 4× Silver Bells, 8× Bronze Bells
            2016–present for: Identity Design; Poster Design; Use of
            Illustration; Website Design. IDI Awards — 2018 Best Printed Design;
            2017 Best Book Design; 2016 Best Website; 2016 Best Logo; 2015 Best
            Website; 2015 Best Book Design. 100 Archive — fifty-one projects
            added to the annual archives 2010–present. Art Institute of Chicago
            — Permanent Architecture and Design Collection, sixteen projects
            added. National Library of Ireland — Permanent Online Archive, two
            projects added.
          </p>
          <p>
            Awards Etc ICAD Awards — 4× Silver Bells, 8× Bronze Bells
            2016–present for: Identity Design; Poster Design; Use of
            Illustration; Website Design. IDI Awards — 2018 Best Printed Design;
            2017 Best Book Design; 2016 Best Website; 2016 Best Logo; 2015 Best
            Website; 2015 Best Book Design. 100 Archive — fifty-one projects
            added to the annual archives 2010–present. Art Institute of Chicago
            — Permanent Architecture and Design Collection, sixteen projects
            added. National Library of Ireland — Permanent Online Archive, two
            projects added.
          </p>
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
