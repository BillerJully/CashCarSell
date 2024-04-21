import React, { useState } from 'react'
import './ExtraForm.css'

function ExtraForm() {
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: 0,
        q5: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setAnswers({ ...answers, [name]: value })
    }
    return (
        <section className="extra-form">
            <h2 className="extra-title">Sell Your Car Fast</h2>
            <form>
                <div className="extra-input-block">
                    <h3>Do you own the car?</h3>
                    <select
                        name="q1"
                        value={answers.q1}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="A">
                            Yes, I own it outright (it`s paid off`)
                        </option>
                        <option value="B">
                            No, I am still making loan payments
                        </option>
                        <option value="C">No, I make lease payments</option>
                    </select>
                </div>

                <div className="extra-input-block">
                    <h3>Do you have a title?</h3>
                    <select
                        name="q2"
                        value={answers.q2}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="Option1">Yes, I have a title</option>
                        <option value="Option2">
                            No, I have a salvage or rebuilt title
                        </option>
                        <option value="Option3">I don`t have the title</option>
                    </select>
                </div>
                <div className="extra-input-block">
                    <h3>Can you start and drive your car?</h3>
                    <select
                        name="q3"
                        value={answers.q3}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="Option1">
                            Yes, it starts and drives
                        </option>
                        <option value="Option2">
                            No, it starts but doesn`t drive
                        </option>
                        <option value="Option3">
                            No, it doesn`t start (or requires a jump-start)
                        </option>
                    </select>
                </div>
                <div className="extra-input-block">
                    <h3>What`s the mileage on your car?</h3>
                    <input
                        type="number"
                        name="q4"
                        value={answers.q4}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="extra-input-block">
                    <h3>Does your car have exterior damage?</h3>
                    <select
                        name="q5"
                        value={answers.q5}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="OptionA">
                            No, nothing major, just a few dings and scratches
                        </option>
                        <option value="OptionB">
                            Yes, it has some rust or exterior damage
                        </option>
                    </select>
                </div>
            </form>
            <button className="extra-button">Submit</button>
        </section>
    )
}

export default ExtraForm
