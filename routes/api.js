

var express = require('express');
var apiRouter = express.Router();

apiRouter.get('/start', start);
const fs = require('fs');
const filePath = './time.txt';
var globalRes;


module.exports = apiRouter;


function start(req, res){

    // var num = req.query.num;
    // var date = new Date();
    globalRes = res;
    res.send({num: getRandomInt(10)});
    //fs.writeFile(filePath,date.toString("dd/MM/YYYY HH:mm:ss"), createdFile)
}

function createdFile(res){
    console.log("file created!!!");
    globalRes.send({status: "write successfull"});
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }