var express = require('express');
var pug = require('pug');
var app = express();
var $ = require('jQuery');
var router = express.Router();
var path = require('path');
app.use(express.static(path.join(__dirname, 'nodemodules')));

app.use('/',router);
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req, res){
  res.render('index');
});

app.use('/not-found',function(req, res){
  res.send("Error 404: Well golly, I'm not really sure how you got here");
});

app.listen(8080,function(){
  console.log('Server running at Port 8080');
});
