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
 { numero: "4°", texto: "cuarto" },
 { numero: "5°", texto: "quinto" },
 { numero: "6°", texto: "sexto" },
 { numero: "7°", texto: "séptimo" },
 { numero: "8°", texto: "octavo" },
 { numero: "9°", texto: "noveno" },
 { numero: "10°", texto: "décimo" },
 { numero: "11°", texto: "undécimo" },
 { numero: "12°", texto: "duodécimo" },
 { numero: "13°", texto: "decimotercero" },
 { numero: "14°", texto: "decimocuarto" },
 { numero: "15°", texto: "decimoquinto" },
 { numero: "16°", texto: "decimosexto" },
 { numero: "17°", texto: "decimoséptimo" },
 { numero: "18°", texto: "decimoctavo" },
 { numero: "19°", texto: "decimonoveno" },
 { numero: "20°", texto: "vigésimo" },
 { numero: "21°", texto: "vigésimo primero" },
 { numero: "22°", texto: "vigésimo segundo" },
 { numero: "23°", texto: "vigésimo tercero" },
 { numero: "24°", texto: "vigésimo cuarto" },
 { numero: "25°", texto: "vigésimo quinto" },
 { numero: "26°", texto: "vigésimo sexto" },
 { numero: "27°", texto: "vigésimo séptimo" },
 { numero: "28°", texto: "vigésimo octavo" },
 { numero: "29°", texto: "vigésimo noveno" },
 { numero: "30°", texto: "trigésimo" },
 { numero: "31°", texto: "trigésimo primero" },
 { numero: "32°", texto: "trigésimo segundo" },
 { numero: "33°", texto: "trigésimo tercero" },
 { numero: "34°", texto: "trigésimo cuarto" },
 { numero: "35°", texto: "trigésimo quinto" },
 { numero: "36°", texto: "trigésimo sexto" },
 { numero: "37°", texto: "trigésimo séptimo" },
 { numero: "38°", texto: "trigésimo octavo" },
 { numero: "39°", texto: "trigésimo noveno" },
 { numero: "40°", texto: "cuadragésimo" },
 { numero: "41°", texto: "cuadragésimo primero" },
 { numero: "42°", texto: "cuadragésimo segundo" },
 { numero: "43°", texto: "cuadragésimo tercero" },
 { numero: "44°", texto: "cuadragésimo cuarto" },
 { numero: "45°", texto: "cuadragésimo quinto" },
 { numero: "46°", texto: "cuadragésimo sexto" },
 { numero: "47°", texto: "cuadragésimo séptimo" },
 { numero: "48°", texto: "cuadragésimo octavo" },
 { numero: "49°", texto: "cuadragésimo noveno" },
 { numero: "50°", texto: "quincuagésimo" },
 { numero: "51°", texto: "quincuagésimo primero" },
 { numero: "52°", texto: "quincuagésimo segundo" },
 { numero: "53°", texto: "quincuagésimo tercero" },
 { numero: "54°", texto: "quincuagésimo cuarto" },
 { numero: "55°", texto: "quincuagésimo quinto" },
 { numero: "56°", texto: "quincuagésimo sexto" },
 { numero: "57°", texto: "quincuagésimo séptimo" },
 { numero: "58°", texto: "quincuagésimo octavo" },
 { numero: "59°", texto: "quincuagésimo noveno" },
 { numero: "60°", texto: "sexagésimo" },
 { numero: "61°", texto: "sexagésimo primero" },
 { numero: "62°", texto: "sexagésimo segundo" },
 { numero: "63°", texto: "sexagésimo tercero" },
 { numero: "64°", texto: "sexagésimo cuarto" },
 { numero: "65°", texto: "sexagésimo quinto" },
 { numero: "66°", texto: "sexagésimo sexto" },
 { numero: "67°", texto: "sexagésimo séptimo" },
 { numero: "68°", texto: "sexagésimo octavo" },
 { numero: "69°", texto: "sexagésimo noveno" },
 { numero: "70°", texto: "septuagésimo" },
 { numero: "71°", texto: "septuagésimo primero" },
 { numero: "72°", texto: "septuagésimo segundo" },
 { numero: "73°", texto: "septuagésimo tercero" },
 { numero: "74°", texto: "septuagésimo cuarto" },
 { numero: "75°", texto: "septuagésimo quinto" },
 { numero: "76°", texto: "septuagésimo sexto" },
 { numero: "77°", texto: "septuagésimo séptimo" },
 { numero: "78°", texto: "septuagésimo octavo" },
 { numero: "79°", texto: "septuagésimo noveno" },
 { numero: "80°", texto: "octogésimo" },
 { numero: "81°", texto: "octogésimo primero" },
 { numero: "82°", texto: "octogésimo segundo" },
 { numero: "83°", texto: "octogésimo tercero" },
 { numero: "84°", texto: "octogésimo cuarto" },
 { numero: "85°", texto: "octogésimo quinto" },
 { numero: "86°", texto: "octogésimo sexto" },
 { numero: "87°", texto: "octogésimo séptimo" },
 { numero: "88°", texto: "octogésimo octavo" },
 { numero: "89°", texto: "octogésimo noveno" },
 { numero: "90°", texto: "nonagésimo" },
 { numero: "91°", texto: "nonagésimo primero" },
 { numero: "92°", texto: "nonagésimo segundo" },
 { numero: "93°", texto: "nonagésimo tercero" },
 { numero: "94°", texto: "nonagésimo cuarto" },
 { numero: "95°", texto: "nonagésimo quinto" },
 { numero: "96°", texto: "nonagésimo sexto" },
 { numero: "97°", texto: "nonagésimo séptimo" },
 { numero: "98°", texto: "nonagésimo octavo" },
 { numero: "99°", texto: "nonagésimo noveno" },
 { numero: "100°", texto: "centésimo" }
];

let preguntas = [];
for (let i = 0; i < 10; i++) {
 let numeroAleatorio;
 do {
 numeroAleatorio = Math.floor(Math.random() * numerosOrdinales.length);
 } while (preguntas.includes(numeroAleatorio));
 preguntas.push(numeroAleatorio);
}

let preguntaActualIndex = 0;

function generarPregunta() {
 const preguntaActual = numerosOrdinales[preguntas[preguntaActualIndex]];
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
 const preguntaActual = numerosOrdinales[preguntas[preguntaActualIndex]];
 if (respuestaSeleccionada === preguntaActual.texto) {
 puntos++;
 puntosElement.textContent = `Puntos: ${puntos}`;
 resultadoElement.textContent = "¡Correcto!";
 } else {
 resultadoElement.textContent = `Incorrecto. La respuesta correcta es ${preguntaActual.texto}.`;
 preguntasIncorrectas.push(preguntas[preguntaActualIndex]);
 }
 preguntaActualIndex++;
 if (preguntaActualIndex < preguntas.length) {
 generarPregunta();
 } else {
 preguntaElement.textContent = "¡Juego terminado!";
 respuestasElement.forEach(button => button.disabled = true);
 }
}

generarPregunta();
