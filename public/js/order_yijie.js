/**
 * Created by lenovo on 2016/11/22.
 */
//打电话事件
var to_phone = $(".order_name_detail .to_phone");
var order_zhezhao = $(".order_zhezhao_container");
var alert_top = $(".alert_top");
to_phone.click(function(){
	order_zhezhao.css("display","flex");
	alert_top.text("您确定要拨打电话吗？")
});
//打电话弹出框的按钮点击事件
var alert_buttons = $(".alert_button");
alert_buttons.click(function(){
	order_zhezhao.css("display","none");
})
//底部三个按钮的点击跳转事件
var footer_gaiqi = $(".footer_gaiqi");
var footer_dacheng = $(".footer_dacheng");
var footer_quxiao = $(".footer_quxiao");
footer_gaiqi.click(function(){
	location.href = "order_gaiqi.html";
});
footer_dacheng.click(function(){
	location.href = "order_dacheng.html";
});
footer_quxiao.click(function(){
	location.href = "order_quxiao.html";
});

