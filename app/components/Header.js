import Link from 'next/link'
import styles from './Header.module.scss'
import ThemeSwitchWidget from './ThemeSwitchWidget'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navigation_container}>
                <Link href="/" className="text-4xl font-bold">
                    Logo
                </Link>

                <div className='is-flex'>
                    <nav className={styles.navigation}>
                        <Link href="/" className="mr-8">
                            Cases
                        </Link>
                        <Link href="/blog" className="mr-8">
                            About
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </nav>

                    <ThemeSwitchWidget />
                </div>
            </div>
        </header>
    )
}