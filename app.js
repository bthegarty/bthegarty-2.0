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

app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});

app.listen(4002,function(){
  console.log('Server running at Port 4001');
});
