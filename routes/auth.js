import express, { Router } from "express";
// Controllers
import { register, login } from "../controllers/auth.js"
import { loginSchema, registerSchema, validate } from "../validatations/validatation.js";

const userRouter = express.Router()

// END POINT http://localhost:8000/auth/register
userRouter.post("/register", validate(registerSchema), register);
userRouter.post("/login", validate(loginSchema), login);

export default userRouter;