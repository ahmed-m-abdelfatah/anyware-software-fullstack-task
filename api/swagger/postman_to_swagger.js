import * as path from 'path';
import * as postmanToOpenApi from 'postman-to-openapi';
const postmanCollection = path.join(__dirname, '../*.postman_collection.json');
const outputFile = path.join(__dirname, './swagger.yaml');

(async function () {
  try {
    await postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' });
    console.log('~ done converting postman to yaml');
  } catch (err) {
    console.log('~ convert postman to yaml err', err);
  }
})();
