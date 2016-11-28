/**
 * Created by lenovo on 2016/11/15.
 */
/**
 * Created by lenovo on 2016/11/15.
 */

$(function(){
	//添加头像
	var touXiang = $(".touxiang");
	touXiang.click(function(){
		$(".photo_input" ).trigger("click");
	});
	//添加合同
	var contract_ = $(".contract_");
	contract_.click(function(){
		$(".contract_input" ).trigger("click");
	})
	//添加名片
	var card = $(".card");
	card.click(function(){
		$(".card_input" ).trigger("click");
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
head_bar_middle.text("转租人");

