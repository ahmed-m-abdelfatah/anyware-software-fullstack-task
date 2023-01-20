import { roles } from '../../middleware/auth.js';

const endPoint = {
  addAnnouncement: [roles.instructor],
  getAnnouncementById: [roles.admin, roles.instructor, roles.student],
};

export default endPoint;
