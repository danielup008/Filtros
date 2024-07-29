// Ejercicio 1: Filtrar Mayores de Edad
function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

const personas = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carlos', edad: 18 }
];
const resultado1 = filtrarMayoresDeEdad(personas);
document.getElementById('resultado1').innerHTML = `<ul>${resultado1.map(persona => `<li>${persona.nombre}, ${persona.edad} años</li>`).join('')}</ul>`;
console.log(resultado1);

// Ejercicio 2: Transformar y Filtrar Arreglos
function transformarYFiltrar(numeros) {
    return numeros.map(num => num ** 2).filter(cuadrado => cuadrado > 20);
}

const numeros = [2, 3, 4, 5];
const resultado2 = transformarYFiltrar(numeros);
document.getElementById('resultado2').innerHTML = `<ul>${resultado2.map(num => `<li>${num}</li>`).join('')}</ul>`;
console.log(resultado2);

// Ejercicio 3: Promesas y Asincronía
async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        document.getElementById('resultado3').innerHTML = `<ul>${data.map(user => `<li>${user.name}</li>`).join('')}</ul>`;
        console.log(data);
    } catch (error) {
        console.error('Hubo un problema con la petición Fetch:', error);
    }
}

// Llamada a la función
obtenerUsuarios();

// Ejercicio 4: Manipulación Compleja del DOM
document.getElementById('agregar').addEventListener('click', () => {
    const lista = document.getElementById('lista');
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = 'Nuevo ítem';

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        lista.removeChild(nuevoItem);
    });

    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);
});

// Ejercicio 5: Algoritmos y Estructuras de Datos
function ordenarPorPropiedad(arr, propiedad) {
    return arr.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1;
        }
        if (a[propiedad] > b[propiedad]) {
            return 1;
        }
        return 0;
    });
}

// Ejemplo de uso:
const objetos = [
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Luis', edad: 20 },
    { nombre: 'Carlos', edad: 18 }
];
const resultado4 = ordenarPorPropiedad(objetos, 'edad');
document.getElementById('resultado4').innerHTML = `<ul>${resultado4.map(obj => `<li>${obj.nombre}, ${obj.edad} años</li>`).join('')}</ul>`;
console.log(resultado4);
