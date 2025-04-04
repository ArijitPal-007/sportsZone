import express from "express"
import { getData, uploadHandler } from "../controller/upload.controller.js"
import multer from "multer"

const uploadRoute = express.Router()

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage:storage})

//add food
uploadRoute.post("/upload",upload.single("image"),uploadHandler)
uploadRoute.get("/getData",getData)




export default uploadRoute