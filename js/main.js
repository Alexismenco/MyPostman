var verbo = document.querySelector("#verbo");
var url = document.querySelector('#url');
var send = document.querySelector('#send');
var body = document.querySelector("#body")
var titulo= document.querySelector("#titulo");
var json = document.querySelector("#json");

send.addEventListener("click", function(){
    titulo.innerText= '';
    if(verbo.value == 'GET'){
        obtenerGet(verbo.value, url.value)
    } else if (verbo.value == "DELETE") {
        hacerDelete(verbo.value, url.value)
    }else {
        modificar(verbo.value, url.value)
    };
});

// GET
async function obtenerGet(verbo, url){
    let respuesta = await fetch(url,{
        method:verbo
    });
    let datos = await respuesta.json();
    console.log(datos);
    titulo.innerText= 'Status: '+respuesta.status + ' Ok: '+respuesta.ok;
    json.innerHTML=JSON.stringify(datos);
};

// DELETE
async function hacerDelete(verbo, url){
    let respuesta = await fetch(url,{
        method:verbo
    });
    titulo.innerText= 'Borrado!!';
    json.innerHTML=''
};

// PUT PATH POST
async function modificar(verbo, url){
    let respuesta = await fetch(url,{
        method:verbo,
        headers:{'Content-Type':'application/json'},
        body: body.value
    });
    let datos = await respuesta.json();
    console.log(datos);
    titulo.innerText= 'Status: '+respuesta.status + ' Ok: '+respuesta.ok;
    json.innerHTML=JSON.stringify(datos);
};


