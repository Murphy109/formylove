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
	});
	$(".brand_down").hover(function () {
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
});