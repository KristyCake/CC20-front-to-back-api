import express, { Router } from "express";
// Controllers
import { listUser, readUser, createUser, updateRoleUser, deleteUser } from "../controllers/user.js"
//middleware
import { authCheck } from "../middlewares/auth.middleware.js";

const userRouter = express.Router()

// END POINT http://localhost:8000/api/users
userRouter.get("/", listUser, authCheck);
userRouter.get("/user", readUser);
userRouter.post("/user", createUser);
userRouter.patch("/user/role/:id", updateRoleUser)
userRouter.delete("/user/role/:id", deleteUser)

// Export
export default userRouter;