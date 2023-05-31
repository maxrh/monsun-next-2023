"use client"

import { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import { motion  } from 'framer-motion';
import ScrollContext from '../context/ScrollContext';

import styles from './NavAnchorMenu.module.scss'

export default function NavAnchorMenu() {

    const { sectionInView } = useContext(ScrollContext);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setInView(sectionInView);
        console.log(sectionInView);
    }, [sectionInView]);

    const inViewStyle = { color: 'red' };  // Example style for when a section is in view.
  
return (
        <div className={`${styles.container} navbar-start ml-6`}>
            <Link href="/" className="navbar-item" scroll={false}>Overview</Link>
            <Link href="#web" className="navbar-item" scroll={false}>
                <motion.span style={inView === 'web' ? inViewStyle : {}}>Web</motion.span>
            </Link>
            <Link href="#grafik" className="navbar-item" scroll={false}>
                <motion.span style={inView === 'grafik' ? inViewStyle : {}}>Grafik</motion.span>
            </Link>
            <Link href="#foto" className="navbar-item" scroll={false}>
                <motion.span style={inView === 'foto' ? inViewStyle : {}}>Foto</motion.span>
            </Link>
            <Link href="#ord" className="navbar-item" scroll={false}>
                <motion.span style={inView === 'ord' ? inViewStyle : {}}>Ord</motion.span>
            </Link>
        
        </div>
    )
}