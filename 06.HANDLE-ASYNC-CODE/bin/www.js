const serverHandler = require('../app');

const http = require('http');

const PORT = 5000;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
})