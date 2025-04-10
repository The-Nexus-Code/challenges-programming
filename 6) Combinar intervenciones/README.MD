# 🧠 Combinar intervenciones

## 📄 Descripción

Este programa recibe un array de intervalos (pares de enteros) y devuelve un nuevo array donde **todos los intervalos superpuestos se combinan** en uno solo.

## 🔒 Restricciones

- `1 <= longitud de los intervalos <= 10⁴`
- `-10⁴ <= intervalo[i][0] <= intervalo[i][1] <= 10⁴`

## 📌 Ejemplos

### Ejemplo 1

- **Entrada:** `[[1, 3], [2, 6], [8, 10], [15, 18]]`
- **Salida:** `[[1, 6], [8, 10], [15, 18]]`

### Ejemplo 2

- **Entrada:** `[[1, 4], [4, 5]]`
- **Salida:** `[[1, 5]]`

## 🚀 Cómo usar

1. Asegúrate de tener un entorno que soporte el lenguaje de programación que estás utilizando (por ejemplo, Python, JavaScript, etc.).
2. Llama a la función pasando un array de intervalos como argumento.
3. El resultado será un nuevo array con **intervalos combinados** donde haya superposición.
