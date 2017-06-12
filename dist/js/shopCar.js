$(function () {
	//插入头部尾部
	$("#top").load("pubilcTop.html")
	$("#foot").load("publicFoot.html")
	createGoods ()
	$(".tijiao").click(function () {
		alert("提交订单成功！")
	})
	
});
var tel=getCookie("tel");

function createGoods () {
		$.get("getShoppingCart.php",{"vipName":tel},function(data){
			var d=eval(data)
			if(d.length>0){
				for(let i=0;i<d.length;i++){
					id=d[i].goodsId;
					name=d[i].goodsName;
					img=d[i].goodsImg;
					price=d[i].goodsPrice;
					sum=d[i].goodsSum;
					desc=d[i].goodsDesc;
					$(".table_t").after("<table class='table_cont'><tr><td width='160px'><a id='del'>×<a/></td><td width='310px'><img width='160px' height='120px' border='1px solid #fff' src='"+img+"'/><span>"+name+"</span></td><td width='240px'>"+id+"</td><td width='90px'><input id='cutBtn01' type='button' value='-' class='cut'/><span>"+sum+"</span><input id='addBtn01' type='button' value='+' class='add'/></td><td width='180px'>"+price+"</td><td width='220px'></td></tr></table>")
					init ();
					saveData();
					getData();
				}
			calTotalMoney()
				
			}
			$(".cut").click(cal2);
			$(".add").click(cal1);


			
			if($("form table").length<3){
				$(".shopCar").css("display","none");
				$(".empty").css("display","block");
			}
			$('#del').on('click',function() {
				var t=this;
				//var idd=$(t).parents("tr").children().eq(2).text();
				$.get("deleteGoods.php",{"vipName":tel,"goodsId":id},function(data){
					if(data==1&&confirm("您确定要移除商品吗？")){
						$(t).parents(".table_cont").remove();
						location.href="shopCar.html"
			
					}
				})
			});
			$('.table_b tr td').eq(0).on('click',function() {
				$.get("deleteGoods.php",{"vipName":tel,"goodsId":id},function(data){
					if(data==1&&confirm("您确定要清空购物车吗？")){
						$(".table_cont").remove();
						location.href="shopCar.html"
			
					}
				})
						
			});

		})
//		if(i=0;i<getCookie("id").length;i++){
//			$(".table_t").after("<table class='table_cont'><tr><td width='160px'></td><td width='310px'><span></span></td><td width='240px'></td><td width='90px'><input id='cutBtn01' type='button' value='-' class='cut'/><span></span><input id='addBtn01' type='button' value='+' class='add'/></td><td width='180px'></td><td width='220px'></td></tr></table>")
//		}
	}
	function init () {
		var table=$("form table").length;
		for(var i=2;i<table;i++){
			var goods = $(".table_cont:first tr td").eq(1);
			var goodsNum = $(".table_cont:first tr td").eq(3).children("span");
			var goodsName = goods.children().eq(1).text();
			var price = $(".table_cont:first tr td").eq(4).text();
			var count = goodsNum.text();
			var money=$(".table_cont:first tr td").eq(5).text(price*count);
		}

		
	}
	function saveCookie(key,value,dayCount){
		var d = new Date();
		d.setDate(d.getDate()+dayCount);
		document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
	}
	function saveData(){
	//保存 商品名称，单价，数量
		var table=$("form table").length;
		for(var i=2;i<table;i++){
			var goods = $(".table_cont:first tr td").eq(1);
			//console.log(goods.text())
			var goodsNum = $(".table_cont:first tr td").eq(3).children("span");
			var goodsName = goods.children().eq(0).text();
			//console.log(goodsName)
			saveCookie("goodsName",goodsName,7);
			var price = $(".table_cont:first tr td").eq(4).text();
			saveCookie("price",price,7);
			var count = goodsNum.text();
			saveCookie("count",count,7);
			var money=$(".table_cont:first tr td").eq(5).text();
			//$(".table_cont:first tr td").eq(5).text(parseInt(goodsNum)*parseInt(price))
			saveCookie("money",money,7);
		}
		//alert(decodeURIComponent(document.cookie));
	}
	
	function getCookie(key){
	//1、获取cookie的内容；//color=red; userName=jzm; password=123; auserName=ppp
		var str = decodeURIComponent(document.cookie);
		//2、转换成数组
		var arr = str.split("; ");
		
		//3、循环数组找key
		for(var i=0;i<arr.length;i++){
			if(arr[i].indexOf(key+"=")==0){
				return arr[i].substring((key+"=").length);
			}
		}
		//4、返回
		return "";
	}
	function getData () {
		var table=$("form table").length;
		for(var i=2;i<table;i++){
			var goods = $(".table_cont:first tr td").eq(1);
			//console.log(goods.text())
			var goodsNum = $(".table_cont:first tr td").eq(3).children("span");
			
			var goodsName = goods.children().eq(0).text(getCookie("goodsName"));
			//console.log(goodsName)
			var price = $(".table_cont:first tr td").eq(4).text(getCookie("price"));
			
			var count = goodsNum.text(getCookie("count"));
			var money=$(".table_cont:first tr td").eq(5).text(getCookie("money"))
		}
	}
	//计算总金额
	function calTotalMoney(){		
		var totalMoney = 0;
		var table=$("form .table_cont").length;
		var childs = $("form .table_cont")
		//;
		for(let i=0;i<table;i++){
		//.children("tr td").eq(5).text()
			totalMoney += parseInt($("form .table_cont")[i].children[0].children[0].children[5].innerHTML);
		}
		$(".table_b:first tr td").eq(5).children().text(totalMoney);
	}
	
	//加法按钮的计算
	function cal1(){//this在事件对应的函数里，代表事件源。
		//1、修改数量
		//this.previousElementSibling//当前元素的前面一个元素节点
		var t=this;
		$(t).parent("td").next().next().text(price*1)
		$(t).prev().text(parseInt($(t).prev().text())+1);
		
		//2、修改金额(单价*数量)
		var prices = parseInt($(t).parents("td").next().text());
		var nums = parseInt($(t).prev().text());
		$(t).parents("td").next().next().text(prices*nums);
		console.log($(t).parents("td").next().next().text(prices*nums))
		//3、修改总金额

		//4、保存cookie（保存数据）
		
		
		var count=$(t).prev().text();
		
		var id=$(t).parent().prev().text();
		$.get("updateGoodsCount.php",{"vipName":tel,"goodsId":id,"goodsCount":count},function(data){
			if(data==1){
				$(t).prev().text(nums)
				//location.reload();
			}
		})
		saveData();
		calTotalMoney();
		
	}
	function cal2(){//this在事件对应的函数里，代表事件源。
		//1、修改数量
		//this.previousElementSibling//当前元素的前面一个元素节点
		var t=this;
		
		if(parseInt($(t).next().text())>1){
			$(t).next().text(parseInt($(t).next().text())-1)
		}else{
			alert("购买数量不能小于1件！");
		}
		//2、修改金额(单价*数量)
		var prices = parseInt($(t).parents("td").next().text());
		var nums = parseInt($(t).next().text());
		$(t).parents("td").next().next().text(prices*nums);
		//3、修改总金额
		//4、保存cookie（保存数据）
		var count=$(t).next().text();
		//var count=$(this).next().text();
		$.get("updateGoodsCount.php",{"vipName":tel,"goodsId":id,"goodsCount":count},function(data){
			if(data==1){
				$(t).next().text(nums)
				//location.reload();
			}
		})
		saveData();
		calTotalMoney();
		
		
	}