/**
 * @challenge: Programacion avanzada con funciones - Desafío 4
 * 
 * @version: v1.3.0
 * @author: Micaela Mendoza
 * @fecha: 02/12/2021
 *
 * History:
 * v1.0.0 - Desafío 1
 * v1.1.0 - Desafío 2
 * v1.2.0 - Desafío 3
 */

let name = prompt('Ingrese su nombre');

let roomPrice = parseInt(prompt('Ingrese número de habitaciones a asegurar'));

if (roomPrice <= 2 && roomPrice > 0) {
	roomPrice = 2000;
} else if (roomPrice && roomPrice > 0) {
	roomPrice = 4000;
} else if (roomPrice >= 4 && roomPrice > 0) {
	roomPrice = 6000;
} else {
	alert('Ingrese un número válido');
}

let installationPrice = 1000;

if (roomPrice > 0) {
	function sum(roomPrice, installationPrice) {
		total = roomPrice + installationPrice;
		alert('Hola, ' + name + '! El precio del trabajo con instalación incluida es $' + total);
	}
} else {
}

sum(roomPrice, installationPrice);

let plus = prompt('Quiere agregar un seguro? Ingrese SI o NO');
let plusTotal = total + 1000;
let wPlusTotal = total;

if (plus.toUpperCase() == 'SI') {
	alert('El precio final es $' + plusTotal);
} else if (plus.toUpperCase() == 'NO') {
	alert('El precio final es $' + wPlusTotal);
} else {
	alert('Ingrese una respuesta válida');
}
