"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import ThemeSwitchWidget from './ThemeSwitchWidget'
import NavAnchorMenu from './NavAnchorMenu'
import styles from './Header.module.scss'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const isBrowser = () => typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser()) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) { setIsScrolled(true) } else { setIsScrolled(false) }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) };
    }, []);

    return (
        <header className='site-header'>

            <nav 
                className="main-navigation navbar container" 
                role="navigation" 
                aria-label="main navigation"
                // initial={{ 
                //     opacity: 0,
                //     height: 'var(--navbar-big-height)', 
                //     backgroundColor: 'var(--body-background-color-transparent)', 
                //     boxShadow: '1px 1px 12px rgba(0, 0, 0, 0)' 
                // }}
                // animate={{ 
                //     opacity: 1,
                //     height: isScrolled ? 'var(--navbar-height)' : 'var(--navbar-big-height)',
                //     backgroundColor: isScrolled ? 'var(--body-background-color)' : 'var(--body-background-color-transparent)', 
                //     boxShadow: isScrolled ? 'var(--navbar-shadow)' : '1px 1px 12px rgba(0, 0, 0, 0)' 
                // }}

                // transition={{ duration: .5 }}

            >

                            <div className="navbar-brand">
                                <Link className="navbar-item site-logo" href="/">monsun</Link>
                                <Link href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">

                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </Link>
                            </div>

                            <div id="navbarBasicExample" className="navbar-menu">
                                    <motion.div className="header-anchor-menu navbar-start ml-3"
                                        animate={{ 
                                            opacity: (!isScrolled && isHovering) ? 1 : isScrolled ? 1 : 0, 
                                            x: (!isScrolled && isHovering) ? 0 : isScrolled ? 0 : -30 
                                        }}
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: .15, delay: .25 }} 
                                        onHoverStart={() => setIsHovering(true)}
                                        onHoverEnd={() => setIsHovering(false)}
                                    >
                                        <NavAnchorMenu isScrolled={isScrolled} />
                                    </motion.div>
                                <div className="main-menu navbar-end">

                                    <Link className="navbar-item is-active" href="/">Hvad</Link>
                                    <Link className="navbar-item" href="/hvordan">Hvordan</Link>
                                    <Link className="navbar-item " href="/hvorfor">Hvorfor</Link>

                                    <div className="navbar-item has-dropdown is-hoverable">
                                        <Link className="navbar-link" href="#">Hvem</Link>
                                        <div className="navbar-dropdown">
                                            <Link className="navbar-item" href="#">Cases</Link>
                                            <Link className="navbar-item" href="#">Kontakt</Link>
                                            <Link className="navbar-item" href="#">Om Monsun</Link>

                                        </div>
                                    </div>

                                    <div className="navbar-item pr-0">
                                        <ThemeSwitchWidget />
                                    </div>
                                </div>
                            </div>

                        </nav>

                        
        </header>
    )
}