const mongoose =require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        unique:true
    },
    academica:{
        type:String,
        required:true    
    },
    grupoinv:String,
    finaciadora: String,
    otras: String,
    ingresoun: Number,
    coinvestigador: String

})

const Projectdb = mongoose.model('projectdb',schema);

module.exports = Projectdb;