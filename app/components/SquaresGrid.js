"use client"

import { useResizeDetector } from 'react-resize-detector';
import { useEffect, useState, useMemo } from 'react';
import { motion, useInView, useAnimation} from 'framer-motion';
import styles from './SquaresGrid.scss';

function Square({ num, size, i }) {

    const controls = useAnimation();

    const handleMouseEnter = async () => {
        // Scale up quickly
        await controls.start({
            opacity: 0,
            backgroundColor: i % 2 !== 0 ? 'var(--body-background-color' : 'var(--theme-primary-color)',
            transition: { duration: 0.25, ease: "easeIn"  },
        });

        // Then scale down slowly
        controls.start({
            opacity: 1,
            backgroundColor: i % 2 !== 0 ? 'var(--body-background-color' : 'var(--theme-primary-color)',
            transition: { duration: .75, ease: "easeOut" },
        });
    };

    useEffect(() => {
        // Run initial animation
        controls.start({
            backgroundColor: i % 2 !== 0 ? 'var(--body-background-color-light)' : 'var(--theme-primary-color)',

            opacity: (Math.random() * 1 + 0.1) - 0.1,
            transition: { 
                type: "spring",
                damping: 10,
                stiffness: 1000,
                delay: 3 + (Math.random() * num + 0.1) / 50,
                restDelta: 0.001
            },
        });
    }, [controls, i]);


    let squareStyle = {
        width: `${size}px`, 
        height: `${size}px`, 
        backgroundColor: i % 2 !== 0 ? 'var(--body-background-color-light)' : 'var(--body-background-color)',
    }

    return (
        <motion.div
            key={i}
            className="square"
            style={squareStyle}
            animate={controls}
            onMouseEnter={handleMouseEnter}
            
        />
    );
}

export default function SquaresGrid({ size, gap, className }) {

    const { width, height, ref } = useResizeDetector();
    const [numberOfSquares, setNumberOfSquares] = useState(0);
    const [numColumns, setNumColumns] = useState(0);

    const squareSize = size || 5; // Use prop or default
    const gridGap = gap || 20; // Use prop or default

    const isBrowser = () => typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser()) return;
        if (width && height) {

            let numCols = Math.floor((width + gridGap) / (squareSize + gridGap));
            let numRows = Math.floor((height + gridGap) / (squareSize + gridGap));

            if (numCols % 2 === 0) { numCols--; }

            console.log(`numCols: ${numCols}, numRows: ${numRows}`);

            setNumColumns(numCols);
            setNumberOfSquares(numCols * numRows);
        }
    }, [width, height, squareSize, gridGap]);

    const squares = useMemo(() => {
        return Array.from({ length: numberOfSquares }, (_, i) => (
            <Square size={squareSize} num={numberOfSquares} key={i} i={i} />
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
