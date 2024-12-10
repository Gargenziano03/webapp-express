const express = require('express');
const router = express.Router();
const connection = require('../database/connection')

router.get('/', (req, res) => {



    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ err: err })


        res.json({
            movies: results
        })
    })
})

module.exports = router;