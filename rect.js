async function OnRectangle() {
        console.log("Onrect")
        document.getElementById("circDivId").innerHTML = "";
        let svg = d3.select("#rectDivId")
                .append("svg")
                .attr("width", 300)
                .attr("height", 300);

        svg.append("rect")
                .attr("width", 20)
                .attr("height", 20)
                .attr("x", 50)
                .attr("y", 50);


                var data = await d3.csv("netflix_Data_Normalized.csv");
                try {
                    var showCounts = {};
                    data.forEach(function (d) {
                        var rating = d.rating;
                        if (showCounts[rating]) {
                            showCounts[rating]++;
                        } else {
                            showCounts[rating] = 1;
                        }            
                    });
                    console.log(Object.keys(showCounts));
                    console.log(Object.values(showCounts));
                 
                    var width = 500
                    var height = 500
                    var margin = 50
                    var x = d3.scaleLinear().domain([0, 19]).range([0, width])
                    var y = d3.scaleLinear().domain([0, 3500]).range([height, 0])
                    var x1 = d3.scaleBand().domain([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]).range([0, width]).padding(0.1)
                    d3.select("svg")
                        .append("g")
                        .attr("transform", "translate(50,50)")
                        .selectAll("rect")
                        .data(Object.values(showCounts))
                        .enter()
                        .append("rect")
                        .attr("x", function (d, i) { return x1(i);})
                        .attr("y", function (d) {  return y(d); })
                        .attr("width", 33.3333)
                        .attr("height", function (d) { return (height - y(d)); })
                        .attr("fill", "steelblue");     
            
                    const xAxis = d3.axisBottom(x1)
                        .tickValues([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])
                        .tickFormat(d3.format("~s"));            
            
                    const yAxis = d3.axisLeft(y)
                        .tickValues([500, 1000, 1500, 2000,2500, 3000, 3500, 4000,4500,5000])
                        .tickFormat(d3.format("~s"));
            
            
                    d3.select("svg")
                        .append("g")
                        .attr("transform", "translate(50,50)")
                        .call(yAxis);
            
                    d3.select("svg")
                        .append("g")
                        .attr("transform", "translate(50,550)")
                        .call(xAxis);
            
            
                        
            
                }
                catch (error) {
                    console.error('Error loading CSV:', error);
                }
}