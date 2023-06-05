"use client"

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import useRandomHslColor from '../hooks/useRandomHslColor'
import styles from './SquaresGrid.scss'

export default function SquaresGrid({ size, gap, className }) {

    const hueRanges = [
        [0, 30],    [30, 60],   [60, 90],   [90, 120], 
        [120, 150], [150, 180], [180, 210], [210, 240], 
        [240, 270], [270, 300], [300, 330], [330, 360]
    ];

    const [numberOfSquares, setNumberOfSquares] = useState(0)
    const [numColumns, setNumColumns] = useState(0)
    const [numRows, setNumRows] = useState(0)

    const [isLoading, setIsLoading] = useState(false)  

    const ref = useRef(null);
    const squareSize = size || 5 
    const gridGap = gap || 20 

    useEffect(() => {
        const handleResize = () => {
            setIsLoading(true) // Set loading state to true

            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect()

                let numCols = Math.floor(width / (squareSize + gridGap))
                let numRows = Math.floor(height / (squareSize + gridGap))
        
                if (numCols % 2 === 0) { numCols-- }
                
                setNumRows(numRows)
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

    
    

    const row = numRows;
    const column = numColumns;

    const squares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => {
            return (
                <motion.div
                    key={i}
                    i={i}
                    className="square"
                    initial={{
                        opacity: 1,
                        backgroundColor: 'rgba(10, 13, 18, 1)' 
                    }}
                    animate={{
                        opacity: 1,
                        backgroundColor: ['rgb(19, 68, 153)', 'rgba(10, 13, 18, 1)', 'rgb(237, 39, 8)'],
                    }} 
                    transition={{ 
                        ease: "easeInOut",
                        duration: 15,
                        restDelta: 0.001
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
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '3rem',
                    }}
                >
                    <span className="bulma-loader-mixin"></span>
                </div>

            ) : (
                <motion.div 
                    ref={ref} 
                    className={`square-grid ${className}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
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