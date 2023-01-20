import { roles } from '../../middleware/auth.js';

const endPoint = {
  addAnnouncement: [roles.instructor],
};

export default endPoint;
