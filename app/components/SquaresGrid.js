"use client"

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
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

    const ref = useRef(null);
    const squareSize = size || 5 
    const gridGap = gap || 20 

    useEffect(() => {
        const handleResize = () => {
            dynamic 
                ? setIsLoading(true) 
                : setIsLoading(false) 
            
            hueRange 
                ? setSelectedHueRange(hueRanges[hueRange]) 
                : setRandomHueRange(hueRanges[Math.floor(Math.random() * hueRanges.length)])

            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect()
                let numCols = Math.floor(width / (squareSize + gridGap) / 2)
                let numRows = Math.floor(height / (squareSize + gridGap) )
        
                setNumColumns(numCols)
                const totalSquares = numCols * numRows

                console.log('totalSquares', numCols, numRows, totalSquares)
                setNumberOfSquares(totalSquares)
            }
            setTimeout(() => setIsLoading(false), 500) // Set loading state to false
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
    
            setTimeout(() => setIsLoading(false), 50); // adjust delay as needed
        }, 16500);
    
        return () => clearInterval(interval);
    }, []);

    
    const container = {
        hidden: { opacity: 1 },
        show: { opacity: 1, transition: { duration: 0.25 } }
    };
    
    const squares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => {
            const row = Math.floor(i / numColumns);
            const column = i % numColumns;
            const color = useRandomHslColor(hueRange ? selectedHueRange : randomHueRange)

            return (
                <motion.div
                    key={i} 
                    variants={{
                        hidden: { opacity: 1, backgroundColor: 'hsla(0, 0%, 0%, 0.5)' },
                        show: { 
                            opacity: 1,
                            backgroundColor: [ 'hsla(0, 0%, 0%, 0.5)', color, 'hsla(0, 0%, 0%, 0.5)'],
                            transition: { 
                                type: 'linear',
                                delay: 2 + (Math.random() * -i / numberOfSquares + 0.1) - 0.1 ,  
                                duration: 5,
                                restDelta: 0.05,
                            }
                        }
                    }}
                    className="square"
                    
                    style={{ 
                        width: `${squareSize}px`, 
                        height: `${squareSize}px`,
                        gridRow: row + 1,
                        gridColumn: 2 * column + 1 + row % 2,
                        transformStyle: 'preserve-3d',
                        perspective: '1000px',
                    }}
                />
            ); 
        });
    }, [numberOfSquares, squareSize, randomHueRange, selectedHueRange]);


    const loadingSquares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => {
            const row = Math.floor(i / numColumns);
            const column = i % numColumns;

            return (
                <div
                    key={i} 
                    className="square"
                    style={{ 
                        backgroundColor: 'hsla(0, 0%, 0%, 0.5)',
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
            { isLoading ? loadingSquares : squares }
        </motion.div>
    );
}