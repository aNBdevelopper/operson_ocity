/**
 * Created by lenovo on 2016/11/25.
 */
//order_single_box滑动显示“删除”二字订单事件
var start_x;
var x;
var information_sort_perbox = $(".information_sort_perbox");
information_sort_perbox.on("touchstart",function(event){
	var _touch = event.originalEvent.targetTouches[0];
	start_x = _touch.pageX;
	console.log( $( this ).css( "left" ).slice( 0, -2 ) );
});
information_sort_perbox.on("touchmove",function(event){
	event.stopPropagation();
	var _touch = event.originalEvent.targetTouches[0];
	x = _touch.pageX-start_x;
	if(x<-66){x = -66}
	if(x>0){
		x = 0;
	}
	$(this ).css("left",x);
	//console.log( x );
});
information_sort_perbox.on("touchend",function(event){
	event.stopPropagation();
	if(x>-66){
		$(this ).css("left",0);
	}
});
//“删除”的点击事件
var _delete = $(".delete");
_delete.click(function(event){
	event.stopPropagation();
	$(this ).parent().remove();
});
