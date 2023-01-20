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
  } catch (error) {
    internalServerError(res, error);
  }
};
