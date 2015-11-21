/************************
 * 描述：公共脚本
 * 作者：Gibil
 * 时间：2013-12-13
************************/

/************
* 公用方法
************/
var Common = {
    //图片加载完毕后触发callback事件
    imgLoaded: function (obj, callback, pars) {//obj-图片对象,callback-回调方法,pars-传递过来回调的参数(对象)
        //判断浏览器 
        var b = new Object();
        b.useragent = navigator.userAgent.toLocaleLowerCase();
        b.ie = /msie/.test(b.useragent);
        b.moz = /gecko/.test(b.useragent);
        if (b.ie) {
            obj.onreadystatechange = function () {
                if (obj.readystate == "complete" || obj.readystate == "loaded") {
                    if (pars)
                        callback(obj, pars);
                    else
                        callback(obj);
                }
            }
        } else if (b.moz) {
            obj.onload = function () {
                if (obj.complete == true) {
                    if (pars)
                        callback(obj, pars);
                    else
                        callback(obj);
                }
            }
        } else {
            if (pars)
                callback(obj, pars);
            else
                callback(obj);
        }
    },
    //保留N位小数
    //如：num为2,n为2(会在2后面补上00.即2.00)
    //num为数字，n为保留的位数
    toDecimal: function (num, n) {
        var f = parseInt(num * Math.pow(10, n) + 0.5) / Math.pow(10, n); //精度计算
        if (isNaN(f))
            return 0.00;
        var f = Math.round(num * n * 10) / (n * 10);
        var s = f.toString();
        var rs = s.indexOf('.');
        if (rs < 0) {
            rs = s.length;
            s += '.';
        }
        while (s.length <= rs + n) {
            s += '0';
        }
        return s;
    },
    //防止重复提交表单,注意此方法只对重复提交验证,不对表单验证(请独立验证)
    //使用示例：return Common.checkSubmit.submit(true);
    checkSubmit: {
        //提交次数统计
        submitCount: 0,
        //初始化统计量避免操作成功后无法继续操作
        initCount: function () {
            Common.checkSubmit.submitCount = 0;
        },
        //验证
        check: function () {
            if (Common.checkSubmit.submitCount > 0) {//已提交
                return false;
            }
            else {
                Common.checkSubmit.submitCount += 1;
                return true;
            }
        },
        //确认提交,表单验证在外部,此处只做重复验证
        submit: function (isSubmit) {//isSubmit为bool参数,表示表单是否已通过验证
            if (isSubmit) {//信息验证通过再验证是否重复提交
                if (!Common.checkSubmit.check())//防止重复提交表单
                    return false;
                else
                    return true;
            }
            else {
                Common.checkSubmit.submitCount = 0; //没通过必须将提交次数初始化，避免通过后无法提交
                return false;
            }
        }
    },
	//微信上图片预览效果
    imgZoom: function(id) {
        var imgsSrc = [];
        function reviewImage(src) {
            if (typeof window.WeixinJSBridge != 'undefined') {
                WeixinJSBridge.invoke('imagePreview', {
                    'current': src,
                    'urls': imgsSrc
                });
            }
        }
        function onImgLoad() {
            var imgs = document.getElementById(id).getElementsByTagName('img');
            if (imgs.length) {
                for (var i = 0, l = imgs.length; i < l; i++) {//忽略第一张图 是提前加载的loading图而已
                    var img = imgs.item(i);
                    var src = img.getAttribute('original') || img.getAttribute('src');
                    if (src) {
                        imgsSrc.push(src);
                        (function (src) {
                            if (img.addEventListener) {
                                img.addEventListener('click', function () {
                                    reviewImage(src);
                                });
                            } else if (img.attachEvent) {
                                img.attachEvent('click', function () {
                                    reviewImage(src);
                                });
                            }
                        })(src);
                    }
                }
            }
        }
        if (window.addEventListener) {
            window.addEventListener('load', onImgLoad, false);
        } else if (window.attachEvent) {
            window.attachEvent('load', onImgLoad);
            window.attachEvent('onload', onImgLoad);
        }
    }
}

