import { Schema, model } from 'mongoose';

const roleSchema = new Schema({
    name: {
        type: String,
        enum: ['admin, user']
    }
}, {
    versionkey: false
});

export const Role = model('Role', roleSchema);