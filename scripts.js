var todo = [];
var codi = [1];

class Task {

    constructor(_textp, _codip) {

        this._text = _textp;
    }}

function guardar() {
    try {
        let dato = document.getElementById("text1").value;
        if (dato == "" || dato == null) {

            throw "No hi ha text que afegir"
        }
        else {
            document.getElementById("text1").value = null;

            console.log(todo);
            todo.push(dato);

            mostrarToDo();
            guardarlocal()
        }

    } catch (err) {
        alert(err);
    }

}
var a;

function mostrarToDo() {
    var node;
    
    document.getElementById('listaToDo').innerHTML = '';

    todo.forEach(element => {
        node = document.createElement('li');

        a = document.createElement('input');
        a.type = "checkbox";
        a.className = "hola"
        node.appendChild(document.createTextNode(element + " "));
        node.appendChild(a)
       
        document.querySelector('#listaToDo').appendChild(node);
        
    });
    

    
}
let cont = 0
var v = document.getElementById('val')
var checks = document.querySelectorAll('.hola')
v.addEventListener('click',function(){
    checks.forEach((e)=>{
        
        if (e.checked == true) {
            console.log("Chequeado")
           
        }else{
            console.log("ningun elemento seleccionado")
        }
    })
})

function eliminarToDo() {
    let num = parseInt(document.getElementById("text1").value - 1);
    
    
    todo.splice(num, 1);
    mostrarToDo();
    guardarlocal()
}


function guardarlocal() {

    localStorage.setItem('llista', JSON.stringify(todo));

}


function carregarlocal() {
    if (typeof (Storage) !== "undefined") {

        if (localStorage.llista) {
                var data = [] = JSON.parse(localStorage.getItem('llista'));
                data.forEach(element => {
                todo.push(new Task(element._text, element._codi));
                });
                
            if (localStorage.id)
                codi = JSON.parse(localStorage.getItem('id'));

            mostrarToDo();
        }
    }

    else {
        alert("Sorry, your browser does not support web storage...");
    }
}

document.getElementById("text1").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btng").click();
    }
})

var input = document.getElementById("text1");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btng").click();
    }
});
