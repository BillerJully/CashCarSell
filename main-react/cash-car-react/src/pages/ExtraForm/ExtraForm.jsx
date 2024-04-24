import React, { useState } from 'react'
import './ExtraForm.css'
import ModalForm from '../../modalextraform/ModalForm'

function ExtraForm() {
    const [modalActive, setModalActive] = useState(false)
    const [formData, setFormData] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: 0,
        q5: '',
    })

    // Добавляем состояние для отслеживания "грязных" полей формы
    const [formDirty, setFormDirty] = useState({
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        // Помечаем поле как "грязное"
        setFormDirty({ ...formDirty, [name]: true })
    }

    const submitForm = async (e) => {
        try {
            const isFormValid = Object.values(formData).every(
                (value) => value !== ''
            )
            // Проверяем, есть ли "грязные" поля
            const isFormDirty = Object.values(formDirty).some((dirty) => dirty)
            if (!isFormValid) {
                console.error('Не все обязательные поля заполнены')
                return
            }
            if (!isFormDirty) {
                console.error('Форма не была изменена')
                return
            }

            const { q1, q2, q3, q4, q5 } = formData

            const response = await fetch('http://localhost:5000/telegram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q1: q1,
                    q2: q2,
                    q3: q3,
                    q4: q4,
                    q5: q5,
                }),
            })
            setFormData({
                q1: '',
                q2: '',
                q3: '',
                q4: 0,
                q5: '',
            })
            setModalActive(true)

            if (response.ok) {
                console.log('Данные успешно отправлены на сервер')
            } else {
                console.error('Ошибка при отправке данных на сервер')
            }
        } catch (error) {
            console.error('Произошла ошибка:', error)
        }
    }

    return (
        <section className="extra-form">
            <h2 className="extra-title">Sell Your Car Fast</h2>
            <form>
                <div className="extra-input-block">
                    <h3>Do you own the car?</h3>
                    <select
                        name="q1"
                        value={formData.q1}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="Yes, I own it outright">
                            Yes, I own it outright (it`s paid off`)
                        </option>
                        <option value="No, I am still making loan payments">
                            No, I am still making loan payments
                        </option>
                        <option value="No, I make lease payments">
                            No, I make lease payments
                        </option>
                    </select>
                </div>

                <div className="extra-input-block">
                    <h3>Do you have a title?</h3>
                    <select
                        name="q2"
                        value={formData.q2}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="Yes, I have a title">
                            Yes, I have a title
                        </option>
                        <option value="No, I have a salvage or rebuilt title">
                            No, I have a salvage or rebuilt title
                        </option>
                        <option value="Option3">I don`t have the title</option>
                    </select>
                </div>
                <div className="extra-input-block">
                    <h3>Can you start and drive your car?</h3>
                    <select
                        name="q3"
                        value={formData.q3}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="Yes, it starts and drives">
                            Yes, it starts and drives
                        </option>
                        <option value="No, it starts but doesn`t drive">
                            No, it starts but doesn`t drive
                        </option>
                        <option value="No, it doesn`t start">
                            No, it doesn`t start (or requires a jump-start)
                        </option>
                    </select>
                </div>
                <div className="extra-input-block">
                    <h3>What`s the mileage on your car?</h3>
                    <input
                        type="number"
                        name="q4"
                        value={formData.q4}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="extra-input-block">
                    <h3>Does your car have exterior damage?</h3>
                    <select
                        name="q5"
                        value={formData.q5}
                        onChange={handleInputChange}
                    >
                        <option value="">Choose answer</option>
                        <option value="No, nothing major, just a few dings and scratches">
                            No, nothing major, just a few dings and scratches
                        </option>
                        <option value="Yes, it has some rust or exterior damage">
                            Yes, it has some rust or exterior damage
                        </option>
                    </select>
                </div>
            </form>
            <button className="extra-button" onClick={submitForm}>
                Submit
            </button>
            {/* <button
                className="extra-button"
                onClick={() => setModalActive(true)}
            >
                Submit
            </button> */}
            <ModalForm active={modalActive} setActive={setModalActive} />
        </section>
    )
}

export default ExtraForm
