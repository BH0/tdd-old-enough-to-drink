# Old Enough to Drink 

A web-app made using test-driven-development to allow the user to determine if they are old enough to drink in a given country. 

Tooling: 
* jest
* webpack
 
make sure to add the path to the web-page you wish to test inside util.test.js 
to test: "npm install && npm test"
to run in development: "npm install && npm start" > "start index.html" 

### Tempoary: 
One test in CircleCi will fail because the absolute path to the index.html for Puppeteer will not work within a Docker container, once this issue is resolved, I intend to dissallow merges with the master branch until all tests are passed. 