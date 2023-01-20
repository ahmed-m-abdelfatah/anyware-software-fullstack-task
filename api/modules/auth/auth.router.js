import express from 'express';
import validation from '../../middleware/validation.js';
import * as validators from './auth.validation.schema.js';
import { auth } from '../../middleware/auth.js';
import endPoint from './auth.end.point.js';
import * as controller from './auth.controller.js';

const router = express.Router();

// signup
router.post('/signup', validation(validators.signup), controller.signup);

// login
router.post('/login', validation(validators.login), controller.login);

// logout
router.post('/logout', auth(endPoint.logout), controller.logout);

export default router;
