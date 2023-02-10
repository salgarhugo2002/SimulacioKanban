const mongoose = require("mongoose");

const ResponsableSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: false
    },
    nom: {
        type: String,
        required: true
    }
    
},
{
    versionKey:false
}
);

const Responsable = mongoose.model("responsable", ResponsableSchema);
mongoose.set('strictQuery', false);
module.exports = Responsable;