"use client"

import { useState, useLayoutEffect  } from 'react'
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'
import styles from './ThemeSwitchWidget.module.scss'; // import the CSS Module

export default function ThemeSwitchWidget() {
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
            <div className={styles.themeSwitchWidget}>
                <span className={styles.label}>Theme:</span>
                <div className={styles.switch} >
                    <div className={styles.handle} ></div>
                </div>
            </div>
        )
    }

return (
    <div className={styles.themeSwitchWidget}>
        <span className={styles.label}>Theme:</span>

        <div 
            className={styles.switch}
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
                    stiffness: 600,
                    damping: 50,
                }}
                            
            ></motion.div>
        </div >
    </div >
  );
}
