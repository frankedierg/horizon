var Peticion = function(tipo,url,payload,callback){

    var xhr = new XMLHttpRequest 
    xhr.open(tipo, url) 
    if (tipo == "GET") {
        xhr.send()                
    }
    else{
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send(JSON.stringify(payload))
    }

    xhr.addEventListener("readystatechange", function(){
        if(this.readyState===4){
        return callback(JSON.parse(this.responseText))       
        }
    })
}


var sumar = function(){
var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value
    
var post = {
tipo: "POST",
url: "http://localhost:3000/sumar",
payload:{
    num1:num1,
    num2:num2
    }
}
Peticion(post.tipo,post.url,post.payload,function(respuesta){
console.log(respuesta)
})
}

var restar = function(){
var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value
    
var post = {
tipo: "POST",
url: "http://localhost:3000/restar",
payload:{
    num1:num1,
    num2:num2
    }
}
 
Peticion(post.tipo,post.url,post.payload,function(respuesta){
console.log(respuesta)
})
}

var multiplicar = function(){
var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value
    
var post = {
tipo: "POST",
url: "http://localhost:3000/multiplicar",
payload:{
    num1:num1,
    num2:num2
    }
}
Peticion(post.tipo,post.url,post.payload,function(respuesta){
console.log(respuesta)
})
}

var dividir = function(){
var num1 = document.getElementById('num1').value
var num2 = document.getElementById('num2').value
 
var post = {
tipo: "POST",
url: "http://localhost:3000/dividir",
payload:{
    num1:num1,
    num2:num2
    }
}
Peticion(post.tipo,post.url,post.payload,function(respuesta){
console.log(respuesta)
})
}
