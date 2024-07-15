function OnCircle() {
    console.log("Oncircle")

    document.getElementById("rectDivId").innerHTML = "";
    let svg = d3.select("#circDivId")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    svg.append("circle")
        .attr("r", 20)
        .attr("cx", 150)
        .attr("cy", 150);

}