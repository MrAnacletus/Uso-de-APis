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
    // add an output filter to extract the full address
    geocodeByAddressInputs.addOutputFilter("address", "/GeocodeResponse/result/formatted_address", "Response")
    // add an output filter to extract the collection of address long_name components
    geocodeByAddressInputs.addOutputFilter("components", "/GeocodeResponse/result/address_component/long_name", "Response")
    res.send(response.getOutputs());
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

