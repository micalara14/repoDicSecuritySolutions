//RELLENO CARRITO EN CARRITO.HTML

const carrito = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
		$('.tbody').append(
			`<tr><td> ${producto.name} </td><td> $${producto.price} </td><td> ${producto.amount} </td><td> $${producto.price *
				producto.amount}</td><td><button type="button" class="btn btn-danger delete" id="${producto.id}">Eliminar</button></td></tr>`
		);
	}
}

rellenarCarrito(carrito);

//ELIMINAR ELEMENTO

let botonesDelete = document.querySelectorAll('.delete');

botonesDelete.forEach((elemento) => {
	elemento.addEventListener('click', borrar);
});

function borrar(e) {
	let index = carrito.findIndex((producto) => producto.id == e.target.id);
	carrito.splice(index, 1);

	let fila = e.target.parentNode.parentNode;
	fila.remove();

	localStorage.setItem('carrito', JSON.stringify(carrito));
	totalCompra(carrito);
}

//ACTUALIZACION PRECIO

function totalCompra(arrayCarrito) {
	let totalProductos = 0;

	for (let producto of arrayCarrito) {
		totalProductos += producto.price * producto.amount;
	}
	$('#total').html('$' + totalProductos);

	console.log(totalProductos);

	localStorage.setItem('carrito', JSON.stringify(carrito));
}
totalCompra(carrito);

//BOTON COMPRAR

$('#comprarFinal').on('click', function() {
	swal('Gracias por su compra!', 'Nos estaremos comunicando con usted', 'success');
});
