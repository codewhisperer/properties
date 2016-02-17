// FILE: routes/users.js
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  req.models.user.find().exec(function(err, allUsers) {
    if (err) return res.json({error: err}, 500);
    res.json(allUsers);
  });
});
/* POST create new user. */
router.post('/', function(req, res) {
    req.models.user.create(req.body, function(err, createdUser) {
    if(err) return res.json({ error: err }, 500);
    res.json(createdUser);
  });
});
/* GET specific user with id. */
router.get('/:id', function(req, res) {
    req.models.user.findOne({ id: req.params.id }).exec(function(err, user) {
      if (err) return res.json({error: err}, 500);
      res.json(user);
  });
});
/* PUT update specific user with id. */
router.put('/:id', function(req, res) {
    // id not updated
  delete req.body.id;

  req.models.user.update({ id: req.params.id }, req.body, function(err, updatedUser) {
    if(err) return res.json({ error: err }, 500);
    res.json(updatedUser);
  });
});
/* DELETE specific user. */
router.delete('/:id', function(req, res) {
  req.models.user.destroy({ id: req.params.id }, function(err) {
    if(err) return res.json({ error: err }, 500);
    res.json({ status: 'ok' });
  });
});

module.exports = router;
