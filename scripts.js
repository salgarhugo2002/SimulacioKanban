/* Declaració de variables. */
var todo = [];
var codi = [1];
var idresponsable = [1];
var responsables = [];


/* És una classe que crea un objecte de tasca amb un títol, text, codi, data de creació, data de venciment,
responsable, llista i prioritat. */
class Task {

    constructor(_titols, _textp, _codip, data1, data, responsables, listas, prioridad) {
        this._titol = _titols;
        this._text = _textp;
        this._codi = _codip;
        this._data_creacio = data1;
        this._data_previsio_finalitzacio = data;
        this._responsable = responsables;
        this._Lista = listas;
        this._prioridad = prioridad
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
        return this._prioridad
    }

    ReturnDataFinal(){
        return this._data_previsio_finalitzacio
    }


}
/* Crea una classe anomenada Responsable. */
class Responsable {

    constructor(_ids, _noms) {
        this._id = _ids;
        this._nom = _noms;

    }
    RetornId() {
        return this._id;
    }
    set Id(a) {
        this._id = a;
    }

    RetornNom() {
        return this._nom;
    }
    set Nom(a) {
        this._nom = a;
    }
}


/* Carregant l'emmagatzematge local. */
carregarlocal();



function Generarid() {
    codi[0] = codi[0] + 1;
}
/* Generar un nou ID per a la persona responsable. */

function GenerarIdResponsable() {
    idresponsable[0] = idresponsable[0] + 1;
}


/* Agafa els valors dels inputs i crea una tasca nova, introduint-la a la matriu. */

function guardarToDo() {
    /* Try-catch que detecta si algun titol esta repetit o i ha algun camp buit. */

    try {
        let responsable = document.getElementById('resp').value
        let titol = document.getElementById("titol1").value;
        let dato = document.getElementById("text1").value;
        let data = new Date(document.getElementById("PrevFinalitzacio").value).toLocaleDateString();
        let data1 = new Date().toLocaleDateString();
        let prio = document.getElementById('pri').value


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
                    let tasca = new Task(titol, dato, codi[0], data1, data, retornideresponsable(responsable), "ToDo", prio);
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
/* Comprova si el títol de la tasca nova ja és a la llista de tasques. Retorna un valor booleà. */

function validarTitol() {

    let bool = true;
    for (element of todo) {
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
/* Crea un element de llista per a cada element de la matriu i l'afegeix a la llista adequada */

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
        if (element.Prio() == "Alta") {
            node.style.backgroundColor = "red"
        } else if (element.Prio() == "Normal") {
            node.style.backgroundColor = "cyan"
        }
        else if (element.Prio() == "Baixa") {
            node.style.backgroundColor = "lightgreen"
        }
        cont++;

        node.appendChild(document.createTextNode(element.RetornTitol() + "." ));
        node.appendChild(document.createElement('br'))
        node.appendChild(document.createTextNode("Tasca: " + element.RetornText()));
        node.appendChild(document.createElement('br'))
        node.appendChild(document.createTextNode(" ID: "  + element.Retorncodi()));
        node.appendChild(document.createElement('br'))
        responsables.forEach(e =>{
            if (element.RetornResponsable() == e.RetornId()) {
                node.appendChild(document.createTextNode(" Responsable: "  + e.RetornNom()));
            }
        })
        node.appendChild(document.createElement('br'))
        node.appendChild(document.createTextNode("Data Final: " + element.ReturnDataFinal() + " "));

        if (element.RetornLista() == "ToDo") {
            document.querySelector('#listaToDo').appendChild(node);
        } else if (element.RetornLista() == "Doing") {
            document.querySelector('#listaDoing').appendChild(node);
        } else if (element.RetornLista() == "Done") {

            document.querySelector('#listaDone').appendChild(node);
        }


    });

}

function eliminarToDo(text = "") {
    let cont = 0;
    let pos = text.indexOf('.')
    let text2 = text.substring(0, pos)
    todo.forEach(element => {
        if (text2.trim() == element.RetornTitol()) {


            todo.splice(cont, 1);

        } else {
            cont++;
        }

    });

    mostrar();
    guardarlocal();
}

/* Pren les dades de la matriu 'todo', la variable codi , la matriu responsables i la variable de identificaciò i les desa a l'emmagatzematge en local. */

function guardarlocal() {

    localStorage.setItem('llista', JSON.stringify(todo));
    localStorage.setItem('id', JSON.stringify(codi));
    localStorage.setItem('idresponsable', JSON.stringify(idresponsable));
    localStorage.setItem('responsables', JSON.stringify(responsables))

}


function carregarlocal() {
    if (typeof (Storage) !== "undefined") {

        if (localStorage.llista) {
            var data = [] = JSON.parse(localStorage.getItem('llista'));
            data.forEach(element => {
                todo.push(new Task(element._titol, element._text, element._codi, element._data_creacio, element._data_previsio_finalitzacio, element._responsabl, element._Lista, element._prioridad));
            });
            mostrar();
        } else
            localStorage.setItem('llista', JSON.stringify(todo));

        if (localStorage.id)
            codi = JSON.parse(localStorage.getItem('id'));
        else
            localStorage.setItem('id', JSON.stringify(codi));

        if (localStorage.idresponsable)
            idresponsable = JSON.parse(localStorage.getItem('idresponsable'));
        else
            localStorage.setItem('idresponsable', JSON.stringify(idresponsable));
        if (localStorage.responsables) {

            let dataresponsables = [] = JSON.parse(localStorage.getItem('responsables'))
            dataresponsables.forEach(element => {
                responsables.push(new Responsable(element._id,element._nom))
            });
        }
        else
            localStorage.setItem('responsables', JSON.stringify(responsables))
    } else {
        alert("Sorry, your browser does not support web storage...");

    }
    /* Carrega els responsables creats i enmagatzemats en el localstorage */
    afegirUsuaris()
}
/* Si es prem la tecla Intro, a continuació, activarà l'event 'clic al botó'
amb l'id 'btng'. */
document.getElementById("text1").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btng").click();
    }
})


