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
