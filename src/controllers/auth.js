import { User } from "../models/User";

export const signUp = (req, res)=>{
    try {
        const {username, email, password, role} = req.body;
        const date = new Date();

        
        res.status(200).json({
            msg:'Hola'
        })
    } catch (error) {
        res.status(500).json({
            msg:error
        });
    };
};