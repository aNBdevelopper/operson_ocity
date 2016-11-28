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
//接单按钮的点击事件
var order_detail_confirm_button = $(".order_detail_confirm");
order_detail_confirm_button.click(function(){
	location.href = "order_yijie.html";
});

