import { TypeAnimation } from "react-type-animation";
import profilepicture from "../assets/images/profilepicture.jpg";
import HeroLinkItems from "./HeroLinkItems";

export default function Hero() {
    return (
        <section
            className="flex flex-col flex-wrap md:flex-nowrap lg:flex-row items-center justify-center gap-10 xl:gap-56 h-screen bg-medium-bg font-jetbrains text-primary-text"
            id="home"
        >
            <div className="md:block pt-0 flex flex-col items-center">
                <div className="lg:block hidden">
                    <HeroLinkItems />
                </div>
                <h1 className="flex flex-col items-center lg:items-start text-lg md:text-2xl pt-24 md:pt-0">
                    Hello, I'm
                    <span className="font-extrabold text-2xl md:text-3xl lg:text-5xl">
                        Magargiu{" "}
                        <span className="text-secondary-text">Alexandru</span>
                    </span>
                </h1>
                <div className="text-center lg:text-left text-lg md:text-2xl lg:text-3xl md:mt-2">
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
            <div className="lg:hidden flex flex-wrap pb-6">
                <HeroLinkItems />
            </div>
        </section>
    );
}
