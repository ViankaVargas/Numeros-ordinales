let puntos = 0;
let preguntasIncorrectas = [];
const preguntaElement = document.getElementById("pregunta");
const respuestasElement = document.querySelectorAll("#respuestas button");
const resultadoElement = document.getElementById("resultado");
const puntosElement = document.getElementById("puntos");

const numerosOrdinales = [
 { numero: "1°", texto: "primero" },
 { numero: "2°", texto: "segundo" },
 { numero: "3°", texto: "tercero" },
 // ...
 { numero: "100°", texto: "centésimo" },
];

let preguntaActual;

function generarPregunta() {
 let numeroAleatorio;
 if (preguntasIncorrectas.length > 0 && Math.random() < 0.5) {
 numeroAleatorio = preguntasIncorrectas[Math.floor(Math.random() * preguntasIncorrectas.length)];
 } else {
 numeroAleatorio = Math.floor(Math.random() * numerosOrdinales.length);
 }
 preguntaActual = numerosOrdinales[numeroAleatorio];
 preguntaElement.textContent = `¿Cuál es el número ordinal "${preguntaActual.numero}"?`;
 const respuestas = [];
 for (let i = 0; i < 4; i++) {
 respuestas.push(numerosOrdinales[Math.floor(Math.random() * numerosOrdinales.length)].texto);
 }
 respuestas[Math.floor(Math.random() * 4)] = preguntaActual.texto;
 respuestasElement.forEach((button, index) => {
 button.textContent = respuestas[index];
 button.onclick = verificarRespuesta;
 });
}

function verificarRespuesta(event) {
 const respuestaSeleccionada = event.target.textContent;
 if (respuestaSeleccionada === preguntaActual.texto) {
 puntos++;
 puntosElement.textContent = `Puntos: ${puntos}`;
 resultadoElement.textContent = "¡Correcto!";
 } else {
 resultadoElement.textContent = `Incorrecto. La respuesta correcta es ${preguntaActual.texto}.`;
 if (!preguntasIncorrectas.includes(numerosOrdinales.indexOf(preguntaActual))) {
 preguntasIncorrectas.push(numerosOrdinales.indexOf(preguntaActual));
 }
 }
 generarPregunta();
}

generarPregunta();
