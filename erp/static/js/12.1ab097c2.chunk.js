webpackJsonp([12],{485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n.n(a),l=n(113),s=n.n(l),c=n(108),i=n.n(c),u=n(111),o=n.n(u),d=n(109),m=n.n(d),p=n(110),f=n.n(p),E=n(5),h=n.n(E),g=n(187),y=(n.n(g),n(493)),v=n(20),w=y.g.Item,x=(y.h.prompt,function(e){function t(e){i()(this,t);var n=m()(this,(t.__proto__||s()(t)).call(this,e));return n.state={details:{user:[],process:[]},department:{},selectedIndex:0},n}return f()(t,e),o()(t,[{key:"componentDidMount",value:function(){var e=this;this.handleQuery(0),Object(v.d)({url:"rest/dingtalk/department/getDetail?corpId="+v.f.get("corpId")+"&deptId="+(this.props.params.departmentId?this.props.params.departmentId:window.loginUser.department[0]+""),type:"get",success:function(t){e.setState({department:t.data})}}),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setTitle({title:"\u5c0f\u7ec4\u8ba1\u4ef6\u7edf\u8ba1",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"...",onSuccess:function(e){},onFail:function(e){}})}},{key:"handleQuery",value:function(e){var t=this,n=null;0===e?n="today":1===e?n="thisweek":2===e?n="thismonth":3===e?n="thisyear":4===e&&(n="total"),Object(v.d)({url:"rest/erp/userWork/queryDepartmentWork?filter="+r()({cycle:n,departmentId:this.props.params.departmentId?this.props.params.departmentId:window.loginUser.department[0]+""}),type:"get",success:function(n){t.setState({details:n.data,selectedIndex:e})}})}},{key:"render",value:function(){var e=this,t=0,n=0,a=0,r=0;return this.state.details.user.forEach(function(e){t+=1,a+=e.quantity?e.quantity:0,r+=e.wages?e.wages:0}),this.state.details.process.forEach(function(e){n+=1}),h.a.createElement("div",null,h.a.createElement("div",{style:{margin:5}},h.a.createElement("span",null,"\u5f53\u524d\u5c0f\u7ec4\uff1a"),this.state.department.name),h.a.createElement("div",{style:{margin:"0 5px"}},h.a.createElement(y.l,{values:["\u5f53\u65e5","\u5f53\u5468","\u5f53\u6708","\u5f53\u5e74","\u5168\u90e8"],selectedIndex:this.state.selectedIndex,onChange:function(t){var n=t.nativeEvent.selectedSegmentIndex;e.handleQuery(n)}})),h.a.createElement("div",null,h.a.createElement(y.g,{renderHeader:function(){return"\u7d2f\u8ba1"}},h.a.createElement(w,{extra:t},"\u603b\u4eba\u6570"),h.a.createElement(w,{extra:n},"\u603b\u5de5\u5e8f\u6570"),h.a.createElement(w,{extra:a},"\u603b\u8ba1\u4ef6\u6570"),h.a.createElement(w,{extra:"\xa5"+r},"\u603b\u8ba1\u4ef6\u5de5\u8d44"),h.a.createElement(w,{extra:"\xa5"+(r&&t?r/t:0)},"\u4eba\u5747\u8ba1\u4ef6\u5de5\u8d44")),h.a.createElement(y.p,null),h.a.createElement(y.g,{renderHeader:function(){return"\u5458\u5de5\u7ef4\u5ea6\u660e\u7ec6"}},h.a.createElement(w,{extra:h.a.createElement("b",null,h.a.createElement("span",null,"\u5de5\u4ef6\u6570"),h.a.createElement("span",{style:{marginLeft:20}},"\u5de5\u8d44")),style:{background:"#fff9f9"}},h.a.createElement("b",null,"\u5458\u5de5")),this.state.details.user.map(function(e){return h.a.createElement(w,{extra:h.a.createElement("b",null,h.a.createElement("span",null,e.quantity),h.a.createElement("span",{style:{marginLeft:20}},e.wages))},e.user_name)})),h.a.createElement(y.p,null),h.a.createElement(y.g,{renderHeader:function(){return"\u5de5\u5e8f\u7ef4\u5ea6\u660e\u7ec6"}},h.a.createElement(w,{extra:h.a.createElement("b",null,h.a.createElement("span",null,"\u5de5\u4ef6\u6570"),h.a.createElement("span",{style:{marginLeft:20}},"\u5de5\u8d44")),style:{background:"#fff9f9"}},h.a.createElement("b",null,"\u5de5\u5e8f")),this.state.details.process.map(function(e){return h.a.createElement(w,{extra:h.a.createElement("b",null,h.a.createElement("span",null,e.quantity),h.a.createElement("span",{style:{marginLeft:20}},e.wages))},e.process_name)}))))}}]),t}(h.a.Component));x=Object(g.connect)()(x),t.default=x}});