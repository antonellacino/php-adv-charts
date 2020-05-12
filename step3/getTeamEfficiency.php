<?php

header('Content-Type: application/json');

include "database.php";

$teamEfficiency=[
    'type' => $graphs['team_efficiency']['type'],
    'labels' => array_keys($graphs['team_efficiency']['data']),
    'fatturato'=> array_values($graphs['team_efficiency']['data'])   
];

echo json_encode($teamEfficiency);

?>