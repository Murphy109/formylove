<?php
	header("Content-type","text/html;charset=utf-8");
	$tel=$_GET['tel'];
	//1、建立连接（搭桥）
	$con = mysql_connect("localhost:3306","root","qianfeng");
	//2、选择数据库
	mysql_select_db("user",$con);
	//3、执行SQL语句
	$sqlStr ="select * from usersInfo where tel='".$tel."'";

	$result = mysql_query($sqlStr,$con);
	
	$rows = mysql_num_rows($result);
	
	if($rows==0){
		echo "1";
	}else{
		
		echo "0";
	}
	
	//4、关闭数据库
	mysql_close($con);
	
?>