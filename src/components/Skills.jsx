const Skills = ({ title, img, web }) => {
    return (
        <a href={web} target="_blank" rel="noreferrer">
            <img className='w-8/12 grayscale transition-all duration-500 hover:grayscale-0'
                src={img}
                alt={title}
            />
        </a>
    )
};

export default Skills;