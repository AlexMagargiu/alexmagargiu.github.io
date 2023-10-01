import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import toDoAppImg from "./assets/projectPhotos/toDoApp.jpg";
import calculatorAppImg from "./assets/projectPhotos/calculatorApp.jpg";
import tipAppImg from "./assets/projectPhotos/tipApp.jpg";
import signUpFormImg from "./assets/projectPhotos/signUpForm.jpg";
import portfolioImg from "./assets/projectPhotos/portfolio.png";
import notesAppImg from "./assets/projectPhotos/notesApp.png";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function App() {
    const cookies = new Cookies();

    if (!cookies.get("theme")) {
        cookies.set("theme", "light", {
            path: "/",
            sameSite: "strict",
            expires: new Date(new Date().getFullYear() + 1, 0, 1),
        });
    }

    const [styles, setStyles] = useState(cookies.get("theme"));

    /*     darkmode: 
    "--light-dark-gray": "#393E46",
    "--dark-gray": "#121212",
    "--bluish-white": "#D8DEEC",
    "--orange": "#D65A31",
    "--gold": "#FFD700",
    "--muted-blue": "#5B8AB3",
    "--muted-gray": "#A9A9A9", */

    const themeOptions = {
        dark: {
            "--bg-nav": "#26282A",
            "--bg-medium": "#1B1B1B",
            "--bg-none": "#191C27",
            "--bg-dark": "#010127",
            "--bg-projects": "#353839",
            "--bg-hover": "#010127",
            "--bg-hover-50": "#01012790",
            "--primary-text": "#D8DEEC",
            "--hover-text": "#D65A31",
            "--secondary-text": "#FEBA4F",
            "--footer-text": "#D8DEEC",
            "--skills-svg": "#D8DEEC",
            "--moon-fill": "#A9A9A9",
            "--sun-fill": "#FFD700",
        },
        light: {
            "--bg-nav": "#F4F4F2",
            "--bg-medium": "#E8E8E8",
            "--bg-none": "#FFFFFF",
            "--bg-dark": "#0E2954",
            "--bg-projects": "#FFFFFF",
            "--bg-hover": "#279EFF",
            "--bg-hover-50": "#279EFF50",
            "--primary-text": "#0E2954",
            "--hover-text": "#279EFF",
            "--secondary-text": "#35A29F",
            "--footer-text": "#F4F4F2",
            "--skills-svg": "#F4F4F2",
            "--moon-fill": "#A9A9A9",
            "--sun-fill": "#FFD700",
        },
    };

    const theme = themeOptions[styles];

    Object.keys(theme).forEach((cssVar) => {
        document.documentElement.style.setProperty(cssVar, theme[cssVar]);
    });

    return (
        <main>
            <Navbar setStyles={setStyles} />
            <Hero />
            <About />
            <Skills />
            <section
                className="flex flex-col items-center justify-center py-20 gap-4 md:gap-8 text-white font-jetbrains bg-medium-bg"
                id="projects"
            >
                <h3 className="text-primary-text text-3xl p-8 bg-medium-bg flex justify-center">
                    Projects
                </h3>
                <div className="flex flex-wrap items-center justify-center px-10 md:pb-20 pb-8 gap-8 md:gap-20 text-white font-jetbrains bg-medium-bg">
                    <Projects
                        img={portfolioImg}
                        framework={true}
                        tailwind={true}
                        title="Portfolio"
                        codeLink="https://github.com/AlexMagargiu/alexmagargiu.github.io"
                        liveLink="https://alexmagargiu.github.io/"
                    />
                    <Projects
                        img={notesAppImg}
                        framework={true}
                        tailwind={false}
                        title="Notes App"
                        codeLink="https://github.com/AlexMagargiu/React-Notes-App"
                        liveLink="https://alexmagargiu.github.io/React-Notes-App/"
                    />
                    <Projects
                        img={toDoAppImg}
                        framework={false}
                        tailwind={false}
                        title="ToDo App"
                        codeLink="https://github.com/AlexMagargiu/FM-TD-App"
                        liveLink="https://alexmagargiu.github.io/FM-TD-App/"
                    />
                    <Projects
                        img={calculatorAppImg}
                        framework={false}
                        tailwind={false}
                        title="Calculator App"
                        codeLink="https://github.com/AlexMagargiu/FM-Calculator-App"
                        liveLink="https://alexmagargiu.github.io/FM-Calculator-App/"
                    />
                    <Projects
                        img={tipAppImg}
                        framework={false}
                        tailwind={false}
                        title="Tip Calculator App"
                        codeLink="https://github.com/AlexMagargiu/FM-Tip-Calculator"
                        liveLink="https://alexmagargiu.github.io/FM-Tip-Calculator/"
                    />
                    <Projects
                        img={signUpFormImg}
                        framework={false}
                        tailwind={false}
                        title="Sign Up Form"
                        codeLink="https://github.com/AlexMagargiu/FM-Sign-Up-Form"
                        liveLink="https://alexmagargiu.github.io/FM-Sign-Up-Form/"
                    />
                </div>
            </section>
            <Contact />
            <Footer />
        </main>
    );
}
