"use strict"
$(function(){
	//导航下拉
	$(".nav_left li").eq(2).hover(function () {
		$(".down").slideDown("normal");
	},function(){
		$(".down").stop().slideUp("normal");
	})
	//品牌下拉
	$(".nav_right li").eq(0).hover(function () {
		$(".brand_down").slideDown("normal");
	},function(){
		$(".brand_down").stop().slideUp("normal");
	})
	$(".brand_down").hover(function () {
		$(".brand_down").stop().slideDown("normal")
	},function(){
		$(".brand_down").stop().slideUp("normal");
	});
	$('.brands').on('mouseover',"li", function(event) {
	  let index = $(this).index();
	  $(".brands li").eq(index).children("a").children("p,i").css("display","block")
	  $(".brands li").eq(index).siblings().children("a").children("p,i").css("display","none")
	});
	$('.brands li').on('mouseout',function(event) {
	  $(".brands li").children("a").children("p,i").css("display","none")
	});
	$('.hand_nav').on('mouseover',"li", function(event) {
		$(this).css({fontWeight:"600"}).siblings().css({fontWeight:"normal"});
		$('.hand_nav li span').css({font:'normal 14px/56px ""'})
	  let index = $(this).index();
	  $(".hand_cont .handList").eq(index).addClass("hover").siblings().removeClass("hover");	 		 
	});
	//置顶
	$(".toTop").click(function () {
	    var speed=1000;//滑动的速度
	    $('body,html').animate({scrollTop: 0}, speed);
	    return false;
	});
	$(document).on('scroll',function(){
		if($(document).scrollTop()>500){
			$('.toTop img').fadeIn();
		}else{
			$('.toTop img').fadeOut();
		}
	})
	changeUser();
	$(".header_center i").click(function () {
		//console.log(getCookie("tel"));
		removeCookie("tel");
		//console.log(getCookie("tel"));
		//changeUser ();
		location.reload();
	});
});
function changeUser () {
	var cook1=getCookie("tel");
	if(cook1!=""){
		$(".header_center span").text(cook1).css("color","#edc89e")
		$(".logins").css({"opacity":"0","zIndex":"10"});
		$(".person").css({"opacity":"1","zIndex":"99"});
		$(".header_center").css("opacity","1")
	}else{
		$(".logins").css({"opacity":"1","zIndex":"99"});
		$(".person").css({"opacity":"0","zIndex":"10"});
		$(".header_center").css("opacity","0")
	}
}