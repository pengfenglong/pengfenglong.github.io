define([
	'jquery',
	'Handlebars',
	'Pefelo_View',
	'Pefelo_RestResource',
	'Pui_Spin',
	'Pui_Layer',
	'text!../module/discovery/tpl/app.tpl',
	'css!../module/discovery/css/app.css',
],function($,Handlebars,View,RestResource,Pui_Spin,Pui_Layer,tpl){

	var view = View.extend({
		init: function() {
			var me = this;
			var template = Handlebars.compile(tpl);
			$('#container').html('<div id="discovery-container" class="pframe-container"></div>');					
			$('.pframe-container').height($(window).height()-50);
			$('.pframe-container').css('overflow-y','auto');
			$('#discovery-container').html(tpl);
		}
	});
	return view;

});