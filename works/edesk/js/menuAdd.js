webpackJsonp([38,42],{170:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),u=r(n),s=a(2),d=r(s),i=a(4),c=r(i),o=a(3),p=r(o),m=a(1),f=r(m),h=a(11),b=a(15),E=a(12),v=a(118),y=l(v),_=E.Form.Item,I=E.TreeSelect.TreeNode,k=function(e){function t(a){(0,d["default"])(this,t);var l=(0,c["default"])(this,e.call(this,a));return l.state={menuTreeData:[],parent_id:null},l}return(0,p["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&y.get(this.props.editId,function(t){var a=(0,u["default"])({},t.data);e.props.form.setFieldsValue(a),e.setState({parent_id:t.data.parent_id})}),y.getTree(function(t){e.setState({menuTreeData:t.data})})},t.prototype.onParentChange=function(e){this.setState({parent_id:e})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,l){e||(t.props.editId?t.props.dispatch(y.update(t.props.editId,l)):(t.props.dispatch(y.save(l)),a.resetFields()),b.hashHistory.push("/sys/menu"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}},a=function l(e){return e.map(function(e){return e.children?f["default"].createElement(I,{key:e.id,title:e.name,value:e.id},l(e.children)):f["default"].createElement(I,{key:e.id,title:e.name,value:e.id})})};return f["default"].createElement("div",{className:"add-box"},f["default"].createElement(E.Breadcrumb,null,f["default"].createElement(E.Breadcrumb.Item,null,"\u9996\u9875"),f["default"].createElement(E.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),f["default"].createElement(E.Breadcrumb.Item,null,"\u83dc\u5355\u7ba1\u7406"),f["default"].createElement(E.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),f["default"].createElement(E.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},f["default"].createElement(_,(0,u["default"])({},t,{label:"\u7236\u83dc\u5355",hasFeedback:!0}),e("parent_id",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}],initialValue:"0"})(f["default"].createElement(E.TreeSelect,{value:this.state.parent_id,placeholder:"\u8bf7\u9009\u62e9",onChange:this.onParentChange.bind(this)},f["default"].createElement(I,{value:"0",title:"\u6839\u8282\u70b9",key:"0"},a(this.state.menuTreeData))))),f["default"].createElement(_,(0,u["default"])({},t,{label:"\u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"Please input name!",whitespace:!0}]})(f["default"].createElement(E.Input,null))),f["default"].createElement(_,(0,u["default"])({},t,{label:"\u7f16\u7801",hasFeedback:!0}),e("code",{rules:[{required:!0,message:"Please input code!",whitespace:!0}]})(f["default"].createElement(E.Input,null))),f["default"].createElement(_,(0,u["default"])({},t,{label:"\u6392\u5e8f",hasFeedback:!0}),e("sort",{rules:[{required:!1,message:"Please input sort!",whitespace:!0}]})(f["default"].createElement(E.InputNumber,null))),f["default"].createElement(_,(0,u["default"])({},t,{label:"url",hasFeedback:!0}),e("url",{rules:[{required:!1,message:"Please input url!",whitespace:!0}]})(f["default"].createElement(E.Input,null))),f["default"].createElement(_,(0,u["default"])({},t,{label:"\u56fe\u6807",hasFeedback:!0}),e("icon",{rules:[{required:!1,message:"Please input icon!",whitespace:!0}]})(f["default"].createElement(E.Input,null))),f["default"].createElement(_,(0,u["default"])({},t,{label:"is_leaf",hasFeedback:!0}),e("is_leaf",{rules:[{required:!1,message:"Please input is_leaf!",whitespace:!0}]})(f["default"].createElement(E.InputNumber,null))),f["default"].createElement(_,(0,u["default"])({},t,{label:"is_visible",hasFeedback:!0}),e("is_visible",{rules:[{required:!1,message:"Please input is_visible!",whitespace:!0}]})(f["default"].createElement(E.InputNumber,null))),f["default"].createElement(_,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},f["default"].createElement(E.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",f["default"].createElement(E.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(f["default"].Component);k=E.Form.create()(k),k=(0,h.connect)()(k),t["default"]=k,e.exports=t["default"]}});