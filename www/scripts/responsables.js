/*Funcio que agafa la informacio dels inputs crea i guarda un objecte de la classe responsable */

const BaseUrl = "http://localhost:3000/api/responsable";
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


async function ObtenirDadesFormResponsables() {
    let myForm = document.getElementById("formResponsables");
    let codi = await idmaxresp();
    let responsable = {
        "id": codi,
        "nom": myForm.nom.value
    }

    GenerarIdResponsable()
    let resp = new Responsable(codi, myForm.nom.value)

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



async function construirResponsable() {
    try {
        let response = await retornresponsabledb();

        response.forEach(element => {
            responsables.push(new Responsable(
                element.id,
                element.nom))
        });
        mostrar();
        afegirUsuaris()
    } catch (error) {
        console.error(error);
    }
}


function retornidmaxresp() {
    return fetch('http://localhost:3000/api/idmax')
        .then((res) => res.json());
}

async function idmaxresp() {

    const response = await retornidmaxresp();

    try {

        let abc = response[0].id;
        return abc + 1;
    } catch (error) {
        console.log("no hi ha cap responsable a la BDD, pero hem posat que la id default sigui 0 , aquest misatge salta igual pero funciona tot");
    }
}
