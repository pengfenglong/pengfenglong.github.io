webpackJsonp([36,42],{172:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),u=l(n),d=a(2),o=l(d),s=a(4),i=l(s),p=a(3),c=l(p),f=a(1),m=l(f),h=a(11),b=a(15),v=a(12),y=a(120),E=r(y),I=v.Form.Item,B=function(e){function t(){return(0,o["default"])(this,t),(0,i["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&E.get(this.props.editId,function(t){var a=(0,u["default"])({},t.data);e.props.form.setFieldsValue(a)})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,r){e||(t.props.editId?t.props.dispatch(E.update(t.props.editId,r)):(t.props.dispatch(E.save(r)),a.resetFields()),b.hashHistory.push("/sys/parameter"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return m["default"].createElement("div",{className:"add-box"},m["default"].createElement(v.Breadcrumb,null,m["default"].createElement(v.Breadcrumb.Item,null,"\u9996\u9875"),m["default"].createElement(v.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),m["default"].createElement(v.Breadcrumb.Item,null,"\u7cfb\u7edf\u53c2\u6570\u7ba1\u7406"),m["default"].createElement(v.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),m["default"].createElement(v.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},m["default"].createElement(I,(0,u["default"])({},t,{label:"\u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"Please input name!",whitespace:!0}]})(m["default"].createElement(v.Input,null))),m["default"].createElement(I,(0,u["default"])({},t,{label:"\u503c",hasFeedback:!0}),e("value",{rules:[{required:!1,message:"Please input value!",whitespace:!0}]})(m["default"].createElement(v.Input,null))),m["default"].createElement(I,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},m["default"].createElement(v.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",m["default"].createElement(v.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(m["default"].Component);B=v.Form.create()(B),B=(0,h.connect)()(B),t["default"]=B,e.exports=t["default"]}});