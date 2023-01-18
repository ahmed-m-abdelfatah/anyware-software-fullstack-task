import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema(
  {
    announcementTopic: { type: String, required: true },
    announcementDescription: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isDeleted: { type: Boolean, default: false },
    deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    deletedAt: Date,
  },
  { timestamps: true },
);

const announcementModel = mongoose.model('Announcement', announcementSchema);

export default announcementModel;
