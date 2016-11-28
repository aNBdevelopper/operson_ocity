/**
 * Created by lenovo on 2016/11/15.
 */

$(function()
{
	//添加头像
	var touXiang = $( ".tou_xiang" );
	touXiang.click( function()
	{
		$( ".add_touxiang" ).trigger( "click" );
	} );
	//添加名片
	var business_card_ = $( ".business_card_" );
	business_card_.click( function()
	{
		$( ".add_business_card" ).trigger( "click" );
	} )
	//添加证书
	var certificate = $( ".certificate" );
	certificate.click( function()
	{
		$( ".add_certificate" ).trigger( "click" );
	} )
	var wancehng_button = $( ".confirm" );
	wancehng_button.click( function()
	{
		location.href = "zhezhaoceng.html";
	} )
});
//头部菜单事件
var head_bar_left = $(".head_bar_left");
var head_bar_middle = $(".head_bar_middle");
var head_bar_right = $(".head_bar_right");
head_bar_left.click(function(){
	history.back(-1);
});
head_bar_middle.text("经纪人");
//head_bar_right.text("登录");