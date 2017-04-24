var express = require('express');
var app = express();
var path = require('path');
var externalServer = { router : "eek123.ust.hk" }
var fs = require("fs");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.engine('ejs', require('ejs').renderFile);

var size = 200;
var dataArr = [];
var data1 = 'position1.txt';
var data2 = 'newGTD.txt';
var data3 = 'position2.txt';
dataArr = fs.readFileSync(__dirname+'/data/'+data2,'utf8').toString().split('\n',size);

var deviceData = []
//console.log(dataArr);
for (var i=0; i<dataArr.length; ++i) {
    var device = dataArr[i].split(' ');
    device = device.filter(function(s){return s!='';});
    var json = {
	"id" : device[1],
	"x" : device[3],
	"y" : device[4],
	"time" : device[5]
    }
    deviceData.push(json);
    //deviceData.push([device[3],device[4]]);
}
deviceData=JSON.stringify(deviceData);
//console.log(JSON.stringify(deviceData));


/*
 * Data Structure:{
 *  x:
 *  y:
 *  Identity:
 *  timestamp:
 *}
 */
app.get('/', function (req, res) {
  //console.log(defaultData);
    res.render('demo.ejs', {currentTime: new Date(), 'defaultData': deviceData});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
