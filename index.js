const express     = require ('express');
const bodyParser  = require ('body-parser')

const fs          = require('fs')

const xml         = require('xml')

let xmlResponse;

fs.readFile('capabilities.xml', 'utf8', (err,data) => {
  if (err){
    return console.log(err);
  }
  xmlResponse = data;
});

const app         = express();

const port        = 8000;

app.get('/', (req,res) => {
    res.set('Content-Type', 'text/xml');
    res.send(xmlResponse);
});

app.listen(port, () => {
  console.log('Running on port: ' + port);
})
