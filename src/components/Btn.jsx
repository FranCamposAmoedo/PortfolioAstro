const Btn = ({ name, path }) => {
    return (
        <a href={path} target="_blank" rel="noreferrer">
            <button type="button" className="bg-white text-2xl p-4 m-4 w-60 rounded-3xl hover:bg-teal-300 hover:border-teal-300 hover:text-black transition-all">
                {name}
            </button>
        </a>
    );
};

export default Btn;
