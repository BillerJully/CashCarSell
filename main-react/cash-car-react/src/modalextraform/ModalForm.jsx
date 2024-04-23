import './ModalForm.css'

import { useNavigate } from 'react-router-dom'

function ModalForm({ active, setActive }) {
    const navigate = useNavigate()
    return (
        <div
            className={active ? 'modal-window active' : 'modal-window'}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? 'modal-content active' : 'modal-content'}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="inside-content">
                    <div
                        class="closeModal"
                        onClick={() => setActive(false)}
                    ></div>
                    <div className="modal-text">
                        <h4>Thank you! We will call you soon!</h4>
                        <button
                            className="modal-btn"
                            onClick={() => navigate('/')}
                        >
                            Back to main page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm
