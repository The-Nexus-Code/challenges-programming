// 🔁 Generar Permutaciones Únicas

// 📄 Descripción
// Dado un array de números enteros que puede contener duplicados, este programa genera
// todas las permutaciones únicas posibles.

// 🔒 Restricciones
// - 1 <= longitud del array <= 8
// - -10 <= nums[i] <= 10

// 📌 Ejemplos

// Ejemplo 1
// - Entrada: [1, 1, 2]
// - Salida: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

// Ejemplo 2
// - Entrada: [1, 2, 3]
// - Salida:
//   [[1, 2, 3], [1, 3, 2], [2, 1, 3],
//    [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// 🚀 Cómo usar
// 1. Asegúrate de tener un entorno que soporte tu lenguaje de programación preferido.
// 2. Llama a la función con un array de enteros (puede contener duplicados).
// 3. El resultado será una lista con todas las permutaciones únicas posibles.

function arraysDuplicados(nums) {
  const resultado = [];

  for (let i = 0; i < nums.length; i++) {
    if (!resultado.includes(nums[i])) resultado.push(nums[i]);
  }
  return resultado;
}

console.log(arraysDuplicados([1, 1, 2]));
console.log(arraysDuplicados([1, 2, 2, 3]));
console.log(arraysDuplicados([1, 1, 1, 1]));
