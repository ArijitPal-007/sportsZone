import mongoose from "mongoose";

const connectDb = async (req,res)=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/sports`)
        console.log("mongoose connest successfully");
    } catch (error) {
        console.log("error in mongoose",error);
    }
}
export default connectDb;