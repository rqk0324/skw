<?php 
			header("content-type:text/html;charset=utf-8");
		$userId =$_POST["userId"];
		$conn = mysql_connect("localhost:3306","root","root");
		mysql_select_db("rqk",$conn);
$sqlstr="select * from sikureg where sikuId='$userId'";
     $result = mysql_query($sqlstr,$conn);
        mysql_close($conn);
        	if(mysql_num_rows($result)==1){
        		echo "1";
        	}else{
        		echo "0";
        	}
 ?>