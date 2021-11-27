/**
 * @challenge: Crear un algoritmo utilizando un ciclo - Desafío 3
 * 
 * @version: v1.2.0
 * @author: Micaela Mendoza
 * @fecha: 26/11/2021
 *
 * History:
 * v1.1.0 - Desafío 1
 * v1.1.0 - Desafío 2
 */

let number = parseInt(prompt('Ingrese un número impar para ingresar a la página'));

while (number % 2 === 0) {
	alert('Inténtelo nuevamente');
	number = parseInt(prompt('Ingrese un número impar para ingresar a la página'));
}
