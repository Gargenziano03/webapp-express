const express = require('express')
const server = express();
const MoviesRouter = require('./routes/movies')
const cors = require('cors')
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '3000';

const corsOrigin = {
    origin: process.env.ORIGIN_API,
    optionsSuccessStatus: 200
}

server.use('/api/movies', MoviesRouter);

server.listen(PORT, () => {
    console.log(`Server is listenig on port ${HOST}:${PORT}`);

})

server.get('/', (req, res) => {
    res.send(`server is up and running`);
})

