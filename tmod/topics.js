<!--

            width = 300;
            height = 400;
            margin = 50;
            
            color = "#696969"
            
            wordScale = d3.scale.linear().domain([0,1]).range([5,1500]).clamp(true);
            
            var xscale = d3.scale.linear()
                .domain([1947,2010])
                .range([0,2*(width - margin)]);
                
            var yscale = d3.scale.linear()
                .domain([0,.4])
                .range([height - 2*margin,0]);
                
            var xAxis = d3.svg.axis()
                .scale(xscale)
                .orient("bottom")
                .ticks(13)
                .tickFormat(d3.format(".0f"));
                
            var yAxis = d3.svg.axis()
                .scale(yscale)
                .orient("left");
                
            var line = d3.svg.line()
                .x(function(d) {return xscale(d.year);})
                .y(function (d) {return yscale(d.size);});
           
            for (x=start; x<(end+1); x++) {
                var svg = d3.select("#pcontent").append("svg")
                    .attr("width",1000)
                    .attr("height",height)
                var cloud = svg.append("g")
                    .attr("width",width)
                    .attr("height",height)
                    .attr("id", "words" + x);
                var graph = svg.append("g")
                    .attr("width",width*2)
                    .attr("height",400)
                    .attr("id", "graph" + x)
                    .attr("transform","translate(" + (width + margin*3) + "," + margin + ")");
            }
            
            for(x=start; x<(end+1); x++){
                d3.csv("topic" + x + "graph.csv", function(data){
                    data.forEach(function(d) {
                        d.topic = d.topic;
                        d.year = +d.year;
                        d.size = +d.size;
                    });
                    
                    graph = d3.select("#graph" + data[1].topic);
                    graph.append("g")
                        .attr("class","x axis")
                        .attr("transform", "translate(0," + (height - 2*margin) + ")")
                        .call(xAxis);
                    
                    graph.append("g")
                        .attr("class","y axis")
                        .call(yAxis)
                        .append("text")
                            .attr("transform", "rotate(-90)")
                            .attr("y",5)
                            .attr("dy",".5em")
                            .style("text-anchor", "end")
                            .text("Proportion of Corpus (by article)");
                            
                    graph.append("path")
                        .datum(data)
                        .attr("class","line")
                        .attr("d", line)
                        .style("stroke-width","5px")
                        .style("stroke", color)
                        .style("fill","none");
                });
                
            
                d3.csv("topic" + x + "words.csv", function(data) {
                    d3.layout.cloud().size([350, 350])
                    .words(data)
                    .rotate(function() {return ~~(Math.random()*2)*90;})
                    .fontSize(function(d) {return wordScale(d.size);})
                    .on("end", draw)
                    .start();
                        
                function draw(words) {
                    cloud = d3.select("#words" + data[1].topic);
                    cloud.append("g")
                        .attr("transform", "translate(200,220)")
                        .selectAll("text")
                        .data(words).enter()
                            .append("text")
                            .style("font-size", function(d) {return d.size + "px";})
                            .style("fill", color)
                            .attr("text-anchor","middle")
                            .attr("transform", function(d){return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";})
                            .text(function(d) {return d.text;});
                                
                        cloud.append("g:a")
                            .attr("xlink:href", "topic" + data[1].topic + ".html")
                            .append("text")
                                .data(words)
                                .style("font-size", 25)
                                .style("font-weight", 500)
                                .style("fill","#A0522D")
                                .attr("x",300)
                                .attr("y",25)
                                .text("Topic " + data[1].topic);
                    }
                })
            };
            
-->