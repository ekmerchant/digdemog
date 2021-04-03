<!--
           
           
            width = 900; height = 300; margin = 50; color = "#696969";                              
                                                                                                
                
            var topcolor = d3.scale.ordinal()
                .range(["#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#a6cee3","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#d95f0e","#80cdc1"])
                .domain(["social","migration","gsouth","survey","quant","mortality","fertility","dtrans","fam","devel","theory","biodemog"]);
                
            var leg = [
                    {topic:"migration",lab:"Migration"},
                    {topic:"fertility",lab:"Fertility"},
                    {topic:"mortality",lab:"Mortality"},
                    {topic:"quant",lab:"Quantitative Analysis"},
                    {topic:"survey",lab:"Surveys and Censuses"},
                    {topic:"theory",lab:"Theory"},
                    {topic:"fam",lab:"Family Structure"},
                    {topic:"dtrans",lab:"Demographic Transition"},
                    {topic:"social",lab:"Social Change and Inequality"},
                    {topic:"gsouth",lab:"Global South"},
                    {topic:"devel",lab:"Economic Development"},
                    {topic:"biodemog",lab:"Eugenics and Biodemography"}
                    ];
            
            var bisectDate = d3.bisector(function(d) {return d.year;}).left;
            var formatValue = d3.format(",.2f");
            
            
            var xscale = d3.scale.linear()
                .domain([1948,2010])
                .range([0,width-200]);       
                                                                                                    
            var yscale = d3.scale.linear()
                .domain([1,0])
                .range([0,height]);                                                      
                                                                                                    
            var xAxis = d3.svg.axis()                                                               
                .scale(xscale)                                                                      
                .orient("bottom")                                                                   
                .ticks(13)                                                                          
                .tickFormat(d3.format(".0f"));                                                      
                                                                                                    
            var yAxis = d3.svg.axis()                                                               
                .scale(yscale)                                                                      
                .orient("left");
                
                
            var aarea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(height)
                .y1(function(d) {return yscale(d.a);});
               
            var barea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a);})
                .y1(function(d) {return yscale(d.a + d.b);});
                
            var carea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b);})
                .y1(function(d) {return yscale(d.a + d.b + d.c);});
                
            var darea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d);});
                
            var earea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e);});
                
            var farea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f);});
                
            var garea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g);});
                
            var harea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h);});
                
            var karea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h + d.k);});
                
            var larea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h + d.k);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h + d.k + d.l);});
                
            var marea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h + d.k + d.l);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h + d.k + d.l + d.m);});
                
            var parea = d3.svg.area()
                .x(function(d) {return xscale(d.year);})
                .y0(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h + d.k + d.l + d.m);})
                .y1(function(d) {return yscale(d.a + d.b + d.c + d.d + d.e + d.f + d.g + d.h + d.k + d.l + d.m + d.p);});
                
            var stack = d3.layout.stack()
                .values(function(d) {return d.values;});                                                                                                                                                                                                                                                                                                                   
                                                                                                    
                
                var psgraph = d3.select("#pcontent").append("svg")                                             
                    .attr("width",width + margin*2)                                                          
                    .attr("height",height + margin*2)                                                             
                    .append("g");
                        
                var pslegend = psgraph.append("g")
                    .attr("height",height)
                    .attr("width",width)
                    .attr("transform","translate(0," + margin + ")");
                    
                pslegend.append("g").selectAll("rect")
                    .data(leg).enter()
                    .append("rect")
                    .attr("height",15)
                    .attr("width",15)
                    .attr("x",margin/2)
                    .attr("y",function(d,i) {return 35 + 20*i;})
                    .style("fill",function(d) {return topcolor(d.topic);});
                
                pslegend.append("text")
                    .text("Legend")
                    .attr("x", margin/2)
                    .attr('y',25)
                    .style("fill",color)
                    .style("font-size","12px");
                   
                pslegend.append("g").selectAll("text")
                    .data(leg).enter()
                    .append("text")
                    .text(function(d) {return d.lab;})
                    .attr("x",margin/2 + 20)
                    .attr("y",function(d,i) {return 45 + 20*i;})
                    .style("fill",color)
                    .style("font-size","12px");
            
                d3.csv("ps.csv", function(data){
                    data.forEach(function(d) {
                        d.year = +d.year;
                        d.a = +d.migration;
                        d.b = +d.mortality;
                        d.c = +d.fertility;
                        d.d = +d.theory;
                        d.e = +d.dtrans;
                        d.f = +d.quant;
                        d.g = +d.survey;
                        d.h = +d.fam;
                        d.k = +d.social;
                        d.l = +d.gsouth;
                        d.m = +d.biodemog;
                        d.p = +d.devel;
                    });
                    
                    var psbrowser = psgraph.selectAll("dbrowser")
                        .data(data)
                        .enter()
                        .append("g")
                            .attr("class","browser")
                            .attr("transform","translate(275," + margin + ")");
                    
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return aarea(d);})
                        .style("fill", function(d) {return topcolor("migration");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return barea(d);})
                        .style("fill", function(d) {return topcolor("mortality");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return carea(d);})
                        .style("fill", function(d) {return topcolor("fertility");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return darea(d);})
                        .style("fill", function(d) {return topcolor("theory");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return earea(d);})
                        .style("fill", function(d) {return topcolor("dtrans");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return farea(d);})
                        .style("fill", function(d) {return topcolor("quant");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return garea(d);})
                        .style("fill", function(d) {return topcolor("survey");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return harea(d);})
                        .style("fill", function(d) {return topcolor("fam");});
                       
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return karea(d);})
                        .style("fill", function(d) {return topcolor("social");});
                      
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return larea(d);})
                        .style("fill", function(d) {return topcolor("gsouth");});
                        
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return marea(d);})
                        .style("fill", function(d) {return topcolor("biodemog");});
                       
                    psbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return parea(d);})
                        .style("fill", function(d) {return topcolor("devel");});
                                                
                    psgraph.append("g")
                        .datum(data)
                        .attr("class","x axis")                                                     
                        .attr("transform", "translate(275," + (height + margin) + ")")              
                        .call(xAxis);                                                               
                                                                                                    
                    psgraph.append("g")                                                               
                        .attr("class","y axis")
                        .attr("transform", "translate(275," + margin + ")")
                        .call(yAxis)                                                                
                        .append("text")                                                             
                            .attr("transform", "rotate(-90)")
                            .attr("y",-40)                                                            
                            .attr("dy",".5em")                                                      
                            .style("text-anchor", "end")                                            
                            .text("Proportion of Articles (3yr moving average)");                             
                    
                    psgraph.append("text")
                        .text("Population Studies")
                        .attr("x",275)
                        .attr("y",25)
                        .style("fill",color)
                        .style("font-size","15px");
                                                                       
                });
                
                var demgraph = d3.select("#pcontent").append("svg")                                             
                    .attr("width",width + margin*2)                                                          
                    .attr("height",height + margin*2)                                                             
                    .append("g");
                        
                var demlegend = demgraph.append("g")
                    .attr("height",height)
                    .attr("width",width)
                    .attr("transform","translate(0," + margin + ")");
                    
                demlegend.append("g").selectAll("rect")
                    .data(leg).enter()
                    .append("rect")
                    .attr("height",15)
                    .attr("width",15)
                    .attr("x",margin/2)
                    .attr("y",function(d,i) {return 35 + 20*i;})
                    .style("fill",function(d) {return topcolor(d.topic);});
                
                demlegend.append("text")
                    .text("Legend")
                    .attr("x", margin/2)
                    .attr('y',25)
                    .style("fill",color)
                    .style("font-size","12px");
                   
                demlegend.append("g").selectAll("text")
                    .data(leg).enter()
                    .append("text")
                    .text(function(d) {return d.lab;})
                    .attr("x",margin/2 + 20)
                    .attr("y",function(d,i) {return 45 + 20*i;})
                    .style("fill",color)
                    .style("font-size","12px");
            
                d3.csv("dem.csv", function(data){
                    data.forEach(function(d) {
                        d.year = +d.year;
                        d.a = +d.migration;
                        d.b = +d.mortality;
                        d.c = +d.fertility;
                        d.d = +d.theory;
                        d.e = +d.dtrans;
                        d.f = +d.quant;
                        d.g = +d.survey;
                        d.h = +d.fam;
                        d.k = +d.social;
                        d.l = +d.gsouth;
                        d.m = +d.biodemog;
                        d.p = +d.devel;
                    });
                    
                    var dembrowser = demgraph.selectAll("dbrowser")
                        .data(data)
                        .enter()
                        .append("g")
                            .attr("class","browser")
                            .attr("transform","translate(275," + margin + ")");
                    
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return aarea(d);})
                        .style("fill", function(d) {return topcolor("migration");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return barea(d);})
                        .style("fill", function(d) {return topcolor("mortality");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return carea(d);})
                        .style("fill", function(d) {return topcolor("fertility");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return darea(d);})
                        .style("fill", function(d) {return topcolor("theory");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return earea(d);})
                        .style("fill", function(d) {return topcolor("dtrans");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return farea(d);})
                        .style("fill", function(d) {return topcolor("quant");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return garea(d);})
                        .style("fill", function(d) {return topcolor("survey");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return harea(d);})
                        .style("fill", function(d) {return topcolor("fam");});
                       
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return karea(d);})
                        .style("fill", function(d) {return topcolor("social");});
                      
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return larea(d);})
                        .style("fill", function(d) {return topcolor("gsouth");});
                        
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return marea(d);})
                        .style("fill", function(d) {return topcolor("biodemog");});
                       
                    dembrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return parea(d);})
                        .style("fill", function(d) {return topcolor("devel");});
                                                
                    demgraph.append("g")
                        .datum(data)
                        .attr("class","x axis")                                                     
                        .attr("transform", "translate(275," + (height + margin) + ")")              
                        .call(xAxis);                                                               
                                                                                                    
                    demgraph.append("g")                                                               
                        .attr("class","y axis")
                        .attr("transform", "translate(275," + margin + ")")
                        .call(yAxis)                                                                
                        .append("text")                                                             
                            .attr("transform", "rotate(-90)")
                            .attr("y",-40)                                                            
                            .attr("dy",".5em")                                                      
                            .style("text-anchor", "end")                                            
                            .text("Proportion of Articles (3yr moving average)");                             
                    
                    demgraph.append("text")
                        .text("Demography")
                        .attr("x",275)
                        .attr("y",25)
                        .style("fill",color)
                        .style("font-size","15px");
                                                                       
                });
                
                var pdrgraph = d3.select("#pcontent").append("svg")                                             
                    .attr("width",width + margin*2)                                                          
                    .attr("height",height + margin*2)                                                             
                    .append("g");
                        
                var pdrlegend = pdrgraph.append("g")
                    .attr("height",height)
                    .attr("width",width)
                    .attr("transform","translate(0," + margin + ")");
                    
                pdrlegend.append("g").selectAll("rect")
                    .data(leg).enter()
                    .append("rect")
                    .attr("height",15)
                    .attr("width",15)
                    .attr("x",margin/2)
                    .attr("y",function(d,i) {return 35 + 20*i;})
                    .style("fill",function(d) {return topcolor(d.topic);});
                
                pdrlegend.append("text")
                    .text("Legend")
                    .attr("x", margin/2)
                    .attr('y',25)
                    .style("fill",color)
                    .style("font-size","12px");
                   
                pdrlegend.append("g").selectAll("text")
                    .data(leg).enter()
                    .append("text")
                    .text(function(d) {return d.lab;})
                    .attr("x",margin/2 + 20)
                    .attr("y",function(d,i) {return 45 + 20*i;})
                    .style("fill",color)
                    .style("font-size","12px");
            
                d3.csv("pdr.csv", function(data){
                    data.forEach(function(d) {
                        d.year = +d.year;
                        d.a = +d.migration;
                        d.b = +d.mortality;
                        d.c = +d.fertility;
                        d.d = +d.theory;
                        d.e = +d.dtrans;
                        d.f = +d.quant;
                        d.g = +d.survey;
                        d.h = +d.fam;
                        d.k = +d.social;
                        d.l = +d.gsouth;
                        d.m = +d.biodemog;
                        d.p = +d.devel;
                    });
                    
                    var pdrbrowser = pdrgraph.selectAll("dbrowser")
                        .data(data)
                        .enter()
                        .append("g")
                            .attr("class","browser")
                            .attr("transform","translate(275," + margin + ")");
                    
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return aarea(d);})
                        .style("fill", function(d) {return topcolor("migration");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return barea(d);})
                        .style("fill", function(d) {return topcolor("mortality");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return carea(d);})
                        .style("fill", function(d) {return topcolor("fertility");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return darea(d);})
                        .style("fill", function(d) {return topcolor("theory");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return earea(d);})
                        .style("fill", function(d) {return topcolor("dtrans");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return farea(d);})
                        .style("fill", function(d) {return topcolor("quant");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return garea(d);})
                        .style("fill", function(d) {return topcolor("survey");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return harea(d);})
                        .style("fill", function(d) {return topcolor("fam");});
                       
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return karea(d);})
                        .style("fill", function(d) {return topcolor("social");});
                      
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return larea(d);})
                        .style("fill", function(d) {return topcolor("gsouth");});
                        
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return marea(d);})
                        .style("fill", function(d) {return topcolor("biodemog");});
                       
                    pdrbrowser.append("path")
                        .datum(data)
                        .attr("class","area") 
                        .attr("d", function(d) {return parea(d);})
                        .style("fill", function(d) {return topcolor("devel");});
                                                
                    pdrgraph.append("g")
                        .datum(data)
                        .attr("class","x axis")                                                     
                        .attr("transform", "translate(275," + (height + margin) + ")")              
                        .call(xAxis);                                                               
                                                                                                    
                    pdrgraph.append("g")                                                               
                        .attr("class","y axis")
                        .attr("transform", "translate(275," + margin + ")")
                        .call(yAxis)                                                                
                        .append("text")                                                             
                            .attr("transform", "rotate(-90)")
                            .attr("y",-40)                                                            
                            .attr("dy",".5em")                                                      
                            .style("text-anchor", "end")                                            
                            .text("Proportion of Articles (3yr moving average)");                             
                    
                    pdrgraph.append("text")
                        .text("Population and Development Review")
                        .attr("x",275)
                        .attr("y",25)
                        .style("fill",color)
                        .style("font-size","15px");
                                                                       
                });                                                                                 
                                                                                                    
-->