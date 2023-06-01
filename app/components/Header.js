"use client"

import { useState, useEffect } from 'react';
import { motion  } from 'framer-motion';

import Link from 'next/link'
import styles from './Header.module.scss'
import ThemeSwitchWidget from './ThemeSwitchWidget'
import NavAnchorMenu from './NavAnchorMenu'


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const isBrowser = () => typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser()) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className='site-header'>
            <section className='hero is-medium is-background-light'>
                <div className="hero-head is-flex">
                    <motion.nav 
                        className="navbar is-fixed-top" 
                        role="navigation" 
                        aria-label="main navigation"
                        animate={{ padding: isScrolled ? '0rem 1rem' : '1rem 1rem', backgroundColor: isScrolled ? 'var(--body-background-color-light)' : 'transparent' }}
                        initial={{ padding: '1rem 1rem' }}
                        transition={{ duration: .25 }}
                    >
                        <div className="navbar-brand">
                            <Link className="navbar-item" href="/">Logo</Link>
                            <Link href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </Link>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                                <motion.div className="hero-head-anchor-menu navbar-start ml-6"
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

                                <Link className="navbar-item is-active" href="#">Hvad</Link>
                                <Link className="navbar-item" href="#">Hvordan</Link>
                                <Link className="navbar-item " href="#">Hvorfor</Link>

                                <div className="navbar-item has-dropdown is-hoverable">
                                    <Link className="navbar-link" href="#">Hvem</Link>
                                    <div className="navbar-dropdown">
                                        <Link className="navbar-item" href="#">Cases</Link>
                                        <Link className="navbar-item" href="#">Kontakt</Link>
                                        <Link className="navbar-item" href="#">Om Monsun</Link>

                                    </div>
                                </div>

                                <div className="navbar-item">
                                    <ThemeSwitchWidget />
                                </div>
                            </div>
                        </div>
                    </motion.nav>
                </div>

                <motion.div 
                    className="hero-body"
                    initial={{ opacity: 1 }}
                    animate={{ 
                        opacity: isScrolled ? 0 : 1 
                    }}
                    transition={{ duration: .15 }} 
                >
                    
                    <h1 className='page-title'>

                        Lorem ipsum is placeholder text commonly used in the graphic, print, and <span> Monsun</span> industries for previewing layouts and visual mockups
                    
                    
                    </h1>
                </motion.div>

                <div className="hero-foot">
                        <nav className="container pb-4 pt-4">
                            <motion.div className="hero-foot-anchor-menu navbar-start"
                                animate={{ 
                                    opacity: (!isScrolled && isHovering) ? 0 : isScrolled ? 0 : 1, 
                                    x: (!isScrolled && isHovering) ? -30 : isScrolled ? -30 : 0 
                                }}
                              
                                initial={{ opacity: 1 }}
                                transition={{ duration: .15, delay: .25 }} 
                            >
                                <NavAnchorMenu isScrolled={isScrolled} />
                            </motion.div>
                        </nav>
                    
                </div>
            </section>
        </header>
    )
}