import React, { useContext, useEffect, useRef } from 'react'
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from "../fooditem/FoodItem"

 const FoodDisplay =({category})=>
{

    const scrollToRef = useRef(null);
    useEffect(() => {
        if (scrollToRef.current) {
          scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [category]);





    const {food_list}=useContext(StoreContext);
    return(
        <div className='food-display' id='food-display'>
            
            <div className="food-display-list">
                {food_list.map((item,index)=>{
                    if (item.category === category || category === 'All') {
                        return (
                        <div key={index} ref={index === 0 ? scrollToRef : null}>
                            <FoodItem id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        </div>
                        );
                    }
                    return null;  
                })}
            </div>
        </div>
    )
}
export default FoodDisplay;