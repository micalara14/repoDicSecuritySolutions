//PRECIOS POR ZONA
const instalaciones = [
	{ zona: 'GBA 1', precio: 2500, incluye: 'Zona Sur' },
	{ zona: 'GBA 2', precio: 2700, incluye: 'Zona Norte' },
	{ zona: 'GBA 3', precio: 2500, incluye: 'Zona Oeste' },
	{ zona: 'CABA', precio: 2300, incluye: 'CABA' }
];

//Zona GBA 1
let divGba1Precio = document.getElementById('divGba1Precio');
$('#boton1').on('click', function() {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'Zona Sur');
	nuevasInstalaciones.forEach((GBA1) => {
		$('#precio').html('$' + GBA1.precio);
	});
});

//Zona GBA 2
$('#boton2').on('click', function() {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'Zona Norte');
	nuevasInstalaciones.forEach((GBA2) => {
		$('#precio').html('$' + GBA2.precio);
	});
});

//Zona GBA 3
$('#boton3').on('click', function() {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'Zona Oeste');
	nuevasInstalaciones.forEach((GBA3) => {
		$('#precio').html('$' + GBA3.precio);
	});
});

//Zona CABA
$('#boton4').on('click', function() {
	nuevasInstalaciones = instalaciones.filter((instalacion) => instalacion.incluye === 'CABA');
	nuevasInstalaciones.forEach((CABA) => {
		$('#precio').html('$' + CABA.precio);
	});
});

//......................................
//PRODUCTOS
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
