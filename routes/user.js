import express, { Router } from "express";
// Controllers
import { listUser, readUser, createUser, updateRoleUser, deleteUser } from "../controllers/user.js"

const userRouter = express.Router()

// END POINT http://localhost:8000/api/users
userRouter.get("/", listUser);
userRouter.get("/user", readUser);
userRouter.post("/user", createUser);
userRouter.patch("/user/role/:id", updateRoleUser)
userRouter.delete("/user/role/:id", deleteUser)

export default userRouter;