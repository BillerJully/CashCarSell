import './Feedback.css'
import phoneLogo from '../../staticfiles/feedback/call.png'
import { useEffect, useState } from 'react'

function Feedback() {
    const [feedBackName, setFeedBackName] = useState('')
    const [feedBackPhone, setFeedBackPhone] = useState('')

    const [feedBackNameDirty, setFeedBackNameDirty] = useState(false)
    const [feedBackEmailkDirty, setFeedBackPhoneDirty] = useState(false)

    const [FeedBackNameError, setFeedBackNameError] = useState('Fill')
    const [feedBackPhoneError, setFeedBackPhoneError] = useState('Fill')

    const changePhone = (e) => {
        setFeedBackPhone(e.target.value)
        const re = /^(8|\+7)?-?(\d{3})-?(\d{3})-?(\d{2})-?(\d{2})$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setFeedBackPhoneError('Некоректный номер телефона')
        } else {
            setFeedBackPhoneError('')
        }
    }

    const changeName = (e) => {
        setFeedBackName(e.target.value)
        const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setFeedBackNameError('Некоректное имя')
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
        debugger
        try {
            e.preventDefault()
            let request = await fetch('http://localhost:5000/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    feedBackName: feedBackName,
                    feedBackPhone: feedBackPhone,
                }),
            })
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
                        <input
                            type="text"
                            placeholder="Write your phone"
                            value={feedBackPhone}
                            onChange={changePhone}
                            onBlur={(e) => blurHandler(e)}
                            name="phone"
                        />
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
