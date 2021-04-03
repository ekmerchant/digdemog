<!--
            var width = 1000;
            var height = 500;
            if (dec > 1960) {
                height = 1000;
            }
            
            var color = d3.scale.ordinal()
                .domain(["demography","sociology","economics","history","geography","statistics","pubh","famplan","general","eugenics","author"])
                .range(["#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#a6cee3","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#696969"]);
                
            var force = d3.layout.force()
                .charge(-40)
                .linkDistance(40)
                .size([1000,height]);
                
            var svg = d3.select("#pcontent").append("svg")
                    .attr("width",width)
                    .attr("height",height);
                    
            var table = d3.select("#pcontent").append("svg")
                    .attr("height",500)
                    .attr("width",width);
  
            d3.csv("ajnet" + dec + ".csv", function(data) {
                
                graph = {"nodes":[], "links":[]};
                
                data.forEach(function(d) {
                    graph.nodes.push({"name": d.source, "count": +d.scount, "type":"author"});
                    graph.nodes.push({"name": d.target, "count": (+d.tcount)/2, "type":d.field});
                    graph.links.push({"source": d.source, "target": d.target, "value": 1});
                });
                
                var nodesmap = d3.nest()
                    .key(function(d) {return d.name;})
                    .rollup(function(d) {return {"name":d[0].name, "count":d[0].count, "type":d[0].type};})
                    .map(graph.nodes);
                
                graph.nodes = d3.keys(d3.nest()
                    .key(function(d){return d.name;})
                    .map(graph.nodes));
                graph.links.forEach(function(d,i){
                    graph.links[i].source = graph.nodes.indexOf(graph.links[i].source);
                    graph.links[i].target = graph.nodes.indexOf(graph.links[i].target);
                });
                
                graph.nodes.forEach(function(d,i) {graph.nodes[i] = {"name":nodesmap[d].name, "count":nodesmap[d].count, "type":nodesmap[d].type};})    
                    
                force.nodes(graph.nodes)
                force.links(graph.links)
                force.start();
                
                var link = svg.selectAll(".link")
                    .data(graph.links)
                    .enter().append("line")
                        .attr("class","link")
                        .style("stroke-width", "2px");
                
                var node = svg.selectAll(".node")
                    .data(graph.nodes)
                    .enter().append("circle")
                        .attr("class","node")
                        .attr("r", function(d) {return 2*Math.sqrt(d.count);})
                        .style("fill", function(d) {return color(d.type);})
                        .call(force.drag);
                
                node.append("title")
                    .text(function(d) {return d.name;});
                    
                force.on("tick", function() {
                    link.attr("x1", function(d) {return d.source.x;})
                        .attr("y1", function(d) {return d.source.y;})
                        .attr("x2", function(d) {return d.target.x;})
                        .attr("y2", function(d) {return d.target.y;})
                    node.attr("cx", function(d) {return d.x;})
                        .attr("cy", function(d) {return d.y;});
                    });
            });
            
            var stats = [
                {name:"Articles", value:narticles}, 
                {name:"Journals", value:njournals},
                {name:"Authors", value:nauthors},
                {name:"Density", value:density}];
            
            table.append("g").selectAll("text")
                .data(stats).enter()
                .append('text')
                    .text(function(d) {return d.name + ": " + d.value;})
                    .attr("x",10)
                    .attr("y", function(d,i) {return 20*i + 20;})
                    .attr('font-family', 'sans-serif')
                    .attr('fill', '#696969')
                    .attr('font-size', '15px');
                
            
            table.append("text")
                .text("Demography Journals:")
                .attr("x",120)
                .attr("y",20)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(demjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",120)
                    .attr("y", function(d,i) {return 15*i + 35;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("demography"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("Sociology Journals:")
                .attr("x",120)
                .attr("y",175)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(socjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",120)
                    .attr("y", function(d,i) {return 15*i + 190;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("sociology"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("Economics Journals:")
                .attr("x",120)
                .attr("y",240)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(econjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",120)
                    .attr("y", function(d,i) {return 15*i + 255;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("economics"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("History Journals:")
                .attr("x",450)
                .attr("y",20)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(histjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",450)
                    .attr("y", function(d,i) {return 15*i + 35;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("history"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("Geography Journals:")
                .attr("x",120)
                .attr("y",305)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(geojournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",120)
                    .attr("y", function(d,i) {return 15*i + 320;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("geography"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("Statistics Journals:")
                .attr("x",120)
                .attr("y",355)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(statjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",120)
                    .attr("y", function(d,i) {return 15*i + 370;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("statistics"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("General Journals:")
                .attr("x",450)
                .attr("y",130)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(genjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",450)
                    .attr("y", function(d,i) {return 15*i + 145;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("general"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("Eugenics Journals:")
                .attr("x",450)
                .attr("y",210)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(eujournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",450)
                    .attr("y", function(d,i) {return 15*i + 225;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("eugenics"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("Family Planning Journals:")
                .attr("x",450)
                .attr("y",335)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(fampjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",450)
                    .attr("y", function(d,i) {return 15*i + 350;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("famplan"))
                    .attr("font-size","15px");
                    
            table.append("text")
                .text("Public Health Journals:")
                .attr("x",450)
                .attr("y",405)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(phjournals).enter()
                .append("text")
                    .text(function(d) {return d.title + ": " + d.number;})
                    .attr("x",450)
                    .attr("y", function(d,i) {return 15*i + 420;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", color("pubh"))
                    .attr("font-size","15px");
            
            table.append("text")
                .text("Author Centralization: " + acentralization)
                .attr("x",700)
                .attr("y",20)
                .attr("fill","#696969")
                .attr("font-family","sans-serif")
                .attr("font-size","15px");
            table.append("g").selectAll("text")
                .data(cauthors).enter()
                .append("text")
                    .text(function(d) {return d.name + ": " + d.number;})
                    .attr("x",700)
                    .attr("y", function(d,i) {return 15*i + 35;})
                    .attr("font-family", "sans-serif")
                    .attr("fill", function(d) {return color(d.field);})
                    .attr("font-size","15px");
                    
            table.append("text")
                .text('Journal Centralization: ' + jcentralization)
                .attr('x',700)
                .attr('y',200)
                .attr('fill', '#696969')
                .attr('font-family','sans-serif')
                .attr('font-size','15px');
            table.append('g').selectAll('text')
                .data(cjournals).enter()
                .append('text')
                    .text(function(d,i) {return d.name + ": " + d.number;})
                    .attr('x',700)
                    .attr('y', function(d,i) {return 15*i + 215})
                    .attr('font-family', 'sans-serif')
                    .attr('fill', function(d) {return color(d.field);})
                    .attr('font-size', '15px');
-->