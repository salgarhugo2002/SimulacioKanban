
var backlog = [];

function guardar() {
    backlog.push(document.getElementById("text1").value )    
    
    mostrar();
    }


          
function mostrar() {
    document.getElementById("textbacklog").innerHTML += "<ol start='5'>"
   backlog.forEach(element => {
    document.getElementById("textbacklog").innerHTML += "<li> " + element + "</li>";
   });
   document.getElementById("textbacklog").innerHTML += "</ol>"
}
