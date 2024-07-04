import express from "express";
import connectDB from "./config/dbConnection.js";
import errorHandler from "./middlewares/errorHandler.js";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
