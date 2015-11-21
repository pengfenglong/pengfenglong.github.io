define([
	'jquery',
	'Handlebars',
	'Pefelo_View',
	'text!../module/navigate/tpl/app.tpl',
	'css!../module/navigate/css/app.css'
],function($,Handlebars,View,tpl){

	var view = View.extend({
		init: function() {	
		
			//var tpl = pframe.util.getTpl("navigate-template");
			var template = Handlebars.compile(tpl);
			$.getJSON('module/navigate/data/app.json', function(data) {
				
				$('#navigate').html(template(data));
				$('a.navigation_a').click(function() {
					var _this = this;
					$('.menu_font').hide();
					if ($(this).next().children().length > 0) {
						$(this).next().toggle();
					} else {
						var code = $(this).attr('code');
						require([code],function(App){
							new App();
							window.document.title = $(_this).text();							
						});
					}
				});
				
				//$('#navigate .home a.navigation_a').click();
				

				var _left = $('.navigation_a img:first').position().left + 18;
				$('.navigation_a:first').append('<div style="position:absolute;top:2px;left:' + _left +
					'px;width: 20px;height: 20px;background-color: red;-webkit-border-radius: 10px;">5</div>');

			});
			
			
			function onBridgeReady() {
				WeixinJSBridge.call('hideOptionMenu');
			}

			if (typeof WeixinJSBridge == "undefined") {
				if (document.addEventListener) {
					document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
				} else if (document.attachEvent) {
					document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
					document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
				}
			} else {
				onBridgeReady();
			}
			
			
		}
		
	});
	
	return view;
	
});

