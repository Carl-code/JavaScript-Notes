// Arrays

const arreglo = ['texto', 456.10, false, {propiedad: 'valor'}, [1,2,3]];
console.log(arreglo);

const amigos = ['Pedro', 'Juan', 'Nepamuseno'];
console.log(amigos[1]);

const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[2] = 'Blanco';
colores[3] = 'Amarillo';

console.log(colores);
console.log('El Arreglo Colores tiene: ' + colores.length + ' colores');

// Objetos

 const persona = {
    nombre: 'Carlos',
    edad: 29,
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Azul', 'Morado'],
    saludo: function(){
        alert('Hola');
    }
 };

 console.log(persona.nombre);
 console.log(persona['edad']);
 console.log(persona.saludo());
 console.log(persona.coloresFavoritos[1]);
 console.log(persona.suscripciones['web']);