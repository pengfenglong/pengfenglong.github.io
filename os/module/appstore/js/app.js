define([
	'jquery',
	'Handlebars',
	'Pefelo_Model',
	'Pefelo_View',
	'Pefelo_Util',
	'text!../module/appstore/tpl/app.tpl',
	'css!../module/appstore/css/app.css'
],function($,Handlebars,Model,View,Util,tpl){

	var model = Model.extend({
			init : function () {
				var me = this;
				$.getJSON('module/appstore/data/app.json', function (data) {
					me.trigger('list', data);
				});
			}
		});

	var view = View.extend({
			init : function () {
	
				var _model = new model();
				this.listenTo(_model, 'list', this.list);
				this.listenTo(_model, 'add', this.add);
				this.listenTo(_model, 'remove', this.remove);
				
				$('#container').html('<div id="appstore-container" class="pframe-container"></div>');					
				$('.pframe-container').height($(window).height()-50);
				$('.pframe-container').css('overflow-y','auto');
			},
			list : function (data) {
				//本地存储中我的apps
				var myapps = Util.store('store-myapps');

				for (var i = 0, len = data.apps.length; i < len; i++) {
					if (myapps.indexOf(data.apps[i].code) == -1) {
						data.apps[i].has = false;
					} else {
						data.apps[i].has = true;
					}
				}
				var template = Handlebars.compile(tpl);
				
				
				$('#appstore-container').html(template(data));

				window.scrollTo(0, 0);

				function addEvent() {
					var code = $(this).attr('data-code');
					if (myapps.indexOf(code) == -1) {
						myapps.push(code);
						Util.store('store-myapps', myapps);
						$(this).removeClass('btn-green');
						$(this).addClass('btn-gray');
						$(this).text('删除');
						$(this).unbind('click', addEvent);
						$(this).on('click', delEvent);
					}
				}

				function delEvent() {
					var code = $(this).attr('data-code');
					if (myapps.indexOf(code) != -1) {
						myapps.splice(myapps.indexOf(code), 1);
						Util.store('store-myapps', myapps);
						$(this).removeClass('btn-gray');
						$(this).addClass('btn-green');
						$(this).text('添加');
						$(this).unbind('click', delEvent);
						$(this).on('click', addEvent);
					}
				}

				$('#appstore-container .btn-green').on('click', addEvent);

				$('#appstore-container .btn-gray').on('click', delEvent);

			},
			add : function () {},
			remove : function () {}
		});
		
		return view;

});