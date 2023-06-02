"use client"

import { useResizeDetector } from 'react-resize-detector';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

import styles from './SquaresGrid.scss';

function Square({ size, gap, i }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    console.log(`Square ${i} is in view: ${inView}`);

    return (
        <div
            ref={ref}
            key={i}
            className="square"
            style={{ width: `${size}px`, height: `${size}px`, margin: `${gap}px` }}
        />
    );
}

export default function SquaresGrid({ size, gap, className }) {

    const { width, height, ref } = useResizeDetector();
    const [numberOfSquares, setNumberOfSquares] = useState(0);
    const squareSize = size || 8; // Use prop or default to 8
    const squareGap = gap || 6; // Use prop or default to 6
    
    useEffect(() => {
        if (width && height) {
            const squaresPerRow = Math.floor(width / (squareSize + squareGap * 2));
            const squaresPerColumn = Math.floor(height / (squareSize + squareGap * 2));
            const totalSquares = squaresPerRow * squaresPerColumn;
            setNumberOfSquares(totalSquares);
            console.log(totalSquares + " squares")     
        }
    }, [width, height]);

    return (
        <div ref={ref} className={`square-grid ${className}`} style={{ minWidth: '100%' }}>
            {Array.from({ length: numberOfSquares }, (_, i) => (
                <Square size={squareSize} gap={squareGap} key={i} i={i} />
            ))}
        </div>
    );
}


