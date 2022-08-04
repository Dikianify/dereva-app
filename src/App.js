import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages'
import BookingPage from './pages/Booking'
import AboutusPage from './pages/aboutus'
import InfoPage from './pages/info'
import ThanksPage from './pages/thanks'
import SignInPage from './pages/signin'
import SignUpPage from './pages/signup'
import CancelledPage from './pages/cancelled'
import AccountPage from './pages/account'
import useToken from './components/useToken'

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home token={token}/>} />
        <Route path="/booknow" element={<BookingPage/>} />
        <Route path="/aboutus" element={<AboutusPage/>} />        
        <Route path="/howitworks" element={<InfoPage/>} />
        <Route path="/thankyou" element={<ThanksPage/>} />
        <Route path="/signin" element={<SignInPage setToken={setToken}/>} />
        <Route path="/signup" element={<SignUpPage setToken={setToken}/>} />
        <Route path="/cancelbooking" element={<CancelledPage/>} />
        <Route path="/Account" element={<AccountPage token={token} setToken={setToken} removeToken={removeToken}/>} />
      </Routes>
    </Router>
  );
}

export default App;