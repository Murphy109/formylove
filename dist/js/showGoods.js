$(function () {
	//插入头部尾部
	$("#top").load("pubilcTop.html")
	$("#foot").load("publicFoot.html")
	var ids=getCookie("goodsId");
	var tel=getCookie("tel");
	$.get("getGoodsInfo.php",{"goodsId":ids},function(data){
		var d=eval("("+data+")");
		//console.log(d)
		var img1=d.beiyong1;
		var img2=d.beiyong2;
		var img3=d.beiyong3;
		var name=d.goodsName;
		var	price=d.goodsPrice;
		var	desc=d.goodsDesc;
		var imgs=[];
		imgs=eval(d.beiyong4);
		$(".big_img").append("<li><img src='"+img1+"'/></li><li><img src='"+img2+"'/></li><li><img src='"+img3+"'/></li>")
		$(".small_img").append("<li><img src='"+img1+"'/></li><li><img src='"+img2+"'/></li><li><img src='"+img3+"'/></li>")
		$(".goods_r h1").text(name);
		$(".goods_r i").text(desc);
		$(".goods_r .money b").text("￥"+price);
		$(".goods_c_bg .cont").append("<div class='goods_title'><h4>详情介绍</h4><img src='"+imgs[0]+"' class='point'/><div class='text_center'>#DESCRIPTION DETAILS#</div></div><div class='goods_dia'><a href='brands.html' target='_blank'><img src='"+imgs[1]+"' width='100%'/></a><p><img src='"+imgs[2]+"' width='1000px' height='704px' alt='' /><img src='"+imgs[3]+"' width='999px' height='1546px' alt='' /><img src='"+imgs[4]+"' width='1000px' height='943px' alt='' /><img src='"+imgs[5]+"' width='1000px' height='950px' alt='' /></p><img src='"+imgs[6]+"' width='100%'/><img src='"+imgs[7]+"' width='100%'/><img src='"+imgs[8]+"' width='100%'/><img src='"+imgs[9]+"' width='100%'/><img src='"+imgs[10]+"' width='100%'/><img src='"+imgs[11]+"' width='100%'/><a href='shop.html' target='_blank'><img src='"+imgs[12]+"' width='100%'/></a></div>")
	})
	$(".goods_r i").click(function () {
		$(".goods_r i").css({color:"#edc89e",border:"1px solid #edc89e"})
	})
	$('.small_img').on('mouseover',"li", function(event) {
	  let index = $(this).index();
	  $(".big_img li").eq(index).css("display","block");
	  $(".big_img li").eq(index).siblings().css("display","none");
	});
	$(".goods_r p").click(function () {
	var count=$(".goods_r .select .sum").val();
		
		if(getCookie("tel")==""){
			alert("您还没有登录，不能加入购物车！");
			location.href="login.html";
		}else{
			$.get("addShoppingCart.php",{"vipName":tel,"goodsId":ids,"goodsCount":count},function(data){
				if(count==""){
					alert("商品数量不能为空");
				}else{
					if(data=="1"){
						alert("您选择的商品已加入至购物车");
					}
				}
				
			});
		}
		
	});
	$(".goods_r span").click(function () {
	var count=$(".goods_r .select .sum").val();
		if(getCookie("tel")==""){
			alert("您还没有登录");
		}else{
			$.get("addShoppingCart.php",{"vipName":tel,"goodsId":ids,"goodsCount":count},function(data){
				if(count==""){
					alert("商品数量不能为空");
				}else{
					if(data=="1"){
						location.href="shopCar.html";
					}
				}
				
			})
		}
		
	})
});
