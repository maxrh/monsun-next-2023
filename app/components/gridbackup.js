

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