import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema(
  {
    assignmentName: { type: String, required: true },
    courseName: { type: mongoose.Schema.Types.courseName, ref: 'Course', required: true },
    assignmentTopic: { type: String, required: true },
    dueDate: { type: Date, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    deletedAt: Date,
  },
  { timestamps: true },
);

const assignmentModel = mongoose.model('Assignment', assignmentSchema);

export default assignmentModel;
