

var todo = [];
var codi = [1];

class Task {

    constructor(_titols, _textp, _codip, data1, data, responsables, listas,prioridad) {

        this._titol = _titols;
        this._text = _textp;
        this._codi = _codip;
        this._data_creacio = data1;
        this._data_previsio_finalitzacio = data;
        this._responsable = responsables;
        this._Lista = listas;
        this.prioridad = prioridad
    }
    RetornTitol() {
        return this._titol
    }

    Retorncodi() {
        return this._codi;
    }
    set codi(codi2) {
        this.codi = codi2;
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


    RetornResponsable() {
        return this._responsable;
    }

    RetornLista() {
        return this._Lista;
    }

    setLista(llista) {
        this._Lista = llista
    }
    Prio() {
        return this.prioridad
    }


}
carregarlocal();
function Generarid() {
    codi[0] = codi[0] + 1;
}



function guardarToDo() {

    try {
        let responsable = document.getElementById('resp').value
        let titol = document.getElementById("titol1").value;
        let dato = document.getElementById("text1").value;
        let data = new Date(document.getElementById("PrevFinalitzacio").value).toLocaleDateString();
        let data1 = new Date().toLocaleDateString();
        let prio = new Date().toLocaleDateString();


        if (!validarTitol()) {
            throw "No pots repetir titol";
        } else {

            if (dato == "" || dato == null) {
                throw "Inserta un text";
            }
            else {
                if (titol == "" || titol == null) {
                    throw "Inserta un títol";
                } else {

                    document.getElementById("text1").value = null;
                    document.getElementById("titol1").value = null;
                    let tasca = new Task(titol, dato, codi[0], data1, data, responsable, "ToDo");
                    Generarid();

                    todo.push(tasca);

                    mostrar();
                    guardarlocal();
                }

            }
        }

    } catch (err) {
        alert(err);
    }

}

function validarTitol() {

    let bool = true;
    for(element of todo){
        if (element.RetornTitol() == document.getElementById("titol1").value) {
            bool = false;
            break;
        }
        else {
            bool = true;
        }
    };


return bool;
}

function mostrar() {
    var node;
    document.getElementById('listaToDo').innerHTML = '';
    document.getElementById('listaDoing').innerHTML = '';
    document.getElementById('listaDone').innerHTML = '';
    let cont = 1

    todo.forEach(element => {
        node = document.createElement('li');
        node.draggable = true
        node.className = "task"
        node.id = cont
        cont++;

        node.appendChild(document.createTextNode(element.RetornTitol() + " "));

        if (element.RetornLista() == "ToDo") {
            document.querySelector('#listaToDo').appendChild(node);
        } else if (element.RetornLista() == "Doing") {
            document.querySelector('#listaDoing').appendChild(node);
        } else if (element.RetornLista() == "Done") {

            document.querySelector('#listaDone').appendChild(node);
        }


    });

}

function eliminarToDo(text) {
    let cont = 0;
    todo.forEach(element => {
        if (text.trim() == element.RetornTitol()) {

            
            todo.splice(cont, 1);
            
        }else{
            cont++;
        }

    });
    
    mostrar();
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
                todo.push(new Task(element._titol, element._text, element._codi, element._data_creacio, element._data_previsio_finalitzacio, element._responsabl, element._Lista));
            });

            if (localStorage.id)
                codi = JSON.parse(localStorage.getItem('id'));

            mostrar();
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


const dragToDo = document.getElementById('divToDo')
const dragDoing = document.getElementById('divDoing')
const dragDone = document.getElementById('divDone')
const papelera = document.getElementById('papelera')
const listaDoing = document.getElementById('listaDoing')
const listaToDo = document.getElementById('listaToDo')
const listaDone = document.getElementById('listaDone')

dragToDo.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

dragToDo.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

dragToDo.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

dragToDo.addEventListener('dragover', (e) => {
    e.preventDefault()
})


dragDoing.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

dragDoing.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

dragDoing.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

dragDoing.addEventListener('dragover', (e) => {
    e.preventDefault()
})



dragDone.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

dragDone.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

dragDone.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

dragDone.addEventListener('dragover', (e) => {
    e.preventDefault()
})





dragDoing.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaDoing.appendChild(listaToDo.removeChild(element))

    a = element.innerHTML;
    CambiarLista(a, "Doing")

})

dragToDo.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaToDo.appendChild(listaDoing.removeChild(element))

    a = element.innerHTML;
    CambiarLista(a, "ToDo")

})

dragDone.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaDone.appendChild(listaDoing.removeChild(element))

    a = element.innerHTML;
    CambiarLista(a, "Done")

})

dragDoing.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaDoing.appendChild(listaDone.removeChild(element))


    a = element.innerHTML;
    CambiarLista(a, "Doing")

})



function CambiarLista(text, lista) {


    todo.forEach(element => {
        if (text.trim() == element.RetornTitol()) {

            element.setLista(lista);

            console.log(123421321)
        }

    });

    guardarlocal();

}



papelera.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
    
})

papelera.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

  papelera.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

papelera.addEventListener('dragover', (e) => {
    e.preventDefault()
})

papelera.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')

    a = element.innerHTML;
    eliminarToDo(a)
    
})

 

  
    $(document).ready(function(){
        $('#btng').click(function(){
            if($('#normal').is(':checked')){
              $('.task').css('backgroundColor','#f1f1f1');
              
            }else if($('#alta').is(':checked')){
              $('.task').css('backgroundColor','#ff3737');

            }else if($('#baixa').is(':checked')){
              $('.task').css('backgroundColor','#9ffaa4');
            }
        })
      })
    

