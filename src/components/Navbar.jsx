import React from 'react';
import "./navbar.css";
import Logo from "../images/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md"
import { useState } from 'react';


const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
            
            <div className="container nav__container">
                <Link onClick={() => setIsNavShowing((prev) => !prev)} to="/" className='logo'>
                    <img src={Logo} alt="logo" />
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {links.map((link, index) => (
                        <li key={Math.random()}><NavLink onClick={() => setIsNavShowing((prev) => !prev)} className={({isActive}) => isActive ? 'active-nav' : ''} to={link.path}>{link.name}</NavLink></li>
                    ))}
                </ul>
                <button className='nav__toggle-btn' onClick={() => setIsNavShowing((prev) => !prev)}>
                    {
                        isNavShowing ? <MdOutlineClose /> : <GoThreeBars/>
                    }
                    </button>
            </div>
        </nav>
    )
}

export default Navbar