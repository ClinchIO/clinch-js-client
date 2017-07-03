var expect = require('chai').expect;
var request = require('request');
var ClinchTalent = require('./index.js');
var sinon = require('sinon');

describe('ClinchTalent', function () {
  it('should initialize with a key and secret', function () {
    var client = new ClinchTalent('YOUR-KEY', 'YOUR-SECRET');

    expect(client).to.have.a.property('key', 'YOUR-KEY');
    expect(client).to.have.a.property('secret', 'YOUR-SECRET');
  });

  describe('should make appropriate requests', function () {

    before(function () {
      this.client = new ClinchTalent('YOUR-KEY', 'YOUR-SECRET');
      this.clock = sinon.useFakeTimers();
    });

    after(function(){
      this.clock = sinon.restore();
    });

    it('#getResource()', function () {
      var mock = sinon.mock(request);
      var expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:8SIVQDCMltzKc16AvB3/UivbqNU=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/resource', expectedHeaders).once();
      this.client.getResource('resource', function () {
      });
      mock.verify();
    });

    it('#getCandidates()', function () {
      var mock = sinon.mock(request);
      var expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:cgLyS9HCvKFQMvoidj3sWphhYLk=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates', expectedHeaders).once();
      this.client.getCandidates(function () {
      });
      mock.verify();
    });
	
    it('#getThemes()', function () {
      var mock = sinon.mock(request);
      var expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:4nZeylg4guRy7qhE1BDMSoF7vt8=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes', expectedHeaders).once();
      this.client.getThemes(function () {
      });
      mock.verify();
    });
	
    it('#getTheme()', function () {
      var mock = sinon.mock(request);
      var expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:4nZeylg4guRy7qhE1BDMSoF7vt8=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123', expectedHeaders).once();
      this.client.getTheme('abc123', function () {
      });
      mock.verify();
    });
	
    it('#getPageLayouts()', function () {
      var mock = sinon.mock(request);
      var expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:4nZeylg4guRy7qhE1BDMSoF7vt8=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123/pagelayouts', expectedHeaders).once();
      this.client.getPageLayouts('abc123', function () {
      });
      mock.verify();
    });
	
    it('#getPageLayout()', function () {
      var mock = sinon.mock(request);
      var expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:4nZeylg4guRy7qhE1BDMSoF7vt8=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123/pagelayouts', expectedHeaders).once();
      this.client.getPageLayouts('abc123', 'abc123', function () {
      });
      mock.verify();
    });

    it('#getResource()', function () {
      var mock = sinon.mock(request);
      var expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:O3GXlD8wSyl7rn4LLKk5Ve2h/xQ=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates/abc123', expectedHeaders).once();
      this.client.getCandidate('abc123', function () {
      });
      mock.verify();
    });
  });
});
