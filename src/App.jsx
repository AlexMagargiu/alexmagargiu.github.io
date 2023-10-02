import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectList from "./components/ProjectList";
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
            <ProjectList />
            <Contact />
            <Footer />
        </main>
    );
}
