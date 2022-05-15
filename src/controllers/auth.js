import { User } from "../models/User";
import { generateAccessToken } from "../helpers/generate-jwt";

export const signUp = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body;
        const date = new Date();

        const newUser = new UserSchema({
            username,
            email,
            password: await User.encryptPassword(password),
            roles
        });

        const saveUser = await newUser.save();

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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        

    } catch (error) {

    }
}