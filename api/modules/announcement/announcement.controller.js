import announcementModel from '../../DB/model/announcement.model.js';
import internalServerError from '../../utils/internal_server_error.js';

export const addAnnouncement = async (req, res) => {
  try {
    const { topic, desc } = req.body;

    const announcement = await announcementModel.create({
      announcementTopic: topic,
      announcementDescription: desc,
      instructor: req.user._id,
    });

    res.status(201).json({ message: 'Done', announcement }); // 201 Created
  } catch (error) {
    internalServerError(res, error);
  }
};

export const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await announcementModel.findById(req.params.id);

    if (!announcement) {
      return res.status(404).json({ message: 'announcement not found' }); // 404 Not Found
    }

    res.status(200).json({ message: 'Done', announcement }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await announcementModel.find({ isDeleted: false }).populate({
      path: 'instructor',
      select: 'name -_id',
    });

    if (!announcements || announcements.length === 0) {
      return res.status(200).json({ message: ['There is no announcements right now'] }); // 200 OK
    }

    res.status(200).json({ message: announcements }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const updateAnnouncementById = async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, desc } = req.body;
    const announcement = await announcementModel.findById(id);

    if (!announcement || announcement.instructor != req.user.id || announcement.isDeleted === true) {
      return res.status(404).json({ message: 'Announcement not found' }); // 404 Not Found
    }

    const updated = await announcementModel.findByIdAndUpdate(
      id,
      {
        announcementTopic: topic,
        announcementDescription: desc,
        $inc: { __v: 1 },
      },
      { new: true },
    );

    res.status(200).json({ message: 'Done updating your announcement', updated }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const softDeleteAnnouncementById = async (req, res) => {
  try {
    const { id } = req.params;
    const announcement = await announcementModel.findById(id);

    if (!announcement || announcement.instructor != req.user.id || announcement.isDeleted === true) {
      return res.status(404).json({ message: 'Announcement not found' }); // 404 Not Found
    }

    await announcementModel.findByIdAndUpdate(
      id,
      {
        deletedBy: req.user._id,
        isDeleted: true,
      },
      { new: true },
    );

    res.status(200).json({ message: 'your announcement moved to trash' }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};

export const deleteAnnouncementById = async (req, res) => {
  try {
    await announcementModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'announcement has been deleted' }); // 200 OK
  } catch (error) {
    internalServerError(res, error);
  }
};
