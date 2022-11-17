
var backlog = [];

function guardar() {
  backlog.push(document.getElementById("text1").value);  
    
    mostrar2();
    }

function mostrar2(){
    var node = document.createElement('li');

    backlog.forEach(element => {
        node = document.createElement('li');
        node.appendChild(document.createTextNode(element));

       });
       document.querySelector('ol').appendChild(node);
}