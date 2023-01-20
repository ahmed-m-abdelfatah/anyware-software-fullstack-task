import swaggerJsDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';

const usedData = {
  author: 'Ahmed Abdelfatah',
  globalDomain: 'https://anyware-coligo-backend.onrender.com',
  localDomain: `http://localhost:${process.env.PORT}`,
  name: 'api',
  channel: process.env.CHANNEL,
  version: '1.0.0',
};

function swaggerDocs(app, apis) {
  const swaggerSpecOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: usedData.author,
        version: usedData.version,
      },
      servers: [
        {
          // local server
          url: `${usedData.localDomain}${usedData.channel}`,
        },
        {
          // global server
          url: `${usedData.globalDomain}${usedData.channel}`,
        },
      ],
    },
    apis,
  };

  const swaggerSpec = swaggerJsDoc(swaggerSpecOptions);

  // App
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to the API',
      docs: `${req.protocol}://${req.headers.host}/docs`,
      docs_json: `${req.protocol}://${req.headers.host}/docs.json`,
    });
  });

  // Swagger UI options
  const swaggerUIOptions = {
    customCss: '.swagger-ui .topbar, .title span { display: none }',
    customSiteTitle: 'olx api docs',
  };

  // Swagger page
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec, swaggerUIOptions));

  // Docs in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

export default swaggerDocs;
