import Task from "./task"

var todo = [];
var ID = [];
carregarlocal();



function guardarToDo() {
    try{
        let dato = document.getElementById("text1").value;
        if(dato == "" || dato == null){throw "No hi ha text que afegir"}
        else{
            document.getElementById("text1").value = null; 

            tasca = new Task(dato)
            todo.push(dato); 
            
            mostrarToDo();
            guardarlocal();
        }
        
    }catch(err){
        alert(err);
    }

}

function mostrarToDo(){
var node;

document.getElementById('listaToDo').innerHTML = '';

    todo.forEach(element => {
       node = document.createElement('li');
       
        node.appendChild(document.createTextNode(element));

        document.querySelector('#listaToDo').appendChild(node);
    });
}


 function eliminarToDo() {
    let num = parseInt(document.getElementById("text1").value -1);
            todo.splice(num,1);
    mostrarToDo();
    guardarlocal();
}


function guardarlocal(){

            localStorage.setItem('llista', JSON.stringify(todo));
            localStorage.setItem('ID', JSON.stringify(ID));

}


function carregarlocal(){
    if(typeof(Storage) !== "undefined") {

        if (localStorage.llista) {
            todo = JSON.parse(localStorage.getItem('llista'));
            if(localStorage.ID)
            ID = JSON.parse(localStorage.getItem('ID'));

            mostrarToDo();
        } 

} else {
alert("Sorry, your browser does not support web storage...");

}



}

let input = document.getElementById("text1");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
      document.getElementById("btng").click();
    }
  });