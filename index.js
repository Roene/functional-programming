require('dotenv').config()
const OBA = require('oba-api')
var fs = require("file-system")

// Setup authentication to api server
const client = new OBA({
  // ProQuest API Keys
  public: process.env.PUBLIC,
  secret: process.env.SECRET
})

// General usage:
// client.get({ENDPOINT}, {PARAMS});
// ENDPOINT = search | details | refine | schema | availability | holdings
// PARAMS = API url parameter options (see api docs for more info)

// Client returns a promise which resolves the APIs output in JSON

// Example search to the word 'rijk' sorted by title:

var allData = []; 

client.get("search", {
  q: "genre:biografie",
  refine: true,
  librarian: true
})
  // Bron Sterre van Geest
  .then(response => JSON.parse(response).aquabrowser)
  .then(response => {
    var selectedRctx = []
    var selectedYears = []
     var years = getYears(selectedYears)
     selectedYears.forEach(function(years) {
      client
        .get("search", {
          q: years,
          librarian: true,
          refine: true
        })
        .then(response => JSON.parse(response).aquabrowser)
        .then(response => {
          var rctx = response.meta.rctx
          selectedRctx.push(rctx)
           if (selectedRctx.length == 11) {
            selectedRctx.forEach(function(selectedRctx) {
              client
                .get("refine", {
                  rctx: selectedRctx,
                  count: 100
                })
                .then(response => JSON.parse(response).aquabrowser)
                .then(response => {
                  var genreFacet = getGenreFacet(response)
                })
            })
          }
        })
    })
  })
  .catch(err => console.error(err));

function getYears(selectedYears) {
  var period = 50
   for (var i = 0; i <= period; i = i + 5) {
    var year = "year:" + (1965 + i)
    selectedYears.push(year)
  }
}

function getGenreFacet(data) {
  var languageId = data.meta["original-query"]
  var year = languageId.slice(6, 10)
  var facets = data.facets.facet
   facets.forEach(function(facets) {
    var facetId = facets.id;
    if (facetId === "Genre") {
      var values = facets.value;
      values.forEach(function(values) {
        var count = values.count
        var id = values.id;
        allData.push({
          year: year,
          genre: id,
          count: count
        })
        var allDataJson = JSON.stringify(allData)
        fs.writeFileSync("data.json", allDataJson, err => {
          console.log("All data written to data.json")
          if (err) throw err
        })
      })
    }
  })
}