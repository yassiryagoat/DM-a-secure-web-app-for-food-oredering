import React, { useContext, useState,useEffect} from 'react'
import './Myorders.css'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext.jsx'
import {assets} from '../../assets/assets.js'

 const MyOrders = () => {
    const [data,setData] = useState([])
    const [status,setStatus] = useState('')
    const {url,token} = useContext(StoreContext)


    const fetshOrders = async () =>{
          const response = await axios.post(url+'/api/order/userorders',{},{headers:{token}})
          setData(response.data.data)
          setStatus(response.data.status)
    }
   

    useEffect(()=>{
        if (token) {
            fetshOrders()
        }
        console.log(data);
    },[token])
  return (
    <div className='my_orders'>
        <h2>Mes Orders</h2>
        <div className="container">
            {
                data.map((order,index)=>{
                    return(
                        <div key={index} className='my_orders_order'  >
                            <img src={assets.parcel_icon} alt=" " />
                            <p>{order.items.map((item,index) =>{
                                if (index == order.items.length-1) {
                                    return item.name+ ' x '+item.quantity
                                }
                                else{
                                    return item.name + ' x '+item.quantity +' , '
                                }
                            })}</p>
                            <p>{order.amount}.00 dh</p>
                            <p>Produits :{order.items.length}</p>
                            <p><span>&#x25cf;</span><b>{status? status:order.status}</b></p>
                            <button  onClick={()=>fetshOrders()}>Suivi de commande </button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}


export  default MyOrders
