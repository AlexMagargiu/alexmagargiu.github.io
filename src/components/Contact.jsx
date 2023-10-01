import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { FaRegEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            className="flex flex-col items-center md:items-start px-8 md:px-64 py-20 font-jetbrains text-primary-text bg-none-bg"
            id="contact"
        >
            <h3 className="text-xl md:text-2xl font-bold">CONTACT</h3>
            <h4 className="text-3xl md:text-4xl text-secondary-text mb-4 md:mb-12 font-bold">
                Hit me up!👇
            </h4>
            <div className="flex flex-col flex-wrap md:flex-row items-center gap-4 md:gap-14">
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                    <div className="border-2 border-secondary-text rounded-full p-1">
                        <LiaMapMarkedAltSolid className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl text-secondary-text font-extrabold text-center md:text-start">
                            Location
                        </h4>
                        <p className="text-sm md:text-lg">Arad, Romania</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                    <div className="border-2 border-secondary-text rounded-full p-2">
                        <FaRegEnvelope className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl text-secondary-text font-extrabold text-center md:text-start">
                            Email
                        </h4>
                        <a href="mailto:alexandrumaga2000@gmail.com">
                            <p className="text-sm md:text-lg">
                                alexandrumaga2000@gmail.com
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
