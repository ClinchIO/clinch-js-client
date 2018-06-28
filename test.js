const expect = require('chai').expect;
const request = require('request');
const ClinchTalent = require('./index.js');
const sinon = require('sinon');

describe('ClinchTalent', function () {
  it('should initialize with a key and secret', function () {
    const client = new ClinchTalent('YOUR-KEY', 'YOUR-SECRET');

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
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:8SIVQDCMltzKc16AvB3/UivbqNU=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/resource', expectedHeaders).once();
      this.client.getResource('resource', function () {
      });
      mock.verify();
    });

    it('#getCandidates()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:cgLyS9HCvKFQMvoidj3sWphhYLk=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates', expectedHeaders).once();
      this.client.getCandidates(function () {
      });
      mock.verify();
    });

    it('#postCandidate()', function () {
      const mock = sinon.mock(request);
      //couldn't match on parameters..
      mock.expects('post').withArgs('https://api.clinchtalent.com/v1/candidates', sinon.match.any, sinon.match.any).once();
      this.client.postCandidate({data: {attributes: {first_name: "FN", last_name: "SN"}}}, function () {
      });
      mock.verify();
    });

    it('#getJobDepartments()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:42GDd/h7aVWEIs1y4vudUcxwEWM=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/job_departments', expectedHeaders).once();
      this.client.getJobDepartments(function () {
      });
      mock.verify();
    });

    it('#getJobLocationsCities()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:ns9aSHl4Q8jvnBvViYX7W/8u4J0=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/job_locations/cities', expectedHeaders).once();
      this.client.getJobLocationsCities(function () {
      });
      mock.verify();
    });

    it('#getThemes()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:4nZeylg4guRy7qhE1BDMSoF7vt8=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes', expectedHeaders).once();
      this.client.getThemes(function () {
      });
      mock.verify();
    });

    it('#getTheme()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:xswV13clrzrVKzEgZufsF25TsiY=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123', expectedHeaders).once();
      this.client.getTheme('abc123', function () {
      });
      mock.verify();
    });

    it('#getPageLayouts()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:1E0D1A88RMrlJQjc9OrCvzWcZX0=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123/page_layouts', expectedHeaders).once();
      this.client.getPageLayouts('abc123', function () {
      });
      mock.verify();
    });

    it('#getPageLayout()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:RRVWkOsSzoOHPwiR9BHmmoVNQEE=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123/page_layouts/def123', expectedHeaders).once();
      this.client.getPageLayout('abc123', 'def123', function () {
      });
      mock.verify();
    });

    it('#patchPageLayout()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:OBGOKGl+AcMMzlI1r5QixDg+Ypo=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}, body: {html: '<html></html>'}, json: true};
      mock.expects('patch').withArgs('https://api.clinchtalent.com/v1/themes/abc123/page_layouts/def123', expectedHeaders).once();
      this.client.patchPageLayout('abc123', 'def123', {html: '<html></html>'}, function () {
      });
      mock.verify();
    });

    it('#getResource()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:O3GXlD8wSyl7rn4LLKk5Ve2h/xQ=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates/abc123', expectedHeaders).once();
      this.client.getCandidate('abc123', function () {
      });
      mock.verify();
    });

    it('#patchResource()', function () {
	  const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:OBGOKGl+AcMMzlI1r5QixDg+Ypo=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}, body: {html: '<html></html>'}, json: true};
      mock.expects('patch').withArgs('https://api.clinchtalent.com/v1/themes/abc123/page_layouts/def123', expectedHeaders).once();
      this.client.patchPageLayout('abc123', 'def123', {html: '<html></html>'}, function () {
      });
      mock.verify();
    });

    it('#alternativeEndpoint', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:O3GXlD8wSyl7rn4LLKk5Ve2h/xQ=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://alternative.endpoint.local/v1/candidates/abc123', expectedHeaders).once();
      this.client = new ClinchTalent('YOUR-KEY', 'YOUR-SECRET', 'https://alternative.endpoint.local/v1/');
      this.client.getCandidate('abc123', function () {
      });
      mock.verify();
    });


  });
});