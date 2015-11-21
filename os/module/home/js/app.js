define([
	'jquery',
	'Handlebars',
	'Pefelo_View',
	'Pefelo_Util',
	'Swiper',
	'text!../module/home/tpl/app.tpl',
	'css!../module/home/css/app.css'
],function($,Handlebars,View,Util,Swiper,tpl){

	var view = View.extend({
		init: function() {
			var me = this;
			var template = Handlebars.compile(tpl);
			//默认有的应用
			$.getJSON('module/home/data/app.json', function(data) {
				
				//appstore中的应用
				$.getJSON('module/appstore/data/app.json', function(d) {
					//本地存储中我的应用
					var myapps = Util.store('store-myapps');
					
					for(var i=0,len=d.apps.length;i<len;i++){
						if(myapps.indexOf(d.apps[i].code) != -1){
							data.apps.push(d.apps[i]);
						}
					}
					
					data = me.processData(data.apps);
					
					
					$('#container').html('<div id="home-container"></div>');
					$('#home-container').html(template(data));
					
					$('.swiper-container').height($(window).height() - $('.top_bar').height()-20);
					$('.content-slide > a').css('padding-top', ($('.swiper-container').height() - $('.content-slide > a > .mbg').height() * 4) / 5 - 10 + 'px');

				
					var mySwiper = new Swiper('.swiper-container', {
						pagination: '.pagination',
						loop: true,
						grabCursor: true,
						paginationClickable: true
					})
					$('.arrow-left').on('click', function(e) {
						e.preventDefault()
						mySwiper.swipePrev()
					})
					$('.arrow-right').on('click', function(e) {
						e.preventDefault()
						mySwiper.swipeNext()
					})
					
					//滚动条到顶部
					window.scrollTo(0,0);
					
				});
			
			});
		},
		//每页显示的条数
		pageSize: 16,
		/**
		 * 处理数据
		 */
		processData: function(data) {


			//初始化数据(1维数组)
			var apps = data;

			//新数据(2维数组)
			var _apps = [];

			//每页显示的条数
			pageSize = this.pageSize;

			//页数
			var page = Math.floor(apps.length / pageSize);

			var n = apps.length % pageSize;

			if (n > 0) {
				page++;
			}

			for (var i = 0; i < page; i++) {
				_apps.push(apps.splice(0, pageSize));
			}

			return _apps;

		}
	});

	return view;


});