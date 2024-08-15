const { authentication } = require('../controller/authController');
const { createVote } = require('../controller/vote');

const router = require('express').Router();

router.post('/vote', authentication, createVote);

module.exports = router;
