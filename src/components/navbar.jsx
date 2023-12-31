import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'
import './navbar.css'
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="nav">
                <div className="header-con">
                    <div className="logo">
                        <a href='https://maddddx.github.io/Maddy.github.io/'><img src='./!!!logo5.png'></img></a>
                    </div>

                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link">
                            <Link className='menu-text' to='about' spy={true} smooth={true} offset={-150} duration={450} onClick={closeMobileMenu}>About</Link>
                        </li>

                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link className='menu-text' to='projects' spy={true} smooth={true} offset={-150} duration={450} onClick={closeMobileMenu}>Projects</Link>
                        </li>

                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link className='menu-text' to='certificates' spy={true} smooth={true} offset={-120} duration={450} onClick={closeMobileMenu}>Certificates</Link>
                        </li>

                    </ul>

                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar