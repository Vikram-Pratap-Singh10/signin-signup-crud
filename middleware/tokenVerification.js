import Jwt from "jsonwebtoken";
export const tokenVerification = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token)
         throw new Error();
         Jwt.verify(token,"fdlkfjlkfsdfggj")
            next();
    }
    catch(err){
        return res.status(401).json({error:"Unauthorized user",status:false});
    }
}