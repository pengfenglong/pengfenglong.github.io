webpackJsonp([4],{473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(484),r=(n.n(a),n(480)),c=n.n(r),i=n(603),o=n.n(i),l=n(6),u=n.n(l),s=n(114),d=n.n(s),p=n(108),m=n.n(p),f=n(111),h=n.n(f),y=n(109),v=n.n(y),E=n(110),_=n.n(E),k=n(487),b=(n.n(k),n(488)),g=n.n(b),w=n(495),x=(n.n(w),n(496)),j=n.n(x),O=n(5),A=n.n(O),C=(n(189),n(505)),Q=n(20),N=(j.a.Option,C.d.confirm,g.a.Search,C.d.prompt),P=function(e){function t(e){m()(this,t);var n=v()(this,(t.__proto__||d()(t)).call(this,e));return n.state={data:[]},n}return _()(t,e),h()(t,[{key:"handleQueryAll",value:function(){var e=this;Object(Q.c)({url:"rest/pms/region/list?filter="+u()({where:[{propertyName:"product_id",propertyValue:this.props.params.productId,matchType:"=",logicalExpression:"and"}]}),success:function(t){e.setState({data:t.data})}})}},{key:"componentDidMount",value:function(){this.handleQueryAll()}},{key:"render",value:function(){var e=this,t=this.state.data.map(function(t){return{id:t.id,icon:A.a.createElement("div",{onClick:function(){Object(Q.c)({url:"rest/pms/region/delete/"+t.id,type:"delete",success:function(t){e.handleQueryAll()}})},style:{position:"absolute",right:10,top:10}},A.a.createElement(c.a,{type:"delete"})),text:A.a.createElement("div",{style:{padding:50},onClick:function(){window.location.hash="/pms/project/"+t.id}},t.name)}});return t.push({id:0,text:A.a.createElement("div",{onClick:function(){return N("\u65b0\u5efa\u533a\u57df",null,[{text:"\u53d6\u6d88",onPress:function(e){return new o.a(function(e){e()})}},{text:"\u786e\u5b9a",onPress:function(t){return new o.a(function(n,a){Object(Q.c)({url:"rest/pms/region/create",type:"post",data:u()({product_id:e.props.params.productId,name:t}),success:function(t){e.handleQueryAll(),n(),C.f.success("\u6dfb\u52a0\u6210\u529f!",1)}})})}}],"default",null,["\u8bf7\u8f93\u5165\u533a\u57df\u540d"])}},A.a.createElement(c.a,{type:"plus-circle",style:{fontSize:30}}),A.a.createElement("div",{className:"ant-upload-text"},"\u65b0\u5efa"))}),A.a.createElement("div",null,A.a.createElement(C.a,{data:t,columnNum:6}))}}]),t}(A.a.Component);t.default=P}});