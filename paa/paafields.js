<!--
    var width = 1000, height = 2500, padding = 80;
    
    var color = d3.scale.ordinal()
        .domain(["biology","none","sociology","economics","statistics", "government","foundation","industry","popcent","other"])
        .range(["#696969","#ffffff","#b2df8a","#33a02c","#a6cee3","#af8dc3","#7b3294","#d01c8b","#1f78b4","#80cdc1"]);
        
    var yscale = d3.scale.linear()
        .domain([1931,2007])
        .range([0,height]);
        
    var xscale = [{label:"Field", space:"25"},{label:"Affiliation",space:"200"}]
    
    var yaxis = d3.svg.axis()
        .scale(yscale)
        .orient("left")
        .ticks(64)
        .tickFormat(d3.format(".0f"));
        
    var svg = d3.select("#pcontent").append("svg")
        .attr("width",width)
        .attr("height",height);
            
    var yax = svg.append("g")
        .attr("transform", "translate(" + padding + ",25)")
        .call(yaxis)
        .attr("class","axis");
        
        var field = svg.append("g");
        field.selectAll("rect")
            .data(paapres).enter()
                .append("rect")
                .attr("transform","translate(" + padding + ",25)")
                .attr("x",0)
                .attr('y',function(d) {return yscale(d.syear);})
                .attr('width',150)
                .attr("height",function(d) {return yscale(d.eyear) - yscale(d.syear);})
                .attr("fill",function(d) {return color(d.field);});
                
        var affiliation = svg.append("g");
        affiliation.selectAll("rect")
            .data(paapres).enter()
                .append("rect")
                .attr("transform","translate(" + padding + ",25)")
                .attr("x",150)
                .attr('y',function(d) {return yscale(d.syear);})
                .attr('width',150)
                .attr("height",function(d) {return yscale(d.eyear) - yscale(d.syear);})
                .attr("fill",function(d) {return color(d.affil);});
                
        var names = svg.append("g");
        names.selectAll("text")
            .data(paapres).enter()
                .append("text")
                .text(function(d) {return d.name;})
                .attr("transform","translate(" + padding + ",25)")
                .attr("x",310)
                .attr('y',function(d) {return yscale((d.eyear +d.syear)/2) + 3;})
                .style("font-size","15px")
                .style("fill","#696969");
                
        var legend = d3.select("svg")
                .append("g")
                .attr("transform","translate(750,20)")
                .attr("class","legend");
                
        var xaxis = d3.select("svg")
                .append("g")
                .attr("class","axis");
                
                var leg = [
                        {inst:"biology", name:"Biology"},
                        {inst:"economics",name:"Economics"},
                        {inst:"sociology",name:"Sociology"},
                        {inst:"statistics", name:"Statistics"},
                        {inst:"none",name:"None"},
                        {inst:"popcent",name:"University with Population Center"},
                        {inst:"other",name:"Other University"},
                        {inst:"government",name:"Government"},
                        {inst:"foundation",name:"Foundation"},
                        {inst:"industry",name:"Industry"}];
        
                legend.append("text")
                    .text("Legend")
                    .attr("x",5)
                    .attr("y",20)
                    .style("font-size","12px")
                    .style("fill","#696969");
                legend.append("g").selectAll("rect")
                    .data(leg).enter()
                    .append("rect")
                    .attr("x",10)
                    .attr("y",function(d,i) {return 30 + i*25;})
                    .attr("width",15)
                    .attr("height",15)
                    .style("fill",function(d) {return color(d.inst);});
                legend.append("g").selectAll("text")
                    .data(leg).enter()
                    .append("text")
                    .attr("x",30)
                    .attr("y",function(d,i) {return 43 + i*25;})
                    .text(function(d) {return d.name;})
                    .style("font-size","12px")
                    .style("fill","#696969");
                    
                xaxis.append("g").selectAll("text")
                    .data(xscale).enter()
                    .append("text")
                    .attr("x",function(d) {return d.space;})
                    .attr("y",5)
                    .attr("transform","translate(90,15)")
                    .text(function(d) {return d.label;})
                    .style("fill","#696969");
                
-->