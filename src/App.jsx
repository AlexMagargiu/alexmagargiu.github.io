import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import toDoAppImg from "./assets/projectPhotos/toDoApp.jpg"
import calculatorAppImg from "./assets/projectPhotos/calculatorApp.jpg"
import tipAppImg from "./assets/projectPhotos/tipApp.jpg"
import signUpFormImg from "./assets/projectPhotos/signUpForm.jpg"
import portfolioImg from "./assets/projectPhotos/portfolio.png"
import notesAppImg from "./assets/projectPhotos/notesApp.png"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <h3 className="text-navy text-3xl py-24 bg-medium-gray flex justify-center" id="projects">Projects</h3>
      <section className="flex flex-wrap items-center justify-center px-10 pb-20 gap-20 text-white font-jetbrains bg-medium-gray">
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
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
