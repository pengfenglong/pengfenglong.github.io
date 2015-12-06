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
		* ��ʼ������
		*/
		initAttribute:function(){
			//����id
			if($(this.renderTo).attr('id') == undefined){
				if(Util.isEmpty(this.id)){
					this.id = Util.uuid();
				}
				$(this.renderTo).attr('id',this.id);
			}
			
			//����style��ʽ
			if(!Util.isEmpty(this.style)){
				$(this.renderTo).attr('style',this.style);
			}		
			
			//����class
			if(!Util.isEmpty(this.cls)){
				$(this.renderTo).addClass(this.cls);
			}
		},
		/**
		* ����css��js��Դ
		*/
		fetch:function(){},
		build:function(){
			return '';
		},
		beforeRender:function(){},
		/**
		* ������Ⱦ
		*/
		render:function(){
			$(this.renderTo).html(this.build());
		},
		/**
		* �������ݰ󶨵Ȳ���
		*/
		ready:function(){},
		/**
		* ���ݸ���
		*/
		update:function(){},
		afterRender:function(){},
		/**
		* ��������¼�������ɾ����������ڵ�
		*/
		destroy:function(){}
	});
	return UI;
});