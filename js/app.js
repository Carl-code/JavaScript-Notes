// Arrays

const arreglo = ["texto", 456.1, false, { propiedad: "valor" }, [1, 2, 3]];
console.log(arreglo);

const amigos = ["Pedro", "Juan", "Nepamuseno"];
console.log(amigos[1]);

const colores = [];
colores[0] = "Rojo";
colores[1] = "Verde";
colores[2] = "Blanco";
colores[3] = "Amarillo";

console.log(colores);
console.log("El Arreglo Colores tiene: " + colores.length + " colores");

// Objetos

const persona = {
  nombre: "Carlos",
  edad: 29,
  correo: "correo@correo.com",
  suscripciones: {
    web: true,
    correo: true,
  },
  coloresFavoritos: ["Azul", "Morado"],
  saludo: function () {
    alert("Hola");
  },
};

console.log(persona.nombre);
console.log(persona["edad"]);
//  console.log(persona.saludo());
console.log(persona.coloresFavoritos[1]);
console.log(persona.suscripciones["web"]);

//  Template literals/strings

const nombre = "Carlos Ojeda";
const edad = 29;
const pais = "Mexico";

console.log(`La Persona se llama ${nombre} y tiene ${edad}, es de ${pais}`);

// Operador Ternario

const boleto = "vip";

const codigoAcceso = boleto === "vip" ? "VIP-123-456" : "REGULAR-456-789";

console.log(codigoAcceso);

// Funciones en Js

// Forma #1
function saludo() {
  console.log("Hola!");
}

saludo();

// Forma #2
const saludo = function () {
  console.log("Hola desde variable!");
};

// Forma #3 - Arrow Function
const saludo = () => {
  console.log("Hola!");
};

saludo();

/*
    - Parametros: Los valores especificados en la definicion
    - Argumentos: Los valores que le pasamos a la funcion cuando la Invocamos
*/

const saludo = (nombre) => {
  console.log(`Hola ${nombre}!`);
};

saludo("Carlos");

// Multiples parametros
const operacion = (tipo, numero1, numero2) => {
  if (tipo === "suma") {
    console.log(numero1 + numero2);
  } else if (tipo === "resta") {
    console.log(numero1 - numero2);
  }
};

operacion("suma", 100, 50);
operacion("resta", 100, 50);

/* Global Scope o variables locales
    - Son variables declaradas fuera de una funcion.
    - Podemos acceder a ellas desde cualquier parte del codigo.
    - Podemos usar const, let y var.
*/

var apellido = "Ojeda";
console.log("Hola " + apellido);

const saludo2 = () => {
  console.log("Hola " + apellido);
};
saludo2();

/* Local Scope o Variables Locales
  - Son las variables declaradas dentro de una funcion.
  - Solo podemos acceder a ellas desde dentro de la funcion.
*/

var obtenerNumeroLetras = (nombre) => {
  var numero = nombre.length;
  console.log(`${nombre} tiene ${numero} letras`);

  var funcionAnidada = () => {
    console.log(numero);
  };
  funcionAnidada();
};

obtenerNumeroLetras("Carlos");

/* Block Scope / Alcance de tipo Bloque
   - Pertenecen a las Variables declaradas con const o let dentro de un bloque {}.
   - Solo podemos acceder a ellas dentro del bloque.
*/

const edad1 = 19;

if (edad1 >= 18) {
  const accesoPermitido = true;
  if (true) {
    console.log(accesoPermitido);
  }
}

// Metodos para manipular Arreglos

/* Los arreglos en javascript en realidad son objetos. 
Esto significa que pueden contener propiedades y métodos.
Vamos a ver algunas de las propiedades y métodos mas importantes:
 */
const colores = ["Rojo", "Verde", "Azul"];

/* 
📌 .length 
(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
// console.log(colores.length);

/*
📌 .toString() 
Nos permite transformar un arreglo a una cadena de texto.
Por ejemplo para poder mostrarlo en el navegador.
*/
document.body.innerHTML = colores.toString();

/*
📌 .join()
Nos permite transformar un arreglop a una cadena de texto y separar cada elemento. 
*/
// console.log(colores.join('|'));

/*
📌 .sort()
Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/
const letras = ["c", "b", "d", "a"];
console.log(letras.sort());

// Tambien puede ordenar numeros.
const numeros = [3, 2, 4, 1];
console.log(numeros.sort());

/*
📌 .reverse()
Nos permite ordenar un arreglo de forma descendente. 
*/
console.log(letras.reverse());
console.log(numeros.reverse());

/*
📌 .concat()
Nos permite juntar dos arreglos en uno solo. 
*/
const arreglo1 = [1, 2, 3];
const arreglo2 = ["A", "B", "C"];
const arreglo3 = arreglo1.concat(arreglo2);

/* 
📌 .push()
Nos permite agregar un elemento al final de un arreglo.
*/
colores.push("Amarillo");

/*
📌 .pop()
Nos permite eliminar el ultimo elemento de un arrreglo. 
*/
colores.pop();

/* 
📌 .shift()
Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
console.log(dias[0]); // Lunes
const diaEliminado = dias.shift(); // Lunes

console.log(dias);
console.log(dias[0]); //Martes

/*
📌 .unshift()
Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift("Carlos");
console.log(dias);

/* 
📌 .splice()
Nos permite insertar elementos a un arreglo donde le especifiquemos.
- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
- 2do parametro - Cuantos elementos eliminar desde la posición indicada.
- Resto de parametros - Los elementos a insertar.
*/
const amigos1 = ["Alejandro", "Cesar", "Manuel"];
amigos.splice(1, 2, "Rafael", "Roberto");

// Tambien podemos usar splice para eliminar elementos sin insertar ninguno.
// amigos.splice(1, 1);

console.log(amigos1);

/* 📌 .slice()
Nos permite copiar una parte de un arreglo a otro.
- 1er parametro - Posición desde donde queremos copiar.
- 2do parametro - Hasta antes de que elemento copiar.
*/
const frutas = ["Fresa", "Manzana", "Uva", "Piña", "Mango", "Naranja", "Melon"];
const frutasFavoritas = frutas.slice(1, 5);
console.log(frutasFavoritas);
