const express = require('express');
const { authentication, restrictTo } = require('../controller/authController');
const {
  getAllFunds,
  createFund,
  updateFund,
  deleteFund,
} = require('../controller/funds');

const router = express.Router();
// restrictTo('Fund Manager', 'Admin'),
// authentication
router.route('/funds').post(createFund);
router.get('/funds', getAllFunds);
router.patch('/funds/:id', updateFund);
router.delete('/funds/:id', restrictTo('Admin'), deleteFund);

module.exports = router;
