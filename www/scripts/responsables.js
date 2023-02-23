/*Funcio que agafa la informacio dels inputs crea i guarda un objecte de la classe responsable */
/*function guardarresponsable() {
    nom = document.getElementById('nomresponsable').value
    GenerarIdResponsable();


    let resp = new Responsable(idresponsable[0],nom)


    responsables.push(resp);
    document.getElementById('nomresponsable').value = ""
    guardarlocal()
    afegirUsuaris()
}*/



const BaseUrl = "http://localhost:3000/api/responsable";
function afegirResponsable() {

    /*Obtenir dades del formulari*/
    const responsable = ObtenirDadesFormResponsables();

    fetch(BaseUrl,
        {
            method: "POST",
            body: JSON.stringify(responsable),
            headers: {
                'Content-Type': 'application/json'
            }
        })



}


function ObtenirDadesFormResponsables() {
    let myForm = document.getElementById("formResponsables");

    let responsable = {
        "id": idresponsable[0],
        "nom": myForm.nom.value
    }

    GenerarIdResponsable()
    let resp = new Responsable(idresponsable[0], myForm.nom.value)

    responsables.push(resp);

    afegirUsuaris()
    return responsable


}


/* /*Funcio que agafa la informacio dels inputs elimina un objecte de la classe responsable */
function eliminarResponsable() {
    let cont = 0
    responsables.forEach(element => {
        if (element.RetornId() == parseInt(document.getElementById('borrarResp').value)) {
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
function afegirUsuaris() {

    document.getElementById('resp').innerHTML = ""

    responsables.forEach(element => {

        var responsables2 = document.getElementById('resp')
        var txt = element.RetornNom()
        var o = document.createElement("option")
        o.text = txt
        responsables2.add(o)

    })
}

function retornresponsabledb() {
    return fetch('http://localhost:3000/api/responsable')
        .then((res) => res.json());
}



async function dsa() {
    try {
        let response = await retornresponsabledb();

        response.forEach(element => {
            responsables.push(new Responsable(
                element._id, 
                element._nom))
        });
        mostrar();
        afegirUsuaris()
    } catch (error) {
        console.error(error);
    }
}