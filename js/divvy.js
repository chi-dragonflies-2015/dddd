d3.select(".station_list")
  .selectAll("div")
    .data(stations)
  .enter().append("div")
    .text(function(d) { return d.name; })
;
