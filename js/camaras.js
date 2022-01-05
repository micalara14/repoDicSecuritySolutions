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
// class Productos {
// 	constructor(id, name, price, type) {
// 		this.id = id;
// 		this.name = name;
// 		this.price = price;
// 		this.type = type;
// 	}
// }

// let camara1 = new Productos(1, 'Cámara WIFI con vision nocturna, luz y parlante', 22500, 'cámara');
// let camara2 = new Productos(2, 'Cámara WIFI con visión nocturna', 20000, 'cámara');
// let camara3 = new Productos(3, 'Cámara WIFI DOMO con movimiento', 19500, 'cámara');
// let alarma1 = new Productos(4, 'Alarma inalámbrica', 45000, 'alarma');
// let alarma2 = new Productos(5, 'Alarma alámbrica', 30000, 'alarma');
// let alarma3 = new Productos(6, 'Botón de pánico', 6500, 'alarma');

// //JSON

// localStorage.setItem('camara 1', JSON.stringify(camara1));

// let divJson = document.getElementById('divJson');
// ;

// comprar.onclick = () => {
// 	divJson.innerHTML = `Usted eligió el producto: ${localStorage.getItem('camara 1')}`;
// };

const productos = [
	{
		id: 1,
		name: 'Cámara WIFI con vision nocturna, luz y parlante',
		price: 22500,
		type: 'cámara',
		img: '../Imagenes/camara-wifi-1.png'
	},
	{
		id: 2,
		name: 'Cámara WIFI con visión nocturna',
		price: 20000,
		type: 'cámara',
		img: '../Imagenes/camara-wifi-2.png'
	},
	{
		id: 3,
		name: 'Cámara WIFI DOMO con movimiento',
		price: 19500,
		type: 'cámara',
		img: '../Imagenes/camara-domo.png'
	},
	{
		id: 4,
		name: 'Alarma inalámbrica',
		price: 45000,
		type: 'alarma',
		img: '../Imagenes/alarma-inalambrica.png'
	},
	{
		id: 5,
		name: 'Alarma alámbrica',
		price: 30000,
		type: 'alarma',
		img: '../Imagenes/alarma-cableada.png'
	},
	{
		id: 6,
		name: 'Botón de pánico',
		price: 6500,
		type: 'alarma',
		img: '../Imagenes/boton-panico.png'
	}
];

//CARRITO

let carrito = [];

function rellenarProductos(arrayProductos) {
	for (let producto of arrayProductos) {
		$('#rowCamaras')
			.append(`<div class="col-md-4 col-sm-12 rowCamaras__col" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
		<div class="camaraEstilo">
			<img src="${producto.img}"> 
			<div class="camaraEstilo--info">
				<p>${producto.name}</p>
				<ul>
					<li>Visión nocturna a color</li>
					<li>Luz y parlante</li>
					<li>Detección de personas</li>
					<li>Visualización online 24hs</li>
				</ul>
			</div>
		</div>
		<p class="d-flex justify-content-center mt-3 rowCamaras__precioTexto"><b>${producto.name}</b></p>
		<p class="d-flex justify-content-center rowCamaras__precio">$${producto.price}</p>
		<button type="button" class="btn btn-danger btn-lg comprar" id="comprar">COMPRAR</button>
	</div>`);
	}
}

rellenarProductos(productos);
