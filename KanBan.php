<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>KanBan</title>
</head>
<body>
    <div id="Todo">

</body>
</html>


<?php

//holaaaaaa
    $list = array(
        "Backlog" => array("a","b","c","d"), //pene
        "ToDo" => array("llista to do", "css maca"," nomes mostrar la llista"," com posar nou item ", "com eliminar nou item"),
        "Doing" => array("a","b","c","d"),
        "Done" => array("a","b","c","d")
        );
    
    
    
    foreach ($list as $key => $value) {
        $cont2 = 0;
        
        echo " <h3>$key</h3> <div id='$key'>";
        foreach ($value as $k) {
            $cont2++;
            echo "<b>$cont2.</b> $k <br>";
        }
        echo"</div>";
    }



?>