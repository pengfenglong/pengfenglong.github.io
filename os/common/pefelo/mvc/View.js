define(['Pefelo_Class'], function(Class) { 
	var View = Class.extend({
		listenTo:function(model,name,callback){
			model.on(name,callback);
		}
	});
	return View;
});