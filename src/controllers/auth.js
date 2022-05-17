import { User } from '../models/User';
import { Role } from '../models/Role';
import jwt from 'jsonwebtoken';

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
        const newUser = await new User({
            username,
            email,
            password: await User.encryptPassword(password),
            roles,
            date
        });

        // checking for roles
        if (req.body.roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map((role) => role._id);
        } else {
            const role = await Role.findOne({ name: 'user' });
            newUser.roles = [role._id];
        }

        // Save to DB.
        const savedUser = await newUser.save();

        // Get token.
        const token = jwt.sign({ id: savedUser._id }, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' });


        res.status(200).json({
            newUser,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        });
    };
};

export const logIn = async (req, res) => {
    try {

        // Check if the user exists with the email
        const userDB = await User.findOne({email: req.body.email}).populate('roles');

        if(!userDB){
            return res.status(403).json({
                msg: 'Email doesn`t exists.'
            });
        };

        // Validate password.
        const validPassword = await User.comparePassword(req.body.password, userDB.password);

        if(!validPassword){
            return res.status(403).json({
                token: null,
                msg: 'The password you entered is not correct.'
            });
        };

        // Get token.
        const token = jwt.sign({ id: userDB._id }, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' });

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