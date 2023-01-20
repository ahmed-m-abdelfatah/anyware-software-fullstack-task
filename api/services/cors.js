import cors from 'cors';

function runningCors(app) {
  const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200, // For legacy browser support
  };

  app.use(cors(corsOptions));
}

export default runningCors;
