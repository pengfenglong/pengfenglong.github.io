webpackJsonp([4],{479:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(500),r=(n.n(a),n(501)),o=n.n(r),i=n(496),s=(n.n(i),n(497)),l=n.n(s),u=n(823),c=(n.n(u),n(827)),d=n.n(c),p=n(502),f=(n.n(p),n(494)),h=n.n(f),m=n(539),v=(n.n(m),n(540)),y=n.n(v),g=n(490),b=(n.n(g),n(491)),k=n.n(b),w=n(525),E=(n.n(w),n(526)),C=n.n(E),_=n(527),P=(n.n(_),n(528)),O=n.n(P),x=n(30),L=n.n(x),N=n(606),D=(n.n(N),n(607)),I=n.n(D),S=n(6),j=n.n(S),U=n(113),F=n.n(U),T=n(108),M=n.n(T),R=n(111),W=n.n(R),q=n(109),A=n.n(q),z=n(110),H=n.n(z),B=n(555),X=(n.n(B),n(556)),J=n.n(X),K=n(5),$=n.n(K),V=n(187),Y=(n.n(V),n(519)),G=n(188),Q=n(20),Z=(J.a.CheckboxItem,function(e){function t(){var e,n,a,r;M()(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=a=A()(this,(e=t.__proto__||F()(t)).call.apply(e,[this].concat(i))),a.state={fileList:[],styles:[],processs:[],total:0,selected:"\u8ba1\u4ef6"},r=n,A()(a,r)}return H()(t,e),W()(t,[{key:"componentDidMount",value:function(){var e=this;Object(Q.d)({url:"rest/erp/processUser/queryByUser?departmentId="+(window.loginUser?window.loginUser.department.join(","):0),type:"get",success:function(t){var n=t.data.checkeds.map(function(e){return e.process_id}),a=function(e){for(var t=0;t<r.length;t++)if(r[t].id===e)return r[t];return null},r=[];t.data.all.forEach(function(e){-1!==n.indexOf(e.process_id)&&(a(e.style_id)?a(e.style_id).processs.push({id:e.process_id,name:e.process_name,price:e.process_price}):r.push({id:e.style_id,name:e.style_name,processs:[{id:e.process_id,name:e.process_name,price:e.process_price}]}))}),e.setState({styles:r}),0===r.length&&(window.location.hash="/erp/user/set-process")}}),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setTitle({title:"\u5de5\u4f5c\u8ba1\u4ef6",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"\u63d0\u4ea4\u5ba1\u6838",onSuccess:function(t){e.handleSubmit()},onFail:function(e){}})}},{key:"handleBack",value:function(){window.history.back()}},{key:"handleSubmit",value:function(e){var t=this,n=this.props.form;n.validateFields(function(e,a){e||(t.props.editId?t.props.dispatch(G.update(t.props.editId,a)):(t.state.fileList&&t.state.fileList.length>0&&(a.files=t.state.fileList.map(function(e){return{name:e.name,path:e.url,type:e.type,size:e.size}})),t.state.processs.forEach(function(e){e.quantity&&(a[e.id]=e.quantity)}),Object(Q.d)({url:"rest/erp/userWork/save",type:"post",data:j()(a),success:function(e){y.a.success("\u4fdd\u5b58\u6210\u529f!",1),setTimeout(function(){window.location.hash="/erp/my-work"},1e3)}}),n.resetFields()))})}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldProps;return $.a.createElement("div",null,$.a.createElement(k.a,null,$.a.createElement(I.a,L()({mode:"date",value:new Date(Date.now()),onChange:function(e){}},t("work_date",{initialValue:new Date(Date.now()),rules:[{required:!0}]})),$.a.createElement(k.a.Item,{arrow:"horizontal"},"\u8ba1\u4ef6\u65e5\u671f"))),$.a.createElement("div",{style:{margin:"0 5px"}},$.a.createElement(O.a,{values:["\u8ba1\u4ef6","\u56fe\u7247\u4e0a\u4f20"],onValueChange:function(t){e.setState({selected:t})}})),$.a.createElement("div",{style:{display:"\u8ba1\u4ef6"===this.state.selected?"block":"none"}},$.a.createElement(k.a,null,$.a.createElement(k.a.Item,{extra:$.a.createElement("b",{style:{marginRight:10,color:"red"}},"\xa5",this.state.total)},"\u603b\u8ba1\u5de5\u8d44")),this.state.styles.map(function(t){return $.a.createElement(k.a,{renderHeader:function(){return"\u6b3e\u5f0f:"+t.name}},t.processs.map(function(t){return $.a.createElement("div",{style:{marginLeft:20}},$.a.createElement(C.a,{placeholder:"\u8bf7\u8f93\u5165",type:"digit",labelNumber:10,extra:"\xa5"+t.price+"/\u4ef6",value:e.state[t.id]?e.state[t.id]:"",onChange:function(n){var a=e.state.processs,r=null;a.forEach(function(e){e.id===t.id&&(r=e)}),null==r?a.push({id:t.id,price:t.price,quantity:n}):r.quantity=n;var o=0;a.forEach(function(e){o+=e.price*e.quantity});var i={};i[t.id]=n,e.setState(i),e.setState({processs:a,total:o})}},$.a.createElement("div",{style:{width:150}},t.name)))}))})),$.a.createElement(l.a,null),$.a.createElement("div",{style:{display:"\u8ba1\u4ef6"===this.state.selected?"none":"block"}},$.a.createElement("div",{style:{padding:10}},$.a.createElement(d.a,{action:Object(Q.e)().uploadUrl,name:"file",headers:{Authorization:"Bearer "+window.sessionStorage.getItem("edesk-token")},listType:"picture-card",fileList:this.state.fileList,multiple:!0,showUploadList:!0,onPreview:function(){},beforeUpload:function(t,n){return!(n.length+e.state.fileList.length>5)||(y.a.fail("\u56fe\u7247\u6570\u91cf\u4e0d\u80fd\u8d85\u8fc75\u5f20!",1),!1)},onChange:function(t){var n=t.fileList;n=n.filter(function(e){return!e.length}),n=n.map(function(e){if(e.response&&(e.url=e.response.data.savePath),!e.length)return e}),n&&0!=n.length&&e.setState({fileList:n}),e.forceUpdate()}},this.state.fileList.length>=5?null:$.a.createElement("div",null,$.a.createElement(h.a,{type:"plus"}),$.a.createElement("div",{className:"ant-upload-text"},"\u70b9\u51fb\u4e0a\u4f20"))))),$.a.createElement(l.a,null),"mobile"!==Q.f.get("view")?$.a.createElement("div",{style:{margin:"0 10px",clear:"both"}},$.a.createElement(o.a,{type:"primary",onClick:this.handleSubmit.bind(this)},"\u63d0\u4ea4\u5ba1\u6838")):null)}}]),t}($.a.Component));Z=Object(V.connect)()(Object(Y.a)()(Z)),t.default=Z},602:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(489),o=a(r),i=n(487),s=a(i),l=n(108),u=a(l),c=n(111),d=a(c),p=n(109),f=a(p),h=n(110),m=a(h),v=n(5),y=a(v),g=n(828),b=a(g),k=n(9),w=a(k),E=n(488),C=a(E),_=n(835),P=a(_),O=n(841),x={uploading:"\u6587\u4ef6\u4e0a\u4f20\u4e2d",removeFile:"\u5220\u9664\u6587\u4ef6",uploadError:"\u4e0a\u4f20\u9519\u8bef",previewFile:"\u9884\u89c8\u6587\u4ef6"},L=function(e){function t(e){(0,u.default)(this,t);var n=(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onStart=function(e){var t=void 0,a=n.state.fileList.concat();e.length>0?(t=e.map(function(e){var t=(0,O.fileToObject)(e);return t.status="uploading",t}),a=a.concat(t)):(t=(0,O.fileToObject)(e),t.status="uploading",a.push(t)),n.onChange({file:t,fileList:a}),window.FormData||n.autoUpdateProgress(0,t)},n.onSuccess=function(e,t){n.clearProgressTimer();try{"string"===typeof e&&(e=JSON.parse(e))}catch(e){}var a=n.state.fileList,r=(0,O.getFileItem)(t,a);r&&(r.status="done",r.response=e,n.onChange({file:(0,s.default)({},r),fileList:a}))},n.onProgress=function(e,t){var a=n.state.fileList,r=(0,O.getFileItem)(t,a);r&&(r.percent=e.percent,n.onChange({event:e,file:(0,s.default)({},r),fileList:n.state.fileList}))},n.onError=function(e,t,a){n.clearProgressTimer();var r=n.state.fileList,o=(0,O.getFileItem)(a,r);o&&(o.error=e,o.response=t,o.status="error",n.onChange({file:(0,s.default)({},o),fileList:r}))},n.handleManualRemove=function(e){n.refs.upload.abort(e),e.status="removed",n.handleRemove(e)},n.onChange=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"fileList"in n.props||!t||n.setState({fileList:e.fileList});var a=n.props.onChange;a&&a(e)},n.onFileDrop=function(e){n.setState({dragState:e.type})},n.beforeUpload=function(e,t){if(!n.props.beforeUpload)return!0;var a=n.props.beforeUpload(e,t);return!1===a?(n.onChange({file:e,fileList:t},!1),!1):!a||!a.then||a},n.state={fileList:e.fileList||e.defaultFileList||[],dragState:"drop"},n}return(0,m.default)(t,e),(0,d.default)(t,[{key:"componentWillUnmount",value:function(){this.clearProgressTimer()}},{key:"getLocale",value:function(){var e={};return this.context.antLocale&&this.context.antLocale.Upload&&(e=this.context.antLocale.Upload),(0,s.default)({},x,e,this.props.locale)}},{key:"autoUpdateProgress",value:function(e,t){var n=this,a=(0,O.genPercentAdd)(),r=0;this.clearProgressTimer(),this.progressTimer=setInterval(function(){r=a(r),n.onProgress({percent:r},t)},200)}},{key:"handleRemove",value:function(e){var t=this,n=this.props.onRemove;Promise.resolve("function"===typeof n?n(e):n).then(function(n){if(!1!==n){var a=(0,O.removeFileItem)(e,t.state.fileList);a&&t.onChange({file:e,fileList:a})}})}},{key:"componentWillReceiveProps",value:function(e){"fileList"in e&&this.setState({fileList:e.fileList||[]})}},{key:"clearProgressTimer",value:function(){clearInterval(this.progressTimer)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=void 0===n?"":n,r=t.showUploadList,i=t.listType,l=t.onPreview,u=t.type,c=t.disabled,d=t.children,p=t.className,f=(0,s.default)({onStart:this.onStart,onError:this.onError,onProgress:this.onProgress,onSuccess:this.onSuccess},this.props,{beforeUpload:this.beforeUpload});delete f.className;var h=r.showRemoveIcon,m=r.showPreviewIcon,v=r?y.default.createElement(P.default,{listType:i,items:this.state.fileList,onPreview:l,onRemove:this.handleManualRemove,showRemoveIcon:h,showPreviewIcon:m,locale:this.getLocale()}):null;if("drag"===u){var g,k=(0,C.default)(a,(g={},(0,o.default)(g,a+"-drag",!0),(0,o.default)(g,a+"-drag-uploading",this.state.fileList.some(function(e){return"uploading"===e.status})),(0,o.default)(g,a+"-drag-hover","dragover"===this.state.dragState),(0,o.default)(g,a+"-disabled",c),g));return y.default.createElement("span",{className:p},y.default.createElement("div",{className:k,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,onDragLeave:this.onFileDrop},y.default.createElement(b.default,(0,s.default)({},f,{ref:"upload",className:a+"-btn"}),y.default.createElement("div",{className:a+"-drag-container"},d))),v)}var w=(0,C.default)(a,(e={},(0,o.default)(e,a+"-select",!0),(0,o.default)(e,a+"-select-"+i,!0),(0,o.default)(e,a+"-disabled",c),e)),E=y.default.createElement("div",{className:w,style:{display:d?"":"none"}},y.default.createElement(b.default,(0,s.default)({},f,{ref:"upload"})));return"picture-card"===i?y.default.createElement("span",{className:p},v,E):y.default.createElement("span",{className:p},E,v)}}]),t}(y.default.Component);t.default=L,L.defaultProps={prefixCls:"ant-upload",type:"select",multiple:!1,action:"",data:{},accept:"",beforeUpload:O.T,showUploadList:!0,listType:"text",className:"",disabled:!1,supportServerRender:!0},L.contextTypes={antLocale:w.default.object},e.exports=t.default},603:function(e,t,n){"use strict";function a(){return"rc-upload-"+r+"-"+ ++o}t.a=a;var r=+new Date,o=0},604:function(e,t,n){"use strict";var a=n(108),r=n.n(a),o=n(109),i=n.n(o),s=n(110),l=n.n(s),u=function(e){return function(e){function t(){return r()(this,t),i()(this,e.apply(this,arguments))}return l()(t,e),t.prototype.componentDidUpdate=function(){if(this.path){var e=this.path.style;e.transitionDuration=".3s, .3s, .3s, .06s";var t=Date.now();this.prevTimeStamp&&t-this.prevTimeStamp<100&&(e.transitionDuration="0s, 0s"),this.prevTimeStamp=Date.now()}},t.prototype.render=function(){return e.prototype.render.call(this)},t}(e)};t.a=u},605:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var a=n(9),r=n.n(a),o={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},i={className:r.a.string,percent:r.a.oneOfType([r.a.number,r.a.string]),prefixCls:r.a.string,strokeColor:r.a.string,strokeLinecap:r.a.oneOf(["butt","round","square"]),strokeWidth:r.a.oneOfType([r.a.number,r.a.string]),style:r.a.object,trailColor:r.a.string,trailWidth:r.a.oneOfType([r.a.number,r.a.string])}},823:function(e,t,n){"use strict";n(499),n(824),n(825),n(574)},824:function(e,t,n){e.exports=n.p+"static/media/index.a3d5860e.less"},825:function(e,t,n){"use strict";n(499),n(826)},826:function(e,t,n){e.exports=n.p+"static/media/index.e4af86a4.less"},827:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(602),o=a(r),i=n(842),s=a(i);o.default.Dragger=s.default,t.default=o.default,e.exports=t.default},828:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(829);t.default=a.a},829:function(e,t,n){"use strict";function a(){}var r=n(487),o=n.n(r),i=n(108),s=n.n(i),l=n(111),u=n.n(l),c=n(109),d=n.n(c),p=n(110),f=n.n(p),h=n(5),m=n.n(h),v=n(9),y=n.n(v),g=n(830),b=n(833),k=function(e){function t(){var e,n,a,r;s()(this,t);for(var o=arguments.length,i=Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=a=d()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={Component:null},a.saveUploader=function(e){a.uploader=e},r=n,d()(a,r)}return f()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.props.supportServerRender&&this.setState({Component:this.getComponent()},this.props.onReady)}},{key:"getComponent",value:function(){return"undefined"!==typeof File?g.a:b.a}},{key:"abort",value:function(e){this.uploader.abort(e)}},{key:"render",value:function(){if(this.props.supportServerRender){var e=this.state.Component;return e?m.a.createElement(e,o()({},this.props,{ref:this.saveUploader})):null}var t=this.getComponent();return m.a.createElement(t,o()({},this.props,{ref:this.saveUploader}))}}]),t}(h.Component);k.propTypes={component:y.a.string,style:y.a.object,prefixCls:y.a.string,action:y.a.string,name:y.a.string,multipart:y.a.bool,onError:y.a.func,onSuccess:y.a.func,onProgress:y.a.func,onStart:y.a.func,data:y.a.oneOfType([y.a.object,y.a.func]),headers:y.a.object,accept:y.a.string,multiple:y.a.bool,disabled:y.a.bool,beforeUpload:y.a.func,customRequest:y.a.func,onReady:y.a.func,withCredentials:y.a.bool,supportServerRender:y.a.bool},k.defaultProps={component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onReady:a,onStart:a,onError:a,onSuccess:a,supportServerRender:!1,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1},t.a=k},830:function(e,t,n){"use strict";var a=n(487),r=n.n(a),o=n(489),i=n.n(o),s=n(108),l=n.n(s),u=n(111),c=n.n(u),d=n(109),p=n.n(d),f=n(110),h=n.n(f),m=n(5),v=n.n(m),y=n(9),g=n.n(y),b=n(488),k=n.n(b),w=n(831),E=n(603),C=n(832),_=function(e){function t(){var e,n,a,r;l()(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=a=p()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={uid:Object(E.a)()},a.reqs={},a.onChange=function(e){var t=e.target.files;a.uploadFiles(t),a.reset()},a.onClick=function(){var e=a.fileInput;e&&e.click()},a.onKeyDown=function(e){"Enter"===e.key&&a.onClick()},a.onFileDrop=function(e){if("dragover"===e.type)return void e.preventDefault();var t=Array.prototype.slice.call(e.dataTransfer.files).filter(function(e){return Object(C.a)(e,a.props.accept)});a.uploadFiles(t),e.preventDefault()},a.saveFileInput=function(e){a.fileInput=e},r=n,p()(a,r)}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"uploadFiles",value:function(e){var t=this,n=Array.prototype.slice.call(e);n.forEach(function(e){e.uid=Object(E.a)(),t.upload(e,n)})}},{key:"upload",value:function(e,t){var n=this,a=this.props;if(!a.beforeUpload)return setTimeout(function(){return n.post(e)},0);var r=a.beforeUpload(e,t);r&&r.then?r.then(function(t){var a=Object.prototype.toString.call(t);"[object File]"===a||"[object Blob]"===a?n.post(t):n.post(e)}).catch(function(e){console&&console.log(e)}):!1!==r&&setTimeout(function(){return n.post(e)},0)}},{key:"post",value:function(e){var t=this;if(this._isMounted){var n=this.props,a=n.data,r=n.onStart,o=n.onProgress;"function"===typeof a&&(a=a(e));var i=e.uid,s=n.customRequest||w.a;this.reqs[i]=s({action:n.action,filename:n.name,file:e,data:a,headers:n.headers,withCredentials:n.withCredentials,onProgress:o?function(t){o(t,e)}:null,onSuccess:function(a,r){delete t.reqs[i],n.onSuccess(a,e,r)},onError:function(a,r){delete t.reqs[i],n.onError(a,r,e)}}),r(e)}}},{key:"reset",value:function(){this.setState({uid:Object(E.a)()})}},{key:"abort",value:function(e){var t=this.reqs;if(e){var n=e;e&&e.uid&&(n=e.uid),t[n]&&(t[n].abort(),delete t[n])}else Object.keys(t).forEach(function(e){t[e]&&t[e].abort(),delete t[e]})}},{key:"render",value:function(){var e,t=this.props,n=t.component,a=t.prefixCls,o=t.className,s=t.disabled,l=t.style,u=t.multiple,c=t.accept,d=t.children,p=k()((e={},i()(e,a,!0),i()(e,a+"-disabled",s),i()(e,o,o),e)),f=s?{}:{onClick:this.onClick,onKeyDown:this.onKeyDown,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:"0"};return v.a.createElement(n,r()({},f,{className:p,role:"button",style:l}),v.a.createElement("input",{type:"file",ref:this.saveFileInput,key:this.state.uid,style:{display:"none"},accept:c,multiple:u,onChange:this.onChange}),d)}}]),t}(m.Component);_.propTypes={component:g.a.string,style:g.a.object,prefixCls:g.a.string,className:g.a.string,multiple:g.a.bool,disabled:g.a.bool,accept:g.a.string,children:g.a.any,onStart:g.a.func,data:g.a.oneOfType([g.a.object,g.a.func]),headers:g.a.object,beforeUpload:g.a.func,customRequest:g.a.func,onProgress:g.a.func,withCredentials:g.a.bool},t.a=_},831:function(e,t,n){"use strict";function a(e,t){var n="cannot post "+e.action+" "+t.status+"'",a=new Error(n);return a.status=t.status,a.method="post",a.url=e.action,a}function r(e){var t=e.responseText||e.response;if(!t)return t;try{return JSON.parse(t)}catch(e){return t}}function o(e){var t=new XMLHttpRequest;e.onProgress&&t.upload&&(t.upload.onprogress=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.onProgress(t)});var n=new FormData;e.data&&Object.keys(e.data).map(function(t){n.append(t,e.data[t])}),n.append(e.filename,e.file),t.onerror=function(t){e.onError(t)},t.onload=function(){if(t.status<200||t.status>=300)return e.onError(a(e,t),r(t));e.onSuccess(r(t),t)},t.open("post",e.action,!0),e.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);var o=e.headers||{};null!==o["X-Requested-With"]&&t.setRequestHeader("X-Requested-With","XMLHttpRequest");for(var i in o)o.hasOwnProperty(i)&&null!==o[i]&&t.setRequestHeader(i,o[i]);return t.send(n),{abort:function(){t.abort()}}}t.a=o},832:function(e,t,n){"use strict";function a(e,t){return-1!==e.indexOf(t,e.length-t.length)}t.a=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim();return"."===t.charAt(0)?a(r.toLowerCase(),t.toLowerCase()):/\/\*$/.test(t)?i===t.replace(/\/.*$/,""):o===t})}return!0}},833:function(e,t,n){"use strict";var a=n(489),r=n.n(a),o=n(487),i=n.n(o),s=n(108),l=n.n(s),u=n(111),c=n.n(u),d=n(109),p=n.n(d),f=n(110),h=n.n(f),m=n(5),v=n.n(m),y=n(9),g=n.n(y),b=n(112),k=n.n(b),w=n(488),E=n.n(w),C=n(603),_=n(834),P=n.n(_),O={position:"absolute",top:0,opacity:0,filter:"alpha(opacity=0)",left:0,zIndex:9999},x=function(e){function t(){var e,n,a,r;l()(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=a=p()(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={uploading:!1},a.file={},a.onLoad=function(){if(a.state.uploading){var e=a,t=e.props,n=e.file,r=void 0;try{var o=a.getIframeDocument(),i=o.getElementsByTagName("script")[0];i&&i.parentNode===o.body&&o.body.removeChild(i),r=o.body.innerHTML,t.onSuccess(r,n)}catch(e){P()(!1,"cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload"),r="cross-domain",t.onError(e,null,n)}a.endUpload()}},a.onChange=function(){var e=a.getFormInputNode(),t=a.file={uid:Object(C.a)(),name:e.value};a.startUpload();var n=a,r=n.props;if(!r.beforeUpload)return a.post(t);var o=r.beforeUpload(t);o&&o.then?o.then(function(){a.post(t)},function(){a.endUpload()}):!1!==o?a.post(t):a.endUpload()},a.saveIframe=function(e){a.iframe=e},r=n,p()(a,r)}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){this.updateIframeWH(),this.initIframe()}},{key:"componentDidUpdate",value:function(){this.updateIframeWH()}},{key:"getIframeNode",value:function(){return this.iframe}},{key:"getIframeDocument",value:function(){return this.getIframeNode().contentDocument}},{key:"getFormNode",value:function(){return this.getIframeDocument().getElementById("form")}},{key:"getFormInputNode",value:function(){return this.getIframeDocument().getElementById("input")}},{key:"getFormDataNode",value:function(){return this.getIframeDocument().getElementById("data")}},{key:"getFileForMultiple",value:function(e){return this.props.multiple?[e]:e}},{key:"getIframeHTML",value:function(e){var t="",n="";if(e){t='<script>document.domain="'+e+'";<\/script>',n='<input name="_documentDomain" value="'+e+'" />'}return'\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    '+t+'\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="'+this.props.action+'" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="'+this.props.name+'"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    '+n+'\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    '}},{key:"initIframeSrc",value:function(){this.domain&&(this.getIframeNode().src="javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain='"+this.domain+"';\n        d.write('');\n        d.close();\n      })())")}},{key:"initIframe",value:function(){var e=this.getIframeNode(),t=e.contentWindow,n=void 0;this.domain=this.domain||"",this.initIframeSrc();try{n=t.document}catch(a){this.domain=document.domain,this.initIframeSrc(),t=e.contentWindow,n=t.document}n.open("text/html","replace"),n.write(this.getIframeHTML(this.domain)),n.close(),this.getFormInputNode().onchange=this.onChange}},{key:"endUpload",value:function(){this.state.uploading&&(this.file={},this.state.uploading=!1,this.setState({uploading:!1}),this.initIframe())}},{key:"startUpload",value:function(){this.state.uploading||(this.state.uploading=!0,this.setState({uploading:!0}))}},{key:"updateIframeWH",value:function(){var e=k.a.findDOMNode(this),t=this.getIframeNode();t.style.height=e.offsetHeight+"px",t.style.width=e.offsetWidth+"px"}},{key:"abort",value:function(e){if(e){var t=e;e&&e.uid&&(t=e.uid),t===this.file.uid&&this.endUpload()}else this.endUpload()}},{key:"post",value:function(e){var t=this.getFormNode(),n=this.getFormDataNode(),a=this.props.data,r=this.props.onStart;"function"===typeof a&&(a=a(e));var o=document.createDocumentFragment();for(var i in a)if(a.hasOwnProperty(i)){var s=document.createElement("input");s.setAttribute("name",i),s.value=a[i],o.appendChild(s)}n.appendChild(o),t.submit(),n.innerHTML="",r(e)}},{key:"render",value:function(){var e,t=this.props,n=t.component,a=t.disabled,o=t.className,s=t.prefixCls,l=t.children,u=t.style,c=i()({},O,{display:this.state.uploading||a?"none":""}),d=E()((e={},r()(e,s,!0),r()(e,s+"-disabled",a),r()(e,o,o),e));return v.a.createElement(n,{className:d,style:i()({position:"relative",zIndex:0},u)},v.a.createElement("iframe",{ref:this.saveIframe,onLoad:this.onLoad,style:c}),l)}}]),t}(m.Component);x.propTypes={component:g.a.string,style:g.a.object,disabled:g.a.bool,prefixCls:g.a.string,className:g.a.string,accept:g.a.string,onStart:g.a.func,multiple:g.a.bool,children:g.a.any,data:g.a.oneOfType([g.a.object,g.a.func]),action:g.a.string,name:g.a.string},t.a=x},834:function(e,t,n){"use strict";var a=function(){};e.exports=a},835:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(489),o=a(r),i=n(487),s=a(i),l=n(108),u=a(l),c=n(111),d=a(c),p=n(109),f=a(p),h=n(110),m=a(h),v=n(5),y=a(v),g=n(513),b=a(g),k=n(494),w=a(k),E=n(575),C=a(E),_=n(836),P=a(_),O=n(488),x=a(O),L=function(e,t){var n=new FileReader;n.onloadend=function(){return t(n.result)},n.readAsDataURL(e)},N=function(e){function t(){(0,u.default)(this,t);var e=(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.handleClose=function(t){var n=e.props.onRemove;n&&n(t)},e.handlePreview=function(t,n){var a=e.props.onPreview;if(a)return n.preventDefault(),a(t)},e}return(0,m.default)(t,e),(0,d.default)(t,[{key:"componentDidUpdate",value:function(){var e=this;"picture"!==this.props.listType&&"picture-card"!==this.props.listType||(this.props.items||[]).forEach(function(t){"undefined"!==typeof document&&"undefined"!==typeof window&&window.FileReader&&window.File&&t.originFileObj instanceof File&&void 0===t.thumbUrl&&(t.thumbUrl="",L(t.originFileObj,function(n){t.thumbUrl=n,e.forceUpdate()}))})}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.prefixCls,r=n.items,i=void 0===r?[]:r,l=n.listType,u=n.showPreviewIcon,c=n.showRemoveIcon,d=n.locale,p=i.map(function(e){var n,r=void 0,i=y.default.createElement(w.default,{type:"uploading"===e.status?"loading":"paper-clip"});if("picture"!==l&&"picture-card"!==l||(i="uploading"===e.status||!e.thumbUrl&&!e.url?"picture-card"===l?y.default.createElement("div",{className:a+"-list-item-uploading-text"},d.uploading):y.default.createElement(w.default,{className:a+"-list-item-thumbnail",type:"picture"}):y.default.createElement("a",{className:a+"-list-item-thumbnail",onClick:function(n){return t.handlePreview(e,n)},href:e.url||e.thumbUrl,target:"_blank",rel:"noopener noreferrer"},y.default.createElement("img",{src:e.thumbUrl||e.url,alt:e.name}))),"uploading"===e.status){var p="percent"in e?y.default.createElement(P.default,(0,s.default)({type:"line"},t.props.progressAttr,{percent:e.percent})):null;r=y.default.createElement("div",{className:a+"-list-item-progress",key:"progress"},p)}var f=(0,x.default)((n={},(0,o.default)(n,a+"-list-item",!0),(0,o.default)(n,a+"-list-item-"+e.status,!0),n)),h=e.url?y.default.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:a+"-list-item-name",onClick:function(n){return t.handlePreview(e,n)},title:e.name},e.name):y.default.createElement("span",{className:a+"-list-item-name",onClick:function(n){return t.handlePreview(e,n)},title:e.name},e.name),m=e.url||e.thumbUrl?void 0:{pointerEvents:"none",opacity:.5},v=u?y.default.createElement("a",{href:e.url||e.thumbUrl,target:"_blank",rel:"noopener noreferrer",style:m,onClick:function(n){return t.handlePreview(e,n)},title:d.previewFile},y.default.createElement(w.default,{type:"eye-o"})):null,g=c?y.default.createElement(w.default,{type:"delete",title:d.removeFile,onClick:function(){return t.handleClose(e)}}):null,k=c?y.default.createElement(w.default,{type:"cross",title:d.removeFile,onClick:function(){return t.handleClose(e)}}):null,E="picture-card"===l&&"uploading"!==e.status?y.default.createElement("span",{className:a+"-list-item-actions"},v,g):k,_=void 0;_=e.response&&"string"===typeof e.response?e.response:e.error&&e.error.statusText||d.uploadError;var O="error"===e.status?y.default.createElement(C.default,{title:_},i,h):y.default.createElement("span",null,i,h);return y.default.createElement("div",{className:f,key:e.uid},y.default.createElement("div",{className:a+"-list-item-info"},O),E,y.default.createElement(b.default,{transitionName:"fade",component:""},r))}),f=(0,x.default)((e={},(0,o.default)(e,a+"-list",!0),(0,o.default)(e,a+"-list-"+l,!0),e)),h="picture-card"===l?"animate-inline":"animate";return y.default.createElement(b.default,{transitionName:a+"-"+h,component:"div",className:f},p)}}]),t}(y.default.Component);t.default=N,N.defaultProps={listType:"text",progressAttr:{strokeWidth:2,showInfo:!1},prefixCls:"ant-upload",showRemoveIcon:!0,showPreviewIcon:!0},e.exports=t.default},836:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(837),r=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=r.default,e.exports=t.default},837:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(487),o=a(r),i=n(489),s=a(i),l=n(108),u=a(l),c=n(111),d=a(c),p=n(109),f=a(p),h=n(110),m=a(h),v=n(9),y=a(v),g=n(5),b=a(g),k=n(494),w=a(k),E=n(838),C=n(488),_=a(C),P=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]]);return n},O={normal:"#108ee9",exception:"#ff5500",success:"#87d068"},x=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,r=t.percent,i=void 0===r?0:r,l=t.status,u=t.format,c=t.trailColor,d=t.type,p=t.strokeWidth,f=t.width,h=t.showInfo,m=t.gapDegree,v=void 0===m?0:m,y=t.gapPosition,g=P(t,["prefixCls","className","percent","status","format","trailColor","type","strokeWidth","width","showInfo","gapDegree","gapPosition"]),k=parseInt(i.toString(),10)>=100&&!("status"in t)?"success":l||"normal",C=void 0,x=void 0,L=u||function(e){return e+"%"};if(h){var N=void 0,D="circle"===d||"dashboard"===d?"":"-circle";N="exception"===k?u?L(i):b.default.createElement(w.default,{type:"cross"+D}):"success"===k?u?L(i):b.default.createElement(w.default,{type:"check"+D}):L(i),C=b.default.createElement("span",{className:n+"-text"},N)}if("line"===d){var I={width:i+"%",height:p||10};x=b.default.createElement("div",null,b.default.createElement("div",{className:n+"-outer"},b.default.createElement("div",{className:n+"-inner"},b.default.createElement("div",{className:n+"-bg",style:I}))),C)}else if("circle"===d||"dashboard"===d){var S=f||132,j={width:S,height:S,fontSize:.16*S+6},U=p||6,F=y||"dashboard"===d&&"bottom"||"top",T=v||"dashboard"===d&&75;x=b.default.createElement("div",{className:n+"-inner",style:j},b.default.createElement(E.Circle,{percent:i,strokeWidth:U,trailWidth:U,strokeColor:O[k],trailColor:c,prefixCls:n,gapDegree:T,gapPosition:F}),C)}var M=(0,_.default)(n,(e={},(0,s.default)(e,n+"-"+("dashboard"===d&&"circle"||d),!0),(0,s.default)(e,n+"-status-"+k,!0),(0,s.default)(e,n+"-show-info",h),e),a);return b.default.createElement("div",(0,o.default)({},g,{className:M}),x)}}]),t}(b.default.Component);t.default=x,x.defaultProps={type:"line",percent:0,showInfo:!0,trailColor:"#f3f3f3",prefixCls:"ant-progress"},x.propTypes={status:y.default.oneOf(["normal","exception","active","success"]),type:y.default.oneOf(["line","circle","dashboard"]),showInfo:y.default.bool,percent:y.default.number,width:y.default.number,strokeWidth:y.default.number,trailColor:y.default.string,format:y.default.func,gapDegree:y.default.number},e.exports=t.default},838:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(839),r=n(840);n.d(t,"Line",function(){return a.a}),n.d(t,"Circle",function(){return r.a}),t.default={Line:a.a,Circle:r.a}},839:function(e,t,n){"use strict";var a=n(487),r=n.n(a),o=n(503),i=n.n(o),s=n(108),l=n.n(s),u=n(109),c=n.n(u),d=n(110),p=n.n(d),f=n(5),h=n.n(f),m=n(604),v=n(605),y=function(e){function t(){return l()(this,t),c()(this,e.apply(this,arguments))}return p()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.className,a=t.percent,o=t.prefixCls,s=t.strokeColor,l=t.strokeLinecap,u=t.strokeWidth,c=t.style,d=t.trailColor,p=t.trailWidth,f=i()(t,["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth"]);delete f.gapPosition;var m={strokeDasharray:"100px, 100px",strokeDashoffset:100-a+"px",transition:"stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear"},v=u/2,y=100-u/2,g="M "+("round"===l?v:0)+","+v+"\n           L "+("round"===l?y:100)+","+v,b="0 0 100 "+u;return h.a.createElement("svg",r()({className:o+"-line "+n,viewBox:b,preserveAspectRatio:"none",style:c},f),h.a.createElement("path",{className:o+"-line-trail",d:g,strokeLinecap:l,stroke:d,strokeWidth:p||u,fillOpacity:"0"}),h.a.createElement("path",{className:o+"-line-path",d:g,strokeLinecap:l,stroke:s,strokeWidth:u,fillOpacity:"0",ref:function(t){e.path=t},style:m}))},t}(f.Component);y.propTypes=v.b,y.defaultProps=v.a,t.a=Object(m.a)(y)},840:function(e,t,n){"use strict";var a=n(487),r=n.n(a),o=n(503),i=n.n(o),s=n(108),l=n.n(s),u=n(109),c=n.n(u),d=n(110),p=n.n(d),f=n(5),h=n.n(f),m=n(9),v=n.n(m),y=n(604),g=n(605),b=function(e){function t(){return l()(this,t),c()(this,e.apply(this,arguments))}return p()(t,e),t.prototype.getPathStyles=function(){var e=this.props,t=e.percent,n=e.strokeWidth,a=e.gapDegree,r=void 0===a?0:a,o=e.gapPosition,i=50-n/2,s=0,l=-i,u=0,c=-2*i;switch(o){case"left":s=-i,l=0,u=2*i,c=0;break;case"right":s=i,l=0,u=-2*i,c=0;break;case"bottom":l=i,c=2*i}var d="M 50,50 m "+s+","+l+"\n     a "+i+","+i+" 0 1 1 "+u+","+-c+"\n     a "+i+","+i+" 0 1 1 "+-u+","+c,p=2*Math.PI*i;return{pathString:d,trailPathStyle:{strokeDasharray:p-r+"px "+p+"px",strokeDashoffset:"-"+r/2+"px",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"},strokePathStyle:{strokeDasharray:t/100*(p-r)+"px "+p+"px",strokeDashoffset:"-"+r/2+"px",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s"}}},t.prototype.render=function(){var e=this,t=this.props,n=t.prefixCls,a=t.strokeWidth,o=t.trailWidth,s=t.strokeColor,l=(t.percent,t.trailColor),u=t.strokeLinecap,c=t.style,d=t.className,p=i()(t,["prefixCls","strokeWidth","trailWidth","strokeColor","percent","trailColor","strokeLinecap","style","className"]),f=this.getPathStyles(),m=f.pathString,v=f.trailPathStyle,y=f.strokePathStyle;return delete p.percent,delete p.gapDegree,delete p.gapPosition,h.a.createElement("svg",r()({className:n+"-circle "+d,viewBox:"0 0 100 100",style:c},p),h.a.createElement("path",{className:n+"-circle-trail",d:m,stroke:l,strokeWidth:o||a,fillOpacity:"0",style:v}),h.a.createElement("path",{className:n+"-circle-path",d:m,strokeLinecap:u,stroke:s,strokeWidth:0===this.props.percent?0:a,fillOpacity:"0",ref:function(t){e.path=t},style:y}))},t}(f.Component);b.propTypes=r()({},g.b,{gapPosition:v.a.oneOf(["top","bottom","left","right"])}),b.defaultProps=r()({},g.a,{gapPosition:"top"}),t.a=Object(y.a)(b)},841:function(e,t,n){"use strict";function a(){return!0}function r(e){return{lastModified:e.lastModified,lastModifiedDate:e.lastModifiedDate,name:e.filename||e.name,size:e.size,type:e.type,uid:e.uid,response:e.response,error:e.error,percent:0,originFileObj:e,status:null}}function o(){var e=.1;return function(t){var n=t;return n>=.98?n:(n+=e,e-=.01,e<.001&&(e=.001),100*n)}}function i(e,t){var n=void 0!==e.uid?"uid":"name";return t.filter(function(t){return t[n]===e[n]})[0]}function s(e,t){var n=void 0!==e.uid?"uid":"name",a=t.filter(function(t){return t[n]!==e[n]});return a.length===t.length?null:a}Object.defineProperty(t,"__esModule",{value:!0}),t.T=a,t.fileToObject=r,t.genPercentAdd=o,t.getFileItem=i,t.removeFileItem=s},842:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(487),o=a(r),i=n(108),s=a(i),l=n(111),u=a(l),c=n(109),d=a(c),p=n(110),f=a(p),h=n(5),m=a(h),v=n(602),y=a(v),g=function(e){function t(){return(0,s.default)(this,t),(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props;return m.default.createElement(y.default,(0,o.default)({},e,{type:"drag",style:(0,o.default)({},e.style,{height:e.height})}))}}]),t}(m.default.Component);t.default=g,e.exports=t.default}});