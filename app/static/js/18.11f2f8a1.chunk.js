webpackJsonp([18],{491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(6),c=n.n(s),i=n(113),a=n.n(i),r=n(108),o=n.n(r),d=n(111),u=n.n(d),l=n(109),h=n.n(l),p=n(110),f=n.n(p),k=n(5),m=n.n(k),y=n(187),v=(n.n(y),n(503)),_=n(513),g=(n(190),n(43)),w=v.c.CheckboxItem,b=function(e){function t(){var e,n,s,c;o()(this,t);for(var i=arguments.length,r=Array(i),d=0;d<i;d++)r[d]=arguments[d];return n=s=h()(this,(e=t.__proto__||a()(t)).call.apply(e,[this].concat(r))),s.state={styles:[],checkeds:[]},c=n,h()(s,c)}return f()(t,e),u()(t,[{key:"componentDidMount",value:function(){var e=this;Object(g.e)({url:"rest/erp/processUser/queryByUser?departmentId="+(window.loginUser?window.loginUser.department.join(","):0),type:"get",success:function(t){var n=function(e){for(var t=0;t<s.length;t++)if(s[t].id===e)return s[t];return null},s=[];t.data.all.forEach(function(e){n(e.style_id)?n(e.style_id).processs.push({id:e.process_id,name:e.process_name}):s.push({id:e.style_id,name:e.style_name,processs:[{id:e.process_id,name:e.process_name}]})}),e.setState({styles:s,checkeds:t.data.checkeds.map(function(e){return e.process_id})})}}),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setTitle({title:"\u8bbe\u7f6e\u6211\u7684\u5de5\u5e8f",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"\u4fdd\u5b58",onSuccess:function(t){e.handleSubmit()},onFail:function(e){}})}},{key:"handleBack",value:function(){window.history.back()}},{key:"handleSubmit",value:function(e){0==this.state.checkeds.length?alert("\u8bf7\u9009\u62e9"):Object(g.e)({url:"rest/erp/processUser/create",data:c()({processIds:this.state.checkeds}),type:"post",success:function(e){v.t.success("\u4fdd\u5b58\u6210\u529f!",1)}})}},{key:"render",value:function(){var e=this;this.props.form.getFieldProps;return m.a.createElement("div",null,this.state.styles.map(function(t){return m.a.createElement(v.h,{renderHeader:function(){return t.name}},m.a.createElement("div",{style:{marginLeft:20}},t.processs.map(function(t){return m.a.createElement(w,{checked:-1!==e.state.checkeds.indexOf(t.id),key:t.id,onChange:function(n){if(n.target.checked)e.state.checkeds.push(t.id),e.setState({checkeds:e.state.checkeds});else{var s=e.state.checkeds.indexOf(t.id);e.state.checkeds.splice(s,1),e.setState({checkeds:e.state.checkeds})}}},t.name)})))}))}}]),t}(m.a.Component);b=Object(y.connect)()(Object(_.a)()(b)),t.default=b}});