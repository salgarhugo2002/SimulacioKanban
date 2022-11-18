
var todo = [];

function guardar() {
    try{
        let dato = document.getElementById("text1").value;
        
        if(dato == "" || dato == null)
        {
            throw "No hi ha text que afegir"
        }
        else
        {
            //document.getElementById("text1").value = null;
            todo.push(dato); 
             mostrarToDo();
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
}
