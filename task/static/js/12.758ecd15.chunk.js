webpackJsonp([12],{474:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(113),i=e.n(o),a=e(108),s=e.n(a),c=e(111),r=e.n(c),u=e(109),l=e.n(u),d=e(110),f=e.n(d),b=e(5),p=e.n(b),h=e(26),w=e(189),m=(e.n(w),e(489)),g=e(193),v=m.h.Item,k=(v.Brief,function(n){function t(n){return s()(this,t),l()(this,(t.__proto__||i()(t)).call(this,n))}return f()(t,n),r()(t,[{key:"componentDidMount",value:function(){this.props.boardActions.query({currentPage:1,pageSize:100,status:"1"}),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(n){},onFail:function(n){}}),window.dd.biz.navigation.setTitle({title:"\u770b\u677f\u6e05\u5355",onSuccess:function(n){},onFail:function(n){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"\u65b0\u5efa",onSuccess:function(n){window.location.hash="/task/board/add"},onFail:function(n){}})}},{key:"render",value:function(){var n=this;return p.a.createElement("div",null,p.a.createElement(m.p,{tabs:[{title:"\u8fdb\u884c\u4e2d",status:"1"},{title:"\u5df2\u5f52\u6863",status:"0"}],initalPage:1,swipeable:!1,onChange:function(t,e){n.props.boardActions.query({currentPage:1,pageSize:100,status:t.status})}}),p.a.createElement("div",null,p.a.createElement(m.h,null,this.props.boards.result.map(function(n){return p.a.createElement(v,{onClick:function(){window.location.hash="/task/kanban/"+n.id}},n.name)}))))}}]),t}(p.a.Component)),_=function(n){return{boards:n.cms.sites}},y=function(n){return{boardActions:Object(h.bindActionCreators)(g,n)}};t.default=Object(w.connect)(_,y)(k)}});