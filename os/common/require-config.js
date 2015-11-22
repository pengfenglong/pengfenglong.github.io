require.config({

       baseUrl: 'libs',
	   waitSeconds: 0,
	   map: {
			'*': {
			  'css': 'require-plugins/css' // or whatever the path to require-css is
			}
	   },

       shim: {

           Bootstrap : { 'deps' :['jquery','css!bootstrap/css/bootstrap.css'] },
		   Swiper: { 
				deps :['css!swiper/css/idangerous.swiper.css'] ,
				exports: 'Swiper'
		   },
		   sha1: { 
				exports: 'sha1'
		   },
		   bootstrap_treeview:{ 
				deps :['Bootstrap','css!bootstrap-treeview/css/bootstrap-treeview.min.css'] ,
				exports: 'treeview'
		   },
		   bootstrap_wysiwyg:{ 
				deps :['Bootstrap']
		   }

       },

       paths: {

          jquery: 'jquery.min',
		  Bootstrap: 'bootstrap/js/bootstrap',
		  handlebars: 'handlebars-v3.0.0',
		  sha1:'sha1',
		  Handlebars: '../common/pefelo/util/Handlebars',	  
		  text: 'require-plugins/text',
		  //css: 'require-plugins/css',	  
		  Swiper:'swiper/js/idangerous.swiper-2.1.min',	 
		  bootstrap_treeview:'bootstrap-treeview/js/bootstrap-treeview.min',
		  bootstrap_wysiwyg:'bootstrap-wysiwyg',
		  
		  
		  Pefelo_Class:'../common/pefelo/class/Class',
		  Pefelo_Model:'../common/pefelo/mvc/Model',
		  Pefelo_View:'../common/pefelo/mvc/View',
		  Pefelo_Observer:'../common/pefelo/mvc/Observer',
		  Pefelo_Observable:'../common/pefelo/mvc/Observable',
		  Pefelo_Util:'../common/pefelo/util/Util',
		  Pefelo_RestResource:'../common/pefelo/rest/RestResource',
		  
		  Pui:'../common/pui/js/UI',
		  Pui_Spin:'../common/pui/js/Spin',
		  Pui_Layer:'../common/pui/js/Layer',
		  
		  
		  navigate:'../module/navigate/js/app',
		  home:'../module/home/js/app',
		  message:'../module/message/js/app',
		  discovery:'../module/discovery/js/app',
		  appstore:'../module/appstore/js/app',

      }
});

require([
	'Pefelo_Class'
],function(Class){

	alert(333);
	
});

/**
require([
	'navigate',
	'home',
	'Bootstrap',
	'css!../common/common.css'
],function(navigate,home){

	new navigate();
	new home();	
	
});
**/