import React, { useState } from 'react';
import './ExtraForm.css'

function ExtraForm() {
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: 0,
        q5: ''
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnswers({ ...answers, [name]: value });
      };
    return (
        <section className='extra-form'>
            <h2 className='extra-title'>Sell Your Car Fast</h2>
            <form>
                <div className='extra-input-block'>
                <label>Do you own the car?
                    <select name="q1" value={answers.q1} onChange={handleInputChange}>
                    <option value="">Choose answer</option>
                    <option value="A">Yes, I own it outright (it`s paid off`)</option>
                    <option value="B">No, I am still making loan payments</option>
                    <option value="C">No, I make lease payments</option>
                    </select>
                </label>
                </div>
                <div className='extra-input-block'>
                <label>Do you have a title?
                    <select name="q2" value={answers.q2} onChange={handleInputChange}>
                    <option value="">Choose answer</option>
                    <option value="Option1">Yes, I have a title</option>
                    <option value="Option2">No, I have a salvage or rebuilt title</option>
                    <option value="Option3">I don`t have the title</option>
                    </select>
                </label>
                </div>
                <div className='extra-input-block'>
                <label>Can you start and drive your car?
                    <select name="q3" value={answers.q3} onChange={handleInputChange}>
                    <option value="">Choose answer</option>
                    <option value="Option1">Yes, it starts and drives</option>
                    <option value="Option2">No, it starts but doesn`t drive</option>
                    <option value="Option3">No, it doesn`t start (or requires a jump-start)</option>
                    </select>
                </label>
                </div>
                <div className='extra-input-block'>
                <label>What`s the mileage on your car?
                    <input type="number" name="q4" value={answers.q4} onChange={handleInputChange} />
                </label>
                </div>
                <div className='extra-input-block'>
                <label>Does your car have exterior damage
                    <select name="q5" value={answers.q5} onChange={handleInputChange}>
                    <option value="">Choose answer</option>
                    <option value="OptionA">No, nothing major, just a few dings and scratches</option>
                    <option value="OptionB">Yes, it has some rust or exterior damage</option>
                    </select>
                </label>
                </div>
            </form>
            <button>Submit</button>
    </section>
    )
}

export default ExtraForm