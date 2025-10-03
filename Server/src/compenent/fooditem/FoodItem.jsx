import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate }from "react-router-dom"


const FoodItem=({id,name,price,description,image})=>{
    const navigate = useNavigate()

    //const [itemCount,setItemCount]=useState(0);
    const { cartItems, addToCart, removeFromCart, isAuthenticated } = useContext(StoreContext);
    const handleAddToCart = () => {
        if (isAuthenticated) {
            addToCart(id);
        } else {
            // Redirect to the login page if the user is not authenticated
            console.log('User is not authenticated. Redirecting to login page...');
            navigate('/login')
        }
    };


    
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt="" className="food-item-image" />
                {!cartItems[id]
                    ? <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt="Add to Cart" />
                    :<div className='food-item-counter'>
                        <img  onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""  />
                    </div>                   
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">{price}</p>
            
            </div>
        </div>
    )
}
export default FoodItem;

