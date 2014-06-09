<?php

    <?php

    $json = array(
                    array("id"=>"0",
                          "name"=>"Leon",
                          "music"=>array("Rock","Metal","Dubstep","Electro")),
                    array("id"=>"1",
                          "name"=>"Chris",
                          "music"=>array("Rock","Metal","Dubstep","Electro")),
                    array("id"=>"2",
                          "name"=>"Harry",
                          "music"=>array("Rock","Metal","Romantic","Electro")),
                    array("id"=>"3",
                          "name"=>"Alyce",
                          "music"=>array("Rock","Metal","Dubstep","Electro")),

                );

    $data = $json;

    //var_dump($data);

    //echo "<br>".$data["data"][2]["music"][2];

    /*
    [{
    "id": 0,
    "name": "Leon",
    "music": ["Rock", "Metal", "Dubstep", "Electro"]
}, {
    "id": 1,
    "name": "Chris",
    "music": ["Indie", "Drumstep", "Dubstep", "Electro"]
}, {
    "id": 2,
    "name": "Harry",
    "music": ["Rock", "Metal", "Thrash Metal", "Heavy Metal"]
}, {
    "id": 3,
    "name": "Alyce",
    "music": ["Pop", "RnB", "Hip Hop"]
}];
*/
    
    header('Content-Type: text/json');
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
    header('Content-type: application/json');

    echo json_encode($data);

?>

?>