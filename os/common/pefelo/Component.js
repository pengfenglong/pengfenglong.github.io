define(['jquery','Pefelo_Class','Pefelo_Util'],function($,Class,Util){
	var Component = Class.extend({
		id:'',
		el:'',
		data:{},
		props:{},
		template:'',
		style:'',
		cls:'',
		renderTo:'',
		events:[],
		init:function(){			
			this.initAttribute();
			this.beforeRender();
			this.render();
			this.afterRender();
		},
		/**
		* 初始化属性
		*/
		initAttribute:function(){
			//设置id
			if($(this.renderTo).attr('id') == undefined){
				if(Util.isEmpty(this.id)){
					this.id = Util.uuid();
				}
				$(this.renderTo).attr('id',this.id);
			}
			
			//设置style样式
			if(!Util.isEmpty(this.style)){
				$(this.renderTo).attr('style',this.style);
			}		
			
			//设置class
			if(!Util.isEmpty(this.cls)){
				$(this.renderTo).addClass(this.cls);
			}
		},
		/**
		* 加载css和js资源
		*/
		fetch:function(){},
		build:function(){
			return '';
		},
		beforeRender:function(){},
		/**
		* 内容渲染
		*/
		render:function(){
			$(this.renderTo).html(this.build());
		},
		/**
		* 进行数据绑定等操作
		*/
		ready:function(){},
		/**
		* 数据更新
		*/
		update:function(){},
		afterRender:function(){},
		/**
		* 解除所有事件监听，删除所有组件节点
		*/
		destroy:function(){}
	});
	return UI;
});