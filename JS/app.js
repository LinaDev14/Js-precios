const precios = [1045.0, 234, 456.98, 238.98, 3455, 234, 1045.0, 234];

/*
Ejercicio:

Deberá realizar el cálculo de : promedio, valor máximo, moda, suma total de los precios, suma
de los precios que son menores a 1500 dólares.
*/

//suma total de los precios que son

let longitud = precios.length;
console.log(longitud);

let sumaTotal = (previousValue, currentValue) => previousValue + currentValue;
console.log(precios.reduce(sumaTotal));


//Calculo del valor promedio
let avg = sumaTotal / precios.length; // o longitud
console.log(avg);

//Valor maximo
let valorMaximo = Math.max(...precios);
console.log(valorMaximo);
