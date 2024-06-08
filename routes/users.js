var express = require('express');
var router = express.Router();

// GET users listing
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST new user
router.post('/', function(req, res, next) {
  res.send('respond with a new user');
});

// GET user by ID
router.get('/:id', function(req, res, next) {
  res.send('respond with user ' + req.params.id);
});

// PUT/PATCH update user by ID
router.put('/:id', function(req, res, next) {
  res.send('update user ' + req.params.id);
});

// DELETE user by ID
router.delete('/:id', function(req, res, next) {
  res.send('delete user ' + req.params.id);
});

module.exports = router;
