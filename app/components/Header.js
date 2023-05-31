import Link from 'next/link'
import styles from './Header.module.scss'
import ThemeSwitchWidget from './ThemeSwitchWidget'
import NavAnchorMenu from './NavAnchorMenu'

export default function Header() {
    return (
        <header>
            <section className='hero is-medium is-background-light'>
                <div className="hero-head">
                    <nav className="navbar is-fixed-top p-4" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <Link className="navbar-item" href="/">
                                Logo
                            </Link>

                            <Link href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </Link>
                        </div>

                        <div id="navbarBasicExample" className="navbar-menu">
                            
                            <NavAnchorMenu />

                            <div className="navbar-end">
                                <Link className="navbar-item is-active" href="/">
                                    Home
                                </Link>

                                <Link className="navbar-item" href="/">
                                    Documentation
                                </Link>

                                <div className="navbar-item has-dropdown is-hoverable">
                                    <Link className="navbar-link" href="/">
                                        More
                                    </Link>

                                    <div className="navbar-dropdown">
                                        <Link className="navbar-item" href="/">
                                            About
                                        </Link>
                                        <Link className="navbar-item" href="/">
                                            Jobs
                                        </Link>
                                        <Link className="navbar-item" href="/">
                                            Contact
                                        </Link>

                                        <hr className="navbar-divider" />

                                        <Link className="navbar-item" href="/">
                                            Report an issue
                                        </Link>
                                    </div>
                                </div>
                                <div className="navbar-item">
                                    <ThemeSwitchWidget />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="hero-body">
                    <h1 className='title is-1'>Monsun</h1>
                    <p className="subtitle is-3">Subtitle 3</p>
                </div>

                <div className="hero-foot">
                    <nav className="tabs">
                        <div className="container">
                            <ul>
                                <li className="is-active"><Link href="/"  scroll={false}>Overview</Link></li>
                                <li><Link href="#web"  scroll={false}>Web</Link></li>
                                <li><Link href="#grafik"  scroll={false}>Grafik</Link></li>
                                <li><Link href="#foto"  scroll={false}>Foto</Link></li>
                                <li><Link href="#ord"  scroll={false}>Ord</Link></li>
                            </ul>
                            </div>
                    </nav>
                </div>
            </section>
        </header>
    )
}