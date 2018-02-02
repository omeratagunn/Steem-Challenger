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
  <form method="POST" class="form-inline">
    <input name="myself" class="form-control mr-sm-2" type="text" placeholder="Your username" > vs
	<input name="someone" class="form-control mr-sm-1" type="text" placeholder="Someone you jealous" >
	<br>	
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" name="check">Im so jealous</button>
  </form>
</nav>
<?php
     
    $error = false;
    $payment = 0;
	$payment_someone = 0;
if(isset($_POST['check'])){
	
	$meme = $_POST['myself'];
	$himhim = $_POST['someone'];
	// if both inputs are empty give error //
	if(empty($meme && $himhim)){
	$error = true;
	echo "Fill the both inputs";
	}
	// both inputs filled, then give the result //
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
	
	
	$post_link_author = "https://www.steemit.com/@".$person1["author"]."/".$person1["permlink"];
	// no need to get data of 0.00 SBD //
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
	if($payment_someone > $payment){
		
		// if someone which means the username in second input have bigger amount of pending payment - BE JEALOUS //
		$jealousy = '<div class="alert alert-danger"><strong>Damn,</strong> Im so jealous on you!!!!</div>';
		echo $jealousy;
    }
	    // ELSE DONT CARE ABOUT HIM //
		else{
			$dont_care = '<div class="alert alert-danger"><strong>Yeah!!!</strong> Its okay, im not jealous :(</div>';
			echo $dont_care;
		}
	echo '<br>';
    echo '<div class="float-left">
	
		<div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
    	 <div class="well profile">
            <div class="col-sm-12">
                <div class="col-xs-12 col-sm-8">
                    <h2>'.$author.' vs '.$author_person2.'</h2>
                </div>             
                <div class="col-xs-12 col-sm-4 text-center">
                </div>
            </div>            
            <div class="col-xs-12 divider text-center">
                <div class="col-xs-12 col-sm-4 emphasis">
            
                  <div class="col-xs-12 col-sm-4 text-center">
                    <h2>'.$author.' '.$payment.'$</h2><br>
                    <h2><strong>'.$author_person2.' '.$payment_someone.'$</h2>                 
                    <div class="btn-group dropup btn-block">
                      </button>
                      
                    </div>
                </div>
            </div>
    	 </div>                 
		</div>
	</div>
</div>
	     
	';
  
    }
    }
?>


</center>
</body>
</html>
