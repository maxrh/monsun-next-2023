

<motion.div
            key={i}
            className="square"
            style={{ 
                width: `${size}px`, 
                height: `${size}px`, 
            }}
            animate={{
                
                scale: [0, 1.2, 1, 0, 0],
                transition: {
                    delay: i * 0.01,
                    duration: 0.5,
                    ease: 'easeInOut',
                }
            }}
        />




   // const color = useMemo(getRandomHslColor, []);

    // const controls = useAnimation();

    // const handleMouseEnter = () => {
    //     controls.start({
    //         backgroundColor: i % 2 !== 0 ? 'rgb(25, 33, 44)' : 'rgb(255, 79, 94)',
    //         transition: { duration: 0.25, ease: "easeIn"  },
    //     });

    //     controls.start({
    //         backgroundColor: i % 2 !== 0 ? 'rgb(25, 33, 44)' : 'rgb(255, 79, 94)',
    //         transition: { duration: .75, ease: "easeOut" },
    //     });
    // };

    // useEffect(() => {
    //     controls.start({
    //         backgroundColor: i % 2 !== 0 ? 'rgba(25, 33, 44, 1)' : color,
    //     });
        
    // }, [controls, i, num]);





        useEffect(() => {
            // Run initial animation
            controls.start({
                backgroundColor: i % 2 !== 0 ? 'var(--body-background-color)' : 'var(--theme-primary-color)',
                opacity: (Math.random() * 1 + 0.1),
                y: 0,
                transition: { 
                    type: "spring",
                    damping: 10,
                    stiffness: 1000,
                    delay: 3 + (Math.random() * num + 0.1) / 50,
                    restDelta: 0.001
                },
            });
        }, [controls, i]);


        useEffect(() => {
            if (width && height) {
                let numCols = Math.floor(width / (squareSize + gridGap));
                let numRows = Math.floor(height / (squareSize + gridGap));
                
                console.log('numCols', numCols);
                console.log('numRows', numRows);
                console.log('height', height);
                if (numCols % 2 === 0) { numCols--; }
        
                setNumColumns(numCols);
                const totalSquares = numCols * numRows;
                setNumberOfSquares(totalSquares);
            }
        }, [width, height, squareSize, gridGap]);