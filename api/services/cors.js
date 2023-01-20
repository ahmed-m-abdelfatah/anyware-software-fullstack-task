import cors from 'cors';

function runningCors(app) {
  app.use(cors());
}

export default runningCors;
