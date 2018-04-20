//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.


d3.csv("https://raw.githubusercontent.com/linearaya/Conservacion-Especies/master/data/conservacion.csv").then(function(data) {
var w = 450;
var h = 450;
var svgContainer = d3.select(".dataviz-primera")
 	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#536d33");
    
console.log(data);

    var planta = 0; var animal = 0;
    
for (var a = 0; a < data.length; a++) {
    if (data[a].reino == "Plantae"){
      planta++;
    } else {
      animal++
    }
  }
    
    console.log(planta); console.log(animal)
document.getElementById("t-reinos").innerHTML = ("Del total de " + data.length + " especies de flora y fauna actualmente en peligro en Chile, existen " + planta + " especies del Reino Vegetal y " + animal + " especies del Reino Animal.");

 svgContainer.append("circle")
 .attr("cx", function(d, i) { return i * (w/3) + 50; })
 .attr("cy",function(d) { return h/2; })
 .attr("r", 803/5,450/3,353/3)
 .attr("fill","#a6d354");

 svgContainer.append("circle")
 .attr("cx", function(d, i) { return i * (w/3) + 50; })
 .attr("cy",function(d) { return h/2; })
 .attr("r", 803/5,450/3,353/3)
 .attr("fill","#a6d354");

    
})
    
