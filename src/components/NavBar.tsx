import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import logo from '../assets/logo.png';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 5000);
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ];

    return (
        <>
            <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0 shadow-lg rounded-sm">
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className="flex space-x-16 items-center">
                        <Link to="/" onClick={scrollToTop} className='text-4xl font-bold flex items-center space-x-5'>
                            <img src={logo} alt="logo" className='w-12 p-2 rounded-full border-2 border-stone-400 gradientBg' />
                            <span> W&E<code className="text-sm font-semibold">-ltd.</code> </span>
                        </Link>
                        <ul className='md:flex space-x-12 hidden'>
                            {navItems.map(({ link, path }) => (
                                <li key={link} className='cursor-pointer'>
                                    <ScrollLink
                                        activeClass="active"
                                        to={path}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="/" className="hidden lg:flex items-center hover:text-gray-500">
                            <GrLanguage className="mr-2" aria-label="Language icon" />
                            <span>Language</span>
                        </a>
                        <button className='gradientBg py-2 px-4 transition-all duration-300 rounded hover:text-stone-100 hover:bg-gray-500'>
                            Sign up
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300" aria-label="Toggle menu">
                            {isMenuOpen ? (<FaXmark className="w-6 h-6 text-black" />) : (<FaBars className="w-6 h-6 text-black" />)}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 mx-2 rounded-b-md gradientBg ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {navItems.map(({ link, path }) => (
                    <ScrollLink
                        key={link}
                        to={path}
                        activeClass='active'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='block hover:text-yellow-600'
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link}
                    </ScrollLink>
                ))}
            </div>
        </>
    )
}

export default NavBar;
