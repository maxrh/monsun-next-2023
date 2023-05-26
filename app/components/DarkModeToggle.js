"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes'
import styles from './DarkModeToggle.module.scss'; // import the CSS Module

export default function DarkModeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        setMounted(true)
    }, [])
    

    if (!mounted) {
        return <div className={styles.container}><div className={styles.handle}></div></div>
    }

return (
    <div 
        className={styles.container}
        data-darkmode={theme === 'dark'}
        onClick={toggleTheme}
        style={{ justifyContent: theme === 'dark' ? 'flex-end' : 'flex-start' }}
    >

        <motion.div layout className={styles.handle}></motion.div>

    </div>
  );
}
