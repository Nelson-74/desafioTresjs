//Nombre y comision
let textoA = 'Comision-20025';
let textoB = 'Nelson Andrada';
const blanco = " ";
let resultado = textoA + blanco + textoB;
console.log( resultado);

//for
for (let i = 1; i <=10; i++){
    alert(i);
    let ingresarNombre = prompt('Ingrese Nombre');
    if(i==5){
        break;
    }
    alert('Puesto n°: '+i+' Nombre:'+ingresarNombre);
    
}
//While
/*let entrada = prompt('Ingresar nombre de usuario');
while(entrada.toUpperCase() != 'ESC'){
    alert('El usuario que ingreso' + entrada);
    entrada = prompt('Ingresar edad');
}
let repetir = false;
do {
    console.log('solo una vez')
}while (repetir)*/
//switch
/*let numero = parseInt (prompt('¿Cuanto pesas?'));
switch (numero) {
    case 40:
        alert( 'Debes hacer fitness');
        break;
    case 60 :
        alert(' Debes ejercitarte mas');
        breack;
    case 75:
        alert(' Realiza crossfit');
        breack;            
    default:
        alert(' Sos sedentario');
        breack;
}*/

