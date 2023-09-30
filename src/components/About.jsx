import webimg from "../assets/images/webdev.png";

export default function About() {
    return (
        <section
            className="flex md:flex-row flex-col items-center justify-center md:gap-36 bg-none-bg md:h-[calc(100vh-200px)] font-jetbrains text-primary-text"
            id="about"
        >
            <img
                src={webimg}
                className="rounded-[2rem] md:rounded-[4rem] md:w-auto md:h-auto md:mt-0 mt-10 w-[317px] h-[250px] drop-shadow-[0_3px_3px_var(--secondary-text)]"
            ></img>
            <div className="flex flex-col md:items-start items-center justify-center gap-6 md:gap-2 p-10 md:p-0">
                <h3 className="text-3xl md:text-4xl text-secondary-text">
                    About Me
                </h3>
                <p className="max-w-xl md:max-w-2xl mb-2">
                    Hello there! I'm Magargiu Alexandru Razvan, a passionate
                    self-taught Front-End Developer based in Arad, Romania. I am
                    23 years old and starting a Computer Science degree at Aurel
                    Vlaicu University situated in Arad in the fall of 2023. I
                    strive to create visually appealing, responsive, and
                    interactive websites that not only look great but also
                    provide seamless user experiences. In my self-taught
                    journey, I've honed my skills in the fundamental trio of web
                    development: HTML, CSS, and JavaScript reaching an
                    intermediate level of proficiency. I've also begun to
                    explore the realm of modern web development by diving into
                    the React framework and experimenting with the power and
                    simplicity of TailwindCSS.
                </p>
                <p className="max-w-xl md:max-w-2xl">
                    Beyond the screen and code editor, you'll often find me
                    pursuing diverse interests. Whenever I'm outside, you'll
                    find me either tending to my garden or walking my dog, Kuma.
                    Indoors, you'll either find me enjoying some video games or
                    reading political books.
                </p>
            </div>
        </section>
    );
}
