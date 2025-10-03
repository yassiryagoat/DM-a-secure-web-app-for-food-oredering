import orderModel from "../models/cartModel.js";
import userModel from '../models/userModel.js'
import paypal  from 'paypal-rest-sdk'


paypal.configure({
    mode:'sandbox',
    client_id:      'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    client_secret : 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY'
});

// placing user order for front end
const placeOrder = async (req,res) =>{
    try{ 
        
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
        })
        
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
    
        
        const paymentData = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: 'http://localhost:5173/verify?success=true&orderId='+newOrder._id,
        cancel_url: 'http://localhost:5173/verify?success=false&orderId='+newOrder._id
      },
      transactions: [{
        amount: {
          total: req.body.amount ,
          currency: 'USD'
        },
        
        description: 'DESCRIPTION_DU_PAIEMENT'
      }]
    };
  
    paypal.payment.create(paymentData, (error, payment) => {
      if (error) {
        console.error(error);
        res.json({ success: false, message: 'Erreur lors de la création du paiement' });
      } else {
        console.log('success');
        const approvalLink = payment.links.find(link => link.rel === 'approval_url');
            if(approvalLink){
                
                        res.json({ success: true, redirect_url: approvalLink.href });
                        console.log('success'+approvalLink.href);
            }
        
        }
    });
  }
  catch(err){

      console.log(err);
      res.json({ success: false, message: 'Erreur ' });

  }
  };
  
  
// verification de payement

const verifyOrder = async (req,res) =>{
    const {orderId,success} = req.body
    try {
        if (success=='true') {
             await orderModel.findByIdAndUpdate(orderId,{payment:true})
            res.json({success:true,message :'payer'})
        }
        else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false,message :'Non Payer'})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message :'Error'})
    }
    
}

// user orders for frentend

const userOrders = async (req,res)=>{
  try {
     const orders = await orderModel.find({userId:req.body.userId})
     res.json({success:true,data :orders})

  } catch (error) {
    console.log(error);
    res.json({success:false,message :'Error'})

  }
}


//listing order fro admin

const listOredrs = async (req,res) =>{
  try {
    const listOrder = await orderModel.find({})
    res.json({success:true,data :listOrder})

  } catch (error) {
    console.log(error);
    res.json({success:false,message :'Error'})

    
  }
}

// api for update order state

const updateStatus = async (req,res) =>{
      try {
        const resp = await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status })
         
          res.json({success:true,resp,message :'Status Updated'})

      } catch (error) {
          console.log(error);
          res.json({success:false,message :'Error'})
      }
}


export {placeOrder,verifyOrder,userOrders,listOredrs,updateStatus}