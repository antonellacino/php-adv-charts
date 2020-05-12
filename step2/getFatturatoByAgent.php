<?php

header('Content-Type: application/json');

include "database.php";

$fatturato_by_agent=[
    "type"=> $graphs['fatturato_by_agent']['type'],
    "labels"=>array_keys($graphs['fatturato_by_agent']['data']),
    "fatturato"=>array_values($graphs['fatturato_by_agent']['data'])
];

echo json_encode($fatturato_by_agent);

?>
