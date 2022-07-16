var $=Object.defineProperty;var L=(e,n,i)=>n in e?$(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i;var f=(e,n,i)=>(L(e,typeof n!="symbol"?n+"":n,i),i);import{c as h,r as s,w as P,a as R,h as o,U as D,_ as p,D as N,E as _,F as S,G as E,I as G,N as y,W as U,J as M,o as Q,X as O,Y as V,L as W,M as J,O as X}from"./index.602a32ec.js";import{c as Y,h as K,Q as Z}from"./QSpinner.f19ffa8d.js";class x{constructor(n,i,c,a){f(this,"name");f(this,"imgSrcBase");f(this,"imgFileName");f(this,"imgAlt");this.name=n,this.imgSrcBase=i,this.imgFileName=c,this.imgAlt=a}get demoImgFullUrl(){return this.imgSrcBase+this.imgFileName}}const ee={ratio:[String,Number]};function te(e,n){return h(()=>{const i=Number(e.ratio||(n!==void 0?n.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const ie=16/9;var ne=Y({name:"QImg",props:{...ee,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ie},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:n,emit:i}){const c=s(e.initialRatio),a=te(e,c);let l;const r=[s(null),s(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],g=s(0),d=s(!1),m=s(!1),k=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),F=h(()=>({width:e.width,height:e.height})),I=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),q=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));P(()=>w(),b);function w(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function b(t){if(clearTimeout(l),m.value=!1,t===null){d.value=!1,r[0].value=null,r[1].value=null;return}d.value=!0,r[g.value].value=t}function A({target:t}){l!==null&&(clearTimeout(l),c.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,B(t,1))}function B(t,u){l===null||u===1e3||(t.complete===!0?j(t):l=setTimeout(()=>{B(t,u+1)},50))}function j(t){l!==null&&(g.value=g.value===1?0:1,r[g.value].value=null,d.value=!1,m.value=!1,i("load",t.currentSrc||t.src))}function z(t){clearTimeout(l),d.value=!1,m.value=!0,r[0].value=null,r[1].value=null,i("error",t)}function T(t,u){return o("div",{class:"q-img__container absolute-full",key:t},u)}function C(t){const u=r[t].value,v={key:"img_"+t,class:I.value,style:q.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...u};return g.value===t?(v.class+=" q-img__image--waiting",Object.assign(v,{onLoad:A,onError:z})):v.class+=" q-img__image--loaded",T("img"+t,o("img",v))}function H(){return d.value!==!0?o("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(n[m.value===!0?"error":"default"])):o("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},n.loading!==void 0?n.loading():e.noSpinner===!0?void 0:[o(Z,{color:e.spinnerColor,size:e.spinnerSize})])}return b(w()),R(()=>{clearTimeout(l),l=null}),()=>{const t=[];return a.value!==null&&t.push(o("div",{key:"filler",style:a.value})),m.value!==!0&&(r[0].value!==null&&t.push(C(0)),r[1].value!==null&&t.push(C(1))),t.push(o(D,{name:"q-transition--fade"},H)),o("div",{class:k.value,style:F.value,role:"img","aria-label":e.alt},t)}}});const ae={class:"absolute-bottom text-center font-serif text-weight-bold"},le=N({__name:"GenreBlock",props:{genre:{type:x,required:!0}},setup(e){const n=e;function i(){console.log(n.genre.demoImgFullUrl)}return(c,a)=>(_(),S("div",{id:"containerBox",onClick:a[0]||(a[0]=l=>i())},[E(M(ne),{id:"img",loading:"lazy",class:"row",fit:"scale-down",width:"95%",height:"72%",src:e.genre.demoImgFullUrl,alt:e.genre.imgAlt},{default:G(()=>[y("div",ae,U(e.genre.name),1)]),_:1},8,["src","alt"])]))}});var re=p(le,[["__scopeId","data-v-57241ee6"]]),oe=[{name:"Still Life and Product",imgSrcBase:"https://cdn.studiotj.cc/img/genre/still-life-and-product/",imgFileName:"DSC03764_s.jpg",imgAlt:"Still Life and Product"},{name:"Architecture",imgSrcBase:"https://cdn.studiotj.cc/img/genre/architecture/",imgFileName:"DSC01932_s.jpg",imgAlt:"Architecture"},{name:"Aviation",imgSrcBase:"https://cdn.studiotj.cc/img/genre/aviation/",imgFileName:"_DSC2151_s.jpg",imgAlt:"Aviation"}];const se=e=>(W("data-v-367decb1"),e=e(),J(),e),ce={id:"photographyHomeContainer",class:"row justify-center"},ue=se(()=>y("div",{class:"col-12 text-white text-center font-serif"},[y("h5",null,"Here goes some description about the genre")],-1)),ge=N({__name:"PhotographyHome",setup(e){const n=s([]);return Q(()=>{oe.forEach(i=>{n.value.push(new x(i.name,i.imgSrcBase,i.imgFileName,i.imgAlt))})}),(i,c)=>(_(),S("div",ce,[ue,(_(!0),S(O,null,V(n.value,a=>(_(),X(re,{id:"genreBlock",key:a.name,genre:a,class:"text-white col-xs-12 col-sm-6 col-lg-3"},null,8,["genre"]))),128))]))}});var he=p(ge,[["__scopeId","data-v-367decb1"]]);export{he as default};
