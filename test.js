var expect = require("chai").expect;
var request = require('request');
var ClinchClient = require("./index.js");
var sinon = require("sinon");
 
describe("ClinchClient", function(){
	it("should initialize with a key and secret", function(){
		var client = new ClinchClient("YOUR-KEY", "YOUR-SECRET");       
 
        expect(client).to.have.a.property("key", "YOUR-KEY");
        expect(client).to.have.a.property("secret", "YOUR-SECRET");
    });

    describe("should make appropriate requests", function(){

    	before(function() {
    		this.client = new ClinchClient("YOUR-KEY", "YOUR-SECRET");
    	});

    	it("#getResource()", function(){
	        var mock = sinon.mock(request);
	        mock.expects('get').withArgs('https://api.clinchtalent.com/v1/resource.json').once();
	        this.client.getResource('resource.json', function(){});
	        mock.verify();
	    });

    	it("#getCandidates()", function(){
	        var mock = sinon.mock(request);
	        mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates.json').once();
	        this.client.getCandidates(function(){});
	        mock.verify();
	    });

    	it("#getResource()", function(){
	        var mock = sinon.mock(request);
	        mock.expects('get').withArgs('https://api.clinchtalent.com/v1/candidates/abc123.json').once();
	        this.client.getCandidate('abc123', function(){});
	        mock.verify();
	    });
    });
});;