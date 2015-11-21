/************************
 * 描述：商品列表
 * 作者：Gibil
 * 时间：2014-3-19
************************/
//console.log(localStorage);
//加载时判断商品当天是否点过赞
function checkTime(newTime,oldTime){//判断两次点击相隔的时间！
      var disD = newTime.DateDiff('d', oldTime);
       if(disD>-1){//如果时间相差一天
       return true;
        }else{
       return false;
       }   
      }
function setLocalItem(key,value){//重写本地缓存方法
         localStorage.setItem(key,value);
      }
function checkId(id){
          var newArr = JSON.stringify(localStorage);//将缓存数据转换为数组
          var str =  "" + id +"";
          if(newArr.toString().indexOf(str)>-1){//判断缓存中是否存在该Id，如果存在返回true，否则返回false
             return true;
          }else{
              return false;
          }
      }
function checkZan(id){//判断加载时页面是否点过赞
    var nowTime = new Date();
    var isLike;//1为 可以赞，0为不可以赞
    if(!checkId(id)){//如果不存在，则为zan添加样式
       islike = 0;
    }else{
        var thisId = "" + id +"";//将该id存储为字符串
        var oldTime = localStorage.getItem(thisId);
        var d = nowTime - oldTime;
        var dd = nowTime.DateDiff('s', oldTime);
        if(dd>-30) {
            isLike = 1;//如果时间间隔小于一天
        }else{
            isLike = 0;
        }        
    }
    return isLike;
}
var initLazyLoad = function(){
	//初始化懒加载
	$(".list .liright img").lazyload({
		effect : 'fadeIn',
        threshold : 100,
		placeholder : "http://source.weigouyi.com/WMainShop/Module/Static/lazyloadreplace.png"
	});
	$(".list .lileft img").lazyload({
		effect : 'fadeIn',
        threshold : 100,
		placeholder : "http://source.weigouyi.com/WMainShop/Module/Static/lazyloadreplace.png"
	});
}
//获取url参数,name:参数名称
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null)
        return unescape(r[2]);
    return null; //返回参数值
}
var List = {
    scrollCount: 0, //触发获取数据的数次(+1等于页码)
    maxCount: 0, //可触发获取数据的总数字(总页数)
    pageSize: 20, //每次触发取的记录条数
    isLoading: false, //列表是否加载中，避免重复触底加载
    iCnt: 0,
    memberId: '', //当前登录的会员ID
    searchKey: sKey, //搜索关键字
	sortType:'',
    //获取数据
    getMore: function (type, first) {
        if (List.isLoading)	//取数过程中，先停止重复取数
            return;

        if (first) {
            List.scrollCount = 1;
            $('#noRec').hide();
           // if (type == 'search')
		   //$('.list .lileft,.list .liright').html('');
			$('.list .lileft,.list .liright').html('');
        }
        else {
            List.scrollCount += 1;
            //大于最大数量时不获取数据
            if (List.scrollCount > 1 && List.scrollCount > List.maxCount) {
                return;
            }
        }
		$('#cloading').show(); //显示加载框
        List.isLoading = true;
        setTimeout('List.d("' + type + '" ,"'+ List.sortType + '",' + initLazyLoad + ')', 1000); //模拟延迟取数据
    },

    //异步获取商品列表
    d: function (type, sortType, callback) {
		
        var dataJson;
        if (type == "search") {
            dataJson = { "act": "search", "comid":comid,"clsid": clsid, "currpage": List.scrollCount, "pagesize": List.pageSize, "like": 1, "sort": sortType, "sKey": List.searchKey, "imgSize": "" };
        }
        else {
            dataJson = { "act": "list", "comid":comid, "clsid": clsid, "bid": bid, "attr": attr, "price": price, "sale": sale, "sort": sortType, "currpage": List.scrollCount, "pagesize": List.pageSize, "like": 1, "imgSize": "", "datetype": getUrlParam("datetype"),"pass": getUrlParam("pass"),"tuesday": getUrlParam("tuesday"), "newpresell": getUrlParam("newpresell"), "today": getUrlParam("today"),"promo": getUrlParam("promo"), "hot": getUrlParam("hot"),"new": getUrlParam("new") }
        }

        $.ajax({
            type: 'POST',
            url: 'http://m.weigouyi.com/ajax/product.ashx',
            dataType: 'json',
            data: dataJson,
            success: function (msg, textStatus) {
                if (typeof (msg.iRetCnt) != "undefined") {
                    List.maxCount = msg.iPageCount;
                    var $lCon = $('.list .lileft');
                    var $rCon = $('.list .liright');
                    if (msg.iRetCnt > 0) {
                        $('#noRec').hide();
                        var lHtml = '', rHtml = '',disCount='';
                        for (var i = 0; i < msg.Data.length; i++) {
                            var proHtml = '';
							if(msg.Data[i].discount){
								disCount = '('+ msg.Data[i].discount +')';
							}
                            proHtml += '<div class="lidiv"><div class="liimg">';
                            proHtml += '<a href="' + msg.Data[i].url + '"><img original="' + msg.Data[i].pic + '" alt="商品" /></a>';
                            proHtml += '</div><div class="litext">';
                            proHtml += '<div><h3>' + msg.Data[i].name + '</h3></div>';
                            proHtml += '<div><span>￥' + msg.Data[i].salePrice + '</span><span class="count">'+ disCount +'</span><div class="ltri">'
							    + '<em>' + (msg.Data[i].likecount > 0 ? msg.Data[i].likecount : '') + '</em>'
							    + '<a pid="' + msg.Data[i].pid + '" class="icon-xihuan star' + (checkZan(msg.Data[i].pid) ? ' select' : '') + '" onclick="List.doZan(this);"></a></div></div>';
                            proHtml += '<div class="clear"></div>';
                            proHtml += '</div></div>';
                            if (i % 2 == 0) {
                                lHtml += proHtml;
                            } else {
                                rHtml += proHtml;
                            }
                        }
                        $lCon.append(lHtml);
                        $rCon.append(rHtml);
                    }
                    else {
                        $lCon.html('');
                        $rCon.html('');
                        $('#noRec').show();
                    }

                    $('#cloading').hide(); //隐藏加载框
                }

                List.isLoading = false;
				callback();
            },
            error: function (textStatus) {
                List.isLoading = false;
                $('#cloading').hide(); //隐藏加载框
            }
        });
    },

    //赞
    doZan: function (obj) {
        var $this = $(obj);
        var id = $this.attr('pid');
        var $num = $this.parent().find('em');
        var likeNum = $.trim($num.text()).length > 0 ? parseInt($.trim($num.text())) : 0;
        $this.css({"position":"relative"});
        time = new Date();
        if (localStorage) { //判断浏览器是否支持本地存储
        if (!checkId(id)) {//如果缓存中没有存在该id，则存储该id，并执行相应的事件
            setLocalItem(id,time);
            act($this);
            //console.log(localStorage);
          } else {//如果缓存中存在该数据.则判断与上次点击的时间
            var thisId = "" + id +"";//将该id存储为字符串
            var oldTime = localStorage.getItem(thisId);
            var d = time - oldTime;
            var dd = time.DateDiff('s', oldTime);          
            if (dd > -30) {
                $.Alert('亲，今天您已点为该商品点过赞了，请明天再来！',290);
            } else {
              setLocalItem(id,time);
              act($this);
            }
          }
         function act(obj) {
          var $this = obj;
          var isLike = $this.hasClass('select'); //是否已喜欢
          $.ajax({
            url: '/ajax/product.ashx',
            data: { 'act': 'zan', 'pid': $this.attr('pid'), 'islike': 1 }, //注意islike参数取反
            success: function (msg) {
                if (msg == "1") {
                    if (isLike) $this.removeClass('select');
                    else $this.addClass('select');
                    var $num = $this.parent().find('em');
                    var likeNum = $.trim($num.text()).length > 0 ? parseInt($.trim($num.text())) : 0;
                    likeNum++;
                    if (likeNum > 0) $num.text(likeNum);
                    else $num.text('');                 
                } 
              }
           });
          obj.append('<b>+1</b>');
          obj.find('b').css({"position":"absolute","top":"-5px","right":"-5px","color":"red"}).animate({
            "top": "-1000px",
            "opacity": "0"
          }, 1000,function(){
            $(this).remove();
          });
          }
        }
    }
}

