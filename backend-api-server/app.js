const express = require('express');
const server = express();
const MoviesRouter = require('./routes/movies');
const NotFound = require('./middlewares/NotFound')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')
const cors = require('cors')
const corsOrigin = {
    origin: process.env.WEB_APP_ORIGIN_API,
    optionsSuccessStatus: 200
}
server.use(cors(corsOrigin));


const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3000';

server.get('/', (req, res) => {
    res.send(`Server is up and running!`);
})

server.use('/api/movies', MoviesRouter);

server.use(NotFound)

server.use(ServerErrorsHandler)

server.listen(PORT, () => {
    console.log(`Server is listenig on port ${HOST}:${PORT}`);
})



