/**
 * Created by lenovo on 2016/11/22.
 */
//上传合同正反面事件
var certificate_z = $(".add_certificate_box .zhengmian");
var certificate_f = $(".add_certificate_box .fanmian");
var zhengmian_input = $(".zhengmian_input");
var fanmian_input = $(".fanmina_input");
certificate_z.click(function(){
	zhengmian_input.trigger("click");
});
certificate_f.click(function(){
	fanmian_input.trigger("click");
})