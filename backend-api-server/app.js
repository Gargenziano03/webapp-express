const express = require('express');
const server = express();
const MoviesRouter = require('./routes/movies');
const NotFound = require('./middlewares/NotFound')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')
const cors = require('cors')

// Configura le opzioni CORS
const corsOptions = {
    origin: process.env.WEB_APP_ORIGIN_API,
    optionsSuccessStatus: 200
}

server.use(express.json())
// Abilita CORS
server.use(cors(corsOptions));


const HOST = process.env.HOST
const PORT = process.env.PORT

// Definisce una rotta GET
server.get('/', (req, res) => {
    res.send(`Server is up and running!`);
})

// Aggiunge il router delle rotte dei film all'endpoint '/api/movies'
server.use('/api/movies', MoviesRouter);

// gestire le rotte non trovate (404)
server.use(NotFound)

// gestire gli errori generali del server (500)
server.use(ServerErrorsHandler)

// Avvia il server
server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})