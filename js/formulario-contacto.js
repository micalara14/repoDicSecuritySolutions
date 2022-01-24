// FORMULARIO CONTACTO
// boton enviar
let formulario = document.getElementById('formulario');
formulario.addEventListener('submit', validar);

let mail = document.getElementById('mailControlInput1');
let divButtons = document.getElementById('divButtons');
let result = document.createElement('div');
divButtons.appendChild(result);
result.classList.add('result');

function validar(e) {
	e.preventDefault();
	result.innerHTML = `Hola ${mail.value}! Formulario enviado.`;
}
// boton reset
function rst() {
	formulario.reset();
	result.innerHTML = '';
}

//CONTADOR CARRITO
const carritoHtmlFormulario = JSON.parse(localStorage.getItem('carrito'));

function rellenarCarrito(arrayCarrito) {
	for (let producto of arrayCarrito) {
	}
}
rellenarCarrito(carritoHtmlFormulario);

function contadorCarrito(arrayCarrito) {
	let totalCarrito = 0;

	for (let producto of arrayCarrito) {
		totalCarrito += producto.amount;
	}
	$('.contadorCarrito').html(`(${totalCarrito})`);
}
contadorCarrito(carritoHtmlFormulario);
