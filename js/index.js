/**
 * @challenge: Arrays - Desafío 6
 * 
 * @version: v1.5.0
 * @author: Micaela Mendoza
 * @fecha: 09/12/2021
 *
 * History:
 * v1.0.0 - Desafío 1
 * v1.1.0 - Desafío 2
 * v1.2.0 - Desafío 3
 * v1.3.0 - Desafío 4
 * v1.4.0 - Desafío 5
 */

//BIENVENIDA A LA PÁGINA
let name = prompt('Ingrese su nombre');

let roomPrice = parseInt(prompt('Ingrese número de habitaciones a asegurar'));

if (roomPrice <= 2 && roomPrice > 0) {
	roomPrice = 2000;
} else if (roomPrice && roomPrice > 0) {
	roomPrice = 3000;
} else if (roomPrice >= 4 && roomPrice > 0) {
	roomPrice = 4000;
} else {
	alert('Ingrese un número válido');
}

let installationPrice = 1000;

if (roomPrice > 0) {
	function sum(roomPrice, installationPrice) {
		total = roomPrice + installationPrice;
		alert('Hola, ' + name + '! El precio del trabajo con instalación incluida arranca en $' + total);
	}
} else {
}

sum(roomPrice, installationPrice);

let plus = prompt('Quiere agregar un seguro? Ingrese SI o NO');
let plusTotal = total + 1000;
let wPlusTotal = total;

if (plus.toUpperCase() == 'SI') {
	alert('El precio final es $' + plusTotal + '. En la consola verá las distintas opciones de cámaras');
} else if (plus.toUpperCase() == 'NO') {
	alert('El precio final es $' + wPlusTotal + '. En la consola verá las distintas opciones de cámaras');
} else {
	alert('Ingrese una respuesta válida');
}

//ARRAY UNO
let cameras = [
	{ brand: 'Hikvision', model: 1.6, range: '2.5mts', price: 4900 },
	{ brand: 'Dahua', model: 1.5, range: '2mts', price: 4000 },
	{ brand: 'Hikvision', model: 2.0, range: '3.5mts', price: 5500 }
];

//ARRAY DOS
let moreCameras = [ { brand: 'Ezviz', model: 1.8, range: '2.5mts', price: 4200 } ];

//CONCATENANDO ARRAYS
let allCameras;
allCameras = cameras.concat(moreCameras);

console.log(cameras); //Mostrando array 1 por consola
console.log(moreCameras); //Mostrando array 2 por consola
console.log(allCameras); //Mostrando concatenación de arrays por consola

//ORDENANDO ARRAY POR PRECIO DE MENOR A MAYOR
console.log(
	allCameras.sort(function(a, b) {
		return a.price - b.price;
	})
);
