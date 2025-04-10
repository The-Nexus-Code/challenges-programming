//Producto de dos números

//Descripción

//Este programa recibe un array de números enteros y busca **dos elementos** cuyo producto sea el **mayor posible**. Devuelve dicho producto.

// Restricciones

//`2 <= longitud del array <= 100`
//`-10⁴ <= nums[i] <= 10⁴`

//  Ejemplos

//Ejemplo 1

//**Entrada:** `[5, 7, 2, 4]`
//**Salida:** `35`

// Ejemplo 2

//**Entrada:** `[-10, -20, -5, 0, 3]`
//**Salida:** `200`

// 🚀 Cómo usar

//1. Asegúrate de tener un entorno que soporte el lenguaje de programación que estás utilizando (por ejemplo, Python, JavaScript, etc.).
//2. Llama a la función con un array como argumento.
//3. El resultado será el **mayor producto posible** entre dos números del array.

function productoMayor(nums) {
  let mayor = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;

    while (j < nums.length) {
      let producto = nums[i] * nums[j];
      if (producto > mayor) {
        mayor = producto;
      }
      j++;
    }
  }

  return mayor;
}

console.log(productoMayor([5, 7, 2, 4]));
