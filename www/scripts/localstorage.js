
function carregarlocal() {
    

   
    // if (typeof (Storage) !== "undefined") {

    //     if (localStorage.llista) {
    //         


    //     } else
    //         localStorage.setItem('llista', JSON.stringify(todo));

    //     if (localStorage.id)
    //         codi = JSON.parse(localStorage.getItem('id'));
    //     else
    //         localStorage.setItem('id', JSON.stringify(codi));

    //     if (localStorage.idresponsable)
    //         idresponsable = JSON.parse(localStorage.getItem('idresponsable'));
    //     else
    //         localStorage.setItem('idresponsable', JSON.stringify(idresponsable));
    //     if (localStorage.responsables) {

    //         
    //     }
    //     else
    //         localStorage.setItem('responsables', JSON.stringify(responsables))
    //         
    // } else {
    //     alert("Sorry, your browser does not support web storage...");

    // }
    // /* Carrega els responsables creats i enmagatzemats en el localstorage */

}


function guardarlocal() {

    localStorage.setItem('llista', JSON.stringify(todo));
    localStorage.setItem('id', JSON.stringify(codi));
    localStorage.setItem('idresponsable', JSON.stringify(idresponsable));
    localStorage.setItem('responsables', JSON.stringify(responsables))

}
