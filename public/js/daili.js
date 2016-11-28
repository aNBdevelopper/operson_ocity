/**
 * Created by lenovo on 2016/11/15.
 */
$(function(){
	var touXiang = $(".touxiang");
	touXiang.click(function(){
		$(".add_touxiang" ).trigger("click");
	})
	var weixin_erweima = $(".weixin_erweima");
	weixin_erweima.click(function(){
		$(".weixin_erweima_input" ).trigger("click");
	})
	var yingyezhizhao = $(".yingyezhizhao");
	yingyezhizhao.click(function(){
		$(".yingyezhizhao_input" ).trigger("click");
	})
	var zushou_daili = $(".zushou_daili");
	zushou_daili.click(function(){
		$(".zushou_daili_input" ).trigger("click");
	})

	var wancehng_button = $(".confirm" );
	wancehng_button.click(function(){
		location.href="zhezhaoceng.html";
	})
});
//头部菜单事件
var head_bar_left = $(".head_bar_left");
var head_bar_middle = $(".head_bar_middle");
var head_bar_right = $(".head_bar_right");
head_bar_left.click(function(){
	history.back(-1);
});
head_bar_middle.text("代理商");
//head_bar_right.text("登录");