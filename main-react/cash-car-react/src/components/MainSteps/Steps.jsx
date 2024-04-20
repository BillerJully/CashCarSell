import './Steps.css'
import stepOne from '../../staticfiles/steps/step-1.png'
import stepTwo from '../../staticfiles/steps/step-2.png'
import stepThree from '../../staticfiles/steps/step-3.png'
import ellipse from '../../staticfiles/steps/Ellipse.png'

function Steps() {
    return (
        <section className="steps-container" id="STEPS">
            <h2>The Easiest Way To Get Cash For Your Car</h2>
            <div className="steps-block">
                <div className="step-block">
                    <img src={stepOne} alt="" />
                    <h4>Get an Offer in Minutes</h4>
                    <p>
                        <img src={ellipse} alt="" />
                        We can buy your car within 30 minutes
                    </p>
                    <p>
                        <img src={ellipse} alt="" />
                        Quick car evaluation without the hassle
                    </p>
                </div>
                <div className="step-block">
                    <img src={stepTwo} alt="" />
                    <h4>We Come to You</h4>
                    <p>
                        <img src={ellipse} alt="" />
                        You don't have to pay for towing
                    </p>
                    <p>
                        <img src={ellipse} alt="" />
                        We take care of all towing things
                    </p>
                </div>
                <div className="step-block">
                    <img src={stepThree} alt="" />
                    <h4>Get Paid Today</h4>
                    <p>
                        <img src={ellipse} alt="" />
                        Immediate payment and cash in hand
                    </p>
                    <p>
                        <img src={ellipse} alt="" />
                        Your offer is always quaranteed
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Steps
