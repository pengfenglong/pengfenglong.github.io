webpackJsonp([13],{484:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(498),s=(a.n(n),a(492)),l=a.n(s),i=a(6),r=a.n(i),o=a(113),c=a.n(o),d=a(108),u=a.n(d),m=a(111),h=a.n(m),p=a(109),f=a.n(p),E=a(110),g=a.n(E),v=a(5),y=a.n(v),k=a(187),x=(a.n(k),a(493)),w=a(20),I=x.k.RadioItem,b=x.g.Item,S=(x.h.prompt,function(t){function e(t){u()(this,e);var a=f()(this,(e.__proto__||c()(e)).call(this,t));return a.state={details:{},departments:[],modal:!1,selectedIndex:0},a}return g()(e,t),h()(e,[{key:"componentDidMount",value:function(){var t=this;this.handleQuery(0),Object(w.d)({url:"rest/dingtalk/department/list?corpId="+w.f.get("corpId")+"&parentDeptId=1",type:"get",success:function(e){t.setState({departments:e.data})}}),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(t){},onFail:function(t){}}),window.dd.biz.navigation.setTitle({title:"\u5168\u5382\u8ba1\u4ef6\u7edf\u8ba1",onSuccess:function(t){},onFail:function(t){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"...",onSuccess:function(t){},onFail:function(t){}})}},{key:"handleQuery",value:function(t){var e=this,a=null;0===t?a="today":1===t?a="thisweek":2===t?a="thismonth":3===t?a="thisyear":4===t&&(a="total"),Object(w.d)({url:"rest/erp/userWork/queryCorpWork?filter="+r()({corpId:w.f.get("corpId"),cycle:a}),type:"get",success:function(a){e.setState({details:a.data,selectedIndex:t})}})}},{key:"selectDepartment",value:function(){this.setState({modal:!0})}},{key:"render",value:function(){var t=this;return y.a.createElement("div",null,"mobile"!==w.f.get("view")?y.a.createElement(x.i,{mode:"dark",icon:y.a.createElement(l.a,{type:"left"}),onLeftClick:function(){window.history.back()},rightContent:[]},"\u5168\u5382\u8ba1\u4ef6\u7edf\u8ba1"):null,y.a.createElement(x.g,null,y.a.createElement(x.g.Item,{extra:y.a.createElement("span",{onClick:this.selectDepartment.bind(this)}," \u8bf7\u9009\u62e9",y.a.createElement(l.a,{type:"right"}))},"\u6309\u7167\u5c0f\u7ec4\u7edf\u8ba1")),y.a.createElement("div",{style:{margin:"0 5px"}},y.a.createElement(x.l,{values:["\u5f53\u65e5","\u5f53\u5468","\u5f53\u6708","\u5f53\u5e74","\u5168\u90e8"],selectedIndex:this.state.selectedIndex,onChange:function(e){var a=e.nativeEvent.selectedSegmentIndex;t.handleQuery(a)}})),y.a.createElement("div",null,y.a.createElement(x.g,null,y.a.createElement(b,{extra:this.state.details.totalUser?this.state.details.totalUser:0},"\u603b\u4eba\u6570"),y.a.createElement(b,{extra:this.state.details.totalStyle?this.state.details.totalStyle:0},"\u603b\u6b3e\u6570"),y.a.createElement(b,{extra:this.state.details.totalProcess?this.state.details.totalProcess:0},"\u603b\u5de5\u5e8f\u6570"),y.a.createElement(b,{extra:this.state.details.totalQuantity?this.state.details.totalQuantity:0},"\u603b\u8ba1\u4ef6\u6570"),y.a.createElement(b,{extra:y.a.createElement("span",null,"\xa5",this.state.details.totalWages?this.state.details.totalWages:0)},"\u603b\u8ba1\u4ef6\u5de5\u8d44"),y.a.createElement(b,{extra:y.a.createElement("span",null,"\xa5",this.state.details.totalWages&&this.state.details.totalUser?this.state.details.totalWages/this.state.details.totalUser:0)},"\u4eba\u5747\u8ba1\u4ef6\u5de5\u8d44"))),y.a.createElement("div",{style:{margin:"0 10px"}},y.a.createElement(x.p,null),y.a.createElement(x.a,{onClick:function(){window.location.hash="/erp/statis-corp/export"}},"\u5bfc\u51fa\u660e\u7ec6\u5230\u90ae\u7bb1")),y.a.createElement(x.h,{visible:this.state.modal,transparent:!0,maskClosable:!0},y.a.createElement("div",null,y.a.createElement(x.g,{renderHeader:function(){return"\u9009\u62e9\u5c0f\u7ec4"}},this.state.departments.map(function(e){return y.a.createElement(I,{key:e.id,checked:e.id==t.state.selectedDepartmentId,onChange:function(){t.setState({modal:!1}),window.location.hash="/erp/statis/"+e.id}},e.name)})))))}}]),e}(y.a.Component));S=Object(k.connect)()(S),e.default=S}});