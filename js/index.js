/**
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
