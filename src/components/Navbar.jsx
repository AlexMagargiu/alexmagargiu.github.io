export default function Navbar(){
    return(
        <nav className="font-jetbrains flex items-center justify-between px-14 py-6 bg-light-gray text-navy ">
            <h3 className="font-bold text-2xl cursor-pointer hover:text-navy-blue">Maga.dev</h3>
            <ul className="flex items-center justify-between gap-10">
                <li className="cursor-pointer hover:text-navy-blue">Home</li>
                <li className="cursor-pointer hover:text-navy-blue">About Me</li>
                <li className="cursor-pointer hover:text-navy-blue">Skills</li>
                <li className="cursor-pointer hover:text-navy-blue">Projects</li>
                <li className="cursor-pointer hover:text-navy-blue">Contact</li>
            </ul>
            {/* Theme toggler */}
            <div></div>
        </nav>
    )
}