webpackJsonp([25],{490:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(29),o=t.n(i),a=t(6),c=t.n(a),r=t(113),s=t.n(r),l=t(108),d=t.n(l),u=t(111),p=t.n(u),h=t(109),f=t.n(h),v=t(110),y=t.n(v),m=t(5),b=t.n(m),w=t(187),g=(t.n(w),t(503)),k=t(513),_=(t(190),t(43)),E=function(e){function n(){var e,t,i,o;d()(this,n);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return t=i=f()(this,(e=n.__proto__||s()(n)).call.apply(e,[this].concat(c))),i.state={values:{}},o=t,f()(i,o)}return y()(n,e),p()(n,[{key:"componentDidMount",value:function(){var e=this;window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setTitle({title:"\u5bfc\u5165\u5de5\u5e8f",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"\u4fdd\u5b58",onSuccess:function(n){e.handleSubmit()},onFail:function(e){}})}},{key:"handleBack",value:function(){window.history.back()}},{key:"handleSubmit",value:function(e){var n=this,t=this.props.form;t.validateFields(function(e,i){e||(i.style_id=n.props.params.styleId,Object(_.e)({url:"rest/erp/process/import",type:"post",data:c()(i),success:function(e){window.history.back()}}),t.resetFields())})}},{key:"render",value:function(){var e=this.props.form.getFieldProps;return b.a.createElement("div",{style:{padding:5}},b.a.createElement(g.h,null,b.a.createElement(g.s,o()({style:{board:"1px #ccc solid"},rows:10,moneyKeyboardAlign:"right",placeholder:"\u4f8b\u5982:\n\u5de5\u5e8f1 10\n\u5de5\u5e8f2 20","data-seed":"logId",autoHeight:!0},e("content"))),b.a.createElement(g.u,null),window.dd.version?null:b.a.createElement("div",{style:{margin:"0 10px"}},b.a.createElement(g.a,{type:"primary",onClick:this.handleSubmit.bind(this)},"\u4fdd\u5b58"))))}}]),n}(b.a.Component);E=Object(w.connect)()(Object(k.a)()(E)),n.default=E}});