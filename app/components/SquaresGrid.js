"use client"

import { useResizeDetector } from 'react-resize-detector';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import styles from './SquaresGrid.scss';

function Square({ size, i }) {

    return (
        <motion.div
            key={i}
            className="square"
            style={{ 
                width: `${size}px`, 
                height: `${size}px`, 
            }}
        />
    );
}

export default function SquaresGrid({ size, gap, className }) {

    const { width, height, ref } = useResizeDetector();
    const [numberOfSquares, setNumberOfSquares] = useState(0);

    const squareSize = size || 5; // Use prop or default
    const gridGap = gap || 20; // Use prop or default

    const isBrowser = () => typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser()) return;
    
        if (width && height) {
            let numCols = Math.floor((width + gridGap) / (squareSize + gridGap));
            const numRows = Math.floor((height + gridGap) / (squareSize + gridGap));
    
            const totalSquares = numCols * numRows;
            setNumberOfSquares(totalSquares);
            console.log(totalSquares + " squares")     
        }
    }, [width, height, squareSize, gridGap]);

    return (
        <div 
            ref={ref} 
            className={`square-grid ${className}`} 
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fill, ${squareSize}px)`,
                justifyContent: 'center',
                gridColumnGap: `${gridGap}px`,
                gridRowGap: `${gridGap}px`,
                minWidth: '100%',
            }}
        >
            {Array.from({ length: numberOfSquares }, (_, i) => (
                <Square size={squareSize} key={i} i={i} />
            ))}
        </div>
    );
}


