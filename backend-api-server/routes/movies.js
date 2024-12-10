const express = require('express');
const router = express.Router();
const connection = require('../database/connection')

router.get('/', (req, res) => {

    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ err: err })
        res.json({
            movies: results,
            count: results.length
        })
    })
})

router.get('/:id', (req, res) => {

    const id = req.params.id
    const sql = `SELECT * FROM movies WHERE id = ? `
    const reviewsSql = `SELECT * FROM reviews WHERE movie_id = ? `

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ err: err })

            const movie = {
                ...results[0],
                reviews: reviewsResults
            }

            res.json(movie)
        })
    })
})

module.exports = router;