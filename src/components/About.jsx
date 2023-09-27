import webimg from "../assets/images/webdev.png"

export default function About(){
    return(
        <section className="flex items-center justify-center gap-36 bg-white h-[calc(100vh-200px)] font-jetbrains text-navy">
            <img src={webimg} className="rounded-[4rem] drop-shadow-[0_5px_10px_rgba(53,_162,_159,_0.7)]"></img>
            <div className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-4xl text-navy-blue-soft">About Me</h3>
                <p className="max-w-2xl mb-2">
                    Hello there! I'm Magargiu Alexandru Razvan, a passionate self-taught Front-End Developer based in Arad, Romania. I am 23 years old and starting a Computer Science degree at Aurel Vlaicu University situated in Arad in the fall of 2023. I strive to create visually appealing, responsive, and interactive websites that not only look great but also provide seamless user experiences. In my self-taught journey, I've honed my skills in the fundamental trio of web development: HTML, CSS, and JavaScript reaching an intermediate level of proficiency. I've also begun to explore the realm of modern web development by diving into the React framework and experimenting with the power and simplicity of TailwindCSS.
                </p>
                <p className="max-w-2xl">
                    Beyond the screen and code editor, you'll often find me pursuing diverse interests. Whenever I'm outside, you'll find me either tending to my garden or walking my dog, Kuma. Indoors, you'll either find me enjoying some video games or reading political books.
                </p>
            </div>
        </section>
    )
}