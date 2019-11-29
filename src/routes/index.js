const express = require('express');
const router = express.Router(); //this works for create new routes in diferents files.

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' }); //se pone la extensión html, ya que son estos los que se van a utilzar.
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;