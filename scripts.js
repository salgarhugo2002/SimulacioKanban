
var todo = [];
var codi = [1];

class Task {

    constructor(_textp, _codip, data1, data, responsable) {

        this._text = _textp;
        this._codi = _codip;
        this._data_creacio = data1;
        this._data_previsio_finalitzacio = data;
        this._responsable = responsable;

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
carregarlocal();
function Generarid() {
    codi[0] = codi[0] + 1;
}



function guardarToDo() {
    try {
        let responsable = document.getElementById('resp').value
        let dato = document.getElementById("text1").value;
        let data = new Date(document.getElementById("PrevFinalitzacio").value).toLocaleDateString();
        let data1 = new Date().toLocaleDateString();
        if (dato == "" || dato == null) {
            throw "No hi ha text que afegir";
        }
        else {
            document.getElementById("text1").value = null;

            let tasca = new Task(dato, codi[0], data1, data, responsable);
            Generarid();

            todo.push(tasca);

            mostrarToDo();
            guardarlocal();
        }

    } catch (err) {
        alert(err);
    }

}

function mostrarToDo() {
    var node;

    document.getElementById('listaToDo').innerHTML = '';

    todo.forEach(element => {
        node = document.createElement('li');
        node.draggable = true
        a = document.createElement('input');
        a.type = "checkbox";
        a.className = "hola"
        node.appendChild(document.createTextNode(element.RetornText() + " "));
        node.appendChild(a)

        document.querySelector('#listaToDo').appendChild(node);

    });

}
function validar_check() {

    var checks = document.querySelectorAll('.hola')

    checks.forEach((e) => {

        if (e.checked == true) {
            console.log("Chequeado")

        } else {
            console.log("ningun elemento seleccionado")
        }
    })

}



function eliminarToDo() {
    let num = parseInt(document.getElementById("textEliminar").value - 1);
    todo.splice(num, 1);
    mostrarToDo();
    guardarlocal();
}


function guardarlocal() {

    localStorage.setItem('llista', JSON.stringify(todo));
    localStorage.setItem('id', JSON.stringify(codi));

}


function carregarlocal() {
    if (typeof (Storage) !== "undefined") {

        if (localStorage.llista) {
            var data = [] = JSON.parse(localStorage.getItem('llista'));
            data.forEach(element => {
                todo.push(new Task(element._text, element._codi, element._data_creacio, element._data_previsio_finalitzacio, element._responsable));
            });

            if (localStorage.id)
                codi = JSON.parse(localStorage.getItem('id'));

            mostrarToDo();
        } else
            localStorage.setItem('llista', JSON.stringify(todo));
        localStorage.setItem('id', JSON.stringify(codi));

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

