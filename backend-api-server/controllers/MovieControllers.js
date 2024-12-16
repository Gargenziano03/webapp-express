const connection = require('../database/connection')

// Funzione che gestisce la richiesta GET per ottenere una lista di tutti i film
function index(req, res) {
    //query per selezionare tutti i film dalla tabella 'movies'
    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        // risultati della query e il numero di film trovati
        res.json({
            movies: results,
            count: results.length
        })
    })
}
// Funzione che gestisce la richiesta GET per ottenere un singolo film e le sue recensioni
function show(req, res) {

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ? `
    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ? `

    //query per ottenere il film con l'ID specificato
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.length == 0) return res.status(404).json({ err: 'movie not found' })

        //query per ottenere le recensioni del film
        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ err: err })

            //risultati del film con le recensioni
            const movie = {
                ...results[0],
                reviews: reviewsResults
            }

            res.json(movie)
        })
    })
}
// Funzione che gestisce la richiesta POST
function review(req, res) {
    const movie_id = req.params.id
    const { name, text, vote } = req.body

    const sql = "INSERT INTO `reviews` SET name=?, text=?, vote=?, movie_id=?"

    connection.query(sql, [name, text, vote, movie_id], (err, result) => {
        if (err) return res.status(500).json({ error: err })
        return res.status(201).json({ success: true })
    })
}

module.exports = {
    index,
    show,
    review
}