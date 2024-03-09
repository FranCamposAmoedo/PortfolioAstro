import 'aos/dist/aos.css'
import { aosInit } from '../Aos.jsx'

const Skills = ({ title, img, web }) => {
    aosInit()
    return (
        <a data-aos="fade-up" href={web} target="_blank" rel="noreferrer">
            <img className='mx-auto w-8/12 grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110'
                src={img}
                alt={title}
            />
        </a>
    )
};

export default Skills;