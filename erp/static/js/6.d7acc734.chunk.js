webpackJsonp([6],{483:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(520),r=(a.n(n),a(521)),i=a.n(r),s=a(490),l=(a.n(s),a(491)),o=a.n(l),u=a(496),c=(a.n(u),a(497)),d=a.n(c),f=a(527),m=(a.n(f),a(528)),p=a.n(m),h=a(865),v=(a.n(h),a(867)),y=a.n(v),_=a(6),w=a.n(_),E=a(113),k=a.n(E),x=a(108),g=a.n(x),b=a(111),q=a.n(b),W=a(109),C=a.n(W),O=a(110),T=a.n(O),N=a(505),P=(a.n(N),a(506)),S=a.n(P),j=a(5),M=a.n(j),z=a(187),F=(a.n(z),a(20)),I=o.a.Item,D=(S.a.prompt,function(e){function t(e){g()(this,t);var a=C()(this,(t.__proto__||k()(t)).call(this,e));return a.state={works:[],totalWages:0,selectedIndex:0},a}return T()(t,e),q()(t,[{key:"componentDidMount",value:function(){this.handleQuery(0),window.dd.biz.navigation.setLeft({control:!0,text:"\u8fd4\u56de",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setTitle({title:"\u67e5\u770b\u6211\u7684\u8ba1\u4ef6\u7edf\u8ba1",onSuccess:function(e){},onFail:function(e){}}),window.dd.biz.navigation.setRight({show:!0,control:!0,text:"...",onSuccess:function(e){},onFail:function(e){}})}},{key:"handleQuery",value:function(e){var t=this,a=null;0===e?a="today":1===e?a="thisweek":2===e?a="thismonth":3===e?a="thisyear":4===e&&(a="total"),Object(F.d)({url:"rest/erp/userWork/queryMyWork?filter="+w()({cycle:a}),type:"get",success:function(a){var n=function(e){for(var t=0;t<r.length;t++)if(r[t].work_date===e)return r[t];return null},r=[],i=0;a.data.forEach(function(e){1!==e.status&&2!==e.status||(i+=e.process_price*e.quantity),n(e.work_date)?(n(e.work_date).wages=n(e.work_date).wages+e.process_price*e.quantity,n(e.work_date).processs.push({name:e.process_name,price:e.process_price,quantity:e.quantity})):r.push({work_date:e.work_date,status:e.status,wages:e.process_price*e.quantity,processs:[{name:e.process_name,price:e.process_price,quantity:e.quantity}]})}),t.setState({works:r,totalWages:i,selectedIndex:e})}})}},{key:"render",value:function(){var e=this;return M.a.createElement("div",null,M.a.createElement(y.a,null,"\u53ea\u6709\u7ba1\u7406\u5458\u5ba1\u6838\u901a\u8fc7\u7684\u8ba1\u4ef6\u624d\u4f1a\u8ba1\u7b97\u5de5\u8d44"),M.a.createElement("div",{style:{margin:"0 5px"}},M.a.createElement(p.a,{values:["\u5f53\u65e5","\u5f53\u5468","\u5f53\u6708","\u5f53\u5e74","\u5168\u90e8"],selectedIndex:this.state.selectedIndex,onChange:function(t){var a=t.nativeEvent.selectedSegmentIndex;e.handleQuery(a)}})),M.a.createElement("div",null,M.a.createElement(o.a,null,M.a.createElement(I,{extra:M.a.createElement("b",{style:{color:"red"}},"\xa5",this.state.totalWages)},"\u603b\u5de5\u8d44")),M.a.createElement(d.a,null),this.state.works.map(function(e){var t=null;return e.status?1===e.status?t=M.a.createElement("span",{style:{color:"#00BFFF"}},"\u7ec4\u957f\u5df2\u5ba1\u6838"):2===e.status?t=M.a.createElement("span",{style:{color:"#0000CD"}},"\u7ba1\u7406\u5458\u5df2\u5ba1\u6838"):-1===e.status?t=M.a.createElement("span",{style:{color:"red"}},"\u5ba1\u6838\u672a\u901a\u8fc7"):0===e.status&&(t=M.a.createElement("span",{style:{color:"#ccc"}},"\u672a\u5ba1\u6838")):t=M.a.createElement("span",{style:{color:"#ccc"}},"\u672a\u5ba1\u6838"),M.a.createElement("div",{style:{margin:"10px 5px"}},M.a.createElement(i.a,null,M.a.createElement(i.a.Header,{title:M.a.createElement("div",{style:{width:250}},e.work_date,M.a.createElement("b",null,"\xa0(\xa5",e.wages,")")),extra:t}),M.a.createElement(i.a.Body,null,M.a.createElement(o.a,null,e.processs.map(function(e){return M.a.createElement(I,{extra:e.quantity+"\u4ef6"},M.a.createElement("span",null,e.name)," \xa0",M.a.createElement("span",null,"(\xa5",e.price,")")," \xa0")})))))})))}}]),t}(M.a.Component));D=Object(z.connect)()(D),t.default=D},865:function(e,t,a){"use strict";a(495),a(515),a(866)},866:function(e,t,a){e.exports=a.p+"static/media/index.e276fec4.less"},867:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(487),i=n(r),s=a(108),l=n(s),o=a(111),u=n(o),c=a(109),d=n(c),f=a(110),m=n(f),p=a(488),h=n(p),v=a(5),y=n(v),_=a(516),w=n(_),E=a(868),k=n(E),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]]);return a},g=function(e){function t(e){(0,l.default)(this,t);var a=(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onClick=function(){var e=a.props,t=e.mode,n=e.onClick;n&&n(),"closable"===t&&a.setState({show:!1})},a.state={show:!0},a}return(0,m.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.mode,a=e.icon,n=e.onClick,r=e.children,s=e.className,l=e.prefixCls,o=e.action,u=e.marqueeProps,c=x(e,["mode","icon","onClick","children","className","prefixCls","action","marqueeProps"]),d={},f=null;"closable"===t?f=y.default.createElement("div",{className:l+"-operation",onClick:this.onClick,role:"button","aria-label":"close"},o||y.default.createElement(w.default,{type:"cross",size:"md"})):("link"===t&&(f=y.default.createElement("div",{className:l+"-operation",role:"button","aria-label":"go to detail"},o||y.default.createElement(w.default,{type:"right",size:"md"}))),d.onClick=n);var m=(0,h.default)(l,s);return this.state.show?y.default.createElement("div",(0,i.default)({className:m},c,d,{role:"alert"}),a&&y.default.createElement("div",{className:l+"-icon","aria-hidden":"true"},a),y.default.createElement("div",{className:l+"-content"},y.default.createElement(k.default,(0,i.default)({prefixCls:l,text:r},u))),f):null}}]),t}(y.default.Component);t.default=g,g.defaultProps={prefixCls:"am-notice-bar",mode:"",icon:y.default.createElement(w.default,{type:"voice",size:"xxs"}),onClick:function(){}},e.exports=t.default},868:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(487),i=n(r),s=a(108),l=n(s),o=a(111),u=n(o),c=a(109),d=n(c),f=a(110),m=n(f),p=a(5),h=n(p),v=a(112),y=n(v),_=function(e){function t(){(0,l.default)(this,t);var e=(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={animatedWidth:0,overflowWidth:0},e}return(0,m.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this._measureText(),this._startAnimation()}},{key:"componentDidUpdate",value:function(){this._measureText(),this._marqueeTimer||this._startAnimation()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._marqueeTimer)}},{key:"render",value:function(){var e=this,t=this.props,a=t.prefixCls,n=t.className,r=t.text,s=(0,i.default)({position:"relative",right:this.state.animatedWidth,whiteSpace:"nowrap",display:"inline-block"},this.props.style);return h.default.createElement("div",{className:a+"-marquee-wrap "+n,style:{overflow:"hidden"},role:"marquee"},h.default.createElement("div",{ref:function(t){return e.textRef=t},className:a+"-marquee",style:s},r))}},{key:"_startAnimation",value:function(){var e=this;this._marqueeTimer&&clearTimeout(this._marqueeTimer);var t=this.props.fps,a=1/t*1e3,n=0===this.state.animatedWidth,r=n?this.props.leading:a,i=function t(){var n=e.state.overflowWidth,r=e.state.animatedWidth+1,i=r>n;if(i){if(!e.props.loop)return;r=0}i&&e.props.trailing?e._marqueeTimer=setTimeout(function(){e.setState({animatedWidth:r}),e._marqueeTimer=setTimeout(t,a)},e.props.trailing):(e.setState({animatedWidth:r}),e._marqueeTimer=setTimeout(t,a))};0!==this.state.overflowWidth&&(this._marqueeTimer=setTimeout(i,r))}},{key:"_measureText",value:function(){var e=y.default.findDOMNode(this),t=this.textRef;if(e&&t){var a=e.offsetWidth,n=t.offsetWidth,r=n-a;r!==this.state.overflowWidth&&this.setState({overflowWidth:r})}}}]),t}(h.default.Component);t.default=_,_.defaultProps={text:"",loop:!1,leading:500,trailing:800,fps:40,className:""},e.exports=t.default}});