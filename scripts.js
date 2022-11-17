
var todo = [];

function guardar() {
  todo.push(document.getElementById("text1").value);  
    
    }

function mostrar(){
    var node = document.createElement('li');

    todo.forEach(element => {
        node = document.createElement('li');
        node.appendChild(document.createTextNode(element));

       });
       document.querySelector('ol').appendChild(node);
}