webpackJsonp([53,56],{289:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(6),n=r(u),d=a(2),s=r(d),o=a(4),c=r(o),i=a(3),m=r(i),f=a(1),p=r(f),h=a(13),b=a(17),E=a(14),I=a(91),k=l(I),y=E.Form.Item,F=function(e){function t(){return(0,s["default"])(this,t),(0,c["default"])(this,e.apply(this,arguments))}return(0,m["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&k.get(this.props.editId,function(t){var a=(0,n["default"])({},t.data);e.props.form.setFieldsValue(a)})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,l){e||(t.props.editId?t.props.dispatch(k.update(t.props.editId,l)):(t.props.dispatch(k.save(l)),a.resetFields()),b.hashHistory.push("/cms/site"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return p["default"].createElement("div",{className:"add-box"},p["default"].createElement(E.Breadcrumb,null,p["default"].createElement(E.Breadcrumb.Item,null,"\u9996\u9875"),p["default"].createElement(E.Breadcrumb.Item,null,"cms\u7ba1\u7406"),p["default"].createElement(E.Breadcrumb.Item,null,"\u7ad9\u70b9\u7ba1\u7406"),p["default"].createElement(E.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),p["default"].createElement(E.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},p["default"].createElement(y,(0,n["default"])({},t,{label:"\u7ad9\u70b9\u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u7ad9\u70b9\u6807\u9898",hasFeedback:!0}),e("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u7ad9\u70b9Logo",hasFeedback:!0}),e("logo",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u7ad9\u70b9\u57df\u540d",hasFeedback:!0}),e("domain",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u63cf\u8ff0",hasFeedback:!0}),e("description",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u5173\u952e\u5b57",hasFeedback:!0}),e("keywords",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u4e3b\u9898",hasFeedback:!0}),e("theme",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u7248\u6743\u4fe1\u606f",hasFeedback:!0}),e("copyright",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,(0,n["default"])({},t,{label:"\u5907\u6ce8\u4fe1\u606f",hasFeedback:!0}),e("remarks",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(p["default"].createElement(E.Input,null))),p["default"].createElement(y,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},p["default"].createElement(E.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",p["default"].createElement(E.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(p["default"].Component);F=E.Form.create()(F),F=(0,h.connect)()(F),t["default"]=F,e.exports=t["default"]}});