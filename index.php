<html>
  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Steemit Challenger</title>
	<link href="style.css">

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="js/bootstrap.min" rel="stylesheet">
	<link href="css/bootstrap.min" rel="stylesheet">
	<link href="style.css" rel="stylesheet">
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

<body>
<header>

</header>
<center>

<img src="steemit.png" alt="Steemit" height="200" width="500">
<nav class="navbar navbar-light bg-faded">
  <form method="GET" class="form-inline">
    <input name="myself" class="form-control mr-sm-2" type="text" placeholder="Your username" >
	<br>	
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" name="check">Give it to me</button>
  </form>
</nav>
	System calculates your "total pending payouts" and gives you the amount how much you earned as American Dollars and Turkish liras by the current market ratio from "https://coinmarketcap.com/coins/views/all/"<br>
	Sistem "bekleyen ödelemerinizi" yani, bekleyen postlarınızın toplam değerini alır(içerde çarpar böler) ve Size sonucu Amerikan doları ve türk lirası olarak güncel "https://coinmarketcap.com/coins/views/all/" market değerine göre hesaplar.<br>
	
	<br>
	<b>Note: Calculation based on beneficaries system(dmania, dlive, utopian posts). If you are posting only on steemit results might be different<br>
	Not: Hesaplamalar dmania, dlive, utopian postlarının kesintilerine göre yapılmıştır. Eğer steemit postu atıyorsanız hesap farklı çıkabilir.

<?php
    $error = false;
    $payment = 0;
    error_reporting(0);
if(isset($_GET['check'])){
	
	$meme = $_GET['myself'];
	// if both inputs are empty give error //
	if(empty($meme)){
	$error = true;
	$error_input = '<div class="alert alert-danger"><strong>WARNING!!! </strong>Please type username</div>';
	echo $error_input;
	}
	// both inputs filled, then give the result //
    if($error == false){
    $myself_url = 'https://api.steemjs.com/get_discussions_by_blog?query={"tag":"'.$meme.'","limit":"50"}';
	$json= file_get_contents($myself_url);
    $data = json_decode($json,true);
	// GET data from https://coinmarketcap.com/coins/views/all/ //
	include 'currentvalues.php';
	include 'modules/currentvalues.php';
	include 'modules/converts.php';
	// Create the loop //
    foreach ($data as $person1) {
	try
	{
	$author=$person1['author'];	
	if(!($person1["pending_payout_value"] == "0.00 SBD")){
    $total_amount_mine = str_replace(" SBD", "", $person1["pending_payout_value"]);
	$payment = $payment + $total_amount_mine;
	// Steemit curator cut //
	$paymentsbd_mine = $payment * 75 / 100;
	// Beneficaries cut //
	$paymentsbd_mine_beneficaries = $paymentsbd_mine * 75 / 100;
	// %50 - %50 POST END //
	$payment_end_mine = $paymentsbd_mine_beneficaries / 2;
	// Calculation to the fiat //
	include 'modules/sbdfiat.php';
	$try_mine_total = intval($try_mine_total);
	$dollar_mine_total = intval($dollar_mine_total);
	$euro_mine_total = intval($euro_mine_total);
	
	// Calculation SP //
	$steem_power = $payment_end_mine / $dollarprice;
	
    }
    }
	catch(Exception $me){}
    }
	}
		if($error == false){
		// if api returns null, give warn //
		if($person1['author'] == null){
		
		$error = true;
		$error_null = '<div class="alert alert-danger"><strong>WARNING!!! </strong>This username doesnt exist</div>';
		echo $error_null;
	}   
	else{
		echo '<div class="alert alert-danger" role="alert">Prices direct fetch from coincapmarket.com ( live )</div>';
		echo '<div class="alert alert-success" role="alert">Total pending payouts: '.$payment.'. STU</div>';
		echo '<div class="alert alert-success" role="alert">Total amount of SBD(dmania, dlive,utopian): '.$payment_end_mine.'. SBD</div>';
		echo '<div class="alert alert-success" role="alert">Total amount of SBD(dmania, dlive,utopian): '.$steem_power.'. SP</div>';
	echo '<table class="table">
    <thead class="thead-inverse">
    <tr>
      <th>#</th>
      <th>Username</th>
      <th>Bitcoin</th>
	  <th>Ethereum</th>
      <th>American Dollar</th>
	  <th>Euro</th>
	  <th>TRY</th>
    </tr>
    <thead class="thead-inverse">
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>'.$author.'</td>
	  <td>'.$btc_mine_total.'</td>
      <td>'.$eth_mine_total.'</td>
      <td>'.$dollar_mine_total.' TRY</td>
	  <td>'.$euro_mine_total.' TRY</td>
	  <td>'.$try_mine_total.' TRY</td>
    </tr>

    </tbody>
    </table>';
    }
	}
    } 
?>
</center>
</body>
</html>
