const mongoose =require('mongoose')


const productInfo=new mongoose.Schema({
    vrno:{type:Number,required:true},
    vrdate:{type:String,required:true},
    acname:{type:String,required:true},
    acamt:{type:Number,required:true}, 
        srno:{type:Number,required:true},
        itemcode:{type:String,required:true},
        itemname:{type:String,required:true},
        qty:{type:Number,required:true},
        rate:{type:Number,required:true},
        amt:{type:Number,required:true},
},{timestamps:true})

module.exports=mongoose.model("TesingData",productInfo)