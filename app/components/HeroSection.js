"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SquaresGrid from './SquaresGrid'
import NavAnchorMenu from './NavAnchorMenu'

export default function HeroSection() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const isBrowser = () => typeof window !== 'undefined';

    useEffect(() => {
        if (!isBrowser()) return;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) { setIsScrolled(true) } else { setIsScrolled(false) }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) };
    }, []);

    return (
        <section className='hero-section section pt-5'>
            
                    <motion.div 
                        className="hero-section-body"
                        initial={{ opacity: 1 }}
                        animate={{ 
                            opacity: isScrolled ? 1 : 1 
                        }}
                        transition={{ duration: .5 }} 
                    >
                        

                        
                        

                        <div className="hero-section-box mb-5">
                            <div className="line-box-grid">
                                <div className="line-box span-12-5">
                                    <div className="line-box-body border-r">
                                        <div className="hero-section-grid">
                                            <SquaresGrid className="hero-squares" size={10} gap={15} hueRange={NaN} dynamic/> 
                                        </div>
                                    </div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>
                                <div className="line-box span-12-1">
                                    <div className="line-box-body pt-5 pb-5 border-r border-l">
                                        <div className="hero-section-nav ">
                                            {/* <div className="divider mt-0 mb-0"><span></span></div> */}
                                            <nav className="navbar">
                                                <motion.div 
                                                    key="hero-section-anchor-menu"
                                                    className="hero-section-anchor-menu navbar-end"
                                                    animate={{ 
                                                        opacity: (!isScrolled && isHovering) ? 0 : isScrolled ? 0 : 1, 
                                                        x: (!isScrolled && isHovering) ? -30 : isScrolled ? -30 : 0 
                                                    }}
                                                
                                                    initial={{ opacity: 0, x: 0 }}
                                                    transition={{ duration: .5, delay: .5 }} 
                                                >
                                                    <NavAnchorMenu isScrolled={isScrolled} />
                                                </motion.div>
                                            </nav>
                                            {/* <div className="divider mt-0 mb-0"><span></span></div> */}
                                        </div>
                                    </div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>
                                <div className="line-box span-12-3">
                                    <div className="line-box-body ">
                                        <h1 className='title is-huge mb-5'>United Colors</h1>
                                        <p className='hero-text'>Psarturient montes.</p>

                                    </div>
                                    <div className="bg-diagonal-line is-flipped"></div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>
                                <div className="line-box span-6-4">
                                    <div className="line-box-body  border-b border-l ">
                                        <h1 className='hero-title'>United Colors</h1>
                                        <p className='hero-text'> Penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis enim ut tellus elementum sagittis.</p>
                                        <p className='hero-text'> Penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis enim ut tellus elementum sagittis.</p>
                                    </div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>

                                <div className="line-box span-6-3">
                                    <div className="line-box-body border-b">
                                        <h1 className='hero-title'>United Colors</h1>
                                        <p className='hero-text'> Penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis enim ut tellus elementum sagittis.</p>
                                    </div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>
                            
                                <div className="line-box span-6-3">
                                    <div className="line-box-body border-b">
                                        <h1 className='hero-title'>United Colors</h1>
                                        <p className='hero-text'> Penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis enim ut tellus elementum sagittis.</p>
                                    </div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>
                               

                                <div className="line-box span-6-4">
                                    <div className="line-box-body ">
                                        <h1 className='hero-title'>United Colors</h1>
                                        <p className='hero-text'> Penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis enim ut tellus elementum sagittis.</p>
                                        <p className='hero-text'> Penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis enim ut tellus elementum sagittis.</p>
                                    </div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>
                                <div className="line-box span-6-3">
                                    <div className="line-box-body ">
                                        <h1 className='hero-title'>United Colors</h1>
                                        <p className='hero-text'> Penatibus et magnis dis parturient montes. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Mattis enim ut tellus elementum sagittis.</p>
                                    </div>
                                    <div className="line-box-corner-dots"><span></span><span></span><span></span><span></span></div>
                                </div>
                            </div>
                        </div>


                    </motion.div>
                  
            </section>
    )
}