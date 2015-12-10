// const API_ENDPOINT = 'https://api.clinchtalent.com/v1/';
const API_ENDPOINT = 'http://localhost:3000';
const PATH_PREFIX = '/api/v1/';

var request = require("request");
var crypto = require("crypto");

exports.ClinchClient = function(key, secret){

  this.getKey = function() {
    return key;
  }

  this.getResource = function(resource) {

    var date = new Date().toUTCString();
    var path = PATH_PREFIX + resource;
    var url = API_ENDPOINT + path;
    var contentType = '';
    var contentMD5 = '';

    var canonicalString = [contentType, contentMD5, path, date].join(',');
    console.log(canonicalString);

    var options = {
      "headers" : {
        "Date"   : date, 
        "Authorization" : "APIAuth " + key + ":" + generateHmac(canonicalString, secret)
      }
    };

    request.get(
      url,
      options,
      function (error, response, body) {
        console.log(response, body);
      }
    );

  }
}

function generateHmac (data, secretKey) {
  console.log(crypto.createHmac('sha1', secretKey).update(data).digest("base64"));
  return crypto.createHmac('sha1', secretKey).update(data).digest("base64");
}
