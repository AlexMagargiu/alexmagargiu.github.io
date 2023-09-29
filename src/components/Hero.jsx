import { TypeAnimation } from "react-type-animation";
import profilepicture from "../assets/images/profilepicture.jpg";
import HeroLinkItems from "./HeroLinkItems";

export default function Hero() {
    return (
        <section
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-56 h-screen bg-medium-bg font-jetbrains text-primary-text"
            id="home"
        >
            <div className="md:block flex flex-col items-center">
                <div className="md:block hidden">
                    <HeroLinkItems />
                </div>
                <h1 className="flex flex-col items-center md:items-start text-xl md:text-2xl">
                    Hello, I'm
                    <span className="font-extrabold text-4xl md:text-5xl">
                        Magargiu{" "}
                        <span className="text-secondary-text">Alexandru</span>
                    </span>
                </h1>
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
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                />
            </div>
            <div className="h-96 w-96 md:h-[26rem] md:w-[26rem] drop-shadow-[0_5px_10px_rgba(53,_162,_159,_0.7)]">
                <img
                    className="rounded-full md:rounded-[3.5rem]"
                    src={profilepicture}
                ></img>
            </div>
            <div className="md:hidden">
                <HeroLinkItems />
            </div>
        </section>
    );
}
