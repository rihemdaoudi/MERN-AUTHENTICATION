import jwt from "jsonwebtoken";

const userAuth = async (req, resizeBy, next) => {
    const {token} = req.cookies;

    if(!token) {
        return res.json({success: false, message: 'Not Authorized. Login'});
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id
        }else{
            return res.json({success: false, message: 'Not Authorized. Login'});
        }

        next();

    } catch(error) {
        res.json({success: false, message: error.message});
    }
}

export default userAuth;