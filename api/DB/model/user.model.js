import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    isLoggedIn: { type: Boolean, default: false },
    role: { type: String, enum: ['instructor', 'admin'], default: 'instructor' },
    LoggedInAt: Date,
    LoggedOutAt: Date,
  },
  { timestamps: true },
);

const userModel = mongoose.model('User', userSchema);

export default userModel;
