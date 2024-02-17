import { useRef } from 'react';
import navbarStyle from './navbar.module.css'
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle(navbarStyle.responsive_navbar);
        }
    };

    return (
        <header className={navbarStyle.header}>
            <div>
                <h3 className={navbarStyle.h3}>Portfolio</h3>
            </div>
            <nav ref={navRef} className={navbarStyle.nav}>
                <Link className={location.pathname === '/' ? navbarStyle.active : ''} to="/">Home</Link>
                <Link className={location.pathname === '/About' ? navbarStyle.active : ''} to="/About">About</Link>
                <Link className={location.pathname === '/Project' ? navbarStyle.active : ''} to="/Project">Project</Link>
                <motion.button
                    className={`${navbarStyle.nav_btn} ${navbarStyle.nav_close_btn}`}
                    title='Untuk Menutup Navbar'
                    onClick={showNavbar}
                    initial={{ scale: 1, opacity: 1 }}
                    whileTap={{ scale: 1.2, opacity: 0.8, rotate: 180 }}
                    transition={{
                        type: "spring",
                        bounce: 0.1,
                        duration: 0.2
                    }}
                >
                    <FaTimes />
                </motion.button>
            </nav>
            <motion.button
                className={navbarStyle.nav_btn}
                title='Untuk membuka Navbar'
                onClick={showNavbar}
                initial={{ scale: 1, opacity:1 }}
                whileTap={{ scale: 1.2, opacity: 0.8, rotate: 180 }}
                transition={{
                    type: "spring",
                    bounce: 0.1,
                    duration:0.2
                }}
            >
                <FaBars />
            </motion.button>
        </header>
    )
}

export default Navbar