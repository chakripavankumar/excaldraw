import express from "express";
import { SignIn, SignUp } from "../../controllers";

const userRouter: any = express.Router();

userRouter.post("/signup", SignUp);
userRouter.post("/signin", SignIn);

export { userRouter };
