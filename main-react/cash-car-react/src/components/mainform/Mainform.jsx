import './Mainform.css'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

function Mainform() {
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
        const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setMarkError('Error in make input')
        } else {
            setMarkError('')
        }
    }

    const changeModel = (e) => {
        setModel(e.target.value)
        const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setModelError('Error in model input')
        } else {
            setModelError('')
        }
    }

    const changeSubmodel = (e) => {
        setSubmodel(e.target.value)
        const re = /^([а-я]{1}[а-яё]{3,23}|[a-z]{1}[a-z]{3,23})$/
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
        const re = /^(\+1)?-?\(?(\d{3})\)?-?(\d{3})-?(\d{4})$/
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
        debugger
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
                        {yearDirty && yearError && (
                            <div className="ERROR">{yearError}</div>
                        )}
                        {markDirty && markError && (
                            <div className="ERROR">{markError}</div>
                        )}
                        {modelDirty && modelError && (
                            <div className="ERROR">{modelError}</div>
                        )}
                        {submodelDirty && submodelError && (
                            <div className="ERROR">{submodelError}</div>
                        )}
                        {zipcodeDirty && zipcodeError && (
                            <div className="ERROR">{zipcodeError}</div>
                        )}
                        {phoneDirty && phoneError && (
                            <div className="ERROR">{phoneError}</div>
                        )}
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
                            </div>
                            <div className="input-group">
                                <label htmlFor="input2">make</label>
                                <input
                                    type="text"
                                    placeholder="Car make"
                                    value={mark}
                                    onChange={changeMark}
                                    onBlur={(e) => blurHandler(e)}
                                    name="make"
                                />
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
                            </div>
                            <div className="input-group-button">
                                <div className="text-inside">
                                    <h5>
                                        By submitting, you acknowledge our{' '}
                                        <a href="/policy">privacy policy</a>
                                    </h5>
                                </div>

                                <button
                                    disabled={!formValid}
                                    type="submit"
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
