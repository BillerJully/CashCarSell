import React from 'react'
import { useForm } from 'react-hook-form'
import './NewForm.css'
import '../simple-form/SimpleForm.css'
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const vinNumber = watch('vinNumber')
    const state = watch('state')
    const carNumber = watch('carNumber')
    const onSubmit = async (data, e) => {
        e.preventDefault()
        if (
            (data.carNumber && data.state && data.zipcode && data.phone) ||
            (data.vinNumber && data.zipcode && data.phone) ||
            (data.carNumber &&
                data.state &&
                data.vinNumber &&
                data.zipcode &&
                data.phone)
        )
            try {
                let requestData
                if (data.vinNumber) {
                    requestData = {
                        plate: 'VIN_NOT_PROVIDED',
                        vin: data.vinNumber,
                        state: data.state || 'STATE_NOT_PROVIDED',
                        zipcode: data.zipcode,
                        phone: data.phone,
                    }
                } else if (data.carNumber && data.state) {
                    requestData = {
                        plate: data.carNumber,
                        vin: 'VIN_NOT_PROVIDED',
                        state: data.state,
                        zipcode: data.zipcode,
                        phone: data.phone,
                    }
                } else {
                    requestData = {
                        plate: data.carNumber,
                        vin: data.vinNumber,
                        state: data.state,
                        zipcode: data.zipcode,
                        phone: data.phone,
                    }
                }
                const response = await fetch(
                    `${process.env.REACT_APP_HOST_IP_ADDRESS}/api/telegram`,
                    // 'http://localhost:5000/telegram',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            plate: data.carNumber,
                            vin: data.vinNumber,
                            state: data.state,
                            zipcode: data.zipcode,
                            phone: data.phone,
                        }),
                    }
                )

                if (!response.ok) {
                    throw new Error(
                        `${response.status} : ${response.statusText}`
                    )
                }
                navigate('/getoffer')
            } catch (error) {
                console.log(
                    `Возникла ошибка при отправке запроса: ${error.message}`
                )
            }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="new-main-form">
            <div className="input-first-line">
                <div className="input-line">
                    {errors.carNumber && (
                        <label
                            htmlFor="input6"
                            className={errors.carNumber ? 'red-input' : ''}
                        >
                            {errors.carNumber.message}
                        </label>
                    )}
                    <input
                        {...register('carNumber', {
                            required: !vinNumber ? 'Plate is required' : false,
                            pattern: {
                                value: /^[\w.-]{1,7}$/,
                                message: 'Invalid plate number',
                            },
                        })}
                        placeholder="Car plate"
                    />
                </div>
                <div className="input-line">
                    {errors.state && (
                        <label
                            htmlFor="input6"
                            className={errors.state ? 'red-input' : ''}
                        >
                            {errors.state.message}
                        </label>
                    )}
                    <select
                        {...register('state', {
                            required: !vinNumber ? 'State is required' : false,
                        })}
                    >
                        <option value="">Choose State</option>
                        <option value="CO">Colorado</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
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
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
            </div>
            <div className="between-or">
                <div className="divider"></div>
                <p>OR</p>
                <div className="divider"></div>
            </div>
            <div className="input-second-line">
                <div className="input-all-line">
                    {errors.vinNumber && (
                        <label
                            htmlFor="input6"
                            className={errors.vinNumber ? 'red-input' : ''}
                        >
                            {errors.vinNumber.message}
                        </label>
                    )}
                    <input
                        {...register('vinNumber', {
                            required:
                                !state || !carNumber
                                    ? 'VIN is required'
                                    : false,
                            pattern: {
                                value: /^[\w\d]{17}$/,
                                message: 'Invalid VIN number',
                            },
                        })}
                        placeholder="Vin Number"
                    />
                </div>
            </div>
            <div className="input-last-line">
                <div className="input-line">
                    {errors.zipcode && (
                        <label
                            htmlFor="input6"
                            className={errors.zipcode ? 'red-input' : ''}
                        >
                            {errors.zipcode.message}
                        </label>
                    )}
                    <input
                        {...register('zipcode', {
                            required: 'Zipcode is required',
                            pattern: {
                                value: /^\d{5}(?:[-\s]\d{4})?$/,
                                message: 'Invalid zipcode',
                            },
                        })}
                        placeholder="zipcode"
                    />
                </div>
                <div className="input-line">
                    {errors.phone && (
                        <label
                            htmlFor="input6"
                            className={errors.phone ? 'red-input' : ''}
                        >
                            {errors.phone.message}
                        </label>
                    )}
                    <InputMask
                        {...register('phone', {
                            required: 'Phone is required',
                            pattern: {
                                value: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/,
                                message: 'Invalid phone number',
                            },
                        })}
                        placeholder="Phone Number"
                        mask="+1 (999) 999-9999"
                        maskChar="_"
                    />
                </div>
            </div>
            <div className="errors-text">
                {!errors.zipcode &&
                    !errors.phone &&
                    errors.carNumber &&
                    errors.state &&
                    errors.vinNumber && (
                        <label>
                            Please fill in either VIN or License Plate and State
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
                <button type="submit" className="submit-btn">
                    Get offer
                </button>
            </div>
        </form>
    )
}

export default Form
