import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./db/connectDb.js";
import userRoutes from "./routes/userRoute.js";
import uploadRoute from "./routes/upload.js";
import { fileURLToPath } from 'url';
import path from 'path';
import favbRoute from "./routes/FavouriteRoute.js";




const port = process.env.PORT || 5000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDb();
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello World...");
});

app.use("/api/user",userRoutes)
app.use("/api/details",uploadRoute)
app.use("/images",express.static("uploads"))
app.use("/api/favb",favbRoute)

app.listen(port, () => {
    console.log(`Server is running at port number ${port}`);
});
