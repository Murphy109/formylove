<?php
	header("Content-type","text/html;charset=utf-8");
	$tel=$_POST['tel'];
	$password=$_POST['pass'];
	//1、建立连接（搭桥）
	$con = mysql_connect("localhost:3306","root","qianfeng");
	//2、选择数据库
	mysql_select_db("user",$con);
	//3、执行SQL语句
	$sqlStr ="select * from usersInfo where tel='".$tel."' and password='".$password."'";
	$result = mysql_query($sqlStr,$con);
	$rows = mysql_num_rows($result);
	if($rows==0){
		echo "false";
	}else{
		
		echo "true";
	}
	
	//4、关闭数据库
	mysql_close($con);
	
?>