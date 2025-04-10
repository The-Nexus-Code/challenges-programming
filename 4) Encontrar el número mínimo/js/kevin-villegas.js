// Encontrar el mínimo

// Descripción:
// Este programa recibe un array de números enteros y devuelve el valor mínimo contenido en él.

// Restricciones:
// - 1 <= longitud del array <= 100
// - -10⁴ <= nums[i] <= 10⁴

// Ejemplos:

// Ejemplo 1:
// Entrada: [3, 5, 1, 4]
// Salida: 1

// Ejemplo 2:
// Entrada: [-1, -3, -2]
// Salida: -3

// Cómo usar:
// 1. Asegúrate de tener un entorno que soporte el lenguaje de programación que estás utilizando (por ejemplo, JavaScript, C#, etc.).
// 2. Llama a la función con un array como argumento.
// 3. Obtendrás como resultado el número más bajo de ese array.

function obtenerMenor(nums) {
  let menor = nums[0];

  for (let i = 1; i < nums.length; i++) if (nums[i] < menor) menor = nums[i];

  return menor;
}

console.log(obtenerMenor([3, 5, 1, 4]));
