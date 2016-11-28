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
		var sTp = $(this).scrollTop();
		if(sTp > 275){
			container.addClass("uplater");
		}
		else{
			container.removeClass("uplater");
		}
	})
	//assorment选择框的点击事件
		//除最后一个li的点击
		var assortment_li = $(".assortment li:not(:last-of-type)");
		//获得每个li下对应的弹出框
		var assortmnet_container = $(".assortment_container");
		$.each(assortment_li,function(index,element){
		$(this ).click(function(){
			$(this ).toggleClass("show");
			$(this ).siblings().removeClass("show");
			$(assortmnet_container[index] ).toggleClass("show");
			$(assortmnet_container[index] ).siblings().removeClass("show");
		})
	})
		//最后一个（price_sort）的点击事件
	var price = $(".assortment .price");
	var price_sort_box = $(".price_sort_box");
	price.click(function(){
		price_sort_box.toggle();
		$(this ).toggleClass("price_sort_low");
	} );
		//"区域"点击事件
	var quyu_left_li = $(".quyu_left li");
	var quyu_right_ul = $(".quyu_right_ul");
	$.each(quyu_left_li,function(index,element){
		$(this ).click(function(){
			$(this ).css("background-color","#ffffff");
			$(this ).siblings().css("background-color","#f0f0f0");
			$(quyu_right_ul[ index ]).css("display","block");
			$(quyu_right_ul[ index ] ).siblings().css("display","none");
		});
	});
		//"面积"点击事件
	var mianji_ul_li = $(".mianji ul li" );
	$.each(mianji_ul_li,function(){
		$(this ).click(function(){
			$(this ).css("background-color","#ffffff");
			$(this ).siblings().css("background-color","#f0f0f0");
		})
	} );
		//单价点击事件
	var danjia_ul_li = $(".danjia ul li");
	$.each(danjia_ul_li,function(){
		$(this ).click(function(){
			$(this ).css("background-color","#ffffff");
			$(this ).siblings().css("background-color","#f0f0f0");
		})
	})
		//更多点击事件
	var more_left_li = $(".more_left li");
	var more_right_ul = $(".more_right_ul");
	$.each(more_left_li,function(index,element){
		$(this ).click(function(){
			$(this ).css("background-color","#ffffff");
			$(this ).siblings().css("background-color","#f0f0f0");
			$(more_right_ul[ index ]).css("display","block");
			$(more_right_ul[ index ] ).siblings().css("display","none");
		});
	});
	//回到顶部的按钮的点击事件
	var to_top = $(".to_top");
	to_top.click(function(){
		container.scrollTop(0);
	})
});
