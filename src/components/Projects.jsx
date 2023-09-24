import { useState } from "react"
import githublogo from "../assets/github.svg"

export default function Projects(props){
    const [hover, setHover] = useState(false)

    function handleMouseEnter(){
        setHover(true)
    }

    function handleMouseLeave(){
        setHover(false)
    }

    return(
        <section className="flex flex-col items-center justify-center gap-4 text-navy font-jetbrains bg-medium-gray">
            <h3>Projects</h3>
            <div className="flex flex-col items-center justify-center max-w-2xl p-4 bg-white rounded-2xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={props.img} className="max-w-sm rounded-2xl relative"></img>
                {hover && (
                    <div className="absolute flex flex-col items-center bg-navy-blue opacity-25">
                        <div>
                            <div className="flex flex-col items-center">
                                <img src={githublogo} className="w-6 h-6"></img>
                                <p>Code</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                )} 
            </div>
        </section>
    )
}