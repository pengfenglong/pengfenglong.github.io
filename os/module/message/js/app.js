define([
	'jquery',
	'Handlebars',
	'Pefelo_View',
	'Pefelo_RestResource',
	'Pui_Spin',
	'Pui_Layer',
	'text!../module/message/tpl/app.tpl',
	'css!../module/message/css/app.css',
],function($,Handlebars,View,RestResource,Pui_Spin,Pui_Layer,tpl){

	var view = View.extend({
		init: function() {
			var me = this;
			var template = Handlebars.compile(tpl);
			$('#container').html('<div id="message-container" class="pframe-container"></div>');					
			$('.pframe-container').height($(window).height()-50);
			$('.pframe-container').css('overflow-y','auto');
			new Pui_Spin().spin($('.pframe-container').get(0));
			/**
			$.getJSON('module/message/data/app.json', function(data) {
				var template = Handlebars.compile(pframe.util.getTpl("message-template"));
				$('#message-container').html(template(data));
				window.scrollTo(0,0);
			});
			*/
			
			var Message = RestResource.Factory("Message");
	
			Message.query(function(result,error){		
				if(result && result != null){					
					$('#message-container').html(template(result));
					window.scrollTo(0,0);
					
					$('#message-container li.newsHead a').click(function(){
						new Pui_Layer.extend({
							html:'aaaaaaaaaaaaaaaaa'
						});
					});
					
				}else{
					
				}			
				
			});
		}
	});
	return view;

});