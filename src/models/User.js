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

UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt)
}

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcryptjs.compare(password, receivedPassword);
};

export const User = model('User', userSchema);