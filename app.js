var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    pq = require('pg'),
    app = express();
// dB connect string
var connect = "postgres://gullufit:Milind076%#@localhost/reciebookdb";

// assign dust engine to  .dust files

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'piublic')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: false}));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3000, function(){
    console.log('server started on port 3000');
});