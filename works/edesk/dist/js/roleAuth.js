webpackJsonp([32,42],{665:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),s=o(r),i=n(4),l=o(i),u=n(3),c=o(u),d=n(1),h=o(d),p=n(11),f=n(12),m=n(299),k=a(m),y=f.Tree.TreeNode,b=f.Tabs.TabPane,v=f.Checkbox.Group,E=function(e){function t(){var n,a,o;(0,s["default"])(this,t);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return n=a=(0,l["default"])(this,e.call.apply(e,[this].concat(i))),a.state={menus:{all:[],checked:[]},operations:{all:[],checked:[]}},a.onMenusCheck=function(e){var t=a.state.menus;t.checked=e,a.setState({menus:t})},o=n,(0,l["default"])(a,o)}return(0,c["default"])(t,e),t.prototype.handleBack=function(){window.location.hash="/sys/role"},t.prototype.handleSubmit=function(){var e=this.props.params.id,t={menus:this.state.menus.checked,operations:this.state.operations.checked};this.props.dispatch(k.saveAuths(e,t)),window.location.hash="/sys/role"},t.prototype.onOperationChange=function(e){var t=this.state.operations;t.checked=e,this.setState({operations:t})},t.prototype.render=function(){var e=function n(e){return e.map(function(e){return e.children?h["default"].createElement(y,{key:e.id,title:e.name},n(e.children)):h["default"].createElement(y,{key:e.id,title:e.name})})},t=this.state.operations.all.map(function(e){return{label:e.name,value:e.id}});return h["default"].createElement("div",null,h["default"].createElement("div",null,h["default"].createElement(f.Button,{type:"primary",onClick:this.handleSubmit.bind(this)},"\u4fdd\u5b58"),"\xa0",h["default"].createElement(f.Button,{onClick:this.handleBack.bind(this)},"\u8fd4\u56de")),h["default"].createElement("br",null),h["default"].createElement(f.Tabs,{defaultActiveKey:"1",tabPosition:"left"},h["default"].createElement(b,{tab:"\u83dc\u5355",key:"1"},h["default"].createElement(f.Tree,{showLine:!0,showIcon:!1,checkable:!0,checkedKeys:this.state.menus.checked,defaultExpandAll:!1,onCheck:this.onMenusCheck.bind(this)},e(this.state.menus.all))),h["default"].createElement(b,{tab:"\u64cd\u4f5c",key:"2"},h["default"].createElement(v,{options:t,value:this.state.operations.checked,onChange:this.onOperationChange.bind(this)})),h["default"].createElement(b,{tab:"\u9875\u9762\u5143\u7d20",key:"3"},"\u6b63\u5728\u5f00\u53d1\u4e2d......"),h["default"].createElement(b,{tab:"\u6587\u4ef6",key:"4"},"\u6b63\u5728\u5f00\u53d1\u4e2d......")))},t.prototype.componentDidMount=function(){var e=this,t=this.props.params.id;this.props.dispatch(k.getAuths(t,function(t){e.setState({menus:t.data.menus,operations:t.data.operations})}))},t}(h["default"].Component);E=(0,p.connect)()(E),t["default"]=E,e.exports=t["default"]}});