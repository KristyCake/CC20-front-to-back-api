import express from "express";
import cors from "cors";
import morgan from "morgan";
// Routing
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js"

const app = express()

//Basic middlewares
app.use(cors()); // Allow cross Domains
app.use(morgan('dev')); // Show logs
app.use(express.json()); // Read body 

// //Routing -> GET, POST, PUT, PATCH, DELETE
// // http://localhost:8000
// app.get("/user", (req, res) => {
//   // code body
//   res.json({ message: "Hello CC20" })
// })

app.use('/api', userRouter)
app.use('/auth', authRouter)

const PORT = 8000;
// Start server
app.listen(8000, () => console.log(`Server is running on port ${PORT}`))