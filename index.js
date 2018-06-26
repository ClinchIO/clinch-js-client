const request = require('request');
const crypto = require('crypto');
const url = require('url');

function ClinchTalent(key, secret, endpoint = 'https://api.clinchtalent.com/v1/') {
  this.key = key;
  this.secret = secret;
  this.endpoint = endpoint;
}

ClinchTalent.prototype.getResource = function (resource, callback) {
  const preparedRequest = prepareRequest(this.key, this.secret, this.endpoint, resource);
  request.get(preparedRequest['url'], preparedRequest['options'], callback);
};

ClinchTalent.prototype.patchResource = function (resource, data, callback) {
  const preparedRequest = prepareRequest(this.key, this.secret, this.endpoint, resource, data);
  request.patch(preparedRequest['url'], preparedRequest['options'], callback);
};

ClinchTalent.prototype.postResource = function (resource, data, callback) {
  const preparedRequest = prepareRequest(this.key, this.secret, this.endpoint, resource, data);
  request.post(preparedRequest['url'], preparedRequest['options'], callback);
};


// Candidates

ClinchTalent.prototype.getCandidates = function (callback) {
  this.getResource('candidates', callback);
};

ClinchTalent.prototype.getCandidate = function (candidateId, callback) {
  this.getResource(`candidates/${candidateId}`, callback);
};

ClinchTalent.prototype.postCandidate = function (data, callback) {
  this.postResource('candidates', data, callback);
};

// Themes

ClinchTalent.prototype.getThemes = function (callback) {
  this.getResource('themes', callback);
};

ClinchTalent.prototype.getTheme = function (themeId, callback) {
  this.getResource(`themes/${themeId}`, callback);
};

ClinchTalent.prototype.getPageLayouts = function (themeId, callback) {
  this.getResource(`themes/${themeId}/page_layouts`, callback);
};

ClinchTalent.prototype.getPageLayout = function (themeId, pageLayoutId, callback) {
  this.getResource(`themes/${themeId}/page_layouts/${pageLayoutId}`, callback);
};

ClinchTalent.prototype.patchPageLayout = function (themeId, pageLayoutId, data, callback) {
  this.patchResource(`themes/${themeId}/page_layouts/${pageLayoutId}`, data, callback);
};

// # HMAC

function generateHmac(data, secretKey) {
  return crypto.createHmac('sha1', secretKey).update(data).digest('base64');
}

// # Prepare HTTP Requests

function prepareRequest(key, secret, endpoint, resource, data = null) {
  const urlComponents = url.parse(endpoint);
  const date = new Date().toUTCString();
  const path = urlComponents.pathname + resource;
  const contentType = data !== null ? 'application/json' : '';
  const contentMD5 = '';
  const canonicalString = [contentType, contentMD5, path, date].join(',');

  let options = {
    'headers': {
      'Date': date,
      'Accept': 'application/vnd.api+json',
      'Authorization': 'APIAuth ' + key + ":" + generateHmac(canonicalString, secret)
    },
  };

  if (data) {
    options = Object.assign(options, {'body': data, 'json': true})
  }

  return {url: `${urlComponents.protocol}//${urlComponents.host}${path}`, options: options};
}

module.exports = ClinchTalent;
