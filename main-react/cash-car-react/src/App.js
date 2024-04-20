import Header from './components/header/Header'
import Steps from './components/MainSteps/Steps'
import Yellowbox from './components/yellowbox/Yellowbox'
import Footer from './components/footer/Footer'
import Benefits from './components/offerbenefits/Benefits'
import Feedback from './components/feedback/Feedback'
import Mainform from './components/mainform/Mainform'
import MainPage from './pages/mainpage'

import Privacy from './pages/Privacy'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/policy" element={<Privacy />} />
                </Routes>
            </BrowserRouter>
            {/* <MainPage /> */}
            {/* <Mainform />
            <Steps />
            <Yellowbox />
            <Benefits />
            <Feedback /> */}
            {/* <FullForm /> */}
            <Footer />
        </div>
    )
}

export default App
