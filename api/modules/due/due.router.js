import express from 'express';
import validation from '../../middleware/validation.js';
import * as validators from './due.validation.schema.js';
import { auth } from '../../middleware/auth.js';
import endPoint from './due.end.point.js';
import * as controller from './due.controller.js';

const router = express.Router();

export default router;
