define(['jquery','sha1'],function($,sha1) { 
	
	function copy(obj) {
		if (obj == null || typeof (obj) != 'object')
			return obj;

		var temp = obj.constructor();
		// changed

		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				temp[key] = copy(obj[key]);
			}
		}
		return temp;
	}

	function isType(type) {
		return function (obj) {
			return {}.toString.call(obj) == "[object " + type + "]"
		}
	}

	var isFunction = isType("Function");

	function Resource(appId, appKey, baseurl) {
		var now = Date.now();
		this.appId = appId;
		this.baseurl = baseurl || "https://d.apicloud.com/mcm/api";
		this.appCode = sha1(appId + "UZ" + appKey + "UZ" + now) + "." + now;
		this.defaultactions = {
			'get': {type: 'GET',params: ["_id", "_relation"]}, //_relationid 后续支持
			'save': {type: 'POST',params: ["_id", "_relation"]}, //_relationid 后续支持
			'query': {type: 'GET',params: ["filter"]},
			'delete': {type: 'DELETE',params: ["_id", "_relation"]}, //_relationid 后续支持
			'login': {type: "POST",params: ["username", "password"]},
			'logout': {type: "POST"},
			'count': {type: "GET",params: ["_id", "_relation","filter"]},
			'exists': {type: "GET",params: ["_id"]},
			'findOne': {type: 'GET',params: ["filter"]},
			'verify': {type: "POST",params: ["email", "language", "username"],alias: "verifyEmail"},
			'reset': {type: "POST",params: ["email", "language", "username"],alias: "resetRequest"}
		};
		this.headers={};
		this.setHeaders("X-APICloud-AppId",this.appId);
		this.setHeaders("X-APICloud-AppKey",this.appCode);
		this.setHeaders("Content-Type","application/json;");
	}
	Resource.prototype.setHeaders=function(key,value){
		this.headers[key]=value;
	}
	Resource.prototype.batch=function(requests,callback){
		var ajaxConfig={
			url: this.baseurl+"/batch",
			type: "POST",
			data: {
				body:JSON.stringify({requests:requests})
			}
		}
		ajaxConfig["headers"] = {};
		for(var header in this.headers){
			ajaxConfig["headers"][header]=this.headers[header];
		}
		
		httpConfig.success = function(data){
			callback(data, null);
		}
		httpConfig.error = function(e){
			callback(null, e);
		}
		
		$.ajax(ajaxConfig);
		
		//api.ajax(httpConfig, function (ret, err) {
		//	return callback(ret, err);
		//})
	}
	Resource.prototype.upload = function (modelName,isFilter, filepath, params, callback) {
		if (typeof params == "function") {
			callback = params;
			params = {};
		}
		var url=params["_id"]&&params["_relation"]?("/"+modelName+"/"+params["_id"]+"/"+params["_relation"]):"/file";
		var isPut=(!params["_relation"])&&params["_id"];
		var fileUrl = this.baseurl + url + ( isPut ? ("/" + params["_id"]) : "");
		var filename = filepath.substr(filepath.lastIndexOf("/") + 1, filepath.length);
		var ajaxConfig={
			url: fileUrl,
			type: isPut ? "PUT" : "POST",
			data: {
				values: {
					filename: filename
				},
				files: {
					file: filepath
				}
			}
		}
		ajaxConfig["headers"] = {};
		for(var header in this.headers){
			if(header=="Content-Type") continue;
			ajaxConfig["headers"][header]=this.headers[header];
		}
		
		httpConfig.success = function(data){
			callback(data, null);
		}
		httpConfig.error = function(e){
			callback(null, e);
		}
		
		/**
		api.ajax(ajaxConfig, function (ret, err) {
			if (ret && ret.id && !err) {
				var newobj = {};
				if (isFilter) {
					newobj["id"] = ret["id"];
					newobj["name"] = ret["name"];
					newobj["url"] = ret["url"];
					callback(null, newobj)
				} else {
					callback(null, ret);
				}
			} else {
				callback(ret || err, null)
			}
		});
		*/
	}

	Resource.prototype.Factory = function (modelName) {
		var self = this;
		var route = new Route(modelName, self.baseurl);
		var actions = copy(this.defaultactions);
		var resourceFactory = new Object();
		Object.keys(actions).forEach(function (name) {
			if (modelName != "user" && ["login", "logout", "verify", "reset"].indexOf(name) != -1){ return;}
			resourceFactory[name] = function (a1, a2, a3) {
				var action = copy(actions[name]);
				var params = {}, data, callback;
				var hasBody = /^(POST|PUT|PATCH)$/i.test(action.type);
				switch (arguments.length) {
					case 3:
						params = a1;
						data = a2;
						callback = a3;
						break;
					case 2:
						if (hasBody)
							data = a1;
						else
							params = a1;
						callback = a2;
						break;
					case 1:
						if (isFunction(a1))
							callback = a1;
						else if (hasBody)
							data = a1;
						else
							params = a1;
						break;
					case 0:
						break;
					default:
						throw new Error("参数最多为3个");
				}
				if (hasBody&&name != "logout") {
					var fileCount = 0;
					Object.keys(data).forEach(function (key) {
						var item = data[key];
						if (item && item.isFile) {
							var isFilter = true;
							if (modelName == "file"||item.isFileClass) {
								isFilter = false;
							}
							fileCount++;
							self.upload(modelName,isFilter, item.path, params, function (err, returnData) {
								if (err) {
									return callback(null, err);
								} else {
									if (!isFilter)
										return callback(returnData, null);
									data[key] = returnData;
									fileCount--;
									if (fileCount == 0) {
										next();
									}
								}
							})
						}
					});
					if (fileCount == 0) {
						next();
					}
				} else {
					next();
				}
				function next() {
					var httpConfig = {};
					httpConfig["headers"] = {};
					for(var header in self.headers){
						httpConfig["headers"][header]=self.headers[header];
					}
					if (name === "logout"&&!httpConfig["headers"]["authorization"]) {
						 return callback({status:0,msg:"未设置authorization参数,无法注销!"}, null);
					}
					if (hasBody) {
						//httpConfig.data = {
						//	body: JSON.stringify(data)
						//};
						
						httpConfig.data = JSON.stringify(data);
					}
					
					if (params && (name == "save") && params["_id"] && (!params["_relation"]) && (!params["_relationid"])) {
						action.type = "PUT";
					}
					if (params && (name == "save") && params["_id"] && params["_relation"] && params["_relationid"]) {
						action.type = "PUT";
					}
					for (var key in action) {
						if (key != 'params' && key != "alias") {
							httpConfig[key] = copy(action[key]);
						}
					}

					var curparams = {};
					action.params = action.params || [];
					for (var k = 0, len = action.params.length; k < len; k++) {
						var tempkey = action.params[k];
						if (params[tempkey]) {
							curparams[tempkey] = copy(params[tempkey]);
						}
					}
					if (["login", "logout", "count", "exists", "verify", "reset", "findOne"].indexOf(name) != -1) {
						curparams["_custom"] = action.alias || name;
					}
					route.setUrlParams(httpConfig, curparams);
					//console.log(httpConfig.type + "\t" + httpConfig.url);
					
					
					httpConfig.success = function(data){
						callback(data, null);
					}
					httpConfig.error = function(e){
						callback(null, e);
					}
					
					$.ajax(httpConfig);
					
					//api.ajax(httpConfig, function (ret, err) {
					//	return callback(ret, err);
					//})
				}
			};
		});
		return resourceFactory;
	};

	function Route(template, baseurl) {
		this.template = template;
		this.baseurl = baseurl;
	}

	Route.prototype = {
		setUrlParams: function (config, params) {
			var url = "/:_class/:_id/:_relation/:_custom/:_relationid";
			url = url.replace(":_class", this.template);
			var parArr = [];
			Object.keys(params).forEach(function (ckey) {
				if (ckey.charAt(0) == '_') {
					url = url.replace(":" + ckey, params[ckey]);
					delete params[ckey];
				} else {
					if (ckey == "filter") {
						parArr.push(ckey + "=" + JSON.stringify(params[ckey]));
					}
				}
			});
			url = url.replace(/:[^/]+/ig, '/');
			if (parArr.length > 0) {
				url += ("?" + parArr.join("&"));
			}
			url = url.replace(/\/+/g, '/');
			config.url = this.baseurl + url;
		}
	};

	var resource = new Resource("A6963902293644", "51B85664-52FF-0C03-EB9E-2A5037BA3CBC");
	

	return resource;

});