//更多点击事件
$(function(){
	 //更多
	 $("#more").click(function(){
		more();
	});

	//二维码
	$("#erwei").click(function(){
		if($(".erwei").is(":hidden")){
			$(".erwei").show();
			$(this).find(".icon").removeClass("dobl").addClass("doblhover");
			
		}else{
			$(".erwei").hide();
			$(this).find(".icon").removeClass("doblhover").addClass("dobl");
			
		}
	});
	
	//点击二维码隐藏
	$(".erwei").click(function(){
		$(this).hide();
		$("#erwei").find(".icon").removeClass("doblhover").addClass("dobl");
	});
	
	//阴影层的点击事件
	$("#show").click(function(){
		$(this).hide();
		$("#icondiv").hide();
		$("#mcolor").removeClass("redmore").addClass("bmore");
	});	
	
	/*关闭分享朋友特效*/
	$("#sharemcover").click(function(){
		$(this).hide();
	});
	
	/*显示阴影层*/
	$(".btnshare").click(function(){
	    $("#show").hide();
		$("#mcolor").removeClass("redmore").addClass("bmore");
		$("#sharemcover").show();
	});
	
	//判断订单数量的样式
	var buy_num=$("#buy_price").text().length;
	if(buy_num <= 2){
		$("#buy_price").removeClass("em02").addClass("em01");
	}
	else if(buy_num == 3){
		$("#buy_price").removeClass("em01").addClass("em02");
}
    //wxShare(); //微信分享
});

////微信分享
//function wxShare() {
//	    //iOS平台下，分享出去的数据wxData中，imageUrl可以是DataURI格式的；但在Android平台下，必须是全路径的图片地址
//        var imgUrl = $("#shareImg").text(); //图片url
//        var descContent = document.title;    //描述内容
//        var shareTitle = document.title;     //标题
//        //分享给好友
//        function shareFriend() {
//            WeixinJSBridge.invoke('sendAppMessage',{
//                "img_url": imgUrl,
//                "img_width": "200",
//                "img_height": "200", 
//                "link": lineLink,
//                "desc": descContent,
//                "title": shareTitle
//            }, function(res) {
//                _report('send_msg', res.err_msg);
//            })
//        }
//        // 分享到朋友圈
//        function shareTimeline() {
//            WeixinJSBridge.invoke('shareTimeline',{
//                "img_url": imgUrl,
//                "img_width": "200",
//                "img_height": "200",
//                "link": lineLink,
//                "desc": descContent,
//                "title": shareTitle
//            }, function(res) {
//                   _report('timeline', res.err_msg);
//            });
//        }
//        // 分享到微博
//        function shareWeibo() {
//            WeixinJSBridge.invoke('Timeline',{
//                "content": descContent,
//                "url": lineLink,
//            }, function(res) {
//                _report('weibo', res.err_msg);
//            });
//        }
//        // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
//        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
//            // 分享给好友
//            WeixinJSBridge.on('menu:share:appmessage', function (argv) {
//                shareFriend();
//            });
//            // 分享到朋友圈
//            WeixinJSBridge.on('menu:share:timeline', function (argv) {
//                shareTimeline();
//            });
//            // 分享到微博
//            WeixinJSBridge.on('menu:share:weibo', function (argv) {
//                shareWeibo();
//            });
//        }, false);
//}



/************************
* 描述：微信公共脚本
* 作者：Gibil
* 时间：2013-12-13
************************/
$(function () {
    // 3. 通过config接口注入权限验证配置
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: commonJson.AppID, // 必填，公众号的唯一标识
        timestamp: commonJson.TimeStamp, // 必填，生成签名的时间戳
        nonceStr: commonJson.NonceStr, // 必填，生成签名的随机串
        signature: commonJson.Signature, // 必填，签名，见附录1
        jsApiList: [// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "chooseImage",
        "uploadImage",
        "downloadImage",
        "previewImage"


        ]
    });

    // 4. 通过ready接口处理成功验证
    wx.ready(function () {

        weixin.wxShareTimeline(); //微信分享到朋友圈

        weixin.wxShareAppMessage(); //微信分享给朋友

        weixin.wxShareWeibo(); //微信分享到微博

        weixin.wxShareQQ(); //微信分享到QQ

    });

    // 5. 通过error接口处理失败验证
    wx.error(function (res) {
        //alert(JSON.stringify(res));
        //alert("微信接口验证失败!查看是否配置url");
    });


});

