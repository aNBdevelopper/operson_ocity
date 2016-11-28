/**
 * Created by lenovo on 2016/11/24.
 */
//头部bar的点击事件
var headbar_xiaoxi =$(".information_container_tabbar_ul_li1");
var headbar_tongzhi = $(".information_container_tabbar_ul_li2");
var headbar_xuqiu=$(".information_container_tabbar_ul_li3");
var tongzhi_box = $(".tongzhi_box");
var xiaoxi_box = $(".xiaoxi_box");
var xuqiu_box = $(".xuqiu_box");
headbar_xiaoxi.click(function(){
	$(this ).addClass("current");
	$(this ).siblings().removeClass("current");
	xiaoxi_box.css("display","block");
	xiaoxi_box.siblings().css("display","none");
});
headbar_tongzhi.click(function(){
	$(this ).addClass("current");
	$(this ).siblings().removeClass("current");
	tongzhi_box.css("display","block");
	tongzhi_box.siblings().css("display","none");
});
headbar_xuqiu.click(function(){
	$(this ).addClass("current");
	$(this ).siblings().removeClass("current");
	xuqiu_box.css("display","block");
	xuqiu_box.siblings().css("display","none");
})