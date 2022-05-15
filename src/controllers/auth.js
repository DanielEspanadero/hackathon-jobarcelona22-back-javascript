import bcryptjs from "bcryptjs";
import { User } from "../models/User";
import { generateAccessToken } from "../helpers/generate-jwt";

export const signUp = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body;
        const date = new Date();

         // Check if the email exists.
         const existEmail = await User.findOne({email});
         if(existEmail){
             return res.status(400).json({
                 msg: 'That email is already registered.'
             });
         };

        //  Create user.
        const newUser = new UserSchema({
            username,
            email,
            password: await User.encryptPassword(password),
            roles
        });

        // Save to DB.
        const saveUser = await newUser.save();

        // Get Token.
        const token = await generateAccessToken(saveUser.id);


        res.status(200).json({
            newUser,
            token
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    };
};

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists with the email
        const userDB = User.findOne({email});

        if(!userDB){
            return res.status(403).json({
                msg: 'Email doesn`t exists.'
            });
        };

        // Validate password.
        const validPassword = bcryptjs.compareSync(password, userDB.password);

        if(!validPassword){
            return res.status(403).json({
                msg: 'The password you entered is not correct.'
            });
        };

        // Get token.
        const token = await generateAccessToken(userDB.id, userDB.roles);

        res.status(200).json({
            user: userDB,
            token
        });

    } catch (error) {
        res.status(500).json({
            msg: error
        });
    };
};