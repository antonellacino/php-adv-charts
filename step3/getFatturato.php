<?php

header('Content-Type: application/json');


include "database.php";

$privilege=$_GET['access'];

if($privilege==="guest" or "employee"){
    echo json_encode($graphs['fatturato']);
} else {
    echo json_encode(['error'=>'Non hai i privilegi per vedere queste informazioni']);
}
?>
