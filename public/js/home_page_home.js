/**
 * Created by lenovo on 2016/11/7.
 */

//        console.log($('.container').hasClass('bolco'));

$(document).ready(function(){
	//添加轮播图
	var swiper = new Swiper('.swiper-container', {
		//            direction: 'vertical',
		autoplay: 5000,
		speed: 500,
		//            autoplayStopOnLast: true,
		//            effect: 'coverflow'
		pagination: '.swiper-pagination'
	});
	var assortment_offset_top = $(".assortment" ).offset().top;
	var scroll_top = $(window ).scrollTop;
	//页面向上滑动事件
	var container = $(".container");
	container.on("scroll",function(){
		var sTp = $("")
	})
});
