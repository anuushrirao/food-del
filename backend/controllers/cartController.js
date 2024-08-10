import userModel from "../models/userModel.js"

//add items to user cart
const addToCart = async (req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userModel.cartData;
        
    }catch(error){

    }

}

//remove items from user
const removeFromCart = async(req,res) =>{

}

//fetch user data
const getCart = async(req,res) =>{

}

export {addToCart,removeFromCart,getCart}
