define(['Pefelo_Class'], function(Class) { 
	
	var Model = Class.extend({
		/*
		* 添加 name 对应的 事件callback，保存在this._events里
		*/
		on: function( name, callback ){
			this._events || (this._events = {});				//确保this._events存在
			this._events[name] = this._events[name] || [];		//确保this._events[name]存在
			this._events[name].push({ callback: callback });	//将callback 添加到 this._events[name] 内
		},
		
		/*
		* 执行已经保存在this._events里的 name 对应的事件
		*/
		trigger : function( name ){
			var args = Array.prototype.slice.call( arguments, 1 );		//将参数中除 name 外的其它参数取出来
			if( this._events && this._events[name] ){					//确保 this._events[name] 存在
				for( var i = 0; i < this._events[name].length; i++){	//循环执行里面的callback
					this._events[name][i].callback.apply( this, args );	//将步骤一取出的值作用callback的参数
				}
			}
		},
		
		/*
		* 删除this._events里 name 对应的事件
		*/
		off: function( name ){
			if( this._events ){
				delete this._events[name];							//删除  this._events[name]
			}
		}
	});
	return Model;

});