//CONTADOR CARRITO
const carritoHtmlservTecnico = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
	}
}
rellenarCarrito(carritoHtmlservTecnico);

function contadorCarrito(arrayCarrito) {
	let totalCarrito = 0;

	for (let producto of arrayCarrito) {
		totalCarrito += producto.amount;
	}
	$('.contadorCarrito').html(`(${totalCarrito})`);
}
contadorCarrito(carritoHtmlservTecnico);
