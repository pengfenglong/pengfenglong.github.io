webpackJsonp([34,42],{174:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(6),n=l(u),d=a(2),s=l(d),o=a(4),p=l(o),i=a(3),c=l(i),f=a(1),m=l(f),h=a(11),b=a(15),E=a(12),y=a(122),v=r(y),I=E.Form.Item,F=E.Select.Option,B=function(e){function t(){return(0,s["default"])(this,t),(0,p["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&v.get(this.props.editId,function(t){var a=(0,n["default"])({},t.data);e.props.form.setFieldsValue(a)})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,r){e||(t.props.editId?t.props.dispatch(v.update(t.props.editId,r)):(r.props_id=t.props.params.propsId,t.props.dispatch(v.save(r)),a.resetFields()),b.hashHistory.push("/sys/propsvalue/"+t.props.params.propsId))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}};return m["default"].createElement("div",{className:"add-box"},m["default"].createElement(E.Breadcrumb,null,m["default"].createElement(E.Breadcrumb.Item,null,"\u9996\u9875"),m["default"].createElement(E.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),m["default"].createElement(E.Breadcrumb.Item,null,"\u5c5e\u6027\u503c\u7ba1\u7406"),m["default"].createElement(E.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),m["default"].createElement(E.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},m["default"].createElement(I,(0,n["default"])({},t,{label:"\u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.Input,null))),m["default"].createElement(I,(0,n["default"])({},t,{label:"\u6392\u5e8f",hasFeedback:!0}),e("sort",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(E.InputNumber,{style:{width:150}}))),m["default"].createElement(I,(0,n["default"])({},t,{label:"\u72b6\u6001",hasFeedback:!0}),e("status",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:"1"})(m["default"].createElement(E.Select,{style:{width:150}},m["default"].createElement(F,{value:"1"},"\u53ef\u7528"),m["default"].createElement(F,{value:"0"},"\u4e0d\u53ef\u7528")))),m["default"].createElement(I,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},m["default"].createElement(E.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",m["default"].createElement(E.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(m["default"].Component);B=E.Form.create()(B),B=(0,h.connect)()(B),t["default"]=B,e.exports=t["default"]}});