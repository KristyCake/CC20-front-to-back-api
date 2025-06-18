// validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("อีเมลล์ไม่ถูกต้อง").required("อีเมลล์ไม่ถูกต้อง"),
  name: string().min(10, "Name ต้องมากกว่า 10 ตัว"),
  password: string().min(6, "password ต้องมากกว่า 6 ตัว"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "รหัสผ่านไม่ตรงกันค้าาา"),
})

export const loginSchema = object({
  email: string().email("อีเมลล์ไม่ถูกต้อง").required("อีเมลล์ไม่ถูกต้อง"),
  password: string().min(6, "password ต้องมากกว่า 6 ตัว")
})


export const validate = (schema) => async (req, res, next) => {
  // code body
  try {
    await schema.validate(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(", ")
    console.log(errTxt)
    const mergeErr = new Error(errTxt);
    next(mergeErr);
  }
}