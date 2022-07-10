var md5 = require('md5');
var sesionesModel = require('../modelos/sesionesModel').sesionesModel
//CRUD
var sesionesController = {}
//READ
sesionesController.iniciarsesion = function(request,response){

    var post = {
        email:request.body.email,
        password:md5(request.body.password)
    }

    if(post.email == undefined || post.email == null || post.email == ''){
       response.json({state:false, mensaje:"Dato email es obligatorio"})
       return false;
   }

   if(post.password == undefined || post.password == null || post.password == ''){
       response.json({state:false, mensaje:"Dato Password es obligatorio"})
       return false;
   }

    sesionesModel.iniciarsesion(post,function(existe){
        if (existe == true) {
            response.json({state:true,mensaje:"Usuario logueado correctamente"})
        }
        else{
            response.json({state:false, mensaje:"Credenciales inválidas"})
        }
    })
  
}
//CREATE REGISTRO
sesionesController.registro = function(request,response){

    var fname = request.body.fname
    var mname = request.body.mname
    var lname = request.body.lname
    var slname = request.body.slname
    var email = request.body.email
    var phone = request.body.phone
    var unitname = request.body.unitname
    var building = request.body.building
    var unitcategory = request.body.unitcategory
    var password = request.body.password
    var confirmar= request.body.confirmar
   console.log(fname)
   console.log(lname)
   console.log(email)
   console.log(password)
   //VALIDACIÓN PRIMER NOMBRE
   if(fname == undefined || fname == null || fname == ''){
       response.json({state:false, mensaje:"Dato primer nombre es obligatorio"})
       return false;
   }
   if(fname.length <=2){
       response.json({state:false, mensaje:"El campo nombre debe ser superior a 2 caracteres"})
       return false;
   }
   if(fname.length >=30){
       response.json({state:false, mensaje:"El campo nombre debe ser inferior a 30 caracteres"})
       return false;
   }
   //VALIDACIÓN SEGUNDO NOMBRE
//     if(mname.length <=2){
//     response.json({state:false, mensaje:"El campo nombre debe ser superior a 2 caracteres"})
//     return false;
//    }
//     if(mname.length >=30){
//     response.json({state:false, mensaje:"El campo nombre debe ser inferior a 30 caracteres"})
//     return false;
//     }
    //VALIDACIÓN PRIMER APELLIDO

   if(lname == undefined || lname == null || lname == ''){
       response.json({state:false, mensaje:"Dato Primer Apellido es obligatorio"})
       return false;
   }
   if(lname.length <=2){
       response.json({state:false, mensaje:"El campo primer apellido debe ser superior a 2 caracteres"})
       return false;
   }
   if(lname.length >=30){
       response.json({state:false, mensaje:"El campo primer apellido debe ser inferior a 30 caracteres"})
       return false;
   }
    //VALIDACIÓN SEGUNDO APELLIDO
    // if(slname.length <=2){
    //     response.json({state:false, mensaje:"El campo Apellido debe ser superior a 2 caracteres"})
    //     return false;
    // }
    // if(slname.length >=30){
    //     response.json({state:false, mensaje:"El campo Apellido debe ser inferior a 30 caracteres"})
    //     return false;
    //}
    //VALIDACIÓN EMAIL
   if(email == undefined || email == null || email == ''){
       response.json({state:false, mensaje:"Dato Email es obligatorio"})
       return false;
   }
   if(password == undefined || password == null || password == ''){
    response.json({state:false, mensaje:"Dato Password es obligatorio"})
    return false;
    }
    if(password.length < 6){
        response.json({state:false, mensaje:"El Password debe ser superior a 6 caracteres"})
        return false;
 
    }
    if(confirmar == undefined || confirmar == null || confirmar == ''){
        response.json({state:false, mensaje:"Debe confirmar el password"})
        return false;
    }
    if(confirmar != password){
        response.json({state:false, mensaje:"El Password no coincide con la confirmación"})
        return false;
    }

     //VALIDACIÓN TELÉFONO
    //  if(phone.length < 10){
    //     response.json({state:false, mensaje:"El campo teléfonno debe ser de 10 caracteres"})
    //     return false;
    //}

     //VALIDACIÓN UNITNAME
//    if(unitname == undefined || unitname == null || unitname == ''){
//     response.json({state:false, mensaje:"Dato nombre de la unidad es obligatorio"})
//     return false;
//     }
//     if(unitname.length <=2){
//     response.json({state:false, mensaje:"El campo nombre de la unidad debe ser superior a 2 caracteres"})
//     return false;
//     }
//     if(unitname.length >=120){
//     response.json({state:false, mensaje:"El campo nombre de la unidad debe ser inferior a 30 caracteres"})
//     return false;
//     }
    //VALIDACIÓN NOMBRE DEL EDIFICIO
//    if(building == undefined || building == null || building == ''){
//     response.json({state:false, mensaje:"Dato nombre del edificio es obligatorio"})
//     return false;
//     }
//     if(building.length <=2){
//     response.json({state:false, mensaje:"El campo edificio debe ser superior a 2 caracteres"})
//     return false;
//     }
//     if(building.length >=120){
//     response.json({state:false, mensaje:"El campo edificio debe ser inferior a 30 caracteres"})
//     return false;
//     }

//     //VALIDACIÓN UNITCATEGORY
//    if(unitcategory == undefined || unitcategory == null || unitcategory == ''){
//     response.json({state:false, mensaje:"Dato Categoria de la uidad es obligatorio"})
//     return false;
//     }
//     if(unitcategory.length <=2){
//     response.json({state:false, mensaje:"El campo nombre debe ser superior a 2 caracteres"})
//     return false;
//     }
//     if(unitcategory.length >=30){
//     response.json({state:false, mensaje:"El campo nombre debe ser inferior a 30 caracteres"})
//     return false;
//     }




   
   var post = {
    fname:fname,
    mname:mname,
    lname: lname,
    slname:slname,
    unitname:unitname,
    building:building,
    unitcategory:unitcategory,
    email: email,
    phone:phone,
    password:md5(password)
   }

     sesionesModel.buscaremail(post,function(existe){
        
    if (existe == true) {
        response.json({state:false, mensaje:"El email ya existe, por favor intente con otro"})
        return false
    }
    else{
        sesionesModel.registro(post, function(dato){

            if (dato.state == true) {
                response.json({state:true, mensaje:'Usuario registrado Correctamente'})

            }
            else{
                response.json({state:false, mensaje:'Se presentó un error al guardar'})
            }
                   
        })
   }
   })
}
//READ
sesionesController.listar = function(request,response){
    var post = {}
    sesionesModel.listar(post, function(listausuarios){
        response.json({state:true,usuarios:listausuarios})
    })
}
//UPDATE
sesionesController.actualizar = function(request,response){
    var post = {
        email:request.body.email,
        fname:request.body.fname,
        mname:request.body.mname,
        lname:request.body.lname,
        slname:request.body.slname,
        phone:request.body.phone,
        unitname:request.body.unitname,
        building:request.body.building,
        unitcategory:request.body.unitcategory,
    }
    if(post.email == undefined || post.email == null || post.email == ''){
        response.json({state:false, mensaje:"Dato Email es obligatorio"})
        return false;
    }
    if(post.fname == undefined || post.fname == null || post.fname == ''){
        response.json({state:false, mensaje:"Dato primer nombre es obligatorio"})
        return false;
    }
    if(post.lname == undefined || post.lname == null || post.lname == ''){
        response.json({state:false, mensaje:"Dato Apellido es obligatorio"})
        return false;
    }
    if(post.unitname == undefined || post.unitname == null || post.unitname == ''){
        response.json({state:false, mensaje:"Dato nombre de la Unidad es obligatorio"})
        return false;
    }
    if(post.building == undefined || post.building == null || post.building == ''){
        response.json({state:false, mensaje:"Dato Edificio es obligatorio"})
        return false;
    }
    if(post.unitcategory == undefined || post.unitcategory == null || post.unitcategory == ''){
        response.json({state:false, mensaje:"Dato Categoria de Unidad es obligatorio"})
        return false;
    }
    sesionesModel.actualizarnombre(post, function(resultado){
        response.json(resultado)
    })
        
}
//DELETE
sesionesController.eliminar = function(request,response){
    var post = {
        email:request.body.email
        
    }
    if(post.email == undefined || post.email == null || post.email == ''){
        response.json({state:false, mensaje:"Dato Email es obligatorio"})
        return false;
    }
    sesionesModel.eliminarusuario(post, function(resultado){
        console.log(resultado)
        response.json(resultado)
                
        })
    }


module.exports.sesionesController = sesionesController;