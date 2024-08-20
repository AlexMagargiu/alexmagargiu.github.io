import { TypeAnimation } from "react-type-animation";
import profilepicture from "../assets/images/profilepicture.jpg";
import HeroLinkItems from "./HeroLinkItems";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen gap-10 lg:flex-row xl:gap-56 bg-medium-bg font-jetbrains text-primary-text"
      id="home"
    >
      <div className="flex flex-col items-center pt-0 md:block">
        <div className="hidden lg:block">
          <HeroLinkItems />
        </div>
        <h1 className="flex flex-col items-center pt-24 text-lg lg:items-start md:text-2xl md:pt-0">
          Hello, I'm
          <span className="text-2xl font-extrabold md:text-3xl lg:text-5xl">
            Magargiu <span className="text-secondary-text">Alexandru</span>
          </span>
        </h1>
        <div className="text-lg text-center lg:text-left md:text-2xl lg:text-3xl md:mt-2">
          <TypeAnimation
            sequence={[
              "A Frontend Web Developer",
              1000,
              "A Web Designer",
              1000,
              "A UX Developer",
              1000,
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className="h-64 w-64 md:h-[20rem] md:w-[20rem] lg:h-[26rem] lg:w-[26rem] drop-shadow-[0_5px_10px_var(--secondary-text)]">
        <img
          className="rounded-full md:rounded-[3.5rem]"
          src={profilepicture}
        ></img>
      </div>
      <div className="flex flex-wrap pb-6 lg:hidden">
        <HeroLinkItems />
      </div>
    </section>
  );
}
