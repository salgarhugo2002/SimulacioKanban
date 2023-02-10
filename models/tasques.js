const mongoose = require("mongoose");

const TascaSchema = new mongoose.Schema({
    _Lista: {
        type: String
    },
    _codi: {
        type: Number
    },
    _data_creacio:{
        type: String
    },
    _data_previsio_finalitzacio:{
        type:String
    },
    _prioridad:{
        type:String
    },
    _responsable:{
        type:Number
    },
    _text:{
        type:String
    },
    _titol:{
        type:String
    }
    
},
{
    versionKey:false
}
);

const Tasca = mongoose.model("tasques", TascaSchema);
mongoose.set('strictQuery', false);
module.exports = Tasca;