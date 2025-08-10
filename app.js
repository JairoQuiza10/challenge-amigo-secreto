let amigoSecreto = [];

function informacion (elemeto, texto){
    let asignarTexto = document.querySelector(elemeto);
    asignarTexto.innerHTML = texto;
}

//Creamos una funciona para agregar los nombre de los jugadores
function agregarAmigo (){
    //Guardamos los nombres ingresados en el input
    let nombre = document.getElementById('amigo').value;


    if (amigoSecreto.includes(nombre)){
        alert ('Nombre repetido, por favor ingrese otro nombre')

    }else if(nombre.trim() === ""){
        alert ('Agregue un jugador');
        
    }else{
        //Empujamos los nombres a la lista creada
        amigoSecreto.push(nombre);
    }
    

    //limpiamos el input
    document.querySelector('#amigo').value ='';
    console.log (amigoSecreto);

    //Mostramos en pantalla los nombres de las personas ingresadas
    informacion('#listaAmigos', amigoSecreto.join('<br>')); // Muestra cada elemento
    return;
    
}

function sortearAmigo(){
    //Creamos una condición en la cual tiene que haber más de 2 jugadores, de lo contrario no habrá juego
    if (amigoSecreto.length >= 2){
        
        let amigoElejido = Math.floor(Math.random()*amigoSecreto.length)
        let nombreElejido = amigoSecreto[amigoElejido]
        
        informacion ('#resultado', `El amigo secreto es ${nombreElejido}`);
        amigoSecreto.length =0;
        informacion('#listaAmigos', '');

    }else{
        alert ('Máximo 2 participantes para sortear');
    }
}





