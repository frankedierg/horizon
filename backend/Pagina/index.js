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

var registrar = function(){
    var name = document.getElementById('name').value
    var lname = document.getElementById('lname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var confirmar = document.getElementById('confirmar').value
    

            
        var post = {
            tipo: "POST",
            url: "http://localhost:3000/usuarios/registro",
            payload: {
            name:name,
            lname:lname,
            email:email,
            password:password,
            confirmar:confirmar
            }
        }

        if (name == undefined || name == null || name == '' ) {
            console.log("el nombre es obligatorio")
            return false;
        }

            
        Peticion(post.tipo,post.url,post.payload,function(respuesta){
            console.log(respuesta)
            if (respuesta.state == true) {
               // window.location.assign('http://localhost:3000')
                
                
            }
        })


}