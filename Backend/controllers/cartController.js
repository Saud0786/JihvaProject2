import userModel from '../models/userModel.js';


// add items user cart
const addToCart = async (req, res) => {
    try{
     let userData = await userModel.findById(req.body.userId);
     let cartData =await userData.cartData;
     if(!cartData[req.body.itemId]){
      cartData[req.body.itemId]=1;
     }else{
      cartData[req.body.itemId]+=1;
     }
     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
     res.json({success:true,message:"Added To Cart"})
    }catch(err){
      console.log(err);
      res.json({success:false,message:"Error"})
      
    }
}

// remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    const userData = await userModel.findById(userId);
    const cartData = userData.cartData;

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Removed from cart" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "error" });
  }
};


// get user cart data
const getCart= async(req,res)=>{
     try{
       let userData =await userModel.findById(req.body.userId);
       let cartData = await userData.cartData;
       res.json({ success: true,cartData});
     }catch(err){
      console.log(err);
      res.json({ success: false, message: "error" });
     }
}

export {addToCart,removeFromCart,getCart};