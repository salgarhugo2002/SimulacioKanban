
//Responsables

async function afegirResponsable() {

    /*Obtenir dades del formulari*/
    const responsable = await ObtenirDadesFormResponsables();

    fetch(BaseUrl,
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



//Tasques


async function afegirTasca() {

    /*Obtenir dades del formulari*/
    const tasca = await guardarToDo();

    if (tasca != undefined) {
        fetch(BaseUrlTasca,
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
