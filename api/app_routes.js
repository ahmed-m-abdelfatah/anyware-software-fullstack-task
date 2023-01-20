import express from 'express';
import * as indexRouter from './modules/index.router.js';

function appRoutes(app) {
  app.use(express.json());
  app.use(process.env.CHANNEL + '/auth', indexRouter.authRouter);
  app.use(process.env.CHANNEL + '/announcement', indexRouter.announcementRouter);
  app.use(process.env.CHANNEL + '/due', indexRouter.dueRouter);
}

export default appRoutes;
