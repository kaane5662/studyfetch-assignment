import mongoose from "mongoose";

export default async function connectMongo(){
    try{
        await mongoose.connect(process.env.MONGOOSE_API_URL || "")
    }catch(error){
        console.error('❌ Error connecting to MongoDB:', error);
        throw new Error('Could not connect to MongoDB');
    }
}
