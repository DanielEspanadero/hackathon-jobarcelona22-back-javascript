import jwt, { JwtPayload } from 'jsonwebtoken';

import { User } from '../models/User';

export const generateAccessToken = () => {

    const user = { uid };

    const token = jwt.sign(user, process.env.SECRETORPRIVATEKEY, {
        expiresIn: '4h'
    }, (err, token) => {
        if (err) {
            console.error('Failed to generate JWT');
            return new Error(err);
        } else {
            return token;
        };
    });
};

export const checkJWT = async (token) => {
    try {
        if (token.lengt < 10) {
            return null;
        }

        const uid = jwt.verify(process.env.SECRETORPRIVATEKEY);
        const user = User.findById(uid);

        if (user) {
            if (user.status) {
                return user;
            } else {
                return null;
            }
        } else {
            return null;
        }
    } catch (error) {
        return null;
    };
};