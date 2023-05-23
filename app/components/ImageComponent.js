import { useRef, useEffect } from "react";
import { motion, useSpring, useInView } from "framer-motion";
import styles from './imageComponent.module.scss'
import Image from 'next/image'

function ImageComponent({ side, ...props }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 1, margin: "-300px 0px -300px 0px" })

    const scale = useSpring(0.5, { stiffness: 200, damping: 10 });
    const opacity = useSpring(0, { stiffness: 200, damping: 10 });

    const boxScale = useSpring(0.5, { stiffness: 200, damping: 10, delay: 200  });
    const boxOpacity = useSpring(0, { stiffness: 200, damping: 10, delay: 200  });

    const initialRotateY = side === 'left' ? 0 : 360;
    const targetRotateY = side === 'left' ? 10 : 350;

    const boxInitialRotateY = initialRotateY;
    const boxTargetRotateY = side === 'left' ? targetRotateY - 5 : targetRotateY + 5;

    const initialTranslateX = 0;
    const targetTranslateX = side === 'left' ? 45 : -45;

    const rotateY = useSpring(initialRotateY, { stiffness: 100, damping: 5, delay: 800 });
    const translateX = useSpring(initialTranslateX, { stiffness: 100, damping: 5, delay: 800 });
    const boxRotateY = useSpring(boxInitialRotateY, { stiffness: 100, damping: 5, delay: 1000 });


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
            style={{ scale: scale, opacity: opacity }}
            transition={{ delay: 1 }}
            className={styles.imageContainer}
        >
            <motion.div className={styles.imageWrapper} style={{ rotateY, translateX }}>
                <Image {...props} className={styles.image} />
            </motion.div>
            <motion.div className={`${styles.box} ${side === 'left' ? styles.boxLeft : styles.boxRight}`} style={{ scale: boxScale, opacity: boxOpacity, rotateY: boxRotateY, translateX }}>
                {/* Box content */}
            </motion.div>
        </motion.div>
        
    )
}

export default ImageComponent;