// 🔢 Sumar números en una matriz

// 📄 Descripción
// Este programa recibe una matriz de enteros y devuelve la suma total de todos sus elementos.

// 🔒 Restricciones
// - `1 <= número de filas, número de columnas <= 100`
// - `-10⁴ <= matriz[i][j] <= 10⁴`

// 📌 Ejemplos

// Ejemplo 1
// - Entrada: [[1, 2, 3], [4, 5, 6]]
// - Salida: 21

// Ejemplo 2
// - Entrada: [[-1, -2], [-3, -4]]
// - Salida: -10

// 🚀 Cómo usar
// 1. Asegúrate de tener un entorno que soporte el lenguaje de programación que estás utilizando.
// 2. Llama a la función pasando una matriz como argumento.
// 3. El resultado será la suma de todos los elementos de la matriz.

function sumarMatriz(matriz) {
  let suma = 0;
  matriz.map((fila) => {
    fila.map((elementos) => {
      suma += elementos;
    });
  });

  return suma;
}

console.log(
  sumarMatriz([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // Salida: 21
console.log(
  sumarMatriz([
    [-1, -2],
    [-3, -4],
  ])
); // Salida: -10
