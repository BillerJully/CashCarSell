import './Mainform.css'
import './simple-form/SimpleForm.css'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Mainform() {
    const navigate = useNavigate()

    const [plate, setPlate] = useState('')
    const [vin, setVin] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [phone, setPhone] = useState('')

    const [plateDirty, setPlateDirty] = useState(false)
    const [vinDirty, setVinDirty] = useState(false)
    const [stateDirty, setStateDirty] = useState(false)
    const [zipcodeDirty, setZipcodeDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)

    const [plateError, setPlateError] = useState('Plate can`t be empty')
    const [vinError, setVinError] = useState('vin can`t be empty')
    const [stateError, setStateError] = useState('State can`t be empty')
    const [zipcodeError, setZipcodeError] = useState('Zipcode can`t be empty')
    const [phoneError, setPhoneError] = useState('Phone can`t be empty')

    const changeplate = (e) => {
        setPlate(e.target.value)
        const re = /^[\w.-]{7}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPlateError('Error in plate input')
        } else {
            setPlateError('')
        }
    }

    const changevin = (e) => {
        setVin(e.target.value)

        setVinError('Error in vin input')

        setVinError('')
    }

    const changestate = (e) => {
        const value = e.target.value

        // Помечаем поле как "грязное"
        if (value === 'ERROR') {
            setStateError(true)
        } else {
            setStateError('')
            setState(value)
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
        const re =
            /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Error in phone input')
        } else {
            setPhoneError('')
        }
    }
    const [formValid, setFormValid] = useState(false)
    useEffect(() => {
        if (
            !zipcodeError &&
            !phoneError &&
            !(vinError && plateError && stateError)
        ) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [plateError, vinError, stateError, zipcodeError, phoneError])

    const submitData = async (e) => {
        try {
            e.preventDefault()
            let request = await fetch('http://localhost:5000/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    plate: plate,
                    vin: vin,
                    state: state,
                    zipcode: zipcode,
                    phone: phone,
                }),
            })
            // .then((response) => response.json())
            // .then((result) => alert(result.response.msg))
            setPlate('')
            setVin('')
            setState('')
            setZipcode('')
            setPhone('')
            setPlateDirty(false)
            setVinDirty(false)
            setStateDirty(false)
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
            case 'plate':
                setPlateDirty(true)
                break
            case 'vin':
                setVinDirty(true)
                break
            case 'state':
                setStateDirty(true)
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

                        <form className="new-main-form">
                            <div className="input-first-line">
                                <div className="input-line">
                                    <label htmlFor="input">
                                        License Plate{' '}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Car plate"
                                        value={plate}
                                        onChange={changeplate}
                                        onBlur={(e) => blurHandler(e)}
                                        name="plate"
                                    />
                                    {plateDirty && plateError && (
                                        <label className="ERROR">
                                            {plateError}
                                        </label>
                                    )}
                                </div>
                                <div className="input-line">
                                    <label htmlFor="input2">State</label>
                                    <select
                                        name="state"
                                        value={state}
                                        onChange={changestate}
                                    >
                                        <option value="ERROR">
                                            Choose State
                                        </option>
                                        <option value="CO">Colorado</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">
                                            District Of Columbia
                                        </option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">
                                            Massachusetts
                                        </option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">
                                            New Hampshire
                                        </option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">
                                            North Carolina
                                        </option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">
                                            South Carolina
                                        </option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">
                                            West Virginia
                                        </option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                    {stateDirty && stateError && (
                                        <label className="ERROR">
                                            {stateError}
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="between-or">
                                <div className="divider"></div>
                                <p>OR</p>
                                <div className="divider"></div>
                            </div>

                            <div className="input-second-line">
                                <div className="input-all-line">
                                    <label htmlFor="input3">VIN</label>

                                    <input
                                        type="text"
                                        placeholder="Your car vin number"
                                        value={vin}
                                        onChange={changevin}
                                        onBlur={(e) => blurHandler(e)}
                                        name="vin"
                                    />
                                    {vinDirty && vinError && (
                                        <label className="ERROR">
                                            {vinError}
                                        </label>
                                    )}
                                </div>
                            </div>
                            <div className="input-last-line">
                                <div className="input-line">
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
                                        <label className="ERROR">
                                            {zipcodeError}
                                        </label>
                                    )}
                                </div>
                                <div className="input-line">
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
                            </div>

                            <div className="input-group-button">
                                <div className="text-inside">
                                    <h5>
                                        By submitting, you acknowledge our{' '}
                                        <a href="/privacy">privacy policy</a>
                                    </h5>
                                </div>
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
