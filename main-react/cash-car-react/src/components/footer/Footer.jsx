import './Footer.css'

function Footer() {
    return (
        <section className="Footer-main">
            <div className="Footer">
                <div className="footer-log">
                    <a href="/">RockyMountainCarBuyers.com</a>
                </div>
                <div className="footer-info">
                    {/* <strong>© All rights reserved</strong> */}
                </div>
                <div className="footer-phone">
                    <a href="tel:+17203541390" className="our-phone">
                        +1 (720) 354-1390
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer
