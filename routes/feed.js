const express = require('express');

const feedController = require('../controllers/feed');

const router = express.router();

router.get('/posts', feedController.getPosts);

module.exports = router;