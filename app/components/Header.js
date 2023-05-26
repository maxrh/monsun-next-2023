import Link from 'next/link'
import styles from './Header.module.scss'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navigation_container}>
                <Link href="/" className="text-4xl font-bold">
                    Logo
                </Link>
                <nav className="flex">
                    <Link href="/" className="mr-8">
                        Home
                    </Link>
                    <Link href="/blog" className="mr-8">
                        Blog
                    </Link>
                    <Link href="/contact">
                        Contact
                    </Link>
                </nav>

                <DarkModeToggle />
            </div>
        </header>
    )
}