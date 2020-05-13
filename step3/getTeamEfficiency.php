<?php

header('Content-Type: application/json');

include "database.php";

$privilege=$_GET['access'];

if ($privilege==$graphs['team_efficiency']['access']){
    $teamEfficiency=[
        'type' => $graphs['team_efficiency']['type'],
        'labels' => array_keys($graphs['team_efficiency']['data']),
        'fatturato'=> array_values($graphs['team_efficiency']['data'])   
    ];
    echo json_encode($teamEfficiency);
} else{
    echo json_encode(['error'=>'Non hai i privilegi per vedere queste informazioni']);
}
?>