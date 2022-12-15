
var todo = [];
var codi = [1];

class Task {

    constructor(_textp, _codip, data1, data, responsables,listas) {

        this._text = _textp;
        this._codi = _codip;
        this._data_creacio = data1;
        this._data_previsio_finalitzacio = data;
        this._responsable = responsables;
        this._Lista = listas;

    }

    Retorncodi() {
        return this._codi;
    }
    set codi(codi2) {
        this.codi = codi2;
    }

    get Text() {
        return this.text;
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


    RetornResponsable(){
        return this._responsable;
    }

    RetornLista(){
        return this._Lista;
    }


}
carregarlocal();
function Generarid() {
    codi[0] = codi[0] + 1;
}



function guardarToDo() {
    try {
        let responsable = document.getElementById('resp').value
        let dato = document.getElementById("text1").value;
        let data = new Date(document.getElementById("PrevFinalitzacio").value).toLocaleDateString();
        let data1 = new Date().toLocaleDateString();
        if (dato == "" || dato == null) {
            throw "No hi ha text que afegir";
        }
        else {
            document.getElementById("text1").value = null;

            let tasca = new Task(dato, codi[0], data1, data, responsable,"ToDo");
            Generarid();

            todo.push(tasca);

            mostrar();
            guardarlocal();
        }

    } catch (err) {
        alert(err);
    }

}

function mostrar() {
    var node;
    var boton
    
    let cont = 1
    
    todo.forEach(element => {
        boton =document.createElement('button')
        node = document.createElement('li');
        node.draggable = true
        node.className = "task"
        node.id = cont
        cont++;
        boton.innerHTML = "Boton"
        boton.value = element.Retorncodi();
        boton.className = "pollon"
        
        node.appendChild(document.createTextNode(element.RetornText() + " "));
        node.appendChild(boton)

        if(element.RetornLista() == "ToDo")
        {
            document.getElementById('listaToDo').innerHTML = '';
            document.querySelector('#listaToDo').appendChild(node);
        }else if(element.RetornLista() == "Doing")
        {
            document.getElementById('listaDoing').innerHTML = '';
            document.querySelector('#listaDoing').appendChild(node);
        }else if(element.RetornLista() == "Done")
        {
            document.getElementById('listaDone').innerHTML = '';
            document.querySelector('#listaDone').appendChild(node);
        }
        
       
    });

}

function eliminarToDo() {
    let num = parseInt(document.getElementById("textEliminar").value - 1);
    todo.splice(num, 1);
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
                todo.push(new Task(element._text, element._codi, element._data_creacio, element._data_previsio_finalitzacio, element._responsabl,element._Lista));
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
const listaDoing = document.getElementById('listaDoing')
const listaToDo = document.getElementById('listaToDo')
const listaDone= document.getElementById('listaDone')

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

dragDoing.addEventListener('dragover', (e) => {
    e.preventDefault()
})

dragDoing.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaDoing.appendChild(listaToDo.removeChild(element))

})



dragToDo.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaToDo.appendChild(listaDoing.removeChild(element))


})

dragDone.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaDone.appendChild(listaDoing.removeChild(element))


})

dragDoing.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    listaDoing.appendChild(listaDone.removeChild(element))


})





function mostrarDatos(){
  
        todo.forEach(element => {
           
            document.getElementById('mierda').innerHTML = element.RetornResponsable();
           
           
            
        });
}

    $(document).ready(function(){
        $('.pollon').click(function(){
                mostrar()
        })
    })
