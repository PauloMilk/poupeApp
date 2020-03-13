const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/finansys'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/finansys/index.html');
});

app.listen(process.env.PORT || 4200);
