import './Mainform.css'

function Mainform() {
    return (
        <section className="main-form">
            <div className="main-form-container">
                <div className="description-container">
                    <h1>Sell Your Car the Easy Way For Cash</h1>
                    <h3>
                        Leave a request so that we can calculate the cost of
                        buying back your car!
                    </h3>
                </div>
                <div className="main-form-container-right">
                    <div className="form-container">
                        <h3>Get Started!</h3>
                        <form className="main-offer-form">
                            <div className="input-group">
                                <label htmlFor="input">Year</label>
                                <input
                                    type="text"
                                    placeholder="Manufacture year"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="input2">make</label>
                                <input type="text" placeholder="Car make" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="input3">Model</label>
                                <input
                                    type="text"
                                    placeholder="Your car model"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="input4">Submodel</label>
                                <input
                                    type="text"
                                    placeholder="Your car submodel"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="input5">Zip code</label>
                                <input
                                    type="text"
                                    placeholder="Your adress zip code"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="input6">Phone number</label>
                                <input
                                    type="text"
                                    placeholder="Your phone number"
                                />
                            </div>
                            <div className="input-group">
                                <button type="submit" className="submit-btn">
                                    Get offer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainform
