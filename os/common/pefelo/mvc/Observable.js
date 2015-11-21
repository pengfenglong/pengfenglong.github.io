define(['Pefelo_Class'],function(Class) { 

	var Observable = Class.extend({
	
		//观察者列表
		observers:[],
		//添加观察者
		addObserver:function(observer){
			//如果存在先删除
			this.deleteObserver(observer);
			this.observers.push(observer);
		},
		//删除观察者
		deleteObserver:function(observer){
			var i = this.observers.indexOf(observer);
			if(i != -1){
				this.observers = this.observers.splice(i,1);
			}
		},
		//通知观察者
		notifyObservers:function(data){
			for(var i=0,len=this.observers.length;i<len;i++){
				this.observers[i].update.call(this.observers[i],this,data);
			}
		}
	
	});
	
	return Observable;


});