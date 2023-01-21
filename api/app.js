import './get_env.js';
import express from 'express';
import runningCors from './services/cors.js';
import runningRateLimit from './services/rate_limit.js';
import appRoutes from './app_routes.js';
import connectDB from './DB/connect_db.js';
import swaggerDocs from './swagger/swagger.js';

const port = process.env.PORT;
const app = express();

runningCors(app);
runningRateLimit(app);
appRoutes(app);

// const localDB = process.env.DB_LOCAL_URI;
const globalDB = process.env.DB_GLOBAL_URI;

// connectDB(localDB);
connectDB(globalDB);

const server = app.listen(port, () => {
  console.log('running server at port:', port);

  /**
   * SWAGGER DOCS NOTES
   * 1. don't make 2 end points end with the same name [add product = /add and add comment = /add] because the stupid converter will render the second one it should be [add product = product/add and add comment = comment/add]
   */

  import('./swagger/postman_to_swagger.js');
  swaggerDocs(app, ['./swagger/swagger.yaml']);
});
