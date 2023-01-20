import { roles } from '../../middleware/auth.js';

const endPoint = {
  addDue: [roles.instructor],
  getDueById: [roles.admin, roles.instructor, roles.student],
  getAllDues: [roles.admin, roles.instructor, roles.student],
  updateDueById: [roles.instructor],
  softDeleteDueById: [roles.admin, roles.instructor],
  deleteDueById: [roles.admin, roles.instructor],
};

export default endPoint;
