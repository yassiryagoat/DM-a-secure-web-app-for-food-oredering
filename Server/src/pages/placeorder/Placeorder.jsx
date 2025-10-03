import React, { useContext, useState } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../context/StoreContext';
import PaypalCheckoutButton2 from '../../compenent/PaypalCheckoutButton2'; //*5/7

const Placeorder = () => {
    const { getTotalCartAmount } = useContext(StoreContext);
    const [formData, setFormData] = useState({
        
        street: '',
        city: '',
        state: '',
        phone: ''
    });

    const product = {
        description: "Design+code React Hooks Course",
        price: 19
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isFormComplete = () => {
        for (const key in formData) {
            if (formData[key].trim() === '') {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <form className='place-order' onSubmit={handleSubmit}>
            <div className="place-order-left">
                <p className="title">Delivery information</p>
                <input type="text" placeholder='Street' name="street" value={formData.street} onChange={handleInputChange} required />
                <div className="multi-fields">
                    <input type="text" placeholder='City' name="city" value={formData.city} onChange={handleInputChange} required />
                    <input type="text" placeholder='State' name="state" value={formData.state} onChange={handleInputChange} required />
                </div>
                
                <input type="text" placeholder='Phone' name="phone" value={formData.phone} onChange={handleInputChange} required />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>{getTotalCartAmount()}DH</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>{getTotalCartAmount() === 0 ? 0 : 15}DH</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 15}DH</p>
                    </div>
                    {isFormComplete() && (
                        <div className="paypal-button-container">{/**/}
                            <PaypalCheckoutButton2 product={product} />{/**/}
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
};

export default Placeorder;
