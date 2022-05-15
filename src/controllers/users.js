import { User } from "../models/User";

export const users = async (req, res) => {
    try {

        const users = await User.find({});

        const response = users.map(user => {
            const obj = {
                _id: user._id,
                user: user.username,
                email: user.email,
                role: user.roles
            };
            return obj;
        });

        res.status(200).json({
            users: response
        })
    } catch (error) {
        res.status(500).json({
            msg: error
        });
    };
};