//RELLENO CARRITO EN CARRITO.HTML

let carrito = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
		$('.tbody').append(
			`<tr><td> ${producto.name} </td>
			<td> $${producto.price} </td>
			<td> <p>${producto.amount}</p> 
			<button type="button" class="btn btn-danger agregar" id="${producto.id}">+</button>
			<button class="btn btn-danger sacar" id="${producto.id}">-</button></td>
			<td class="subtotal"> $${producto.price * producto.amount}</td>
			<td><button type="button" class="btn btn-danger delete" id="${producto.id}">Eliminar</button></td></tr>`
		);
	}
}
rellenarCarrito(carrito);

//CONTADOR CARRITO...........................................................
function contadorCarrito(arrayCarrito) {
	let totalCarrito = 0;

	for (let producto of arrayCarrito) {
		totalCarrito += producto.amount;
	}

	$('.contadorCarrito').html(` `);
	$('.contadorCarrito').html(`(${totalCarrito})`);
}
contadorCarrito(carrito);

//ELIMINAR ELEMENTO........................................................

let botonesDelete = document.querySelectorAll('.delete');

botonesDelete.forEach((elemento) => {
	elemento.addEventListener('click', borrar);
});

//funcion borrar
function borrar(e) {
	let index = carrito.findIndex((producto) => producto.id == e.target.id);
	carrito.splice(index, 1);

	let fila = e.target.parentNode.parentNode;
	fila.remove();

	localStorage.setItem('carrito', JSON.stringify(carrito));

	totalCompra(carrito);

	let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
	contadorCarrito(carritoGuardado);
}

//BOTON + - PRODUCTOS.............................................................
//agregar
let botonesAgregar = document.querySelectorAll('.agregar');

botonesAgregar.forEach((elemento) => {
	elemento.addEventListener('click', agregar);
});

//funcion agregar
function agregar(e) {
	let conteo = e.target.parentNode.children[0].innerText;
	let price = e.target.parentNode.parentNode.children[1].innerText;
	let subtotal = e.target.parentNode.parentNode.children[3].innerText;
	price = parseInt(price.replace('$', ''));

	//aumento de contador
	conteo++;
	e.target.parentNode.children[0].innerText = conteo;

	//muestra de precio subtotal por producto
	subtotal = price * conteo;
	e.target.parentNode.parentNode.children[3].innerText = '$' + subtotal;

	//que sea solo para ese producto y lo guarde en el carrito
	let index = carrito.findIndex((producto) => producto.id == e.target.id);
	carrito[index].amount = conteo;

	//que se actualice solo el contador del carrito y el total
	localStorage.setItem('carrito', JSON.stringify(carrito));
	totalCompra(carrito);
	let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
	contadorCarrito(carritoGuardado);
}

//sacar
let botonesSacar = document.querySelectorAll('.sacar');

botonesSacar.forEach((elemento) => {
	elemento.addEventListener('click', sacar);
});

//funcioon sacar
function sacar(e) {
	let conteo = e.target.parentNode.children[0].innerText;
	let price = e.target.parentNode.parentNode.children[1].innerText;
	let subtotal = e.target.parentNode.parentNode.children[3].innerText;
	price = parseInt(price.replace('$', ''));

	if (conteo >= 2) {
		conteo--;
		e.target.parentNode.children[0].innerText = conteo;

		subtotal = price * conteo;
		e.target.parentNode.parentNode.children[3].innerText = '$' + subtotal;
	} else {
		conteo = 1;
		subtotal = price;
	}

	//que sea solo para ese producto y lo guarde en el carrito
	let index = carrito.findIndex((producto) => producto.id == e.target.id);
	carrito[index].amount = conteo;

	//que se actualice solo el contador del carrito y el total
	localStorage.setItem('carrito', JSON.stringify(carrito));
	totalCompra(carrito);
	let carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
	contadorCarrito(carritoGuardado);
}

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

//BOTON COMPRAR.............................................................

if (carrito.length >= 1) {
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
} else {
	$('#comprarFinal').on('click', function() {
		Swal.fire({
			icon: 'error',
			title: 'Ups!',
			text: 'Para poder procesar la compra debes agregar elementos al carrito.',
			confirmButtonColor: '#d90429'
		});
	});
}
