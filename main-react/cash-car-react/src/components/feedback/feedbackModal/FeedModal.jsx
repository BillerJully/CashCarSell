import './FeedModal.css'

const FeedModal = ({ feedbackActive, setFeedbackActive }) => {
    return (
        <div
            className={
                feedbackActive ? 'feedback-modal active' : 'feedback-modal'
            }
            onClick={() => setFeedbackActive(false)}
        >
            <div
                className="feed-back-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <h4>Thank you!</h4>
                <p>We will contact you soon!</p>
                <button
                    className="feedback-submit"
                    type="submit"
                    onClick={() => setFeedbackActive(false)}
                >
                    close
                </button>
            </div>
        </div>
    )
}

export default FeedModal
