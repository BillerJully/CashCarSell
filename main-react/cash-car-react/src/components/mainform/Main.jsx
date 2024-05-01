import './Mainform.css'
import './simple-form/SimpleForm.css'
import Form from './newForm/NewForm'

function Mainform() {
    return (
        <section className="main-form" id="MAINFORM">
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
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mainform
