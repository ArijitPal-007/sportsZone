import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
})
const uploadModel = mongoose.model("upload",uploadSchema)

export default uploadModel