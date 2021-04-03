<!--

var navs =[
            {level:10,  link:"../index.html",      		text:"Introduction"},
            {level:30,  link:"../paa/paa.html",        	text:"Population Association of America"},
            {level:50,  link:"../paa/paafields.html",  	text:"PAA Fields and Affiliations"},
            {level:50,  link:"../paa/paatree.html",    	text:"PAA Intellectual Genealogy"},
            {level:50,  link:"../paa/paaexp.html",     	text:"Discussion of PAA Analysis"},
            {level:30,  link:"../tmod/topicmod.html",   text:"Topics in Population Science"},
	    	{level:50,  link:"../tmod/alltopics.html",  text:"All Topics"},
            {level:50,  link:"../tmod/topic1.html",     text:"Articles by Topic"},
            {level:50,  link:"../tmod/topjournal.html", text:"Topics by Journal"},
            {level:50,  link:"../tmodtopicexp.html",   	text:"Discussion of Topic Analysis"},
            {level:30,  link:"networks.html",   		text:"Networks in Population Science"},
            {level:50,  link:"jnet1925.html",   		text:"Journal Networks"},
            {level:50,  link:"anet1925.html",   		text:"Author Networks"},
            {level:50,  link:"netexp.html",     		text:"Discussion of Network Analysis"}
];

var nav = d3.select("#nav").append("svg")
    .attr("class","nav")
    .attr("height",300)
    .attr("width",300);
                
var navigate = nav.selectAll("text")
        .data(navs).enter()
        .append("g:a")
            .attr("xlink:href", function(d) {return d.link;})
            .append("text")
                .text(function(d) {return d.text;})
                .attr("x",function(d) {return d.level;})
                .attr("y",function(d,i) {return i*20 + 20;})
                .style("fill","#A0522D");
-->