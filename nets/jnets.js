<!--
            var width = 1000;
            var height = (dec-1800)*6;
            
            var nsize = d3.scale.sqrt()
                .domain([1,400])
                .range([3,30]);
            
            
            var color = d3.scale.ordinal()
                .domain(["demography","sociology","economics","history","geography","statistics","pubh","famplan","general","eugenics","info"])
                .range(["#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#a6cee3","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#696969"]);
            
            var leg = [
                {abb:"demography",lab:"Demography"},
                {abb:"economics",lab:"Economics"},
                {abb:"eugenics",lab:"Eugenics"},
                {abb:"famplan",lab:"Family Planning"},
                {abb:"general",lab:"General"},
                {abb:"geography",lab:"Geography"},
                {abb:"history",lab:"History"},
                {abb:"pubh",lab:"Public Health"},
                {abb:"sociology",lab:"Sociology"},
                {abb:"statistics",lab:"Statistics"}
            ];
            
            function indent(color){
                if (color == 'info') {
                    return 320;
                }
                else{
                    return 350;
                }
                
            }
            
            var force = d3.layout.force()
                .linkDistance(function(d) { if (d.value == 0) {return 500;} else {return 400/Math.sqrt(d.value);}})
                .linkStrength(function(d) {if (d.value == 0) {return 0;} else {return (d.value)/10;}})
                .charge(-650)
                .size([1000,height]);
                
            var svg = d3.select("#pcontent").append("svg")
                    .attr("width",width)
                    .attr("height",height);
                    
            var legend = svg.append("g")
                .attr("width",200)
                .attr("height",300)
                .attr("transform","translate(0,50)");
                    
            var table = d3.select("#pcontent").append("svg")
                    .attr("height",5000)
                    .attr("width",width);
  
            d3.csv("jnets" + dec + ".csv", function(data) {
                
                graph = {"nodes":[], "links":[]};
                
                data.forEach(function(d) {
                    graph.nodes.push({"name": d.source, "count": +d.scount, "type":d.sfield, "abbrev":d.sabbrev});
                    graph.nodes.push({"name": d.target, "count": +d.tcount, "type":d.tfield, "abbrev":d.tabbrev});
                    graph.links.push({"source": d.source, "target": d.target, "value": d.weight});
                });
                
                var nodesmap = d3.nest()
                    .key(function(d) {return d.name;})
                    .rollup(function(d) {return {"name":d[0].name, "count":d[0].count, "type":d[0].type, "abbrev":d[0].abbrev};})
                    .map(graph.nodes);
                
                graph.nodes = d3.keys(d3.nest()
                    .key(function(d){return d.name;})
                    .map(graph.nodes));
                graph.links.forEach(function(d,i){
                    graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
                    graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
                });
                
                graph.nodes.forEach(function(d,i) {graph.nodes[i] = {"name":nodesmap[d].name, "count":nodesmap[d].count, "type":nodesmap[d].type, "abbrev":nodesmap[d].abbrev};})    
                    
                force.nodes(graph.nodes)
                force.links(graph.links)
                force.start();
                
                var link = svg.selectAll(".link")
                    .data(graph.links)
                    .enter().append("line")
                        .attr("class","link")
                        .style("stroke-width", function(d) {return (d.value)/2;});
                
                var gnodes = svg.selectAll("g.node")
                    .data(graph.nodes)
                    .enter()
                    .append("g")
                    .classed("gnode",true);
                    
                var node = gnodes.append("circle")
                        .attr("class","node")
                        .attr("r", function(d) {return nsize(d.count);})
                        .style("fill", function(d) {return color(d.type);})
                        .call(force.drag);
                
                var labels = gnodes.append("text")
                    .text(function(d) {return d.abbrev;})
                    .style("fill","#000000")
                    .style("font-size","10px");
                    
                var titles = gnodes.append("title")
                        .text(function(d) {return d.name;});
                    
                force.on("tick", function() {
                    link.attr("x1", function(d) {return d.source.x;})
                        .attr("y1", function(d) {return d.source.y;})
                        .attr("x2", function(d) {return d.target.x;})
                        .attr("y2", function(d) {return d.target.y;});
                        
                    gnodes.attr("transform", function(d) {
                        return "translate(" + [d.x,d.y] + ")";});
                    });
            });
            
            var stats = [
                {name:"Articles", value:articles}, 
                {name:"Journals", value:journals},
                {name:"Authors", value:authors},
                {name:"Density", value:density}];
            
            table.append("g").selectAll("text")
                .data(stats).enter()
                .append('text')
                    .text(function(d) {return d.name + ": " + d.value;})
                    .attr("x",10)
                    .attr("y", function(d,i) {return 20*i + 20;})
                    .attr('font-family', 'sans-serif')
                    .attr('fill', color('info'))
                    .attr('font-size', '15px');
                    
            table.append("text")
                .text("Journal Centrality:")
                .attr("x",120)
                .attr("y",20)
                .attr("fill",color("info"))
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(cjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.centrality;})
                    .attr("x",150)
                    .attr("y", function(d,i) {return 15*i + 35;})
                    .attr("fill", (function(d) {return color(d.field);}))
                    .attr("font-size","15px");
                    
            table.append("g").selectAll("text")
                .data(cauths).enter()
                .append("g:a")
                .attr("xlink:href",function(d) {return d.url;})
                .append("text")
                    .text(function(d) {return d.text;})
                    .attr("x", function(d) {return indent(d.color);})
                    .attr("y", function(d,i) {return 15*i + 20;})
                    .attr("fill",function(d) {return color(d.color);})
                    .attr("font-size","12px");
            
            legend.append("text")
                .text("Legend")
                .attr("x",5)
                .attr("y",5)
                .style("fill","#696969")
                .style("font-size","12px");
            legend.append("text")
                .text("Mouse over node for full journal title.")
                .attr("x",5)
                .attr("y",227)
                .style("fill","#696969")
                .style("font-size","12px");
            legend.append("text")
                .text("Click and drag node to rotate or reposition.")
                .attr("x",5)
                .attr("y",240)
                .style("fill","#696969")
                .style("font-size","12px");
            legend.append("g").selectAll("rect")
                .data(leg).enter()
                .append("rect")
                    .attr("x",10)
                    .attr("y",function(d,i) {return 20*i + 15;})
                    .attr("width",15)
                    .attr("height",15)
                    .style("fill",function(d) {return color(d.abb);});
            legend.append("g").selectAll("text")
                .data(leg).enter()
                .append("text")
                    .text(function(d) {return d.lab;})
                    .attr("x",30)
                    .attr("y",function(d,i) {return 20*i + 27;})
                    .style("fill","#696969")
                    .style("font-size","12px");
        
-->