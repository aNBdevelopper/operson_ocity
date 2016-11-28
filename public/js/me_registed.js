/**
 * Created by lenovo on 2016/11/24.
 */
//我的五个行为的跳转页面跳转事件
var demand = $(".about_me.demand");
var publish = $(".about_me.publish");
var order = $(".about_me.order");
var _history = $(".about_me.history");
var overdate = $(".about_me.overdate");
var myBehavior = [];
myBehavior.push(demand,publish,order,_history,overdate);
var yemian = [];
yemian.push("myDemand","myPublish","myOrder","myHistory","myOverdate");

$.each(myBehavior,function(index,element){
	$(element ).click(function(){
		location.href = yemian[index]+".html";
	});
});
//