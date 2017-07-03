#Clinch Javascript Client

[![Build Status](https://travis-ci.org/ClinchIO/clinch-talent-js.svg?branch=master)](https://travis-ci.org/ClinchIO/clinch-talent-js)

##Getting Started

This Javascript client allows developers to connect to the Clinch Talent API to access their data. In order to use the client you must have a valid Clinch Talent account and valid API keys. The steps to obtain keys can be found in the [developer documentation](http://support.clinch.io/article/77-getting-started).
 
##Using the Module

Install the module:

```

npm install clinch-talent

```

Require the module:

```javascript
var ClinchClient = require('clinch-talent');

```

Use the module to get candidate data:

```javascript

var client = new ClinchTalent("YOUR-KEY", "YOUR-SECRET");
client = ClinchTalent.new("YOUR-KEY", "YOUR-SECRET");
client.getCandidates(function (error, response, body) {}); // Get data for the collection of candidates
client.getCandidate('candidateId', function (error, response, body) {}) // Get data for an individual candidate using the candidate's ID

```