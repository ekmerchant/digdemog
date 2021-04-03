<!--                                                                        
            width = 300; height = 300; margin = 50; color = "#696969";                              
                                                                                                    
            wordScale = d3.scale.linear()
                .domain([0,1])
                .range([5,1500])
                .clamp(true);
                
            var jcolor = d3.scale.category20()
                .range(["#6495ed","#cd853f","#808000"])
                .domain(["ps","dem","pdr"]);
                
            var leg = [{j:"ps",lab:"Population Studies"},{j:"dem",lab:"Demography"},{j:"pdr",lab:"Population and Development Review"}];
            
            var xscale = d3.scale.linear()
                .domain([1947,2010])
                .range([0,2*width]);       
                                                                                                    
            var yscale = d3.scale.linear()                                                                                                                              
                .range([height - 2*margin,0]);                                                      
                                                                                                    
            var xAxis = d3.svg.axis()                                                               
                .scale(xscale)                                                                      
                .orient("bottom")                                                                   
                .ticks(13)                                                                          
                .tickFormat(d3.format(".0f"));                                                      
                                                                                                    
            var yAxis = d3.svg.axis()                                                               
                .scale(yscale)                                                                      
                .orient("left");
                
            var psarea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(height - 2*margin)
                .y1(function(d) {return yscale(d.ps);});
                
            var demarea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.ps);})
                .y1(function(d) {return yscale(d.ps + d.dem);});
                
            var pdrarea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.ps + d.dem);})
                .y1(function(d) {return yscale(d.ps + d.dem + d.pdr);});
                
            var stack = d3.layout.stack()
                .values(function(d) {return d.values;});                                                                                                                                                                                                                                                                                                                   
                                                                                                    
            var cloud = d3.select("#pcontent").append("svg")                                             
                    .attr("width",width)                                                            
                    .attr("height",height)
                    .attr("id", "words");                                                           
            var graph = d3.select("#pcontent").append("svg")                                             
                    .attr("width",(width + margin)*2)                                                          
                    .attr("height",height)                                                             
                    .append("g")                                                                    
                        .attr("id", "graph")                                                        
                        .attr("transform","translate(" + margin + "," + margin/2 + ")");
                        
            var legend = graph.append("g")
                    .attr("height",margin)
                    .attr("width",width)
                    .attr("transform","translate(0," + margin*5 + ")");
                    
                legend.append("g").selectAll("rect")
                    .data(leg).enter()
                    .append("rect")
                    .attr("height",15)
                    .attr("width",15)
                    .attr("x",function(d,i) {return 20 + i*150;})
                    .attr("y",-15)
                    .style("fill",function(d) {return jcolor(d.j);});
                    
                legend.append("g").selectAll("text")
                    .data(leg).enter()
                    .append("text")
                    .text(function(d) {return d.lab;})
                    .attr("x",function(d,i) {return 40 + i*150;})
                    .style("fill","#696969")
                    .style("font-size","12px");
                                                                                                    
                    
                d3.csv("topic" + x + "graph2.csv", function(data){
                    data.forEach(function(d) {                                                      
                        d.topic = d.topic;                                                          
                        d.year = +d.year;                                                           
                        d.size = +d.size;
                        d.ps = +d.ps;
                        d.dem = +d.dem;
                        d.pdr = +d.pdr;
                    });
                    
                    yscale.domain([0, d3.max(data, function(d) {return d.size*1.25;})])
                    
                    var browser = graph.selectAll("dbrowser")
                        .data(data)
                        .enter()
                        .append("g")
                            .attr("class","browser");
                    
                    browser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return psarea(d);})
                        .style("fill", function(d) {return jcolor("ps");});
                        
                    browser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return demarea(d);})
                        .style("fill", function(d) {return jcolor("dem");});
                        
                    browser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return pdrarea(d);})
                        .style("fill", function(d) {return jcolor("pdr");});
                                                                        
                    graph.append("g")
                        .datum(data)
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
                            .text("Articles");                             
                                                                                                    
                                                                       
                });                                                                                 
                                                                                                    
                d3.csv("topic" + x + "words.csv", function(data) {                                  
                    d3.layout.cloud().size([width, width])                                              
                    .words(data)                                                                    
                    .rotate(function() {return ~~(Math.random()*2)*90;})                            
                    .fontSize(function(d) {return wordScale(d.size);})                              
                    .on("end", draw)                                                                
                    .start();                                                                       
                                                                                                    
                function draw(words) {                                                              
                    cloud = d3.select("#words");                                                    
                    cloud.append("g")
                        .attr("transform", "translate(150,150)")
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
                color = "#6495ed";                                                                  
                if (journal == "Demography") {color = "#cd853f";}                                   
                else if (journal == "Population and Development Review") {color = "#808000";}       
                return color;                                                                       
            }
                                                                                                                                                                                           
            var pct = d3.format("%");                                                               
                                                                                                    
            d3.csv("topic" + x + "docs.csv", function(data) {                                       
                                                                                                    
                var head = d3.select("#pcontent").append("svg")                                          
                    .attr("width", 1000)                                                            
                    .attr("height", 35);                                                            
                                                                                                    
                var info = [{column: "Year", space: 100}, {column: "Citation", space: 200}, {column:"Topics", space: 850}];        
                                                                                                    
                var htext = head.selectAll("text")                                                  
                    .data(info)                                                                     
                    .enter()                                                                        
                    .append("text")                                                                 
                        .text(function(d) {return d.column;})                                       
                        .attr("x", function(d) {return d.space;})                                   
                        .attr("y", 25)                                                              
                        .style("fill","#696969")                                                     
                        .style("font-size", "20px");                                                 
                                                                                                    
                var table = d3.select("#pcontent").append("svg")                                         
                    .attr("width",1000)                                                             
                    .attr("height", 12000);                                                         
                                                                                                    
                var years = table.append("g");                                                      
                                                                                                    
                var yeartext = years.selectAll("text")                                              
                    .data(data)                                                                     
                    .enter()                                                                        
                    .append("text")                                                                 
                        .text(function(d) {return d.year;})                                         
                        .attr("x", 100)                                                             
                        .attr("y", function(d,i) {return 25+ i*60;})                                
                        .attr("font-size","15px")
                        .style("fill","#696969");                                                  
                                                                                                    
                var auths = table.append("g");                                                      
                                                                                                    
                var authtext = auths.selectAll("text")                                              
                    .data(data)                                                                     
                    .enter()                                                                        
                    .append("text")                                                                 
                        .text(function(d) {return d.authors;})                                      
                        .attr("x", 200)                                                             
                        .attr("y", function(d,i) {return 25 + i*60;})                               
                        .style("fill", function(d) {return citeColor(d.journal);})                   
                        .style("font-size","15px")                                                   
                                                                                                    
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
                        .style("fill", function(d) {return citeColor(d.journal);})                   
                        .style("font-size", "12px");                                                 
                                                                                                    
                var journ = table.append("g");                                                      
                                                                                                    
                var jtext = journ.selectAll("text")                                                 
                    .data(data)                                                                     
                    .enter()                                                                        
                    .append("text")                                                                 
                        .text(function(d) {return d.journal;})                                     
                        .attr("x",200)                                                              
                        .attr("y",function(d,i) {return 50 + 60*i;})                                
                        .style("fill", function(d) {return citeColor(d.journal);})                     
                        .style("font-size", "12px");                                                  
                                                                                                    
                var t1 = table.append("g");                                                         
                                                                                                    
                var t1txt = t1.selectAll("text")                                                    
                    .data(data)                                                                     
                    .enter()                                                                        
                    .append("text")                                                                 
                        .text(function(d) {return d.topic + ": " + pct(d.pct);})            
                        .attr("x",850)                                                             
                        .attr("y",function(d,i) {return 25 + 60*i;})                                
                        .style("font-size", "15px")
                        .style("fill","#696969");                                                 
                                                                                                    
                var t2 = table.append("g");                                                         
                                                                                                    
                var t2txt = t2.selectAll("text")                                                    
                    .data(data)                                                                     
                    .enter()                                                                        
                    .append("text")                                                                 
                        .text(function(d) {return d.firsttop + ": " + pct(d.firstpct);})          
                        .attr("x",850)                                                             
                        .attr("y",function(d,i) {return 38 + 60*i;})                                
                        .style("font-size", "12px")
                        .style("fill","#696969");                                                 
                                                                                                    
                var t3 = table.append("g");                                                         
                                                                                                    
                var t3txt = t3.selectAll("text")                                                    
                    .data(data)                                                                     
                    .enter()                                                                        
                    .append("text")                                                                 
                        .text(function(d) {return d.secondtop + ": " + pct(d.secondpct);})            
                        .attr("x",850)                                                             
                        .attr("y",function(d,i) {return 50 + 60*i;})                                
                        .style("font-size", "12px")
                        .style("fill","#696969");                                                 
            });
-->