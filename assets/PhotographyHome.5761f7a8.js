var h=Object.defineProperty;var p=(e,t,i)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var o=(e,t,i)=>(p(e,typeof t!="symbol"?t+"":t,i),i);import{_ as g,D as u,F as s,G as l,I as _,J as f,R as m,W as v,K as x,r as N,o as S,X as B,Y as y,O as w,Q as C,Z as A,M as F}from"./index.db8d9e77.js";import{Q as k}from"./QImg.f3bf4c57.js";import"./QSpinner.e3cde370.js";class d{constructor(t,i,r,a,n){o(this,"name");o(this,"urlName");o(this,"imgSrcBase");o(this,"imgFileName");o(this,"imgAlt");this.name=t,this.urlName=i,this.imgSrcBase=r,this.imgFileName=a,this.imgAlt=n}get demoImgFullUrl(){return this.imgSrcBase+this.imgFileName}}const I={class:"absolute-bottom text-center font-serif text-weight-bold"},j=u({__name:"GenreBlock",props:{genre:{type:d,required:!0}},setup(e){const t=e;function i(){console.log(t.genre.demoImgFullUrl)}return(r,a)=>(s(),l("div",{id:"containerBox",onClick:a[0]||(a[0]=n=>i())},[_(x(k),{id:"img",loading:"lazy",class:"row text-white",fit:"scale-down",width:"95%",height:"72%",src:e.genre.demoImgFullUrl,alt:e.genre.imgAlt},{default:f(()=>[m("div",I,v(e.genre.name),1)]),_:1},8,["src","alt"])]))}});var D=g(j,[["__scopeId","data-v-78408a44"]]),G=[{name:"Still Life and Product",urlName:"still-life-and-product",imgSrcBase:"https://cdn.studiotj.cc/img/genre/still-life-and-product/",imgFileName:"DSC03764_s.jpg",imgAlt:"Still Life and Product"},{name:"Architecture",urlName:"architecture",imgSrcBase:"https://cdn.studiotj.cc/img/genre/architecture/",imgFileName:"DSC01932_s.jpg",imgAlt:"Architecture"},{name:"Aviation",urlName:"aviation",imgSrcBase:"https://cdn.studiotj.cc/img/genre/aviation/",imgFileName:"_DSC2151_s.jpg",imgAlt:"Aviation"},{name:"Cuisine",urlName:"cuisine",imgSrcBase:"https://cdn.studiotj.cc/img/genre/cuisine/",imgFileName:"_DSC1834_s.jpg",imgAlt:"Cuisine"}];const H=e=>(w("data-v-538e6c3a"),e=e(),C(),e),b={id:"photographyHomeContainer",class:"row justify-center"},P=H(()=>m("div",{class:"col-12 text-white text-center font-serif"},[m("h5",null,"Here goes some description about the genre")],-1)),$=u({__name:"PhotographyHome",setup(e){const t=N([]),i=A();S(()=>{G.forEach(a=>{t.value.push(new d(a.name,a.urlName,a.imgSrcBase,a.imgFileName,a.imgAlt))})});function r(a){i.push("/photography/"+a)}return(a,n)=>(s(),l("div",b,[P,(s(!0),l(B,null,y(t.value,c=>(s(),F(D,{id:"genreBlock",key:c.name,genre:c,onClick:L=>r(c.urlName),class:"text-white col-xs-12 col-sm-6 col-md-4 col-lg-3"},null,8,["genre","onClick"]))),128))]))}});var M=g($,[["__scopeId","data-v-538e6c3a"]]);export{M as default};