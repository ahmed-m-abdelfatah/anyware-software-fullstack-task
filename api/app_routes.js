import express from 'express';
import * as indexRouter from './modules/index.router.js';

function appRoutes(app) {
  app.use(express.json());
  app.use(process.env.CHANNEL + '/auth', indexRouter.authRouter);
  // app.use(process.env.CHANNEL + '/admin', indexRouter.administrationRouter);
  // app.use(process.env.CHANNEL + '/user', indexRouter.userRouter);
  // app.use(process.env.CHANNEL + '/announcement', indexRouter.announcementRouter);
  // app.use(process.env.CHANNEL + '/course', indexRouter.courseRouter);
  // app.use(process.env.CHANNEL + '/assignment', indexRouter.assignmentRouter);
  // app.use(process.env.CHANNEL + '/quiz', indexRouter.quizRouter);
}

export default appRoutes;
