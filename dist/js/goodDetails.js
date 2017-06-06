$(function () {
	//插入头部尾部
	$("#top").load("pubilcTop.html")
	$("#foot").load("publicFoot.html")
	$(".flow").click(function () {
		var id=0;
		id= parseInt($("#goodsid").attr("goodsid"));
		
		$.get("saveId.php",{good:id},function(){
			alert("您选择的商品已加入至购物车");
			//console.log(good)
			//location.href="shopCar.html"
		})
	})
});

