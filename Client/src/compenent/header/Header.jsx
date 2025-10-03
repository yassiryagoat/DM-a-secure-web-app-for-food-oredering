import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import FoodDisplay from "../fooddisplay/FoodDisplay";


const Header = () => {
    return (
        <div className='header'>
            <div className='header-contenents'>
                <h2>
                    Order your favorite food here
                </h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. One delicious meal at a time.</p>
                <a href="#food-display">
                    <button>View Menu</button>
                </a>
                </div>
                <img src={assets.oip} alt='' />
            </div>
    );
};

export default Header;
