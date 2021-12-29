//PRECIOS POR ZONA
const instalaciones = [
	{ zona: 'GBA 1', precio: 2500, incluye: 'Zona Sur' },
	{ zona: 'GBA 2', precio: 2700, incluye: 'Zona Norte' },
	{ zona: 'GBA 3', precio: 2500, incluye: 'Zona Oeste' },
	{ zona: 'CABA', precio: 2300, incluye: 'CABA' }
];

//Zona GBA 1
let divGba1Precio = document.getElementById('divGba1Precio');
let boton1 = document.getElementById('boton1');

boton1.onclick = () => {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'Zona Sur');
	nuevasInstalaciones.forEach((GBA1) => {
		precio.innerHTML = `$${GBA1.precio}`;
	});
};

//Zona GBA 2
let divGba2Precio = document.getElementById('divGba2Precio');
let boton2 = document.getElementById('boton2');

boton2.onclick = () => {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'Zona Norte');
	nuevasInstalaciones.forEach((GBA2) => {
		precio.innerHTML = `$${GBA2.precio}`;
	});
};

//Zona GBA 3
let divGba3Precio = document.getElementById('divGba3Precio');
let boton3 = document.getElementById('boton3');

boton3.onclick = () => {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'Zona Oeste');
	nuevasInstalaciones.forEach((GBA3) => {
		precio.innerHTML = `$${GBA3.precio}`;
	});
};

//Zona GBA 3
let divCaba3Precio = document.getElementById('divCaba3Precio');
let boton4 = document.getElementById('boton4');

boton4.onclick = () => {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'CABA');
	nuevasInstalaciones.forEach((CABA) => {
		precio.innerHTML = `$${CABA.precio}`;
	});
};

//PRODUCTOS
class Productos {
	constructor(id, name, price, type) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.type = type;
	}
}

let camara1 = new Productos(1, 'Cámara WIFI con vision nocturna, luz y parlante', 22500, 'cámara');
let camara2 = new Productos(2, 'Cámara WIFI con visión nocturna', 20000, 'cámara');
let camara3 = new Productos(3, 'Cámara WIFI DOMO con movimiento', 19500, 'cámara');
let alarma1 = new Productos(4, 'Alarma inalámbrica', 45000, 'alarma');
let alarma2 = new Productos(5, 'Alarma alámbrica', 30000, 'alarma');
let alarma3 = new Productos(6, 'Botón de pánico', 6500, 'alarma');

//JSON

localStorage.setItem('camara 1', JSON.stringify(camara1));

let divJson = document.getElementById('divJson');

// boton2.onclick = () => {
// 	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'Zona Norte');
// 	nuevasInstalaciones.forEach((GBA2) => {
// 		precio.innerHTML = `$${GBA2.precio}`;
// 	});
// };

comprar.onclick = () => {
	divJson.innerHTML = `Usted eligió el producto: ${localStorage.getItem('camara 1')}`;
};
