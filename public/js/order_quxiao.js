/**
 * Created by lenovo on 2016/11/22.
 */
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
//取消原因点击事件
var checks = $(".quxiao_yuanyin_detail .quxiao_yuanyin_des .check");
checks.click(function(){
	$(this ).toggleClass("checked");
})
//其他原因点击弹出textarea事件
var qita_yuanyin_check = $(".quxiao_yuanyin_detail .quxiao_yuanyin_des .qita_yuanyin_check");
var qita_yuanyin = $(".quxiao_yuanyin_detail .qita_yuanyin");
qita_yuanyin_check.click(function(){
	if($(this ).hasClass("checked")){
		qita_yuanyin.css("display","block");
	}
	else{
		qita_yuanyin.css("display","none");
	}
});
//确定按钮点击事件
var quxiao_confirm = $(".order_quxiao_confirm");
quxiao_confirm.click(function(){
	if(checks.hasClass("checked")){
		location.href = "order.html";
	}
})