/* Creació de variables per als diferents divs i llistes. */
const dragToDo = document.getElementById('divToDo')
const dragDoing = document.getElementById('divDoing')
const dragDone = document.getElementById('divDone')
const papelera = document.getElementById('papelera')
const listaDoing = document.getElementById('listaDoing')
const listaToDo = document.getElementById('listaToDo')
const listaDone = document.getElementById('listaDone')

/*CODI PER CREAR EL SISTEMA D'ARROSSEGAMENT DE LES TASQUES TODO */
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

/*CODI PER CREAR EL SISTEMA D'ARROSSEGAMENT DE LES TASQUES DOING */

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


/*CODI PER CREAR EL SISTEMA D'ARROSSEGAMENT DE LES TASQUES DONE */
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




/*CODI PER CREAR EL SISTEMA D'ARROSSEGAMENT DE LES TASQUES A LA PAPERERA */

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


/* Funcio per cambiar l'atribut llista de la classe responsable depenguen d'on es mogui el element */

function CambiarLista(text = "", lista) {
    let pos = text.indexOf('.')

    let text2 = text.substring(0, pos)
    text = text.trim()

    todo.forEach(element => {
        if (text2 == element.RetornTitol()) {

            element.setLista(lista);

        }

    });

    guardarlocal();

}


/*Funcio que agafa la informacio dels inputs crea i guarda un objecte de la classe responsable */
function guardarresponsable() {
    nom = document.getElementById('nomresponsable').value
    GenerarIdResponsable();


    let resp = new Responsable(idresponsable[0],nom)


    responsables.push(resp);
    document.getElementById('nomresponsable').value = ""
    guardarlocal()
    afegirUsuaris()
}


/* /*Funcio que agafa la informacio dels inputs elimina un objecte de la classe responsable */
function eliminarResponsable(){
   let cont = 0
    responsables.forEach(element =>{
        if (element.RetornId() == parseInt(document.getElementById('borrarResp').value) ) {
            responsables.splice(cont, 1);

        } else {
            cont++;
        }
    })
    afegirUsuaris()
    guardarlocal()
}

/*Funcio que a traves d'un nom et torna la id d'aquell responsable */
function retornideresponsable(resp) {
    let id = 0;
    responsables.forEach(element => {
        if (resp == element.RetornNom()) {
            id = element.RetornId();
        }

    })
    return id;

}
/*Funcio que mostra en el camp select de la creacio de tasca tots els responsables creats */
function afegirUsuaris(){
  
    document.getElementById('resp').innerHTML = ""

    responsables.forEach(element =>{

        var responsables2 = document.getElementById('resp')
        var txt = element.RetornNom()
        var o = document.createElement("option")
        o.text = txt
        responsables2.add(o)
        
    })
}

/*Codi per la modificacio automatica del camp min i value del calendari */
document.getElementById('PrevFinalitzacio').value = new Date().toISOString().split('T')[0]
document.getElementById('PrevFinalitzacio').min = new Date().toISOString().split('T')[0]