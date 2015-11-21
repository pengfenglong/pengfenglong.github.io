define([
	'jquery',
	'Handlebars',
	'Pefelo_View',
	'Pefelo_RestResource',
	'text!../tpl/attribute-list.html'
],function($,Handlebars,View,RestResource,tpl){

	function View(cid){	
		
		var Attribute = RestResource.Factory("Mall_Attribute");
		
		Attribute.query({filter:{where:{category: cid}}},function(result,error){	
			var template = Handlebars.compile(tpl);
			$('#attribute-list').html(template(result));

			$('button.s').click(function(){		
				var name = $('#name').val();
				var type = $('#type').val();
				var defaultValue = $('#defaultValue').val();
			
				Attribute.save({
					name:name,
					type:type,
					defaultValue:defaultValue,
					category:cid
				},function(result,error){				
					if(result && result != null){
						if(type != 'input'){
							var AttributeValue = RestResource.Factory("Mall_Attribute_Value");
							defaultValue = defaultValue.split(',');
							for(var i=0,len=defaultValue.length;i<len;i++){
								AttributeValue.save({
									attribute:result.id,
									value:defaultValue[i]
								});
							}
							
						}
						$('#myModal').modal('hide')
						new View(cid);
						//window.location.reload();
					}else{
						alert('Ê§°Ü');
					}				
					
				});					
			});	

			
		});
		
		
		
	}

	return View;


})