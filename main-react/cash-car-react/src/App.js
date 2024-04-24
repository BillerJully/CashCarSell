import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MainPage from './pages/MainPage/mainpage'
import ExtraForm from './pages/ExtraForm/ExtraForm'
import Privacy from './pages/Privacy/Privacy'
import UpdatedHeader from './components/header/UpdatedHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <UpdatedHeader />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/getoffer" element={<ExtraForm />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App
