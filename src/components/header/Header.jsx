import { useState } from 'react';
import './Header.css';


const Header = () => {

    // Toggle
    const [toggle, setToggle] = useState(false);

    // Header bottom border visible after scrolling
    window.addEventListener("scroll", function(){
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80) {
            header.classList.add("show-header")
        }
        else{
            header.classList.remove('show-header')
        }
    })

    const [active, setActive] = useState('#home')

    return (
        <header className="header">
            <nav className="nav nav container">
                <a href="index.html" className="nav__logo ">JOEL</a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" onClick={()=>setActive('#home')} className={active === '#home' ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate  nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about"onClick={()=>setActive('#about')} className={active === '#about' ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={()=>setActive('#skills')} className={active === '#skills' ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" onClick={()=>setActive('#services')} className={active === '#services' ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={()=>setActive('#portfolio')} className={active === '#portfolio' ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i>Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={()=>setActive('#contact')} className={active === '#contact' ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>

                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>setToggle(false)}></i>
                </div>
                

                    <div className="nav__toggle">
                    <i className="uil uil-apps" onClick={()=>setToggle(true)}></i>
                    </div>
            </nav>
        </header>
    )
}

export default Header;