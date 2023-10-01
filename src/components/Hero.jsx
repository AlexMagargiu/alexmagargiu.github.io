import { TypeAnimation } from "react-type-animation";
import profilepicture from "../assets/images/profilepicture.jpg";
import HeroLinkItems from "./HeroLinkItems";

export default function Hero() {
    return (
        <section
            className="flex flex-col flex-wrap md:flex-nowrap lg:flex-row items-center justify-center gap-10 xl:gap-56 h-screen bg-medium-bg font-jetbrains text-primary-text"
            id="home"
        >
            <div className="md:block pt-0 md:pt-32 flex flex-col items-center">
                <div className="md:block hidden">
                    <HeroLinkItems />
                </div>
                <h1 className="flex flex-col items-center md:items-start text-lg md:text-2xl pt-24 md:pt-0">
                    Hello, I'm
                    <span className="font-extrabold text-2xl md:text-5xl">
                        Magargiu{" "}
                        <span className="text-secondary-text">Alexandru</span>
                    </span>
                </h1>
                <div className="text-lg md:text-3xl md:mt-2">
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
            <div className="h-72 w-72 md:h-[26rem] md:w-[26rem] drop-shadow-[0_5px_10px_var(--secondary-text)]">
                <img
                    className="rounded-full md:rounded-[3.5rem]"
                    src={profilepicture}
                ></img>
            </div>
            <div className="md:hidden flex flex-wrap pb-6">
                <HeroLinkItems />
            </div>
        </section>
    );
}
