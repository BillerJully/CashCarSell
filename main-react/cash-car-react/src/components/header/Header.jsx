// import './Header.css'
// import logo from '../../staticfiles/Header/price-tag.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Header() {
    return (
        <header className="main-header">
            <div className="header">
                <a href="/" className="header-logo">
                    {/* <img src ={logo} alt="" className='logo-car'/> */}
                    ColoradoQuickCashCars
                </a>
                <nav className="header-menu">
                    <ul className="header-menu-list">
                        <li className="header-menu-item">
                            <a href="/#MAINFORM" className="header-menu-link">
                                Sell car
                            </a>
                        </li>
                        <li className="header-menu-item">
                            <a href="/#STEPS" className="header-menu-link">
                                How we work
                            </a>
                        </li>
                        <li className="header-menu-item">
                            <a href="/#BENEFITS" className="header-menu-link">
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
                <div className="burger-menu">
                    <AiOutlineMenu size={30} />
                </div>
            </div>
        </header>
    )
}

export default Header
