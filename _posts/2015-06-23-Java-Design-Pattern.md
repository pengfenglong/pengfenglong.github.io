---
layout: post
title:  "Java 设计模式"
date:   2015-06-23 09:00:00
categories: Java
excerpt: Java 设计模式
---

* content
{:toc}


##1 创建型设计模式

###1.1 构造器模式 Constructor

###1.2 工厂模式 Factory

###1.3 单例模式 Singleton
	
	饿汉模式
	public class Singleton {

	　　private Singleton(){}

	　　//在自己内部定义自己一个实例，是不是很奇怪？
	　　//注意这是private 只供内部调用

	　　private static Singleton instance = new Singleton();

	　　//这里提供了一个供外部访问本class的静态方法，可以直接访问　　
	　　public static Singleton getInstance() {
	　　　　return instance; 　　
	　　 } 
	} 
	 
	懒汉模式
	public class Singleton { 

	　　private static Singleton instance = null;

	　　public static synchronized Singleton getInstance() {

	　　//这个方法比上面有所改进，不用每次都进行生成对象，只是第一次　　　 　
	　　//使用时生成实例，提高了效率！
	　　if (instance==null)
	　　　　instance＝new Singleton();
	　　return instance; 　　} 

	} 

 
 

###1.4 原型模式 Prototype

###1.5 建造者模式 Builder

---


##2 结构设计模式


###2.1 外观模式 Facade

###2.2 装饰模式 Decorator

###2.3 适配器模式 Adapter

###2.4 代理模式 Proxy

###2.5 享元模式 Flyweight

###2.6 组合模式 Composite

###2.7 桥接模式 Bridge

---


##3 行为设计模式

###3.1 模板模式 Template

###3.2 观察者模式 Observer

###3.3 备忘机制模式 Memento

###3.4 职责链模式 Chain of Responsibility

###3.5 命令模式 Command

###3.6 状态模式 State

###3.7 策略模式 Strategy

###3.8 中介者模式 Mediator

###3.9 解释器模式 Interpreter

###3.10 访问者模式 Visitor







