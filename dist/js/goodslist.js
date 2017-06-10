$(function () {
	//插入头部尾部
	$("#top").load("pubilcTop.html")
	$("#foot").load("publicFoot.html")
	$.get("getGoodsList.php",function(data){
		var d=eval(data)
		var id,name,img,beiyong2;
		var price=0;
		for(var i=0;i<5;i++){
			id=d[i].goodsId;
			name=d[i].goodsName;
			img=d[i].goodsImg;
			price=d[i].goodsPrice;
			desc=d[i].goodsDesc;
			$(".goods1").append("<li ord='"+id+"'><img src='"+img+"'/><div class='dia_price'><a href='showGoods.html' class='price'><h4>"+name+"</h4><p><span>"+desc+"</span>￥<i>"+price+"</i></p></a><a href='showGoods.html' class='price_bg'></a></div></li>")

		}
		for(var i=5;i<d.length;i++){
			id=d[i].goodsId;
			name=d[i].goodsName;
			img=d[i].goodsImg;
			price=d[i].goodsPrice;
			desc=d[i].goodsDesc;
			
			$(".goods2").append("<li><img src='"+img+"'/><div class='dia_price'><a href='showGoods.html' class='price'><h4>"+name+"</h4><p><span>"+desc+"</span>￥<i>"+price+"</i></p></a><a href='showGoods.html' class='price_bg'></a></div></li>")
		}
	})
	$(".goods1").on("click","li",function () {
		saveCookie("goodsId",$(this).attr("ord"),7);
		location.href="showGoods.html";
	})
	$(".goods2").on("click","li",function () {

		saveCookie("goodsId",$(this).attr("ord"),7);
		location.href="showGoods.html";
	})
});
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
}