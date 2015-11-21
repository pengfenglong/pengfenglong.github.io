define([
	'jquery',
	'Handlebars',
	'Pefelo_RestResource',
	'Pefelo_Util',
	'text!../tpl/creategood-form.html',
	'Bootstrap',
	'bootstrap_treeview',
	'bootstrap_wysiwyg'
],function($,Handlebars,RestResource,Util,tpl){

	$('button').click(function(){

		$('#tree').empty();
		$('#form').html(tpl);

		$('#editor').wysiwyg();
	
	});

});