import './Feedback.css'
import phoneLogo from '../../staticfiles/feedback/call.png'
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'

function Feedback() {
    const [feedBackName, setFeedBackName] = useState('')
    const [feedBackPhone, setFeedBackPhone] = useState('')

    const [feedBackNameDirty, setFeedBackNameDirty] = useState(false)
    const [feedBackPhonekDirty, setFeedBackPhoneDirty] = useState(false)

    const [FeedBackNameError, setFeedBackNameError] = useState('Fill')
    const [feedBackPhoneError, setFeedBackPhoneError] = useState('Fill')

    const changePhone = (e) => {
        setFeedBackPhone(e.target.value)
        const re =
            /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setFeedBackPhoneError('Invalid phone number')
        } else {
            setFeedBackPhoneError('')
        }
    }

    const changeName = (e) => {
        setFeedBackName(e.target.value)
        const re = /^[а-яёa-z\s]{1,}$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setFeedBackNameError('Invalid name')
        } else {
            setFeedBackNameError('')
        }
    }

    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        if (feedBackPhoneError || FeedBackNameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [feedBackPhone, feedBackName])

    const submitData = async (e) => {
        try {
            e.preventDefault()
            // let request = await fetch('http://localhost:5000/telegram',
            let request = await fetch(
                `${process.env.REACT_APP_HOST_IP_ADDRESS}/api/telegram`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        feedBackName: feedBackName,
                        feedBackPhone: feedBackPhone,
                    }),
                }
            )
            // .then((response) => response.json())
            // .then((result) => alert(result.response.msg))
            setFeedBackName('')
            setFeedBackPhone('')
            setFeedBackNameDirty(false)
            setFeedBackPhoneDirty(false)

            if (!request.ok)
                throw new Error(`${request.status} : ${request.statusText}`)
        } catch (error) {
            console.log(
                `Возникла ошибка при отправке запроса: ${error.message}`
            )
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setFeedBackNameDirty(true)
                break
            case 'phone':
                setFeedBackPhoneDirty(true)
                break
            default:
        }
    }

    return (
        <section className="feedback-container" id="feedback">
            <h2>Call Us if You Have Questions!</h2>
            <div className="feedback-block">
                <div className="phone-feedback">
                    <img src={phoneLogo} alt="" />
                    <a href="tel:+17203541390">+1 (720) 354-1390</a>
                </div>
                <div className="feedback-text">
                    <h3>
                        Or Leave Your Phone Number And We Will Call You As Soon
                        As Possible
                    </h3>
                </div>
                {feedBackPhonekDirty && feedBackPhoneError && (
                    <div className="ERROR">{feedBackPhoneError}</div>
                )}
                {feedBackNameDirty && FeedBackNameError && (
                    <div className="ERROR">{FeedBackNameError}</div>
                )}
                <div className="feedback-input">
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Write your name"
                            value={feedBackName}
                            onChange={changeName}
                            onBlur={(e) => blurHandler(e)}
                            name="name"
                        />
                    </div>

                    <div className="input-box">
                        <InputMask
                            type="text"
                            placeholder="Your phone number"
                            value={feedBackPhone}
                            onChange={changePhone}
                            onBlur={(e) => blurHandler(e)}
                            name="phone"
                            mask="+1 (999) 999-9999"
                            maskChar="_"
                        />
                        {/* <input
                            type="text"
                            placeholder="Write your phone"
                            value={feedBackPhone}
                            onChange={changePhone}
                            onBlur={(e) => blurHandler(e)}
                            name="phone"
                        /> */}
                    </div>
                    <button
                        className="feedback-submit"
                        disabled={!formValid}
                        type="submit"
                        onClick={submitData}
                    >
                        Call Me
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Feedback
