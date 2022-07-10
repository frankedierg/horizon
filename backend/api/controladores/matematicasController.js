var matematicasController = {}

matematicasController.sumar = function(request,response){
    global.num1 = parseInt(request.body.num1)
    global.num2 = parseInt(request.body.num2)  
    response.json({mensaje:'El resultado de la suma es: '+ calculo('suma',num1,num2)})

}

matematicasController.restar = function(request,response){
    global.num1 = parseInt(request.body.num1)
    global.num2 = parseInt(request.body.num2)       
    response.json({mensaje:'El resultado de la resta es: '+ calculo('resta',num1,num2)})

}

matematicasController.multiplicar = function(request,response){
    global.num1 = parseInt(request.body.num1)
    global.num2 = parseInt(request.body.num2)       
    response.json({mensaje:'El resultado de la multiplicación es: '+ calculo('producto',num1,num2)})

}

matematicasController.dividir = function(request,response){
    global.num1 = parseInt(request.body.num1)
    global.num2 = parseInt(request.body.num2)       
    response.json({mensaje:'El resultado de la división es: '+ calculo('division',num1,num2)})

}


module.exports.matematicas = matematicasController