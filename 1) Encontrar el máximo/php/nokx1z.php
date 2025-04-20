<?php

    //Dada una lista de números, devuelve el más grande de la lista

    define("NUMBERS",  [3, 5, 1, 8, 2]);



    function getMaxim($x) {
        $mayor = NUMBERS[0];
        foreach ($x as $key) {
            if ($key > $mayor) {
                $mayor = $key;
            }
            }
            echo $mayor;
        }

getMaxim(NUMBERS);