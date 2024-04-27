import Mainform from '../../components/mainform/Mainform'
import Steps from '../../components/MainSteps/Steps'
import Yellowbox from '../../components/yellowbox/Yellowbox'
import Benefits from '../../components/offerbenefits/Benefits'
import Feedback from '../../components/feedback/Feedback'
import Main from '../../components/mainform/Main'

function MainPage() {
    return (
        <div>
            {/* <Mainform /> */}
            <Main />
            <Steps />
            <Yellowbox />
            <Benefits />
            <Feedback />
        </div>
    )
}

export default MainPage
