import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import github from '../../assets/social_logos/github.png'
import linkedin from '../../assets/social_logos/li.png'
import logo from '../../assets/Logo/LogoBlack.png'

const NewNav = () => {
    const navLinks = ['About', 'Projects', 'Contact']
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    const handleSmoothScroll = (event, link) => {
        event.preventDefault();
        const targetId = link.toLowerCase();
        const targetElement = document.getElementById(targetId);
        const yOffset = -100; 
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setIsOpen(false)
    }

    return (
        <nav className="bg-black bg-opacity-0 fixed w-full z-20 top-0 start-0 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Link className="flex items-center space-x-3 rtl:space-x-reverse" to='/' onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                        <img className="h-10 w-10 md:h-20 w-20" src={logo} alt="logo" />
                        <p className="hidden md:block">Lesley Rotonto</p>
                    </Link>
                </div>
                <div className="flex items-center space-x-5 items-center">
                    <a className="flex items-center hover:animate-lift-up" href="https://www.linkedin.com/in/lesley-rotonto/">
                        <img className='h-5 md:h-8' src={linkedin} alt='linkedin' />
                    </a>
                    <a className="flex items-center hover:animate-lift-up " href="https://github.com/GlitterAngle">
                        <img className='h-5 md:h-8' src={github} alt='github' />
                    </a>
                </div>
                <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-black dark:text-black dark:focus:ring-black" aria-controls="navbar-default" aria-expanded="false">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black rounded-lg bg-customBrown-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-customBrown dark:bg-opacity-75 md:dark:bg-transparent dark:border-black">
                        {navLinks.map((link, linkIndx) => (
                            <li key={linkIndx} className="block py-2 px-3 text-black-900 rounded hover:bg-customBrown-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:underline dark:hover:text-black md:dark:hover:bg-transparent">
                                <a href={`#${link.toLowerCase()}`} onClick={(event) => handleSmoothScroll(event, link)}>
                                    {link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </nav>
    )
}

export default NewNav