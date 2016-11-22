/**
 * Created by lenovo on 2016/11/14.
 */
$(function(){
	//判断所有输入框是否为空，不为空的话激活“注册”按钮
	//获取确定按钮
	var confirm_button = $(".hasForgotten_confirm_button");
	var inputs = $(".hasForgotten_per_box .hasForgotten_per_input");
	/**
	 * 判断输入框是否为空的函数
	 */
	function hasValue(){
		var istrue = true;
		$.each(inputs, function(index,element){
			istrue=istrue && $(element ).val()!="";
		});
		if(istrue){
			confirm_button.addClass("hasForgotten_confirm_button_active");
		}else{
			confirm_button.removeClass("hasForgotten_confirm_button_active");
		}
	}
	//监听各个输入框的输入事件
	$.each(inputs,function(index,element){
		$(element ).keyup(function(){
			hasValue();
		})
	});
	//获取验证码小按钮点击事件
	var get_code = $(".get_code");
	get_code.click(function(){
		if(!get_code.hasClass("get_code_wait")){
			$(this ).addClass("get_code_wait" ).text("60秒后重新发送");
			time_remainder();
		}
	});

	var i=59;
	var timer;

	/**
	 * 倒计时函数
	 */
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
	//确定按钮点击事件
	confirm_button.click(function(){
		if($(this ).hasClass("hasForgotten_confirm_button_active")){
			location.href="../login/login.html";
		}
	})
})