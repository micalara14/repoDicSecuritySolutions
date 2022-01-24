//RELLENO CARRITO EN CARRITO.HTML

const carrito = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
		$('.tbody').append(
			`<tr><td> ${producto.name} </td><td> $${producto.price} </td><td> <p class="hola">${producto.amount}</p> <button type="button" class="btn btn-danger agregar">+</button> <button class="btn btn-danger">-</button></td><td> $${producto.price *
				producto.amount}</td><td><button type="button" class="btn btn-danger delete" id="${producto.id}">Eliminar</button></td></tr>`
		);
	}
}

rellenarCarrito(carrito);

//ELIMINAR ELEMENTO........................................................

let botonesDelete = document.querySelectorAll('.delete');

botonesDelete.forEach((elemento) => {
	elemento.addEventListener('click', borrar);
});

//contador carrito
function contadorCarrito(arrayCarrito) {
	let totalCarrito = 0;

	for (let producto of arrayCarrito) {
		totalCarrito += producto.amount;
	}

	$('.contadorCarrito').html(` `);
	$('.contadorCarrito').html(`(${totalCarrito})`);
}
contadorCarrito(carrito);

//función borrar
// function borrar(e) {
// 	let index = carrito.findIndex((producto) => producto.id == e.target.id);
// 	carrito.splice(index, 1);

// 	let fila = e.target.parentNode.parentNode;
// 	fila.remove();

// 	localStorage.setItem('carrito', JSON.stringify(carrito));

// 	totalCompra(carrito);

// 	let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
// 	contadorCarrito(carritoGuardado);
// }

//ACTUALIZACION PRECIO.......................................................
function totalCompra(arrayCarrito) {
	let totalProductos = 0;

	for (let producto of arrayCarrito) {
		totalProductos += producto.price * producto.amount;
	}
	$('#total').html('$' + totalProductos);

	localStorage.setItem('carrito', JSON.stringify(carrito));
}
totalCompra(carrito);

//BOTON + - PRODUCTOS.............................................................
// let botonesAgregar = document.querySelectorAll('.agregar');

// botonesAgregar.forEach((elemento) => {
// 	elemento.addEventListener('click', agregar);
// });

// function agregar(e) {
// 	let conteo = e.target.parentNode.children[0].innerText;
// 	conteo++;
// 	$('.hola').html(conteo);
// }

//BOTON COMPRAR.............................................................

$('#comprarFinal').on('click', function() {
	Swal.fire({
		title: 'Gracias por su compra!',
		text: 'Nos estaremos contactando con usted.',
		imageUrl: '../Imagenes/graciasCompra.jpg',
		confirmButtonColor: '#d90429',
		width: 600,
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'Custom image'
	});
});
