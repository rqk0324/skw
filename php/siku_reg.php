<?php 
			header("content-type:text/html;charset=utf-8");
		$userId = $_POST["userId"];
		$userPass = $_POST["userPass"];
		$conn = mysql_connect("localhost:3306","root","root");

		mysql_select_db("rqk",$conn);

			$sqlstr="insert into sikureg(sikuId,sikuPass)
     values('$userId','$userPass')";

     $result=mysql_query($sqlstr,$conn);

        mysql_close($conn);
        if($result>0){
        	echo "1";
        }else{
        	echo "0";
        }
 ?>