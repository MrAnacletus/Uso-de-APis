const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Funcionando en http://localhost:${port}`)
})
app.get('/aure/:llave/:valor', (req, res) => {
  var llave = req.params.llave;
  var valor = req.params.valor;
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
  switch(llave){
    case "status":
      	var filtered = _.where(users["Items"], {status: valor});
      	break;
    case "date":
  	    var filtered = _.where(users["Items"], {date: valor});
      	break;
    case "job_id":
  	    var filtered = _.where(users["Items"], {job_id: valor});
      	break;
    case "email":
  	    var filtered = _.where(users["Items"], {email: valor});
      	break;
    case "printer_id":
  	    var filtered = _.where(users["Items"], {printer_id: valor});
      	break;
  }
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

