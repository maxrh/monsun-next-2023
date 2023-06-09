"use client"

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import ScrollContext from '../context/ScrollContext';
import styles from './NavAnchorMenu.module.scss'
import { IoChevronForward } from "react-icons/io5";

export default function NavAnchorMenu({ isScrolled }) {

    const { sectionInView } = useContext(ScrollContext);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setInView(sectionInView);
    }, [sectionInView]);

    const isBrowser = () => typeof window !== 'undefined'; 

    const scrollToTop = (event) => {
        event.preventDefault();
        if (!isBrowser()) return;
        window.scrollTo({ top: 0 });
    }
  
    return (
            <ul className={`${styles.navAnchorMenu} anchor-menu`}>

                <li><Link href="#" onClick={scrollToTop} className={`navbar-item ${isScrolled ? '' : 'is-active'}`} scroll={false}>Intro</Link></li>
                <li><Link href="#web" className={`navbar-item ${isScrolled && inView === 'web' ? 'is-active' : ''}`} scroll={false}>Web</Link></li>
                <li><Link href="#grafik" className={`navbar-item ${isScrolled && inView === 'grafik' ? 'is-active' : ''}`} scroll={false}>Grafik</Link></li>
                <li><Link href="#foto" className={`navbar-item ${isScrolled && inView === 'foto' ? 'is-active' : ''}`} scroll={false}>Foto</Link></li>
                <li><Link href="#ord" className={`navbar-item ${isScrolled && inView === 'ord' ? 'is-active' : ''}`} scroll={false}>Ord</Link></li>
            
            </ul>
        )
}