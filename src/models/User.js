import { Schema, model } from 'mongoose';

export const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required.']
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, '** Email is invalid **'],
        required: [true, 'Email is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role",
        default: ['user']
    }],
    date: {
        type: Date
    }
});

userSchema.method('toJSON', function () {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

export const User = model('User', userSchema);