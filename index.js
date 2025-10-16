// index.js - simple Hello + optional Mongo read endpoint
const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || '';

const server = http.createServer(async (req, res) => {
  const u = url.parse(req.url, true);
  if (u.pathname === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World from group 5 members\\n');
  } else if (u.pathname === '/data') {
    // simple response showing MONGO_URL env var for verification
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({mongo: MONGO_URL, message: 'data endpoint'}));
  } else {
    res.writeHead(404); res.end('Not found');
  }
});
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
