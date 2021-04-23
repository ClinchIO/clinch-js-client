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
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:EHNG02udhgDYSPMHqCxiN1jYi0A=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/resource', expectedHeaders).once();
      this.client.getResource('resource', function () {
      });
      mock.verify();
    });

    it('#patchResource()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:elUqIbDPO884rfS0mDYrcADKTKI=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}, body: {foo: 'bar'}, json: true};
      mock.expects('patch').withArgs('https://api.clinchtalent.com/v1/resource/abc123', expectedHeaders).once();
      this.client.patchResource('resource/abc123', {foo: 'bar'}, function () {
      });
      mock.verify();
    });

    it('#postResource()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:cUV2fb3kEjqInjruIJl1WeXlzMc=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}, body: {foo: 'bar'}, json: true};
      mock.expects('post').withArgs('https://api.clinchtalent.com/v1/resource', expectedHeaders).once();
      this.client.postResource('resource', {foo: 'bar'}, function () {
      });
      mock.verify();
    });

    it('#getCandidates()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:gYzq0dTgFzbX8X1CC854RjlE/pg=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates', expectedHeaders).once();
      this.client.getCandidates(function () {
      });
      mock.verify();
    });

    it('#getCandidate()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:muLbb1DCdUil9kSqL9ulvvWY7KU=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates/abc123', expectedHeaders).once();
      this.client.getCandidate('abc123', function () {
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
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:uyV87MWIgEhnUhzva48QVTEdK+g=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/job_departments', expectedHeaders).once();
      this.client.getJobDepartments(function () {
      });
      mock.verify();
    });

    it('#getJobLocationsCities()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:KmySNjQ7QWmVLFrx84Td23z7oSM=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/job_locations/cities?department=engineering', expectedHeaders).once();
      this.client.getJobLocationsCities("engineering", function () {
      });
      mock.verify();
    });

    it('#getThemes()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:FVoge/Vs4wLsnwL6OIai3UALGHE=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes', expectedHeaders).once();
      this.client.getThemes(function () {
      });
      mock.verify();
    });

    it('#getTheme()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:sH1UxWFTg5DI/VjNEh65B8xQ6Fk=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123', expectedHeaders).once();
      this.client.getTheme('abc123', function () {
      });
      mock.verify();
    });

    it('#getPageLayouts()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:QFy1l39cbz+1e/jL7kZ1q6hwF+0=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123/page_layouts', expectedHeaders).once();
      this.client.getPageLayouts('abc123', function () {
      });
      mock.verify();
    });

    it('#getPageLayout()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:ZCd6WLaxYc9CymZuQNXDqylPWqU=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://api.clinchtalent.com/v1/themes/abc123/page_layouts/def123', expectedHeaders).once();
      this.client.getPageLayout('abc123', 'def123', function () {
      });
      mock.verify();
    });

    it('#patchPageLayout()', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:FWUFnF6+YYTkaLpf7rM5n/6Mtq0=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}, body: {data: {attributes: { html: '<html></html>'}}}, json: true};
      mock.expects('patch').withArgs('https://api.clinchtalent.com/v1/themes/abc123/page_layouts/def123', expectedHeaders).once();
      this.client.patchPageLayout('abc123', 'def123', {data: {attributes: { html: '<html></html>'}}}, function () {
      });
      mock.verify();
    });

    it('#alternativeEndpoint', function () {
      const mock = sinon.mock(request);
      const expectedHeaders = {headers: {Accept: 'application/vnd.api+json', Authorization: 'APIAuth YOUR-KEY:muLbb1DCdUil9kSqL9ulvvWY7KU=', Date: 'Thu, 01 Jan 1970 00:00:00 GMT'}};
      mock.expects('get').withArgs('https://alternative.endpoint.local/v1/candidates/abc123', expectedHeaders).once();
      this.client = new ClinchTalent('YOUR-KEY', 'YOUR-SECRET', 'https://alternative.endpoint.local/v1/');
      this.client.getCandidate('abc123', function () {
      });
      mock.verify();
    });
  });
});