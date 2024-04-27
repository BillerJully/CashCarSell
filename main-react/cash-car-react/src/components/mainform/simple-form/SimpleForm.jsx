import './SimpleForm.css'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SimpleForm() {
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

    const [plateError, setPlateError] = useState('plate can`t be empty')
    const [vinError, setVinError] = useState('vin can`t be empty')
    const [stateError, setStateError] = useState('vin can`t be empty')
    const [zipcodeError, setZipcodeError] = useState('Zipcode can`t be empty')
    const [phoneError, setPhoneError] = useState('Phone can`t be empty')

    const changeplate = (e) => {
        setPlate(e.target.value)
        const re = /^(19|20)\d{2}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPlateError('Error in plate input')
        } else {
            setPlateError('')
        }
    }

    const changevin = (e) => {
        setVin(e.target.value)
        const re = /^[A-HJ-NPR-Z0-9]{17}$/i
        if (!re.test(String(e.target.value).toLowerCase())) {
            setVinError('Error in vin input')
        } else {
            setVinError('')
        }
    }
    const changestate = (e) => {
        setState(e.target.value)
        const re = /^\d{5}(?:[-\s]\d{4})?$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setStateError('Error in ZipCode')
        } else {
            setStateError('')
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
            plateError ||
            vinError ||
            stateError ||
            zipcodeError ||
            phoneError
        ) {
            setFormValid(false)
        } else {
            setFormValid(true)
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
        <form className="new-main-form">
            <div className="input-first-line">
                <div className="input-line">
                    <label htmlFor="input">Plate</label>
                    <input
                        type="text"
                        placeholder="Car plate"
                        value={plate}
                        onChange={changeplate}
                        onBlur={(e) => blurHandler(e)}
                        name="plate"
                    />
                    {plateDirty && plateError && (
                        <label className="ERROR">{plateError}</label>
                    )}
                </div>
                <div className="input-line">
                    <label htmlFor="input2">State</label>
                    <input
                        type="text"
                        placeholder="State"
                        value={state}
                        onChange={changestate}
                        onBlur={(e) => blurHandler(e)}
                        name="make"
                    />
                    {stateDirty && stateError && (
                        <label className="ERROR">{stateError}</label>
                    )}
                </div>
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
                        <label className="ERROR">{vinError}</label>
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
                        <label className="ERROR">{zipcodeError}</label>
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
                        <label className="ERROR">{phoneError}</label>
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
    )
}

export default SimpleForm
