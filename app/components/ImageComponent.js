"use client"

import { useRef, useEffect } from "react";
import { motion, useSpring, useInView, useScroll, useTransform, useMotionValue } from "framer-motion";
import styles from './imageComponent.module.scss'
import Image from 'next/image'

function ImageComponent({ side, ...props }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 1, margin: "-300px 0px -300px 0px" })
    
    const { scrollYProgress } = useScroll({ target: ref });

    const scale = useSpring(0.5, { stiffness: 200, damping: 10 });
    const opacity = useSpring(0, { stiffness: 200, damping: 10 });

    const boxScale = useSpring(0.5, { stiffness: 200, damping: 10, delay: 200  });
    const boxOpacity = useSpring(0, { stiffness: 200, damping: 10, delay: 200  });
    
    const minDeg0 = 5, maxDeg0 = 10;
    const minDeg1 = 5, maxDeg1 = 15;
    const minDeg2 = 345, maxDeg2 = 355;
    
    const boxRotateModifier = Math.floor(Math.random() * (maxDeg0 - minDeg0 + 1)) + minDeg0

    const initialRotateY = side === 'left' ? 0 : 360;
    const targetRotateY = side === 'left' 
        ? Math.floor(Math.random() * (maxDeg1 - minDeg1 + 1)) + minDeg1
        : Math.floor(Math.random() * (maxDeg2 - minDeg2 + 1)) + minDeg2;


    const boxInitialRotateY = initialRotateY;
    const boxTargetRotateY = side === 'left' ? targetRotateY - boxRotateModifier : targetRotateY + boxRotateModifier;

    const initialTranslateX = 0;
    const targetTranslateX = side === 'left' ? 25 : -15;

    const rotateY = useSpring(initialRotateY, { stiffness: 100, damping: 5, delay: 800 });
    const translateX = useSpring(initialTranslateX, { stiffness: 100, damping: 5, delay: 800 });
    const boxRotateY = useSpring(boxInitialRotateY, { stiffness: 100, damping: 5, delay: 1000 });

    const translateYImage = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]); // Adjust the range as needed
    const translateYBox = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]); // Adjust the range as needed

    useEffect(() => {
        scale.set(isInView ? 1 : 0.5);
        opacity.set(isInView ? 1 : 0);
        boxScale.set(isInView ? 1 : 0.5);
        boxOpacity.set(isInView ? 0.5 : 0);
        rotateY.set(isInView ? targetRotateY : initialRotateY);
        translateX.set(isInView ? targetTranslateX : initialTranslateX);
        boxRotateY.set(isInView ? boxTargetRotateY : boxInitialRotateY);
    }, [isInView, scale, opacity, rotateY, translateX, boxRotateY]);

    return (
        
        <motion.div 
            ref={ref} 
            style={{ scale: scale, opacity: opacity, translateX }}
            transition={{ delay: 1 }}
            className={styles.imageContainer}
        >
            <motion.div 
                className={styles.imageWrapper} 
                style={{ rotateY,  y: translateYImage }}
            >
                <Image {...props} className={styles.image} />
            </motion.div>

            <motion.div 
                className={`${styles.box} ${side === 'left' ? styles.boxLeft : styles.boxRight}`} 
                style={{ scale: boxScale, opacity: boxOpacity, rotateY: boxRotateY, y: translateYBox, backgroundColor: props.color }}
            >

                <span className={styles.boxText}>
                    boxRotateY: {boxTargetRotateY}deg <br/>
                    imageRotateY: {targetRotateY}deg
                </span>

            </motion.div>
        </motion.div>
        
    )
}

export default ImageComponent;