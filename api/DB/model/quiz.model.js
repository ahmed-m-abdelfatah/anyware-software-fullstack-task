import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
  {
    quizName: { type: String, required: true },
    courseName: { type: mongoose.Schema.Types.courseName, ref: 'Course', required: true },
    quizTopic: { type: String, required: true },
    dueDate: { type: Date, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    deletedAt: Date,
  },
  { timestamps: true },
);

const quizModel = mongoose.model('Quiz', quizSchema);

export default quizModel;
