import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.json({ msg: "all field required" });
    }
    const exist = await userModel.findOne({ email });
    if (exist) {
      res.json({ msg: "user is already exists" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const user = await userModel.create({ name, email, password:hashPass });
    const token = createToken(user._id);

    res.json({ msg: "register user successfully", user: user, token: token });
  } catch (error) {
    res.json({ msg: "error occur in register" });
    console.log("error in register", error);
  }
};
const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ msg: "all field required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ msg: "user not find" });
    }
    const token = createToken(user._id);
    res.json({ msg: "login successfully", user, token: token });
  } catch (error) {
    res.json({ msg: "error in login", error });
    console.log("error in login", login);
  }
};



const logout = async (req, res) => {
  try {
    res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "None" });
    res.status(200).json({ msg: "Logout successful" });
  } catch (error) {
    console.log("Error in logout:", error);
    res.status(500).json({ msg: "Error in logout", error: error.message });
  }
};


export { register, login, logout };
