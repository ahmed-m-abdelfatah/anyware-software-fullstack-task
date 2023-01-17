const cors = require('cors');

function runningCors(app) {
  app.use(cors());
}

export default runningCors;
