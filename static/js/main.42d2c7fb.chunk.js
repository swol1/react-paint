(this["webpackJsonpreact-paint"]=this["webpackJsonpreact-paint"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(3),o=n.n(a),u=n(1),i=c.a.memo((function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1];return c.a.createElement("label",{className:"header-name"},c.a.createElement("input",{value:n,onChange:function(e){return a(e.target.value)},onClick:function(e){return e.target.setSelectionRange(0,e.target.value.length)},placeholder:"Untitled"}))}));function l(e){var t=Object(r.useState)([window.innerWidth,window.innerHeight]),n=Object(u.a)(t,2),c=Object(u.a)(n[0],2),a=c[0],o=c[1],i=n[1];return Object(r.useEffect)((function(){var t=function(){e(),i([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),[a,o]}var s=Object(r.forwardRef)((function(e,t){var n=Object(r.useState)(!1),a=Object(u.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(window.innerWidth),f=Object(u.a)(s,2),d=f[0],h=f[1],m=Object(r.useState)(window.innerHeight),b=Object(u.a)(m,2),v=b[0],w=b[1],p=Object(r.useRef)(),j=Object(r.useRef)();Object(r.useEffect)((function(){j.current=p.current.getContext("2d")}),[]);var O=l((function(){h(window.innerWidth),w(window.innerHeight)})),E=Object(u.a)(O,2),g=E[0],C=E[1];function k(){j.current.closePath(),i(!1)}return Object(r.useImperativeHandle)(t,(function(){return{handleClear:function(){j.current=p.current.getContext("2d"),j.current.clearRect(0,0,g,C)}}})),c.a.createElement(c.a.Fragment,null,c.a.createElement("canvas",{ref:p,width:e.width||d,height:e.height||v,onMouseDown:function(t){j.current.lineJoin="round",j.current.lineCap="round",j.current.lineWidth=6,j.current.strokeStyle=e.color,j.current.beginPath(),j.current.moveTo(t.clientX-p.current.offsetLeft,t.clientY-p.current.offsetTop),i(!0)},onMouseUp:k,onMouseOut:k,onMouseMove:function(t){var n,r=[t.clientX-p.current.offsetLeft,t.clientY-p.current.offsetTop];o&&((n=j.current).lineTo.apply(n,r),j.current.stroke()),e.handleMouseMove&&e.handleMouseMove.apply(e,r)}}))}));function f(e){var t=e.colors,n=void 0===t?[]:t,r=e.activeColor,a=e.setActiveColor;return n.length?c.a.createElement("fieldset",{className:"color-picker"},n.map((function(e,t){return c.a.createElement("label",{key:t},c.a.createElement("input",{name:"color",type:"radio",value:e,checked:r===e,onChange:function(){return a(e)}}),c.a.createElement("span",{style:{background:e}}))}))):null}var d=c.a.memo((function(e){var t=e.cb;return c.a.createElement("button",{className:"button-refresh-colors",onClick:t},"\u21ba Get new colors")})),h=n(4),m=n.n(h);function b(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(null),h=Object(u.a)(o,2),b=h[0],v=h[1],w=Object(r.useRef)({offsetHeight:0}),p=Object(r.useCallback)((function(){var e=m()().slice(1);fetch("https://www.thecolorapi.com/scheme?hex=".concat(e,"&mode=monochrome")).then((function(e){return e.json()})).then((function(e){a(e.colors.map((function(e){return e.hex.value}))),v(e.colors[0].hex.value)}))}),[]);Object(r.useEffect)(p,[]);var j=Object(r.useState)(!1),O=Object(u.a)(j,2),E=O[0],g=O[1],C=Object(r.useRef)(),k=l((function(){g(!0),clearTimeout(C.current),C.current=setTimeout((function(){return g(!1)}),500)})),S=Object(u.a)(k,2),y=S[0],M=S[1],x=Object(r.useRef)();return c.a.createElement("div",{className:"app"},c.a.createElement("header",{ref:w,style:{borderTop:"10px solid ".concat(b)}},c.a.createElement("div",null,c.a.createElement(i,null)),c.a.createElement("div",{style:{marginTop:10}},c.a.createElement(f,{colors:n,activeColor:b,setActiveColor:v}),c.a.createElement(d,{cb:p}),c.a.createElement("button",{className:"button-clear-colors",onClick:function(){return x.current.handleClear()}},"Clear canvas"))),b&&c.a.createElement(s,{color:b,height:window.innerHeight-w.current.offsetHeight-15,ref:x}),c.a.createElement("div",{className:"window-size ".concat(E?"":"hidden")},y," x ",M))}n(11);o.a.render(c.a.createElement((function(){return c.a.createElement(b,null)}),null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.42d2c7fb.chunk.js.map