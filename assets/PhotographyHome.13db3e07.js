var H=Object.defineProperty;var L=(e,a,i)=>a in e?H(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i;var h=(e,a,i)=>(L(e,typeof a!="symbol"?a+"":a,i),i);import{c as f,r as s,w as $,a as P,h as o,U as R,_ as b,D as N,E as _,F as S,G as E,I as G,N as y,W as U,J as M,o as Q,X as O,Y as V,L as W,M as J,O as X}from"./index.26bb1f0b.js";import{c as Y,h as K,Q as Z}from"./QSpinner.ad821fc9.js";class A{constructor(a,i,c,n){h(this,"name");h(this,"imgSrcBase");h(this,"imgFileName");h(this,"imgAlt");this.name=a,this.imgSrcBase=i,this.imgFileName=c,this.imgAlt=n}get demoImgFullUrl(){return this.imgSrcBase+this.imgFileName}}const ee={ratio:[String,Number]};function te(e,a){return f(()=>{const i=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const ie=16/9;var ae=Y({name:"QImg",props:{...ee,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ie},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:i}){const c=s(e.initialRatio),n=te(e,c);let l;const r=[s(null),s(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],g=s(0),m=s(!1),d=s(!1),j=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),F=f(()=>({width:e.width,height:e.height})),x=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),k=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));$(()=>p(),B);function p(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function B(t){if(clearTimeout(l),d.value=!1,t===null){m.value=!1,r[0].value=null,r[1].value=null;return}m.value=!0,r[g.value].value=t}function I({target:t}){l!==null&&(clearTimeout(l),c.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,C(t,1))}function C(t,u){l===null||u===1e3||(t.complete===!0?q(t):l=setTimeout(()=>{C(t,u+1)},50))}function q(t){l!==null&&(g.value=g.value===1?0:1,r[g.value].value=null,m.value=!1,d.value=!1,i("load",t.currentSrc||t.src))}function z(t){clearTimeout(l),m.value=!1,d.value=!0,r[0].value=null,r[1].value=null,i("error",t)}function D(t,u){return o("div",{class:"q-img__container absolute-full",key:t},u)}function w(t){const u=r[t].value,v={key:"img_"+t,class:x.value,style:k.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...u};return g.value===t?(v.class+=" q-img__image--waiting",Object.assign(v,{onLoad:I,onError:z})):v.class+=" q-img__image--loaded",D("img"+t,o("img",v))}function T(){return m.value!==!0?o("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(a[d.value===!0?"error":"default"])):o("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[o(Z,{color:e.spinnerColor,size:e.spinnerSize})])}return B(p()),P(()=>{clearTimeout(l),l=null}),()=>{const t=[];return n.value!==null&&t.push(o("div",{key:"filler",style:n.value})),d.value!==!0&&(r[0].value!==null&&t.push(w(0)),r[1].value!==null&&t.push(w(1))),t.push(o(R,{name:"q-transition--fade"},T)),o("div",{class:j.value,style:F.value,role:"img","aria-label":e.alt},t)}}});const ne={class:"absolute-bottom text-center font-serif text-weight-bold"},le=N({__name:"GenreBlock",props:{genre:{type:A,required:!0}},setup(e){const a=e;function i(){console.log(a.genre.demoImgFullUrl)}return(c,n)=>(_(),S("div",{id:"containerBox",onClick:n[0]||(n[0]=l=>i())},[E(M(ae),{id:"img",loading:"lazy",class:"row text-white",fit:"scale-down",width:"95%",height:"72%",src:e.genre.demoImgFullUrl,alt:e.genre.imgAlt},{default:G(()=>[y("div",ne,U(e.genre.name),1)]),_:1},8,["src","alt"])]))}});var re=b(le,[["__scopeId","data-v-78408a44"]]),oe=[{name:"Still Life and Product",imgSrcBase:"https://cdn.studiotj.cc/img/genre/still-life-and-product/",imgFileName:"DSC03764_s.jpg",imgAlt:"Still Life and Product"},{name:"Architecture",imgSrcBase:"https://cdn.studiotj.cc/img/genre/architecture/",imgFileName:"DSC01932_s.jpg",imgAlt:"Architecture"},{name:"Aviation",imgSrcBase:"https://cdn.studiotj.cc/img/genre/aviation/",imgFileName:"_DSC2151_s.jpg",imgAlt:"Aviation"},{name:"Automotive",imgSrcBase:"https://cdn.studiotj.cc/img/genre/automotive/",imgFileName:"_DSC2151_s.jpg",imgAlt:"Aviation"},{name:"Cuisine",imgSrcBase:"https://cdn.studiotj.cc/img/genre/cuisine/",imgFileName:"_DSC1834_s.jpg",imgAlt:"Cuisine"},{name:"Landscape",imgSrcBase:"https://cdn.studiotj.cc/img/genre/cuisine/",imgFileName:"_DSC1834_s.jpg",imgAlt:"Landscape"},{name:"Abstract",imgSrcBase:"https://cdn.studiotj.cc/img/genre/abstract/",imgFileName:"_DSC2151_s.jpg",imgAlt:"Aviation"}];const se=e=>(W("data-v-148e8e7c"),e=e(),J(),e),ce={id:"photographyHomeContainer",class:"row justify-center"},ue=se(()=>y("div",{class:"col-12 text-white text-center font-serif"},[y("h5",null,"Here goes some description about the genre")],-1)),ge=N({__name:"PhotographyHome",setup(e){const a=s([]);return Q(()=>{oe.forEach(i=>{a.value.push(new A(i.name,i.imgSrcBase,i.imgFileName,i.imgAlt))})}),(i,c)=>(_(),S("div",ce,[ue,(_(!0),S(O,null,V(a.value,n=>(_(),X(re,{id:"genreBlock",key:n.name,genre:n,class:"text-white col-xs-12 col-sm-6 col-md-4 col-lg-3"},null,8,["genre"]))),128))]))}});var fe=b(ge,[["__scopeId","data-v-148e8e7c"]]);export{fe as default};
