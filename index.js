const API_ENDPOINT = 'https://api.clinchtalent.com';
const PATH_PREFIX = '/v1/';

var request = require("request");
var crypto = require("crypto");

function ClinchClient(key, secret) {
  this.key = key;
  this.secret = secret;
}

ClinchClient.prototype.getResource = function(resource, callback) {
  var date = new Date().toUTCString();
  var path = PATH_PREFIX + resource;
  var url = API_ENDPOINT + path;
  var contentType = '';
  var contentMD5 = '';

  var canonicalString = [contentType, contentMD5, path, date].join(',');

  var options = {
    "headers" : {
      "Date"   : date, 
      "Authorization" : "APIAuth " + this.key + ":" + generateHmac(canonicalString, this.secret)
    }
  };

  request.get(
    url,
    options,
    callback
  );
};

ClinchClient.prototype.getCandidates = function(callback) {
  this.getResource('candidates.json', callback);
}


ClinchClient.prototype.getCandidate = function(candidateId, callback) {
  this.getResource('candidates/' + candidateId + '.json', callback);
}

function generateHmac (data, secretKey) {
  return crypto.createHmac('sha1', secretKey).update(data).digest("base64");
}

module.exports = ClinchClient;
