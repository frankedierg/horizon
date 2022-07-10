var express = require('express')
var config = require('./config.js').config
global.app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/'+ config.db,{useNewUrlParser:true,useUnifiedTopology:true},(error,respuesta)=>{
    if (error) {
        console.log(error)
    }
    else{
        console.log('Conexión a Mongo exitosa')
    }
})

var bodyParser = require('body-parser');
//const { default: mongoose } = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//ACCESO A CORS
var cors = require('cors')

app.use(cors({
  origin: function(origin, callback){
    console.log(origin)
    if(!origin) return callback(null, true);

    if(config.EnabledCors == true){

        if(config.origins.indexOf(origin) === -1){
            return callback('error cors', false);
        } 
    }

    return callback(null, true);

  }

}));
//FIN ACCESO A CORS

require('./rutas')


 global.calculo = function(tipo, val1, val2){
     if (tipo == 'suma') {
         return val1+val2
         
     }

     if (tipo == 'resta') {
        return val1-val2
        
    }
    if (tipo == 'producto') {
        return val1*val2
        
    }
    if (tipo == 'division') {
        return val1/val2
        
    }
     
 }

app.use('/',express.static(__dirname + '/Pagina'))//Expone el frontend

app.listen(config.puerto, function(){
    console.log ('servidor funcionando por puerto: '+ config.puerto)
})
