<!--
            var i = 0, width = 1000, height = 1400, padding = 50;
            
            var color = d3.scale.ordinal()
                .domain(["Columbia","Cornell","Chicago","Wisconsin","Michigan","Penn", "Minnesota","Princeton","Harvard", "North Carolina","Berkeley","other"])
                .range(["#66c2a5","#fc8d62","#8da0cb","#ff3300","#a6d854","#ffd92f","#ff7f00","#1f78b4","#cab2d6","#b15928","#6a3d9a","#696969"]);
                
            var leg = [{inst:"Berkeley",name:"UC Berkeley"},
                       {inst:"Chicago",name:"University of Chicago"},
                       {inst:"Columbia", name:"Columbia University"},
                       {inst:"Cornell",name:"Cornell University"},
                       {inst:"Harvard",name:"Harvard University"},
                       {inst:"Michigan",name:"University of Michigan"},
                       {inst:"Minnesota",name:"University of Minnesota"},
                       {inst:"North Carolina",name:"University of North Carolina"},
                       {inst:"Penn",name:"University of Pennsylvania"},
                       {inst:"Princeton",name:"Princeton University"},
                       {inst:"Wisconsin",name:"University of Wisconsin"},
                       {inst:"other",name:"Other or Unknown"}];
            
            var timeline = d3.scale.linear()
                    .domain([1860,1990])
                    .range([0,width-padding]);
                    
            makeAxis();
            
            //Fairchild and Dublin
            for(j=0;j<2;j++){
                root = paatree[j];
                update(root,15,j);
            }
            //Giddings
            j = 16;
            root = paatree[j];
            update(root,700,j);
            
            //Mayo-Smith
            j = 19;
            root = paatree[j];
            update(root,150,j)
            
            makeAxis();
            
            //Hutchinson
            j = 15;
            root = paatree[j];
            update(root,15,j);
            
            //Lotka, Truesdell, Whelpton, Reed
            for(j=2;j<6;j++){
                root = paatree[j];
                update(root,15,j);
            }
            
           //McKenzie and Parsons
            for (j=17;j<19;j++) {
                root = paatree[j]
                update(root,100,j)
            }
            
             //Thomas
            j = 7;
            root = paatree[j];
            update(root,150,j);
            
            //Spengler
            j = 6;
            root = paatree[j];
            update(root,15,j);
            
            //Hamilton and Schmid
            for(j=8;j<10;j++){
                root = paatree[j];
                update(root,15,j);
            }
            
            //Van de Walle to Morgan
            for(j=10;j<15;j++){
                root = paatree[j];
                update(root,15,j);
            }
            
            makeAxis();
 
            function makeAxis() {
                var axis = d3.svg.axis()
                    .scale(timeline)
                    .orient("bottom")
                    .tickFormat(d3.format(".0f"));
                d3.select("#pcontent").append("svg")
                    .attr("width",width)
                    .attr("height",25)
                    .attr("transform","translate(10,0)")
                    .attr("class","axis")
                    .call(axis);
            }
            
            function update(source,height,id) {
                
                var tree = d3.layout.tree()
                    .size([height,width]);
                
                var diagonal = d3.svg.diagonal()
                    .projection(function(d) {return [d.y,d.x];});    
                
                var svg = d3.select("#pcontent").append("svg")
                    .attr("width",width)
                    .attr("height",height)
                    .attr("id","tree" + j)
                    .append("g")
                        .attr("transform","translate(10,0)");
                    
                var nodes = tree.nodes(root).reverse(), links = tree.links(nodes);
                nodes.forEach(function(d) {d.y = timeline(d.year); if (d.depth>2) {d.x = d.x + 10;}});
                
                var node = svg.selectAll("g.node")
                    .data(nodes, function(d) {return d.id || (d.id = ++i)});
                    
                var nodeEnter = node.enter().append("g")
                    .attr("class","node")
                    .attr("transform", function(d) {
                        return "translate(" + d.y + "," + d.x + ")";});
                    
                nodeEnter.append("circle")
                    .attr("r",5)
                    .attr("fill",function(d) {return color(d.inst);})
                    .attr("class","node");
                    
                nodeEnter.append("text")
                    .attr("x", function(d) {return d.children || d._children ? -7 : 7; })
                    .attr("dy",".35em")
                    .attr("text-anchor", function(d) {return d.children || d._children ? "end" : "start";})
                    .text(function(d) {return d.name;})
            
                var link = svg.selectAll("path.link")
                    .data(links, function(d) {return d.target.id;});
                
                link.enter().insert("path","g")
                    .attr("class","link")
                    .style("stroke",function(d) {return color(d.target.inst);})
                    .attr("d",diagonal);
                
            }
            
            var legend = d3.select("#tree16")
                .append("g")
                .attr("transform","translate(800,-5)")
                .attr("class","legend");
                
            var leglabel = d3.select("#tree1")
                .append("g")
                .attr("transform","translate(800,5)")
                .attr("class","legend");
                
                leglabel.append("text")
                    .text("Legend")
                    .attr("x",20)
                    .attr("y",5);
                legend.append("g").selectAll("rect")
                    .data(leg).enter()
                    .append("rect")
                    .attr("x",25)
                    .attr("y",function(d,i) {return 5 + i*20;})
                    .attr("width",10)
                    .attr("height",10)
                    .style("fill",function(d) {return color(d.inst);});
                legend.append("g").selectAll("text")
                    .data(leg).enter()
                    .append("text")
                    .attr("x",40)
                    .attr("y",function(d,i) {return 15 + i*20;})
                    .text(function(d) {return d.name;});
                
-->