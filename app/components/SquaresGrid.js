"use client"

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useRandomHslColor from '../hooks/useRandomHslColor'
import styles from './SquaresGrid.scss'

export default function SquaresGrid({ size, gap, className, hueRange, dynamic }) {

    const hueRanges = [
        [0, 30],    [30, 60],   [60, 90],   [90, 120], 
        [120, 150], [150, 180], [180, 210], [210, 240], 
        [240, 270], [270, 300], [300, 330], [330, 360]
    ];

    const newHueRange = hueRanges[Math.floor(Math.random() * hueRanges.length)];
    
    const [selectedHueRange, setSelectedHueRange] = useState(hueRanges[hueRange])
    const [randomHueRange, setRandomHueRange] = useState(newHueRange)
    const [numberOfSquares, setNumberOfSquares] = useState(0)
    const [numColumns, setNumColumns] = useState(0)
    const [isLoading, setIsLoading] = useState(false)  
    const [isTouched, setIsTouched] = useState()  

    const ref = useRef(null);
    const squareSize = size || 5 
    const gridGap = gap || 20 

    useEffect(() => {
        const handleResize = () => {
            dynamic 
                ? setIsLoading(isLoading ? false : true) 
                : setIsLoading(false) 

            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect()
                let numCols = Math.floor(width / (squareSize + gridGap) / 2)
                let numRows = Math.floor(height / (squareSize + gridGap) )
        
                setNumColumns(numCols)
                const totalSquares = numCols * numRows
                setNumberOfSquares(totalSquares)
            }
            setTimeout(() => setIsLoading(false), 10000) // Set loading state to false
        } 
        
        handleResize()

        if (dynamic) {
            window.addEventListener('resize', handleResize)
            return () => {
                window.removeEventListener('resize', handleResize)
            }
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setIsLoading(true);
            if (!hueRange) {
                const newHueRange = hueRanges[Math.floor(Math.random() * hueRanges.length)];
                setRandomHueRange(newHueRange);
            } else {
                setSelectedHueRange(hueRanges[hueRange]);
            }
            setTimeout(() => setIsLoading(false), 10000); // adjust delay as needed
        }, 20000);
    
        return () => clearInterval(interval);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1 } }
    };
    
    const squares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => {
            const row = Math.floor(i / numColumns);
            const column = i % numColumns;
            const color = useRandomHslColor(hueRange ? selectedHueRange : randomHueRange)
            const transitionColor = 'rgb(9, 12, 16)'
            const colorRoullette = Math.random() >= 0.25 ? color : transitionColor

            return (
                <motion.div
                    key={i} 
                    className="square"
                    initial={{ scale: 1, opacity: 1, backgroundColor: transitionColor}}
                    exit={{ opacity: 1, backgroundColor: transitionColor}}
                    animate={{
                        scale: colorRoullette === color ? 1 : 1,
                        opacity: 1 ,
                        backgroundColor: colorRoullette,
                        transition: {
                            type: 'easeInOut',
                            duration: 3,
                            delay: 1 + (Math.random() * numColumns + 0.1) / 4 - 0.1 ,
                        }
                    }}
                    onMouseEnter={() => setIsTouched(i)}
                    style={{ 
                        width: `${squareSize}px`, 
                        height: `${squareSize}px`,
                        gridRow: row + 1,
                        gridColumn: 2 * column + 1 + row % 2,
                    }}
                />
            ); 
        });
    }, [numberOfSquares, squareSize, randomHueRange, selectedHueRange]);

    const loadingSquares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => {
            const row = Math.floor(i / numColumns);
            const column = i % numColumns;
            const color = useRandomHslColor(hueRange ? selectedHueRange : randomHueRange)
            const transitionColor = 'rgb(9, 12, 16)'
            const colorRoullette = Math.random() >= 0.25 ? color : transitionColor

            return (
                <motion.div
                    key={i} 
                    className="square"
                    initial={{ scale: 1, opacity: 1, backgroundColor: transitionColor }}
                    exit={{ opacity: 1, backgroundColor: transitionColor }}
                    animate={{
                        scale: colorRoullette === color ? 1 : 1,
                        opacity: 1 ,
                        backgroundColor: colorRoullette,
                        transition: {
                            type: 'easeInOut',
                            duration: 3,
                            delay: 1 + (Math.random() * numColumns + 0.1) / 4 - 0.1 ,
                        }
                    }}
                    style={{
                        width: `${squareSize}px`, 
                        height: `${squareSize}px`,
                        gridRow: row + 1,
                        gridColumn: 2 * column + 1 + row % 2,
                    }}
                />
            ); 
        });
    }, [numberOfSquares, squareSize, randomHueRange, selectedHueRange]);

    return (
        <motion.div 
            ref={ref} 
            className={`square-grid ${className}`} 
            initial="hidden"
            animate="show"
            variants={container}
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${numColumns}, ${squareSize}px)`,
                gridColumnGap: `${gridGap}px`,
                gridRowGap: `${gridGap}px`,
                perspective: '1000px',
            }}
        >
            <AnimatePresence >
                { isLoading ? loadingSquares : squares }
            </AnimatePresence>
        </motion.div>
    );
}