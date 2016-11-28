/**
 * Created by lenovo on 2016/11/22.
 */
//接单按钮的点击事件
var order_confirm = $(".order_confirm");
order_confirm.click(function(event){
	event.stopPropagation();
	$(this ).removeClass("active");
	$(this ).text("已接单，待反馈");
});
//order_single_box的点击事件
var order_single_box = $(".order_box .order_single_box");
order_single_box.click(function(){
	if($(this ).find(".order_confirm").hasClass("active")){
		location = "order_detail.html";
	}else{
		location = "order_yijie.html";
	}
});
//order_single_box滑动显示“删除”二字订单事件
var start_x;
var x;
order_single_box.on("touchstart",function(event){
	var _touch = event.originalEvent.targetTouches[0];
	start_x = _touch.pageX;
	console.log( $( this ).css( "left" ).slice( 0, -2 ) );
});
order_single_box.on("touchmove",function(event){
	event.stopPropagation();
	var _touch = event.originalEvent.targetTouches[0];
	x = _touch.pageX-start_x;
	if(x<-105){x = -105}
	if(x>0){
		x = 0;
	}
	$(this ).css("left",x);
	//console.log( x );
});
order_single_box.on("touchend",function(event){
	event.stopPropagation();
	if(x>-105){
		$(this ).css("left",0);
	}
});
//“删除”的点击事件
var order_single_delete = $(".order_single_delete");
order_single_delete.click(function(event){
	event.stopPropagation();
	$(this ).parent().remove();
})

