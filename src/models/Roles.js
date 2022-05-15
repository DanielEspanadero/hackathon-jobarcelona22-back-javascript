import { Schema, model } from 'mongoose';

export const roles = ['user', 'admin'];

const RoleSchema = new Schema({
    name: String,
}, {
    versionkey: false
});

export const Role = model('Role', RoleSchema);