const mongoose=require("mongoose")

const CardModel=mongoose.model("CardModel", new mongoose.Schema({
    name:String,
    price:Number,
    desc:String,
    img:String
    
}))


module.exports={CardModel}