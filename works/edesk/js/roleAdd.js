webpackJsonp([33,42],{175:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),u=r(n),d=a(2),o=r(d),s=a(4),i=r(s),p=a(3),c=r(p),m=a(1),f=r(m),h=a(11),b=a(15),E=a(12),y=a(123),v=l(y),I=E.Form.Item,F=function(e){function t(){return(0,o["default"])(this,t),(0,i["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&v.get(this.props.editId,function(t){var a=(0,u["default"])({},t.data);e.props.form.setFieldsValue(a)})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,l){e||(t.props.editId?t.props.dispatch(v.update(t.props.editId,l)):(t.props.dispatch(v.save(l)),a.resetFields()),b.hashHistory.push("/sys/role"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return f["default"].createElement("div",{className:"add-box"},f["default"].createElement(E.Breadcrumb,null,f["default"].createElement(E.Breadcrumb.Item,null,"\u9996\u9875"),f["default"].createElement(E.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),f["default"].createElement(E.Breadcrumb.Item,null,"\u89d2\u8272\u7ba1\u7406"),f["default"].createElement(E.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),f["default"].createElement(E.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},f["default"].createElement(I,(0,u["default"])({},t,{label:"\u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"Please input name!",whitespace:!0}]})(f["default"].createElement(E.Input,null))),f["default"].createElement(I,(0,u["default"])({},t,{label:"\u7f16\u7801",hasFeedback:!0}),e("code",{rules:[{required:!0,message:"Please input code!",whitespace:!0}]})(f["default"].createElement(E.Input,null))),f["default"].createElement(I,(0,u["default"])({},t,{label:"\u63cf\u8ff0",hasFeedback:!0}),e("memo",{rules:[{required:!1,message:"Please input memo!",whitespace:!0}]})(f["default"].createElement(E.Input,null))),f["default"].createElement(I,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},f["default"].createElement(E.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",f["default"].createElement(E.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(f["default"].Component);F=E.Form.create()(F),F=(0,h.connect)()(F),t["default"]=F,e.exports=t["default"]}});