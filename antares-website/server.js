const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.static("express"));
// default URL for website
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/placeholder.html'));
    //__dirname : It will resolve to your project folder.
  });
app.get('/NES/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/NES.html'));
    //__dirname : It will resolve to your project folder.
  });
app.get('/NES/bitmapper/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/bitmapper.html'));
    //__dirname : It will resolve to your project folder.
  });



const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);