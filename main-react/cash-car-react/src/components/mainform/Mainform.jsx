import './Mainform.css'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Mainform() {
    const navigate = useNavigate()

    const [year, setYear] = useState('')
    const [mark, setMark] = useState('')
    const [model, setModel] = useState('')
    const [submodel, setSubmodel] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')

    const [yearDirty, setYearDirty] = useState(false)
    const [markDirty, setMarkDirty] = useState(false)
    const [modelDirty, setModelDirty] = useState(false)
    const [submodelDirty, setSubmodelDirty] = useState(false)
    const [zipcodeDirty, setZipcodeDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)

    const [yearError, setYearError] = useState('Year can`t be empty')
    const [markError, setMarkError] = useState('Mark can`t be empty')
    const [modelError, setModelError] = useState('Model can`t be empty')
    const [submodelError, setSubmodelError] = useState(
        'Submodel can`t be empty'
    )
    const [zipcodeError, setZipcodeError] = useState('Zipcode can`t be empty')
    const [phoneError, setPhoneError] = useState('Phone can`t be empty')

    const changeYear = (e) => {
        setYear(e.target.value)
        const re = /^(19|20)\d{2}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setYearError('Error in year input')
        } else {
            setYearError('')
        }
    }

    const changeMark = (e) => {
        setMark(e.target.value)
        const re = /^[а-яёa-z0-9\s]{1,}$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setMarkError('Error in make input')
        } else {
            setMarkError('')
        }
    }

    const changeModel = (e) => {
        setModel(e.target.value)
        const re = /^[а-яёa-z0-9\s]{1,}$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setModelError('Error in model input')
        } else {
            setModelError('')
        }
    }

    const changeSubmodel = (e) => {
        setSubmodel(e.target.value)
        const re = /^[а-яёa-z0-9\s]{1,}$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setSubmodelError('')
        } else {
            setSubmodelError('')
        }
    }

    const changeZipcode = (e) => {
        setZipcode(e.target.value)
        const re = /^\d{5}(?:[-\s]\d{4})?$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setZipcodeError('Error in ZipCode')
        } else {
            setZipcodeError('')
        }
    }

    const changePhone = (e) => {
        setPhone(e.target.value)
        const re = /^((1)[\-\s]?)?(\(?\d{3}\)?[\-\s]?)?[\d\-\s]{10}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Error in phone input')
        } else {
            setPhoneError('')
        }
    }

    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        if (
            yearError ||
            markError ||
            modelError ||
            submodelError ||
            zipcodeError ||
            phoneError
        ) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [
        yearError,
        markError,
        modelError,
        submodelError,
        zipcodeError,
        phoneError,
    ])

    const submitData = async (e) => {
        try {
            e.preventDefault()
            let request = await fetch('http://localhost:5000/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    year: year,
                    mark: mark,
                    model: model,
                    submodel: submodel,
                    zipcode: zipcode,
                    phone: phone,
                }),
            })
            // .then((response) => response.json())
            // .then((result) => alert(result.response.msg))
            setYear('')
            setMark('')
            setModel('')
            setSubmodel('')
            setZipcode('')
            setPhone('')
            setYearDirty(false)
            setMarkDirty(false)
            setModelDirty(false)
            setSubmodelDirty(false)
            setZipcodeDirty(false)
            setPhoneDirty(false)
            setFormValid(false)

            if (!request.ok)
                throw new Error(`${request.status} : ${request.statusText}`)
        } catch (error) {
            console.log(
                `Возникла ошибка при отправке запроса: ${error.message}`
            )
        }
        navigate('/getoffer')
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'year':
                setYearDirty(true)
                break
            case 'make':
                setMarkDirty(true)
                break
            case 'model':
                setModelDirty(true)
                break
            case 'zipcode':
                setZipcodeDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            default:
        }
    }

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

                        <form className="main-offer-form">
                            <div className="input-group">
                                <label htmlFor="input">Year</label>

                                <input
                                    type="text"
                                    placeholder="Manufacture year"
                                    value={year}
                                    onChange={changeYear}
                                    onBlur={(e) => blurHandler(e)}
                                    name="year"
                                />
                                {yearDirty && yearError && (
                                    <div className="ERROR">{yearError}</div>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="input2">Make</label>

                                <input
                                    type="text"
                                    placeholder="Car make"
                                    value={mark}
                                    onChange={changeMark}
                                    onBlur={(e) => blurHandler(e)}
                                    name="make"
                                />
                                {markDirty && markError && (
                                    <div className="ERROR">{markError}</div>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="input3">Model</label>

                                <input
                                    type="text"
                                    placeholder="Your car model"
                                    value={model}
                                    onChange={changeModel}
                                    onBlur={(e) => blurHandler(e)}
                                    name="model"
                                />
                                {modelDirty && modelError && (
                                    <div className="ERROR">{modelError}</div>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="input4">
                                    Submodel (If known)
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your car submodel"
                                    value={submodel}
                                    onChange={changeSubmodel}
                                    onBlur={(e) => blurHandler(e)}
                                    name="submodel"
                                />
                                {submodelDirty && submodelError && (
                                    <div className="ERROR">{submodelError}</div>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="input5">Zip code</label>

                                <input
                                    type="text"
                                    placeholder="Your address zip code"
                                    value={zipcode}
                                    onChange={changeZipcode}
                                    onBlur={(e) => blurHandler(e)}
                                    name="zipcode"
                                />
                                {zipcodeDirty && zipcodeError && (
                                    <div className="ERROR">{zipcodeError}</div>
                                )}
                            </div>
                            <div className="input-group">
                                <label htmlFor="input6">Phone number</label>

                                <input
                                    type="text"
                                    placeholder="Your phone number"
                                    value={phone}
                                    onChange={changePhone}
                                    onBlur={(e) => blurHandler(e)}
                                    name="phone"
                                />
                                {phoneDirty && phoneError && (
                                    <label className="ERROR">
                                        {phoneError}
                                    </label>
                                )}
                            </div>
                            <div className="input-group-button">
                                <div className="text-inside">
                                    <h5>
                                        By submitting, you acknowledge our{' '}
                                        <a href="/privacy">privacy policy</a>
                                    </h5>
                                </div>
                                {/* <Link to="/getoffer"> */}
                                <button
                                    disabled={!formValid}
                                    type="submit"
                                    href="/getoffer"
                                    onClick={submitData}
                                    className="submit-btn"
                                >
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
