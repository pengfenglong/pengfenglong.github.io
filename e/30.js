webpackJsonp([30,48,56],{290:function(e,t,a){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(6),u=n(l),d=a(2),i=n(d),o=a(4),s=n(o),p=a(3),c=n(p),f=a(1),m=n(f),h=a(13),b=a(17),v=a(14),y=a(220),E=r(y),_=v.Form.Item,g=v.TreeSelect.TreeNode,I=function(e){function t(a){(0,i["default"])(this,t);var r=(0,s["default"])(this,e.call(this,a));return r.state={groupTreeData:[],parent_id:null},r}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.editId&&E.get(this.props.editId,function(t){var a=(0,u["default"])({},t.data);e.props.form.setFieldsValue(a),e.setState({parent_id:t.data.parent_id})}),E.getTree(function(t){e.setState({groupTreeData:t.data})})},t.prototype.onParentChange=function(e){this.setState({parent_id:e})},t.prototype.handleSubmit=function(e){var t=this;e.preventDefault();var a=this.props.form;a.validateFields(function(e,r){e||(r.parent_id=t.state.parent_id,t.props.editId?t.props.dispatch(E.update(t.props.editId,r)):(t.props.dispatch(E.save(r)),a.resetFields()),b.hashHistory.push("/sys/group"))})},t.prototype.handleBack=function(){window.history.back()},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:6},wrapperCol:{span:14}},a=function r(e){return e.map(function(e){return e.children?m["default"].createElement(g,{key:e.id,title:e.name,value:e.id},r(e.children)):m["default"].createElement(g,{key:e.id,title:e.name,value:e.id})})};return m["default"].createElement("div",{className:"add-box"},m["default"].createElement(v.Breadcrumb,null,m["default"].createElement(v.Breadcrumb.Item,null,"\u9996\u9875"),m["default"].createElement(v.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),m["default"].createElement(v.Breadcrumb.Item,null,"\u7fa4\u7ec4\u7ba1\u7406"),m["default"].createElement(v.Breadcrumb.Item,null,this.props.editId?"\u7f16\u8f91":"\u65b0\u589e")),m["default"].createElement(v.Form,{horizontal:!0,onSubmit:this.handleSubmit.bind(this)},m["default"].createElement(_,(0,u["default"])({},t,{label:" \u7236\u7fa4\u7ec4",hasFeedback:!0}),e("parent_id",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}],initialValue:"0"})(m["default"].createElement(v.TreeSelect,{value:this.state.parent_id,placeholder:"\u8bf7\u9009\u62e9",onChange:this.onParentChange.bind(this)},m["default"].createElement(g,{value:"0",title:"\u6839\u8282\u70b9",key:"0"},a(this.state.groupTreeData))))),m["default"].createElement(_,(0,u["default"])({},t,{label:" \u540d\u79f0",hasFeedback:!0}),e("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165!"}]})(m["default"].createElement(v.Input,null))),m["default"].createElement(_,(0,u["default"])({},t,{label:"\u63cf\u8ff0",hasFeedback:!0}),e("memo",{rules:[{required:!1,message:"Please input memo!",whitespace:!0}]})(m["default"].createElement(v.Input,null))),m["default"].createElement(_,{wrapperCol:{span:16,offset:6},style:{marginTop:24}},m["default"].createElement(v.Button,{type:"primary",htmlType:"submit"},"\u786e\u5b9a")," \xa0\xa0",m["default"].createElement(v.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de"))))},t}(m["default"].Component);I=v.Form.create()(I),I=(0,h.connect)()(I),t["default"]=I,e.exports=t["default"]},927:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=r(n),u=a(4),d=r(u),i=a(3),o=r(i),s=a(1),p=r(s),c=a(13),f=a(290),m=r(f),h=function(e){function t(){return(0,l["default"])(this,t),(0,d["default"])(this,e.apply(this,arguments))}return(0,o["default"])(t,e),t.prototype.render=function(){return p["default"].createElement("div",{className:"edit-box"},p["default"].createElement(m["default"],{editId:this.props.params.id}))},t}(p["default"].Component);h=(0,c.connect)()(h),t["default"]=h,e.exports=t["default"]}});