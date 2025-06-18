import express, { Router } from "express";
// Controllers
import { register, login } from "../controllers/auth.js"

const userRouter = express.Router()

// END POINT http://localhost:8000/auth/register
userRouter.post("/register", register);
userRouter.post("/login", login);

export default userRouter;