import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Home } from './components/pages/homepage/Home';
import { About } from './components/pages/About/About'
import { Menu } from './components/pages/menu/Menu'
import { Login } from './components/pages/login/Login'
import { Order } from './components/pages/orderOnline/Order'
import { BookingPage } from './components/pages/bookingPage/BookingPage';
import { ConfirmedBooking } from './components/ConfirmedBooking/ConfirmedBooking ';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/order-online' element={<Order />} />
        <Route path='/booking'
          element={<BookingPage />} />
        <Route path='/booking-confirmation' element={<ConfirmedBooking />} />
        <Route path='/login' element={<Login />} />
      </Routes>


    </>
  );
}

export default App;
