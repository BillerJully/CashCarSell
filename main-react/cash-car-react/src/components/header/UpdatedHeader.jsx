import { useState } from 'react'
import './UpdatedHeader.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function UpdatedHeader() {
    const [burger, setBurger] = useState(false)

    return (
        <header className="main-header-container">
            <div className="header-container">
                <div className="header-logo">
                    <a href="/" className="header-logo-link">
                        ColoradoQuickCashCars
                    </a>
                </div>
                <nav className="header-nav">
                    <ul
                        className={
                            burger
                                ? ['header-list', 'active'].join(' ')
                                : ['header-list']
                        }
                    >
                        <li className="header-item">
                            <a
                                href="/#MAINFORM"
                                onClick={() => setBurger(!burger)}
                                className="header-nav-link"
                            >
                                Sell car
                            </a>
                        </li>
                        <li className="header-item">
                            <a
                                href="/#STEPS"
                                onClick={() => setBurger(!burger)}
                                className="header-nav-link"
                            >
                                How we work
                            </a>
                        </li>
                        <li className="header-item">
                            <a
                                href="/#BENEFITS"
                                onClick={() => setBurger(!burger)}
                                className="header-nav-link"
                            >
                                Benefits
                            </a>
                        </li>
                        <li className="header-item">
                            <a href="tel:+17203541390" className="our-phone">
                                +1 (720) 354-1390
                            </a>
                        </li>
                    </ul>
                    {/* <div className="header-number">
                    <a href="/" className="our-phone">
                        +1 (720) 354-1390
                    </a>
                </div> */}
                </nav>

                <div
                    onClick={() => setBurger(!burger)}
                    className="burger-menu-btn"
                >
                    {burger ? (
                        <AiOutlineClose size={25} />
                    ) : (
                        <AiOutlineMenu size={25} />
                    )}
                </div>
            </div>
        </header>
    )
}

export default UpdatedHeader
