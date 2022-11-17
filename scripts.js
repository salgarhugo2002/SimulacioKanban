var todo = [];

function guardar() {
    try{
        let dato = document.getElementById("text1").value;

        if(dato == "" || dato == null){throw "No hi ha text que afegir"}
        else{document.getElementById("text1").value = null; todo.push(dato); mostrar();}
        
    }catch(err){
        alert(err);
    }

}

function mostrar(){
    var node = document.createElement('li');

    todo.forEach(element => {
        node = document.createElement('li');
        node.appendChild(document.createTextNode(element));

    });
    document.querySelector('ol').appendChild(node);
}