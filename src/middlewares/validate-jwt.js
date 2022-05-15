import { verify } from 'jsonwebtoken';

import { User } from '../models/User';
import { Role } from '../models/Roles';

export const validateToken = (req, res, next) => {
    try {
        const token = res.header('authorization');

        if (!token) {
            res.status(403).json({
                ok: false,
                msg: 'No token provided.'
            });
        };

        const payload = verify(token, process.env.SECRETORPRIVATEKEY);

        req.uid = payload.uid;

        next();

    } catch (error) {
        return res.status(403).json({
            ok: false,
            msg: 'Invalid token.'
        });
    };
};

export const isAdmin = async (req, res, next) => {

    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });

    for (let i = 0; i <= roles.length; i++) {
        if(roles[i].name === 'admin'){
            return next;
        };

        res.status(403).json({
            msg: 'Require admin role.'
        });
    };
};