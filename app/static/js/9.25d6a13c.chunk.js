webpackJsonp([9],{1e3:function(e,n,t){n=e.exports=t(188)(void 0),n.push([e.i,"body {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n.card-wrap{\r\n    margin: 5px 0;\r\n}\r\n\r\n.card-wrap-title {\r\n    margin: 15px 0 15px 15px;\r\n    font-size: 18px;\r\n    color: #333;\r\n}\r\n\r\n.t-card.card-example {\r\n    height: 141px;\r\n    background-color: #fff;\r\n    font-size: 12px;\r\n    color: #999;\r\n    text-align: center;\r\n    line-height: 141px;\r\n}\r\n\r\n.t-card-header {\r\n    display: flex;\r\n    padding: 12px 16px 0;\r\n}\r\n\r\n.t-card-body {\r\n    padding: 16px 16px 13px;\r\n}\r\n\r\n.t-card-footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 12px 16px;\r\n    font-size: 12px;\r\n}\r\n\r\n.card-header-text {\r\n    margin-left: 12px;\r\n}\r\n\r\n.card-avatar {\r\n    diplay: block;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.card-username {\r\n    display: block;\r\n    font-size: 14px;\r\n    color: rgba(0,0,0,0.6);\r\n    line-height: 22px;\r\n}\r\n\r\n.card-date {\r\n    font-size: 12px;\r\n    color: rgba(31,56,88,0.4);\r\n    line-height: 18px;\r\n}\r\n\r\n.card-title {\r\n    font-size: 16px;\r\n    color: rgba(0,0,0,0.8);\r\n    line-height: 24px;\r\n}\r\n\r\n.card-desc {\r\n    margin-top: 5px;\r\n    font-size: 12px;\r\n    color: rgba(0,0,0,0.6);\r\n    line-height: 18px;\r\n}\r\n\r\n.card-footer-meta {\r\n    display: flex;\r\n    color: rgba(31,56,88,0.6);\r\n    line-height: 18px;\r\n}\r\n\r\n.card-footer-meta-item {\r\n    display: flex;\r\n    margin-right: 17px;\r\n}\r\n\r\n.card-icon {\r\n    line-height: 1;\r\n    margin-right: 9px;\r\n}\r\n\r\n.card-icon svg {\r\n    fill: rgba(31,56,88,0.6);\r\n    width: 16px;\r\n    height: 18px;\r\n}\r\n\r\n.card-footer-extra {\r\n    color: rgba(31,56,88,0.4);\r\n    line-height: 18px;\r\n}",""])},482:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(113),a=t.n(r),i=t(108),o=t.n(i),l=t(111),s=t.n(l),c=t(109),d=t.n(c),p=t(110),u=t.n(p),f=t(5),h=t.n(f),m=t(25),g=t(187),x=(t.n(g),t(503)),b=t(998),y=t(196),v=t(209),w=t(197),k=x.i.operation,E=function(e){function n(e){o()(this,n);var t=d()(this,(n.__proto__||a()(n)).call(this,e));return t.state={boardName:null,selectedList:null},t}return u()(n,e),s()(n,[{key:"handleOnLeftClick",value:function(){window.history.back()}},{key:"handleOnRightClick",value:function(){window.dd.ready(function(){window.dd.biz.contact.complexPicker({title:"\u6d4b\u8bd5\u6807\u9898",corpId:"ding2be0fe1f8eec8e5d35c2f4657eb6378f",multiple:!0,limitTips:"\u8d85\u51fa\u4e86",maxUsers:1e3,pickedUsers:[],pickedDepartments:[],disabledUsers:[],disabledDepartments:[],requiredUsers:[],requiredDepartments:[],appId:172310029,permissionType:"GLOBAL",responseUserOnly:!1,startWithDepartmentId:0,onSuccess:function(e){},onFail:function(e){}})})}},{key:"handleListChange",value:function(e){this.setState({selectedList:e}),this.props.itemActions.search({currentPage:1,pageSize:100,channel_id:e.value})}},{key:"handleListSelect",value:function(){var e=this,n=[];this.props.lists.result&&this.props.lists.result.forEach(function(e){n.push({value:e.id,key:e.name})}),window.dd.version?window.dd.biz.util.chosen({source:n,selectedKey:this.state.selectedList.key,onSuccess:function(n){e.handleListChange(n)},onFail:function(e){}}):k(this.props.lists.result.map(function(n){return{text:h.a.createElement("div",null,h.a.createElement("span",null,n.name),e.state.selectedList.value===n.id?h.a.createElement(x.f,{type:"check",style:{float:"right",margin:"10px"}}):null),onPress:function(){e.handleListChange({value:n.id,key:n.name})}}}))}},{key:"componentDidMount",value:function(){var e=this;this.props.listActions.query({currentPage:1,pageSize:100,siteId:this.props.params.boardId,callback:function(n){0===n.length?window.location.hash="/task/board/edit/"+e.props.params.boardId+"?type=list":(e.setState({selectedList:{value:n[0].id,key:n[0].name}}),e.props.itemActions.search({currentPage:1,pageSize:100,channel_id:n[0].id}))}}),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(e){},onFail:function(e){}}),y.get(this.props.params.boardId,function(n){e.setState({boardName:n.data.name}),window.dd.biz.navigation.setTitle({title:n.data.name,onSuccess:function(e){},onFail:function(e){}})}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"\u7f16\u8f91\u770b\u677f",onSuccess:function(n){window.location.hash="/task/board/edit/"+e.props.params.boardId},onFail:function(e){}})}},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,window.dd.version?null:h.a.createElement(x.j,{mode:"dark",icon:h.a.createElement(x.f,{type:"left"}),onLeftClick:function(){window.history.back()},rightContent:[h.a.createElement("button",{style:{padding:"0 5px","border-radius":"4px",color:"#fff","background-color":"#1890ff","border-color":"#1890ff"},onClick:function(){window.location.hash="/task/board/edit/"+e.props.params.boardId}},"\u770b\u677f\u8bbe\u7f6e")]},this.state.boardName),h.a.createElement("div",{style:{padding:"5px 10px",border:"1px #aaa solid",background:"#ffffff",width:"100%",height:"45px","line-height":"30px","font-size":"14px"}},h.a.createElement("div",{style:{float:"left"},onClick:this.handleListSelect.bind(this)},h.a.createElement(x.f,{type:"down",style:{margin:"3px 5px"}})),h.a.createElement("div",{style:{float:"left"},onClick:this.handleListSelect.bind(this)},this.state.selectedList?this.state.selectedList.key:"","("+this.props.items.result.length+")"),h.a.createElement("div",{style:{float:"right","font-size":"12px"}},h.a.createElement("button",{style:{padding:"0 5px","border-radius":"4px",color:"#fff","background-color":"#1890ff","border-color":"#1890ff"},onClick:function(){window.location.hash="/task/item/add/"+e.props.params.boardId+"/"+e.state.selectedList.value}},"\u65b0\u5efa\u4efb\u52a1"))),h.a.createElement("div",{style:{height:window.dd.version?"calc(100vh - 48px)":"calc(100vh - 93px)","overflow-y":"auto"}},this.props.items.result.map(function(e){return h.a.createElement(b.a,{data:e})})))}}]),n}(f.Component),C=function(e){return{lists:e.cms.channels,items:e.cms.articles}},L=function(e){return{listActions:Object(m.bindActionCreators)(v,e),itemActions:Object(m.bindActionCreators)(w,e)}};n.default=Object(g.connect)(C,L)(E)},998:function(e,n,t){"use strict";var r=t(505),a=(t.n(r),t(504)),i=t.n(a),o=t(113),l=t.n(o),s=t(108),c=t.n(s),d=t(111),p=t.n(d),u=t(109),f=t.n(u),h=t(110),m=t.n(h),g=t(5),x=t.n(g),b=t(526),y=t(503),v=t(43),w=t(999),k=(t.n(w),function(e){function n(e){return c()(this,n),f()(this,(n.__proto__||l()(n)).call(this,e))}return m()(n,e),p()(n,[{key:"render",value:function(){var e=this.props.data,n=e.id,t=e.title,r=(e.content,e.workload),a=e.end_time,o=e.owner_user_name,l=e.owner_user_avatar,s=e.tagCount,c=e.fileCount,d=e.commentCount;return x.a.createElement("div",{style:{margin:"5px"},onClick:function(){window.location.hash="/task/item/view/"+n}},x.a.createElement(y.b,null,x.a.createElement(y.b.Body,null,x.a.createElement("div",null,x.a.createElement("span",{style:{float:"left",marginRight:5}},x.a.createElement(b.a,{name:o,img:l})),x.a.createElement("span",null,t))),x.a.createElement(y.b.Footer,{content:Object(v.b)(new Date(a)),extra:x.a.createElement("div",null,x.a.createElement("div",{style:{float:"left",margin:"0 5px"}},x.a.createElement(i.a,{type:"tags"}),s),x.a.createElement("div",{style:{float:"left",margin:"0 5px"}},x.a.createElement(i.a,{type:"link"}),c),x.a.createElement("div",{style:{float:"left",margin:"0 5px"}},x.a.createElement(i.a,{type:"message"}),d),x.a.createElement("div",{style:{float:"left",margin:"0 5px"}},x.a.createElement(i.a,{type:"calculator"}),r))})))}}]),n}(g.Component));n.a=k},999:function(e,n,t){var r=t(1e3);"string"===typeof r&&(r=[[e.i,r,""]]);var a={};a.transform=void 0;t(189)(r,a);r.locals&&(e.exports=r.locals)}});