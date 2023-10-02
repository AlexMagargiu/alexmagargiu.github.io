import Project from "./Project";
import portfolioImg from "../assets/projectPhotos/portfolio.png";
import notesAppImg from "../assets/projectPhotos/notesApp.png";
import toDoAppImg from "../assets/projectPhotos/toDoApp.jpg";
import calculatorAppImg from "../assets/projectPhotos/calculatorApp.jpg";
import tipAppImg from "../assets/projectPhotos/tipApp.jpg";
import signUpFormImg from "../assets/projectPhotos/signUpForm.jpg";

export default function ProjectList() {
    return (
        <section
            className="flex flex-col items-center justify-center py-20 gap-4 md:gap-8 text-white font-jetbrains bg-medium-bg"
            id="projects"
        >
            <h3 className="text-primary-text text-3xl p-8 bg-medium-bg flex justify-center">
                Projects
            </h3>
            <div className="flex flex-wrap items-center justify-center px-10 md:pb-20 pb-8 gap-8 md:gap-20 text-white font-jetbrains bg-medium-bg">
                <Project
                    img={portfolioImg}
                    framework={true}
                    tailwind={true}
                    title="Portfolio"
                    codeLink="https://github.com/AlexMagargiu/alexmagargiu.github.io"
                    liveLink="https://alexmagargiu.github.io/"
                />
                <Project
                    img={notesAppImg}
                    framework={true}
                    tailwind={false}
                    title="Notes App"
                    codeLink="https://github.com/AlexMagargiu/React-Notes-App"
                    liveLink="https://alexmagargiu.github.io/React-Notes-App/"
                />
                <Project
                    img={toDoAppImg}
                    framework={false}
                    tailwind={false}
                    title="ToDo App"
                    codeLink="https://github.com/AlexMagargiu/FM-TD-App"
                    liveLink="https://alexmagargiu.github.io/FM-TD-App/"
                />
                <Project
                    img={calculatorAppImg}
                    framework={false}
                    tailwind={false}
                    title="Calculator App"
                    codeLink="https://github.com/AlexMagargiu/FM-Calculator-App"
                    liveLink="https://alexmagargiu.github.io/FM-Calculator-App/"
                />
                <Project
                    img={tipAppImg}
                    framework={false}
                    tailwind={false}
                    title="Tip Calculator App"
                    codeLink="https://github.com/AlexMagargiu/FM-Tip-Calculator"
                    liveLink="https://alexmagargiu.github.io/FM-Tip-Calculator/"
                />
                <Project
                    img={signUpFormImg}
                    framework={false}
                    tailwind={false}
                    title="Sign Up Form"
                    codeLink="https://github.com/AlexMagargiu/FM-Sign-Up-Form"
                    liveLink="https://alexmagargiu.github.io/FM-Sign-Up-Form/"
                />
            </div>
        </section>
    );
}
