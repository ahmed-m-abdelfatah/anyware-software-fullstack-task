import { roles } from '../../middleware/auth.js';

const endPoint = {
  logout: [roles.admin, roles.instructor, roles.student],
};

export default endPoint;
