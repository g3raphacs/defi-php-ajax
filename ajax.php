<?php
// test first name
$fNameRES;
if(isset($_POST["first_name"])){
    if(strlen($_POST["first_name"])>2){
        $fNameRES="valid";
    }else{
        $fNameRES="invalid: you must enter at least 3 letters";
    }
}
else{
    $fNameRES="invalid: you must enter a first name";
}



// envoi des données
echo json_encode(array("msg1"=>$fNameRES));