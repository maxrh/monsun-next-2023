"use client"

import { useState, useLayoutEffect  } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes'
import styles from './DarkModeToggle.module.scss'; // import the CSS Module

export default function DarkModeToggle() {
    const [mounted, setMounted] = useState(false)
    const [isBig, setIsBig] = useState(false);
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    };

    useLayoutEffect(() => {
        setMounted(true)
    }, []);



    if (!mounted) {
        return (
            <div className={styles.darkModeWidget}>
                <span className={`has-text-grey mr-5 ${styles.darkModeLabel}`}>Theme:</span>
                <div className={styles.handleContainer} >
                    <div className={styles.handle} ></div>
                </div>
            </div>
        )
    }

return (
    <div className={styles.darkModeWidget}>
        <span className={`has-text-grey mr-5 ${styles.darkModeLabel}`}>Theme:</span>

        <div 
            className={styles.handleContainer}
            onMouseDown={() => setIsBig(true)}
            onMouseUp={() => { toggleTheme(); setIsBig(false); }}
            onMouseLeave={() => setIsBig(false)}
        >

            <motion.div 
                layout
                className={styles.handle}
                data-isbig={isBig}
                style={{ borderRadius: "40px" }}  // Add this line

                transition={{ 
                    type: "spring",
                    stiffness: 700,
                    damping: 20,
                }}
                            
            ></motion.div>
        </div >
    </div >
  );
}
