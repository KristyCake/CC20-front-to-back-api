import { createError } from "../utils/create.error.js";


export const listUser = (req, res, next) => {
  // 1. check email
  try {
    if (true) {
      createError(400, "Email already exist!")
    } else {
      throw new Error("Password is Invalid!")
    }
    res.json({ message: "This is list All User" });
  } catch (error) {
    next(error)
  }
};

export const readUser = (req, res) => {
  //code body
  res.json({ message: "This is Read User" })
};

export const createUser = (req, res) => {
  //code body
  res.json({ message: "This is CREATE User" })
};

export const updateRoleUser = (req, res) => {
  //code body
  res.json({ message: "This is Update Role User" })
};

export const deleteUser = (req, res) => {
  //code body
  res.json({ message: "This is Delete User" })
};