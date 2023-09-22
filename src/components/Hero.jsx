import { TypeAnimation } from 'react-type-animation';
import githublogo from '../assets/github-svgrepo-com.svg'
import linkedinlogo from '../assets/linkedin-svgrepo-com.svg'
import emaillogo from '../assets/email-svgrepo-com.svg'
import profilepicture from '../assets/profilepicture.jpg'

export default function Hero(){
    return(
        <section className='flex items-center justify-center gap-56 h-[calc(100vh-80px)] bg-medium-gray font-jetbrains text-navy'>
            <div>
                <span className='flex items-center gap-3'>
                    <a href='https://github.com/AlexMagargiu' target='_blank'><img className="h-8 mb-2" src={githublogo}></img></a>
                    <a href='https://www.linkedin.com/in/alexandru-magargiu-b47833292/' target='_blank'><img className="h-8 mb-2" src={linkedinlogo}></img></a>
                        <div className='flex items-center gap-2 border-2 border-navy rounded-3xl px-3 py-1 mb-2'>
                            <a href='mailto:alexandrumaga2000@gmail.com'>
                                <img src={emaillogo} className="h-6"></img>
                            </a>
                            <p>alexandrumaga2000@gmail.com</p>
                        </div>
                </span>
                <h1 className='flex flex-col items-start text-2xl'>Hello, I'm<span className='font-extrabold text-5xl'>Magargiu <span className='text-navy-blue-soft'>Alexandru</span></span></h1>
                <TypeAnimation
                    sequence={[
                        'A Frontend Web Developer',
                        1000, 
                        'A Web Designer',
                        1000,
                        'A UX Developer',
                        1000
                    ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block'}}
                repeat={Infinity}
                />
            </div>
            <div className='h-[26rem] w-[26rem] drop-shadow-[0_5px_10px_rgba(53,_162,_159,_0.7)]'>
                <img className='rounded-[3.5rem]' src={profilepicture}></img>
            </div>
        </section>
    )
}