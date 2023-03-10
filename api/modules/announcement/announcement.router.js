import express from 'express';
import validation from '../../middleware/validation.js';
import * as validators from './announcement.validation.schema.js';
import { auth } from '../../middleware/auth.js';
import endPoint from './announcement.end.point.js';
import * as controller from './announcement.controller.js';

const router = express.Router();

// add announcement
router.post('/add', validation(validators.addAnnouncement), auth(endPoint.addAnnouncement), controller.addAnnouncement);

// get announcement
router.get(
  '/:id',
  validation(validators.getAnnouncementById),
  auth(endPoint.getAnnouncementById),
  controller.getAnnouncementById,
);

// get all announcements
router.get('/', auth(endPoint.getAllAnnouncements), controller.getAllAnnouncements);

// update announcement
router.patch(
  '/:id/update',
  validation(validators.updateAnnouncementById),
  auth(endPoint.updateAnnouncementById),
  controller.updateAnnouncementById,
);

// soft delete announcement
router.patch(
  '/:id/soft-delete',
  validation(validators.softDeleteAnnouncementById),
  auth(endPoint.softDeleteAnnouncementById),
  controller.softDeleteAnnouncementById,
);

// delete announcement
router.delete(
  '/:id/delete',
  validation(validators.deleteAnnouncementById),
  auth(endPoint.deleteAnnouncementById),
  controller.deleteAnnouncementById,
);

export default router;
