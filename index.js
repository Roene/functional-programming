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
  q: 'thriller',
  sort: 'year',
  facet: ['genre(thriller)', 'type(book)'],
  refine: true,
  librarian: true,
  page: 1
})

//   .then(results =>
//       JSON.parse(results).aquabrowser.results.result.forEach(function(e){
//           console.log(e);
//       })
// ) // JSON results
//   .catch(err => console.log(err)) // Something went wrong in the request to the API

// Bron code van Laurens | 31-10-2018 | College
  .then(results => JSON.parse(results))
  .then(results => {
    var myData = getKeys(results)
  })

function getKeys(data){
  var myData = data.aquabrowser.results.result.map(e => {    
    return {
      TITEL: e.titles['short-title'].$t,
      PUBLICATIE: e.publication? parseInt(e.publication.year.$t, 10) : "GEEN PUBLICATIE DATUM",
      AUTHEUR: e.authors? e.authors['main-author'].$t : "GEEN AUTHEUR",
      META: e.description? e.description['physical-description'].$t : "GEEN META DATA",
      TYPE: e.formats? e.formats.format.$t : "TYPE ONBEKEND",
      // GENRE: e.genres? e.genres.genre.$t : "GEEN GENRE",
      // Bron Jesse Dijkman
      GENRE: e.genres? e.genres.genre.length > 1? e.genres.genre.map(x => x.$t) : e.genres.genre.$t : "GEEN GENRE", 
      // Einde bron Jesse Dijkman     
    }
  })
  console.log(myData)
}
// Einde bron Laurens
