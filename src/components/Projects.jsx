import { useState } from "react"
import newpage from "../assets/newpage.svg"
import githubwhitelogo from "../assets/githubwhite.svg"

export default function Projects(props){
    const [hover, setHover] = useState(false)

    function handleMouseEnter(){
        setHover(true)
    }

    function handleMouseLeave(){
        setHover(false)
    }

    return(
        <section className="flex flex-col items-center justify-center gap-8 text-white font-jetbrains bg-medium-gray">
            <h3 className="text-navy text-3xl pt-8">Projects</h3>
            <div className="flex flex-col items-center justify-center max-w-2xl p-4 bg-white rounded-2xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={props.img} className="max-w-sm rounded-2xl relative"></img>
                {hover && (
                    <div className="absolute flex flex-col items-center justify-end bg-navy-blue bg-opacity-50 w-[26rem] h-[19.5rem] rounded-2xl">
                        <div className="flex items-center justify-center gap-8 mb-12">
                            <div className="flex flex-col items-center gap-1">
                                <a href={props.codeLink}><img src={githubwhitelogo} className="w-8 h-8"></img></a>
                                <p>Code</p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                            <a href={props.liveLink}><img src={newpage} className="w-8 h-8"></img></a>
                                <p>Live</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-6 mb-4">
                            <div className="border-solid border-2 border-white p-1 rounded-lg">
                                <p>{props.framework ? "React" : "Vanilla JavaScript"}</p>
                            </div>
                            <div className="border-solid border-2 border-white p-1 rounded-lg">
                                <p>{props.tailwind ? "Tailwind CSS" : "Vanilla CSS"}</p>
                            </div>
                        </div>
                        <h3 className="text-3xl mb-4">{props.title}</h3>
                    </div>
                )} 
            </div>
        </section>
    )
}