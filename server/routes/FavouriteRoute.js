import express from "express";
import  { handleAddToFavourites,getFavourites } from "../controller/favourity.js";
// import authMiddleware from "../middleware/Auth.js";

const favbRoute = express.Router()

favbRoute.post("/add",handleAddToFavourites)
favbRoute.get("/favbItem/:userId",getFavourites)

export default favbRoute