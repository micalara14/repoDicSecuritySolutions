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
