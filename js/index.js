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

console.log(allCameras.filter((camera) => camera.price < 4500)); //Mostrando por consola cámaras con un precio menor que $4500
