import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";
import './Navbar.css';
import { StoreContext } from "../../context/StoreContext";
import FoodDisplay from "../fooddisplay/FoodDisplay";
import { useNavigate } from "react-router-dom"

function Navbar() {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount, isAuthenticated } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (isAuthenticated) {
      navigate('/cart');
    } else {
      // Redirect to the login page if the user is not authenticated
      console.log('User is not authenticated. Redirecting to login page...');
      navigate('/login');
    }
  };

  return (
    <div className="navbar">
      <Link to='/home'> 
        <img className='DMlogo' src={assets.DM_LOGO} alt="DmHomepage" />
      </Link>
      <ul className="navbar-menu">
        <Link onClick={() => setMenu("home")} className={menu === 'home' ? "active" : ""} to="/home">Home</Link>
        <a href="#food-display" onClick={() => { setMenu('menu'); }} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#footer" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.searsh_icon} alt="" width='25px' />
        <div className="navbar-search-icon">
          {isAuthenticated && (
            <Link onClick={handleAddToCart} className={menu === 'cart' ? "active" : ""} to="/cart">
              <img src={assets.cart_icon} alt="" height='30px' width='35px' />
            </Link>
          )}
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!isAuthenticated &&
          <Link to="/login"><button>Log in</button></Link>
        }  
          </div>
    </div>
  );
}

export default Navbar;
