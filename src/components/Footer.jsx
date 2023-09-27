import githubFooterImg from "../assets/svg/githubfooter.svg"
import linkedinFooterImg from "../assets/svg/linkedinfooter.svg"

export default function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center bg-navy font-jetbrains text-light-gray p-20 gap-12">
            <div className="flex gap-8">
                <a href="https://github.com/AlexMagargiu"><img src={githubFooterImg} className="w-10 h-10"></img></a>
                <a href="https://www.linkedin.com/in/alexandru-magargiu-b47833292/"><img src={linkedinFooterImg} className="w-10 h-10"></img></a>
            </div>
            <p>All rights reserved © 2023 Magargiu Alexandru Razvan</p>
        </footer>
    )
}