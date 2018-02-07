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
	<!-- navbar code starts-->
	<nav class="navbar navbar-default col-md-8 col-sm-8 col-xs-12 col-lg-8">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" style="top: 15px;">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand logo-class" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Cash Calculator</a></li>
      </ul>
      
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<!-- navbar code ends-->
<!-- Currency price section starts -->
<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 currency-live-price-section">
	<div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 margin-top-15">
		<p> SBD PRICE</p>
		<p> ####### </p>
	</div>
	<div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 margin-top-15">
		<p> STEEM PRICE</p>
		<p> ####### </p>
	</div>
	<div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 margin-top-15">
		<p> BTC PRICE</p>
		<p> ####### </p>
	</div>
      
</div>
<!-- currency price section ends -->
</header>
<center>

<img src="steemit.png" alt="Steemit" height="200" width="500" class="margin-top-15">
<nav class="navbar navbar-light bg-faded">
  <form method="GET" class="form-inline">
    <input name="myself" class="form-control mr-sm-2 margin-top-15" type="text" placeholder="Your username" >	
    <button class="btn btn-outline-success my-2 my-sm-0 user-submit-button" type="submit" name="check">Give it to me</button>
  </form>
</nav>

<!-- demo tables code, use this with your php code. I don't know php so i am leaving the table static -->

<!-- username table code starts -->
<div class="col-md-10 col-sm-10 col-xs-12 col-lg-10 margin-auto-float-none"> 
<div class="table-responsive">
  <table class="table green-table">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Bitcoin</th>
      <th scope="col">Ethereum</th>
      <th scope="col">Ripple</th>
      <th scope="col">STEEM</th>
      <th scope="col">American dollars</th>
      <th scope="col">Euro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iamankit</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<!--username table code ends-->

<!-- user posts table code starts -->
<h3>These are your posts</h3>
<div class="col-md-10 col-sm-10 col-xs-12 col-lg-10 margin-auto-float-none"> 
<div class="table-responsive">
  <table class="table green-table">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">Bitcoin</th>
      <th scope="col">Ethereum</th>
      <th scope="col">Ripple</th>
      <th scope="col">STEEM</th>
      <th scope="col">American dollars</th>
      <th scope="col">Euro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iamankit</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
</div>
</div>

<!-- user posts table ends-->	

<!-- tables static code ends -->


<?php

require 'cashcalculator.php';

?>
</center>
</body>
</html>
