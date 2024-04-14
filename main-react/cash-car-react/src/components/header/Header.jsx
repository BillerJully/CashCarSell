import './Header.css'

function Header() {
    return (
        <header className="main-header">
            <div className="header">
                <a href="/" className="header-logo">
                    ColoradoQuickCashCars
                </a>
                <nav className="header-menu">
                    <ul className="header-menu-list">
                        <li className="header-menu-item">
                            <a href="#STEPS" className="header-menu-link">
                                Sell car
                            </a>
                        </li>
                        <li className="header-menu-item">
                            <a href="/" className="header-menu-link">
                                How we work
                            </a>
                        </li>
                        <li className="header-menu-item">
                            <a href="/" className="header-menu-link">
                                Benefits
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <a href="/" className="our-phone">
                        +1 (720) 354-1390
                    </a>
                    <button className="header-donate">Donate car</button>
                </div>
            </div>
        </header>
    )
}

export default Header
