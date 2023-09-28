import { LiaMapMarkedAltSolid } from "react-icons/lia"
import { FaRegEnvelope } from "react-icons/fa"

export default function Contact(){
    return(
        <section className="flex flex-col px-64 py-24 font-jetbrains text-navy" id="contact">
            <h3 className="text-2xl font-bold">CONTACT</h3>
            <h4 className="text-4xl text-navy-blue-soft mb-12 font-bold">Hit me up!👇</h4>
            <div className="flex items-center gap-32">
                <div>
                    <div className="flex items-center gap-4">
                        <div className="border-2 border-navy-blue-soft rounded-full p-1">
                            <LiaMapMarkedAltSolid className="w-10 h-10" />
                        </div>
                        <div>
                            <h4 className="text-2xl text-navy-blue-soft font-extrabold">Location</h4>
                            <p className="text-lg">Arad, Romania</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-4">
                        <div className="border-2 border-navy-blue-soft rounded-full p-2">
                            <FaRegEnvelope className="w-8 h-8" />
                        </div>
                        <div>
                            <h4 className="text-2xl text-navy-blue-soft font-extrabold">Email</h4>
                            <a href="mailto:alexandrumaga2000@gmail.com"><p className="text-lg">alexandrumaga2000@gmail.com</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}