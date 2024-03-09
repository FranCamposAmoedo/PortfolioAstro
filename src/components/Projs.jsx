import Btn from "./Btn";
import 'aos/dist/aos.css'
import { aosInit } from '../Aos.jsx'

const Projs = ({ img, title, web, gh, text }) => {
    aosInit()
    return (
        <div data-aos="zoom-out" className="flex flex-col items-center lg:my-8 container">
            <a className="inline-block max-w-[60%] grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105" href={web} target="_blank" rel="noreferrer">
                <img className="inline-block max-w-full rounded-3xl drop-shadow-lg "
                    src={img}
                    alt={title}
                />
            </a>
            <div className="max-w-[60%] items-center my-8 container">
                <h3 className="text-4xl mb-4 text-center lg:text-start font-bold">{title}</h3>
                <p className="hyphens-auto sm:hyphens-none text-sm sm:text-base">
                    {text}
                </p>
                {gh ?
                    <div className="flex justify-around mt-6 flex-wrap">
                        <Btn name="Página" path={web} />
                        <Btn name="Repositorio" path={gh} />
                    </div> :
                    <div className="flex justify-center mt-6 flex-wrap">
                        <Btn name="Página" path={web} />
                    </div>
                }
            </div>
        </div>
    );
};

export default Projs;