var imgUrl = '';//分享图标
var descContent = '';//描述
var shareTitle = document.title;     //标题
var lineLink = window.location.href; //链接

function checkImgAndDesc(){
	if(typeof(curPageJson) != "undefined"){
		if(curPageJson.PageCode == "detail"){
			imgUrl = $("#shareImg").text();
			descContent = commonJson.C_ProShareLanguage;
		}else{
			imgUrl = commonJson.C_ShopLogo;
			descContent = commonJson.C_ShareLanguage;
		}
	}
}
function checkLink(){
	if(typeof(isOpenShare) != "undefined"){
		if(ruid != ''){
			if(memberId!=ruid){
				var replaceWith=memberId;
				var paramName="ruid";
				var oUrl = this.location.href.toString();
				var re=eval('/('+ paramName+'=)([^&]*)/gi');
				var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
				lineLink = nUrl;// 链接url
		   }else{
			   var windowHref = window.location.href;
			   if(windowHref.indexOf("ruid") > 0){
				   lineLink = windowHref;
				}else{
					lineLink = windowHref + "&ruid="+ruid ;
				}// 链接url
		   }
		}
		else
		{
			lineLink = window.location.href + "&ruid="+memberId;
		}
	}
	 
}


function checkLinkTgid(){
	
	//if(Fxset.IsWeike === 1){
		var windowHref = window.location.href;
		var symb=windowHref.indexOf("?");
		var clsid=windowHref.match("clsid");
		var classHtml=windowHref.match("prolist.html");
		var openWK=commonJson.C_WkOpen;
		var weike=(openWK===1)?("tgid="+tgid):'';
		
		if(tgid != ''){
			if(memberId!=tgid){
				
				var replaceWith=memberId;
				var paramName="tgid";
				var oUrl = this.location.href.toString();
				var re=eval('/('+ paramName+'=)([^&]*)/gi');
                var nUrl = oUrl.replace(re,paramName+'='+replaceWith);
				lineLink = nUrl;// 链接url
		   }else{
			 
			   //var windowHref = window.location.href;
			   if(windowHref.indexOf("tgid") >= 0){
				
				   lineLink = windowHref;
				}else{
					
					 if(typeof(ruid)!= "undefined"){//详情页面，某类列表
						 if(clsid===null&&classHtml!==null){//全部分类
					       lineLink =windowHref +((openWK===1)?((memberId !==''?("?tgid="+memberId):'')):'');
				         }else{//详情页，某类列表页
					       lineLink = windowHref + "&"+weike+"&ruid="+((ruid !== '')?ruid:memberId);
				         }
                   }else{//首页，全部列表页
                      //lineLink = windowHref +(symb==="?"?"&":"?")+weike;  
					  lineLink = windowHref +((openWK===1)?((symb<0?"?":"&")+weike):'');  
					  
                   }
				   
                   
				}// 链接url
				

		   }
		}else{
			if(typeof(ruid)!= "undefined"){//详情页面，某类列表
				if(clsid===null &&classHtml!==null){//全部分类
					lineLink =windowHref +((openWK===1)?((memberId !==''?("?tgid="+memberId):'')):'');
				}else{//详情页，某类列表页
					lineLink = windowHref+((ruid !== '')?("&ruid="+ruid):'');
				}
			 
			 //alert(14+lineLink);
            }else{//首页，全部列表页
            var linksymb=(symb<0?"?":"&");
			 lineLink =windowHref +((openWK===1)?((memberId !==''?(linksymb+"tgid="+memberId):'')):'');
            }
            
		}
//	}


}


