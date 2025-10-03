import userModel from '../models/userModel.js'


//add item to user cart
const addToCart =  async (req,res) =>{
    try {
        const dataUser = await  userModel.findById(req.body.userId)
        console.log(req.body.userId);
        let cartData = await dataUser.cartData
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
       
        else{
            cartData[req.body.itemId] +=1
        } 
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true,message:'Ajouté au panier'})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:'Error'});
    }
}

//fetsh user cart data 
 const getCart = async(req,res) =>{
    
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData
        res.json({success:false , cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false , message:'Error'});
    }
 }

 //remove item from cart
 const removeCartItem = async (req,res)=>{
    console.log(req.headers);
        try {
            let userData = await userModel.findById(req.body.userId)
            let cartData = await userData.cartData
            if(cartData[req.body.itemId]>0){
                cartData[req.body.itemId] -= 1 
            }
            await userModel.findByIdAndUpdate(req.body.userId,{cartData})
            res.json({success:true , message:'article retiré du panier'});

        } catch (error) {
            console.log(error);
            res.json({success:false , message:'Error'});
        }
 }


 export {removeCartItem,getCart,addToCart}