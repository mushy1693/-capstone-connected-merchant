var http = require('http'),
      api = require('../api');

exports.getTraveler = function(req,res){

  var options = {
    host : api.travelerApi.host,
		path : api.travelerApi.path,
		method: 'GET'
  };

  var receiveRequest = http.request(options, function(response){

    //console.log('STATUS: ' + response.statusCode);
    var data = '';

    response.on('data', function (chunk) {
      data = data + chunk;
    });

    response.on('end', function () {
      //console.log(data);
      res.json(JSON.parse(data));
    });

  });

  receiveRequest.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  receiveRequest.end();

}
