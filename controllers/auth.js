import prisma from "../config/prisma.js";
import { createError } from "../utils/create.error.js";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
  try {
    //code body
    //TODO Overview Register
    /*
  0. Validate with Yup
  1. check body
  2. check Email in DB
  3. Bcrypt Password -> bcryptjs
  4. Save to DB -> Prisma
  5. Response
    */
    // step 1 Check body
    console.log(req.body)
    const { email, name, password } = req.body;

    // step 2 check email in DB
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      }
    })
    console.log(user)
    if (user) {
      createError(400, "Email already exist!")
    }

    // step 3 Encrypt Password
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword)

    // step 4 Save to DB
    const result = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashPassword
      }
    });
    // console.log(result)

    res.json({ message: `Register ${result.name} Success` });
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    //TODO
    /*
    1. Validate body (in postman)
    2. Check body
    3. Check email in DB
    4. Check pwd
    5. Create Token
    6. Response
    */

    // Step 2 Check body
    const { email, password } = req.body;

    // Step 3 Check Email
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user)
    if (!user) {
      createError(400, "Email or Password is invalid!")
    }
    // Step 4 Check password
    const checkPassword = bcrypt.compareSync(password, user.password)
    if (!checkPassword) {
      createError(400, "Email or Password is Invalid!")
    }
    // Step 5 Generate Token
    const payload = {
      id: user.id,
      role: user.role,
    }
    const token = jwt.sign(
      payload,
      process.env.SECRET,
      { expiresIn: "1d" })

    res.json({
      message: `Welcome back ${user.name}`,
      payload: payload,
      token: token,
    });
  } catch (error) {
    next(error)
  }
}