const express = require('express');
const router = express.Router();

const MovieController = require('../controllers/MovieControllers')



router.get('/', MovieController.index);


router.get('/:id', MovieController.show)


module.exports = router