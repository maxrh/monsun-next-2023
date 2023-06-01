"use client"

import { useRef, useEffect } from "react";
import { motion, useSpring, useInView, useScroll, useTransform } from "framer-motion";
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
        min: 5, max: 15,
    }

    const targetImageRotateY = side === 'left' ? 8 : -8
    
    const boxRotateModifier = useRandomInRange(
        degRanges.modMin, 
        degRanges.modMax, 
        isInView
    );
    
    const targetRotate = side === 'left' ? -1 : 1;
    const targetBoxRotateY = side === 'left' ? targetImageRotateY - boxRotateModifier : targetImageRotateY + boxRotateModifier;
    const targetTranslateX = side === 'left' ? 25 : -25;


    const translateYImage = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]); // Adjust the range as needed
    const translateYBox = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]); // Adjust the range as needed

    // spring animations

    const springConfig = { stiffness: 200, damping: 20 };

    const shadowScale = useSpring(0, { ...springConfig, delay: 100 });
    const shadowOpacity = useSpring(0, { ...springConfig, delay: 100 });
    const shadowRotateY = useSpring(0, { ...springConfig, delay: 100 });

    const imageScale = useSpring(0, springConfig);
    const imageOpacity = useSpring(0, springConfig);
    const imageRotateY = useSpring(0, springConfig);

    const rotate = useSpring(0, springConfig);
    const rotateX = useSpring(0, springConfig);

    const boxScale = useSpring(0, { ...springConfig, delay: 800 });
    const boxOpacity = useSpring(0, { ...springConfig, delay: 800 });
    const boxRotateY = useSpring(0, { ...springConfig, delay: 800 });

    const translateX = useSpring(0, springConfig);

    const boxArrow = side === "left" 
        ? <IoArrowBack className={styles.boxArrowIcon} style={{ transform: "rotate(180deg) translate(0%, 0%)" }} /> 
        : <IoArrowBack className={styles.boxArrowIcon} style={{ transform: "translate(0%, 0%)" }}/>;



    // update animation values when isInView changes

    useEffect(() => {

        if (isInView) {
            imageScale.set(1); imageOpacity.set(1); imageRotateY.set(targetImageRotateY); rotateX.set(2); rotate.set(targetRotate); 
            shadowScale.set(.98); shadowOpacity.set(.5); shadowRotateY.set(targetImageRotateY);
            boxScale.set(1); boxOpacity.set(1); boxRotateY.set(targetBoxRotateY);
            translateX.set(targetTranslateX);
        } else {
            imageScale.set(0); imageOpacity.set(0); imageRotateY.set(0); rotateX.set(0); rotate.set(0); 
            shadowScale.set(0); shadowOpacity.set(0); shadowRotateY.set(0);
            boxScale.set(0); boxOpacity.set(0); boxRotateY.set(0);
            translateX.set(0);
        }
    
    }, [isInView]);

    
    return (
        
        <motion.div 
            ref={ref} 
            style={{ translateX }}
            transition={{ delay: 1 }}
            className={styles.container}
        >
            
                <motion.div 
                    className={`${styles.box} ${side === 'left' ? styles.boxLeft : styles.boxRight}`} 
                    style={{ scale: boxScale, opacity: boxOpacity, rotate, rotateY: imageRotateY, rotateX, y: translateYBox }}
                >
                
                {props.slides && props.slides.length > 0 && (
                        <div className={styles.slide}>
                            <p className={styles.slideText}>{props.slides[0].text}</p>
                        </div>
                    )}
                </motion.div>

                        <motion.div 
                            className={styles.imageWrapper} 
                            style={{ scale: imageScale, opacity: imageOpacity, rotate, rotateY: imageRotateY, rotateX,  y: translateYImage }}
                        >
                            
                            <div className={styles.ratio}>
                                <Image {...props} className={`${styles.image} ${styles.ratioInner}`} />
                            </div>
                        </motion.div>
                   
                   
                <motion.div 
                    className={`${styles.imageShadow} ${styles.ratio}`} 
                    style={{ scale: shadowScale, opacity: shadowOpacity, rotate, rotateY: shadowRotateY, rotateX: 0, y: 0 }}
                >
                    <div className={styles.ratioInner} ></div>
                </motion.div>
            
        </motion.div>
        
    )
}

export default ImageComponent;