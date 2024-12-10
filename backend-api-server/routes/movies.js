const express = require('express');
const router = express.Router();
const connection = require('../database/connection')

router.get('/', (req, res) => {

    res.json({
        movies: 'all movie here'
    })
})

module.exports = router