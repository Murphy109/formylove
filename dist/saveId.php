<?php
	$goodsid=$_GET['good'];
	header("Content-type","text/html;charset=utf-8");
	//1、建立连接（搭桥）
	$con = mysql_connect("localhost:3306","root","qianfeng");
	//2、选择数据库
	mysql_select_db("user",$con);
	//3、执行SQL语句
	$sqlStr ="insert into goods(goodsid) values(".$goodsid.")";
	mysql_query($sqlStr,$con);
	//4、关闭数据库
	mysql_close($con);
	
	
?>