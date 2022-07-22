
// Tres parámetros: desde; hasta ; actualización
// Ciclo de iteración estático
// for(let i = 0; i < 21; i++) {
//     console.log("Iteración Nro. ", i);
// }

// Argentina, Uruguay, Chile, Colombia, Perú

// Ciclo de iteración dinámico
// let limite = parseInt(prompt("Ingreesa un numero:"));

// for (let i = 0; i < limite; i++) {
//     console.log("Iteración Nro." ,i);
//     if (i === 8){
//         break;
//     }
// }

// Uso de While
// debugger

// let seguimos = false;
// let factor = 1;
// let num = parseInt(prompt("Ingresa un numerito"));

// while(seguimos == true) {
//     console.log("Resultado", num * factor)
    
//     seguimos = confirm("Siguiente multiplicación?");
    
//     if (seguimos){
//         factor++;
//     }
// }

// Uso de Do While
// do {
//     console.log("Resultado", num * factor)
//     seguimos = confirm("Siguiente multiplicación?");
    
//     if (seguimos){
//         factor++;
//     }
// }while(seguimos)

// Uso de switch
// toLowerCase = Todo a minusculas
// toUpperCase = Todo a mayúsculas
// capitalize = Primera letra en mayúscula


// debugger

// let color = prompt("Ingrese un color");
//     color = color.toLocaleLowerCase();

// switch(color){
//     case "negro": 
//         console.log("Si, hay negro");
//     break;
//     case "rojo":
//         console.log("Si, hay rojo");
//     break;
//     case "amarillo":
//         console.log("No, no queda amarillo");
//     break;
//     default:
//         console.warn("No tenemos ese color."); 
// }