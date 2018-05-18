const express = require('express');
const router = express.Router();

// @route (GET) api/profile/test
// @desc        Tests Profile Route
// @access      Public

router.get('/test', (req, res) => {
  res.json({
    msg: 'profile Works'
  });
});

module.exports = router;