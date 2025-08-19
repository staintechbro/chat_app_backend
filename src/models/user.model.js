import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minimum: 6,
        },
        profilePic: {
            type: String,
            default: '',
        },
    },
    {timestamps: true}
);
const User = mongoose.model('User', userSchema);  //mongoose will always want you to make the first later uppercase(User)

export default User;