const carrito = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
		console.log(producto);
		$('#pName').append(`<td class="row"> ${producto.name} </td>`);
		$('#pPrice').append(`<td class="row"> $${producto.price} </td>`);
		$('#pAmount').append(`<td class="row"> ${producto.amount} </td>`);
		$('#pSubtotal').append(`<td class="row"> $${producto.price * producto.amount}</td>`);
	}
}

rellenarCarrito(carrito);
