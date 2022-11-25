class Task {

    constructor(_textp, _codip) {

        this._text = _textp;

       this._codi = _codip;

        //    this.data_creacio;
        //   this.data_previsio_finalitzacio;
        //   this.responsable;
        
    }

    get codi() {
        return this.codi;
    }
    set codi(codi2) {
        this.codi = codi2;
    }

    get Text() {
        return this.text;
    }
    set Text(text) {
        this.text = text;
    }

    getTask() {
        return this;
    }

    RetornText() {
        return this._text;
    }


}

  function Generarid(){
      return codi[0] =+ 1;
      }

var todo = [];
var codi = [];
carregarlocal();



function guardarToDo() {
    try {
        let dato = document.getElementById("text1").value;
        if (dato == "" || dato == null) {
            throw "No hi ha text que afegir";
        }
        else {
            document.getElementById("text1").value = null;
            console.log("avans");
           let tasca = new Task(dato, 6);
            console.log("despres");
            todo.push(tasca);

            mostrarToDo();
            guardarlocal();
        }

    } catch (err) {
        alert(err);
    }

}

function mostrarToDo() {
    console.log("mostrartodo")
    var node;

    document.getElementById('listaToDo').innerHTML = '';
    console.log(todo)

    todo.forEach(element => {
        node = document.createElement('li');

        node.appendChild(document.createTextNode(element.RetornText()));
        console.log(element)

        document.querySelector('#listaToDo').appendChild(node);
    });

}


function eliminarToDo() {
    let num = parseInt(document.getElementById("text1").value - 1);
    todo.splice(num, 1);
    mostrarToDo();
    guardarlocal();
}


function guardarlocal() {

    localStorage.setItem('llista', JSON.stringify(todo));
    localStorage.setItem('id', JSON.stringify(id));

}


function carregarlocal() {
    if (typeof (Storage) !== "undefined") {

        if (localStorage.llista) {
                var data = [] = JSON.parse(localStorage.getItem('llista'));
                data.forEach(element => {
                todo.push(new Task(element._text, element._codi));
                });
                
            if (localStorage.id)
                id = JSON.parse(localStorage.getItem('id'));

            mostrarToDo();
        } else
            localStorage.setItem('llista', JSON.stringify(todo));
            localStorage.setItem('id', JSON.stringify(id));

    } else {
        alert("Sorry, your browser does not support web storage...");

    }



}

document.getElementById("text1").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btng").click();
    }
})

    ;  
