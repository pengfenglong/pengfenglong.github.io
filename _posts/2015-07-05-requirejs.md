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

##为什么要用require.js？

最早的时候，所有Javascript代码都写在一个文件里面，只要加载这一个文件就够了。后来，代码越来越多，一个文件不够了，必须分成多个文件，依次加载。下面的网页代码，相信很多人都见过。

	<script src="1.js"></script>
　　<script src="2.js"></script>
　　<script src="3.js"></script>
　　<script src="4.js"></script>
　　<script src="5.js"></script>
　　<script src="6.js"></script>







