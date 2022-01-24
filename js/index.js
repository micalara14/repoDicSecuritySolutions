/**
 * @challenge:  Entrega proyecto final
 * 
 * @version: v4.0.0 
 * @author: Micaela Mendoza
 * @fecha: 12/01/2022
 *
 * History:
 * v1.0.0 - Desafío 1
 * v1.1.0 - Desafío 2
 * v1.2.0 - Desafío 3
 * v1.3.0 - Desafío 4
 * v1.4.0 - Desafío 5
 * v1.5.0 - Desafío 6
 * v2.0.0 - Segunda entrega desafío final
 * v.2.1.0 - Desafío 12
 * v.2.2.0 - Desafío 13 
 * v.3.0.0 - Tercera entrega desafío final
 */

//  CONTADOR CARRITO
const carritoHtmlIndex = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
	}
}
rellenarCarrito(carritoHtmlIndex);

function contadorCarrito(arrayCarrito) {
	let totalCarrito = 0;

	for (let producto of arrayCarrito) {
		totalCarrito += producto.amount;
	}
	$('.contadorCarrito').html(`(${totalCarrito})`);
}
contadorCarrito(carritoHtmlIndex);
