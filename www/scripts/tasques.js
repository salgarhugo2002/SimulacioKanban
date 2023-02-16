/* Agafa els valors dels inputs i crea una tasca nova, introduint-la a la matriu. */
const BaseUrlTasca = "http://localhost:3000/api/tasca";
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

                    
    
                    let tasca1 = {
                        "_titol" : titol,
                        "_text" : dato,
                        "_codi" : codi[0],
                        "_data_creacio" : data1,
                        "_data_previsio_finalitzacio" : data,
                        "_responsable" : retornideresponsable(responsable),
                        "_Lista" : "ToDo",
                        "_prioridad" : prio
                    }
                
                    
                    todo.push(tasca);


                    mostrar();
                    guardarlocal();
                    return tasca1

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


function afegirTasca() {
	
	/*Obtenir dades del formulari*/
    const tasca = guardarToDo();
    
    if (tasca != undefined) {
        fetch(BaseUrlTasca, 
            {
                method: "POST",
                body: JSON.stringify(tasca),
                headers: {
                    'Content-Type': 'application/json'
                }
            })  
    }else{
        alert("Hi han dades sense definr")
    }

	
}



