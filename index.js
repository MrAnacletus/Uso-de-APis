const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Funcionando en http://localhost:${port}`)
})
app.get('/aure', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/audit-report',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var _ = require("underscore");
    var json = response.body;
    var users = JSON.parse(json);
    var filtered = _.where(users, {status: "Finished"});
    // => [{user: "a", age: 20}]
    res.send(filtered);
  });
})
app.get('/bire', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/billing-report',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
})
app.get('/jocare', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/job-cancel-reasons',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
})
app.get('/prire', (req, res) => {
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/printer-report',
    'headers': {
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
})

