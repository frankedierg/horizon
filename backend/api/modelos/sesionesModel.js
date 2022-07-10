var sesionesModel = {}
global.datos = [];
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//ESTRUCTURA PARA LA COLECCIÓN
var userSchema = new Schema({
    fname:String,
    mname:String,
    lname:String,
    slname:String,
    unitname:String,
    building:String,
    unitcategory:String,
    email:String,
    phone:String,
    password:String,
    age:Number

})

//CREACIÓN DEL MODELO PARA LA COLECCIÓN DE LA DB
const MyModel = mongoose.model('members',userSchema)


sesionesModel.registro = function(post,callback){

    const instancia = new MyModel
    instancia.fname = post.fname
    instancia.mname = post.mname
    instancia.lname = post.lname
    instancia.slname = post.slname
    instancia.unitname = post.unitname
    instancia.building = post.building
    instancia.unitcategory = post.unitcategory
    instancia.email = post.email
    instancia.phone = post.phone
    instancia.password = post.password
    instancia.age = 35

    instancia.save((error,usercreated) => {
        if(error){
            console.log(error)
            return callback({state:false,info:error})
        }
        else{
            console.log(usercreated)
            return callback({state:true,info:usercreated})
        }
    })
    //datos.push({name:post.name, lname:post.lname, email:post.email, password:post.password})
    //return callback (datos)
}
sesionesModel.buscaremail = function (post, callback){

    MyModel.find({email:post.email},{name:1,mname:1,lname:1,slname:1,phone:1,unitname:1,building:1,unitcategory:1,email:1},(error,registros) => {
        if(error){
            console.log(error)
            return callback(false)
        }
        else{
            console.log(registros)
            console.log(registros.length)
            if (registros.length > 0) {
                return callback(true)                
            }
            else{
                return callback(false)
            }
        }
    })
    // var posicion = datos.findIndex((item)=> {
    //     return item.email == post.email
    // })

    // if (posicion >= 0 ) {
    //     return callback(true)
    // }
    // else {
    //     return callback(false)
    // }
    
    
}
sesionesModel.posicionemail = function (post, callback){
    var posicion = datos.findIndex((item)=> {
        return item.email == post.email
    })
   return callback(posicion)  
}
sesionesModel.iniciarsesion = function(post,callback){

    MyModel.find({email:post.email, password:post.password},{id:1,name:1,lname:1,email:1,age:1},(error,registros) => {
        if (error) {
            console.log(error)
            return callback({state:false, info:error})
        }
        else{
           // return callback(registros)
           if (registros.length > 0) {
            return callback(true)
            
           }
           else{
            return callback(false)

           }
        }

    })
    // var posicion = datos.findIndex((iterador) => {
    //     return iterador.email == post.email && iterador.password == post.password
    //    })

    //    if (posicion >= 0) {
    //     return callback(true)
    //    }
    //    else{
    //     return callback(false)
    //    }
}
sesionesModel.listar = function(post,callback){
    MyModel.find({},{id:1,name:1,mname:1,lname:1,email:1,phone:1,unitname:1,building:1,unitcategory:1,age:1},(error,registros) => {
        if (error) {
            console.log(error)
            return callback({state:false, info:error})
        }
        else{
            return callback(registros)
        }

    })
}
sesionesModel.actualizarnombre = function(post,callback){

    MyModel.findOneAndUpdate({email:post.email},
        {
            name:post.name,
            mname:post.mname,
            lname:post.lname,
            slname:post.slname,
            phone:post.phone,
            unitname:post.unitname,
            building:post.building,
            unitcategory:post.unitcategory,
            age:40
        },(error,usuariomodificado)=>{
        if (error) {
            console.log(error)
            return callback({state:false, info:error})
        }
        else{
            return callback({state:true, mensaje:'Usuario modificado'})
        }

    })
    // datos[post.posicion].name = post.name
    // return callback({state:true})

}
sesionesModel.eliminarusuario = function(post,callback){

    MyModel.findOneAndDelete({email:post.email} ,(error,eliminado)=>{
        if (error) {
            console.log(error)
            return callback({state:false, info:error})
        }
        else{
            return callback({state:true, mensaje:"Usuario eliminado"})
        }
    })
    // datos.splice(post.posicion,1).name = post.name
    // return callback({state:true})
}
module.exports.sesionesModel = sesionesModel;