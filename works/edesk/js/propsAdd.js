webpackJsonp([35,42],{177:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),u=r(n),d=a(2),i=r(d),s=a(4),c=r(s),o=a(3),f=r(o),p=a(1),m=r(p),h=a(13),E=a(19),b=a(14),v=a(127),y=l(v),k=b.Form.Item,g=b.TreeSelect.TreeNode,F=b.Select.Option,I=function(e){function t(a){(0,i["default"])(this,t);var l=(0,c["default"])(this,e.call(this,a));return l.state={treeData:[],parent_id:null},l}return(0,f["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&y.get(this.props.editId,function(t){var a=(0,u["default"])({},t.data);e.props.form.setFieldsValue(a),e.setState({parent_id:t.data.parent_id})}),y.getTree(function(t){e.setState({treeData:t.data.result})})},t.prototype.onParentChange=function(e){this.setState({parent_id:e})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,l){e||(t.props.editId?t.props.dispatch(y.update(t.props.editId,l)):(t.props.dispatch(y.save(l)),a.resetFields()),E.hashHistory.push("/sys/props"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}},a=function l(e){return e.map(function(e){return e.children?m["default"].createElement(g,{key:e.id,title:e.name,value:e.id},l(e.children)):m["default"].createElement(g,{key:e.id,title:e.name,value:e.id})})};return m["default"].createElement("div",{className:"add-box"},m["default"].createElement(b.Breadcrumb,null,m["default"].createElement(b.Breadcrumb.Item,null,"\u9996\u9875"),m["default"].createElement(b.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),m["default"].createElement(b.Breadcrumb.Item,null,"\u6269\u5c55\u5c5e\u6027\u7ba1\u7406"),m["default"].createElement(b.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),m["default"].createElement(b.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},m["default"].createElement(k,(0,u["default"])({},t,{label:"\u7236\u5c5e\u6027",hasFeedback:!0}),e("parent_id",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:"0"})(m["default"].createElement(b.TreeSelect,{value:this.state.parent_id,placeholder:"\u8bf7\u9009\u62e9",treeDefaultExpandAll:!0,onChange:this.onParentChange.bind(this)},m["default"].createElement(g,{value:"0",title:"\u6839\u8282\u70b9",key:"0"},a(this.state.treeData))))),m["default"].createElement(k,(0,u["default"])({},t,{label:"\u7c7b\u578b",hasFeedback:!0}),e("type",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:"input"})(m["default"].createElement(b.Select,null,m["default"].createElement(F,{value:"input"},"\u8f93\u5165\u6846"),m["default"].createElement(F,{value:"textarea"},"\u6587\u672c\u57df"),m["default"].createElement(F,{value:"date"},"\u65e5\u671f"),m["default"].createElement(F,{value:"datetime"},"\u65f6\u95f4"),m["default"].createElement(F,{value:"select"},"\u9009\u62e9\u6846"),m["default"].createElement(F,{value:"radio"},"\u5355\u9009"),m["default"].createElement(F,{value:"checkbox"},"\u591a\u9009"),m["default"].createElement(F,{value:"file"},"\u6587\u4ef6")))),m["default"].createElement(k,(0,u["default"])({},t,{label:"\u5c5e\u6027\u540d",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(b.Input,null))),m["default"].createElement(k,(0,u["default"])({},t,{label:"\u6392\u5e8f",hasFeedback:!0}),e("sort",{rules:[{required:!1,message:"\u8bf7\u8f93\u5165"}]})(m["default"].createElement(b.InputNumber,{style:{width:150}}))),m["default"].createElement(k,(0,u["default"])({},t,{label:"\u72b6\u6001",hasFeedback:!0}),e("status",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}],initialValue:"1"})(m["default"].createElement(b.Select,{style:{width:150}},m["default"].createElement(F,{value:"1"},"\u53ef\u7528"),m["default"].createElement(F,{value:"0"},"\u4e0d\u53ef\u7528")))),m["default"].createElement(k,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},m["default"].createElement(b.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",m["default"].createElement(b.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(m["default"].Component);I=b.Form.create()(I),I=(0,h.connect)()(I),t["default"]=I,e.exports=t["default"]}});