import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./pages/register/Signup.jsx"
import Login from "./pages/login/Login.jsx"
import Home from "./pages/home/Home.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './compenent/navbar/Navbar.jsx'
import Placeorder from './pages/placeorder/Placeorder'
import Cart from './pages/cart/Cart.jsx'
import Footer from './compenent/footer/Footer.jsx'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import MyOrders from './pages/orders/Myorders.jsx'
const paypalClientId = import.meta.env.REACT_APP_PAYPAL_CLIENT;

function App() {
  const initialOptions = {
    clientId: "ATtMww_JrVzMRDgf8pBGXHZ0lObewJ3RftVQtZE5O1mEuCMmO6fgKfbnHNq53Kd8zqVyy2uv_-6dsuq8",
    currency: "USD",
    intent: "capture",
};


  return (
    <>
    <div >
      <BrowserRouter>
       <Navbar/>
       <PayPalScriptProvider options={initialOptions}>
            <Routes>
            <Route path="/myorders" element={<MyOrders /> } />

              <Route path="/placeorder" element={<Placeorder /> } />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
       </PayPalScriptProvider>
      </BrowserRouter>
    </div>
    <Footer/>
    </>
  )
}

export default App
