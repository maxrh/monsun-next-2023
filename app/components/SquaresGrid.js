"use client"

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import useRandomHslColor from '../hooks/useRandomHslColor'
import styles from './SquaresGrid.scss'

const hueRanges = [
    [0, 30],    [30, 60],   [60, 90],   [90, 120], 
    [120, 150], [150, 180], [180, 210], [210, 240], 
    [240, 270], [270, 300], [300, 330], [330, 360]
];

export default function SquaresGrid({ size, gap, className, hueRange }) {


    const [selectedHueRange, setSelectedHueRange] = useState(hueRanges[hueRange])
    const [randomHueRange, setRandomHueRange] = useState(hueRanges[Math.floor(Math.random() * hueRanges.length)])
    const [numberOfSquares, setNumberOfSquares] = useState(0)
    const [numColumns, setNumColumns] = useState(0)
    const [isLoading, setIsLoading] = useState(false)  

console.log('randomHueRange', randomHueRange)
console.log('hueRange', hueRanges[hueRange])

    const ref = useRef(null);
    const squareSize = size || 5 
    const gridGap = gap || 20 
    
    useEffect(() => {
        const handleResize = () => {
            setIsLoading(true) // Set loading state to true
            if (hueRange) { 
                setSelectedHueRange(hueRanges[hueRange]) 
            } else {
                setRandomHueRange(hueRanges[Math.floor(Math.random() * hueRanges.length)])
            }

            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect()
                let numCols = Math.floor(width / (squareSize + gridGap))
                let numRows = Math.floor(height / (squareSize + gridGap))
                if (numCols % 2 === 0) { numCols-- }
        
                setNumColumns(numCols)
                const totalSquares = numCols * numRows
                setNumberOfSquares(totalSquares)
            }
            setTimeout(() => setIsLoading(false), 500) // Set loading state to false
        } 
        
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1,
            transition: {
                duration: 0.25,                 
            },
        },
    };
    
    const squares = useMemo(() => {

        return Array.from({ length: numberOfSquares }, (_, i) => {
            const row = Math.floor(i / numColumns);
            const column = i % numColumns;
     
            return (
                <motion.div
                    key={i} 
                    variants={{
                        hidden: { opacity: 1, backgroundColor: 'hsla(0, 0%, 0%, 0.5)' },
                        show: { 
                            opacity: 1,
                            backgroundColor: useRandomHslColor(hueRange ? selectedHueRange : randomHueRange),
                        }
                    }}
                    className="square"
                    transition={{ 
                        delay: 2 + i * -0.0015 + (Math.random() * 1 + 0.1) ,  
                        duration: 2,
                        ease: "linear",
                    }}
                    style={{ 
                        width: `${squareSize}px`, 
                        height: `${squareSize}px`,
                        gridRow: row + 1,
                        gridColumn: (row % 2 ? column * 2 : column * 2 + 1) + 1,
                    }}
                    
                />
                
            );
            
        });
        
    }, [numberOfSquares, squareSize]);

    
    return (
        <>

            { isLoading ? (
                <div 
                    ref={ref} 
                    className={`square-grid ${className}`} 
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem' }}
                >
                    <span className="bulma-loader-mixin"></span>
                </div>

            ) : (
                <motion.div 
                    ref={ref} 
                    className={`square-grid ${className}`} 
                    initial="hidden"
                    animate="show"
                    variants={container}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${numColumns * 2}, ${squareSize}px)`,
                        justifyContent: 'center',
                        gridColumnGap: `${gridGap}px`,
                        gridRowGap: `${gridGap}px`,
                        perspective: '1000px',
                    }}
                    
                >

                    {squares}

                </motion.div>
            )}

       </>
    );
}