$(function () {
    $(window).scroll(function () {
        //滚动高度 + 窗口高度 + (底部导航高度 + 版权块高度) >= 文档高度，注意：文档高度不包括fixed定位的元素（搜索导航、底部导航）
        if ($(document).scrollTop() + $(window).height() + (50 + 50) >= $(document).height()) {
            if (typeof (act) != "undefined") {
                List.getMore(act, false);
            }
            else {
                List.getMore('list', false);
            }
        }
    });

	//默认选中为综合（时间降序）
	 $(".sort ul li").eq(0).addClass("active");
	 //排序事件
     $(".sort ul li").click(function () { 
		   if (!$(this).hasClass('active')) {
			  $(this).addClass("active").siblings().removeClass("active");
			  List.sortType = $(this).attr('sortType');
			  //获取关键字判断
			   var searchVal02 = $.trim($("#keyword").val());
			     if (searchVal02.length > 0) {
					  List.searchKey = searchVal02;
					  List.getMore('search', true);
				 }else{
             		  List.getMore('list', true);
				 }
		   }
	  });
	  
	  //价格的降价和涨价的图标切换
	   $("#priceli").click(function () { 
	        var sortType2=$(this).attr('sortType');
			  List.sortType = sortType2;
			  //获取关键字判断
			  var searchVal03 = $.trim($("#keyword").val());
			  if (searchVal03.length > 0) {
					  List.searchKey = searchVal03;
					  List.getMore('search', true);
				 }else{
             		  List.getMore('list', true);
			  }
			  
			 if (sortType2 == "price_desc") {
				$(this).find("b").removeClass("baes").addClass("bdes"); 
				$(this).attr("sortType","price_asc");
			 }else if(sortType2 == "price_asc"){
				$(this).find("b").removeClass("bdes").addClass("baes"); 
				$(this).attr("sortType","price_desc");
			 }
	   });

    //展示下拉分类菜单
    $(".list_l").click(function () {
        /*if ($("#subnav").is(":hidden")) {
            $("#subnav,#zao").show();
        } else {
            $("#subnav,#zao").hide();
        }*/
		$("#subnav").toggleClass("subnav_open");
    })
    $("#zao").click(function () {
        $("#subnav").hide();
		$(this).hide();
    })

    //搜索
    $("#btnSearch").click(function () {
        var searchVal = $.trim($("#keyword").val());
        if (!searchVal.length) {
            $.Alert('请输入搜索关键字'); //提示
        }
        else {
            List.searchKey = searchVal;
			var $activeli;
			$activeli = $(".sort ul li").filter(".active");
			List.sortType = $activeli.attr('sortType');
            List.getMore('search', true);
        }
    });

    //加载列表
    if (typeof (act) != "undefined") {
        if (act == 'search')
			$('#keyword').val(List.searchKey);
        	List.getMore(act, true);
    }
    else {
		List.sortType = $(this).attr('sortType');
        List.getMore('list', true);
    }	
	
    //搜索框的鼠标移进移出效果
	$(".in_text").focus(function(){
		$("#t_head_m").removeClass("t_head_m").addClass("t_head_mb");
	}).blur(function(){
		$("#t_head_m").removeClass("t_head_mb").addClass("t_head_m");
	});	

     

});
//时间处理函数
Date.prototype.DateDiff = function(strInterval, dtEnd) {
      var dtStart = this;
      if (typeof dtEnd == 'string') //如果是字符串转换为日期型
      {
        dtEnd = StringToDate(dtEnd);
      }
      switch (strInterval) {
        case 's':
          return parseInt((dtEnd - dtStart) / 1000); //获取秒
        case 'n':
          return parseInt((dtEnd - dtStart) / 60000);
        case 'h':
          return parseInt((dtEnd - dtStart) / 3600000);
        case 'd':
          return parseInt((dtEnd - dtStart) / 86400000);
        case 'w':
          return parseInt((dtEnd - dtStart) / (86400000 * 7));
        case 'm':
          return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12) - (dtStart.getMonth() + 1);
        case 'y':
          return dtEnd.getFullYear() - dtStart.getFullYear();
      }
    }
function StringToDate(DateStr) {
      var converted = Date.parse(DateStr);
      var myDate = new Date(converted);
      if (isNaN(myDate)) {
        //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';
        var arys = DateStr.split('-');
        myDate = new Date(arys[0], --arys[1], arys[2]);
      }
      return myDate;
}