nombre = prompt("Por favor, ingresa tu nombre para comenzar el quiz:");

alert(`Hola ${nombre}, bienvenido al Quiz de Conocimientos Generales! Responde las preguntas y descubre tu puntaje al final.`);

const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Argentina?",
        opciones: ["Buenos Aires", "Córdoba", "Rosario"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Quién pintó 'La noche estrellada'?",
        opciones: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Nilo", "Amazonas", "Yangtsé"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿En qué año llegó el hombre a la Luna?",
        opciones: ["1965", "1969", "1972"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el metal líquido a temperatura ambiente?",
        opciones: ["Cobre", "Mercurio", "Aluminio"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        opciones: ["Venus", "Marte", "Júpiter"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo?",
        opciones: ["Canadá", "China", "Rusia"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué elemento químico tiene el símbolo 'Au'?",
        opciones: ["Plata", "Oro", "Argón"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Quién escribió 'Cien años de soledad'?",
        opciones: ["Pablo Neruda", "Gabriel García Márquez", "Julio Cortázar"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        opciones: ["Atlántico", "Índico", "Pacífico"],
        respuestaCorrecta: 2
    }
];

let preguntaActual = 0;
let puntaje = 0;

function mostrarPregunta() {
    const contenedorPregunta = document.getElementById('pregunta-actual');
    const contenedorOpciones = document.getElementById('opciones');

    contenedorPregunta.innerHTML = `<h3>Pregunta ${preguntaActual + 1}: ${preguntas[preguntaActual].pregunta}</h3>`;

    contenedorOpciones.innerHTML = '';
    preguntas[preguntaActual].opciones.forEach((opcion, index) => {
        const botonOpcion = document.createElement('button');
        botonOpcion.className = 'opcion';
        botonOpcion.innerHTML = opcion;
        botonOpcion.onclick = () => verificarRespuesta(index);
        contenedorOpciones.appendChild(botonOpcion);
    });
}

function verificarRespuesta(opcionSeleccionada) {
    const opciones = document.querySelectorAll('.opcion');
    opciones.forEach(opcion => opcion.disabled = true);

    if (opcionSeleccionada === preguntas[preguntaActual].respuestaCorrecta) {
        opciones[opcionSeleccionada].style.backgroundColor = '#d4edda';
        puntaje++;
    } else {
        opciones[opcionSeleccionada].style.backgroundColor = '#f8d7da';
        opciones[preguntas[preguntaActual].respuestaCorrecta].style.backgroundColor = '#d4edda';
    }

    setTimeout(() => {
        preguntaActual++;
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            mostrarResultado();
        }
    }, 1000);
}

function mostrarResultado() {
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = `
        <h2>Resultado Final</h2>
        <p>${nombre} Acertaste ${puntaje} de ${preguntas.length} preguntas</p>
        <p>Porcentaje de aciertos: ${(puntaje / preguntas.length * 100).toFixed(1)}%</p>
    `;


    console.log(`${nombre} tu Resultado es: ${puntaje}/${preguntas.length} (${(puntaje / preguntas.length * 100).toFixed(1)}%)`);
}

window.onload = mostrarPregunta;