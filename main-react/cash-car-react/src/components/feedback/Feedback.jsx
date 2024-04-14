import './Feedback.css'
import phoneLogo from '../../staticfiles/feedback/call.png'

function Feedback() {
    return (
        <section className="feedback-container" id="feedback">
            <h2>Call Us if You Have Questions!</h2>
            <div className="feedback-block">
                <div className="phone-feedback">
                    <img src={phoneLogo} alt="" />
                    <a href="">+1 (720) 354-1390</a>
                </div>
                <div className="feedback-text">
                    <h3>
                        Or Leave Your Phone Number And We Will Call You As Soon
                        As Possible
                    </h3>
                </div>
                <div className="feedback-input">
                    <div className="input-box">
                        <input type="text" placeholder="Write your name" />
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Write your phone" />
                    </div>
                    <button className="feedback-submit">Call Me</button>
                </div>
            </div>
        </section>
    )
}

export default Feedback
