webpackJsonp([8,42],{692:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchData=t.listOrders=void 0;var l=n(27),u=r(l),o=n(300),i=a(o),c=n(21),s=r(c),d=t.listOrders=function(e){return{type:i.LIST_ORDER,data:e.data}};t.fetchData=function(e,t){return function(n,a){var r=(0,u["default"])({page:e,pageSize:t});s["default"].ajax({url:"rest/taobao/order/query?filter="+r,success:function(e){n(d(e))}})}}},693:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(2),l=a(r),u=n(4),o=a(u),i=n(3),c=a(i),s=n(1),d=a(s),f=n(12),p=n(5),h=(a(p),f.Form.Item,f.Select.Option,f.Input.Group,function(e){function t(n){(0,l["default"])(this,t);var a=(0,o["default"])(this,e.call(this,n));return a.state={data:[],pageSize:10},a}return(0,c["default"])(t,e),t.prototype.componentDidMount=function(){this.props.actions.fetchData(1,this.state.pageSize)},t.prototype.componentWillUnmount=function(){},t.prototype.render=function(){var e=this,t=[{title:"\u8ba2\u5355\u4fe1\u606f",dataIndex:"tid",key:"tid",render:function(e,t,n){return d["default"].createElement("div",null,d["default"].createElement("div",null,d["default"].createElement("span",null,"\u3010\u8ba2\u5355\u53f7\u3011",t.tid),"\xa0",d["default"].createElement("span",null,"\u3010\u6210\u4ea4\u65f6\u95f4\u3011",t.end_time),"\xa0",d["default"].createElement("span",null,"\u3010\u4ed8\u6b3e\u65f6\u95f4\u3011",t.pay_time),"\xa0",d["default"].createElement("span",null,"\u3010\u4e70\u5bb6\u3011",t.buyer_nick),"\xa0",d["default"].createElement("span",null,"\u3010\u4e70\u5bb6\u8bc4\u4ef7\u3011",t.buyer_rate?"\u662f":"\u5426"),"\xa0",d["default"].createElement("span",null,"\u3010\u5356\u5bb6\u8bc4\u4ef7\u3011",t.seller_rate?"\u662f":"\u5426"),"\xa0"),d["default"].createElement("div",null,t.orders.map(function(e){return d["default"].createElement("div",{style:{width:"100%","border-top":"1px #ccc solid",padding:"5px",margin:"5px 0"}},d["default"].createElement("div",{style:{width:"200px"}},d["default"].createElement("img",{src:e.pic_path,width:"20px"}),"\xa0",d["default"].createElement("span",null,e.title,"\u3010",e.sku_properties_name,"\u3011"),"\xa0",d["default"].createElement("span",null,"\u3010\u4e70\u5bb6\u8bc4\u4ef7\u3011",e.buyer_rate?"\u662f":"\u5426"),"\xa0",d["default"].createElement("span",null,"\u3010\u5356\u5bb6\u8bc4\u4ef7\u3011",e.seller_rate?"\u662f":"\u5426"),"\xa0"))})))}}],n={onChange:function(e,t){},onSelect:function(e,t,n){},onSelectAll:function(e,t,n){console.log(e,t,n)},getCheckboxProps:function(e){return{}}},a={total:this.props.orders.total,pageSize:this.state.pageSize,showSizeChanger:!0,showTotal:function(e,t){return t[0]+"-"+t[1]+" of "+e+" items"},onShowSizeChange:function(t,n){e.setState({pageSize:n}),e.props.actions.fetchData(t,n)},onChange:function(t){e.props.actions.fetchData(t,e.state.pageSize)}};return d["default"].createElement(f.Table,{rowSelection:n,showHeader:!1,columns:t,dataSource:this.props.orders.result,pagination:a,loading:!1})},t}(d["default"].Component));t["default"]=h,e.exports=t["default"]},694:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=n(2),l=a(r),u=n(4),o=a(u),i=n(3),c=a(i),s=n(1),d=a(s),f=n(12),p=n(5),h=(a(p),f.Form.Item,f.Select.Option),m=(f.Input.Group,f.Input.Search),v=function(e){function t(n){return(0,l["default"])(this,t),(0,o["default"])(this,e.call(this,n))}return(0,c["default"])(t,e),t.prototype.handleSearch=function(e,t){this.props.actions.search(e,t)},t.prototype.render=function(){var e=this,t=(this.props.actions,"tid");return d["default"].createElement("div",{className:"ant-search-input-wrapper"},"\u641c\u7d22\u6761\u4ef6\uff1a",d["default"].createElement(f.Select,{defaultValue:"name",onChange:function(e){t=e}},d["default"].createElement(h,{value:"name"},"\u8ba2\u5355\u53f7"),d["default"].createElement(h,{value:"nick"},"\u6635\u79f0"),d["default"].createElement(h,{value:"phone"},"\u7535\u8bdd"),d["default"].createElement(h,{value:"email"},"\u90ae\u7bb1"))," \xa0",d["default"].createElement(m,{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u5185\u5bb9",style:{width:250},onSearch:function(n){e.handleSearch(t,n)}}))},t}(s.Component);t["default"]=v,e.exports=t["default"]},695:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),u=r(l),o=n(4),i=r(o),c=n(3),s=r(c),d=n(1),f=r(d),p=n(18),h=n(11),m=n(692),v=a(m),y=n(693),_=r(y),E=n(694),S=r(E),g=function(e){function t(n){return(0,u["default"])(this,t),(0,i["default"])(this,e.call(this,n))}return(0,s["default"])(t,e),t.prototype.render=function(){return f["default"].createElement("div",{className:"sup-body"},f["default"].createElement("div",{style:{height:40}},f["default"].createElement("span",{style:{"float":"left"}},f["default"].createElement(S["default"],{actions:this.props.actions})),f["default"].createElement("span",{style:{"float":"right"}})),f["default"].createElement(_["default"],{orders:this.props.orders,actions:this.props.actions}))},t}(d.Component);g.propTypes={orders:d.PropTypes.array.isRequired};var b=function(e){return{orders:e.taobao.orders}},w=function(e){return{actions:(0,p.bindActionCreators)(v,e)}};t["default"]=(0,h.connect)(b,w)(g),e.exports=t["default"]}});