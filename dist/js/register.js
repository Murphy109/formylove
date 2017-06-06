$(function () {
	//插入头部尾部
	$("#top").load("pubilcTop.html")
	$("#foot").load("publicFoot.html")
	
	
	

	//正则
	email   =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
    pwd     = /^[\w]{8,32}$/,
    chn     = /^[\u0391-\uFFE5]+$/,
    idcard  = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
    mobile  = /^13[0-9]{1}[0-9]{8}$|15[0-9]{1}[0-9]{8}$|18[0-9]{1}[0-9]{8}$|17[0-9]{1}[0-9]{8}$/,
    //登录
    $('#login').submit(function(){
    	var username =  $("input[name='username']").val();
    	var password = $("input[name='password']").val();
    	if(!username){
		  	layer.msg('请输入您的账号！'); 
		  	return false;
		}
    	if(!password){
		  	layer.msg('请输入您的密码！'); 
		  	return false;
		}
    })
    //注册
//	$('.step_next').on('click', function(){
//	  var sirname = $("input[name='extend_field3']").val();
//	  var id = $("input[name='extend_field4']").val();
//	  var wifename = $("input[name='wifename']").val();
//	  if(!sirname){
//	  	layer.msg('请输入真实姓名！'); 
//	  	return false;
//	  }
//	  if(!chn.test(sirname)){
//	  	layer.msg('请输入中文真实姓名！'); 
//	  	return false;
//	  }
//	  if(!idcard.test(id)){
//	  	layer.msg('请输入正确的身份证号！'); 
//	  	return false;
//	  }
//	  if(!wifename){
//	  	layer.msg('请输入爱人姓名！'); 
//	  	return false;
//	  }
//	  if(!chn.test(wifename)){
//	  	layer.msg('请输入中文爱人姓名！'); 
//	  	return false;
//	  }
//	  if(sirname && idcard && wifename){
//	  	$('.form_step').stop().animate({left:'-600px'},300)
//	  }else{
//	  	layer.msg('请输入真爱信息！'); 
//	  	return false;
//	  }
//	  
//	});
		
		
		
		
		
	var a=0;	
	$("#userName").blur(function(){
		var phone = $("input[name='tel']").val();
		$.get("register.php",{tel:phone},function(data){
			if(!mobile.test(phone)){
				alert('请输入正确的手机号码！'); 
				return false;
			}else if(mobile.test(phone)){
				if(data=="0"){
					alert("该手机号已注册");
				}else{
					return a++;
				}
				
			}
			
		})	
	});
	$("#email").blur(function(){
		var mail = $("input[name='email']").val();
		
			if(!email.test(mail)){
				alert('请输入正确的邮箱地址！');
				return false;
			}else{
				return a++;
			}
			
			
	});	
	
	$("#password").blur(function(){
		var pass = $("input[name='password']").val();
		if(!pass){
			alert('请输入密码，请输入8位以上密码！'); 
			return false;
		}
		if(!pwd.test(pass)){
			alert('密码太简单了！请输入8位以上密码！')
			return false;
		}else{
			return a++;
		}
			
	});	
	$("#cpassword").blur(function(){
		var pass = $("input[name='password']").val();
		var cpass = $("input[name='cpassword']").val();
		
	
		if(cpass != pass){
			alert('两次密码输入不一致！');
			return false;
		}else{
			return a++;
		}
			
	});	
	$('#sub').on('click',function(){
		var phone = $("input[name='tel']").val();
		var mail = $("input[name='email']").val();
		var pass = $("input[name='password']").val();
		var cpass = $("input[name='cpassword']").val();
		if(a==4){
			$.post("saveregister.php",{tel:phone,email:mail,password:pass,cpassword:cpass},function(data){
			location.href="index.html";
		})
		}
	});
});	
	
	
	$('.step_prev').click(function(){
		$('.form_step').stop().animate({left:'0px'},300)
	})
	
	//首页产品轮播
	var x = 0;
	$('.br_top .next').click(function(){
		x++;
		if(x==5){
			$(this).siblings('.hot').animate({left:'0px'},500);
			x=0;
		}
		var m = x*-808;
		$(this).siblings('.hot').stop().animate({left:m+'px'},500);
	})
	$('.br_top .prev').on('click',function(){
		x--;
		if(x==-1){
			$(this).siblings('.hot').css('left','0px');
			x=4;
		}
		var m = x*-808;
		$(this).siblings('.hot').stop().animate({left:m+'px'},500);
	})
	//love silder
	var x = 0;
	$('.loveing .right .next').click(function(){
		x++;
		if(x==6){
			$(this).siblings('.hot').animate({left:'0px'},500);
			x=0;
		}
		var lt = x*-810;
		$(this).siblings('.hot').stop().animate({left:lt+'px'},500);
	})
	$('.loveing .right .prev').click(function(){
		x--;
		if(x==-1){
			$(this).siblings('.hot').css('left','0px');
			x=5;
		}
		var lt = x*-810;
		$(this).siblings('.hot').stop().animate({left:lt+'px'},500);
	})
	//ercode
	$('.footer li:last-child').hover(function(){
		$(this).children('.ercode').stop().fadeIn(300);
	},function(){
		$(this).children('.ercode').stop().hide();
	})
	//详情图片切换
	$('#small li').mouseenter(function(){
		var x =$(this).index();
		$('.big_img li').eq(x).fadeIn(1100).siblings().hide();
	})
	//top固定
	$(document).on('scroll',function(){
		if($(document).scrollTop()>267){
			$('.header_top').stop().addClass('fixed');
			$('.top_right').css({'border-bottom':'none','line-height':'26px'});
		}else{
			$('.header_top').stop().removeClass('fixed');
			$('.top_right').css({'border-bottom':'1px solid #edc89e','line-height':'14px'});
		}
	})
	//弹窗登录
	$('.login_ok').on('click',function(){
		layer.open({
		  type: 1,
		  title: false,
		  closeBtn: 0,
		  area: ['430px', '320px'],
		  shadeClose: true,
		  skin: 'yourclass',
		  content: '<div class="layer_login"><h1>FORMYROSE会员</h1><form action="flow.php?step=login" method="post"><ul class="ul_input"><li>账&nbsp;&nbsp;&nbsp;号：<input type="text" name="username" id="" value="" placeholder="请输入手机号码或者邮箱" /></li><li style="margin-bottom: 0;">密&nbsp;&nbsp;&nbsp;码：<input type="password" name="password" id="" value="" placeholder="请输入您的密码" /></li></ul><div class="for_reg"><a href="user.php?act=get_password" class="forget">忘记密码</a><a href="user.php?act=register" class="reg">我要注册</a></div><input name="act" type="hidden" value="signin" /><input type="submit" value="登录" class="login_btn"/></form></div><div class="layer_bg"></div>'
		});
	})
	//付款方式
	$("tr .pay_list").on("click",function(){
	  $(this).addClass("on_check").parent().parent().parent().parent().siblings().find('.pay_list').removeClass("on_check");
	  $(this).parent().siblings().find('.pay_list').removeClass("on_check");
	})

function online(u, w, h) { 
    var l = (screen.width - w) / 2; 
    var t = (screen.height - h) / 2; 
    var s = 'width=' + w + ', height=' + h + ', top=' + t + ', left=' + l; 
    s += ', toolbar=no, scrollbars=no, menubar=no, location=no, resizable=no'; 
    open(u, 'oWin', s); 
}