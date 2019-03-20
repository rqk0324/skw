<?php 
	header("content-type:text/html;charset=utf-8");

	$userId=$_POST['userId'];
	$userPass=$_POST['userPass'];

	$connect=mysql_connect('localhost:3306','root','root');

	mysql_select_db("rqk",$connect);

	$sqlstr = "select * from sikureg where sikuId='$userId' and  sikuPass='$userPass'";
	$result =mysql_query($sqlstr,$connect);
	mysql_close($connect);
	$rows=mysql_num_rows($result);
	if($rows=="1"){
		echo "1";
	}else{
		echo "0";
	}
 ?>