webpackJsonp([10],{481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(6),r=n.n(a),i=n(113),s=n.n(i),l=n(108),o=n.n(l),c=n(111),u=n.n(c),d=n(109),p=n.n(d),m=n(110),f=n.n(m),h=n(5),w=n.n(h),E=n(187),g=(n.n(E),n(493)),b=n(510),y=n(20),k=g.g.Item,v=(g.c.CheckboxItem,function(e){function t(){var e,n,a,r;o()(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=a=p()(this,(e=t.__proto__||s()(t)).call.apply(e,[this].concat(l))),a.state={details:[],files:[]},r=n,p()(a,r)}return f()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this;Object(y.d)({url:"rest/erp/userWork/userWordDetail?filter="+r()({user_id:this.props.params.userId,work_date:this.props.params.workDate}),type:"get",success:function(t){e.setState({details:t.data.info,files:t.data.files})}}),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setTitle({title:"\u5ba1\u6838\u8ba1\u4ef6",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"...",onSuccess:function(e){},onFail:function(e){}})}},{key:"handleAudit",value:function(e){Object(y.d)({url:"rest/erp/userWork/audit",type:"post",data:r()({user_id:this.props.params.userId,work_date:this.props.params.workDate,status:e}),success:function(e){window.history.back()}})}},{key:"render",value:function(){var e=this,t=(this.props.form.getFieldProps,this.state.files.map(function(e){return e.path}));return w.a.createElement("div",null,w.a.createElement(g.g,null,w.a.createElement(k,{wrap:!0},w.a.createElement("span",{style:{"font-weight":"bolder"}},"\u3010\u5458\u5de5\u3011"),0===this.state.details.length?null:this.state.details[0].user_name),w.a.createElement(k,{wrap:!0},w.a.createElement("span",{style:{"font-weight":"bolder"}},"\u3010\u65e5\u671f\u3011"),0===this.state.details.length?null:this.state.details[0].work_date)),w.a.createElement(g.g,{renderHeader:function(){return"\u5de5\u5e8f\u8ba1\u4ef6"}},w.a.createElement(k,{extra:w.a.createElement("b",null,w.a.createElement("span",null,"\u5355\u4ef7"),w.a.createElement("span",{style:{marginLeft:20}},"\u6570\u91cf")),style:{background:"#fff9f9"}},w.a.createElement("b",null,"\u5de5\u5e8f\u540d")),this.state.details.map(function(e){return w.a.createElement(k,{extra:w.a.createElement("b",null,w.a.createElement("span",null,"\xa5",e.process_price),w.a.createElement("span",{style:{marginLeft:20}},e.quantity))},e.process_name)})),w.a.createElement(g.g,{renderHeader:function(){return"\u7167\u7247"}},this.state.files.map(function(e){return w.a.createElement("img",{width:80,style:{margin:5},src:e.path,onClick:function(){window.dd.biz.util.previewImage({urls:t,current:e.path,onSuccess:function(e){},onFail:function(e){}})}})})),w.a.createElement("div",{style:{margin:"0 10px"}},w.a.createElement(g.p,null),w.a.createElement(g.a,{type:"primary",onClick:function(){"department"==e.props.params.scope?e.handleAudit(1):e.handleAudit(2)}},"\u5ba1\u6838\u901a\u8fc7"),w.a.createElement(g.p,null),w.a.createElement(g.a,{onClick:this.handleAudit.bind(this,-1)},"\u5ba1\u6838\u4e0d\u901a\u8fc7")))}}]),t}(w.a.Component));v=Object(E.connect)()(Object(b.a)()(v)),t.default=v}});