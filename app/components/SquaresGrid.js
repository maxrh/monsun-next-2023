"use client"

import { useEffect, useState, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useRandomHslColor from '../hooks/useRandomHslColor'
import styles from './SquaresGrid.scss'

export default function SquaresGrid({ size, gap, className }) {

    const [numberOfSquares, setNumberOfSquares] = useState(0)
    const [numColumns, setNumColumns] = useState(0)
    const [isLoading, setIsLoading] = useState() // New state
    const ref = useRef(null);

    const squareSize = size || 5 // Use prop or default
    const gridGap = gap || 20 // Use prop or default

    useEffect(() => {
        const handleResize = () => {
            setIsLoading(true) // Set loading state to true

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

    // set animation on mouse enter



    const squares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => {
            const row = Math.floor(i / numColumns);
            const column = i % numColumns;

            return (
                <motion.div key={i} i={i}
                    className="square"
                    style={{ 
                        width: `${squareSize}px`, 
                        height: `${squareSize}px`,
                        gridRow: row + 1,
                        gridColumn: (row % 2 ? column * 2 : column * 2 + 1) + 1,
                    }}
                    initial={{ backgroundColor: 'rgba(10, 13, 18, 1)'}}
                    animate={{ opacity: 1, backgroundColor: useRandomHslColor()}}
                    exit={{ opacity: 0 }}
                    transition={{ 
                        ease: "linear",
                        duration: 2,
                        delay:  (Math.random() * 2 + 0.1) - 0.1,
                        restDelta: 0.001
                    }}
                    onMouseEnter={() => {
                        console.log(i, 'mouse enter')

                        // ad opacity to hovered square

                        const square = document.querySelector(`.square-grid .square:nth-child(${i + 1})`)
                        square.style.opacity = .1
                        square.style.transition = 'opacity .5s ease-in-out'
                        

                    }}
                />
            );
        });
    }, [numberOfSquares, squareSize]);

    return (
        <>

            { isLoading ? (
                
                <motion.div 
                    ref={ref} 
                    className={`square-grid ${className}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .25 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '3rem',
                    }}
                >
                    <span className="bulma-loader-mixin"></span>
                </motion.div>

            ) : (
                <motion.div 
                    ref={ref} 
                    className={`square-grid ${className}`} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .25 }}
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