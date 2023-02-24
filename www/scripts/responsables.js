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
    let nomRes = document.getElementById('nomresponsable').value
    if (nomRes == "") {
        document.getElementById('nomresponsable').value = null
        alert("Omple les dades")
    }else{
        document.getElementById('nomresponsable').value = null
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
    document.getElementById('resp').innerHTML = ""
    responsables.forEach(element => {

        var responsables2 = document.getElementById('resp')
        var txt = element.RetornNom()
        var o = document.createElement("option")
        o.text = txt
        responsables2.add(o)
 

    })
    responsables.forEach(element => {

        var responsableseliminar = document.getElementById('borrarResp')
        var txts = element.RetornNom()
        var op = document.createElement("option")
        op.text = txts

        responsableseliminar.add(op)
 

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

function retornideresponsable(resp) {
    let id = 0;
    responsables.forEach(element => {
        if (resp == element.RetornNom()) {
            id = element.RetornId();
        }

    })
    return id;

}
