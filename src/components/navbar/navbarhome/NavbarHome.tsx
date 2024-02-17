import styles from './navbar-home.module.css';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface props {
    profile: React.MutableRefObject<null>
    about: React.MutableRefObject<null>
    project: React.MutableRefObject<null>
}

const NavbarHome = ({ profile, about, project }: props) => {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle(styles.responsive_navbar);
        }
    };

    const scrollToSection = (elementRef: React.RefObject<HTMLBodyElement>) => {
        window.scrollTo({
            top: elementRef.current?.offsetTop,
            behavior: 'smooth'
        })
    }
    return (
        <header className={styles.header}>
            <div>
                <h3>Portfolio</h3>
            </div>
            <nav ref={navRef} className={styles.nav}>
                <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
                <Link className={location.pathname === '/About' ? 'active' : ''} to="/About">About</Link>
                <Link className={location.pathname === '/Project' ? 'active' : ''} to="/Project">Project</Link>
                <li onClick={() => scrollToSection(profile)}>Home</li>
                <li onClick={() => scrollToSection(about)}>About</li>
                <li onClick={() => scrollToSection(project)}>Project</li>
                <motion.button
                    className={`${styles.nav_btn} ${styles.nav_close_btn}`}
                    title='Untuk nutup Navbar'
                    onClick={showNavbar}
                    initial={{ scale: 1, opacity: 1 }}
                    whileTap={{ scale: 1.2, opacity: 0.8, rotate: -180 }}
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
                className={styles.nav_btn}
                title='Untuk Membuka Navbar'
                onClick={showNavbar}
                initial={{ scale: 1, opacity: 1 }}
                whileTap={{ scale: 1.2, opacity: 0.8, rotate: 180 }}
                transition={{
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.2
                }}
            >
                <FaBars />
            </motion.button>
        </header>
    )
}

export default NavbarHome