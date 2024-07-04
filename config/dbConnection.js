import mongoose from "mongoose";
import { DB_NAME } from "../constants";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`, 
        
        );
        console.log(`\n MongoDB connected !! DB HOST: ${connect.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;
