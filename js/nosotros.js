//CONTADOR CARRITO
const carritoHtmlNosotros = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
	}
}
rellenarCarrito(carritoHtmlNosotros);

function contadorCarrito(arrayCarrito) {
	let totalCarrito = 0;

	for (let producto of arrayCarrito) {
		totalCarrito += producto.amount;
	}
	$('.contadorCarrito').html(`(${totalCarrito})`);
}
contadorCarrito(carritoHtmlNosotros);
