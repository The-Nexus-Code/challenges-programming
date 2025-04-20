<?php 

    //Sumar números en una matriz 

    define("NUMBERS", [[1, 2, 3], [4, 5, 6], [10, 10]]);

    $numbers = array_merge(...NUMBERS);

    function suma($x){
        $acumulador = 0;
        foreach ($x as $key) {
            $resultado = $acumulador + $key;
            $acumulador = $resultado;
        }
        echo $resultado;

    }   
suma($numbers);