checkImgAndDesc();
checkLink();
checkLinkTgid();
var obj={
lineLinks:lineLink
}

var weixin = {
	
    localIds: "",
    serverId: "",
    //微信分享到朋友圈
    wxShareTimeline: function () {
        wx.onMenuShareTimeline({
            title: shareTitle, // 分享标题
            link: obj.lineLinks, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数

            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    },
    //微信分享给朋友
    wxShareAppMessage: function () {

        wx.onMenuShareAppMessage({
            title: shareTitle, // 分享标题
            desc: descContent, // 分享描述
            link: obj.lineLinks, // 分享链接
            imgUrl: imgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

    },
    //微信分享到微博
    wxShareWeibo: function () {
        wx.onMenuShareWeibo({
            title: shareTitle, // 分享标题
            desc: descContent, // 分享描述
            link: obj.lineLinks, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });

    },

    //微信分享到QQ
    wxShareQQ: function () {
        wx.onMenuShareQQ({
            title: shareTitle, // 分享标题
            desc: descContent, // 分享描述
            link: obj.lineLinks, // 分享链接
            imgUrl: imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
    }


}



/*more事件*/
function more(){
    if($("#icondiv").is(":hidden"))
	{
		$("#icondiv").show();
	}
	else{
		$("#icondiv").hide();
	}
	/*if($("#show").is(":hidden"))
	{
		$("#show").show();
	}
	else{
		$("#show").hide();
	}*/
	if ($(".erwei").css("display") == "block")
	{
		$(".erwei").hide();
	}
	if($("#mcolor").is(".bmore")){
		$("#mcolor").removeClass("bmore").addClass("redmore");
	}
	else{
		$("#mcolor").removeClass("redmore").addClass("bmore");
	} 
}

/************************************************************
* Cookie操作    											*
* 注意：													*
*   浏览器中Cookie有大小和个数限制							*
*   限制一般是数量50个，总大小4096字节（包括name和value）。	*
*************************************************************/
var CookieHelper = {
     fxshopid:"",
     BranchID:"",
     comid:"",
     ruid:"",
	//创建Cookie
	//name：Cookie名
	//value：Cookie值
	//second：有效时间，秒
	Set: function(name, value, second) {//添加cookie
		var str = name + "=" + escape(value);
		if (second != null && second > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
			var date = new Date();
			date.setTime(date.getTime() + second * 1000);
			str += ";expires=" + date.toGMTString();
		}
		document.cookie = str;
	},
	//获取Cookie
	//name：Cookie名
	Get: function(name) {//获取指定名称的cookie的值
		var arrStr = document.cookie.split("; ");
		for(var i = 0;i < arrStr.length;i ++) {
			var temp = arrStr[i].split("=");
			if(temp[0] == name) return unescape(temp[1]);
		}
		return "";
	},
	//删除Cookie
	//name：Cookie名
	Remove: function(name){//为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
		var date = new Date();
		date.setTime(date.getTime() - 10000);
		document.cookie = name + "=a; expires=" + date.toGMTString();
	}
}
//返回购物车数据
$(function () {
    if ($("#wshop_cartindex").length > 0) {
		return;
        $.ajax({
            type: "get",
            dataType: "Json",
            url: "../Ajax/Cart.ashx?act=CartProCount&fxshopid="+CookieHelper.fxshopid+"&BranchID="+CookieHelper.BranchID+"&comid="+CookieHelper.comid+"&ruid="+CookieHelper.ruid+"",
            success: function (data) {
                var t = eval(data); //强制转换一下json字符串，生成json对象
                if (t) {   
                	$.each(t, function (i, n) {
						 if (n["Count"] != "0" || n["Count"] !="..."){
							$("#buy_price").show();
							$("#buy_price").text(n["Count"]);
						}
						
                	});
                }
            },
            error: function (e) {
                $("#buy_price").text("0");
            }
        });
    }

});