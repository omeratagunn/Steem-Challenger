<html>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>
	<link href="style.css">

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="js/bootstrap.min" rel="stylesheet">
	<link href="css/bootstrap.min" rel="stylesheet">

<body>
<header>

</header>
<center>

<img src="steemit.png" alt="Steemit" height="200" width="500">
<nav class="navbar navbar-light bg-faded">
  <form method="POST" class="form-inline">
    <input name="myself" class="form-control mr-sm-2" type="text" placeholder="Your username" >
	<input name="someone" class="form-control mr-sm-1" type="text" placeholder="Whois?" >
	<br>	
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" name="check">Check it out!</button>
  </form>
</nav>
<?php

    $error = false;
    $payment = 0;
	$payment_someone = 0;
if(isset($_POST['check'])){
	
	$meme = $_POST['myself'];
	$himhim = $_POST['someone'];
	
	if(empty($meme && $himhim)){
	$error = true;
	echo "Fill the both inputs";
	}
    if($error == false){
    $someone_url = 'https://api.steemjs.com/get_discussions_by_blog?query={"tag":"'.$himhim.'","limit":"100"}';
    $myself_url = 'https://api.steemjs.com/get_discussions_by_blog?query={"tag":"'.$meme.'","limit":"100"}';
    $json= file_get_contents($myself_url);
	$json_someone= file_get_contents($someone_url);
	$data_someone= json_decode($json_someone,true);
    $data = json_decode($json,true);
  
    foreach ($data as $person1) {
	try
	{
	$author=$person1['author'];	
	
	
	
	if(!($person1["pending_payout_value"] == "0.00 SBD")){
    
	$total_amount_mine = str_replace(" SBD", "", $person1["pending_payout_value"]);
	$payment = $payment + $total_amount_mine;
	}
   
	}
	catch(Exception $me){}
    }
	foreach ($data_someone as $person2){
	
	
	$author_person2 = $person2['author'];
	if(!($person2["pending_payout_value"] == "0.00 SBD")){
	$total_amount_someone = str_replace(" SBD", "", $person2["pending_payout_value"]);
	$payment_someone = $payment_someone + $total_amount_someone;
	
	}
	
	}
	echo '<left>Author: '.$author.'</left>';
	echo 'Total SBD:'.$payment.'';
	echo '<right>Author: '.$author_person2.'</right>';
    }
    }
?>
</center>
</body>
</html>
