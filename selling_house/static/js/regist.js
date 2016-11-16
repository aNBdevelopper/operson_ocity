/**
 * Created by lenovo on 2016/11/14.
 */
$(function(){
	//判断所有输入框是否为空，不为空的话激活“注册”按钮
	//获取注册按钮
	var regist_button = $(".regist_button");
	var istrue = false;
	//判断输入框是否为空的函数
	var inputs = $(".regist_per_box .regist_per_input");
	function hasValue(){
		$.each(inputs, function(index,element){
			istrue=$(element ).val()!="";
		});
		if(istrue){
			regist_button.addClass("regist_button_active");
		}else{
			regist_button.removeClass("regist_button_active");
		}
	}
	//监听各个输入框的输入事件
	$.each(inputs,function(index,element){
		$(element ).keyup(function(){
			hasValue();
		})
	});
	//获取小箭头
	var identity_choice_icon = $(".regist_per_input_div .indentity_choice_icon");
	//获取下拉菜单
	var select_options = $(".regist_per_box .identity_options");
	//身份一栏的点击事件(下拉菜单的显示和隐藏)
	var identity = $(".zidingyi_select input");
	identity.click(function(){
		if(select_options.css("display")=="none"){
			select_options.css("display","block");
			identity_choice_icon.addClass("arrow_up");
		}else{
			select_options.css("display","none");
			identity_choice_icon.removeClass("arrow_up");
		}
	});
	//获取验证码小按钮点击事件
	var get_code = $(".get_code");
	get_code.click(function(){
		if(!get_code.hasClass("get_code_wait")){
			$(this ).addClass("get_code_wait" ).text("60秒后重新发送");
			time_remainder();
		}
	});
	//倒计时函数
	var i=59;
	var timer;
	function time_remainder(){
			timer = setTimeout(function(){
			get_code.text(i+'秒后重新发送');
			i--;
			if(i>0)
			{
				time_remainder();
			}
			else if(i==0){
				get_code.text("获取验证码");
				get_code.removeClass("get_code_wait");
				i = 59;
			}
		},1000);
	}
	//下拉菜单的具体点击事件
	var toBechoicedIdentity = $(".identity_options li");
	toBechoicedIdentity.click(function(){
		identity.val($(this ).text());
		select_options.css("display","none");
		identity_choice_icon.removeClass("arrow_up");
		hasValue();
	})
})