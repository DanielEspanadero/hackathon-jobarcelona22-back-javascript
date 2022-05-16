import { Schema, model } from 'mongoose';

export const ROLES = ['user', 'admin'];

const RoleSchema = new Schema({
    name: String,
}, {
    versionkey: false
});

export const Role = model('Role', RoleSchema);