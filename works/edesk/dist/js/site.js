webpackJsonp([40,42],{628:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),o=l(n),r=a(4),u=l(r),i=a(3),s=l(i),d=a(1),c=l(d),f=(a(18),a(11)),p=a(12),m=a(21),h=l(m),g=p.Upload.Dragger,y=function(e){function t(a){return(0,o["default"])(this,t),(0,u["default"])(this,e.call(this,a))}return(0,s["default"])(t,e),t.prototype.publish=function(){h["default"].ajax({url:"rest/cms/site/publish",success:function(e){alert("\u53d1\u5e03\u6210\u529f")}})},t.prototype.render=function(){var e=h["default"].urlParam.get("token"),t={name:"file",multiple:!0,showUploadList:!1,action:"rest/file/upload",headers:{"X-Auth-Token":e},onChange:function(e){var t=e.file.status;"uploading"!==t&&console.log(e.file,e.fileList),"done"===t?p.message.success(e.file.name+" file uploaded successfully."):"error"===t&&p.message.error(e.file.name+" file upload failed.")}};return c["default"].createElement("div",{style:{margin:20}},c["default"].createElement(p.Button,{type:"primary",onClick:this.publish},"\u53d1\u5e03"),c["default"].createElement("div",{style:{marginTop:16,height:180}},c["default"].createElement(g,t,c["default"].createElement("p",{className:"ant-upload-drag-icon"},c["default"].createElement(p.Icon,{type:"inbox"})),c["default"].createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),c["default"].createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"))))},t}(d.Component);t["default"]=(0,f.connect)()(y),e.exports=t["default"]}});