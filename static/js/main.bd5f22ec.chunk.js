(this["webpackJsonpreact-paint"]=this["webpackJsonpreact-paint"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(3),a=n.n(o),i=n(1),u=c.a.memo((function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];return c.a.createElement("label",{className:"header-name"},c.a.createElement("input",{value:n,onChange:function(e){return o(e.target.value)},onClick:function(e){return e.target.setSelectionRange(0,e.target.value.length)},placeholder:"Untitled"}))}));function l(e){var t=Object(r.useState)([window.innerWidth,window.innerHeight]),n=Object(i.a)(t,2),c=Object(i.a)(n[0],2),o=c[0],a=c[1],u=n[1];return Object(r.useEffect)((function(){var t=function(){e(),u([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),[o,a]}function s(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),o=n[0],a=n[1],u=Object(r.useState)(window.innerWidth),s=Object(i.a)(u,2),f=s[0],d=s[1],h=Object(r.useState)(window.innerHeight),m=Object(i.a)(h,2),b=m[0],v=m[1],w=Object(r.useRef)(),p=Object(r.useRef)();Object(r.useEffect)((function(){p.current=w.current.getContext("2d")}),[]);var j=l((function(){d(window.innerWidth),v(window.innerHeight)})),O=Object(i.a)(j,2);O[0],O[1];function E(){p.current.closePath(),a(!1)}return c.a.createElement("canvas",{ref:w,width:e.width||f,height:e.height||b,onMouseDown:function(t){p.current.lineJoin="round",p.current.lineCap="round",p.current.lineWidth=10,p.current.strokeStyle=e.color,p.current.beginPath(),p.current.moveTo(t.clientX-w.current.offsetLeft,t.clientY-w.current.offsetTop),a(!0)},onMouseUp:E,onMouseOut:E,onMouseMove:function(t){var n,r=[t.clientX-w.current.offsetLeft,t.clientY-w.current.offsetTop];o&&((n=p.current).lineTo.apply(n,r),p.current.stroke()),e.handleMouseMove&&e.handleMouseMove.apply(e,r)}})}function f(e){var t=e.colors,n=void 0===t?[]:t,r=e.activeColor,o=e.setActiveColor;return n.length?c.a.createElement("fieldset",{className:"color-picker"},n.map((function(e,t){return c.a.createElement("label",{key:t},c.a.createElement("input",{name:"color",type:"radio",value:e,checked:r===e,onChange:function(){return o(e)}}),c.a.createElement("span",{style:{background:e}}))}))):null}var d=c.a.memo((function(e){var t=e.cb;return c.a.createElement("button",{className:"button-refresh-colors",onClick:t},"\u21ba")})),h=n(4),m=n.n(h);function b(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(null),h=Object(i.a)(a,2),b=h[0],v=h[1],w=Object(r.useRef)({offsetHeight:0}),p=Object(r.useCallback)((function(){var e=m()().slice(1);fetch("https://www.thecolorapi.com/scheme?hex=".concat(e,"&mode=monochrome")).then((function(e){return e.json()})).then((function(e){o(e.colors.map((function(e){return e.hex.value}))),v(e.colors[0].hex.value)}))}),[]);Object(r.useEffect)(p,[]);var j=Object(r.useState)(!1),O=Object(i.a)(j,2),E=O[0],g=O[1],k=Object(r.useRef)(),C=l((function(){g(!0),clearTimeout(k.current),k.current=setTimeout((function(){return g(!1)}),500)})),S=Object(i.a)(C,2),y=S[0],M=S[1];return c.a.createElement("div",{className:"app"},c.a.createElement("header",{ref:w,style:{borderTop:"10px solid ".concat(b)}},c.a.createElement("div",null,c.a.createElement(u,null)),c.a.createElement("div",{style:{marginTop:10}},c.a.createElement(f,{colors:n,activeColor:b,setActiveColor:v}),c.a.createElement(d,{cb:p}))),b&&c.a.createElement(s,{color:b,height:window.innerHeight-w.current.offsetHeight-15}),c.a.createElement("div",{className:"window-size ".concat(E?"":"hidden")},y," x ",M))}n(11);a.a.render(c.a.createElement((function(){return c.a.createElement(b,null)}),null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.bd5f22ec.chunk.js.map