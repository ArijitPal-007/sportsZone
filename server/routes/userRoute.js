import express from "express"
import { login, logout, register } from "../controller/user.controller.js"

const userRoutes = express.Router()

userRoutes.post("/register",register)
userRoutes.post("/login",login)
userRoutes.post("/logout",logout)

export default userRoutes;