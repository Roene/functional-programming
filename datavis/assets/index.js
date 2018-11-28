var data = [
  {
    "year":1970,
    "count1":1,
    "count2":0
  },
  {
    "year":1975,
    "count1":1,
    "count2":0
  },
  {
    "year":1980,
    "count1":1,
    "count2":1
  },
  {
    "year":1985,
    "count1":1,
    "count2":6
  },
  {
    "year":1990,
    "count1":13,
    "count2":9
  },
  {
    "year":1995,
    "count1":16,
    "count2":21
  },
  {
    "year":2000,
    "count1":55,
    "count2":118
  },
  {
    "year":2005,
    "count1":149,
    "count2":272
  },
  {
    "year":2010,
    "count1":372,
    "count2":1027
  },
  {
    "year":2015,
    "count1":624,
    "count2":1154
  }
]

var svgSelect = d3.select("svg")
var width = 1020
var height = 850
var margin = {top: 35, right: 25, bottom: 35, left: 50}
var paddingBars = .2
var axisTicks = {amount: 25, outerSize: 0}

var svg = svgSelect
    .append("svg")
    .attr("widht", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`)

var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(paddingBars)
var xScale1 = d3.scaleBand()
var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0])

var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize)
var yAxis = d3.axisLeft(yScale).ticks(axisTicks.amount).tickSizeOuter(axisTicks.outerSize)

xScale0.domain(data.map(d => d.year))
xScale1.domain(['count1', 'count2']).range([0, xScale0.bandwidth()])
yScale.domain([0, d3.max(data, d => d.count1 > d.count2 ? d.count1 : d.count2)])

var year = svg.selectAll(".year")
  .data(data)
  .enter().append("g")
  .attr("class", "year")
  .attr("transform", d => `translate(${xScale0(d.year)},0)`)

year.selectAll(".bar.count1")
  .data(d => [d])
  .enter()
  .append("rect")
  .attr("class", "bar count1")
.style("fill","blue")
  .attr("x", d => xScale1('count1'))
  .attr("y", d => yScale(d.count1))
  .attr("width", xScale1.bandwidth())
  .attr("height", d => {
    return height - margin.top - margin.bottom - yScale(d.count1)
  })
  
year.selectAll(".bar.count2")
  .data(d => [d])
  .enter()
  .append("rect")
  .attr("class", "bar count2")
.style("fill","red")
  .attr("x", d => xScale1('count2'))
  .attr("y", d => yScale(d.count2))
  .attr("width", xScale1.bandwidth())
  .attr("height", d => {
    return height - margin.top - margin.bottom - yScale(d.count2)
  })

// x ass wordt hier aangemaakt
svg.append("g")
   .attr("class", "x axis")
   .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
   .call(xAxis)

// Label voor de x as
// BRON https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e
 svg.append("text")             
    .attr("transform", "translate(" + (width/2) + " ," + (height - 40) + ")")
    .style("text-anchor", "middle")
    .text("Publicatiejaar")
// EINDE BRON https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e

// y ass wordt hier aangemaakt
svg.append("g")
   .attr("class", "y axis")
   .call(yAxis)

// Label voor dde y ass
// BRON https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Aantal boeken")   
// EINDE BRON https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e