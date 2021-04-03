<!--
            var width = 1000;
            var height = 500;
 
            var force = d3.layout.force()
                .linkDistance(function(d) { if (d.value == 0) {return 30;} else {return 30/(d.value);}})
                .linkStrength(function(d) {if (d.value == 0) {return 0;} else {return (d.value)/10;}})
                .charge(-60)
                .size([width,height]);
                
            var net = d3.select("#pcontent").append("svg")
                    .attr("width",width)
                    .attr("height",height);
  
            d3.csv("dem.csv", function(data) {
                
                graph = {"nodes":[], "links":[]};
                
                data.forEach(function(d) {
                    graph.nodes.push({"name": d.source, "count": +d.scount});
                    graph.nodes.push({"name": d.target, "count": +d.tcount});
                    graph.links.push({"source": d.source, "target": d.target, "value": d.weight});
                });
                
                var nodesmap = d3.nest()
                    .key(function(d) {return d.name;})
                    .rollup(function(d) {return {"name":d[0].name, "count":d[0].count};})
                    .map(graph.nodes);
                
                graph.nodes = d3.keys(d3.nest()
                    .key(function(d){return d.name;})
                    .map(graph.nodes));
                graph.links.forEach(function(d,i){
                    graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
                    graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
                });
                
                graph.nodes.forEach(function(d,i) {graph.nodes[i] = {"name":nodesmap[d].name, "count":nodesmap[d].count};})    
                    
                force.nodes(graph.nodes)
                force.links(graph.links)
                force.start();
                
                var link = net.selectAll(".link")
                    .data(graph.links)
                    .enter().append("line")
                        .attr("class","link")
                        .style("stroke-width", function(d) {return d.value*2;});
                
                var gnodes = net.selectAll("g.node")
                    .data(graph.nodes)
                    .enter()
                    .append("g")
                    .classed("gnode",true);
                    
                var node = gnodes.append("circle")
                        .attr("class","node")
                        .attr("r", function(d) {return Math.sqrt(d.count)*4;})
                        .style("fill", "steelblue")
                        .call(force.drag);
                
                var labels = gnodes.append("text")
                    .text(function(d) {return d.name;})
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
            
        
-->