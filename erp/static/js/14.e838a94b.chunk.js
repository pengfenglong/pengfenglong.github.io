webpackJsonp([14],{477:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(30),o=t.n(i),a=t(6),c=t.n(a),r=t(113),l=t.n(r),s=t(108),d=t.n(s),u=t(111),p=t.n(u),f=t(109),h=t.n(f),v=t(110),y=t.n(v),m=t(5),b=t.n(m),w=t(187),g=(t.n(w),t(493)),k=t(510),_=(t(190),t(20)),E=function(n){function e(){var n,t,i,o;d()(this,e);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return t=i=h()(this,(n=e.__proto__||l()(e)).call.apply(n,[this].concat(c))),i.state={values:{}},o=t,h()(i,o)}return y()(e,n),p()(e,[{key:"componentDidMount",value:function(){var n=this;window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(n){},onFail:function(n){}}),window.dd.biz.navigation.setTitle({title:"\u5bfc\u5165\u5de5\u5e8f",onSuccess:function(n){},onFail:function(n){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"\u4fdd\u5b58",onSuccess:function(e){n.handleSubmit()},onFail:function(n){}})}},{key:"handleBack",value:function(){window.history.back()}},{key:"handleSubmit",value:function(n){var e=this,t=this.props.form;t.validateFields(function(n,i){n||(i.style_id=e.props.params.styleId,Object(_.d)({url:"rest/erp/process/import",type:"post",data:c()(i),success:function(n){window.history.back()}}),t.resetFields())})}},{key:"render",value:function(){var n=this.props.form.getFieldProps;return b.a.createElement("div",{style:{padding:5}},b.a.createElement(g.g,null,b.a.createElement(g.n,o()({style:{board:"1px #ccc solid"},rows:10,moneyKeyboardAlign:"right",placeholder:"\u4f8b\u5982:\n\u5de5\u5e8f1 10\n\u5de5\u5e8f2 20","data-seed":"logId",autoHeight:!0},n("content"))),b.a.createElement(g.p,null),window.dd.version?null:b.a.createElement("div",{style:{margin:"0 10px"}},b.a.createElement(g.a,{type:"primary",onClick:this.handleSubmit.bind(this)},"\u4fdd\u5b58"))))}}]),e}(b.a.Component);E=Object(w.connect)()(Object(k.a)()(E)),e.default=E}});