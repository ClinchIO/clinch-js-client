const API_ENDPOINT = 'https://api.clinchtalent.com';
const PATH_PREFIX = '/v1/';

var request = require('request');
var crypto = require('crypto');

function ClinchTalent(key, secret) {
  this.key = key;
  this.secret = secret;
}

ClinchTalent.prototype.getResource = function (resource, callback) {
  var date = new Date().toUTCString();
  var path = PATH_PREFIX + resource;
  var url = API_ENDPOINT + path;
  var contentType = '';
  var contentMD5 = '';
  var canonicalString = [contentType, contentMD5, path, date].join(',');

  var options = {
    'headers': {
      'Date': date,
      'Accept': 'application/vnd.api+json',
      'Authorization': 'APIAuth ' + this.key + ":" + generateHmac(canonicalString, this.secret)
    }
  };

  request.get(url, options, callback);
};

// # Candidates

ClinchTalent.prototype.getCandidates = function (callback) {
  this.getResource('candidates', callback);
};


ClinchTalent.prototype.getCandidate = function (candidateId, callback) {
  this.getResource(`candidates/${candidateId}`, callback);
};

// # Themes

ClinchTalent.prototype.getThemes = function(callback) {
	this.getResource('themes', callback);
}

ClinchTalent.prototype.getTheme = function (themeId, callback) {
  this.getResource(`themes/${themeId}`, callback);
};

ClinchTalent.prototype.getPageLayouts = function(themeId, callback) {
    this.getResource(`themes/${themeId}/page_layouts`, callback);
}

ClinchTalent.prototype.getPageLayout = function(themeId, pageLayoutId, callback) {
    this.getResource(`themes/${themeId}/page_layouts/${pageLayoutId}`, callback);
}

// # HMAC

function generateHmac(data, secretKey) {
  return crypto.createHmac('sha1', secretKey).update(data).digest('base64');
}

module.exports = ClinchTalent;
