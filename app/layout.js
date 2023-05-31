"use client"

import { useState } from 'react';
import { Providers } from './providers'
import ScrollContext from './context/ScrollContext';
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/globals.scss'

import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({ 
    weight: ['300', '400', '500', '600', '700'],
    styles: ['normal', 'italic'],
    subsets: ['latin'] 
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function Layout({ children }) {
    const [sectionInView, setSectionInView] = useState("");

    return (
        <html lang="en" className="has-navbar-fixed-top" suppressHydrationWarning>
            <body className={ibmPlexSans.className}>
                <Providers>
                    <ScrollContext.Provider value={{ sectionInView, setSectionInView }}>
                        <div className='page-container'>
                            <Header />
                            {children}
                            <Footer />
                        </div>
                    </ScrollContext.Provider>
                </Providers>
            </body>
        </html>
    )
}
