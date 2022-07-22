// Cree un algoritmo que me permite ingresar la cantidad de metros caminados en el día. Utilziaré el ciclo repetitivo For 
// para poder ingresar los datos unas 3 veces, es decir, los metros recorridos de 3 días y cumplir una condicion que hará que el ciclo termine.
// Finalmente le pregunto al usuario si quiere saber el día que más metros ha corrido y mediante un condicional if, si se cumple la condicion se mostrará en la consola

debugger

let d = "";
let m = 0;

let may = 0;
let diaMay = ""; 

for(let i=0; i<3; i++)
    {
        let d = prompt("Ingrese el día");
        let m = parseInt(prompt("Ingrese la cantidad de metros recorridos"));

        console.log("El día", d, "Usted ha corrido", m);
        
        if(m > may){
            may = m;
            diaMay = d;
        }  
    }  
        VerMay = confirm("¿Desea ver el el día que mas metros ha corrido?");

        if(VerMay == true)
        {
        console.log("El día que mas metros ha corrido fue: ", diaMay)
        }

