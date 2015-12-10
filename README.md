#Clinch Javascript Client

##Getting Started

This Javascript client allows developers to connect to the Clinch Talent API to access their data. In order to use the client you must have a valid Clinch Talent account and valid API keys. The steps to obtain keys can be found in the [developer documentation](http://dev.clinch.io/docs/api_getting_started).
 
##Using the Gem

Install the gem:

```

npm install clinch-js-client

```

Require the module:

```javascript

var ClinchClient = require('clinch-js-client');

```

Use the module to get candidate data:

```javascript
var client = new ClinchClient("YOUR-KEY", "YOUR-SECRET");
client = ClinchClient.new("YOUR-KEY", "YOUR-SECRET");
client.get_candidates(function (error, response, body) {}); // Get data for the collection of candidates
client.get_candidate('candidateId', function (error, response, body) {}) // Get data for an individual candidate using the candidate's ID

```