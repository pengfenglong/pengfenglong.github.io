webpackJsonp([7],{522:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(554),i=(n.n(a),n(555)),l=n.n(i),r=n(524),o=(n.n(r),n(122)),s=n.n(o),c=n(6),p=n.n(c),u=n(79),d=n.n(u),m=n(16),f=n.n(m),h=n(19),y=n.n(h),v=n(17),E=n.n(v),z=n(18),x=n.n(z),b=n(527),w=(n.n(b),n(528)),k=n.n(w),S=n(211),O=(n.n(S),n(212)),W=n.n(O),_=n(534),j=(n.n(_),n(535)),q=n.n(j),C=n(1),I=n.n(C),g=(n(203),n(540)),A=n(24),M=(n(208),q.a.Option,W.a.confirm,k.a.Search,function(e){function t(e){f()(this,t);var n=E()(this,(t.__proto__||d()(t)).call(this,e));return n.state={data:[]},n}return x()(t,e),y()(t,[{key:"handleQueryAll",value:function(){var e=this;Object(A.c)({url:"rest/pms/equipmentInfo/list?filter="+p()({where:[{propertyName:"equipment_id",propertyValue:this.props.params.equipmentId,matchType:"=",logicalExpression:"and"}]}),success:function(t){e.setState({data:t.data})}})}},{key:"componentDidMount",value:function(){this.handleQueryAll()}},{key:"render",value:function(){var e=this,t=this.state.data.map(function(t){var n="file";return t.name.endsWith(".docx")||t.name.endsWith(".doc")?n="file-word":t.name.endsWith(".xlsx")||t.name.endsWith(".xls")?n="file-excel":t.name.endsWith(".pptx")||t.name.endsWith(".ppt")?n="file-ppt":t.name.endsWith(".pdf")&&(n="file-pdf"),{id:t.id,icon:I.a.createElement("div",null,I.a.createElement(s.a,{type:n,style:{fontSize:50,cursor:"pointer"},onClick:function(){Object(A.e)({path:t.attachment,name:t.name,type:t.type,size:t.size})}}),I.a.createElement("div",{style:{position:"absolute",right:10,top:10,cursor:"pointer"}},I.a.createElement("a",{href:"rest/file/download?name="+t.name+"&path="+t.attachment},I.a.createElement(s.a,{type:"download",style:{fontSize:16}}))," \xa0\xa0\xa0\xa0",I.a.createElement(s.a,{style:{fontSize:18},type:"eye",onClick:function(){Object(A.e)({path:t.attachment,name:t.name,type:t.type,size:t.size})}}),"\xa0\xa0\xa0\xa0",I.a.createElement(s.a,{type:"delete",style:{fontSize:18},onClick:function(){Object(A.c)({url:"rest/pms/equipmentInfo/delete/"+t.id,type:"delete",success:function(t){e.handleQueryAll()}})}}))),text:I.a.createElement("div",null,I.a.createElement("b",null,t.name),"(",(t.size/1024/1024).toFixed(2),"M)")}});return t.push({id:0,text:I.a.createElement(l.a,{action:Object(A.d)().hostUrl+"rest/pms/equipmentInfo/uploadToLocal/"+this.props.params.equipmentId,name:"file",headers:{Authorization:"Bearer "+window.sessionStorage.getItem("edesk-token")},withCredentials:!0,listType:"picture-card",multiple:!1,showUploadList:!1,onPreview:function(){},beforeUpload:function(e,t){return!(e.size>1048576)||(alert("\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc71M"),!1)},onChange:function(t){"done"===t.file.status&&e.handleQueryAll()}},I.a.createElement("div",null,I.a.createElement(s.a,{type:"plus-circle",style:{fontSize:30,cursor:"pointer"}}),I.a.createElement("div",{className:"ant-upload-text"},"\u4e0a\u4f20\u8bbe\u5907\u8d44\u6599")))}),I.a.createElement("div",null,I.a.createElement(g.a,{data:t,columnNum:6}))}}]),t}(I.a.Component));t.default=M}});