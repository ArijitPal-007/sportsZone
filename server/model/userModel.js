import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,require:true},
    favourites:{type:Object,default:{}}
},{minimize:false})
const userModel = mongoose.model("user",userSchema)

export default userModel