import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import toDoAppImg from "./assets/projectPhotos/toDoApp.jpg"

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects 
        img={toDoAppImg} 
        framework={false} 
        tailwind={false} 
        title="ToDo App" 
        codeLink="https://github.com/AlexMagargiu/FM-TD-App"
        liveLink="https://alexmagargiu.github.io/FM-TD-App/"
      />
    </main>
  )
}
