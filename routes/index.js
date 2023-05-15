var express = require('express');
var router = express.Router();


//create route
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

//admin rote
router.get('/admin',(req, res)=>{
  res.render('admin activity');
});

//contact router

router.get('/contact',(req, res)=>{
  res.render('contact activity');
});

module.exports = router;
