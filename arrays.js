var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);

var masFrutas = frutas.push("Uvas");

var ultimo = frutas.pop("Uvas");

var nuevaLongitud = frutas.unshift("Uvas");

//unshift ingresa al inicio del Array. 

var borrarFruta = frutas.shift("Uvas");

var posicion = frutas.indexOf("Cereza");

// _______

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);

}

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);

}

var estudiantes = ["María", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}


while(estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);

}