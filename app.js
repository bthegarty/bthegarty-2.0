var express = require('express');
var pug = require('pug');
var app = express();
var router = express.Router();
var path = require('path');
// heroku requires this be a declared variable
var port = process.env.PORT || 8081

app.use('/',router);
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req, res){
  res.render('index');
});

app.use('/not-found',function(req, res){
  res.render('not-found');
});

app.use('/work',function(req, res){
  res.render('work');
});

app.listen(port,function(){
  console.log('Server running at Port 8081');
});
