export default class Task {

constructor(text){

    this.id = GenerarId();
    this.text = text;

}

get ID(){
    return this.id;
}
set ID(id){
    this.id = GenerarId();
}

get Text(){
return this.text;
}
set Text(text){
    this.text = text;
}

getTask(){
    return this;
}

static GenerarId(){
    return ID[0] =+ 1;
    }

}


