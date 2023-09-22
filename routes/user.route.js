import express from "express";
import { SignUp, SingIn } from "../controller/user.controller.js";

const router = express.Router();

router.post("/",SignUp);
router.post("/signin",SingIn);

export default router;