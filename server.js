const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/poupeApp'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/poupeApp/index.html');
});

app.listen(process.env.PORT || 4200);
