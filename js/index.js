/**
<<<<<<< HEAD
 * @challenge: Crear un algoritmo con un condicional - Desafío 2
 * 
 * @version: v1.1.0
 * @author: Micaela Mendoza
 * @fecha: 25/11/2021
 *
 * History:
 * v1.1.0 - Desafío 1
 */

let name = prompt('Ingrese su nombre');
let rooms = parseInt(prompt('Ingrese la cantidad de ambientes que tiene su domicilio'));
let cost = 0;

if (rooms > 0 && rooms <= 1) {
	cost = 2000;
} else if (rooms > 1 && rooms <= 4) {
	cost = 4000;
} else if (rooms > 4) {
	cost = 6000;
} else {
	alert('Ingrese un número válido');
}

if (!isNaN(rooms) && rooms > 0) {
	alert('Hola ' + name + '! El costo básico de su solicitud es $' + cost);
}
=======
 * @challenge: Crear un algoritmo JS simple - Desafío 1
 * 
 * @version: v1.0.0
 * @author: Micaela Mendoza
 * @fecha: 18/11/2021
 *
 * History:
 */

let date = parseInt(prompt('Introduce tu año de nacimiento'));
let name = prompt('Introduce tu nombre');
let currentYear = 2021;
let age = currentYear - date;
alert('Hola ' + name + '! Tu edad es ' + age);
>>>>>>> cb1b47d48eee1eac33c17a9e173b96ed6bd627be
