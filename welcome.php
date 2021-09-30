<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>


<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CGPA CALCULATOR</title>
    <link rel="stylesheet" href="welcome.css">
</head>
<body>
    <header> <h1>SGPA / CGPA CALCULATOR</h1></header>
   
    <a class="Subm" id="Subm"  href="sgpa.html">SGPA</a>
    <a class="Subm" id="Subm" href="cgpa.html">CGPA</a>

  
</body>
</html>