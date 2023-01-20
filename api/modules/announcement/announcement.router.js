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
router.post('/:id', controller.getAnnouncementById);

// get announcements
// update announcement
// delete announcement
// soft delete announcement

export default router;
