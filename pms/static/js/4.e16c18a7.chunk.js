webpackJsonp([4],{519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(524),r=(n.n(a),n(122)),o=n.n(r),c=n(629),i=n.n(c),l=n(6),u=n.n(l),s=n(79),p=n.n(s),d=n(16),m=n.n(d),f=n(19),h=n.n(f),y=n(17),v=n.n(y),E=n(18),_=n.n(E),b=n(527),k=(n.n(b),n(528)),g=n.n(k),w=n(534),x=(n.n(w),n(535)),j=n.n(x),O=n(1),A=n.n(O),C=(n(203),n(540)),Q=n(24),S=(j.a.Option,C.d.confirm,g.a.Search,C.d.prompt),N=function(e){function t(e){m()(this,t);var n=v()(this,(t.__proto__||p()(t)).call(this,e));return n.state={data:[]},n}return _()(t,e),h()(t,[{key:"handleQueryAll",value:function(){var e=this;Object(Q.c)({url:"rest/pms/region/list?filter="+u()({where:[{propertyName:"product_id",propertyValue:this.props.params.productId,matchType:"=",logicalExpression:"and"}]}),success:function(t){e.setState({data:t.data})}})}},{key:"componentDidMount",value:function(){this.handleQueryAll()}},{key:"render",value:function(){var e=this,t=this.state.data.map(function(t){return{id:t.id,icon:A.a.createElement("div",{onClick:function(){Object(Q.c)({url:"rest/pms/region/delete/"+t.id,type:"delete",success:function(t){e.handleQueryAll()}})},style:{position:"absolute",right:10,top:10,cursor:"pointer"}},A.a.createElement(o.a,{type:"delete"})),text:A.a.createElement("div",{style:{padding:50,fontSize:20,cursor:"pointer"},onClick:function(){window.location.hash="/pms/project/"+t.id}},A.a.createElement("b",null,t.name))}});return t.push({id:0,text:A.a.createElement("div",{onClick:function(){return S("\u65b0\u5efa\u533a\u57df",null,[{text:"\u53d6\u6d88",onPress:function(e){return new i.a(function(e){e()})}},{text:"\u786e\u5b9a",onPress:function(t){return new i.a(function(n,a){Object(Q.c)({url:"rest/pms/region/create",type:"post",data:u()({product_id:e.props.params.productId,name:t}),success:function(t){e.handleQueryAll(),n(),C.f.success("\u6dfb\u52a0\u6210\u529f!",1)}})})}}],"default",null,["\u8bf7\u8f93\u5165\u533a\u57df\u540d"])}},A.a.createElement(o.a,{type:"plus-circle",style:{fontSize:30,cursor:"pointer"}}),A.a.createElement("div",{className:"ant-upload-text"},"\u65b0\u5efa\u533a\u57df"))}),A.a.createElement("div",null,A.a.createElement(C.a,{data:t,columnNum:6}))}}]),t}(A.a.Component);t.default=N}});