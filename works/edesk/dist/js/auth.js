webpackJsonp([29,42],{671:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(2),u=n(l),o=a(4),d=n(o),r=a(3),i=n(r),s=a(1),f=n(s),c=a(15),m=a(12),p=(m.Menu.SubMenu,m.Layout.Header,m.Layout.Footer,m.Layout.Sider,m.Layout.Content,function(e){function t(){return(0,u["default"])(this,t),(0,d["default"])(this,e.apply(this,arguments))}return(0,i["default"])(t,e),t.prototype.render=function(){var e="1";return"#/sys/menu"==window.location.hash?e="1":"#/sys/operation"==window.location.hash&&(e="2"),f["default"].createElement("div",{style:{width:"100%"}},f["default"].createElement("div",{style:{"float":"left",width:"150px",margin:"0 10px 0 0"}},f["default"].createElement(m.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:e},f["default"].createElement(m.Menu.Item,{key:"1"},f["default"].createElement(c.Link,{to:"/sys/menu"},f["default"].createElement("span",{className:"nav-text"},"\u83dc\u5355"))),f["default"].createElement(m.Menu.Item,{key:"2"},f["default"].createElement(c.Link,{to:"/sys/operation"},f["default"].createElement("span",{className:"nav-text"},"\u64cd\u4f5c"))))),f["default"].createElement("div",{style:{"float":"left",width:"calc(100vw - 190px)"}},this.props.children))},t}(s.Component));t["default"]=p,e.exports=t["default"]}});