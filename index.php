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
	<input name="user2" class="form-control mr-sm-1" type="text" placeholder="Someone else" >
	<br>	
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" name="check">Check it out!</button>
  </form>
</nav>
<?php

    $error = false;
    $payment = 0;
if(isset($_POST['check'])){
	
	$meme = $_POST['myself'];
    if($error == false){

    $myself_url = 'https://api.steemjs.com/get_discussions_by_blog?query={"tag":"'.$meme.'","limit":"100"}';
    $json= file_get_contents($myself_url);
    $data = json_decode($json,true);
  
    foreach ($data as $person1) {
	try
	{
	
	if(!($person1["pending_payout_value"] == "0.00 SBD")){
    $author=$person1['author'];
	$total_amount_mine = str_replace(" SBD", "", $person1["pending_payout_value"]);
	$payment = $payment + $total_amount_mine;
	}
   
	}
	catch(Exception $me){}
    }
	echo '<left>Author: '.$author.'</left>';
	echo 'Total SBD:'.$payment.'';
    }
    }
?>
</center>
</body>
</html>
