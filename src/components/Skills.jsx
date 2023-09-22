import html5 from "../assets/html5.svg"
import css3 from "../assets/css3.svg"
import javascript from "../assets/javascript.svg"
import reactlogo from "../assets/react.svg"
import tailwind from "../assets/tailwind.svg"

export default function Skills(){
    return(
        <section className="flex flex-col items-center justify-center bg-navy text-light-gray font-jetbrains">
            <div className="flex items-center justify-around w-full p-12">
                <div className="flex flex-col items-center justify-center gap-2 w-44">
                    <img src={html5} className="h-16 w-16"></img>
                    <h4 className="text-2xl">HTML</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44">
                    <img src={css3} className="h-16 w-16"></img>
                    <h4 className="text-2xl">CSS</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44">
                    <img src={javascript} className="h-16 w-16"></img>
                    <h4 className="text-2xl">JavaScript</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44">
                    <img src={reactlogo} className="h-16 w-16"></img>
                    <h4 className="text-2xl">React</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44">
                    <img src={tailwind} className="h-16 w-16"></img>
                    <h4 className="text-2xl">Tailwind CSS</h4>
                </div>
            </div>
        </section>
    )
}