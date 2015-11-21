define([
	'jquery',
	'Handlebars',
	'Pui',
	'text!../common/pui/tpl/layer.html',
	'Bootstrap'
],function($,Handlebars,Pui,tpl){

	if($('#pui-layer').length == 0){
		$('body').append(tpl);
		$('#pui-layer').on('shown.bs.modal', function () {
			$('body').css('padding','0');
			$('#pui-layer').css('padding','0');
			$('#pui-layer .modal-dialog').css('width','100%');
			$('#pui-layer .modal-dialog').css('margin','0');			  
			$('#pui-layer .modal-dialog').height($('body').height());
		})	
	}
	var Layer = Pui.extend({
		html:'',
		init:function(){
			$('#pui-layer .modal-body').html(this.html);
		}	
	});
	return Layer;
	
});

