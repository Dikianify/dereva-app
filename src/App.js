import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import BookingPage from './pages/Booking'
import AboutusPage from './pages/aboutus'
import InfoPage from './pages/info'
import ThanksPage from './pages/thanks'
import CancelledPage from './pages/cancelled'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booknow" element={<BookingPage/>} />
        <Route path="/aboutus" element={<AboutusPage/>} />        
        <Route path="/howitworks" element={<InfoPage/>} />
        <Route path="/thankyou" element={<ThanksPage/>} />
        <Route path="/cancelbooking" element={<CancelledPage/>} />
      </Routes>
    </Router>
  );
}

export default App;