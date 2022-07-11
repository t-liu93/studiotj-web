import{d as ze,c as fe,h as B,g as Qe,_ as xe,a as Ae,o as K,b as ge,e as de,w as he,u as Y,f as F,p as Ge,i as Xe,j,r as Ke,k as Ye,l as Ze,m as et,F as tt,n as rt}from"./index.a22c9d51.js";import{c as nt,h as W,Q as at}from"./QBtn.4f3a68f0.js";import{u as it,a as st}from"./use-dark.050d8bf8.js";const Ce=ze("stateStore",{state:()=>({showPrivacyBanner:!0}),actions:{disableBanner(){this.showPrivacyBanner=!1}}});var ot=nt({name:"QBanner",props:{...it,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(t,{slots:e}){const r=Qe(),a=st(t,r.proxy.$q),n=fe(()=>"q-banner row items-center"+(t.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(t.rounded===!0?" rounded-borders":"")),i=fe(()=>`q-banner__actions row items-center justify-end col-${t.inlineActions===!0?"auto":"all"}`);return()=>{const s=[B("div",{class:"q-banner__avatar col-auto row items-center self-start"},W(e.avatar)),B("div",{class:"q-banner__content col text-body2"},W(e.default))],u=W(e.action);return u!==void 0&&s.push(B("div",{class:i.value},u)),B("div",{class:n.value+(t.inlineActions===!1&&u!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}});const I=t=>(Ge("data-v-e1dff2a4"),t=t(),Xe(),t),ut=F(" This site, "),ct=I(()=>j("b",null,"studiotj.cc",-1)),lt=F(", is hosted on "),ft=I(()=>j("b",null,"Github Pages",-1)),dt=F(". The owner of this site does not collect, process or store any Personal Identifiable Information (PII) from the user. The hosting service of this site, "),ht=I(()=>j("b",null,"Github Pages",-1)),pt=F(" may store server access logs, and that may contain PII. However, the data stored by Github Pages is not accessible by the owner of this site. For information about Github's privacy policy, please refer to "),vt=I(()=>j("a",{href:"https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"},"Github Privacy Statement.",-1)),mt=Ae({__name:"PrivacyBanner",setup(t){const e=Ce();return(r,a)=>(K(),ge("div",null,[de(Y(ot),{id:"banner",class:"text-grey-2 bg-grey-9"},{action:he(()=>[de(at,{color:"black","text-color":"white",label:"I Understand",onClick:a[0]||(a[0]=n=>Y(e).disableBanner())})]),default:he(()=>[ut,ct,lt,ft,dt,ht,pt,vt]),_:1})]))}});var yt=xe(mt,[["__scopeId","data-v-e1dff2a4"]]),te={exports:{}},Pe=function(e,r){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(r,n)}},Et=Pe,re=Object.prototype.toString,ne=function(t){return function(e){var r=re.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function O(t){return t=t.toLowerCase(),function(r){return ne(r)===t}}function ae(t){return Array.isArray(t)}function L(t){return typeof t=="undefined"}function bt(t){return t!==null&&!L(t)&&t.constructor!==null&&!L(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var Te=O("ArrayBuffer");function wt(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Te(t.buffer),e}function _t(t){return typeof t=="string"}function Rt(t){return typeof t=="number"}function Ne(t){return t!==null&&typeof t=="object"}function D(t){if(ne(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var Ot=O("Date"),St=O("File"),xt=O("Blob"),At=O("FileList");function ie(t){return re.call(t)==="[object Function]"}function gt(t){return Ne(t)&&ie(t.pipe)}function Ct(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||re.call(t)===e||ie(t.toString)&&t.toString()===e)}var Pt=O("URLSearchParams");function Tt(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Nt(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function se(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),ae(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function Z(){var t={};function e(n,i){D(t[i])&&D(n)?t[i]=Z(t[i],n):D(n)?t[i]=Z({},n):ae(n)?t[i]=n.slice():t[i]=n}for(var r=0,a=arguments.length;r<a;r++)se(arguments[r],e);return t}function Bt(t,e,r){return se(e,function(n,i){r&&typeof n=="function"?t[i]=Et(n,r):t[i]=n}),t}function $t(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Dt(t,e,r,a){t.prototype=Object.create(e.prototype,a),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function Ut(t,e,r){var a,n,i,s={};e=e||{};do{for(a=Object.getOwnPropertyNames(t),n=a.length;n-- >0;)i=a[n],s[i]||(e[i]=t[i],s[i]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function Lt(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var a=t.indexOf(e,r);return a!==-1&&a===r}function Ft(t){if(!t)return null;var e=t.length;if(L(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var jt=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:ae,isArrayBuffer:Te,isBuffer:bt,isFormData:Ct,isArrayBufferView:wt,isString:_t,isNumber:Rt,isObject:Ne,isPlainObject:D,isUndefined:L,isDate:Ot,isFile:St,isBlob:xt,isFunction:ie,isStream:gt,isURLSearchParams:Pt,isStandardBrowserEnv:Nt,forEach:se,merge:Z,extend:Bt,trim:Tt,stripBOM:$t,inherits:Dt,toFlatObject:Ut,kindOf:ne,kindOfTest:O,endsWith:Lt,toArray:Ft,isTypedArray:jt,isFileList:At},x=h;function pe(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Be=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(x.isURLSearchParams(r))n=r.toString();else{var i=[];x.forEach(r,function(c,d){c===null||typeof c=="undefined"||(x.isArray(c)?d=d+"[]":c=[c],x.forEach(c,function(l){x.isDate(l)?l=l.toISOString():x.isObject(l)&&(l=JSON.stringify(l)),i.push(pe(d)+"="+pe(l))}))}),n=i.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},It=h;function H(){this.handlers=[]}H.prototype.use=function(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};H.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};H.prototype.forEach=function(e){It.forEach(this.handlers,function(a){a!==null&&e(a)})};var Ht=H,kt=h,qt=function(e,r){kt.forEach(e,function(n,i){i!==r&&i.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[i])})},$e=h;function g(t,e,r,a,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),a&&(this.request=a),n&&(this.response=n)}$e.inherits(g,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var De=g.prototype,Ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){Ue[t]={value:t}});Object.defineProperties(g,Ue);Object.defineProperty(De,"isAxiosError",{value:!0});g.from=function(t,e,r,a,n,i){var s=Object.create(De);return $e.toFlatObject(t,s,function(c){return c!==Error.prototype}),g.call(s,t.message,e,r,a,n),s.name=t.name,i&&Object.assign(s,i),s};var T=g,Le={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},b=h;function Mt(t,e){e=e||new FormData;var r=[];function a(i){return i===null?"":b.isDate(i)?i.toISOString():b.isArrayBuffer(i)||b.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,s){if(b.isPlainObject(i)||b.isArray(i)){if(r.indexOf(i)!==-1)throw Error("Circular reference detected in "+s);r.push(i),b.forEach(i,function(c,d){if(!b.isUndefined(c)){var o=s?s+"."+d:d,l;if(c&&!s&&typeof c=="object"){if(b.endsWith(d,"{}"))c=JSON.stringify(c);else if(b.endsWith(d,"[]")&&(l=b.toArray(c))){l.forEach(function(m){!b.isUndefined(m)&&e.append(o,a(m))});return}}n(c,o)}}),r.pop()}else e.append(s,a(i))}return n(t),e}var Fe=Mt,z=T,Jt=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(new z("Request failed with status code "+a.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},$=h,Vt=$.isStandardBrowserEnv()?function(){return{write:function(r,a,n,i,s,u){var c=[];c.push(r+"="+encodeURIComponent(a)),$.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),$.isString(i)&&c.push("path="+i),$.isString(s)&&c.push("domain="+s),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Wt=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},zt=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Qt=Wt,Gt=zt,je=function(e,r){return e&&!Qt(r)?Gt(e,r):r},Q=h,Xt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Kt=function(e){var r={},a,n,i;return e&&Q.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=Q.trim(u.substr(0,i)).toLowerCase(),n=Q.trim(u.substr(i+1)),a){if(r[a]&&Xt.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},ve=h,Yt=ve.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(i){var s=i;return e&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(s){var u=ve.isString(s)?n(s):s;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}(),ee=T,Zt=h;function Ie(t){ee.call(this,t==null?"canceled":t,ee.ERR_CANCELED),this.name="CanceledError"}Zt.inherits(Ie,ee,{__CANCEL__:!0});var k=Ie,er=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},N=h,tr=Jt,rr=Vt,nr=Be,ar=je,ir=Kt,sr=Yt,or=Le,w=T,ur=k,cr=er,me=function(e){return new Promise(function(a,n){var i=e.data,s=e.headers,u=e.responseType,c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}N.isFormData(i)&&N.isStandardBrowserEnv()&&delete s["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(l+":"+m)}var p=ar(e.baseURL,e.url);o.open(e.method.toUpperCase(),nr(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ce(){if(!!o){var E="getAllResponseHeaders"in o?ir(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,R={data:S,status:o.status,statusText:o.statusText,headers:E,config:e,request:o};tr(function(V){a(V),d()},function(V){n(V),d()},R),o=null}}if("onloadend"in o?o.onloadend=ce:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ce)},o.onabort=function(){!o||(n(new w("Request aborted",w.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",R=e.transitional||or;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new w(S,R.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,o)),o=null},N.isStandardBrowserEnv()){var le=(e.withCredentials||sr(p))&&e.xsrfCookieName?rr.read(e.xsrfCookieName):void 0;le&&(s[e.xsrfHeaderName]=le)}"setRequestHeader"in o&&N.forEach(s,function(S,R){typeof i=="undefined"&&R.toLowerCase()==="content-type"?delete s[R]:o.setRequestHeader(R,S)}),N.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(E){!o||(n(!E||E&&E.type?new ur:E),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),i||(i=null);var J=cr(p);if(J&&["http","https","file"].indexOf(J)===-1){n(new w("Unsupported protocol "+J+":",w.ERR_BAD_REQUEST,e));return}o.send(i)})},lr=null,f=h,ye=qt,Ee=T,fr=Le,dr=Fe,hr={"Content-Type":"application/x-www-form-urlencoded"};function be(t,e){!f.isUndefined(t)&&f.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function pr(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=me),t}function vr(t,e,r){if(f.isString(t))try{return(e||JSON.parse)(t),f.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}var q={transitional:fr,adapter:pr(),transformRequest:[function(e,r){if(ye(r,"Accept"),ye(r,"Content-Type"),f.isFormData(e)||f.isArrayBuffer(e)||f.isBuffer(e)||f.isStream(e)||f.isFile(e)||f.isBlob(e))return e;if(f.isArrayBufferView(e))return e.buffer;if(f.isURLSearchParams(e))return be(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a=f.isObject(e),n=r&&r["Content-Type"],i;if((i=f.isFileList(e))||a&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return dr(i?{"files[]":e}:e,s&&new s)}else if(a||n==="application/json")return be(r,"application/json"),vr(e);return e}],transformResponse:[function(e){var r=this.transitional||q.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&f.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(i)throw s.name==="SyntaxError"?Ee.from(s,Ee.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:lr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};f.forEach(["delete","get","head"],function(e){q.headers[e]={}});f.forEach(["post","put","patch"],function(e){q.headers[e]=f.merge(hr)});var oe=q,mr=h,yr=oe,Er=function(e,r,a){var n=this||yr;return mr.forEach(a,function(s){e=s.call(n,e,r)}),e},He=function(e){return!!(e&&e.__CANCEL__)},we=h,G=Er,br=He,wr=oe,_r=k;function X(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new _r}var Rr=function(e){X(e),e.headers=e.headers||{},e.data=G.call(e,e.data,e.headers,e.transformRequest),e.headers=we.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),we.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||wr.adapter;return r(e).then(function(n){return X(e),n.data=G.call(e,n.data,n.headers,e.transformResponse),n},function(n){return br(n)||(X(e),n&&n.response&&(n.response.data=G.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},y=h,ke=function(e,r){r=r||{};var a={};function n(o,l){return y.isPlainObject(o)&&y.isPlainObject(l)?y.merge(o,l):y.isPlainObject(l)?y.merge({},l):y.isArray(l)?l.slice():l}function i(o){if(y.isUndefined(r[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function s(o){if(!y.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(y.isUndefined(r[o])){if(!y.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function c(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var d={url:s,method:s,data:s,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c};return y.forEach(Object.keys(e).concat(Object.keys(r)),function(l){var m=d[l]||i,p=m(l);y.isUndefined(p)&&m!==c||(a[l]=p)}),a},qe={version:"0.27.2"},Or=qe.version,_=T,ue={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){ue[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var _e={};ue.transitional=function(e,r,a){function n(i,s){return"[Axios v"+Or+"] Transitional option '"+i+"'"+s+(a?". "+a:"")}return function(i,s,u){if(e===!1)throw new _(n(s," has been removed"+(r?" in "+r:"")),_.ERR_DEPRECATED);return r&&!_e[s]&&(_e[s]=!0,console.warn(n(s," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(i,s,u):!0}};function Sr(t,e,r){if(typeof t!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(t),n=a.length;n-- >0;){var i=a[n],s=e[i];if(s){var u=t[i],c=u===void 0||s(u,i,t);if(c!==!0)throw new _("option "+i+" must be "+c,_.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}}var xr={assertOptions:Sr,validators:ue},Me=h,Ar=Be,Re=Ht,Oe=Rr,M=ke,gr=je,Je=xr,A=Je.validators;function C(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}C.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=M(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&Je.assertOptions(a,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(i=i&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var u;if(!i){var c=[Oe,void 0];for(Array.prototype.unshift.apply(c,n),c=c.concat(s),u=Promise.resolve(r);c.length;)u=u.then(c.shift(),c.shift());return u}for(var d=r;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(m){l(m);break}}try{u=Oe(d)}catch(m){return Promise.reject(m)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};C.prototype.getUri=function(e){e=M(this.defaults,e);var r=gr(e.baseURL,e.url);return Ar(r,e.params,e.paramsSerializer)};Me.forEach(["delete","get","head","options"],function(e){C.prototype[e]=function(r,a){return this.request(M(a||{},{method:e,url:r,data:(a||{}).data}))}});Me.forEach(["post","put","patch"],function(e){function r(a){return function(i,s,u){return this.request(M(u||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}C.prototype[e]=r(),C.prototype[e+"Form"]=r(!0)});var Cr=C,Pr=k;function P(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(a){if(!!r._listeners){var n,i=r._listeners.length;for(n=0;n<i;n++)r._listeners[n](a);r._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(s){r.subscribe(s),n=s}).then(a);return i.cancel=function(){r.unsubscribe(n)},i},t(function(n){r.reason||(r.reason=new Pr(n),e(r.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};P.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};P.source=function(){var e,r=new P(function(n){e=n});return{token:r,cancel:e}};var Tr=P,Nr=function(e){return function(a){return e.apply(null,a)}},Br=h,$r=function(e){return Br.isObject(e)&&e.isAxiosError===!0},Se=h,Dr=Pe,U=Cr,Ur=ke,Lr=oe;function Ve(t){var e=new U(t),r=Dr(U.prototype.request,e);return Se.extend(r,U.prototype,e),Se.extend(r,e),r.create=function(n){return Ve(Ur(t,n))},r}var v=Ve(Lr);v.Axios=U;v.CanceledError=k;v.CancelToken=Tr;v.isCancel=He;v.VERSION=qe.version;v.toFormData=Fe;v.AxiosError=T;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=Nr;v.isAxiosError=$r;te.exports=v;te.exports.default=v;var Fr=te.exports;const jr=rt('<div id="HomeHeader" data-v-625c3001><h1 id="HomeHeaderText" data-v-625c3001>Welcome to Homepage of Studio TJ</h1></div><div id="HomeContent" data-v-625c3001><h2 data-v-625c3001>Welcome to Homepage of Studio TJ</h2><p data-v-625c3001>This page is currently under construction..</p><p data-v-625c3001>Studio TJ focuses on both photography and app development.</p><p data-v-625c3001> For photography, visit <a href="https://photography.studiotj.cc" data-v-625c3001>Studio TJ Photography</a></p><p data-v-625c3001>For app development, the page is still under construction.</p></div><footer data-v-625c3001><p data-v-625c3001>\xA9 2020-2022 Studio TJ.</p><p data-v-625c3001> This website is created using Vue.js and Quasar, built at 2022-07-11.20:41:16 </p></footer>',3),Ir=Ae({__name:"HomePage",setup(t){const e=Ce(),r=Ke(Object);return Ye(()=>{console.log("On Mounted"),Fr.get("https://cdn.studiotj.cc/test/testautoupload/filelist.json").then(a=>{r.value=a.data,console.log(r.value)})}),(a,n)=>(K(),ge(tt,null,[Y(e).showPrivacyBanner?(K(),Ze(yt,{key:0,id:"privacyBanner"})):et("",!0),jr],64))}});var Mr=xe(Ir,[["__scopeId","data-v-625c3001"]]);export{Mr as default};