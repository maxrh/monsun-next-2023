"use client"

import { useEffect, useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import useRandomHslColor from '../hooks/useRandomHslColor';
import styles from './SquaresGrid.scss';

export default function SquaresGrid({ size, gap, className }) {

    const [numberOfSquares, setNumberOfSquares] = useState(0);
    const [numColumns, setNumColumns] = useState(0);
    const ref = useRef(null); 

    const squareSize = size || 5; // Use prop or default
    const gridGap = gap || 20; // Use prop or default

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                const { width, height } = ref.current.getBoundingClientRect();

                let numCols = Math.floor(width / (squareSize + gridGap));
                let numRows = Math.floor(height / (squareSize + gridGap));
        
                if (numCols % 2 === 0) { numCols--; }
        
                setNumColumns(numCols);
                const totalSquares = numCols * numRows;
                setNumberOfSquares(totalSquares);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const squares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => (
            <motion.div key={i} i={i}
                className="square"
                style={{ width: `${squareSize}px`, height: `${squareSize}px`}}
                initial={{ backgroundColor: i % 2 !== 0 ? 'rgba(10, 13, 18, 0)' : 'rgba(10, 13, 18, 1)'}}
                animate={{ backgroundColor: i % 2 !== 0 ? 'rgba(10, 13, 18, 0)' : useRandomHslColor()}}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ 
                    ease: "linear",
                    duration: 2,
                    delay: 2 + (Math.random() * 2 + 0.1),
                    restDelta: 0.001
                }}
            />
        ));
    }, [numberOfSquares, squareSize]);

    return (
        <div 
            ref={ref} 
            className={`square-grid ${className}`} 
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${numColumns}, ${squareSize}px)`,
                justifyContent: 'center',
                gridColumnGap: `${gridGap}px`,
                gridRowGap: `${gridGap}px`,
                perspective: '1000px',
            }}
        >
            {squares}
        </div>
    );
}