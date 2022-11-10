<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Document</title>
</head>
<body>
    <h1></h1>
</body>
</html>


<?php

//hola
    $list = array(
        "Backlog" => array(), //pene
        "To Do" => array(),
        "Doing" => array(),
        "Done" => array()
    );

    foreach ($list as $key => $value) {
        echo $key . "<br>";
    }
?>