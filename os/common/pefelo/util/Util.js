define(function() { 
	var Util = {
		getUrlParam : function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) {
				return unescape(r[2]);
			}
			return null;
		},
		
		setUrlParam : function(destiny, par, par_value) {
			var pattern = par + '=([^&]*)';
			var replaceText = par + '=' + par_value;
			if (destiny.match(pattern)) {
				var tmp = '/\\' + par + '=[^&]*/';
				tmp = destiny.replace(eval(tmp), replaceText);
				return (tmp);
			} else {
				if (destiny.match('[\#]')) {
					return destiny + '&' + replaceText;
				} else {
					return destiny + '#' + replaceText;
				}
			}
			return destiny + '\n' + par + '\n' + par_value;
		},
		

		/**
		*判断是否为空
		*/
		isEmpty : function(s){
			if(s === '' || s === null){
				return true;
			}else{
				return false;
			}
		},

		/**
		*生成uuid
		*/
		uuid : function(len,radix){

			var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

			var chars = CHARS, uuid = [], i;
			radix = radix || chars.length;
		 
			if (len) {
			  // Compact form
			  for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
			} else {
			  // rfc4122, version 4 form
			  var r;
		 
			  // rfc4122 requires these characters
			  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
			  uuid[14] = '4';
		 
			  // Fill in random data.  At i==19 set the high bits of clock sequence as
			  // per rfc4122, sec. 4.1.5
			  for (i = 0; i < 36; i++) {
			if (!uuid[i]) {
			  r = 0 | Math.random()*16;
			  uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
			  }
			}
		 
			return uuid.join('');
		},
		
		
		/**
		 * 本地存储
		 */
		store : function(namespace, data) {
			if (arguments.length > 1) {
				return localStorage.setItem(namespace, JSON.stringify(data));
			} else {
				var store = localStorage.getItem(namespace);
				return (store && JSON.parse(store)) || [];
			}
		}
	
	};
	
	return Util;
});