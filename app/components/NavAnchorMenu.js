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

  
return (
        <div className={`${styles.container} navbar-start ml-6`}>

            <Link href="#" className="navbar-item" scroll={false}>Top</Link>
            <Link href="#web" className={`navbar-item ${inView === 'web' ? 'is-active' : ''}`} scroll={false}>Web</Link>
            <Link href="#grafik" className={`navbar-item ${inView === 'grafik' ? 'is-active' : ''}`} scroll={false}>Grafik</Link>
            <Link href="#foto" className={`navbar-item ${inView === 'foto' ? 'is-active' : ''}`} scroll={false}>Foto</Link>
            <Link href="#ord" className={`navbar-item ${inView === 'ord' ? 'is-active' : ''}`} scroll={false}>Ord</Link>
        
        </div>
    )
}