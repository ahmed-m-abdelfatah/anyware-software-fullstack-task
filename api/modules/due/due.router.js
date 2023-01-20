import express from 'express';
import validation from '../../middleware/validation.js';
import * as validators from './due.validation.schema.js';
import { auth } from '../../middleware/auth.js';
import endPoint from './due.end.point.js';
import * as controller from './due.controller.js';

const router = express.Router();
// add Due
router.post('/add', validation(validators.addDue), auth(endPoint.addDue), controller.addDue);

// get Due
router.get('/:id', validation(validators.getDueById), auth(endPoint.getDueById), controller.getDueById);

// get all Dues
router.get('/', auth(endPoint.getAllDues), controller.getAllDues);

// update Due
router.patch(
  '/:id/update',
  validation(validators.updateDueById),
  auth(endPoint.updateDueById),
  controller.updateDueById,
);

// soft delete Due
router.patch(
  '/:id/soft-delete',
  validation(validators.softDeleteDueById),
  auth(endPoint.softDeleteDueById),
  controller.softDeleteDueById,
);

// delete Due
router.delete(
  '/:id/delete',
  validation(validators.deleteDueById),
  auth(endPoint.deleteDueById),
  controller.deleteDueById,
);

export default router;
