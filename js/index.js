/**
 * @challenge: Incorporar objetos - Desafío 5
 * 
 * @version: v1.4.0
 * @author: Micaela Mendoza
 * @fecha: 06/12/2021
 *
 * History:
 * v1.0.0 - Desafío 1
 * v1.1.0 - Desafío 2
 * v1.2.0 - Desafío 3
 * v1.3.0 - Desafío 4
 */

class Camera {
	constructor(model, year, range) {
		this.model = model;
		this.year = year;
		this.range = range;
	}
	final() {
		console.log(`El modelo es ${this.model}, el año del modelo es ${this.year} y el rango es de ${this.range}`);
	}
}

let camera1 = new Camera('Hikvision', 2010, '3mts');
let camera2 = new Camera('Dahua', 2015, '4mts');
let camera3 = new Camera('Hezviz', 2020, '7mts');

camera1.final();
camera2.final();
camera3.final();

console.log(camera1, camera2, camera3);
