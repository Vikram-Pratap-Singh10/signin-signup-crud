import { User } from "../model/user.model.js"
import bcryptjs from "bcryptjs";
import Jwt  from "jsonwebtoken";

export const SignUp = async (req, res, next) => {
    try {
        const password = await (req.body.password)
        req.body.password = await bcryptjs.hash(password, await bcryptjs.genSalt(10))
        let user = await User.create(req.body);
        return user ? res.status(200).json({ user: user, status: true }) : res.status(500).json({ error: "Internal server error", status: false })
    }
    catch (err) {
        return res.status(500).json({ error: "Internal server error", status: false });
    }
}

export const SingIn = async (req, res, next) => {
    try {
        let user = await User.findOne({email:req.body.email});
        let status = user ? await bcryptjs.compare(req.body.password, user.password) : false
        let token = Jwt.sign({ subject: req.body.email }, "fdlkfjlkfsdfggj");
        return status ? res.status(200).json({ signin: "signIn successful...", user: { ...user.toObject(), password: undefined, token: token } }) : res.status(401).json({ error: "Unauthorized user", status: false })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error", status: false })
    }
}