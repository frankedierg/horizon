var matematicas = require('./api/controladores/matematicasController').matematicas
var sesiones = require('./api/controladores/sesionesController').sesionesController
app.post('/sumar',function(request,response){
    matematicas.sumar(request,response)

})
app.post('/restar',function(request,response){
   matematicas.restar(request,response)
  
})
app.post('/multiplicar',function(request,response){   
   matematicas.multiplicar(request,response)
})
app.post('/dividir',function(request,response){
   matematicas.dividir(request,response)
})
app.post('/usuarios/login',function(request,response){
   sesiones.iniciarsesion(request,response)
})
app.post('/usuarios/registro',function(request,response){
    sesiones.registro(request,response)
})
app.post('/usuarios/listar',function(request,response){
      sesiones.listar(request,response)
})
app.post('/usuarios/actualizar',function(request,response){
      sesiones.actualizar(request,response)
})
app.post('/usuarios/eliminar',function(request,response){
      sesiones.eliminar(request,response)
})
  
