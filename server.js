/* eslint-disable no-console */
// server.js
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('sample-data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // Rewrite routes to appear after /api
server.listen(9000, () => {
  console.log('JSON Server is running');
});
