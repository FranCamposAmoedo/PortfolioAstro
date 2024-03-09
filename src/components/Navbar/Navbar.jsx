import { useState, useEffect } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";
import "./Navbar.css"

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setClicked(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container w-full mx-auto px-2">
            <nav>
                <ul className={`nav-links ${clicked ? "active" : ""}`}>
                    <li>
                        <a href="#home" className="link-hover" onClick={handleClick}>
                            INICIO
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="link-hover" onClick={handleClick}>
                            ACERCA
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="link-hover" onClick={handleClick}>
                            SKILLS
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="link-hover" onClick={handleClick}>
                            PROYECTOS
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="link-hover" onClick={handleClick}>
                            CONTACTO
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1khzbNfIb0s90MncbUNcnb-IB_85HbkFC/view?usp=share_link"
                            className="link-hover"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CV
                        </a>
                    </li>
                </ul>
                <div className="social-container">
                    <a
                        className="social"
                        href="https://www.linkedin.com/in/franciscocamposamoedo/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="../images/icons/LinkedIn.png" alt="LinkedIn" />
                    </a>
                    <a
                        className="social"
                        href="https://github.com/FranCamposAmoedo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="../images/icons/GitHub1.png" alt="GitHub" />
                    </a>
                </div>
                <div className="burger-container">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <div className={`burger-window ${clicked ? "active" : ""}`}></div>
            </nav>
        </div>
    );
};

export default Navbar;