
//Responsables

async function afegirResponsable() {

    /*Obtenir dades del formulari*/
    const responsable = await ObtenirDadesFormResponsables();

    fetch('http://localhost:3000/api/responsable',
        {
            method: "POST",
            body: JSON.stringify(responsable),
            headers: {
                'Content-Type': 'application/json'
            }
        })



}

function retornidmaxresp() {
    return fetch('http://localhost:3000/api/idmax')
        .then((res) => res.json());
}

function retornresponsabledb() {
    return fetch('http://localhost:3000/api/responsable')
        .then((res) => res.json());
}

 function borrarResponsable(id) {
    fetch('http://localhost:3000/api/responsable/' + id,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

}


//Tasques


async function afegirTasca() {

    /*Obtenir dades del formulari*/
    const tasca = await guardarToDo();

    if (tasca != undefined) {
        fetch('http://localhost:3000/api/tasca',
            {
                method: "POST",
                body: JSON.stringify(tasca),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
    } else {
        alert("Hi han dades sense definr")
    }


}

async function retorntasquesdb() {
    return fetch('http://localhost:3000/api/tasca')
        .then((res) => res.json());
}
function retornidmaxtasca() {
    return fetch('http://localhost:3000/api/idmaxtasca')
        .then((res) => res.json());
}


function borrarTasca(id) {
    fetch('http://localhost:3000/api/tasca/'+id,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })

}
