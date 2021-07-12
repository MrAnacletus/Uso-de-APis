const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Bienvenido/a/e')
})

app.listen(port, () => {
	console.log(`Funcionando en http://localhost:${port}`)
})
app.get('/reportes_auditoria/:llave/:valor', (req, res) => {
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
			var filtered = _.where(users["Items"], {job_id: parseInt(valor)});
			break;
			case "email":
			var filtered = _.where(users["Items"], {email: valor});
			break;
			case "printer_id":
			var filtered = _.where(users["Items"], {printer_id: parseInt(valor)});
			break;
			case "all":
			var filtered = users["Items"];
		}
		res.send(filtered);
  	});
})
app.get('/reporte_boleta/:llave/:valor', (req, res) => {
	var llave = req.params.llave;
  	var valor = req.params.valor;
  	var request = require('request');
  	var options = {
    	'method': 'GET',
    	'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/billing-report',
    	'headers': {
    	}
  	};
  	request(options, function (error, response) {
    	if (error) throw new Error(error);
    	var _ = require("underscore");
		var json = response.body;
		var users = JSON.parse(json);
		switch(llave){
			case "year_month":
			var filtered = _.where(users["Items"], {year_month: valor});
			break;
			case "account":
			var filtered = _.where(users["Items"], {account: valor});
			break;
			case "prints":
			var filtered = _.where(users["Items"], {prints: parseInt(valor)});
			break;
			case "all":
			var filtered = users["Items"];
		}
		res.send(filtered);
  	});
})
app.get('/razon_cancelacion_trabajos/:llave/:valor', (req, res) => {
	var llave = req.params.llave;
  	var valor = req.params.valor;
  	var request = require('request');
  	var options = {
    	'method': 'GET',
    	'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/job-cancel-reasons',
    	'headers': {
		}
	};
	request(options, function (error, response) {
    	if (error) throw new Error(error);
    	var _ = require("underscore");
		var json = response.body;
		var users = JSON.parse(json);
		switch(llave){
			case "cancel_by":
			var filtered = _.where(users["Items"], {cancel_by: valor});
			break;
			case "job_id":
			var filtered = _.where(users["Items"], {job_id: parseInt(valor)});
			break;
			case "file_id":
			var filtered = _.where(users["Items"], {file_id: parseInt(valor)});
			break;
			case "printer_name":
			var filtered = _.where(users["Items"], {printer_name: valor});
			break;
			case "account_email":
			var filtered = _.where(users["Items"], {account_email: valor});
			break;
			case "all":
			var filtered = users["Items"];
		}
		res.send(filtered);
  	});
})
app.get('/reporte_impresora/:llave/:valor', (req, res) => {
  	var llave = req.params.llave;
  	var valor = req.params.valor;
  	var request = require('request');
  	var options = {
    	'method': 'GET',
    	'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/printer-report',
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
      case "printer_name":
          var filtered = _.where(users["Items"], {printer_name: valor});
          break;
      case "printer_type":
          var filtered = _.where(users["Items"], {printer_type: valor});
          break;
      case "account":
          var filtered = _.where(users["Items"], {account: valor});
          break;
      case "printer_id":
          var filtered = _.where(users["Items"], {printer_id: parseInt(valor)});
          break;
      case "all":
    	  var filtered = users["Items"];
    }
  res.send(filtered);
  });
})

app.get('/reporte_impresora_todo/', (req, res) => {
	var request = require('request');
	var options = {
	  'method': 'GET',
	  'url': 'https://c840cfx2we.execute-api.us-east-1.amazonaws.com/dev/isw/printer-report',
	  'headers': {
	  }
	};
	request(options, function (error, response) {
		if (error) throw new Error(error);
		var json = response.body;
		var users = JSON.parse(json);
		res.send(users["Items"]);
	});
})