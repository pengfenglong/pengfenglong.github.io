---
layout: post
title:  "大型应用中的js模块化"
date:   2015-07-05 09:00:00
categories: JavaScript
excerpt: 大型应用中的js模块化
---

* content
{:toc}


##什么是模块化开发？

前端开发中，起初只要在script标签中嵌入几十上百行代码就能实现一些基本的交互效果，后来js得到重视，应用也广泛起来了，jQuery，Ajax，Node.Js，MVC，MVVM等的助力也使得前端开发得到重视，也使得前端项目越来越复杂，然而，JavaScript却没有为组织代码提供任何明显帮助，甚至没有类的概念，更不用说模块（module）了，那么什么是模块呢？

一个模块就是实现特定功能的文件，有了模块，我们就可以更方便地使用别人的代码，想要什么功能，就加载什么模块。模块开发需要遵循一定的规范，否则就都乱套了。

网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试等等......开发者不得不使用软件工程的方法，管理网页的业务逻辑。
Javascript模块化编程，已经成为一个迫切的需求。理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。


##模块化演变过程

###一、原始写法

模块就是实现特定功能的一组方法。只要把不同的函数（以及记录状态的变量）简单地放在一起，就算是一个模块。

	function m1(){
	}
	function m2(){
	}

上面的函数m1()和m2()，组成一个模块。使用的时候，直接调用就行了。这种做法的缺点很明显："污染"了全局变量，无法保证不与其他模块发生变量名冲突，而且模块成员之间看不出直接关系。

###二、对象写法

为了解决上面的缺点，可以把模块写成一个对象，所有的模块成员都放到这个对象里面。

　　var module1 = new Object({
　　　　_count : 0,
　　　　m1 : function (){
　　　　　　//...
　　　　},
　　　　m2 : function (){
　　　　　　//...
　　　　}
　　});

上面的函数m1()和m2(），都封装在module1对象里。使用的时候，就是调用这个对象的属性。module1.m1();但是，这样的写法会暴露所有模块成员，内部状态可以被外部改写。比如，外部代码可以直接改变内部计数器的值。module1._count = 5;

###三、立即执行函数写法

使用"立即执行函数"（Immediately-Invoked Function Expression，IIFE），可以达到不暴露私有成员的目的。

　　var module1 = (function(){
　　　　var _count = 0;
　　　　var m1 = function(){
　　　　　　//...
　　　　};
　　　　var m2 = function(){
　　　　　　//...
　　　　};
　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};
　　})();
使用上面的写法，外部代码无法读取内部的_count变量。console.info(module1._count); //undefinedmodule1就是Javascript模块的基本写法。下面，再对这种写法进行加工。

###四、放大模式

如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）。

　　var module1 = (function (mod){
　　　　mod.m3 = function () {
　　　　　　//...
　　　　};
　　　　return mod;
　　})(module1);

上面的代码为module1模块添加了一个新方法m3()，然后返回新的module1模块。

###五、宽放大模式（Loose augmentation）

在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。如果采用上一节的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"。
　　
	var module1 = ( function (mod){
　　　　//...
　　　　return mod;
　　})(window.module1 || {});

与"放大模式"相比，＂宽放大模式＂就是"立即执行函数"的参数可以是空对象。

###六、输入全局变量

独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。为了在模块内部调用全局变量，必须显式地将其他变量输入模块。
　　
	var module1 = (function ($, YAHOO) {
　　　　//...
　　})(jQuery, YAHOO);

上面的module1模块需要使用jQuery库和YUI库，就把这两个库（其实是两个模块）当作参数输入module1。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。这方面更多的讨论，参见Ben Cherry的著名文章《JavaScript Module Pattern: In-Depth》。


##为什么要用require.js？

最早的时候，所有Javascript代码都写在一个文件里面，只要加载这一个文件就够了。后来，代码越来越多，一个文件不够了，必须分成多个文件，依次加载。下面的网页代码，相信很多人都见过。

	<!DOCTYPE html>
	<html>
		<head>
			<title></title>
			<script src="1.js"></script>	
			<script src="2.js"></script>
			<script src="3.js"></script>
			<script src="4.js"></script>
			<script src="5.js"></script>
			<script src="6.js"></script>
		</head>
		<body>

		</body>
	</html>
	
这段代码依次加载多个js文件。
这样的写法有很大的缺点。首先，加载的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；其次，由于js文件之间存在依赖关系，因此必须严格保证加载顺序（比如上例的1.js要在2.js的前面），依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。
require.js的诞生，就是为了解决这两个问题：








