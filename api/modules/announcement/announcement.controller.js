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
