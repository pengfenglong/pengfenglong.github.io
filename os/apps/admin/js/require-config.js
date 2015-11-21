require.config({

       baseUrl: 'js',
	   waitSeconds: 0,
	   map: {
			'*': {
			  'css': '../../../libs/require-plugins/css' // or whatever the path to require-css is
			}
	   },

       shim: {

           Bootstrap : { 'deps' :['jquery','css!../../../libs/bootstrap/css/bootstrap.css'] },
		   Swiper: { 
				deps :['css!../../../libs/swiper/css/idangerous.swiper.css'] ,
				exports: 'Swiper'
		   },
		   sha1: { 
				exports: 'sha1'
		   },
		   bootstrap_treeview:{ 
				deps :['Bootstrap','css!../../../libs/bootstrap-treeview/css/bootstrap-treeview.min.css'] ,
				exports: 'treeview'
		   },
		   bootstrap_wysiwyg:{ 
				deps :['Bootstrap']
		   }

       },

       paths: {

          jquery: '../../../libs/jquery.min',
		  Bootstrap: '../../../libs/bootstrap/js/bootstrap',
		  handlebars: '../../../libs/handlebars-v3.0.0',
		  sha1:'../../../libs/sha1',
		  Handlebars: '../../../common/pefelo/util/Handlebars',	  
		  text: '../../../libs/require-plugins/text',
		  //css: '../../../libs/require-plugins/css',	  
		  Swiper:'../../../libs/swiper/js/idangerous.swiper-2.1.min',	 
		  bootstrap_treeview:'../../../libs/bootstrap-treeview/js/bootstrap-treeview.min',
		  bootstrap_wysiwyg:'../../../libs/bootstrap-wysiwyg',
		  
		  
		  Pefelo_Class:'../../../common/pefelo/class/Class',
		  Pefelo_Model:'../../../common/pefelo/mvc/Model',
		  Pefelo_View:'../../../common/pefelo/mvc/View',
		  Pefelo_Observer:'../../../common/pefelo/mvc/Observer',
		  Pefelo_Observable:'../../../common/pefelo/mvc/Observable',
		  Pefelo_Util:'../../../common/pefelo/util/Util',
		  Pefelo_RestResource:'../../../common/pefelo/rest/RestResource',
		  
		  Pui:'../../../common/pui/js/UI',
		  Pui_Spin:'../../../common/pui/js/Spin',
		  Pui_Layer:'../../../common/pui/js/Layer'

      }
});
