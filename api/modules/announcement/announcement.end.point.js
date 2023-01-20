import { roles } from '../../middleware/auth.js';

const endPoint = {
  addAnnouncement: [roles.instructor],
  getAnnouncementById: [roles.admin, roles.instructor, roles.student],
  getAllAnnouncements: [roles.admin, roles.instructor, roles.student],
  updateAnnouncementById: [roles.instructor],
  softDeleteAnnouncementById: [roles.admin, roles.instructor],
  deleteAnnouncementById: [roles.admin, roles.instructor],
};

export default endPoint;
