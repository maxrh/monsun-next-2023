import Link from 'next/link'
import styles from './footer.module.scss'


export default function Header() {
    return (
        <footer className={styles.footer}>
            <div className="is-flex mt-6">
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
            </div>
        </footer>
    )
}