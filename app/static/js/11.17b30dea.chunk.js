webpackJsonp([11],{1030:function(n,t,e){"use strict";var o=e(113),i=e.n(o),a=e(108),r=e.n(a),c=e(111),l=e.n(c),s=e(109),u=e.n(s),d=e(110),f=e.n(d),p=e(5),h=e.n(p),m=(e(191),e(503)),b=e(43),w=m.h.Item,g=(w.Brief,function(n){function t(n){return r()(this,t),u()(this,(t.__proto__||i()(t)).call(this,n))}return f()(t,n),l()(t,[{key:"componentDidMount",value:function(){this.props.actions.query({corpId:b.g.get("corpId")}),"mobile"===b.g.get("view")&&(window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(n){},onFail:function(n){}}),window.dd.biz.navigation.setTitle({title:"\u6b3e\u5f0f\u7ba1\u7406",onSuccess:function(n){},onFail:function(n){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"\u65b0\u5efa",onSuccess:function(n){window.location.hash="/erp/style/add"},onFail:function(n){}}))}},{key:"render",value:function(){return h.a.createElement("div",null,"mobile"!==b.g.get("view")?h.a.createElement(m.j,{mode:"dark",icon:h.a.createElement(m.f,{type:"left"}),onLeftClick:function(){window.history.back()},rightContent:[h.a.createElement("button",{style:{padding:"0 5px","border-radius":"4px",color:"#fff","background-color":"#1890ff","border-color":"#1890ff"},onClick:function(){window.location.hash="/erp/style/add"}},"\u65b0\u5efa")]},"\u6b3e\u5f0f\u7ba1\u7406"):null,h.a.createElement(m.h,null,h.a.createElement(w,{extra:h.a.createElement("b",null,"\u6240\u5c5e\u5c0f\u7ec4"),style:{background:"#fff9f9"}},h.a.createElement("b",null,"\u6b3e\u5f0f\u540d (\u5171",this.props.data.length,"\u6b3e)")),this.props.data.map(function(n){return h.a.createElement(w,{extra:n.department?n.department.name:null,onClick:function(){window.location.hash="/erp/process/list/"+n.id}},h.a.createElement("span",null,n.name))})),h.a.createElement(m.u,null))}}]),t}(h.a.Component));t.a=g},486:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(113),i=e.n(o),a=e(108),r=e.n(a),c=e(111),l=e.n(c),s=e(109),u=e.n(s),d=e(110),f=e.n(d),p=e(5),h=e.n(p),m=e(25),b=e(187),w=(e.n(b),e(201)),g=e(1030),y=function(n){function t(){return r()(this,t),u()(this,(t.__proto__||i()(t)).apply(this,arguments))}return f()(t,n),l()(t,[{key:"render",value:function(){return h.a.createElement(g.a,{data:this.props.styles,actions:this.props.actions})}}]),t}(h.a.Component),v=function(n){return{styles:n.erp.styles}},E=function(n){return{actions:Object(m.bindActionCreators)(w,n)}};t.default=Object(b.connect)(v,E)(y)}});