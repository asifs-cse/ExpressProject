var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get((req, res)=>{
  res.render('url not found!');
});

router.get('/about',(req, res)=>{
  res.render('About section!');
});

router.get('/news',(req, res)=>{
  res.render('News section!');
});

router.get('/signup',(req, res)=>{
  res.render('Signup section');
});

router.get('/login',(req, res)=>{
  res.render('login section');
});

module.exports = router;
