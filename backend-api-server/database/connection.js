const mysql = require('mysql2')

// Crea una connessione al database utilizzando i parametri dalle variabili d'ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})
// Effettua la connessione al database
connection.connect((err) => {
    //errore 
    if (err) {
        console.log('error connecting to db', err);
        //successo
    } else {
        console.log('db is connected');

    }
})

module.exports = connection