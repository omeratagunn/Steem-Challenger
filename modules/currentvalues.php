<?php
    // Turkish lira //
    $sbdvalue = 'https://api.coinmarketcap.com/v1/ticker/steem-dollars/?convert=TRY';
	$jsonsbd = file_get_contents($sbdvalue);
	$data_sbd = json_decode($jsonsbd, true);
	
	// Euro //
	$euro_value = 'https://api.coinmarketcap.com/v1/ticker/steem-dollars/?convert=EUR';
	$json_euro = file_get_contents($euro_value);
	$data_euro = json_decode($json_euro, true);
	
	// ETHEREUM //
	$eth_value = 'https://api.coinmarketcap.com/v1/ticker/steem-dollars/?convert=ETH';
	$json_eth = file_get_contents($eth_value);
	$data_eth = json_decode($json_eth, true);
?>