define([
	'jquery',
	'Handlebars',
	'Pefelo_RestResource',
	'Pefelo_Util',
	'attribute',
	'Bootstrap',
	'bootstrap_treeview'
],function($,Handlebars,RestResource,Util,Attribute){

	var Category = RestResource.Factory("Mall_Category");
	
	Category.query(function(result,error){	
		
		function buildChildren(node){
		
			var children = [];
			for(var i=0,len=result.length;i<len;i++){
				if(result[i].parent && result[i].parent == node.id){
					result[i].text = result[i].name;
					children.push(result[i]);					
					buildChildren(result[i]);
				}		
			}
			
			if(children.length > 0){
				node.nodes = children;
			}
		}

		var cs = [];
		for(var i=0,len=result.length;i<len;i++){
			
			if(!result[i].parent){
				result[i].text = result[i].name;
				buildChildren(result[i]);
				cs.push(result[i]);
			}
			
		}

		
		$('#tree').treeview({
			data:cs,
			onNodeSelected: function(event, data) {
				new Attribute(data.id);
			}		
		});
		
		
	});



});