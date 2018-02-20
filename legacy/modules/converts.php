<?php
// get usd and TRY prices// 
	$europrice = $data_euro[0]['price_eur'];
	$ethprice = $data_eth[0]['price_eth'];
    $steemprice = $data_steem[0]['price_usd'];
	$btcdollar = $data_btc[0]['price_usd'];
// Prices for calculator //
    
	$dollarprice = $data_sbd[0]['price_usd'];
	$tryprice = $data_sbd[0]['price_try'];
	$btcprice = $data_sbd[0]['price_btc'];
	
// 24h Volume changes //
    $sbd_volume = $data_sbd[0]['percent_change_24h'];
	$steem_volume = $data_steem[0]['percent_change_24h'];
	$btc_volume = $data_btc[0]['percent_change_24h'];
// 1h volume changes //

    $sbd_1h_volume = $data_sbd[0]['percent_change_1h'];
	$steem_1h_volume = $data_steem[0]['percent_change_1h'];
	$btc_1h_volume = $data_btc[0]['percent_change_1h'];
	
?>