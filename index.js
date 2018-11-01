require('dotenv').config()
const OBA = require('oba-api');

// Setup authentication to api server
const client = new OBA({
  // ProQuest API Keys
  public: process.env.PUBLIC,
  secret: process.env.SECRET
});

// General usage:
// client.get({ENDPOINT}, {PARAMS});
// ENDPOINT = search | details | refine | schema | availability | holdings
// PARAMS = API url parameter options (see api docs for more info)

// Client returns a promise which resolves the APIs output in JSON

// Example search to the word 'rijk' sorted by title:
client.get('search', {
  q: 'Harry potter',
  sort: 'title',
  facet: 'type(book)',
  refine: 'true',
  librarian: 'true',
  page: '2'
})
  .then(results =>
      JSON.parse(results).aquabrowser.results.result.forEach(function(e){
          console.log(e);
      })
) // JSON results
  .catch(err => console.log(err)) // Something went wrong in the request to the API
