(this["webpackJsonpvavato-ui-example"]=this["webpackJsonpvavato-ui-example"]||[]).push([[0],{22:function(e,n,t){e.exports=t(34)},23:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);t(23);var a,r=t(0),o=t.n(r),l=t(14),c=t.n(l),i=t(1),u=t(3),s=t(4),d=t(5),m=t(15);function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var x,h,g,b,E=i.default.div(a||(a=f(["\n  background: ",";\n  padding: 16px 24px;\n  text-align: left;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin-bottom: 16px;\n\n  & .title {\n    color: ",";\n    font-weight: 700;\n    font-size: 18px;\n    margin-bottom: 16px;\n  }\n\n  &.raise-on-hover:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  &.card-2 {\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  }\n\n  &.card-3 {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  }\n\n  &.card-4 {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n\n  &.card-5 {\n    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);\n  }\n"])),(function(e){return e.theme.cardBackground}),(function(e){return e.theme.text})),v=i.default.button.attrs((function(e){return{type:"button"}}))(x||(x=f(["\n  background: ",";\n  border: 2px solid\n    ",";\n  color: ",";\n  padding: 5px 13px;\n  line-height: 32px;\n  font-family: Roboto, sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n  margin: 8px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n\n  &.outline {\n    background: none;\n    color: ",";\n  }\n\n  &:hover {\n    background: ",";\n    border: 2px solid\n      ",";\n    transition: 0.5s ease-out;\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background: ",";\n    border: 2px solid\n      ",";\n    cursor: not-allowed;\n  }\n"])),(function(e){return e.primary?e.theme.primary:e.theme.secondary}),(function(e){return e.primary?e.theme.primary:e.theme.secondary}),(function(e){return e.theme.lightText}),(function(e){return e.primary?e.theme.primary:e.theme.secondary}),(function(e){return Object(s.a)(.2,e.primary?e.theme.primary:e.theme.secondary)}),(function(e){return Object(s.a)(.2,e.primary?e.theme.primary:e.theme.secondary)}),(function(e){return Object(s.b)(.2,e.primary?e.theme.primary:e.theme.secondary)}),(function(e){return Object(s.b)(.2,e.primary?e.theme.primary:e.theme.secondary)})),y={primary:"#a29060",secondary:"#6192a1",background:"#f6f6f6",text:"#595a5C",lightText:"#f6f6f6",cardBackground:"#fff",tableHeaders:"#a8a8a8",success:"#259b11",error:"#B61e39",info:"#6092a2",navbarWidth:330},k={primary:y.primary,secondary:y.secondary,success:y.success,error:y.error,info:y.info},w=["children","ref","forwardedRef"];function N(e){var n=Object.assign({},e);return w.forEach((function(e){return delete n[e]})),n}var j,O=Object(i.default)(d.a)(h||(h=f(["\n  margin-right: ",";\n"])),(function(e){return e.haslabel?"16px":"0"})),C=Object(i.default)(v)(g||(g=f(["\n  width: ",";\n  line-height: 1.1em;\n  height: 46px;\n  border-bottom-width: 5px;\n"])),(function(e){return e.children.length?"130px":"auto"})),z=i.default.div(b||(b=f(["\n  display: flex;\n  flex-direction: row;\n  flex-spacing: space-between;\n  align-items: center;\n\n  & span {\n    flex: 1;\n    text-align: center;\n  }\n"])));function T(e){var n=e.icon;return o.a.createElement(C,N(e),o.a.createElement(z,null,o.a.createElement(O,{icon:n,haslabel:e.children&&e.children.length}),e.children&&e.children.length?o.a.createElement("span",null,e.children):[]))}function S(){return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Button>"),o.a.createElement("p",null,"Just a regular HTML ",o.a.createElement("span",{className:"pre"},"button")," with styling applied."),o.a.createElement(E,null,o.a.createElement(v,{onClick:function(){return alert("Clicked")}},"Click me"),o.a.createElement(v,{className:"outline"},"Outline"),o.a.createElement(T,{icon:u.e},"Take a break")))}function H(){return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Card>"),o.a.createElement("p",null,"A raised element representing an item in a list or a section."),o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"A card has a title with className title"),o.a.createElement("div",null,"And a body without any special classes")),o.a.createElement(E,{className:"raise-on-hover"},o.a.createElement("div",{className:"title"},"<Card className=raise-on-hover>"),o.a.createElement("div",null,"When class raise-on-hover is present, the card will raise in elevation when hovered")),o.a.createElement(E,{className:"card-2"},o.a.createElement("div",{className:"title"},"<Card className=card-2>"),o.a.createElement("div",null,"A card may have different elevations with classes card-2, card-3, card-4 and card-5")),o.a.createElement(E,{className:"card-3"},o.a.createElement("div",{className:"title"},"<Card className=card-3>"),o.a.createElement("div",null,"A card may have different elevations with classes card-2, card-3, card-4 and card-5")),o.a.createElement(E,{className:"card-4"},o.a.createElement("div",{className:"title"},"<Card className=card-4>"),o.a.createElement("div",null,"A card may have different elevations with classes card-2, card-3, card-4 and card-5")),o.a.createElement(E,{className:"card-5"},o.a.createElement("div",{className:"title"},"<Card className=card-5>"),o.a.createElement("div",null,"A card may have different elevations with classes card-2, card-3, card-4 and card-5")))}var A,B,R,L=i.default.table(j||(j=f(["\n  width: 100%;\n  margin: 16px 0;\n  border-spacing: 0;\n  border-collapse: collapse;\n  border: none;\n\n  & thead td,\n  & thead th {\n    text-align: left;\n    font-weight: bold;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: ",";\n    padding: 0 8px;\n    border: none;\n    background: #fff;\n  }\n\n  & tbody tr:nth-child(odd) {\n    background: ",";\n  }\n\n  & tr {\n    height: 54px;\n    border: none;\n  }\n\n  & td,\n  & th {\n    border: none !important;\n  }\n\n  & tbody tr.active {\n    background: ",";\n  }\n\n  & tbody td,\n  & tfoot td {\n    font-size: 12px;\n    text-align: left;\n    padding: 0 8px;\n  }\n\n  & td:last-child() {\n    padding-right: 0;\n  }\n\n  & td.number,\n  & th.number {\n    text-align: right;\n  }\n\n  & td a {\n    color: #000 !important;\n    font-weight: 700;\n    text-decoration: underline;\n  }\n\n  & td.total {\n    font-weight: 700;\n    text-align: right;\n  }\n"])),(function(e){return e.theme.tableHeaders}),(function(e){return e.theme.background}),(function(e){return Object(s.c)(e.theme.secondary,.1)})),F=i.default.span(A||(A=f(["\n  display: inline-block;\n  background: ",";\n  padding: 4px 8px;\n  min-width: 70px;\n  color: ",";\n  text-align: center;\n  margin: 4px 8px 4px 0px;\n  border-radius: 18px;\n  font-size: 11px;\n  line-height: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n  box-sizing: content-box;\n\n  &.primary {\n    background: ",";\n    color: ",";\n  }\n\n  &.secondary {\n    background: ",";\n    color: ",";\n  }\n\n  &.success {\n    background: ",";\n    color: ",";\n  }\n\n  &.error {\n    background: ",";\n    color: ",";\n  }\n\n  &.info {\n    background: ",";\n    color: ",";\n  }\n"])),(function(e){return Object(s.c)(e.theme.text,.2)}),(function(e){return e.theme.text}),(function(e){return Object(s.c)(e.theme.primary,.2)}),(function(e){return e.theme.primary}),(function(e){return Object(s.c)(e.theme.secondary,.2)}),(function(e){return e.theme.secondary}),(function(e){return Object(s.c)(e.theme.success,.2)}),(function(e){return e.theme.success}),(function(e){return Object(s.c)(e.theme.error,.2)}),(function(e){return e.theme.error}),(function(e){return Object(s.c)(e.theme.info,.2)}),(function(e){return e.theme.info})),M=i.default.nav(B||(B=f(["\n  visibility: ",";\n  ","\n  background: white;\n  position: fixed;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  padding: 24px 16px;\n  min-width: 300px;\n  overflow-y: auto;\n  z-index: 3;\n\n  & > ul {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    padding: 0;\n    text-indent: 0;\n    list-style-type: none;\n  }\n\n  & > ul li {\n    flex: 1;\n    display: flex;\n    cursor: pointer;\n  }\n\n  & > ul li a,\n  & > ul li a:active,\n  & > ul li a:visited,\n  & > ul li a:hover {\n    color: #000;\n    text-decoration: none;\n    font-size: 14px;\n    font-weight: 400;\n  }\n\n  & li:hover {\n    background: ",";\n  }\n"])),(function(e){return e.open?"visible":"hidden"}),(function(e){return e.open?"display: flex;":""}),(function(e){return e.theme.background}));function I(e){var n=e.children,t=e.open;return o.a.createElement(M,{className:"className",open:t},o.a.createElement("ul",{className:"unstyled"},n?n.length?n.map((function(e){return o.a.createElement("li",{key:n.indexOf(e)},e)})):o.a.createElement("li",null,n):[]))}var P,W=i.default.div(R||(R=f(["\n  text-align: right;\n  color: ",";\n  font-size: 20px;\n  font-weight: 400;\n  margin-right: 8px;\n"])),(function(e){return e.theme.tableHeaders}));function D(e){var n=e.children,t=Object(r.useState)(!1),a=t[0],l=t[1],c=Object(r.useRef)(null);function i(e){e.preventDefault(),e.stopPropagation();var n=e.currentTarget;l(!a),a||setTimeout((function(){return function(e){var n=e.querySelector("nav"),t=e.getBoundingClientRect(),a=t.top,r=t.left,o=t.bottom,l=t.right,c=n.getBoundingClientRect(),i=c.width,u=c.height,s=o-5,d=l-i+5;s+u>document.documentElement.clientHeight&&(s=a-u);d+i>document.documentElement.clientWidth&&(d=r-i);n.style.left=d+"px",n.style.top=s+"px"}(n)}))}return Object(r.useEffect)((function(){var e=function(e){a&&c.current&&!c.current.contains(e.target)&&l(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}})),o.a.createElement(W,{ref:c,onClick:function(e){return i(e)},role:"button"},o.a.createElement(d.a,{icon:u.g}),o.a.createElement(I,{className:"dropdown-menu",open:a,role:"navigation"},n))}var q,G=i.default.a(P||(P=f(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  line-height: 48px;\n\n  & > svg {\n    margin-right: 16px;\n  }\n\n  & > span {\n    flex: 1;\n  }\n"])));function J(e){var n=e.icon;return o.a.createElement(G,N(e),o.a.createElement(d.a,{icon:n}),o.a.createElement("span",null,e.children))}function U(){function e(e){return o.a.createElement("tr",{key:e,className:3===e?"active":null},o.a.createElement("td",null,"Data 1"),o.a.createElement("td",null,o.a.createElement(F,{className:"primary"},"PRIMARY")),o.a.createElement("td",null,"Data 2"),o.a.createElement("td",null,o.a.createElement("a",{href:"/"},"Link")),o.a.createElement("td",{className:"number"},"\u20ac900,00"),o.a.createElement("td",null,o.a.createElement(D,null,[o.a.createElement(J,{icon:u.e,key:"coffee",onClick:function(){return alert("Here's your coffee")}},"Take a break"),o.a.createElement(J,{icon:u.p,key:"truck",onClick:function(){return alert("A trucker stops by. He looks tired.")}},"Hitch a hike")])))}return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Table>"),o.a.createElement("p",null,"Just a regular HTML ",o.a.createElement("span",{className:"pre"},"table")," with styling applied."),o.a.createElement(E,null,o.a.createElement(L,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Header 1"),o.a.createElement("td",null,"Label"),o.a.createElement("td",null,"Header 2"),o.a.createElement("td",null,"Link"),o.a.createElement("td",{className:"number"},"Number"),o.a.createElement("td",null,"\xa0"))),o.a.createElement("tbody",null,[1,2,3,4,5,6,7,8,9,10].map((function(n){return e(n)}))))))}function X(){return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Label>"),o.a.createElement("p",null,"A round label representing usually status or tags."),o.a.createElement(E,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(F,null,"default"),"with no class applied"),o.a.createElement("li",null,o.a.createElement(F,{className:"primary"},"primary"),'with the "primary" className'),o.a.createElement("li",null,o.a.createElement(F,{className:"secondary"},"secondary"),'with the "secondary" className'),o.a.createElement("li",null,o.a.createElement(F,{className:"success"},"success"),'with the "success" className'),o.a.createElement("li",null,o.a.createElement(F,{className:"error"},"error"),'with the "error" className'),o.a.createElement("li",null,o.a.createElement(F,{className:"info"},"info"),'with the "info" className'))))}var Y,V,K=i.default.span(q||(q=f(["\n  display: inline-block;\n  font-family: sans-serif;\n  background: ",";\n  padding: 4px;\n  max-width: 40px;\n  color: ",";\n  text-align: center;\n  margin: 4px 8px -5px 0px;\n  border-radius: 20px;\n  font-size: 11px;\n  line-height: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n  width: 15px;\n  max-width: 15px;\n  overflow: hidden;\n  box-sizing: content-box;\n\n  &.primary {\n    color: ",";\n    background: ",";\n  }\n\n  &.secondary {\n    color: ",";\n    background: ",";\n  }\n\n  &.success {\n    background: ",";\n  }\n\n  &.error {\n    background: ",";\n  }\n\n  &.info {\n    background: ",";\n  }\n"])),(function(e){return e.theme.error}),(function(e){return e.theme.lightText}),(function(e){return e.theme.lightText}),(function(e){return e.theme.primary}),(function(e){return e.theme.lightText}),(function(e){return e.theme.secondary}),(function(e){return e.theme.success}),(function(e){return e.theme.error}),(function(e){return e.theme.info}));function Q(){return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Badge>"),o.a.createElement("p",null,"A round circle representing usually number of pending notifications."),o.a.createElement(E,null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(K,null,"1"),"with no class applied"),o.a.createElement("li",null,o.a.createElement(K,{className:"primary"},"11"),'with the "primary" className'),o.a.createElement("li",null,o.a.createElement(K,{className:"secondary"},"111"),'with the "secondary" className'),o.a.createElement("li",null,o.a.createElement(K,{className:"success"},o.a.createElement(d.a,{icon:u.c})),'with the "success" className'),o.a.createElement("li",null,o.a.createElement(K,{className:"error"},o.a.createElement(d.a,{icon:u.n})),'with the "error" className'),o.a.createElement("li",null,o.a.createElement(K,{className:"info"},o.a.createElement(d.a,{icon:u.i})),'with the "info" className'))))}var Z,$,_,ee,ne,te,ae=i.default.input.attrs((function(e){return{type:"checkbox"}}))(Y||(Y=f(["\n  display: inline-block;\n  float: left;\n  background: #ffffff;\n  border: 2px solid #c4c4c4;\n  border-radius: 5px;\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  width: 25px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  outline: none;\n  transition-duration: 0.3s;\n  cursor: pointer;\n\n  &:checked {\n    border: 1px solid ",";\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n    border: 2px solid ",";\n  }\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.secondary}),(function(e){return e.theme.secondary}),(function(e){return e.theme.primary})),re=i.default.label(V||(V=f(["\n  line-height: 24px;\n\n  & .checkmark-react,\n  .exported-component & .checkmark-react {\n    background: ",";\n    cursor: pointer;\n    position: relative;\n    margin-left: -28px;\n    color: white;\n    font-size: 18px;\n    font-weight: bold;\n    margin-right: 12px;\n  }\n"])),(function(e){return e.theme.secondary}));function oe(e){var n=Object(r.useState)(e.value||!1),t=n[0],a=n[1];return o.a.createElement(re,null,o.a.createElement(ae,p({},N(e),{checked:t,onChange:function(n){return function(n){var t=n.currentTarget;a(t.checked),e.onChange&&e.onChange(t.checked)}(n)}})),t?o.a.createElement("span",{className:"checkmark-react"},"\u2713"):null,o.a.createElement("span",null,e.children))}var le,ce,ie=Object(i.keyframes)(Z||(Z=f(["\n  from {\n    margin-right: 278px;\n  }\n\n  to {\n    margin-right: calc(100% - 28px);\n  }\n"]))),ue=Object(i.keyframes)($||($=f(["\n  from {\n    margin-right: calc(100% - 28px);\n  }\n\n  to {\n    margin-right: 278px;\n  }\n"]))),se=Object(i.keyframes)(_||(_=f(["\n  from {\n    flex: none;\n  }\n\n  to {\n    flex: 1;\n  }\n"]))),de=Object(i.keyframes)(ee||(ee=f(["\n  from {\n    flex: 1;\n  }\n\n  to {\n    flex: none;\n  }\n"]))),me=i.default.div(ne||(ne=f(["\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  height: 37px;\n  font-size: 14px;\n  color: ",";\n\n  & > svg {\n    height: 37px;\n    margin-left: 12px;\n    position: absolute;\n    margin-right: 278px;\n    animation: "," 0.5s ease-out;\n  }\n\n  &.focused > svg {\n    animation: "," 0.5s ease-out;\n    margin-right: calc(100% - 28px);\n  }\n"])),(function(e){return Object(s.c)(e.theme.text,.4)}),ue,ie),pe=i.default.input.attrs((function(){}))(te||(te=f(["\n  flex: none;\n  width: 250px;\n  border: 2px solid ",";\n  padding: 8px 16px 8px 36px;\n  font-size: 13px;\n  animation: "," 0.5s ease-out;\n  border-radius: 5px;\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:focus,\n  &:active {\n    outline: none;\n    flex: 1;\n    width: auto;\n    border: 2px solid ",";\n    animation: "," 0.5s ease-out;\n  }\n"])),(function(e){return Object(s.c)(e.theme.text,.4)}),de,(function(e){return Object(s.c)(e.theme.text,.4)}),(function(e){return Object(s.c)(e.theme.text,.7)}),se);function fe(e){var n=Object(r.useRef)(null),t=Object(r.useState)(!1),a=t[0],l=t[1];return o.a.createElement(me,{focused:a,className:a?"focused":""},o.a.createElement(d.a,{icon:u.l,onClick:function(){return n.current.focus()}}),o.a.createElement(pe,p({ref:n},N(e),{onFocus:function(){return l(!0)},onBlur:function(){return l(!1)},onChange:function(t){e.onChange&&e.onChange(n.current.value)}})))}function xe(){var e=Object(r.useState)(!1),n=e[0],t=e[1],a=Object(r.useState)(""),l=a[0],c=a[1];return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"Form Controls"),o.a.createElement("p",null,"Elements to create forms with."),o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Checkbox>"),o.a.createElement("p",null,"A custom styled checkbox. Accepts binding to"," ",o.a.createElement("span",{className:"pre"},"value")," and \xa0",o.a.createElement("span",{className:"pre"},"onChange"),". Props are passed to the underlying \xa0",o.a.createElement("span",{className:"pre"},"<input>")),o.a.createElement(oe,{name:"checkbox",id:"checkbox",value:n,onChange:function(e){t(e)}},"Accept terms and conditions"),o.a.createElement("p",null,"Value: ",n.toString())),o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<SearchField>"),o.a.createElement("p",null,"An input field formatted as a search box that automatically expands when focused."),o.a.createElement(fe,{placeholder:"Search for anything you might want, like a payment request or an invoice.",onChange:function(e){return c(e)}}),o.a.createElement("p",null,"Value: ",l)))}var he,ge=i.default.div(le||(le=f(["\n  display: ",";\n  background: white;\n  position: absolute;\n  left: 10%;\n  right: 10%;\n  bottom: 0;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  padding: 8px 32px;\n  z-index: 5;\n  flex-direction: row;\n  flex-spacing: space-between;\n  align-items: center;\n  font-size: 18px;\n\n  & > div {\n    flex: 1;\n  }\n"])),(function(e){return e.open?"flex":"none"})),be=i.default.span(ce||(ce=f(["\n  cursor: pointer;\n  font-size: 24px;\n  margin-right: 32px;\n"])));function Ee(e){var n=e.children,t=e.open,a=e.cancel;return o.a.createElement(ge,{open:t},o.a.createElement(be,{onClick:function(){return a?a():null}},o.a.createElement(d.a,{icon:u.n})),n)}function ve(){var e=Object(r.useState)(),n=e[0],t=e[1];return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<ActionPopover>"),o.a.createElement("p",null,"An action bar down the bottom of the screen to act on the current context."),o.a.createElement(E,null,o.a.createElement(T,{icon:u.k,onClick:function(){return t(!0)}},"START MATCHING"),o.a.createElement(Ee,{cancel:function(){return t(!1)},open:n},o.a.createElement("div",null,o.a.createElement("span",{className:"secondary"},"2")," transactions selected. Select payment request to continue."),o.a.createElement(T,{icon:u.h},"MATCH"))))}function ye(){return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<EllipsisMenu>"),o.a.createElement("p",null,"A vertical ellipsis icon that triggers a dropdown menu.",o.a.createElement("br",null),"Elements passed in will be show inside the popup inside a list"),o.a.createElement(E,null,o.a.createElement(D,null,o.a.createElement(J,{icon:u.e,key:"coffee",onClick:function(){return alert("Here's your coffee")}},"Take a break"),o.a.createElement(J,{icon:u.p,key:"truck",onClick:function(){return alert("A trucker stops by. He looks tired.")}},"Hitch a hike"))))}var ke,we,Ne=i.default.div(he||(he=f(["\n  font-size: 10px;\n  color: ",";\n\n  & a,\n  & a:active,\n  & a:visited,\n  & a:hover,\n  span.active {\n    color: ",";\n  }\n\n  & a:after {\n    content: '>';\n    padding: 0 4px;\n    color: ",";\n  }\n\n  & a:hover {\n    text-decoration: underline;\n  }\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return Object(s.c)(e.theme.text,.5)}));function je(){return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Breadcrumbs>"),o.a.createElement("p",null,"Shows a sequence of links representing the path to the current URL. Does not automatically process browser history."),o.a.createElement(E,null,o.a.createElement(Ne,null,o.a.createElement("a",{href:"/"},"Home"),o.a.createElement("span",{className:"active"},"Style Guide"))))}var Oe=i.default.span(ke||(ke=f(["\n  padding: 2px 4px;\n  font-size: 12px;\n  color: ",";\n"])),(function(e){return e.theme.text})),Ce=i.default.nav(we||(we=f(["\n  display: ",";\n  background: white;\n  position: fixed;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  padding: 24px 16px;\n  z-index: 3;\n"])),(function(e){return e.open?"flex":"none"}));function ze(e){var n=e.icon,t=void 0===n?u.f:n,a=e.children,l=Object(r.useState)(!1),c=l[0],i=l[1],s=Object(r.useRef)(null);function m(e){i(!c),c||setTimeout((function(){return function(){var e=s.current.querySelector("nav"),n=s.current.getBoundingClientRect(),t=n.top,a=n.left,r=n.right,o=e.getBoundingClientRect(),l=o.width,c=o.height,i=t-c,u=r-l/2;i<0&&(i=0);u+l>document.documentElement.clientWidth&&(u=a-l);e.style.left=u+"px",e.style.top=i+"px"}()}))}return o.a.createElement(Oe,{role:"button",ref:s,onMouseEnter:function(e){return m()},onMouseLeave:function(e){c&&m()}},o.a.createElement(d.a,{icon:t}),o.a.createElement(Ce,{role:"navigation",open:c},a))}function Te(){return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Tooltip>"),o.a.createElement("p",null,"An icon that reveals information in a popup when hovered."),o.a.createElement(E,null,o.a.createElement("ul",null,o.a.createElement("li",null,"Without an icon specified",o.a.createElement(ze,null,"Hi, I'm a very helpful tooltip.")),o.a.createElement("li",null,"With an icon specified",o.a.createElement(ze,{icon:u.e},"Here's your cup of joe.")))))}var Se,He,Ae,Be,Re,Le,Fe,Me,Ie=o.a.createContext({}),Pe=i.default.div(Se||(Se=f(["\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  background: #fff;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 16px 0px;\n  margin-top: 16px;\n\n  & svg {\n    margin: 0 32px;\n  }\n\n  &.error {\n    border-left: 4px solid ",";\n  }\n\n  &.error svg {\n    color: ",";\n  }\n\n  &.error .title {\n    color: ",";\n  }\n  &.success {\n    border-left: 4px solid ",";\n  }\n\n  &.success svg {\n    color: ",";\n  }\n\n  &.success .title {\n    color: ",";\n  }\n\n  &.info {\n    border-left: 4px solid ",";\n  }\n\n  &.info svg {\n    color: ",";\n  }\n\n  &.info .title {\n    color: ",";\n  }\n"])),(function(e){return e.theme.error}),(function(e){return e.theme.error}),(function(e){return e.theme.error}),(function(e){return e.theme.success}),(function(e){return e.theme.success}),(function(e){return e.theme.success}),(function(e){return e.theme.secondary}),(function(e){return e.theme.secondary}),(function(e){return e.theme.secondary})),We=i.default.div(He||(He=f(["\n  font-weight: 700;\n  text-transform: capitalize;\n"]))),De=i.default.div(Ae||(Ae=f(["\n  flex: 1;\n"]))),qe=i.default.button(Be||(Be=f(["\n  border: 0;\n  background: transparent;\n  font-size: 24px;\n  color: "," !important;\n  text-align: right;\n  padding: 0;\n  margin: 0;\n  outline: none;\n\n  & svg {\n    color: "," !important;\n  }\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.text}));function Ge(e){var n=e.icon,t=e.type,a=e.children,l=e.uid,c=e.duration,i=void 0===c?2e3:c,s=Object(r.useContext)(Ie),m=s.dismiss,p=s.toasters,f=Object(r.useState)(!1),x=f[0],h=f[1],g=Object(r.useRef)(null);return Object(r.useEffect)((function(){if(!x){var e=setTimeout((function(){g.current.click(),h(!0)}),i);return function(){return clearTimeout(e)}}}),[i,x]),o.a.createElement(Pe,{className:t},o.a.createElement(d.a,{icon:n}),o.a.createElement(De,null,o.a.createElement(We,{className:"title"},t),a),o.a.createElement(qe,{ref:g,onClick:function(){return m(l,p)}},o.a.createElement(d.a,{icon:u.n})))}function Je(){var e=Object(r.useContext)(Ie),n=e.success,t=e.error,a=e.info;return o.a.createElement(E,null,o.a.createElement("div",{className:"title"},"<Toaster> and <ToasterManager>"),o.a.createElement("p",null,"Shows a flash message on the screen for a duration and then disappears."),o.a.createElement(E,null,o.a.createElement(Ge,{type:"info",icon:u.j,key:"1001"},"Hi i am a toaster"),o.a.createElement(Ge,{type:"success",icon:u.d,key:"1002"},"Hi i am a toaster"),o.a.createElement(Ge,{type:"error",icon:u.o,key:"1003"},"Hi i am a toaster"),o.a.createElement("p",null,"With ToasterManager in the page"),o.a.createElement(v,{onClick:function(){return n("You are good at clicking")}},"Success"),o.a.createElement(v,{onClick:function(){return a("Please, mind the gap")}},"Info"),o.a.createElement(v,{onClick:function(){return t("These are not the droids you're looking for")}},"Error")))}var Ue,Xe,Ye,Ve,Ke,Qe,Ze=Object(i.default)((function(e){var n=e.className,t=e.big,a=e.message;return o.a.createElement("div",{className:n},o.a.createElement(d.a,{icon:u.m,spin:!0,size:t&&"2x",className:"circle"}),a&&o.a.createElement("p",null,a))}))(Re||(Re=f(["\n  position: relative;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  z-index: 5;\n\n  ","\n\n  ","\n\n  ","\n\n  .circle {\n    ","\n  }\n"])),(function(e){return e.absolute&&Object(i.css)(Le||(Le=f(["\n      position: absolute;\n    "])))}),(function(e){return e.overlay&&Object(i.css)(Fe||(Fe=f(["\n      background-color: ",";\n    "])),Object(s.d)(.15,"#FFFFFF"))}),(function(e){return!e.active&&Object(i.css)(Me||(Me=f(["\n      display: none;\n    "])))}),function(e,n){var t=n||{},a=t.include,r=t.exclude;return function(n){var t=n.color;if(!t)return null;var o=p({},k,{none:k.interface,inherit:"inherit"});if(!o[t])return console.warn("Color '"+t+"' passed to 'useColorsOn' not defined in constants.");if(r&&r.includes(t))return console.warn("Color '"+t+"' passed to 'useColorsOn' is explicitly excluded"),null;if(a&&!a.includes(t))return console.warn("Color '"+t+"' passed to 'useColorsOn' is explicitly NOT included"),null;var l=o[t]?o[t].primary||o[t]:o.secondary;return"\n      "+e+": "+l+";\n    "}}("color")),$e=i.default.div(Ue||(Ue=f(["\n  background-color: #f6f6f6;\n  padding: 10px;\n"])));function _e(){return o.a.createElement(E,{style:{marginBottom:"50px"}},o.a.createElement("div",{className:"title"},"<Loader>"),o.a.createElement("p",null,"Normal Loader"),o.a.createElement($e,null,o.a.createElement(Ze,{active:!0,color:"info"})),o.a.createElement("p",null,"Big Loader"),o.a.createElement($e,null,o.a.createElement(Ze,{active:!0,big:!0,color:"info"})),o.a.createElement("p",null,"Loader with text"),o.a.createElement($e,null,o.a.createElement(Ze,{active:!0,message:"I am loading...",color:"success"})))}var en=i.default.div(Xe||(Xe=f(["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  justify-content: space-between;\n"]))),nn=i.default.nav(Ye||(Ye=f(["\n  width: 200px;\n  height: 100%;\n  background-color: ",";\n  box-shadow: 5px 0px 10px 1px rgba(0, 0, 0, 0.15);\n  padding: 32px 64px;\n  z-index: 1;\n"])),(function(e){return e.theme.text})),tn=i.default.ul(Ve||(Ve=f(["\n  display: flex\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  text-indent: 0;\n  list-style-type: none;\n"]))),an=i.default.li(Ke||(Ke=f(["\n  flex: 1;\n  display: block;\n  margin: 24px 0px;\n\n  & a,\n  & a:visited,\n  & a:active,\n  & a:hover {\n    text-transform: uppercase;\n    color: "," !important;\n    text-decoration: none;\n    letter-spacing: 2px;\n  }\n"])),(function(e){return e.theme.lightText})),rn=i.default.div(Qe||(Qe=f(["\n  flex: 1;\n  padding: 16px 32px;\n  height: 100%;\n  overflow: auto;\n  background: ",";\n"])),(function(e){return e.theme.background}));function on(){var e={button:o.a.createElement(S,null),card:o.a.createElement(H,null),table:o.a.createElement(U,null),label:o.a.createElement(X,null),badge:o.a.createElement(Q,null),form:o.a.createElement(xe,null),action:o.a.createElement(ve,null),breadcrumbs:o.a.createElement(je,null),tooltip:o.a.createElement(Te,null),ellipsis:o.a.createElement(ye,null),loader:o.a.createElement(_e,null),toaster:o.a.createElement(Je,null)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(en,null,o.a.createElement(nn,null,o.a.createElement(tn,null,Object.entries(e).map((function(e){var n=e[0];return o.a.createElement(an,{key:n},o.a.createElement("a",{href:"#"+n},n))})))),o.a.createElement(rn,null,o.a.createElement(Ne,null,o.a.createElement("a",{href:"/"},"Home"),o.a.createElement("span",{className:"active"},"Style Guide")),o.a.createElement("h1",null,"Style Guide"),Object.entries(e).map((function(e){var n=e[0],t=e[1];return o.a.createElement("div",{id:n,key:n},t)})))))}o.a.createContext({});var ln,cn;var un;Object(i.default)("div")(ln||(ln=f(["\n  flex: 1;\n  width: 100%;\n  border: 2px solid ",";\n  padding: 8px 16px;\n  font-size: 13px;\n  border-radius: 5px;\n  color: ",";\n"])),(function(e){return Object(s.c)(e.theme.text,.4)}),(function(e){return Object(s.c)(e.theme.text,.4)})),Object(i.default)("a")(cn||(cn=f(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  line-height: 48px;\n  width: 100%;\n  & > svg {\n    margin-right: 16px;\n  }\n  & > span {\n    flex: 1;\n  }\n"])));var sn;Object(i.default)("div")(un||(un=f(["\n  display: flex;\n\n  & button {\n    flex: 1;\n  }\n"])));Object(i.createGlobalStyle)(sn||(sn=f(["\n  ","\n\n  // You can continue writing global styles here\n  .exported-component {\n    padding: 0;\n    font-family: \"Merriweather Sans\", -apple-system, BlinkMacSystemFont,\n      'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans',\n      'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: #000;\n    font-size: 16px;\n    box-sizing: content-box !important;\n  }\n  .exported-component *, .exported-component *::before, .exported-component *::after {\n    box-sizing: content-box !important;\n  }\n\n  .exported-component h1, .exported-component h2, .exported-component h3, .exported-component h4, .exported-component h5, .exported-component h6 {\n    color: ",";\n    text-transform: uppercase;\n    font-weight: 700 !important;\n  }\n\n  .exported-component h1 {\n    font-weight: 700;\n    font-size: 24px;\n    margin: 32px 0;\n  }\n\n  .exported-component h3 {\n    display: block;\n    font-size: 1.17em;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n  }\n\n  .exported-component a, .exported-component a:visited, .exported-component a:active, .exported-component a:hover {\n    text-decoration: none;\n    color: ",";\n  }\n\n  .exported-component a:hover {\n    text-decoration: underline;\n  }\n\n  .exported-component span.pre {\n    display: inline-block;\n    color: #e41f5d;\n    background: #ececec;\n    border: 1px solid #dcdcdc;\n    border-radius: 5px;\n    padding: 2px 4px;\n    font-family: monospace;\n  }\n\n\n  .exported-component .primary {\n    color: ",";\n  }\n\n  .exported-component .secondary {\n    color: ",";\n  }\n"])),m.normalize,(function(e){return e.theme.text}),(function(e){return e.theme.secondary}),(function(e){return e.theme.primary}),(function(e){return e.theme.secondary}));var dn,mn={success:u.d,error:u.o,info:u.j},pn=i.default.div(dn||(dn=f(["\n  position: fixed;\n  bottom: 10%;\n  right: 10%;\n  left: calc(","px + 10%);\n  z-index: 999;\n"])),(function(e){return e.theme.navbarWidth}));function fn(){var e=Object(r.useContext)(Ie),n=e.toasters,t=e.dismiss;return o.a.createElement(pn,null,n.map((function(e){return function(e){var n=e.type,a=e.key,r=e.message;return o.a.createElement(Ge,{type:n,icon:mn[n],key:a,uid:a,onDismiss:function(){return t(a)}},r)}(e)})))}var xn,hn,gn,bn,En=0;function vn(e){var n=e.children,t=Object(r.useState)([]),a=t[0],l=t[1];function c(e,n){var t={key:parseInt(En),message:e,type:n};En++,l([t].concat(a))}return o.a.createElement(Ie.Provider,{value:{toasters:a,success:function(e){return c(e,"success")},info:function(e){return c(e,"info")},error:function(e){return c(e,"error")},dismiss:function(e,n){var t=n.find((function(n){return n.key===e}));if(-1!==n.indexOf(t)){var a=n.filter((function(n){return n.key!==e}));l(a)}}}},o.a.createElement(fn,null),n)}i.default.div(xn||(xn=f(["\n  background: ",";\n  margin: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"])),(function(e){return e.theme.background})),i.default.div(hn||(hn=f(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  & h3 {\n    flex: 1\n    margin: 0;\n    padding: 0 16px;\n  }\n"]))),i.default.span(gn||(gn=f(["\n  margin: 0 8px;\n"]))),i.default.div(bn||(bn=f(["\n  display: none;\n  overflow: hidden;\n\n  &.open {\n    display: block;\n    padding: 8px 16px 32px 16px;\n  }\n"])));var yn,kn,wn,Nn,jn,On;i.default.div(yn||(yn=f(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 16px 32px 24px 32px;\n"]))),i.default.div(kn||(kn=f(["\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n\n  & input,\n  & select,\n  & textarea {\n    flex: 1;\n    display: block;\n    width: 100%;\n    border: 2px solid ",";\n    padding: 8px 16px;\n    font-size: 13px;\n    border-radius: 5px;\n\n    &::placeholder {\n      color: ",";\n    }\n\n    &:focus,\n    &:active {\n      outline: none;\n      flex: 1;\n      width: auto;\n      border: 2px solid ",";\n    }\n  }\n\n  & > :not(:first-child) {\n    margin-left: 16px;\n  }\n"])),(function(e){return Object(s.c)(e.theme.text,.4)}),(function(e){return Object(s.c)(e.theme.text,.4)}),(function(e){return Object(s.c)(e.theme.text,.7)})),i.default.label(wn||(wn=f(["\n  display: block;\n  font-weight: bold;\n  font-size: 14px;\n  text-transform: uppercase;\n  color: ",";\n  margin-bottom: 10px;\n"])),(function(e){return e.theme.tableHeaders}));var Cn,zn,Tn;i.default.label(Nn||(Nn=f(["\n  color: black;\n  display: flex;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 2rem;\n  align-items: center;\n"]))),i.default.input.attrs({type:"radio"})(jn||(jn=f(["\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  width: 16px;\n  height: 16px;\n  margin-right: 8px;\n  position: relative;\n  border-radius: 100%;\n  border: 2px solid ",";\n\n  :checked::before {\n    content: '';\n    top: 1px;\n    left: 1px;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    border-radius: 100%;\n    background-color: ",";\n  }\n\n  :focus {\n    outline: none;\n  }\n"])),(function(e){return e.theme.secondary}),(function(e){return e.theme.secondary})),i.default.label(On||(On=f(["\n  margin-left: 0.5rem;\n  margin-right: 1.5rem;\n"])));i.default.label(Cn||(Cn=f(["\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 16px;\n"]))),i.default.input.attrs({type:"checkbox"})(zn||(zn=f(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n\n  :checked ~ span {\n    background-color: ",";\n  }\n\n  :focus ~ span {\n    box-shadow: 0 0 1px ",";\n  }\n\n  :checked + span:before {\n    -webkit-transform: translateX(16px);\n    -ms-transform: translateX(16px);\n    transform: translateX(16px);\n    border: 1px solid ",";\n  }\n"])),(function(e){return e.theme.secondary}),(function(e){return e.theme.secondary}),(function(e){return e.theme.secondary})),i.default.span(Tn||(Tn=f(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 34px;\n\n  :before {\n    position: absolute;\n    content: '';\n    height: 16px;\n    width: 16px;\n    left: 0px;\n    bottom: 0px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n"])));var Sn=()=>o.a.createElement(i.ThemeProvider,{theme:y},o.a.createElement(vn,null,o.a.createElement(on,null)));c.a.render(o.a.createElement(Sn,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.2d856931.chunk.js.map