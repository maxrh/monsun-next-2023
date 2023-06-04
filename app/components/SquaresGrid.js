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

            setTimeout(() => setIsLoading(false), 1000) // Set loading state to false
        }

        handleResize()

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
                    animate={{ backgroundColor: useRandomHslColor()}}
                    exit={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        ease: "linear",
                        duration: 2,
                        delay:  (Math.random() * 2 + 0.1),
                        restDelta: 0.001
                    }}
                />
            );
        });
    }, [numberOfSquares, squareSize]);

    return (
        <AnimatePresence>

            { isLoading ? (
                <div className='is-flex is-justify-content-center is-align-items-center is-size-1' style={{ height: '100%' }}>
                    <span class="bulma-loader-mixin"></span>
                </div>
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


        </AnimatePresence>
    );
}