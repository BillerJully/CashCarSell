import Header from './components/header/Header'
import Steps from './components/MainSteps/Steps'
import Yellowbox from './components/yellowbox/Yellowbox'
import Footer from './components/footer/Footer'
import Benefits from './components/offerbenefits/Benefits'
import Feedback from './components/feedback/Feedback'
import Mainform from './components/mainform/Mainform'

function App() {
    return (
        <div className="App">
            <Header />
            <Mainform />
            <Steps />
            <Yellowbox />
            <Benefits />
            <Feedback />
            <Footer />
        </div>
    )
}

export default App
