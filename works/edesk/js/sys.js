webpackJsonp([12,55],{824:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(2),u=n(l),r=a(4),o=n(r),d=a(3),s=n(d),c=a(1),i=n(c),f=a(24),p=function(e){function t(){var a,n,l;(0,u["default"])(this,t);for(var r=arguments.length,d=Array(r),s=0;s<r;s++)d[s]=arguments[s];return a=n=(0,o["default"])(this,e.call.apply(e,[this].concat(d))),n.state={user:""},l=a,(0,o["default"])(n,l)}return(0,s["default"])(t,e),t.prototype.logout=function(){window.sessionStorage.removeItem("edesk-token"),window.location.hash="/login"},t.prototype.render=function(){return i["default"].createElement("span",null,i["default"].createElement("a",{href:"javascript:void()"},"\u3010",this.state.user,"\u3011")," \xa0\xa0",i["default"].createElement("a",{onClick:this.logout.bind(this),href:"javascript:void()"},"\u9000\u51fa"))},t.prototype.componentDidMount=function(){var e=this;(0,f.ajax)({url:"rest/auth/currentUser",type:"get",success:function(t){e.state.user=t.data.nick}})},t}(c.Component);t["default"]=p,e.exports=t["default"]},896:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(2),u=n(l),r=a(4),o=n(r),d=a(3),s=n(d),c=a(1),i=n(c),f=a(16),p=a(13),m=a(824),h=n(m);a(1094);var g=a(24),y=n(g),E=p.Layout.Header,v=p.Layout.Sider,k=p.Layout.Content,x=p.Menu.SubMenu,b=function(e){function t(a){(0,u["default"])(this,t);var n=(0,o["default"])(this,e.call(this,a));return n.toggle=function(){n.setState({collapsed:!n.state.collapsed})},n.state={menus:[],collapsed:!1},n}return(0,s["default"])(t,e),t.prototype.render=function(){var e=function t(e,a){return e.map(function(e){var n="";return n=null==a?e.attr.code:"/"+a.attr.code+"/"+e.attr.code,e.children?i["default"].createElement(x,{key:e.id,title:i["default"].createElement("span",null,i["default"].createElement(p.Icon,{type:e.attr.icon}),i["default"].createElement("span",null,e.name))},t(e.children,e)):e.attr.url?i["default"].createElement(p.Menu.Item,{key:e.id},i["default"].createElement("a",{href:e.attr.url,target:"_bank"},e.name)):i["default"].createElement(p.Menu.Item,{key:e.id},i["default"].createElement(f.Link,{to:n},e.name))})};return i["default"].createElement(p.Layout,{style:{height:"calc(100vh)","min-width":"800px"}},i["default"].createElement(v,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},i["default"].createElement("div",{className:"logo",style:{"font-size":"18px",margin:"10px 25px"}},i["default"].createElement(f.Link,{to:"/pc"},i["default"].createElement(p.Icon,{type:"home"}),this.state.collapsed?null:i["default"].createElement("span",null,"\xa0\xa0\u5fae\u7ba1\u7406\u5e73\u53f0"))),i["default"].createElement(p.Menu,{theme:"dark",mode:"inline",defaultSelectedKeys:["2"]},e(this.state.menus,null))),i["default"].createElement(p.Layout,{style:{background:"#fff"}},i["default"].createElement(E,{style:{background:"#fff",padding:0,height:"50px","line-height":"42px","border-bottom":"8px #eee solid"}},i["default"].createElement(p.Icon,{className:"trigger",style:{cursor:"pointer",margin:"0 10px"},type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle}),i["default"].createElement("div",{style:{"float":"right",margin:"0 10px"}},i["default"].createElement(f.Link,{to:"/m"},"\u3010\u79fb\u52a8\u7248\u3011"),i["default"].createElement(h["default"],null))),i["default"].createElement(k,{style:{padding:"10px",background:"#fff",minHeight:280}},this.props.children)))},t.prototype.componentDidMount=function(){var e=this;y["default"].ajax({url:"rest/sys/user/getAuths",type:"get",success:function(t){e.setState({menus:t.data.menus})}})},t}(c.Component);t["default"]=b,e.exports=t["default"]},1094:1082});