import jwt from 'jsonwebtoken';

import { User } from '../models/User';
import { Role } from '../models/Roles';

export const validateToken = async (req, res, next) => {
    try {
        const token = req.header('authorization');

        if (!token) {
            res.status(403).json({
                ok: false,
                msg: 'No token provided.'
            });
        };

        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.userId = payload.id;

        const user = await User.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ msg: 'No user found' });

        next();

    } catch (error) {
        console.log(error)
        return res.status(403).json({
            ok: false,
            msg: 'Unauthorize - Invalid token.'
        });
    };
};

export const isAdmin = async (req, res, next) => {

    try {
        const user = await User.findById(req.userId);
        const roles = await Role.find({ _id: { $in: user.roles } });

        for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === 'admin') {
                next();
                return;
            }
        }

        return res.status(403).json({ 
            message: 'Require Admin Role!' 
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error 
        });
    }
};