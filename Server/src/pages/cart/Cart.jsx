import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className='cart-items'>
                <div className='cart-items-title'>
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>

                </div>
                <br />
                <hr />
                
                {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                        return (
                                <div>
                                    <div className='cart-items-title2 cart-items-item'>
                                        <img src={item.image} alt=""  />
                                        <p>{item.name}</p>
                                        <p>{item.price}DH</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>{item.price * cartItems[item._id]}DH</p>
                                        <p onClick={()=>removeFromCart(item._id) }className='cross' >x</p>

                                    </div>
                                    <hr/>
                                </div>
                                
                        );
                    }
                    return null; // Return null if the item quantity is 0
                })}
                
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()}DH</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>{getTotalCartAmount()===0?0:15}DH</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+15}DH</p>
                    </div>
                    <Link to='../Placeorder'>
                    <button>PROCEED TO CHECKOUT</button>
                    </Link>
                </div>
                

            </div>
        </div>
    );
};

export default Cart;
