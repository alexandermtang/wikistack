const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();

router.get('/', function (req, res) {
  res.render('index');
});


module.exports = router;


// VVVVV express.static takes care of this for us
// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile(path.join(__dirname, '../public/stylesheets/style.css')); //path.join allows you to move between directories cleanly, with __dirname as your root. path is a built-in node module.
// })
