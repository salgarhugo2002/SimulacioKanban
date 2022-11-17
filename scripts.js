
var backlog = [];

function guardar() {
  backlog.push(document.getElementById("text1").value);  
    
    mostrar2();
    }


          
function mostrar() {
    document.getElementById("textbacklog").innerHTML = "<ol type='I'>";
   backlog.forEach(element => {
    document.getElementById("textbacklog").innerHTML += "<li> " + element + "</li>";
   });
   document.getElementById("textbacklog").innerHTML += "</ol>";
}


function mostrar2(){
    var node = document.createElement('li');

    backlog.forEach(element => {
        node = document.createElement('li');
        node.appendChild(document.createTextNode(element));

       });
       document.querySelector('ol').appendChild(node);
}