webpackJsonp([25,42],{654:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=a(2),r=n(l),o=a(4),u=n(o),i=a(3),c=n(i),s=a(1),d=n(s),p=a(15),f=a(12),m=f.Select.Option,h=f.Modal.confirm,y=f.Input.Search,g=function(e){function t(a){(0,r["default"])(this,t);var n=(0,u["default"])(this,e.call(this,a));return n.onSelectChange=function(e){n.setState({selectedRowKeys:e})},n.state={data:[],pageSize:10,selectedRowKeys:[]},n}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){this.props.actions.query({currentPage:1,pageSize:this.state.pageSize})},t.prototype.handleSearch=function(e,t){this.props.actions.query({type:e,value:t})},t.prototype.handleDel=function(e){var t=this.props.actions.del;h({title:"\u63d0\u793a",content:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",onOk:function(){t(e)},onCancel:function(){}})},t.prototype.handleBatchDel=function(){var e=this.state.selectedRowKeys,t=this.props.actions.batchDel;h({title:"\u63d0\u793a",content:"\u60a8\u786e\u5b9a\u8981\u6279\u91cf\u5220\u9664\u5417\uff1f",onOk:function(){t(e)},onCancel:function(){}})},t.prototype.render=function(){var e=this,t=[{title:" \u540d\u79f0",dataIndex:"name",key:"name"},{title:" \u7236\u7fa4\u7ec4id",dataIndex:"parent_id",key:"parent_id"},{title:"\u63cf\u8ff0",dataIndex:"memo",key:"memo"},{title:"\u64cd\u4f5c",key:"operation",render:function(t,a){return d["default"].createElement("span",null,d["default"].createElement("a",{href:"javascript:void(0)",onClick:e.handleDel.bind(e,a.id)},"\u5220\u9664")," \xa0|\xa0",d["default"].createElement(p.Link,{to:"/sys/group/edit/"+a.id},"\u7f16\u8f91"))}}],a={total:this.props.data.total,pageSize:this.state.pageSize,showSizeChanger:!0,showTotal:function(e,t){return t[0]+"-"+t[1]+"of"+e+"items"},onShowSizeChange:function(t,a){e.setState({pageSize:a}),e.props.actions.query({currentPage:t,pageSize:a})},onChange:function(t){e.props.actions.query({currentPage:t,pageSize:e.state.pageSize})}},n=this.state.selectedRowKeys,l={selectedRowKeys:n,onChange:this.onSelectChange},r=n.length>0;return d["default"].createElement("div",{className:"list-box"},d["default"].createElement(f.Breadcrumb,null,d["default"].createElement(f.Breadcrumb.Item,null,"\u9996\u9875"),d["default"].createElement(f.Breadcrumb.Item,null,"\u7cfb\u7edf\u7ba1\u7406"),d["default"].createElement(f.Breadcrumb.Item,null,"\u7fa4\u7ec4\u7ba1\u7406"),d["default"].createElement(f.Breadcrumb.Item,null,"\u5217\u8868")),d["default"].createElement("div",{className:"toolbar"},d["default"].createElement("span",{className:"btn"},d["default"].createElement(p.Link,{to:"/sys/group/add"},d["default"].createElement(f.Button,{type:"primary"},"\u65b0\u589e")),"\xa0",d["default"].createElement(f.Button,{type:"primary",onClick:this.handleBatchDel.bind(this),disabled:!r},"\u6279\u91cf\u5220\u9664")),d["default"].createElement("span",{className:"search"},d["default"].createElement("div",{className:"ant-search-input-wrapper"},d["default"].createElement(f.Select,{defaultValue:"name",onChange:function(e){type=e}},d["default"].createElement(m,{value:"name"}," \u540d\u79f0"),d["default"].createElement(m,{value:"parent_id"}," \u7236\u7fa4\u7ec4id"),d["default"].createElement(m,{value:"memo"},"\u63cf\u8ff0")),"\xa0",d["default"].createElement(y,{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9",style:{width:250},onSearch:function(t){var a=e.type?e.type:"name";e.handleSearch(a,t)}})))),d["default"].createElement(f.Table,{rowKey:"id",rowSelection:l,columns:t,dataSource:this.props.data.result,pagination:a,loading:!1}))},t}(d["default"].Component);t["default"]=g,e.exports=t["default"]},672:function(e,t,a){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t["default"]=e,t}function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(2),o=l(r),u=a(4),i=l(u),c=a(3),s=l(c),d=a(1),p=l(d),f=a(18),m=a(11),h=a(117),y=n(h),g=a(654),S=l(g),E=function(e){function t(){return(0,o["default"])(this,t),(0,i["default"])(this,e.apply(this,arguments))}return(0,s["default"])(t,e),t.prototype.render=function(){return p["default"].createElement(S["default"],{data:this.props.groups,actions:this.props.actions})},t}(p["default"].Component),v=function(e){return{groups:e.sys.groups}},b=function(e){return{actions:(0,f.bindActionCreators)(y,e)}};t["default"]=(0,m.connect)(v,b)(E),e.exports=t["default"]}});