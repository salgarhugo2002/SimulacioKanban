function carregarlocal() {
    if (typeof (Storage) !== "undefined") {

        if (localStorage.llista) {
            var data = [] = JSON.parse(localStorage.getItem('llista'));
            data.forEach(element => {
                todo.push(new Task(element._titol, element._text, element._codi, element._data_creacio, element._data_previsio_finalitzacio, element._responsable, element._Lista, element._prioridad));
            });
            
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
            mostrar();
    } else {
        alert("Sorry, your browser does not support web storage...");

    }
    /* Carrega els responsables creats i enmagatzemats en el localstorage */
    afegirUsuaris()
}


function guardarlocal() {

    localStorage.setItem('llista', JSON.stringify(todo));
    localStorage.setItem('id', JSON.stringify(codi));
    localStorage.setItem('idresponsable', JSON.stringify(idresponsable));
    localStorage.setItem('responsables', JSON.stringify(responsables))

}
