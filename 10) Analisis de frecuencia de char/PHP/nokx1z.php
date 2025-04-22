<?php

    //Análisis de frecuencia de caracteres. Dada una cadena, devuelve un diccionario con la frecuencia de cada carácter en la cadena. Las letras mayúsculas y minúsculas deben ser tratadas como iguales.


    define("WORDS", "aabbcc");



    function analizeChar($x){
        
        $contador = [];
        $arreglo = str_split($x);

        foreach ($arreglo as $key) {

            if (isset($contador[$key])) {
                $contador[$key]++;
            }else{
                $contador[$key] = 1;
            }

        }
        print_r($contador);
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Analisis</title>
    <style>
    body {
      background-color: black;
      color: white;
    }
  </style>
</head>
<body>
    <?=analizeChar(WORDS);?>
</body>
</html>