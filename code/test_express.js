const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index.html');
});

app.post('/form-submit', function (req, res) {
  var metadata = req.body;
  console.log(JSON.stringify(metadata));
  res.render('wsControl.html', { metadata: metadata });
});

app.listen(3000, () => console.log('Server ready'));