const express = require('express');
const nextJs = require('next')
const routes = require('./src/routes')

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const server = express();
const app = nextJs({ dev, dir: './src' });
const appHandler = routes.getRequestHandler(app);


app.prepare().then(() => {

  // Web app routes
  server.get('*', appHandler);
  // Listen on port
  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.info(`> Ready http://localhost:${port} <`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});