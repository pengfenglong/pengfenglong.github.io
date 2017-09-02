webpackJsonp([31,42],{176:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function u(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(6),s=u(r),n=a(2),d=u(n),i=a(4),c=u(i),m=a(3),p=u(m),f=a(1),o=u(f),h=a(11),b=a(15),E=a(12),w=a(89),k=l(w),I=E.Form.Item,F=function(e){function t(){return(0,d["default"])(this,t),(0,c["default"])(this,e.apply(this,arguments))}return(0,p["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&k.get(this.props.editId,function(t){var a=(0,s["default"])({},t.data);e.props.form.setFieldsValue(a)})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,l){e||(t.props.editId?t.props.dispatch(k.update(t.props.editId,l)):(t.props.dispatch(k.save(l)),a.resetFields()),b.hashHistory.push("/sys/user"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return o["default"].createElement("div",{className:"add-box"},o["default"].createElement(E.Breadcrumb,null,o["default"].createElement(E.Breadcrumb.Item,null,"\u9996\u9875"),o["default"].createElement(E.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),o["default"].createElement(E.Breadcrumb.Item,null,"\u7528\u6237\u7ba1\u7406"),o["default"].createElement(E.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),o["default"].createElement(E.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},o["default"].createElement(I,(0,s["default"])({},t,{label:"\u7528\u6237\u540d",hasFeedback:!0}),e("nick",{rules:[{required:!0,message:"Please input nick!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!1,message:"Please input name!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u7528\u6237\u6570\u5b57ID",hasFeedback:!0}),e("user_id",{rules:[{required:!1,message:"Please input user_id!",whitespace:!0}]})(o["default"].createElement(E.InputNumber,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u5bc6\u7801",hasFeedback:!0}),e("password",{rules:[{required:!0,message:"Please input password!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u7528\u6237\u7c7b\u578b",hasFeedback:!0}),e("type",{rules:[{required:!1,message:"Please input type!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u4fe1\u7528\u7b49\u7ea7",hasFeedback:!0}),e("level",{rules:[{required:!1,message:"Please input level!",whitespace:!0}]})(o["default"].createElement(E.InputNumber,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u72b6\u6001",hasFeedback:!0}),e("status",{rules:[{required:!1,message:"Please input status!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"email",hasFeedback:!0}),e("email",{rules:[{required:!1,message:"Please input email!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u6027\u522b",hasFeedback:!0}),e("sex",{rules:[{required:!1,message:"Please input sex!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u7528\u6237\u5934\u50cf\u5730\u5740",hasFeedback:!0}),e("avatar",{rules:[{required:!1,message:"Please input avatar!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u7535\u8bdd",hasFeedback:!0}),e("phone",{rules:[{required:!1,message:"Please input phone!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u624b\u673a",hasFeedback:!0}),e("mobile",{rules:[{required:!1,message:"Please input mobile!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"address",hasFeedback:!0}),e("address",{rules:[{required:!1,message:"Please input address!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u63cf\u8ff0",hasFeedback:!0}),e("memo",{rules:[{required:!1,message:"Please input memo!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u6700\u540e\u767b\u5f55\u65f6\u95f4",hasFeedback:!0}),e("last_login_time",{rules:[{required:!1,message:"Please input last_login_time!",whitespace:!0}]})(o["default"].createElement(E.DatePicker,{format:"YYYY-MM-DD HH:mm:ss"}))),o["default"].createElement(I,(0,s["default"])({},t,{label:"write_time",hasFeedback:!0}),e("write_time",{rules:[{required:!1,message:"Please input write_time!",whitespace:!0}]})(o["default"].createElement(E.DatePicker,{format:"YYYY-MM-DD HH:mm:ss"}))),o["default"].createElement(I,(0,s["default"])({},t,{label:"\u662f\u5426\u662f\u5b50\u8d26\u53f7",hasFeedback:!0}),e("is_sub",{rules:[{required:!1,message:"Please input is_sub!",whitespace:!0}]})(o["default"].createElement(E.Input,null))),o["default"].createElement(I,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},o["default"].createElement(E.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",o["default"].createElement(E.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(o["default"].Component);F=E.Form.create()(F),F=(0,h.connect)()(F),t["default"]=F,e.exports=t["default"]}});