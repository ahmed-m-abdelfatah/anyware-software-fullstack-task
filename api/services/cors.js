import cors from 'cors';

function runningCors(app) {
  const whitelist = ['http://localhost:3000'];

  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };

  app.use(cors(corsOptions));
}

export default runningCors;
