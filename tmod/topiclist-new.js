<!--

var html =  '<script> x = 1' + 
            'width = 400; height = 400; margin = 50; color = "#7570b3"' +
            
            'wordScale = d3.scale.linear().domain([0,1]).range([5,1500]).clamp(true);' +
            
            'var xscale = d3.scale.linear().domain([1947,2010]).range([0,2*(width - margin)]);' +
                
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
                
            var direction = [{text:'<', url: "topic" + (x-1) + ".html"}, {text:"Topic " + x, url: "topic" + x + ".html"}, {text: '>', url: "topic" + (x+1) + ".html"}];
                    
            var title = d3.select("body").append("svg")
                .attr("width",width*3)
                .attr("height",100);
                    
            var ttext = title.selectAll("g")
                    .data(direction)
                    .enter()
                    .append("g:a")
                        .attr("xlink:href", function(d) {return d.url;})
                    .append("text")
                        .text(function(d) {return d.text;})
                        .attr("x", function(d,i) {return 400 + 200*i;})
                        .attr("y", 75)
                        .attr("fill","#4d4d4d")
                        .attr("font-size", "50px")
                        .attr("text-anchor","middle");

            
            var cloud = d3.select("body").append("svg")
                    .attr("width",width)
                    .attr("height",height)
                    .attr("id", "words");
            var graph = d3.select("body").append("svg")
                    .attr("width",width*2)
                    .attr("height",400)
                    .append("g")
                        .attr("id", "graph")
                        .attr("transform","translate(" + margin + "," + margin + ")");

                d3.csv("topic" + x + "graph.csv", function(data){
                    data.forEach(function(d) {
                        d.topic = d.topic;
                        d.year = +d.year;
                        d.size = +d.size;
                    });
                    
                    graph = d3.select("#graph");
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
                    cloud = d3.select("#words");
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

                    }
                })

            function citeColor(journal) {
                color = "#b3d369";
                if (journal == "Demography") {color = "#80b1d3";}
                else if (journal == "Population and Development Review") {color = "#fdb462";}
                return color;
            }
            
            var pct = d3.format("%");
            
            d3.csv("topic" + x + "docs.csv", function(data) {

                var head = d3.select("body").append("svg")
                    .attr("width", 1200)
                    .attr("height", 35);
                    
                var info = [{column: "Year", space: 100}, {column: "Citation", space: 200}, {column:"Topics", space: 1000}];
                
                var htext = head.selectAll("text")
                    .data(info)
                    .enter()
                    .append("text")
                        .text(function(d) {return d.column;})
                        .attr("x", function(d) {return d.space;})
                        .attr("y", 25)
                        .attr("fill","#4d4d4d")
                        .attr("font-size", "20px");
                
                var table = d3.select("body").append("svg")
                    .attr("width",1200)
                    .attr("height", 12000);
                
                var years = table.append("g");
                
                var yeartext = years.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                        .text(function(d) {return d.year;})
                        .attr("x", 100)
                        .attr("y", function(d,i) {return 25+ i*60;})
                        .attr("font-size","15px");
                        
                var auths = table.append("g");
                
                var authtext = auths.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                        .text(function(d) {return d.authors;})
                        .attr("x", 200)
                        .attr("y", function(d,i) {return 25 + i*60;})
                        .attr("fill", function(d) {return citeColor(d.journal);})
                        .attr("font-size","15px")
                    
                var titles = table.append("g");
                
                var titletext = titles.selectAll("text")
                    .data(data)
                    .enter()
                    .append("g:a")
                        .attr("xlink:href", function(d) {return "http://www.jstor.org/stable/" + d.doc;})
                    .append("text")
                        .text(function(d) {return d.title;})
                        .attr("x", 200)
                        .attr("y", function(d,i) {return 38 + i*60;})
                        .attr("fill", function(d) {return citeColor(d.journal);})
                        .attr("font-size", "12px");
                        
                var journ = table.append("g");
                
                var jtext = journ.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                        .text(function(d) {return d.journal;})
                        .attr("x",200)
                        .attr("y",function(d,i) {return 50 + 60*i;})
                        .attr("fill", function(d) {return citeColor(d.journal);})
                        .attr("font-size", "12px");
                        
                var t1 = table.append("g");
                
                var t1txt = t1.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                        .text(function(d) {return d.firsttop + ": " + pct(d.firstpct);})
                        .attr("x",1000)
                        .attr("y",function(d,i) {return 25 + 60*i;})
                        .attr("font-size", "15px");
  
                var t2 = table.append("g");
                
                var t2txt = t2.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                        .text(function(d) {return d.secondtop + ": " + pct(d.secondpct);})
                        .attr("x",1000)
                        .attr("y",function(d,i) {return 38 + 60*i;})
                        .attr("font-size", "12px");
                        
                var t3 = table.append("g");
                
                var t3txt = t3.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                        .text(function(d) {return d.thirdtop + ": " + pct(d.thirdpct);})
                        .attr("x",1000)
                        .attr("y",function(d,i) {return 50 + 60*i;})
                        .attr("font-size", "12px");                      
            });</script>'
            
document.getElementById("pcontent").innerHTML = html;
-->