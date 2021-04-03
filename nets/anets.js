<!--
            var width = 1000;
            
            if (dec == 1925){
                var height = 300, ldist = 50, chg = -100;
                var nsize = d3.scale.linear()
                    .domain([0,20])
                    .range([5,25])
            }
            else if (dec == 1935){
                var height = 400, ldist = 60, chg = -100;
                var nsize = d3.scale.linear()
                    .domain([0,20])
                    .range([5,25])
            }
            else if (dec == 1945){
                var height = 500, ldist = 60, chg = -100;
                var nsize = d3.scale.linear()
                    .domain([0,20])
                    .range([5,25])
            }
            else if (dec == 1955){
                var height = 700, ldist = 50, chg = -80;
                var nsize = d3.scale.linear()
                    .domain([0,20])
                    .range([5,25])
            }
            else if (dec == 1965){
                var height = 900, ldist = 30, chg = -50;
                var nsize = d3.scale.linear()
                    .domain([0,50])
                    .range([5,25])
            }
            else if (dec == 1975){
                var height = 1100, ldist = 20, chg = -40;
                var nsize = d3.scale.linear()
                    .domain([0,50])
                    .range([5,25])
            }
            else if (dec == 1985){
                var height = 1100, ldist = 10, chg = -15;
                var nsize = d3.scale.linear()
                    .domain([0,50])
                    .range([5,25])
            }
            else if (dec == 1995){
                var height = 1200, ldist = 10, chg = -15;
                var nsize = d3.scale.linear()
                    .domain([0,50])
                    .range([5,25])
            }
                
            var pct = d3.format("%");
            
            function indent(x) {
                if (x == "info") {
                    return 220;
                }
                else return 250;
            }
            
            var color = d3.scale.ordinal()
                .domain(["demography","sociology","statistics","famplan","general","info"])
                .range(["#1f78b4","#b2df8a","#a6cee3","#ff7f00","#cab2d6","#696969"]);
            
            var leg = [
                {abb:"demography",lab:"Demography"},
                {abb:"famplan",lab:"Family Planning"},
                {abb:"general",lab:"General"},
                {abb:"sociology",lab:"Sociology"},
                {abb:"statistics",lab:"Statistics"}
            ];
            
            var force = d3.layout.force()
                .linkDistance(function(d) {if (d.value == 0) {return ldist;} else {return ldist/(d.value);}})
                .linkStrength(function(d) {return (d.value);})
                .charge(chg)
                .size([1000,height]);
                
            var svg = d3.select("#pcontent").append("svg")
                    .attr("width",width)
                    .attr("height",height);
                    
            var legend = svg.append("g")
                .attr("width",200)
                .attr("height",300)
                .attr("transform","translate(0,5)");
                    
            var table = d3.select("#pcontent").append("svg")
                    .attr("height",30000)
                    .attr("width",width);
  
            d3.csv("anets" + dec + ".csv", function(data) {
                
                graph = {"nodes":[], "links":[]};
                
                data.forEach(function(d) {
                    graph.nodes.push({"name": d.source, "count": +d.scount, "type":d.sfield, "abbrev":d.slast});
                    graph.nodes.push({"name": d.target, "count": +d.tcount, "type":d.tfield, "abbrev":d.tlast});
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
                        .style("stroke-width", function(d) {return d.value;});
                
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
                    .style("font-size","12px");
                    
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
                {name:"Authors", value:authors}, 
                {name:"Density", value:density},
                {name:"Components", value:components}];
            
            table.append("text")
                .text("Network Measures")
                    .attr("x",10)
                    .attr("y",20)
                    .attr('font-family', 'sans-serif')
                    .attr('fill', color('info'))
                    .attr('font-size', '15px');
            table.append("g").selectAll("text")
                .data(stats).enter()
                .append('text')
                    .text(function(d) {return d.name + ": " + d.value;})
                    .attr("x",20)
                    .attr("y", function(d,i) {return 20*i + 40;})
                    .attr('font-family', 'sans-serif')
                    .attr('fill', color('info'))
                    .attr('font-size', '15px');
                    
            table.append("text")
                .text("Largest Connected Component:")
                .attr("x",200)
                .attr("y",20)
                .attr("fill",color("info"))
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(comp1).enter()
                .append("text")
                    .text(function(d) {return d.text;})
                    .attr("x",function(d) {return indent(d.type);})
                    .attr("y", function(d,i) {return 15*i + 40;})
                    .attr("fill", (function(d) {return color(d.type);}))
                    .attr("font-size","12px");
                    
            table.append("text")
                .text("Other Components:")
                .attr("x",500)
                .attr("y",20)
                .attr("fill",color("info"))
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(comps).enter()
                .append("text")
                    .text(function(d) {return d.text;})
                    .attr("x",function(d) {return indent(d.type) + 300;})
                    .attr("y", function(d,i) {return 15*i + 40;})
                    .attr("fill", (function(d) {return color(d.type);}))
                    .attr("font-size","12px");
            
            legend.append("text")
                .text("Legend")
                .attr("x",5)
                .attr("y",5)
                .style("fill","#696969")
                .style("font-size","12px");
            legend.append("text")
                .text("Mouse over node for full name.")
                .attr("x",5)
                .attr("y",18)
                .style("fill","#696969")
                .style("font-size","12px");
            legend.append("text")
                .text("Click and drag node to reposition.")
                .attr("x",5)
                .attr("y",30)
                .style("fill","#696969")
                .style("font-size","12px");
            legend.append("g").selectAll("rect")
                .data(leg).enter()
                .append("rect")
                    .attr("x",10)
                    .attr("y",function(d,i) {return 20*i + 38;})
                    .attr("width",15)
                    .attr("height",15)
                    .style("fill",function(d) {return color(d.abb);});
            legend.append("g").selectAll("text")
                .data(leg).enter()
                .append("text")
                    .text(function(d) {return d.lab;})
                    .attr("x",30)
                    .attr("y",function(d,i) {return 20*i + 50;})
                    .style("fill","#696969")
                    .style("font-size","12px");
        
-->