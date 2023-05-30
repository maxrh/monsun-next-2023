import Header from './components/Header'
import Footer from './components/Footer'
import './styles/globals.scss'
import { Providers } from './providers'

import { IBM_Plex_Sans } from 'next/font/google'
import localFont from 'next/font/local';

const soehne = localFont({
    src: [
        {
            path: './fonts/test-soehne-buch.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/test-soehne-kraftig.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/test-soehne-halbfett.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/test-soehne-dreiviertelfett.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/test-soehne-fett.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/test-soehne-extrafett.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
});

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
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={ibmPlexSans.className}>
                <Providers>
                    <div className='page-container'>
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    )
}
