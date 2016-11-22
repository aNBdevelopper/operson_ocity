/**
 * Created by lenovo on 2016/11/14.
 */
$(function(){
	var acount = $(".acount_input" );
	var password = $(".password_input" );
	var login_button = $(".login_button");

	password.keyup(function(){
		if(acount.val()!=""&&password.val()!=""){
			login_button.addClass("login_button_active");
		}
		else{
			login_button.removeClass("login_button_active");
		}
	});
	acount.keyup(function(){
		if(acount.val()!=""&&password.val()!=""){
			login_button.addClass("login_button_active");
		}
		else{
			login_button.removeClass("login_button_active");
		}
	})
	//给激活状态下的登录按钮添加点击跳转事件
	login_button.click(function(){
		if($(this).hasClass("login_button_active")){
			location.href="../home_page/home.html";
		}
	});
	//单击"注册"事件
	var toRegist = $(".toRegist");
	toRegist.click(function(){
		location.href = "../regist/regist.html";
	});
	//单击"忘记密码事件"
	var hasForgotten = $(".hasForgotten");
	hasForgotten.click(function(){
		location.href = "../regist/hasForgotten.html";
	});
})