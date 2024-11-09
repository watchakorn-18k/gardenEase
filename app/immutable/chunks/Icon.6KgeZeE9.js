import{s as q,c as P,a as g,u as D,g as F,d as G,i as N,e as z}from"./scheduler.CMPXCr5a.js";import{S as H,i as J,z as A,A as d,B as E,h as I,d as m,C as k,a as b,l as K,t as L,q as M,u as O}from"./index.DKBHaLPB.js";import{e as w}from"./each.D6YF6ztN.js";function S(o,e){const i={},n={},t={$$scope:1};let f=o.length;for(;f--;){const a=o[f],h=e[f];if(h){for(const r in a)r in h||(n[r]=1);for(const r in h)t[r]||(i[r]=h[r],t[r]=1);o[f]=h}else for(const r in a)t[r]=1}for(const a in n)a in i||(i[a]=void 0);return i}function W(o){return typeof o=="object"&&o!==null?o:{}}const C={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};function j(o,e,i){const n=o.slice();return n[10]=e[i][0],n[11]=e[i][1],n}function v(o){let e,i=[o[11]],n={};for(let t=0;t<i.length;t+=1)n=g(n,i[t]);return{c(){e=A(o[10]),this.h()},l(t){e=E(t,o[10],{}),I(e).forEach(m),this.h()},h(){k(e,n)},m(t,f){b(t,e,f)},p(t,f){k(e,n=S(i,[f&32&&t[11]]))},d(t){t&&m(e)}}}function B(o){let e=o[10],i,n=o[10]&&v(o);return{c(){n&&n.c(),i=d()},l(t){n&&n.l(t),i=d()},m(t,f){n&&n.m(t,f),b(t,i,f)},p(t,f){t[10]?e?q(e,t[10])?(n.d(1),n=v(t),e=t[10],n.c(),n.m(i.parentNode,i)):n.p(t,f):(n=v(t),e=t[10],n.c(),n.m(i.parentNode,i)):e&&(n.d(1),n=null,e=t[10])},d(t){t&&m(i),n&&n.d(t)}}}function Q(o){let e,i,n,t,f=w(o[5]),a=[];for(let l=0;l<f.length;l+=1)a[l]=B(j(o,f,l));const h=o[9].default,r=P(h,o,o[8],null);let _=[C[o[0]],o[6],{width:o[3]},{height:o[3]},{class:n=`tabler-icon tabler-icon-${o[1]} ${o[7].class??""}`},o[0]==="filled"?{fill:o[2]}:{"stroke-width":o[4],stroke:o[2]}],c={};for(let l=0;l<_.length;l+=1)c=g(c,_[l]);return{c(){e=A("svg");for(let l=0;l<a.length;l+=1)a[l].c();i=d(),r&&r.c(),this.h()},l(l){e=E(l,"svg",{width:!0,height:!0,class:!0});var u=I(e);for(let s=0;s<a.length;s+=1)a[s].l(u);i=d(),r&&r.l(u),u.forEach(m),this.h()},h(){k(e,c)},m(l,u){b(l,e,u);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(e,null);K(e,i),r&&r.m(e,null),t=!0},p(l,[u]){if(u&32){f=w(l[5]);let s;for(s=0;s<f.length;s+=1){const y=j(l,f,s);a[s]?a[s].p(y,u):(a[s]=B(y),a[s].c(),a[s].m(e,i))}for(;s<a.length;s+=1)a[s].d(1);a.length=f.length}r&&r.p&&(!t||u&256)&&D(r,h,l,l[8],t?G(h,l[8],u,null):F(l[8]),null),k(e,c=S(_,[u&1&&C[l[0]],u&64&&l[6],(!t||u&8)&&{width:l[3]},(!t||u&8)&&{height:l[3]},(!t||u&130&&n!==(n=`tabler-icon tabler-icon-${l[1]} ${l[7].class??""}`))&&{class:n},u&21&&(l[0]==="filled"?{fill:l[2]}:{"stroke-width":l[4],stroke:l[2]})]))},i(l){t||(L(r,l),t=!0)},o(l){M(r,l),t=!1},d(l){l&&m(e),O(a,l),r&&r.d(l)}}}function R(o,e,i){const n=["type","name","color","size","stroke","iconNode"];let t=N(e,n),{$$slots:f={},$$scope:a}=e,{type:h}=e,{name:r}=e,{color:_="currentColor"}=e,{size:c=24}=e,{stroke:l=2}=e,{iconNode:u}=e;return o.$$set=s=>{i(7,e=g(g({},e),z(s))),i(6,t=N(e,n)),"type"in s&&i(0,h=s.type),"name"in s&&i(1,r=s.name),"color"in s&&i(2,_=s.color),"size"in s&&i(3,c=s.size),"stroke"in s&&i(4,l=s.stroke),"iconNode"in s&&i(5,u=s.iconNode),"$$scope"in s&&i(8,a=s.$$scope)},e=z(e),[h,r,_,c,l,u,t,e,a,f]}class X extends H{constructor(e){super(),J(this,e,R,Q,q,{type:0,name:1,color:2,size:3,stroke:4,iconNode:5})}}export{X as I,W as a,S as g};
