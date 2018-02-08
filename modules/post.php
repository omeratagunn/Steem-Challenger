<?php

			$post_link = "https://www.steemit.com/@".$author."/".$person1["permlink"];
			$post_title = $person1["title"];
			$price = str_replace(" SBD", "", $person1["pending_payout_value"]);
			
			if($price > 0.00){
		
			echo '
	
    <div class="col-md-10 col-sm-10 col-xs-12 col-lg-10 margin-auto-float-none"> 
    <div class="table-responsive">
    <table class="table blue-table">
 
  <tbody>
    <tr>
      <td>'.$post_link.'</td>
      <td scope="col">'.$post_title.'</td>
      <td>'.$price.'</td>
     
    </tr>
  </tbody>
</table>
</div>
</div>';
			}
?>