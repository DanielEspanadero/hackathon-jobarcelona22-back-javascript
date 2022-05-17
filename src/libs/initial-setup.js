import mongoose from 'mongoose';
import { Role, ROLES } from '../models/Role';
import { User } from '../models/User';
import InitialUsers from '../db/jobx-users.json';

import bcrypt from 'bcryptjs';

export const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) {
            return;
        };

        console.log(`Adding roles to the database.`);

        await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin' }).save()
        ]);

        console.log(`Roles successfully added to the database.`);

    } catch (error) {
        console.error(error);
    }
};

export const createUsers = async () => {
    try {
        const count = await User.estimatedDocumentCount();

        if (count > 0) {
            return;
        };

        console.log(`Adding users to the database...`);

        await User.create(InitialUsers);

        console.log(`Users added to the database successfully.`);

    } catch (error) {

    }
};

export const createAdmin = async () => {
    // check for an existing admin user
    const user = await User.findOne({ email: 'admin@jobx.com' });
    // get roles _id
    const roles = await Role.find({ name: { $in: ['admin'] } });

    if (!user) {
        // create a new admin user
        await User.create({
            username: 'jobx_admin',
            email: 'admin@jobx.com',
            password: await bcrypt.hash('aJOBX90_min25k.', 10),
            roles: roles.map((role) => role._id),
        });
        console.log('Admin User Created!')
    }
}