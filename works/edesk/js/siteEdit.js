webpackJsonp([32,52,55],{262:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(5),n=r(u),d=a(2),s=r(d),o=a(4),i=r(o),c=a(3),f=r(c),p=a(1),m=r(p),h=a(12),b=a(16),E=a(13),I=a(82),y=l(I),k=E.Form.Item,v=function(e){function t(){return(0,s["default"])(this,t),(0,i["default"])(this,e.apply(this,arguments))}return(0,f["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&y.get(this.props.editId,function(t){var a=(0,n["default"])({},t.data);e.props.form.setFieldsValue(a)})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,l){e||(t.props.editId?t.props.dispatch(y.update(t.props.editId,l)):(t.props.dispatch(y.save(l)),a.resetFields()),b.hashHistory.push("/cms/site"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return m["default"].createElement("div",{className:"add-box"},m["default"].createElement(E.Breadcrumb,null,m["default"].createElement(E.Breadcrumb.Item,null,"\u9996\u9875"),m["default"].createElement(E.Breadcrumb.Item,null,"cms\u7ba1\u7406"),m["default"].createElement(E.Breadcrumb.Item,null,"\u7ad9\u70b9\u7ba1\u7406"),m["default"].createElement(E.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),m["default"].createElement(E.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},m["default"].createElement(k,(0,n["default"])({},t,{label:"\u7ad9\u70b9\u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u7ad9\u70b9\u6807\u9898",hasFeedback:!0}),e("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u7ad9\u70b9Logo",hasFeedback:!0}),e("logo",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u7ad9\u70b9\u57df\u540d",hasFeedback:!0}),e("domain",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u63cf\u8ff0",hasFeedback:!0}),e("description",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u5173\u952e\u5b57",hasFeedback:!0}),e("keywords",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u4e3b\u9898",hasFeedback:!0}),e("theme",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u7248\u6743\u4fe1\u606f",hasFeedback:!0}),e("copyright",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,(0,n["default"])({},t,{label:"\u5907\u6ce8\u4fe1\u606f",hasFeedback:!0}),e("remarks",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(k,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},m["default"].createElement(E.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",m["default"].createElement(E.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(m["default"].Component);v=E.Form.create()(v),v=(0,h.connect)()(v),t["default"]=v,e.exports=t["default"]},831:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),u=l(r),n=a(4),d=l(n),s=a(3),o=l(s),i=a(1),c=l(i),f=a(12),p=a(262),m=l(p),h=function(e){function t(){return(0,u["default"])(this,t),(0,d["default"])(this,e.apply(this,arguments))}return(0,o["default"])(t,e),t.prototype.render=function(){return c["default"].createElement("div",{className:"edit-box"},c["default"].createElement(m["default"],{editId:this.props.params.id}))},t}(c["default"].Component);h=(0,f.connect)()(h),t["default"]=h,e.exports=t["default"]}});