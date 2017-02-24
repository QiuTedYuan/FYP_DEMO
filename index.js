var express = require('express');
var app = express();

app.set('views', require('path').join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.engine('ejs', require('ejs').renderFile);

var defaultData={
  device1:[
    {
      x: 50,
      y: 50,
      timestamp: 1000,
    },
    {
      x: 55,
      y: 45,
      timestamp: 1050,
    },
    {
      x: 63,
      y: 42,
      timestamp: 1100,
    }
  ],
  device2:[
    {
      x: 100,
      y: 100,
      timestamp: 1000,
    },
    {
      x: 105,
      y: 95,
      timestamp: 1050,
    },
    {
      x: 103,
      y: 92,
      timestamp: 1100,
    }
  ],
};


/*
 * Data Structure:{
 *  x:
 *  y:
 *  Identity:
 *  timestamp:
 *}
 */
app.get('/', function (req, res) {
  console.log(defaultData);
  res.render('demo.ejs', {currentTime: new Date()});
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
