//RELLENO CARRITO EN CARRITO.HTML...........................................
let carrito = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
		$('.tbody').append(
			`<tr><td> <p>  ${producto.name} </p> </td>
			<td class="precioEnTabla"> <p> $${producto.price} </p> </td>
			<td> <p>${producto.amount}</p> 
			<div class="divBotones"> <p><button class="btn btn-danger sacar" title="${producto.id}">-</button></p>
			<p><button type="button" class="btn btn-danger agregar" title="${producto.id}">+</button></p> </div> </td> 
			<td class="subtotal"> <p> $${producto.price * producto.amount} </p> </td> 
			<td> <div class="divBotones"><button type="button" class="btn btn-danger delete" id="${producto.id}">Eliminar</button></div> </td></tr>`
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

	let fila = e.target.parentNode.parentNode.parentNode;
	fila.remove();

	localStorage.setItem('carrito', JSON.stringify(carrito));

	totalCompra(carrito);
	finalizarCompra(carrito);

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
	let conteo = e.target.parentNode.parentNode.parentNode.children[0].innerText;
	let price = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerText;
	let subtotal = e.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].innerText;
	price = parseInt(price.replace('$', ''));

	//aumento de contador
	conteo++;
	e.target.parentNode.parentNode.parentNode.children[0].innerText = conteo;

	//muestra de precio subtotal por producto
	subtotal = price * conteo;
	e.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].innerText = '$' + subtotal;

	//que sea solo para ese producto y lo guarde en el carrito
	let index = carrito.findIndex((producto) => producto.id == e.target.title);
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
	let conteo = e.target.parentNode.parentNode.parentNode.children[0].innerText;
	let price = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].innerText;
	let subtotal = e.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].innerText;
	price = parseInt(price.replace('$', ''));

	if (conteo >= 2) {
		conteo--;
		e.target.parentNode.parentNode.parentNode.children[0].innerText = conteo;

		subtotal = price * conteo;
		e.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].innerText = '$' + subtotal;
	} else {
		conteo = 1;
		subtotal = price;
	}

	//que sea solo para ese producto y lo guarde en el carrito
	let index = carrito.findIndex((producto) => producto.id == e.target.title);
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

//BOTON COMPRAR............................................................
function finalizarCompra() {
	if (carrito.length >= 1) {
		let botonPagoFinal = document.getElementById('comprarFinal');

		botonPagoFinal.addEventListener('click', (e) => {
			pagar();
		});

		const pagar = () => {
			const productosToMp = carrito.map((element) => {
				let nuevoElemento = {
					title: element.name,
					description: '',
					picture_url: '',
					category_id: element.id,
					quantity: element.amount,
					currency_id: 'ARS',
					unit_price: element.price
				};

				console.log(nuevoElemento);
				return nuevoElemento;
			});

			$.ajax({
				method: 'POST',
				url: 'https://api.mercadopago.com/checkout/preferences',
				data: JSON.stringify(productosToMp),
				headers: {
					Authorization: 'Bearer TEST-2243856972594068-020320-766fb839fea4fabfb498d5976c395f6e-187498555'
				},
				data: JSON.stringify({
					items: productosToMp
				}),
				success: function(response) {
					const data = response;

					window.open(data.init_point, '_blank');
				}
			});
		};
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
}
finalizarCompra(carrito);
