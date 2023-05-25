"use client"

import { useRef, useEffect } from "react";
import { motion, useSpring, useInView, useScroll, useTransform, useAnimation } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import useRandomInRange from '../hooks/useRandomInRange'
import styles from './imageComponent.module.scss'
import Image from 'next/image'

function ImageComponent({ side, ...props }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 1, margin: "-0px 0px -0px 0px" })
    const { scrollYProgress } = useScroll({ target: ref });

    const degRanges = {
        modMin: 5, modMax: 10,
        leftMin: 5, leftMax: 15,
        rightMin: 355, rightMax: 345
    }

    const initialImageRotateY = side === 'left' ? 0 : 360;
    const initialBoxRotateY = initialImageRotateY;

    const targetImageRotateY = useRandomInRange(
        side === 'left' ? degRanges.leftMin : degRanges.rightMin, 
        side === 'left' ? degRanges.leftMax : degRanges.rightMax, 
        isInView
    );
    
    const boxRotateModifier = useRandomInRange(degRanges.modMin, degRanges.modMax, isInView);
    
    const targetBoxRotateY = side === 'left' ? targetImageRotateY - boxRotateModifier : targetImageRotateY + boxRotateModifier;
    const targetTranslateX = side === 'left' ? 25 : -25;

    const translateYImage = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]); // Adjust the range as needed
    const translateYBox = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]); // Adjust the range as needed

    // spring animations

    const springConfig = { stiffness: 200, damping: 10 };

    const imageScale = useSpring(0, springConfig);
    const imageOpacity = useSpring(0, springConfig);
    const imageRotateY = useSpring(initialImageRotateY, { stiffness: 100, damping: 5, delay: 800 });

    const boxScale = useSpring(0, { ...springConfig, delay: 200 });
    const boxOpacity = useSpring(0, { ...springConfig, delay: 200 });
    const boxRotateY = useSpring(initialBoxRotateY, { stiffness: 100, damping: 5, delay: 1000 });

    const translateX = useSpring(0, { stiffness: 100, damping: 5, delay: 800 });

    const boxArrow = side === "left" 
        ? <IoArrowBack className={styles.boxArrowIcon} style={{ transform: "rotate(180deg) translate(0%, 0%)" }} /> 
        : <IoArrowBack className={styles.boxArrowIcon} style={{ transform: "translate(0%, 0%)" }}/>;

    const boxArrowTransition = { duration: 2, yoyo: Infinity, ease: "easeInOut" };
    const boxArrowControls = useAnimation();

   

    // update animation values when isInView changes

    useEffect(() => {

        if (isInView) {
            imageScale.set(1); imageOpacity.set(1); imageRotateY.set(targetImageRotateY);
            boxScale.set(1); boxOpacity.set(0.5); boxRotateY.set(targetBoxRotateY);
            translateX.set(targetTranslateX);
        } else {
            imageScale.set(0); imageOpacity.set(0); imageRotateY.set(initialImageRotateY);
            boxScale.set(0); boxOpacity.set(0); boxRotateY.set(initialBoxRotateY);
            translateX.set(0);
        }
    
    }, [isInView]);

    
    return (
        
        <motion.div 
            ref={ref} 
            style={{ scale: imageScale, opacity: imageOpacity, translateX }}
            transition={{ delay: 1 }}
            className={styles.imageContainer}
        >
            
            <motion.div 
                className={styles.imageWrapper} 
                style={{ rotateY: imageRotateY,  y: translateYImage }}
            >
                <Image {...props} className={styles.image} />
            </motion.div>

            <motion.div 
                className={`${styles.box} ${side === 'left' ? styles.boxLeft : styles.boxRight}`} 
                style={{ scale: boxScale, opacity: boxOpacity, rotateY: boxRotateY, y: translateYBox, backgroundColor: props.color }}
            >
               
                <span className={styles.boxText}>
                    boxRotateY: {targetBoxRotateY}deg <br/>
                    imageRotateY: {targetImageRotateY}deg
                </span>

            </motion.div>
            <motion.div
                className={styles.arrowWrapper} 
                style={{ scale: imageScale, opacity: imageOpacity, translateX, rotateY: imageRotateY, y: translateYBox }}
            >
                <span className={styles.boxArrow}>
                    {boxArrow}
                </span>
            </motion.div>
        </motion.div>
        
    )
}

export default ImageComponent;