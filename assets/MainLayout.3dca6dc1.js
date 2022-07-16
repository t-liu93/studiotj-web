import{c as H,h as I,a as Lt,b as kt,d as Qe,e as tt}from"./QSpinner.f19ffa8d.js";import{c as h,h as C,r as z,i as Be,o as U,n as Y,a as R,b as Pe,g as Q,l as O,w as g,d as se,e as Z,H as Ae,f as $,s as ot,j as Bt,P as Pt,k as Et,m as oe,p as ye,q as De,t as ge,u as ze,v as we,x as $t,y as nt,z as Vt,A as ne,B as Ot,C as Ht,_ as it,D as at,E as Le,F as Mt,G as E,I as V,J as ke,K as ue,L as rt,M as lt,N as W,O as Fe,Q as Qt,R as Re}from"./index.602a32ec.js";import{v as At,c as We,g as Dt,Q as Ft}from"./QBtn.a0291011.js";var Ie=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const a=h(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:a.value},I(o.default))}}),Ne=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const a=h(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:a.value},I(o.default))}});function Rt(){const e=z(!Be.value);return e.value===!1&&U(()=>{e.value=!0}),e}const st=typeof ResizeObserver!="undefined",Xe=st===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var le=H({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let a=null,r,t={width:-1,height:-1};function n(d){d===!0||e.debounce===0||e.debounce==="0"?s():a===null&&(a=setTimeout(s,e.debounce))}function s(){if(clearTimeout(a),a=null,r){const{offsetWidth:d,offsetHeight:i}=r;(d!==t.width||i!==t.height)&&(t={width:d,height:i},o("resize",t))}}const f=Q();if(Object.assign(f.proxy,{trigger:n}),st===!0){let d;return U(()=>{Y(()=>{r=f.proxy.$el.parentNode,r&&(d=new ResizeObserver(n),d.observe(r),s())})}),R(()=>{clearTimeout(a),d!==void 0&&(d.disconnect!==void 0?d.disconnect():r&&d.unobserve(r))}),Pe}else{let y=function(){clearTimeout(a),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",n,O.passive),i=void 0)},_=function(){y(),r&&r.contentDocument&&(i=r.contentDocument.defaultView,i.addEventListener("resize",n,O.passive),s())};const d=Rt();let i;return U(()=>{Y(()=>{r=f.proxy.$el,r&&_()})}),R(y),()=>{if(d.value===!0)return C("object",{style:Xe.style,tabindex:-1,type:"text/html",data:Xe.url,"aria-hidden":"true",onLoad:_})}}}}),Wt=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:a}){const{proxy:{$q:r}}=Q(),t=se(Z,()=>{console.error("QHeader needs to be child of QLayout")}),n=z(parseInt(e.heightHint,10)),s=z(!0),f=h(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||r.platform.is.ios&&t.isContainer.value===!0),d=h(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?n.value:0;const u=n.value-t.scroll.value.position;return u>0?u:0}),i=h(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),y=h(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),_=h(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=h(()=>{const u=t.rows.value.top,T={};return u[0]==="l"&&t.left.space===!0&&(T[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(T[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),T});function c(u,T){t.update("header",u,T)}function q(u,T){u.value!==T&&(u.value=T)}function w({height:u}){q(n,u),c("size",u)}function p(u){y.value===!0&&q(s,!0),a("focusin",u)}g(()=>e.modelValue,u=>{c("space",u),q(s,!0),t.animate()}),g(d,u=>{c("offset",u)}),g(()=>e.reveal,u=>{u===!1&&q(s,e.modelValue)}),g(s,u=>{t.animate(),a("reveal",u)}),g(t.scroll,u=>{e.reveal===!0&&q(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const k={};return t.instances.header=k,e.modelValue===!0&&c("size",n.value),c("space",e.modelValue),c("offset",d.value),R(()=>{t.instances.header===k&&(t.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const u=Lt(o.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(le,{debounce:0,onResize:w})),C("header",{class:_.value,style:x.value,onFocusin:p},u)}}});function It(e,o,a){let r;function t(){r!==void 0&&(Ae.remove(r),r=void 0)}return R(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>a.value===!0,handler:o},Ae.add(r)}}}const Nt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Xt=["before-show","show","before-hide","hide"];function jt({showing:e,canShow:o,hideOnRouteChange:a,handleShow:r,handleHide:t,processOnMount:n}){const s=Q(),{props:f,emit:d,proxy:i}=s;let y;function _(u){e.value===!0?q(u):x(u)}function x(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const T=f["onUpdate:modelValue"]!==void 0;T===!0&&(d("update:modelValue",!0),y=u,Y(()=>{y===u&&(y=void 0)})),(f.modelValue===null||T===!1)&&c(u)}function c(u){e.value!==!0&&(e.value=!0,d("before-show",u),r!==void 0?r(u):d("show",u))}function q(u){if(f.disable===!0)return;const T=f["onUpdate:modelValue"]!==void 0;T===!0&&(d("update:modelValue",!1),y=u,Y(()=>{y===u&&(y=void 0)})),(f.modelValue===null||T===!1)&&w(u)}function w(u){e.value!==!1&&(e.value=!1,d("before-hide",u),t!==void 0?t(u):d("hide",u))}function p(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?c:w)(y)}g(()=>f.modelValue,p),a!==void 0&&At(s)===!0&&g(()=>i.$route.fullPath,()=>{a.value===!0&&e.value===!0&&q()}),n===!0&&U(()=>{p(f.modelValue)});const k={show:x,hide:q,toggle:_};return Object.assign(i,k),k}const Ut=[null,document,document.body,document.scrollingElement,document.documentElement];function Yt(e,o){let a=Dt(o);if(a===void 0){if(e==null)return window;a=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ut.includes(a)?window:a}function ut(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function dt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let ie;function _e(){if(ie!==void 0)return ie;const e=document.createElement("p"),o=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const a=e.offsetWidth;o.style.overflow="scroll";let r=e.offsetWidth;return a===r&&(r=o.clientWidth),o.remove(),ie=a-r,ie}function Gt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let K=0,xe,qe,J,Ce=!1,je,Ue,j;function Kt(e){Jt(e)&&ot(e)}function Jt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Bt(e),a=e.shiftKey&&!e.deltaX,r=!a&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=a||r?e.deltaY:e.deltaX;for(let n=0;n<o.length;n++){const s=o[n];if(Gt(s,r))return r?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ye(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Ce!==!0&&(Ce=!0,requestAnimationFrame(()=>{Ce=!1;const{height:o}=e.target,{clientHeight:a,scrollTop:r}=document.scrollingElement;(J===void 0||o!==window.innerHeight)&&(J=a-o,document.scrollingElement.scrollTop=r),r>J&&(document.scrollingElement.scrollTop-=Math.ceil((r-J)/8))}))}function Ge(e){const o=document.body,a=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(o);xe=dt(window),qe=ut(window),je=o.style.left,Ue=o.style.top,o.style.left=`-${xe}px`,o.style.top=`-${qe}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,$.is.ios===!0&&(a===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,O.passiveCapture),window.visualViewport.addEventListener("scroll",ae,O.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ye,O.passiveCapture))}$.is.desktop===!0&&$.is.mac===!0&&window[`${e}EventListener`]("wheel",Kt,O.notPassive),e==="remove"&&($.is.ios===!0&&(a===!0?(window.visualViewport.removeEventListener("resize",ae,O.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,O.passiveCapture)):window.removeEventListener("scroll",Ye,O.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=je,o.style.top=Ue,window.scrollTo(xe,qe),J=void 0)}function Zt(e){let o="add";if(e===!0){if(K++,j!==void 0){clearTimeout(j),j=void 0;return}if(K>1)return}else{if(K===0||(K--,K>0))return;if(o="remove",$.is.ios===!0&&$.is.nativeMobile===!0){clearTimeout(j),j=setTimeout(()=>{Ge(o),j=void 0},100);return}}Ge(o)}function eo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Zt(o))}}}function to(){let e;return R(()=>{clearTimeout(e)}),{registerTimeout(o,a){clearTimeout(e),e=setTimeout(o,a)},removeTimeout(){clearTimeout(e)}}}const ct={dark:{type:Boolean,default:null}};function ft(e,o){return h(()=>e.dark===null?o.dark.isActive:e.dark)}const Ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},oo=Object.keys(Ee);Ee.all=!0;function Ke(e){const o={};for(const a of oo)e[a]===!0&&(o[a]=!0);return Object.keys(o).length===0?Ee:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function no(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Te(e,o,a){const r=ze(e);let t,n=r.left-o.event.x,s=r.top-o.event.y,f=Math.abs(n),d=Math.abs(s);const i=o.direction;i.horizontal===!0&&i.vertical!==!0?t=n<0?"left":"right":i.horizontal!==!0&&i.vertical===!0?t=s<0?"up":"down":i.up===!0&&s<0?(t="up",f>d&&(i.left===!0&&n<0?t="left":i.right===!0&&n>0&&(t="right"))):i.down===!0&&s>0?(t="down",f>d&&(i.left===!0&&n<0?t="left":i.right===!0&&n>0&&(t="right"))):i.left===!0&&n<0?(t="left",f<d&&(i.up===!0&&s<0?t="up":i.down===!0&&s>0&&(t="down"))):i.right===!0&&n>0&&(t="right",f<d&&(i.up===!0&&s<0?t="up":i.down===!0&&s>0&&(t="down")));let y=!1;if(t===void 0&&a===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,y=!0,t==="left"||t==="right"?(r.left-=n,f=0,n=0):(r.top-=s,d=0,s=0)}return{synthetic:y,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:r,direction:t,isFirst:o.event.isFirst,isFinal:a===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:n,y:s},delta:{x:r.left-o.event.lastX,y:r.top-o.event.lastY}}}}let io=0;var Se=kt({name:"touch-pan",beforeMount(e,{value:o,modifiers:a}){if(a.mouse!==!0&&$.has.touch!==!0)return;function r(n,s){a.mouse===!0&&s===!0?ot(n):(a.stop===!0&&ge(n),a.prevent===!0&&De(n))}const t={uid:"qvtp_"+io++,handler:o,modifiers:a,direction:Ke(a),noop:Pe,mouseStart(n){Je(n,t)&&Et(n)&&(oe(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(Je(n,t)){const s=n.target;oe(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if($.is.firefox===!0&&ye(e,!0),t.lastEvt=n,s===!0||a.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0)){const i=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&De(i),n.cancelBubble===!0&&ge(i),Object.assign(i,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:i}}ge(n)}const{left:f,top:d}=ze(n);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(n){if(t.event===void 0)return;const s=ze(n),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=n;const i=t.event.mouse===!0,y=()=>{r(n,i),a.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),i===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),no(),t.styleCleanup=c=>{if(t.styleCleanup=void 0,a.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),i===!0){const q=()=>{document.body.classList.remove("no-pointer-events--children")};c!==void 0?setTimeout(()=>{q(),c()},50):q()}else c!==void 0&&c()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(n,t.event.mouse);const{payload:c,synthetic:q}=Te(n,t,!1);c!==void 0&&(t.handler(c)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&y(),t.event.lastX=c.position.left,t.event.lastY=c.position.top,t.event.lastDir=q===!0?void 0:c.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||i===!0&&t.modifiers.mouseAllDir===!0){y(),t.event.detected=!0,t.move(n);return}const _=Math.abs(f),x=Math.abs(d);_!==x&&(t.direction.horizontal===!0&&_>x||t.direction.vertical===!0&&_<x||t.direction.up===!0&&_<x&&d<0||t.direction.down===!0&&_<x&&d>0||t.direction.left===!0&&_>x&&f<0||t.direction.right===!0&&_>x&&f>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(we(t,"temp"),$.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Te(n===void 0?t.lastEvt:n,t).payload);const{payload:f}=Te(n===void 0?t.lastEvt:n,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,a.mouse===!0&&oe(t,"main",[[e,"mousedown","mouseStart",`passive${a.mouseCapture===!0?"Capture":""}`]]),$.has.touch===!0&&oe(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const a=e.__qtouchpan;a!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&a.end(),a.handler=o.value),a.direction=Ke(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),$.is.firefox===!0&&ye(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function re(e,o,a){return a<=o?o:Math.min(a,Math.max(o,e))}const Ze=150;var ao=H({name:"QDrawer",inheritAttrs:!1,props:{...Nt,...ct,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Xt,"on-layout","mini-state"],setup(e,{slots:o,emit:a,attrs:r}){const t=Q(),{proxy:{$q:n}}=t,s=ft(e,n),{preventBodyScroll:f}=eo(),{registerTimeout:d}=to(),i=se(Z,()=>{console.error("QDrawer needs to be child of QLayout")});let y,_,x;const c=z(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),q=h(()=>e.mini===!0&&c.value!==!0),w=h(()=>q.value===!0?e.miniWidth:e.width),p=z(e.showIfAbove===!0&&c.value===!1?!0:e.modelValue===!0),k=h(()=>e.persistent!==!0&&(c.value===!0||ht.value===!0));function u(l,b){if(S(),l!==!1&&i.animate(),P(0),c.value===!0){const L=i.instances[ee.value];L!==void 0&&L.belowBreakpoint===!0&&L.hide(!1),D(1),i.isContainer.value!==!0&&f(!0)}else D(0),l!==!1&&me(!1);d(()=>{l!==!1&&me(!0),b!==!0&&a("show",l)},Ze)}function T(l,b){M(),l!==!1&&i.animate(),D(0),P(N.value*w.value),pe(),b!==!0&&d(()=>{a("hide",l)},Ze)}const{show:m,hide:v}=jt({showing:p,hideOnRouteChange:k,handleShow:u,handleHide:T}),{addToHistory:S,removeFromHistory:M}=It(p,v,k),A={belowBreakpoint:c,hide:v},B=h(()=>e.side==="right"),N=h(()=>(n.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),Ve=z(0),X=z(!1),ce=z(!1),Oe=z(w.value*N.value),ee=h(()=>B.value===!0?"left":"right"),fe=h(()=>p.value===!0&&c.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:w.value:0),ve=h(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(B.value?"R":"L")>-1||n.platform.is.ios===!0&&i.isContainer.value===!0),G=h(()=>e.overlay===!1&&p.value===!0&&c.value===!1),ht=h(()=>e.overlay===!0&&p.value===!0&&c.value===!1),mt=h(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&X.value===!1?" hidden":"")),pt=h(()=>({backgroundColor:`rgba(0,0,0,${Ve.value*.4})`})),He=h(()=>B.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),bt=h(()=>B.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),yt=h(()=>{const l={};return i.header.space===!0&&He.value===!1&&(ve.value===!0?l.top=`${i.header.offset}px`:i.header.space===!0&&(l.top=`${i.header.size}px`)),i.footer.space===!0&&bt.value===!1&&(ve.value===!0?l.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(l.bottom=`${i.footer.size}px`)),l}),gt=h(()=>{const l={width:`${w.value}px`,transform:`translateX(${Oe.value}px)`};return c.value===!0?l:Object.assign(l,yt.value)}),wt=h(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),_t=h(()=>`q-drawer q-drawer--${e.side}`+(ce.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(c.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${q.value===!0?"mini":"standard"}`+(ve.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(He.value===!0?" q-drawer--top-padding":""))),xt=h(()=>{const l=n.lang.rtl===!0?e.side:ee.value;return[[Se,St,void 0,{[l]:!0,mouse:!0}]]}),qt=h(()=>{const l=n.lang.rtl===!0?ee.value:e.side;return[[Se,Me,void 0,{[l]:!0,mouse:!0}]]}),Ct=h(()=>{const l=n.lang.rtl===!0?ee.value:e.side;return[[Se,Me,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function he(){zt(c,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}g(c,l=>{l===!0?(y=p.value,p.value===!0&&v(!1)):e.overlay===!1&&e.behavior!=="mobile"&&y!==!1&&(p.value===!0?(P(0),D(0),pe()):m(!1))}),g(()=>e.side,(l,b)=>{i.instances[b]===A&&(i.instances[b]=void 0,i[b].space=!1,i[b].offset=0),i.instances[l]=A,i[l].size=w.value,i[l].space=G.value,i[l].offset=fe.value}),g(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&he()}),g(()=>e.behavior+e.breakpoint,he),g(i.isContainer,l=>{p.value===!0&&f(l!==!0),l===!0&&he()}),g(i.scrollbarWidth,()=>{P(p.value===!0?0:void 0)}),g(fe,l=>{F("offset",l)}),g(G,l=>{a("on-layout",l),F("space",l)}),g(B,()=>{P()}),g(w,l=>{P(),be(e.miniToOverlay,l)}),g(()=>e.miniToOverlay,l=>{be(l,w.value)}),g(()=>n.lang.rtl,()=>{P()}),g(()=>e.mini,()=>{e.modelValue===!0&&(Tt(),i.animate())}),g(q,l=>{a("mini-state",l)});function P(l){l===void 0?Y(()=>{l=p.value===!0?0:w.value,P(N.value*l)}):(i.isContainer.value===!0&&B.value===!0&&(c.value===!0||Math.abs(l)===w.value)&&(l+=N.value*i.scrollbarWidth.value),Oe.value=l)}function D(l){Ve.value=l}function me(l){const b=l===!0?"remove":i.isContainer.value!==!0?"add":"";b!==""&&document.body.classList[b]("q-body--drawer-toggle")}function Tt(){clearTimeout(_),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),ce.value=!0,_=setTimeout(()=>{ce.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function St(l){if(p.value!==!1)return;const b=w.value,L=re(l.distance.x,0,b);if(l.isFinal===!0){L>=Math.min(75,b)===!0?m():(i.animate(),D(0),P(N.value*b)),X.value=!1;return}P((n.lang.rtl===!0?B.value!==!0:B.value)?Math.max(b-L,0):Math.min(0,L-b)),D(re(L/b,0,1)),l.isFirst===!0&&(X.value=!0)}function Me(l){if(p.value!==!0)return;const b=w.value,L=l.direction===e.side,te=(n.lang.rtl===!0?L!==!0:L)?re(l.distance.x,0,b):0;if(l.isFinal===!0){Math.abs(te)<Math.min(75,b)===!0?(i.animate(),D(1),P(0)):v(),X.value=!1;return}P(N.value*te),D(re(1-te/b,0,1)),l.isFirst===!0&&(X.value=!0)}function pe(){f(!1),me(!0)}function F(l,b){i.update(e.side,l,b)}function zt(l,b){l.value!==b&&(l.value=b)}function be(l,b){F("size",l===!0?e.miniWidth:b)}return i.instances[e.side]=A,be(e.miniToOverlay,w.value),F("space",G.value),F("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&a("update:modelValue",!0),U(()=>{a("on-layout",G.value),a("mini-state",q.value),y=e.showIfAbove===!0;const l=()=>{(p.value===!0?u:T)(!1,!0)};if(i.totalWidth.value!==0){Y(l);return}x=g(i.totalWidth,()=>{x(),x=void 0,p.value===!1&&e.showIfAbove===!0&&c.value===!1?m(!1):l()})}),R(()=>{x!==void 0&&x(),clearTimeout(_),p.value===!0&&pe(),i.instances[e.side]===A&&(i.instances[e.side]=void 0,F("size",0),F("offset",0),F("space",!1))}),()=>{const l=[];c.value===!0&&(e.noSwipeOpen===!1&&l.push($t(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),xt.value)),l.push(Qe("div",{ref:"backdrop",class:mt.value,style:pt.value,"aria-hidden":"true",onClick:v},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>Ct.value)));const b=q.value===!0&&o.mini!==void 0,L=[C("div",{...r,key:""+b,class:[wt.value,r.class]},b===!0?o.mini():I(o.default))];return e.elevated===!0&&p.value===!0&&L.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(Qe("aside",{ref:"content",class:_t.value,style:gt.value},L,"contentclose",e.noSwipeClose!==!0&&c.value===!0,()=>qt.value)),C("div",{class:"q-drawer-container"},l)}}}),ro=H({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:a}}=Q(),r=se(Z,()=>{console.error("QPageContainer needs to be child of QLayout")});nt(Vt,!0);const t=h(()=>{const n={};return r.header.space===!0&&(n.paddingTop=`${r.header.size}px`),r.right.space===!0&&(n[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(n.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(n[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),n});return()=>C("div",{class:"q-page-container",style:t.value},I(o.default))}}),lo=H({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:a}){const{proxy:{$q:r}}=Q(),t=se(Z,()=>{console.error("QFooter needs to be child of QLayout")}),n=z(parseInt(e.heightHint,10)),s=z(!0),f=z(Be.value===!0||t.isContainer.value===!0?0:window.innerHeight),d=h(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||r.platform.is.ios&&t.isContainer.value===!0),i=h(()=>t.isContainer.value===!0?t.containerHeight.value:f.value),y=h(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return s.value===!0?n.value:0;const v=t.scroll.value.position+i.value+n.value-t.height.value;return v>0?v:0}),_=h(()=>e.modelValue!==!0||d.value===!0&&s.value!==!0),x=h(()=>e.modelValue===!0&&_.value===!0&&e.reveal===!0),c=h(()=>"q-footer q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(_.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(d.value!==!0?" hidden":""):"")),q=h(()=>{const v=t.rows.value.bottom,S={};return v[0]==="l"&&t.left.space===!0&&(S[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(S[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),S});function w(v,S){t.update("footer",v,S)}function p(v,S){v.value!==S&&(v.value=S)}function k({height:v}){p(n,v),w("size",v)}function u(){if(e.reveal!==!0)return;const{direction:v,position:S,inflectionPoint:M}=t.scroll.value;p(s,v==="up"||S-M<100||t.height.value-i.value-S-n.value<300)}function T(v){x.value===!0&&p(s,!0),a("focusin",v)}g(()=>e.modelValue,v=>{w("space",v),p(s,!0),t.animate()}),g(y,v=>{w("offset",v)}),g(()=>e.reveal,v=>{v===!1&&p(s,e.modelValue)}),g(s,v=>{t.animate(),a("reveal",v)}),g([n,t.scroll,t.height],u),g(()=>r.screen.height,v=>{t.isContainer.value!==!0&&p(f,v)});const m={};return t.instances.footer=m,e.modelValue===!0&&w("size",n.value),w("space",e.modelValue),w("offset",y.value),R(()=>{t.instances.footer===m&&(t.instances.footer=void 0,w("size",0),w("offset",0),w("space",!1))}),()=>{const v=tt(o.default,[C(le,{debounce:0,onResize:k})]);return e.elevated===!0&&v.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),C("footer",{class:c.value,style:q.value,onFocusin:T},v)}}});const{passive:et}=O,so=["both","horizontal","vertical"];var uo=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>so.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let r=null,t,n;g(()=>e.scrollTarget,()=>{d(),f()});function s(){r!==null&&r();const _=Math.max(0,ut(t)),x=dt(t),c={top:_-a.position.top,left:x-a.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const q=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";a.position={top:_,left:x},a.directionChanged=a.direction!==q,a.delta=c,a.directionChanged===!0&&(a.direction=q,a.inflectionPoint=a.position),o("scroll",{...a})}function f(){t=Yt(n,e.scrollTarget),t.addEventListener("scroll",i,et),i(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",i,et),t=void 0)}function i(_){if(_===!0||e.debounce===0||e.debounce==="0")s();else if(r===null){const[x,c]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];r=()=>{c(x),r=null}}}const y=Q();return U(()=>{n=y.proxy.$el.parentNode,f()}),R(()=>{r!==null&&r(),d()}),Object.assign(y.proxy,{trigger:i,getPosition:()=>a}),Pe}}),co=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:a}){const{proxy:{$q:r}}=Q(),t=z(null),n=z(r.screen.height),s=z(e.container===!0?0:r.screen.width),f=z({position:0,direction:"down",inflectionPoint:0}),d=z(0),i=z(Be.value===!0?0:_e()),y=h(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),_=h(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),x=h(()=>i.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=h(()=>i.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function q(m){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};f.value=v,e.onScroll!==void 0&&a("scroll",v)}}function w(m){const{height:v,width:S}=m;let M=!1;n.value!==v&&(M=!0,n.value=v,e.onScrollHeight!==void 0&&a("scroll-height",v),k()),s.value!==S&&(M=!0,s.value=S),M===!0&&e.onResize!==void 0&&a("resize",m)}function p({height:m}){d.value!==m&&(d.value=m,k())}function k(){if(e.container===!0){const m=n.value>d.value?_e():0;i.value!==m&&(i.value=m)}}let u;const T={instances:{},view:h(()=>e.view),isContainer:h(()=>e.container),rootRef:t,height:n,containerHeight:d,scrollbarWidth:i,totalWidth:h(()=>s.value+i.value),rows:h(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:ne({size:0,offset:0,space:!1}),right:ne({size:300,offset:0,space:!1}),footer:ne({size:0,offset:0,space:!1}),left:ne({size:300,offset:0,space:!1}),scroll:f,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(m,v,S){T[m][v]=S}};if(nt(Z,T),_e()>0){let S=function(){m=null,v.classList.remove("hide-scrollbar")},M=function(){if(m===null){if(v.scrollHeight>r.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(S,300)},A=function(B){m!==null&&B==="remove"&&(clearTimeout(m),S()),window[`${B}EventListener`]("resize",M)},m=null;const v=document.body;g(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),Ot(()=>{A("remove")})}return()=>{const m=tt(o.default,[C(uo,{onScroll:q}),C(le,{onResize:w})]),v=C("div",{class:y.value,style:_.value,ref:e.container===!0?void 0:t,tabindex:-1},m);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(le,{onResize:p}),C("div",{class:"absolute-full",style:x.value},[C("div",{class:"scroll",style:c.value},[v])])]):v}}}),fo=H({name:"QBanner",props:{...ct,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:o}){const a=Q(),r=ft(e,a.proxy.$q),t=h(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(r.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),n=h(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const s=[C("div",{class:"q-banner__avatar col-auto row items-center self-start"},I(o.avatar)),C("div",{class:"q-banner__content col text-body2"},I(o.default))],f=I(o.action);return f!==void 0&&s.push(C("div",{class:n.value},f)),C("div",{class:t.value+(e.inlineActions===!1&&f!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}});const vt=Ht("stateStore",{state:()=>({showPrivacyBanner:!0}),actions:{disableBanner(){this.showPrivacyBanner=!1}}});const de=e=>(rt("data-v-6d500dae"),e=e(),lt(),e),vo=ue(" This site, "),ho=de(()=>W("b",null,"studiotj.cc",-1)),mo=ue(", is hosted on "),po=de(()=>W("b",null,"Github Pages",-1)),bo=ue(". The owner of this site does not collect, process or store any Personal Identifiable Information (PII) from the user. The hosting service of this site, "),yo=de(()=>W("b",null,"Github Pages",-1)),go=ue(" may store server access logs, and that may contain PII. However, the data stored by Github Pages is not accessible by the owner of this site. For information about Github's privacy policy, please refer to "),wo=de(()=>W("a",{href:"https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",class:"link-dark"},"Github Privacy Statement.",-1)),_o=at({__name:"PrivacyBanner",setup(e){const o=vt();return(a,r)=>(Le(),Mt("div",null,[E(ke(fo),{id:"banner",class:"text-white bg-black font-monospace"},{action:V(()=>[E(Ft,{id:"button",color:"grey-9","text-color":"white",label:"I Understand",onClick:r[0]||(r[0]=t=>ke(o).disableBanner())})]),default:V(()=>[vo,ho,mo,po,bo,yo,go,wo]),_:1})]))}});var xo=it(_o,[["__scopeId","data-v-6d500dae"]]);const $e=e=>(rt("data-v-bdf460f8"),e=e(),lt(),e),qo=$e(()=>W("div",{id:"headerTitle",class:"font-serif"},"Studio TJ",-1)),Co=$e(()=>W("div",{class:"col-12"},[W("p",null,"\xA9 2020-2022 Studio TJ.")],-1)),To=$e(()=>W("div",null,null,-1)),So=at({__name:"MainLayout",setup(e){const o=vt(),a=z(!1);return(r,t)=>{const n=Qt("router-view");return Le(),Fe(co,{view:"hhh lpR fff",class:"bg-black"},{default:V(()=>[E(Wt,{class:"bg-black text-white"},{default:V(()=>[E(Ne,{id:"qtoolbar",class:"justify-evenly"},{default:V(()=>[E(Ie,{id:"toolbarTitle",class:"col-sm-10 col-xs-12"},{default:V(()=>[qo]),_:1}),Re("",!0)]),_:1})]),_:1}),E(ao,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),side:"right"},null,8,["modelValue"]),E(ro,{id:"pageContainer",class:"bg-black"},{default:V(()=>[E(n)]),_:1}),ke(o).showPrivacyBanner?(Le(),Fe(xo,{key:0,id:"privacyBanner"})):Re("",!0),E(lo,{class:"bg-black text-white"},{default:V(()=>[E(Ne,null,{default:V(()=>[E(Ie,{id:"footer",class:"font-serif"},{default:V(()=>[Co,To]),_:1})]),_:1})]),_:1})]),_:1})}}});var Po=it(So,[["__scopeId","data-v-bdf460f8"]]);export{Po as default};
