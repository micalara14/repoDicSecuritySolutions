//PRECIOS POR ZONA CON AJAX

const URLGET = '../JSON/pinstalacion.json';

//Zona GBA 1
$('#boton1').click(() => {
	$.getJSON(URLGET, function(respuesta, estado) {
		if (estado === 'success') {
			$('#precio').html(` $${respuesta[0].precio}`);
		}
	});
});

//Zona GBA 2
$('#boton2').click(() => {
	$.getJSON(URLGET, function(respuesta, estado) {
		if (estado === 'success') {
			$('#precio').html(` $${respuesta[1].precio}`);
		}
	});
});

//Zona GBA 3
$('#boton3').click(() => {
	$.getJSON(URLGET, function(respuesta, estado) {
		if (estado === 'success') {
			$('#precio').html(` $${respuesta[2].precio}`);
		}
	});
});

//Zona CABA
$('#boton4').click(() => {
	$.getJSON(URLGET, function(respuesta, estado) {
		if (estado === 'success') {
			$('#precio').html(` $${respuesta[3].precio}`);
		}
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

//CARRITO
let carrito = [];

class ProductoCarrito {
	constructor(name, id, price, amount, img, tot) {
		this.name = name;
		this.id = id;
		this.price = price;
		this.amount = 1;
		this.img = img;
		this.tot = price * amount;
	}
}

//PRODUCTOS EN PAGINA
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
		<p id="${producto.id}" class="d-flex justify-content-center mt-3 rowCamaras__precioTexto"><b>${producto.name}</b></p>
		<div class="bkPrice">
		<p class="d-flex justify-content-center rowCamaras__precio">$${producto.price}</p>
		</div>
		<button type="button" class="btn btn-danger btn-lg comprar" id="comprar">COMPRAR</button>
	</div>`);
	}

	// let carritoContador = JSON.parse(localStorage.getItem('carrito'));
	// contadorCarrito(carritoContador);
}

rellenarProductos(productos);

//ANIMACION CON JQUERY EN PRECIO DE PRODUCTOS
$(document).ready(function() {
	$('.bkPrice').fadeIn(4000);
	$('.bkPrice').css({
		'background-color': 'yellow'
	});
});

// ACCIÓN DEL BOTÓN COMPRAR
let botones = document.querySelectorAll('.comprar');

botones.forEach((elemento) => {
	elemento.addEventListener('click', comprar);
});
let subTotal = 0;
function comprar(e) {
	let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
	if (carritoGuardado) {
		carrito = carritoGuardado;
	}
	let index = carrito.findIndex((producto) => producto.id == e.target.parentNode.children[1].id);
	let name = e.target.parentNode.children[1].innerText;
	let price = e.target.parentNode.children[2].innerText;
	let img = e.target.parentNode.children[0].children[0].src;
	let id = e.target.parentNode.children[1].id;

	price = parseInt(price.replace('$', ''));

	if (index == -1) {
		const producto = new ProductoCarrito(name, id, price, img);
		carrito.push(producto);
		console.log(carrito);
	} else {
		carrito[index].amount++;
	}
	Swal.fire({
		position: 'top-end',
		icon: 'success',
		title: 'Elemento agregado',
		showConfirmButton: false,
		timer: 800
	});

	localStorage.setItem('carrito', JSON.stringify(carrito));
}

//AJAX CON JQUERY PARA OPINIONES
const URLGETT = 'https://jsonplaceholder.typicode.com/users';

$('#opiniones').one('click', function() {
	$.get(URLGETT, function(rta, status) {
		if (status === 'success') {
			let datos = rta;
			for (const dato of datos) {
				$('.rowTecnologia__opiniones').append(
					`<div class="rowTecnologia__opiniones--texto">${dato.name}: ${dato.email}</div>`
				);
			}
		}
	});
	$('.rowTecnologia__opiniones').append(`<p>Quienes recomiendan nuestros productos:</p>`);
});
