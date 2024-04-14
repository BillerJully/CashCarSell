import Header from './components/header/Header'
import Steps from './components/MainSteps/Steps'
import Yellowbox from './components/yellowbox/Yellowbox'
import Footer from './components/footer/Footer'
import Benefits from './components/offerbenefits/Benefits'
import Feedback from './components/feedback/Feedback'

function App() {
    return (
        <div className="App">
            <Header />
            <Steps />
            <Yellowbox />
            <Benefits />
            <Feedback />
            <Footer />
        </div>
    )
}

export default App
