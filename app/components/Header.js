"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link'
import ThemeSwitchWidget from './ThemeSwitchWidget'
import NavAnchorMenu from './NavAnchorMenu'
import SquaresGrid from "./SquaresGrid";
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
            <section className='hero is-background-light'>
                <div className="hero-head is-flex">
                        <motion.nav 
                            className="navbar is-fixed-top pl-4 pr-4" 
                            role="navigation" 
                            aria-label="main navigation"
                            initial={{ 
                                opacity: 0,
                                height: 'var(--navbar-big-height)', 
                                backgroundColor: 'var(--body-background-color-transparent)', 
                                boxShadow: '1px 1px 12px rgba(0, 0, 0, 0)' 
                            }}
                            animate={{ 
                                opacity: 1,
                                height: isScrolled ? 'var(--navbar-height)' : 'var(--navbar-big-height)',
                                backgroundColor: isScrolled ? 'var(--body-background-color)' : 'var(--body-background-color-transparent)', 
                                boxShadow: isScrolled ? 'var(--navbar-shadow)' : '1px 1px 12px rgba(0, 0, 0, 0)' 
                            }}

                            transition={{ duration: .5 }}

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
                        <div className="hero-body-box">
                            <h1 className='page-title'>Colors</h1>
                        </div>

                    </motion.div>
                    

                    <div className="hero-foot">
                        <nav className="navbar container">
                            <motion.div 
                                key="hero-foot-anchor-menu"
                                className="hero-foot-anchor-menu navbar-start"
                                animate={{ 
                                    opacity: (!isScrolled && isHovering) ? 0 : isScrolled ? 0 : 1, 
                                    x: (!isScrolled && isHovering) ? -30 : isScrolled ? -30 : 0 
                                }}
                            
                                initial={{ opacity: 0, x: -30 }}
                                transition={{ duration: .5, delay: 1 }} 
                            >
                                <NavAnchorMenu isScrolled={isScrolled} />
                            </motion.div>
                        </nav>
                    </div>
                    

                    <motion.div  
                        className="hero-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <SquaresGrid className="hero-squares hero-grid-item-1" size={10} gap={15} />
                    </motion.div>
            </section>
        </header>
    )
}