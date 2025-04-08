// Este programa recibe un array de números enteros y devuelve el valor máximo contenido en él.
// Es decir, analiza todos los elementos del array y encuentra el mayor valor numérico.

// Restricciones:
// `1 <= longitud del array <= 100`
// - Esto significa que el array debe tener al menos un elemento y como máximo cien.
// `-10⁴ <= nums[i] <= 10⁴`
// - Cada número dentro del array puede ir desde -10.000 hasta 10.000.

// 📌 Ejemplos

// ### Ejemplo 1
// - Entrada: [1, 3, 5, 7]
// - En este caso, todos los números son positivos y están en orden ascendente.
// - Salida esperada: 7 (porque es el número más alto del array)

// ### Ejemplo 2
// - Entrada: [-1, -5, -3]
// - Aquí todos los números son negativos.
// - Salida esperada: -1 (porque, aunque es negativo, es el "menos negativo" o el mayor)

// ## 🚀 Cómo usar
// 1. Asegúrate de tener un entorno que soporte el lenguaje de programación que estás utilizando.
//    Por ejemplo: un navegador con consola para JavaScript, un intérprete para Python, etc.
// 2. Llama a la función con un array como argumento.
//    Por ejemplo: obtenerMaximo([1, 2, 3])
// 3. Obtendrás como resultado el número más alto de ese array.
//    Es decir, la función devolverá un único valor que representa el máximo.

internal class Program
{
    private static void Main(string[] args)
    {
        // Llamada a la función con un array de ejemplo
        var resultado = ObtenerMaximo([1, 3, 5, 7]);
        var negativo = ObtenerMaximo([-1, -5, -3]);
        var mixto = ObtenerMaximo([-1, 5, 3, -7]);
        Console.WriteLine(resultado);
        Console.WriteLine(negativo);
        Console.WriteLine(mixto);
    }
    private static double ObtenerMaximo(List<double> numbers) => numbers.Max();
}