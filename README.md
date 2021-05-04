#Clinch Javascript Client

[![Build Status](https://travis-ci.org/ClinchIO/clinch-talent-js.svg?branch=master)](https://travis-ci.org/ClinchIO/clinch-talent-js)

##Getting Started

This Javascript client allows developers to connect to the PageUp Recruitment Marketing API to access their data. In order to use the client you must have a valid PageUp Recruitment Marketing account and valid API keys. The steps to obtain keys can be found on our [knowledge portal](https://knowledgeportal.pageuppeople.com/article/clinch-api-getting-started/).
 
##Using the Module

Install the module:

```

npm install clinch-talent

```

Require the module:

```javascript

var clinchTalent = require('clinch-talent');

```

Use the module to get candidate data:

```javascript

var client = new clinchTalent("YOUR-KEY", "YOUR-SECRET");
client.getCandidates(function (error, response, body) {console.log(response.statusCode)}); // Get data for the collection of candidates and log response statusCode
client.getCandidate('candidateId', function (error, response, body) {console.log(JSON.parse(response.body))}); // Get data for an individual candidate using the candidate's ID and log the response body

```
