(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function qo(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const cd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ld=qo(cd);function Gl(t){return!!t||t===""}function zo(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=we(s)?fd(s):zo(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(we(t))return t;if(Ee(t))return t}}const ud=/;(?![^(]*\))/g,hd=/:(.+)/;function fd(t){const e={};return t.split(ud).forEach(n=>{if(n){const s=n.split(hd);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Cn(t){let e="";if(we(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=Cn(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dd=t=>we(t)?t:t==null?"":U(t)||Ee(t)&&(t.toString===Yl||!j(t.toString))?JSON.stringify(t,Wl,2):String(t),Wl=(t,e)=>e&&e.__v_isRef?Wl(t,e.value):An(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ql(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!U(e)&&!Jl(e)?String(e):e,ee={},Sn=[],it=()=>{},pd=()=>!1,gd=/^on[^a-z]/,jr=t=>gd.test(t),Go=t=>t.startsWith("onUpdate:"),Me=Object.assign,Wo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},md=Object.prototype.hasOwnProperty,z=(t,e)=>md.call(t,e),U=Array.isArray,An=t=>Kr(t)==="[object Map]",Ql=t=>Kr(t)==="[object Set]",j=t=>typeof t=="function",we=t=>typeof t=="string",Qo=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",Xl=t=>Ee(t)&&j(t.then)&&j(t.catch),Yl=Object.prototype.toString,Kr=t=>Yl.call(t),yd=t=>Kr(t).slice(8,-1),Jl=t=>Kr(t)==="[object Object]",Xo=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hr=qo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vd=/-(\w)/g,On=Hr(t=>t.replace(vd,(e,n)=>n?n.toUpperCase():"")),wd=/\B([A-Z])/g,Hn=Hr(t=>t.replace(wd,"-$1").toLowerCase()),Zl=Hr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Di=Hr(t=>t?`on${Zl(t)}`:""),ms=(t,e)=>!Object.is(t,e),fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ji=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gc;const Ed=()=>gc||(gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class bd{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Td(t,e=ut){e&&e.active&&e.effects.push(t)}const Yo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},eu=t=>(t.w&Ft)>0,tu=t=>(t.n&Ft)>0,_d=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ft},Id=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];eu(r)&&!tu(r)?r.delete(t):e[n++]=r,r.w&=~Ft,r.n&=~Ft}e.length=n}},Zi=new WeakMap;let ss=0,Ft=1;const eo=30;let nt;const en=Symbol(""),to=Symbol("");class Jo{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Td(this,s)}run(){if(!this.active)return this.fn();let e=nt,n=Rt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nt,nt=this,Rt=!0,Ft=1<<++ss,ss<=eo?_d(this):mc(this),this.fn()}finally{ss<=eo&&Id(this),Ft=1<<--ss,nt=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nt===this?this.deferStop=!0:this.active&&(mc(this),this.onStop&&this.onStop(),this.active=!1)}}function mc(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Rt=!0;const nu=[];function qn(){nu.push(Rt),Rt=!1}function zn(){const t=nu.pop();Rt=t===void 0?!0:t}function We(t,e,n){if(Rt&&nt){let s=Zi.get(t);s||Zi.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Yo()),su(r)}}function su(t,e){let n=!1;ss<=eo?tu(t)||(t.n|=Ft,n=!eu(t)):n=!t.has(nt),n&&(t.add(nt),nt.deps.push(t))}function Et(t,e,n,s,r,i){const o=Zi.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&U(t))o.forEach((c,l)=>{(l==="length"||l>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":U(t)?Xo(n)&&a.push(o.get("length")):(a.push(o.get(en)),An(t)&&a.push(o.get(to)));break;case"delete":U(t)||(a.push(o.get(en)),An(t)&&a.push(o.get(to)));break;case"set":An(t)&&a.push(o.get(en));break}if(a.length===1)a[0]&&no(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);no(Yo(c))}}function no(t,e){const n=U(t)?t:[...t];for(const s of n)s.computed&&yc(s);for(const s of n)s.computed||yc(s)}function yc(t,e){(t!==nt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Cd=qo("__proto__,__v_isRef,__isVue"),ru=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qo)),Sd=Zo(),Ad=Zo(!1,!0),Dd=Zo(!0),vc=xd();function xd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Q(this);for(let i=0,o=this.length;i<o;i++)We(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Q)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qn();const s=Q(this)[e].apply(this,n);return zn(),s}}),t}function Zo(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?qd:lu:e?cu:au).get(s))return s;const o=U(s);if(!t&&o&&z(vc,r))return Reflect.get(vc,r,i);const a=Reflect.get(s,r,i);return(Qo(r)?ru.has(r):Cd(r))||(t||We(s,"get",r),e)?a:Re(a)?o&&Xo(r)?a:a.value:Ee(a)?t?uu(a):na(a):a}}const Nd=iu(),kd=iu(!0);function iu(t=!1){return function(n,s,r,i){let o=n[s];if(ys(o)&&Re(o)&&!Re(r))return!1;if(!t&&!ys(r)&&(so(r)||(r=Q(r),o=Q(o)),!U(n)&&Re(o)&&!Re(r)))return o.value=r,!0;const a=U(n)&&Xo(s)?Number(s)<n.length:z(n,s),c=Reflect.set(n,s,r,i);return n===Q(i)&&(a?ms(r,o)&&Et(n,"set",s,r):Et(n,"add",s,r)),c}}function Rd(t,e){const n=z(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Et(t,"delete",e,void 0),s}function Od(t,e){const n=Reflect.has(t,e);return(!Qo(e)||!ru.has(e))&&We(t,"has",e),n}function Md(t){return We(t,"iterate",U(t)?"length":en),Reflect.ownKeys(t)}const ou={get:Sd,set:Nd,deleteProperty:Rd,has:Od,ownKeys:Md},Ld={get:Dd,set(t,e){return!0},deleteProperty(t,e){return!0}},Fd=Me({},ou,{get:Ad,set:kd}),ea=t=>t,qr=t=>Reflect.getPrototypeOf(t);function er(t,e,n=!1,s=!1){t=t.__v_raw;const r=Q(t),i=Q(e);n||(e!==i&&We(r,"get",e),We(r,"get",i));const{has:o}=qr(r),a=s?ea:n?ra:vs;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function tr(t,e=!1){const n=this.__v_raw,s=Q(n),r=Q(t);return e||(t!==r&&We(s,"has",t),We(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function nr(t,e=!1){return t=t.__v_raw,!e&&We(Q(t),"iterate",en),Reflect.get(t,"size",t)}function wc(t){t=Q(t);const e=Q(this);return qr(e).has.call(e,t)||(e.add(t),Et(e,"add",t,t)),this}function Ec(t,e){e=Q(e);const n=Q(this),{has:s,get:r}=qr(n);let i=s.call(n,t);i||(t=Q(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?ms(e,o)&&Et(n,"set",t,e):Et(n,"add",t,e),this}function bc(t){const e=Q(this),{has:n,get:s}=qr(e);let r=n.call(e,t);r||(t=Q(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Et(e,"delete",t,void 0),i}function Tc(){const t=Q(this),e=t.size!==0,n=t.clear();return e&&Et(t,"clear",void 0,void 0),n}function sr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Q(o),c=e?ea:t?ra:vs;return!t&&We(a,"iterate",en),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function rr(t,e,n){return function(...s){const r=this.__v_raw,i=Q(r),o=An(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?ea:e?ra:vs;return!e&&We(i,"iterate",c?to:en),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function xt(t){return function(...e){return t==="delete"?!1:this}}function Pd(){const t={get(i){return er(this,i)},get size(){return nr(this)},has:tr,add:wc,set:Ec,delete:bc,clear:Tc,forEach:sr(!1,!1)},e={get(i){return er(this,i,!1,!0)},get size(){return nr(this)},has:tr,add:wc,set:Ec,delete:bc,clear:Tc,forEach:sr(!1,!0)},n={get(i){return er(this,i,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:sr(!0,!1)},s={get(i){return er(this,i,!0,!0)},get size(){return nr(this,!0)},has(i){return tr.call(this,i,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:sr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=rr(i,!1,!1),n[i]=rr(i,!0,!1),e[i]=rr(i,!1,!0),s[i]=rr(i,!0,!0)}),[t,n,e,s]}const[Vd,Bd,Ud,$d]=Pd();function ta(t,e){const n=e?t?$d:Ud:t?Bd:Vd;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(z(n,r)&&r in s?n:s,r,i)}const jd={get:ta(!1,!1)},Kd={get:ta(!1,!0)},Hd={get:ta(!0,!1)},au=new WeakMap,cu=new WeakMap,lu=new WeakMap,qd=new WeakMap;function zd(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gd(t){return t.__v_skip||!Object.isExtensible(t)?0:zd(yd(t))}function na(t){return ys(t)?t:sa(t,!1,ou,jd,au)}function Wd(t){return sa(t,!1,Fd,Kd,cu)}function uu(t){return sa(t,!0,Ld,Hd,lu)}function sa(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Gd(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Dn(t){return ys(t)?Dn(t.__v_raw):!!(t&&t.__v_isReactive)}function ys(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function hu(t){return Dn(t)||ys(t)}function Q(t){const e=t&&t.__v_raw;return e?Q(e):t}function fu(t){return wr(t,"__v_skip",!0),t}const vs=t=>Ee(t)?na(t):t,ra=t=>Ee(t)?uu(t):t;function du(t){Rt&&nt&&(t=Q(t),su(t.dep||(t.dep=Yo())))}function pu(t,e){t=Q(t),t.dep&&no(t.dep)}function Re(t){return!!(t&&t.__v_isRef===!0)}function _c(t){return Qd(t,!1)}function Qd(t,e){return Re(t)?t:new Xd(t,e)}class Xd{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Q(e),this._value=n?e:vs(e)}get value(){return du(this),this._value}set value(e){e=this.__v_isShallow?e:Q(e),ms(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:vs(e),pu(this))}}function Yd(t){return Re(t)?t.value:t}const Jd={get:(t,e,n)=>Yd(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Re(r)&&!Re(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function gu(t){return Dn(t)?t:new Proxy(t,Jd)}class Zd{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Jo(e,()=>{this._dirty||(this._dirty=!0,pu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Q(this);return du(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ep(t,e,n=!1){let s,r;const i=j(t);return i?(s=t,r=it):(s=t.get,r=t.set),new Zd(s,r,i||!r,n)}function Ot(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){zr(i,e,n)}return r}function Ye(t,e,n,s){if(j(t)){const i=Ot(t,e,n,s);return i&&Xl(i)&&i.catch(o=>{zr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ye(t[i],e,n,s));return r}function zr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ot(c,null,10,[t,o,a]);return}}tp(t,n,r,s)}function tp(t,e,n,s=!0){console.error(t)}let Er=!1,ro=!1;const ze=[];let mt=0;const cs=[];let rs=null,En=0;const ls=[];let Nt=null,bn=0;const mu=Promise.resolve();let ia=null,io=null;function np(t){const e=ia||mu;return t?e.then(this?t.bind(this):t):e}function sp(t){let e=mt+1,n=ze.length;for(;e<n;){const s=e+n>>>1;ws(ze[s])<t?e=s+1:n=s}return e}function yu(t){(!ze.length||!ze.includes(t,Er&&t.allowRecurse?mt+1:mt))&&t!==io&&(t.id==null?ze.push(t):ze.splice(sp(t.id),0,t),vu())}function vu(){!Er&&!ro&&(ro=!0,ia=mu.then(bu))}function rp(t){const e=ze.indexOf(t);e>mt&&ze.splice(e,1)}function wu(t,e,n,s){U(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),vu()}function ip(t){wu(t,rs,cs,En)}function op(t){wu(t,Nt,ls,bn)}function Gr(t,e=null){if(cs.length){for(io=e,rs=[...new Set(cs)],cs.length=0,En=0;En<rs.length;En++)rs[En]();rs=null,En=0,io=null,Gr(t,e)}}function Eu(t){if(Gr(),ls.length){const e=[...new Set(ls)];if(ls.length=0,Nt){Nt.push(...e);return}for(Nt=e,Nt.sort((n,s)=>ws(n)-ws(s)),bn=0;bn<Nt.length;bn++)Nt[bn]();Nt=null,bn=0}}const ws=t=>t.id==null?1/0:t.id;function bu(t){ro=!1,Er=!0,Gr(t),ze.sort((n,s)=>ws(n)-ws(s));const e=it;try{for(mt=0;mt<ze.length;mt++){const n=ze[mt];n&&n.active!==!1&&Ot(n,null,14)}}finally{mt=0,ze.length=0,Eu(),Er=!1,ia=null,(ze.length||cs.length||ls.length)&&bu(t)}}function ap(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ee;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[u]||ee;p&&(r=n.map(m=>m.trim())),f&&(r=n.map(Ji))}let a,c=s[a=Di(e)]||s[a=Di(On(e))];!c&&i&&(c=s[a=Di(Hn(e))]),c&&Ye(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ye(l,t,6,r)}}function Tu(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Tu(l,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(U(i)?i.forEach(c=>o[c]=null):Me(o,i),s.set(t,o),o)}function Wr(t,e){return!t||!jr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Hn(e))||z(t,e))}let st=null,_u=null;function br(t){const e=st;return st=t,_u=t&&t.type.__scopeId||null,e}function cp(t,e=st,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Oc(-1);const i=br(e),o=t(...r);return br(i),s._d&&Oc(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function xi(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:m,ctx:T,inheritAttrs:x}=t;let S,F;const te=br(t);try{if(n.shapeFlag&4){const ne=r||s;S=ht(u.call(ne,ne,f,i,m,p,T)),F=c}else{const ne=e;S=ht(ne.length>1?ne(i,{attrs:c,slots:a,emit:l}):ne(i,null)),F=e.props?c:lp(c)}}catch(ne){us.length=0,zr(ne,t,1),S=tn(vt)}let re=S;if(F&&x!==!1){const ne=Object.keys(F),{shapeFlag:Te}=re;ne.length&&Te&7&&(o&&ne.some(Go)&&(F=up(F,o)),re=Pt(re,F))}return n.dirs&&(re=Pt(re),re.dirs=re.dirs?re.dirs.concat(n.dirs):n.dirs),n.transition&&(re.transition=n.transition),S=re,br(te),S}const lp=t=>{let e;for(const n in t)(n==="class"||n==="style"||jr(n))&&((e||(e={}))[n]=t[n]);return e},up=(t,e)=>{const n={};for(const s in t)(!Go(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function hp(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ic(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==s[p]&&!Wr(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ic(s,o,l):!0:!!o;return!1}function Ic(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Wr(n,i))return!0}return!1}function fp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dp=t=>t.__isSuspense;function pp(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):op(t)}function gp(t,e){if(Ce){let n=Ce.provides;const s=Ce.parent&&Ce.parent.provides;s===n&&(n=Ce.provides=Object.create(s)),n[t]=e}}function Ni(t,e,n=!1){const s=Ce||st;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&j(e)?e.call(s.proxy):e}}const Cc={};function ki(t,e,n){return Iu(t,e,n)}function Iu(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ee){const a=Ce;let c,l=!1,u=!1;if(Re(t)?(c=()=>t.value,l=so(t)):Dn(t)?(c=()=>t,s=!0):U(t)?(u=!0,l=t.some(F=>Dn(F)||so(F)),c=()=>t.map(F=>{if(Re(F))return F.value;if(Dn(F))return Xt(F);if(j(F))return Ot(F,a,2)})):j(t)?e?c=()=>Ot(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Ye(t,a,3,[p])}:c=it,e&&s){const F=c;c=()=>Xt(F())}let f,p=F=>{f=S.onStop=()=>{Ot(F,a,4)}};if(bs)return p=it,e?n&&Ye(e,a,3,[c(),u?[]:void 0,p]):c(),it;let m=u?[]:Cc;const T=()=>{if(!!S.active)if(e){const F=S.run();(s||l||(u?F.some((te,re)=>ms(te,m[re])):ms(F,m)))&&(f&&f(),Ye(e,a,3,[F,m===Cc?void 0:m,p]),m=F)}else S.run()};T.allowRecurse=!!e;let x;r==="sync"?x=T:r==="post"?x=()=>$e(T,a&&a.suspense):x=()=>ip(T);const S=new Jo(c,x);return e?n?T():m=S.run():r==="post"?$e(S.run.bind(S),a&&a.suspense):S.run(),()=>{S.stop(),a&&a.scope&&Wo(a.scope.effects,S)}}function mp(t,e,n){const s=this.proxy,r=we(t)?t.includes(".")?Cu(s,t):()=>s[t]:t.bind(s,s);let i;j(e)?i=e:(i=e.handler,n=e);const o=Ce;Mn(this);const a=Iu(r,i.bind(s),n);return o?Mn(o):nn(),a}function Cu(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Xt(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Re(t))Xt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Xt(t[n],e);else if(Ql(t)||An(t))t.forEach(n=>{Xt(n,e)});else if(Jl(t))for(const n in t)Xt(t[n],e);return t}function yp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oa(()=>{t.isMounted=!0}),xu(()=>{t.isUnmounting=!0}),t}const Xe=[Function,Array],vp={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},setup(t,{slots:e}){const n=og(),s=yp();let r;return()=>{const i=e.default&&Au(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const x of i)if(x.type!==vt){o=x;break}}const a=Q(t),{mode:c}=a;if(s.isLeaving)return Ri(o);const l=Sc(o);if(!l)return Ri(o);const u=oo(l,a,s,n);ao(l,u);const f=n.subTree,p=f&&Sc(f);let m=!1;const{getTransitionKey:T}=l.type;if(T){const x=T();r===void 0?r=x:x!==r&&(r=x,m=!0)}if(p&&p.type!==vt&&(!Wt(l,p)||m)){const x=oo(p,a,s,n);if(ao(p,x),c==="out-in")return s.isLeaving=!0,x.afterLeave=()=>{s.isLeaving=!1,n.update()},Ri(o);c==="in-out"&&l.type!==vt&&(x.delayLeave=(S,F,te)=>{const re=Su(s,p);re[String(p.key)]=p,S._leaveCb=()=>{F(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=te})}return o}}},wp=vp;function Su(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function oo(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:T,onBeforeAppear:x,onAppear:S,onAfterAppear:F,onAppearCancelled:te}=e,re=String(t.key),ne=Su(n,t),Te=(G,le)=>{G&&Ye(G,s,9,le)},At=(G,le)=>{const he=le[1];Te(G,le),U(G)?G.every(Be=>Be.length<=1)&&he():G.length<=1&&he()},at={mode:i,persisted:o,beforeEnter(G){let le=a;if(!n.isMounted)if(r)le=x||a;else return;G._leaveCb&&G._leaveCb(!0);const he=ne[re];he&&Wt(t,he)&&he.el._leaveCb&&he.el._leaveCb(),Te(le,[G])},enter(G){let le=c,he=l,Be=u;if(!n.isMounted)if(r)le=S||c,he=F||l,Be=te||u;else return;let Ze=!1;const dt=G._enterCb=Js=>{Ze||(Ze=!0,Js?Te(Be,[G]):Te(he,[G]),at.delayedLeave&&at.delayedLeave(),G._enterCb=void 0)};le?At(le,[G,dt]):dt()},leave(G,le){const he=String(t.key);if(G._enterCb&&G._enterCb(!0),n.isUnmounting)return le();Te(f,[G]);let Be=!1;const Ze=G._leaveCb=dt=>{Be||(Be=!0,le(),dt?Te(T,[G]):Te(m,[G]),G._leaveCb=void 0,ne[he]===t&&delete ne[he])};ne[he]=t,p?At(p,[G,Ze]):Ze()},clone(G){return oo(G,e,n,s)}};return at}function Ri(t){if(Qr(t))return t=Pt(t),t.children=null,t}function Sc(t){return Qr(t)?t.children?t.children[0]:void 0:t}function ao(t,e){t.shapeFlag&6&&t.component?ao(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Au(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&r++,s=s.concat(Au(o.children,e,a))):(e||o.type!==vt)&&s.push(a!=null?Pt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const dr=t=>!!t.type.__asyncLoader,Qr=t=>t.type.__isKeepAlive;function Ep(t,e){Du(t,"a",e)}function bp(t,e){Du(t,"da",e)}function Du(t,e,n=Ce){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xr(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Qr(r.parent.vnode)&&Tp(s,e,n,r),r=r.parent}}function Tp(t,e,n,s){const r=Xr(e,t,s,!0);Nu(()=>{Wo(s[e],r)},n)}function Xr(t,e,n=Ce,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;qn(),Mn(n);const a=Ye(e,n,t,o);return nn(),zn(),a});return s?r.unshift(i):r.push(i),i}}const St=t=>(e,n=Ce)=>(!bs||t==="sp")&&Xr(t,e,n),_p=St("bm"),oa=St("m"),Ip=St("bu"),Cp=St("u"),xu=St("bum"),Nu=St("um"),Sp=St("sp"),Ap=St("rtg"),Dp=St("rtc");function xp(t,e=Ce){Xr("ec",t,e)}function Np(t,e){const n=st;if(n===null)return t;const s=Jr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ee]=e[i];j(o)&&(o={mounted:o,updated:o}),o.deep&&Xt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Ht(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(qn(),Ye(c,n,8,[t.el,a,t,e]),zn())}}const kp=Symbol();function Rp(t,e,n,s){let r;const i=n&&n[s];if(U(t)||we(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const co=t=>t?$u(t)?Jr(t)||t.proxy:co(t.parent):null,Tr=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>co(t.parent),$root:t=>co(t.root),$emit:t=>t.emit,$options:t=>Ru(t),$forceUpdate:t=>t.f||(t.f=()=>yu(t.update)),$nextTick:t=>t.n||(t.n=np.bind(t.proxy)),$watch:t=>mp.bind(t)}),Op={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ee&&z(s,e))return o[e]=1,s[e];if(r!==ee&&z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==ee&&z(n,e))return o[e]=4,n[e];lo&&(o[e]=0)}}const u=Tr[e];let f,p;if(u)return e==="$attrs"&&We(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ee&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ee&&z(r,e)?(r[e]=n,!0):s!==ee&&z(s,e)?(s[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&z(t,o)||e!==ee&&z(e,o)||(a=i[0])&&z(a,o)||z(s,o)||z(Tr,o)||z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let lo=!0;function Mp(t){const e=Ru(t),n=t.proxy,s=t.ctx;lo=!1,e.beforeCreate&&Ac(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:T,activated:x,deactivated:S,beforeDestroy:F,beforeUnmount:te,destroyed:re,unmounted:ne,render:Te,renderTracked:At,renderTriggered:at,errorCaptured:G,serverPrefetch:le,expose:he,inheritAttrs:Be,components:Ze,directives:dt,filters:Js}=e;if(l&&Lp(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ue in o){const ie=o[ue];j(ie)&&(s[ue]=ie.bind(n))}if(r){const ue=r.call(n,n);Ee(ue)&&(t.data=na(ue))}if(lo=!0,i)for(const ue in i){const ie=i[ue],pt=j(ie)?ie.bind(n,n):j(ie.get)?ie.get.bind(n,n):it,Ci=!j(ie)&&j(ie.set)?ie.set.bind(n):it,es=fg({get:pt,set:Ci});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>es.value,set:mn=>es.value=mn})}if(a)for(const ue in a)ku(a[ue],s,n,ue);if(c){const ue=j(c)?c.call(n):c;Reflect.ownKeys(ue).forEach(ie=>{gp(ie,ue[ie])})}u&&Ac(u,t,"c");function Ue(ue,ie){U(ie)?ie.forEach(pt=>ue(pt.bind(n))):ie&&ue(ie.bind(n))}if(Ue(_p,f),Ue(oa,p),Ue(Ip,m),Ue(Cp,T),Ue(Ep,x),Ue(bp,S),Ue(xp,G),Ue(Dp,At),Ue(Ap,at),Ue(xu,te),Ue(Nu,ne),Ue(Sp,le),U(he))if(he.length){const ue=t.exposed||(t.exposed={});he.forEach(ie=>{Object.defineProperty(ue,ie,{get:()=>n[ie],set:pt=>n[ie]=pt})})}else t.exposed||(t.exposed={});Te&&t.render===it&&(t.render=Te),Be!=null&&(t.inheritAttrs=Be),Ze&&(t.components=Ze),dt&&(t.directives=dt)}function Lp(t,e,n=it,s=!1){U(t)&&(t=uo(t));for(const r in t){const i=t[r];let o;Ee(i)?"default"in i?o=Ni(i.from||r,i.default,!0):o=Ni(i.from||r):o=Ni(i),Re(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ac(t,e,n){Ye(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function ku(t,e,n,s){const r=s.includes(".")?Cu(n,s):()=>n[s];if(we(t)){const i=e[t];j(i)&&ki(r,i)}else if(j(t))ki(r,t.bind(n));else if(Ee(t))if(U(t))t.forEach(i=>ku(i,e,n,s));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&ki(r,i,t)}}function Ru(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>_r(c,l,o,!0)),_r(c,e,o)),i.set(e,c),c}function _r(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&_r(t,i,n,!0),r&&r.forEach(o=>_r(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Fp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fp={data:Dc,props:zt,emits:zt,methods:zt,computed:zt,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:zt,directives:zt,watch:Vp,provide:Dc,inject:Pp};function Dc(t,e){return e?t?function(){return Me(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Pp(t,e){return zt(uo(t),uo(e))}function uo(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function zt(t,e){return t?Me(Me(Object.create(null),t),e):e}function Vp(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const s in e)n[s]=Le(t[s],e[s]);return n}function Bp(t,e,n,s=!1){const r={},i={};wr(i,Yr,1),t.propsDefaults=Object.create(null),Ou(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Wd(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Up(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Q(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Wr(t.emitsOptions,p))continue;const m=e[p];if(c)if(z(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const T=On(p);r[T]=ho(c,a,T,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Ou(t,e,r,i)&&(l=!0);let u;for(const f in a)(!e||!z(e,f)&&((u=Hn(f))===f||!z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ho(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!z(e,f)&&!0)&&(delete i[f],l=!0)}l&&Et(t,"set","$attrs")}function Ou(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(hr(c))continue;const l=e[c];let u;r&&z(r,u=On(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Wr(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=Q(n),l=a||ee;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ho(r,c,f,l[f],t,!z(l,f))}}return o}function ho(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&j(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Mn(r),s=l[n]=c.call(null,e),nn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function Mu(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[p,m]=Mu(f,e,!0);Me(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return s.set(t,Sn),Sn;if(U(i))for(let u=0;u<i.length;u++){const f=On(i[u]);xc(f)&&(o[f]=ee)}else if(i)for(const u in i){const f=On(u);if(xc(f)){const p=i[u],m=o[f]=U(p)||j(p)?{type:p}:p;if(m){const T=Rc(Boolean,m.type),x=Rc(String,m.type);m[0]=T>-1,m[1]=x<0||T<x,(T>-1||z(m,"default"))&&a.push(f)}}}const l=[o,a];return s.set(t,l),l}function xc(t){return t[0]!=="$"}function Nc(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function kc(t,e){return Nc(t)===Nc(e)}function Rc(t,e){return U(e)?e.findIndex(n=>kc(n,t)):j(e)&&kc(e,t)?0:-1}const Lu=t=>t[0]==="_"||t==="$stable",aa=t=>U(t)?t.map(ht):[ht(t)],$p=(t,e,n)=>{if(e._n)return e;const s=cp((...r)=>aa(e(...r)),n);return s._c=!1,s},Fu=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Lu(r))continue;const i=t[r];if(j(i))e[r]=$p(r,i,s);else if(i!=null){const o=aa(i);e[r]=()=>o}}},Pu=(t,e)=>{const n=aa(e);t.slots.default=()=>n},jp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Q(e),wr(e,"_",n)):Fu(e,t.slots={})}else t.slots={},e&&Pu(t,e);wr(t.slots,Yr,1)},Kp=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ee;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Me(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Fu(e,r)),o=e}else e&&(Pu(t,e),o={default:1});if(i)for(const a in r)!Lu(a)&&!(a in o)&&delete r[a]};function Vu(){return{app:null,config:{isNativeTag:pd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hp=0;function qp(t,e){return function(s,r=null){j(s)||(s=Object.assign({},s)),r!=null&&!Ee(r)&&(r=null);const i=Vu(),o=new Set;let a=!1;const c=i.app={_uid:Hp++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:dg,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=tn(s,r);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Jr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function fo(t,e,n,s,r=!1){if(U(t)){t.forEach((p,m)=>fo(p,e&&(U(e)?e[m]:e),n,s,r));return}if(dr(s)&&!r)return;const i=s.shapeFlag&4?Jr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ee?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(we(l)?(u[l]=null,z(f,l)&&(f[l]=null)):Re(l)&&(l.value=null)),j(c))Ot(c,a,12,[o,u]);else{const p=we(c),m=Re(c);if(p||m){const T=()=>{if(t.f){const x=p?u[c]:c.value;r?U(x)&&Wo(x,i):U(x)?x.includes(i)||x.push(i):p?(u[c]=[i],z(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(f,c)&&(f[c]=o)):m&&(c.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,$e(T,n)):T()}}}const $e=pp;function zp(t){return Gp(t)}function Gp(t,e){const n=Ed();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=it,cloneNode:T,insertStaticContent:x}=t,S=(h,d,g,v=null,y=null,I=null,A=!1,_=null,C=!!d.dynamicChildren)=>{if(h===d)return;h&&!Wt(h,d)&&(v=Zs(h),Dt(h,y,I,!0),h=null),d.patchFlag===-2&&(C=!1,d.dynamicChildren=null);const{type:w,ref:R,shapeFlag:N}=d;switch(w){case ca:F(h,d,g,v);break;case vt:te(h,d,g,v);break;case Oi:h==null&&re(d,g,v,A);break;case tt:dt(h,d,g,v,y,I,A,_,C);break;default:N&1?At(h,d,g,v,y,I,A,_,C):N&6?Js(h,d,g,v,y,I,A,_,C):(N&64||N&128)&&w.process(h,d,g,v,y,I,A,_,C,yn)}R!=null&&y&&fo(R,h&&h.ref,I,d||h,!d)},F=(h,d,g,v)=>{if(h==null)s(d.el=a(d.children),g,v);else{const y=d.el=h.el;d.children!==h.children&&l(y,d.children)}},te=(h,d,g,v)=>{h==null?s(d.el=c(d.children||""),g,v):d.el=h.el},re=(h,d,g,v)=>{[h.el,h.anchor]=x(h.children,d,g,v,h.el,h.anchor)},ne=({el:h,anchor:d},g,v)=>{let y;for(;h&&h!==d;)y=p(h),s(h,g,v),h=y;s(d,g,v)},Te=({el:h,anchor:d})=>{let g;for(;h&&h!==d;)g=p(h),r(h),h=g;r(d)},At=(h,d,g,v,y,I,A,_,C)=>{A=A||d.type==="svg",h==null?at(d,g,v,y,I,A,_,C):he(h,d,y,I,A,_,C)},at=(h,d,g,v,y,I,A,_)=>{let C,w;const{type:R,props:N,shapeFlag:O,transition:V,patchFlag:W,dirs:J}=h;if(h.el&&T!==void 0&&W===-1)C=h.el=T(h.el);else{if(C=h.el=o(h.type,I,N&&N.is,N),O&8?u(C,h.children):O&16&&le(h.children,C,null,v,y,I&&R!=="foreignObject",A,_),J&&Ht(h,null,v,"created"),N){for(const oe in N)oe!=="value"&&!hr(oe)&&i(C,oe,null,N[oe],I,h.children,v,y,gt);"value"in N&&i(C,"value",null,N.value),(w=N.onVnodeBeforeMount)&&lt(w,v,h)}G(C,h,h.scopeId,A,v)}J&&Ht(h,null,v,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&V&&!V.persisted;Z&&V.beforeEnter(C),s(C,d,g),((w=N&&N.onVnodeMounted)||Z||J)&&$e(()=>{w&&lt(w,v,h),Z&&V.enter(C),J&&Ht(h,null,v,"mounted")},y)},G=(h,d,g,v,y)=>{if(g&&m(h,g),v)for(let I=0;I<v.length;I++)m(h,v[I]);if(y){let I=y.subTree;if(d===I){const A=y.vnode;G(h,A,A.scopeId,A.slotScopeIds,y.parent)}}},le=(h,d,g,v,y,I,A,_,C=0)=>{for(let w=C;w<h.length;w++){const R=h[w]=_?kt(h[w]):ht(h[w]);S(null,R,d,g,v,y,I,A,_)}},he=(h,d,g,v,y,I,A)=>{const _=d.el=h.el;let{patchFlag:C,dynamicChildren:w,dirs:R}=d;C|=h.patchFlag&16;const N=h.props||ee,O=d.props||ee;let V;g&&qt(g,!1),(V=O.onVnodeBeforeUpdate)&&lt(V,g,d,h),R&&Ht(d,h,g,"beforeUpdate"),g&&qt(g,!0);const W=y&&d.type!=="foreignObject";if(w?Be(h.dynamicChildren,w,_,g,v,W,I):A||pt(h,d,_,null,g,v,W,I,!1),C>0){if(C&16)Ze(_,d,N,O,g,v,y);else if(C&2&&N.class!==O.class&&i(_,"class",null,O.class,y),C&4&&i(_,"style",N.style,O.style,y),C&8){const J=d.dynamicProps;for(let Z=0;Z<J.length;Z++){const oe=J[Z],et=N[oe],vn=O[oe];(vn!==et||oe==="value")&&i(_,oe,et,vn,y,h.children,g,v,gt)}}C&1&&h.children!==d.children&&u(_,d.children)}else!A&&w==null&&Ze(_,d,N,O,g,v,y);((V=O.onVnodeUpdated)||R)&&$e(()=>{V&&lt(V,g,d,h),R&&Ht(d,h,g,"updated")},v)},Be=(h,d,g,v,y,I,A)=>{for(let _=0;_<d.length;_++){const C=h[_],w=d[_],R=C.el&&(C.type===tt||!Wt(C,w)||C.shapeFlag&70)?f(C.el):g;S(C,w,R,null,v,y,I,A,!0)}},Ze=(h,d,g,v,y,I,A)=>{if(g!==v){for(const _ in v){if(hr(_))continue;const C=v[_],w=g[_];C!==w&&_!=="value"&&i(h,_,w,C,A,d.children,y,I,gt)}if(g!==ee)for(const _ in g)!hr(_)&&!(_ in v)&&i(h,_,g[_],null,A,d.children,y,I,gt);"value"in v&&i(h,"value",g.value,v.value)}},dt=(h,d,g,v,y,I,A,_,C)=>{const w=d.el=h?h.el:a(""),R=d.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:O,slotScopeIds:V}=d;V&&(_=_?_.concat(V):V),h==null?(s(w,g,v),s(R,g,v),le(d.children,g,R,y,I,A,_,C)):N>0&&N&64&&O&&h.dynamicChildren?(Be(h.dynamicChildren,O,g,y,I,A,_),(d.key!=null||y&&d===y.subTree)&&Bu(h,d,!0)):pt(h,d,g,R,y,I,A,_,C)},Js=(h,d,g,v,y,I,A,_,C)=>{d.slotScopeIds=_,h==null?d.shapeFlag&512?y.ctx.activate(d,g,v,A,C):Ii(d,g,v,y,I,A,C):Ue(h,d,C)},Ii=(h,d,g,v,y,I,A)=>{const _=h.component=ig(h,v,y);if(Qr(h)&&(_.ctx.renderer=yn),ag(_),_.asyncDep){if(y&&y.registerDep(_,ue),!h.el){const C=_.subTree=tn(vt);te(null,C,d,g)}return}ue(_,h,d,g,y,I,A)},Ue=(h,d,g)=>{const v=d.component=h.component;if(hp(h,d,g))if(v.asyncDep&&!v.asyncResolved){ie(v,d,g);return}else v.next=d,rp(v.update),v.update();else d.el=h.el,v.vnode=d},ue=(h,d,g,v,y,I,A)=>{const _=()=>{if(h.isMounted){let{next:R,bu:N,u:O,parent:V,vnode:W}=h,J=R,Z;qt(h,!1),R?(R.el=W.el,ie(h,R,A)):R=W,N&&fr(N),(Z=R.props&&R.props.onVnodeBeforeUpdate)&&lt(Z,V,R,W),qt(h,!0);const oe=xi(h),et=h.subTree;h.subTree=oe,S(et,oe,f(et.el),Zs(et),h,y,I),R.el=oe.el,J===null&&fp(h,oe.el),O&&$e(O,y),(Z=R.props&&R.props.onVnodeUpdated)&&$e(()=>lt(Z,V,R,W),y)}else{let R;const{el:N,props:O}=d,{bm:V,m:W,parent:J}=h,Z=dr(d);if(qt(h,!1),V&&fr(V),!Z&&(R=O&&O.onVnodeBeforeMount)&&lt(R,J,d),qt(h,!0),N&&Ai){const oe=()=>{h.subTree=xi(h),Ai(N,h.subTree,h,y,null)};Z?d.type.__asyncLoader().then(()=>!h.isUnmounted&&oe()):oe()}else{const oe=h.subTree=xi(h);S(null,oe,g,v,h,y,I),d.el=oe.el}if(W&&$e(W,y),!Z&&(R=O&&O.onVnodeMounted)){const oe=d;$e(()=>lt(R,J,oe),y)}(d.shapeFlag&256||J&&dr(J.vnode)&&J.vnode.shapeFlag&256)&&h.a&&$e(h.a,y),h.isMounted=!0,d=g=v=null}},C=h.effect=new Jo(_,()=>yu(w),h.scope),w=h.update=()=>C.run();w.id=h.uid,qt(h,!0),w()},ie=(h,d,g)=>{d.component=h;const v=h.vnode.props;h.vnode=d,h.next=null,Up(h,d.props,v,g),Kp(h,d.children,g),qn(),Gr(void 0,h.update),zn()},pt=(h,d,g,v,y,I,A,_,C=!1)=>{const w=h&&h.children,R=h?h.shapeFlag:0,N=d.children,{patchFlag:O,shapeFlag:V}=d;if(O>0){if(O&128){es(w,N,g,v,y,I,A,_,C);return}else if(O&256){Ci(w,N,g,v,y,I,A,_,C);return}}V&8?(R&16&&gt(w,y,I),N!==w&&u(g,N)):R&16?V&16?es(w,N,g,v,y,I,A,_,C):gt(w,y,I,!0):(R&8&&u(g,""),V&16&&le(N,g,v,y,I,A,_,C))},Ci=(h,d,g,v,y,I,A,_,C)=>{h=h||Sn,d=d||Sn;const w=h.length,R=d.length,N=Math.min(w,R);let O;for(O=0;O<N;O++){const V=d[O]=C?kt(d[O]):ht(d[O]);S(h[O],V,g,null,y,I,A,_,C)}w>R?gt(h,y,I,!0,!1,N):le(d,g,v,y,I,A,_,C,N)},es=(h,d,g,v,y,I,A,_,C)=>{let w=0;const R=d.length;let N=h.length-1,O=R-1;for(;w<=N&&w<=O;){const V=h[w],W=d[w]=C?kt(d[w]):ht(d[w]);if(Wt(V,W))S(V,W,g,null,y,I,A,_,C);else break;w++}for(;w<=N&&w<=O;){const V=h[N],W=d[O]=C?kt(d[O]):ht(d[O]);if(Wt(V,W))S(V,W,g,null,y,I,A,_,C);else break;N--,O--}if(w>N){if(w<=O){const V=O+1,W=V<R?d[V].el:v;for(;w<=O;)S(null,d[w]=C?kt(d[w]):ht(d[w]),g,W,y,I,A,_,C),w++}}else if(w>O)for(;w<=N;)Dt(h[w],y,I,!0),w++;else{const V=w,W=w,J=new Map;for(w=W;w<=O;w++){const qe=d[w]=C?kt(d[w]):ht(d[w]);qe.key!=null&&J.set(qe.key,w)}let Z,oe=0;const et=O-W+1;let vn=!1,fc=0;const ts=new Array(et);for(w=0;w<et;w++)ts[w]=0;for(w=V;w<=N;w++){const qe=h[w];if(oe>=et){Dt(qe,y,I,!0);continue}let ct;if(qe.key!=null)ct=J.get(qe.key);else for(Z=W;Z<=O;Z++)if(ts[Z-W]===0&&Wt(qe,d[Z])){ct=Z;break}ct===void 0?Dt(qe,y,I,!0):(ts[ct-W]=w+1,ct>=fc?fc=ct:vn=!0,S(qe,d[ct],g,null,y,I,A,_,C),oe++)}const dc=vn?Wp(ts):Sn;for(Z=dc.length-1,w=et-1;w>=0;w--){const qe=W+w,ct=d[qe],pc=qe+1<R?d[qe+1].el:v;ts[w]===0?S(null,ct,g,pc,y,I,A,_,C):vn&&(Z<0||w!==dc[Z]?mn(ct,g,pc,2):Z--)}}},mn=(h,d,g,v,y=null)=>{const{el:I,type:A,transition:_,children:C,shapeFlag:w}=h;if(w&6){mn(h.component.subTree,d,g,v);return}if(w&128){h.suspense.move(d,g,v);return}if(w&64){A.move(h,d,g,yn);return}if(A===tt){s(I,d,g);for(let N=0;N<C.length;N++)mn(C[N],d,g,v);s(h.anchor,d,g);return}if(A===Oi){ne(h,d,g);return}if(v!==2&&w&1&&_)if(v===0)_.beforeEnter(I),s(I,d,g),$e(()=>_.enter(I),y);else{const{leave:N,delayLeave:O,afterLeave:V}=_,W=()=>s(I,d,g),J=()=>{N(I,()=>{W(),V&&V()})};O?O(I,W,J):J()}else s(I,d,g)},Dt=(h,d,g,v=!1,y=!1)=>{const{type:I,props:A,ref:_,children:C,dynamicChildren:w,shapeFlag:R,patchFlag:N,dirs:O}=h;if(_!=null&&fo(_,null,g,h,!0),R&256){d.ctx.deactivate(h);return}const V=R&1&&O,W=!dr(h);let J;if(W&&(J=A&&A.onVnodeBeforeUnmount)&&lt(J,d,h),R&6)ad(h.component,g,v);else{if(R&128){h.suspense.unmount(g,v);return}V&&Ht(h,null,d,"beforeUnmount"),R&64?h.type.remove(h,d,g,y,yn,v):w&&(I!==tt||N>0&&N&64)?gt(w,d,g,!1,!0):(I===tt&&N&384||!y&&R&16)&&gt(C,d,g),v&&uc(h)}(W&&(J=A&&A.onVnodeUnmounted)||V)&&$e(()=>{J&&lt(J,d,h),V&&Ht(h,null,d,"unmounted")},g)},uc=h=>{const{type:d,el:g,anchor:v,transition:y}=h;if(d===tt){od(g,v);return}if(d===Oi){Te(h);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:_}=y,C=()=>A(g,I);_?_(h.el,I,C):C()}else I()},od=(h,d)=>{let g;for(;h!==d;)g=p(h),r(h),h=g;r(d)},ad=(h,d,g)=>{const{bum:v,scope:y,update:I,subTree:A,um:_}=h;v&&fr(v),y.stop(),I&&(I.active=!1,Dt(A,h,d,g)),_&&$e(_,d),$e(()=>{h.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},gt=(h,d,g,v=!1,y=!1,I=0)=>{for(let A=I;A<h.length;A++)Dt(h[A],d,g,v,y)},Zs=h=>h.shapeFlag&6?Zs(h.component.subTree):h.shapeFlag&128?h.suspense.next():p(h.anchor||h.el),hc=(h,d,g)=>{h==null?d._vnode&&Dt(d._vnode,null,null,!0):S(d._vnode||null,h,d,null,null,null,g),Eu(),d._vnode=h},yn={p:S,um:Dt,m:mn,r:uc,mt:Ii,mc:le,pc:pt,pbc:Be,n:Zs,o:t};let Si,Ai;return e&&([Si,Ai]=e(yn)),{render:hc,hydrate:Si,createApp:qp(hc,Si)}}function qt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bu(t,e,n=!1){const s=t.children,r=e.children;if(U(s)&&U(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=kt(r[i]),a.el=o.el),n||Bu(o,a))}}function Wp(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Qp=t=>t.__isTeleport,tt=Symbol(void 0),ca=Symbol(void 0),vt=Symbol(void 0),Oi=Symbol(void 0),us=[];let rt=null;function Mi(t=!1){us.push(rt=t?null:[])}function Xp(){us.pop(),rt=us[us.length-1]||null}let Es=1;function Oc(t){Es+=t}function Yp(t){return t.dynamicChildren=Es>0?rt||Sn:null,Xp(),Es>0&&rt&&rt.push(t),t}function Li(t,e,n,s,r,i){return Yp(Ne(t,e,n,s,r,i,!0))}function Jp(t){return t?t.__v_isVNode===!0:!1}function Wt(t,e){return t.type===e.type&&t.key===e.key}const Yr="__vInternal",Uu=({key:t})=>t!=null?t:null,pr=({ref:t,ref_key:e,ref_for:n})=>t!=null?we(t)||Re(t)||j(t)?{i:st,r:t,k:e,f:!!n}:t:null;function Ne(t,e=null,n=null,s=0,r=null,i=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uu(e),ref:e&&pr(e),scopeId:_u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(la(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=we(n)?8:16),Es>0&&!o&&rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&rt.push(c),c}const tn=Zp;function Zp(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===kp)&&(t=vt),Jp(t)){const a=Pt(t,e,!0);return n&&la(a,n),Es>0&&!i&&rt&&(a.shapeFlag&6?rt[rt.indexOf(t)]=a:rt.push(a)),a.patchFlag|=-2,a}if(hg(t)&&(t=t.__vccOpts),e){e=eg(e);let{class:a,style:c}=e;a&&!we(a)&&(e.class=Cn(a)),Ee(c)&&(hu(c)&&!U(c)&&(c=Me({},c)),e.style=zo(c))}const o=we(t)?1:dp(t)?128:Qp(t)?64:Ee(t)?4:j(t)?2:0;return Ne(t,e,n,s,r,o,i,!0)}function eg(t){return t?hu(t)||Yr in t?Me({},t):t:null}function Pt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?ng(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Uu(a),ref:e&&e.ref?n&&r?U(r)?r.concat(pr(e)):[r,pr(e)]:pr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pt(t.ssContent),ssFallback:t.ssFallback&&Pt(t.ssFallback),el:t.el,anchor:t.anchor}}function tg(t=" ",e=0){return tn(ca,null,t,e)}function ht(t){return t==null||typeof t=="boolean"?tn(vt):U(t)?tn(tt,null,t.slice()):typeof t=="object"?kt(t):tn(ca,null,String(t))}function kt(t){return t.el===null||t.memo?t:Pt(t)}function la(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),la(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Yr in e)?e._ctx=st:r===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[tg(e)]):n=8);t.children=e,t.shapeFlag|=n}function ng(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Cn([e.class,s.class]));else if(r==="style")e.style=zo([e.style,s.style]);else if(jr(r)){const i=e[r],o=s[r];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function lt(t,e,n,s=null){Ye(t,e,7,[n,s])}const sg=Vu();let rg=0;function ig(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||sg,i={uid:rg++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mu(s,r),emitsOptions:Tu(s,r),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:s.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ap.bind(null,i),t.ce&&t.ce(i),i}let Ce=null;const og=()=>Ce||st,Mn=t=>{Ce=t,t.scope.on()},nn=()=>{Ce&&Ce.scope.off(),Ce=null};function $u(t){return t.vnode.shapeFlag&4}let bs=!1;function ag(t,e=!1){bs=e;const{props:n,children:s}=t.vnode,r=$u(t);Bp(t,n,r,e),jp(t,s);const i=r?cg(t,e):void 0;return bs=!1,i}function cg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fu(new Proxy(t.ctx,Op));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?ug(t):null;Mn(t),qn();const i=Ot(s,t,0,[t.props,r]);if(zn(),nn(),Xl(i)){if(i.then(nn,nn),e)return i.then(o=>{Mc(t,o,e)}).catch(o=>{zr(o,t,0)});t.asyncDep=i}else Mc(t,i,e)}else ju(t,e)}function Mc(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=gu(e)),ju(t,n)}let Lc;function ju(t,e,n){const s=t.type;if(!t.render){if(!e&&Lc&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Me(Me({isCustomElement:i,delimiters:a},o),c);s.render=Lc(r,l)}}t.render=s.render||it}Mn(t),qn(),Mp(t),zn(),nn()}function lg(t){return new Proxy(t.attrs,{get(e,n){return We(t,"get","$attrs"),e[n]}})}function ug(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=lg(t))},slots:t.slots,emit:t.emit,expose:e}}function Jr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(gu(fu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Tr)return Tr[n](t)}}))}function hg(t){return j(t)&&"__vccOpts"in t}const fg=(t,e)=>ep(t,e,bs),dg="3.2.37",pg="http://www.w3.org/2000/svg",Qt=typeof document<"u"?document:null,Fc=Qt&&Qt.createElement("template"),gg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Qt.createElementNS(pg,t):Qt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Qt.createTextNode(t),createComment:t=>Qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Fc.innerHTML=s?`<svg>${t}</svg>`:t;const a=Fc.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function mg(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function yg(t,e,n){const s=t.style,r=we(n);if(n&&!r){for(const i in n)po(s,i,n[i]);if(e&&!we(e))for(const i in e)n[i]==null&&po(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Pc=/\s*!important$/;function po(t,e,n){if(U(n))n.forEach(s=>po(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=vg(t,e);Pc.test(n)?t.setProperty(Hn(s),n.replace(Pc,""),"important"):t[s]=n}}const Vc=["Webkit","Moz","ms"],Fi={};function vg(t,e){const n=Fi[e];if(n)return n;let s=On(e);if(s!=="filter"&&s in t)return Fi[e]=s;s=Zl(s);for(let r=0;r<Vc.length;r++){const i=Vc[r]+s;if(i in t)return Fi[e]=i}return e}const Bc="http://www.w3.org/1999/xlink";function wg(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bc,e.slice(6,e.length)):t.setAttributeNS(Bc,e,n);else{const i=ld(e);n==null||i&&!Gl(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Eg(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gl(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[Ku,bg]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let go=0;const Tg=Promise.resolve(),_g=()=>{go=0},Ig=()=>go||(Tg.then(_g),go=Ku());function Tn(t,e,n,s){t.addEventListener(e,n,s)}function Cg(t,e,n,s){t.removeEventListener(e,n,s)}function Sg(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Ag(e);if(s){const l=i[e]=Dg(s,r);Tn(t,a,l,c)}else o&&(Cg(t,a,o,c),i[e]=void 0)}}const Uc=/(?:Once|Passive|Capture)$/;function Ag(t){let e;if(Uc.test(t)){e={};let n;for(;n=t.match(Uc);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Hn(t.slice(2)),e]}function Dg(t,e){const n=s=>{const r=s.timeStamp||Ku();(bg||r>=n.attached-1)&&Ye(xg(s,n.value),e,5,[s])};return n.value=t,n.attached=Ig(),n}function xg(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const $c=/^on[a-z]/,Ng=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?mg(t,s,r):e==="style"?yg(t,n,s):jr(e)?Go(e)||Sg(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kg(t,e,s,r))?Eg(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),wg(t,e,s,r))};function kg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&$c.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$c.test(e)&&we(n)?!1:e in t}const Rg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};wp.props;const jc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return U(e)?n=>fr(e,n):e};function Og(t){t.target.composing=!0}function Kc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Mg={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=jc(r);const i=s||r.props&&r.props.type==="number";Tn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ji(a)),t._assign(a)}),n&&Tn(t,"change",()=>{t.value=t.value.trim()}),e||(Tn(t,"compositionstart",Og),Tn(t,"compositionend",Kc),Tn(t,"change",Kc))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=jc(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Ji(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Lg=["ctrl","shift","alt","meta"],Fg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Lg.some(n=>t[`${n}Key`]&&!e.includes(n))},Pg=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Fg[e[r]];if(i&&i(n,e))return}return t(n,...s)},Vg=Me({patchProp:Ng},gg);let Hc;function Bg(){return Hc||(Hc=zp(Vg))}const Ug=(...t)=>{const e=Bg().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=$g(s);if(!r)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function $g(t){return we(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Kg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),s.push(n[u],n[f],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const m=a<<4&240|l>>2;if(s.push(m),f!==64){const T=l<<6&192|f;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hg=function(t){const e=Hu(t);return Kg.encodeByteArray(e,!0)},qu=function(t){return Hg(t).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zr())}function Gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qg(){return Zr().indexOf("Electron/")>=0}function Xg(){const t=Zr();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yg(){return Zr().indexOf("MSAppHost/")>=0}function Jg(){return typeof indexedDB=="object"}function Zg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="FirebaseError";class Gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=em,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zu.prototype.create)}}class zu{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?tm(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Gn(r,a,s)}}function tm(t,e){return t.replace(nm,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const nm=/\{\$([^}]+)}/g;function mo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(qc(i)&&qc(o)){if(!mo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t&&t._delegate?t._delegate:t}class Ts{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new qg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(im(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rm(t){return t===Gt?void 0:t}function im(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const am={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},cm=X.INFO,lm={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},um=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=lm[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gu{constructor(e){this.name=e,this._logLevel=cm,this._logHandler=um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const hm=(t,e)=>e.some(n=>t instanceof n);let zc,Gc;function fm(){return zc||(zc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dm(){return Gc||(Gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wu=new WeakMap,yo=new WeakMap,Qu=new WeakMap,Pi=new WeakMap,ua=new WeakMap;function pm(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wu.set(n,t)}).catch(()=>{}),ua.set(e,t),e}function gm(t){if(yo.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yo.set(t,e)}let vo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mm(t){vo=t(vo)}function ym(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vi(this),e,...n);return Qu.set(s,e.sort?e.sort():[e]),Mt(s)}:dm().includes(t)?function(...e){return t.apply(Vi(this),e),Mt(Wu.get(this))}:function(...e){return Mt(t.apply(Vi(this),e))}}function vm(t){return typeof t=="function"?ym(t):(t instanceof IDBTransaction&&gm(t),hm(t,fm())?new Proxy(t,vo):t)}function Mt(t){if(t instanceof IDBRequest)return pm(t);if(Pi.has(t))return Pi.get(t);const e=vm(t);return e!==t&&(Pi.set(t,e),ua.set(e,t)),e}const Vi=t=>ua.get(t);function wm(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Em=["get","getKey","getAll","getAllKeys","count"],bm=["put","add","delete","clear"],Bi=new Map;function Wc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bi.get(e))return Bi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=bm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Em.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Bi.set(e,i),i}mm(t=>({...t,get:(e,n,s)=>Wc(e,n)||t.get(e,n,s),has:(e,n)=>!!Wc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_m(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function _m(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wo="@firebase/app",Qc="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Gu("@firebase/app"),Im="@firebase/app-compat",Cm="@firebase/analytics-compat",Sm="@firebase/analytics",Am="@firebase/app-check-compat",Dm="@firebase/app-check",xm="@firebase/auth",Nm="@firebase/auth-compat",km="@firebase/database",Rm="@firebase/database-compat",Om="@firebase/functions",Mm="@firebase/functions-compat",Lm="@firebase/installations",Fm="@firebase/installations-compat",Pm="@firebase/messaging",Vm="@firebase/messaging-compat",Bm="@firebase/performance",Um="@firebase/performance-compat",$m="@firebase/remote-config",jm="@firebase/remote-config-compat",Km="@firebase/storage",Hm="@firebase/storage-compat",qm="@firebase/firestore",zm="@firebase/firestore-compat",Gm="firebase",Wm="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="[DEFAULT]",Qm={[wo]:"fire-core",[Im]:"fire-core-compat",[Sm]:"fire-analytics",[Cm]:"fire-analytics-compat",[Dm]:"fire-app-check",[Am]:"fire-app-check-compat",[xm]:"fire-auth",[Nm]:"fire-auth-compat",[km]:"fire-rtdb",[Rm]:"fire-rtdb-compat",[Om]:"fire-fn",[Mm]:"fire-fn-compat",[Lm]:"fire-iid",[Fm]:"fire-iid-compat",[Pm]:"fire-fcm",[Vm]:"fire-fcm-compat",[Bm]:"fire-perf",[Um]:"fire-perf-compat",[$m]:"fire-rc",[jm]:"fire-rc-compat",[Km]:"fire-gcs",[Hm]:"fire-gcs-compat",[qm]:"fire-fst",[zm]:"fire-fst-compat","fire-js":"fire-js",[Gm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Map,Eo=new Map;function Xm(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cr(t){const e=t.name;if(Eo.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;Eo.set(e,t);for(const n of Ir.values())Xm(n,t);return!0}function Ym(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cn=new zu("app","Firebase",Jm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=Wm;function ty(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Xu,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw cn.create("bad-app-name",{appName:String(s)});const r=Ir.get(s);if(r){if(mo(t,r.options)&&mo(n,r.config))return r;throw cn.create("duplicate-app",{appName:s})}const i=new om(s);for(const a of Eo.values())i.addComponent(a);const o=new Zm(t,n,i);return Ir.set(s,o),o}function ny(t=Xu){const e=Ir.get(t);if(!e)throw cn.create("no-app",{appName:t});return e}function xn(t,e,n){var s;let r=(s=Qm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(a.join(" "));return}Cr(new Ts(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="firebase-heartbeat-database",ry=1,_s="firebase-heartbeat-store";let Ui=null;function Yu(){return Ui||(Ui=wm(sy,ry,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),Ui}async function iy(t){var e;try{return(await Yu()).transaction(_s).objectStore(_s).get(Ju(t))}catch(n){if(n instanceof Gn)an.warn(n.message);else{const s=cn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});an.warn(s.message)}}}async function Xc(t,e){var n;try{const r=(await Yu()).transaction(_s,"readwrite");return await r.objectStore(_s).put(e,Ju(t)),r.done}catch(s){if(s instanceof Gn)an.warn(s.message);else{const r=cn.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});an.warn(r.message)}}}function Ju(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=1024,ay=30*24*60*60*1e3;class cy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uy(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ay}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yc(),{heartbeatsToSend:n,unsentEntries:s}=ly(this._heartbeatsCache.heartbeats),r=qu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yc(){return new Date().toISOString().substring(0,10)}function ly(t,e=oy){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Jc(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Jc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class uy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jg()?Zg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Jc(t){return qu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){Cr(new Ts("platform-logger",e=>new Tm(e),"PRIVATE")),Cr(new Ts("heartbeat",e=>new cy(e),"PRIVATE")),xn(wo,Qc,t),xn(wo,Qc,"esm2017"),xn("fire-js","")}hy("");var fy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,ha=ha||{},P=fy||self;function Sr(){}function bo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ls(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function dy(t){return Object.prototype.hasOwnProperty.call(t,$i)&&t[$i]||(t[$i]=++py)}var $i="closure_uid_"+(1e9*Math.random()>>>0),py=0;function gy(t,e,n){return t.call.apply(t.bind,arguments)}function my(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Se(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=gy:Se=my,Se.apply(null,arguments)}function ir(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function $t(){this.s=this.s,this.o=this.o}var yy=0;$t.prototype.s=!1;$t.prototype.na=function(){!this.s&&(this.s=!0,this.M(),yy!=0)&&dy(this)};$t.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zu=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},eh=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<s;i++)i in r&&e.call(n,r[i],i,t)};function vy(t){e:{var e=lv;const n=t.length,s=typeof t=="string"?t.split(""):t;for(let r=0;r<n;r++)if(r in s&&e.call(void 0,s[r],r,t)){e=r;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Zc(t){return Array.prototype.concat.apply([],arguments)}function fa(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Ar(t){return/^[\s\xa0]*$/.test(t)}var el=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fe(t,e){return t.indexOf(e)!=-1}function ji(t,e){return t<e?-1:t>e?1:0}var Pe;e:{var tl=P.navigator;if(tl){var nl=tl.userAgent;if(nl){Pe=nl;break e}}Pe=""}function da(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function th(t){const e={};for(const n in t)e[n]=t[n];return e}var sl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nh(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<sl.length;i++)n=sl[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function pa(t){return pa[" "](t),t}pa[" "]=Sr;function wy(t){var e=Ty;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Ey=Fe(Pe,"Opera"),Ln=Fe(Pe,"Trident")||Fe(Pe,"MSIE"),sh=Fe(Pe,"Edge"),To=sh||Ln,rh=Fe(Pe,"Gecko")&&!(Fe(Pe.toLowerCase(),"webkit")&&!Fe(Pe,"Edge"))&&!(Fe(Pe,"Trident")||Fe(Pe,"MSIE"))&&!Fe(Pe,"Edge"),by=Fe(Pe.toLowerCase(),"webkit")&&!Fe(Pe,"Edge");function ih(){var t=P.document;return t?t.documentMode:void 0}var Dr;e:{var Ki="",Hi=function(){var t=Pe;if(rh)return/rv:([^\);]+)(\)|;)/.exec(t);if(sh)return/Edge\/([\d\.]+)/.exec(t);if(Ln)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(by)return/WebKit\/(\S+)/.exec(t);if(Ey)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Hi&&(Ki=Hi?Hi[1]:""),Ln){var qi=ih();if(qi!=null&&qi>parseFloat(Ki)){Dr=String(qi);break e}}Dr=Ki}var Ty={};function _y(){return wy(function(){let t=0;const e=el(String(Dr)).split("."),n=el("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ji(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ji(r[2].length==0,i[2].length==0)||ji(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var _o;if(P.document&&Ln){var rl=ih();_o=rl||parseInt(Dr,10)||void 0}else _o=void 0;var Iy=_o,Cy=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{P.addEventListener("test",Sr,e),P.removeEventListener("test",Sr,e)}catch{}return t}();function Oe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};function Is(t,e){if(Oe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(rh){e:{try{pa(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Sy[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Is.Z.h.call(this)}}xe(Is,Oe);var Sy={2:"touch",3:"pen",4:"mouse"};Is.prototype.h=function(){Is.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fs="closure_listenable_"+(1e6*Math.random()|0),Ay=0;function Dy(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=r,this.key=++Ay,this.ca=this.fa=!1}function ei(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ti(t){this.src=t,this.g={},this.h=0}ti.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Co(t,e,s,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new Dy(e,this.src,i,!!s,r),e.fa=n,t.push(e)),e};function Io(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Zu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ei(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Co(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==s)return r}return-1}var ga="closure_lm_"+(1e6*Math.random()|0),zi={};function oh(t,e,n,s,r){if(s&&s.once)return ch(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)oh(t,e[i],n,s,r);return null}return n=va(n),t&&t[Fs]?t.N(e,n,Ls(s)?!!s.capture:!!s,r):ah(t,e,n,!1,s,r)}function ah(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Ls(r)?!!r.capture:!!r,a=ya(t);if(a||(t[ga]=a=new ti(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=xy(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Cy||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(uh(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xy(){function t(n){return e.call(t.src,t.listener,n)}var e=Ny;return t}function ch(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ch(t,e[i],n,s,r);return null}return n=va(n),t&&t[Fs]?t.O(e,n,Ls(s)?!!s.capture:!!s,r):ah(t,e,n,!0,s,r)}function lh(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)lh(t,e[i],n,s,r);else s=Ls(s)?!!s.capture:!!s,n=va(n),t&&t[Fs]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Co(i,n,s,r),-1<n&&(ei(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ya(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Co(e,n,s,r)),(n=-1<t?e[t]:null)&&ma(n))}function ma(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Fs])Io(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(uh(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ya(e))?(Io(n,t),n.h==0&&(n.src=null,e[ga]=null)):ei(t)}}}function uh(t){return t in zi?zi[t]:zi[t]="on"+t}function Ny(t,e){if(t.ca)t=!0;else{e=new Is(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&ma(t),t=n.call(s,e)}return t}function ya(t){return t=t[ga],t instanceof ti?t:null}var Gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function va(t){return typeof t=="function"?t:(t[Gi]||(t[Gi]=function(e){return t.handleEvent(e)}),t[Gi])}function be(){$t.call(this),this.i=new ti(this),this.P=this,this.I=null}xe(be,$t);be.prototype[Fs]=!0;be.prototype.removeEventListener=function(t,e,n,s){lh(this,t,e,n,s)};function Ae(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Oe(e,t);else if(e instanceof Oe)e.target=e.target||t;else{var r=e;e=new Oe(s,t),nh(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=or(o,s,!0,e)&&r}if(o=e.g=t,r=or(o,s,!0,e)&&r,r=or(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=or(o,s,!1,e)&&r}be.prototype.M=function(){if(be.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ei(n[s]);delete t.g[e],t.h--}}this.I=null};be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function or(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Io(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var wa=P.JSON.stringify;function ky(){var t=fh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Ry{constructor(){this.h=this.g=null}add(e,n){const s=hh.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var hh=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Oy,t=>t.reset());class Oy{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function My(t){P.setTimeout(()=>{throw t},0)}function Ea(t,e){So||Ly(),Ao||(So(),Ao=!0),fh.add(t,e)}var So;function Ly(){var t=P.Promise.resolve(void 0);So=function(){t.then(Fy)}}var Ao=!1,fh=new Ry;function Fy(){for(var t;t=ky();){try{t.h.call(t.g)}catch(n){My(n)}var e=hh;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ao=!1}function ni(t,e){be.call(this),this.h=t||1,this.g=e||P,this.j=Se(this.kb,this),this.l=Date.now()}xe(ni,be);D=ni.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ae(this,"tick"),this.da&&(ba(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ba(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){ni.Z.M.call(this),ba(this),delete this.g};function Ta(t,e,n){if(typeof t=="function")n&&(t=Se(t,n));else if(t&&typeof t.handleEvent=="function")t=Se(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:P.setTimeout(t,e||0)}function dh(t){t.g=Ta(()=>{t.g=null,t.i&&(t.i=!1,dh(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Py extends $t{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:dh(this)}M(){super.M(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(t){$t.call(this),this.h=t,this.g={}}xe(Cs,$t);var il=[];function ph(t,e,n,s){Array.isArray(n)||(n&&(il[0]=n.toString()),n=il);for(var r=0;r<n.length;r++){var i=oh(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function gh(t){da(t.g,function(e,n){this.g.hasOwnProperty(n)&&ma(e)},t),t.g={}}Cs.prototype.M=function(){Cs.Z.M.call(this),gh(this)};Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function si(){this.g=!0}si.prototype.Aa=function(){this.g=!1};function Vy(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var f=u.split("_");o=2<=f.length&&f[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function By(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function _n(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$y(t,n)+(s?" "+s:"")})}function Uy(t,e){t.info(function(){return"TIMEOUT: "+e})}si.prototype.info=function(){};function $y(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return wa(n)}catch{return e}}var dn={},ol=null;function ri(){return ol=ol||new be}dn.Ma="serverreachability";function mh(t){Oe.call(this,dn.Ma,t)}xe(mh,Oe);function Ss(t){const e=ri();Ae(e,new mh(e))}dn.STAT_EVENT="statevent";function yh(t,e){Oe.call(this,dn.STAT_EVENT,t),this.stat=e}xe(yh,Oe);function Ve(t){const e=ri();Ae(e,new yh(e,t))}dn.Na="timingevent";function vh(t,e){Oe.call(this,dn.Na,t),this.size=e}xe(vh,Oe);function Ps(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){t()},e)}var ii={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},wh={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function _a(){}_a.prototype.h=null;function al(t){return t.h||(t.h=t.i())}function Eh(){}var Vs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ia(){Oe.call(this,"d")}xe(Ia,Oe);function Ca(){Oe.call(this,"c")}xe(Ca,Oe);var Do;function oi(){}xe(oi,_a);oi.prototype.g=function(){return new XMLHttpRequest};oi.prototype.i=function(){return{}};Do=new oi;function Bs(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Cs(this),this.P=jy,t=To?125:void 0,this.W=new ni(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new bh}function bh(){this.i=null,this.g="",this.h=!1}var jy=45e3,xo={},xr={};D=Bs.prototype;D.setTimeout=function(t){this.P=t};function No(t,e,n){t.K=1,t.v=ci(Tt(e)),t.s=n,t.U=!0,Th(t,null)}function Th(t,e){t.F=Date.now(),Us(t),t.A=Tt(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),xh(n.h,"t",s),t.C=0,n=t.l.H,t.h=new bh,t.g=Qh(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Py(Se(t.Ia,t,t.g),t.O)),ph(t.V,t.g,"readystatechange",t.gb),e=t.H?th(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ss(),Vy(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&yt(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const u=yt(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(u!=3||To||this.g&&(this.h.h||this.g.ga()||hl(this.g)))){this.I||u!=4||e==7||(e==8||0>=f?Ss(3):Ss(2)),ai(this);var n=this.g.ba();this.N=n;t:if(_h(this)){var s=hl(this.g);t="";var r=s.length,i=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),hs(this);var o="";break t}this.h.i=new P.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,By(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ar(a)){var l=a;break t}}l=null}if(n=l)_n(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ko(this,n);else{this.i=!1,this.o=3,Ve(12),Yt(this),hs(this);break e}}this.U?(Ih(this,u,o),To&&this.i&&u==3&&(ph(this.V,this.W,"tick",this.fb),this.W.start())):(_n(this.j,this.m,o,null),ko(this,o)),u==4&&Yt(this),this.i&&!this.I&&(u==4?qh(this.l,this):(this.i=!1,Us(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ve(12)):(this.o=0,Ve(13)),Yt(this),hs(this)}}}catch{}finally{}};function _h(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Ih(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Ky(t,n),r==xr){e==4&&(t.o=4,Ve(14),s=!1),_n(t.j,t.m,null,"[Incomplete Response]");break}else if(r==xo){t.o=4,Ve(15),_n(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else _n(t.j,t.m,r,null),ko(t,r);_h(t)&&r!=xr&&r!=xo&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ve(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ma(e),e.L=!0,Ve(11))):(_n(t.j,t.m,n,"[Invalid Chunked Response]"),Yt(t),hs(t))}D.fb=function(){if(this.g){var t=yt(this.g),e=this.g.ga();this.C<e.length&&(ai(this),Ih(this,t,e),this.i&&t!=4&&Us(this))}};function Ky(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?xr:(n=Number(e.substring(n,s)),isNaN(n)?xo:(s+=1,s+n>e.length?xr:(e=e.substr(s,n),t.C=s+n,e)))}D.cancel=function(){this.I=!0,Yt(this)};function Us(t){t.Y=Date.now()+t.P,Ch(t,t.P)}function Ch(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ps(Se(t.eb,t),e)}function ai(t){t.B&&(P.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Uy(this.j,this.A),this.K!=2&&(Ss(),Ve(17)),Yt(this),this.o=2,hs(this)):Ch(this,this.Y-t)};function hs(t){t.l.G==0||t.I||qh(t.l,t)}function Yt(t){ai(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ba(t.W),gh(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ko(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ro(n.i,t))){if(n.I=t.N,!t.J&&Ro(n.i,t)&&n.G==3){try{var s=n.Ca.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Or(n),hi(n);else break e;Oa(n),Ve(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ps(Se(n.ab,n),6e3));if(1>=Rh(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Jt(n,11)}else if((t.J||n.g==t)&&Or(n),!Ar(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const f=l[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const T=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var i=s.i;!i.g&&(Fe(T,"spdy")||Fe(T,"quic")||Fe(T,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Da(i,i.h),i.h=null))}if(s.D){const x=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(s.sa=x,ae(s.F,s.D,x))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=t;if(s.oa=Wh(s,s.H?s.la:null,s.W),o.J){Oh(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(ai(a),Us(a)),s.g=o}else Kh(s);0<n.l.length&&fi(n)}else l[0]!="stop"&&l[0]!="close"||Jt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Jt(n,7):Ra(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ss(4)}catch{}}function Hy(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(bo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Sa(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bo(t)||typeof t=="string")eh(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(bo(t)||typeof t=="string"){n=[];for(var s=t.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,t)n[s++]=r;s=Hy(t),r=s.length;for(var i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}}function Wn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof Wn)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}D=Wn.prototype;D.R=function(){Aa(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Aa(this),this.g.concat()};function Aa(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ln(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)s=t.g[e],ln(r,s)||(t.g[n++]=s,r[s]=1),e++;t.g.length=n}}D.get=function(t,e){return ln(this.h,t)?this.h[t]:e};D.set=function(t,e){ln(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);t.call(e,i,r,this)}};function ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var Sh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qy(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function un(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof un){this.g=e!==void 0?e:t.g,Nr(this,t.j),this.s=t.s,kr(this,t.i),Rr(this,t.m),this.l=t.l,e=t.h;var n=new As;n.i=e.i,e.g&&(n.g=new Wn(e.g),n.h=e.h),cl(this,n),this.o=t.o}else t&&(n=String(t).match(Sh))?(this.g=!!e,Nr(this,n[1]||"",!0),this.s=fs(n[2]||""),kr(this,n[3]||"",!0),Rr(this,n[4]),this.l=fs(n[5]||"",!0),cl(this,n[6]||"",!0),this.o=fs(n[7]||"")):(this.g=!!e,this.h=new As(null,this.g))}un.prototype.toString=function(){var t=[],e=this.j;e&&t.push(is(e,ll,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(is(e,ll,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(is(n,n.charAt(0)=="/"?Xy:Qy,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",is(n,Jy)),t.join("")};function Tt(t){return new un(t)}function Nr(t,e,n){t.j=n?fs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function kr(t,e,n){t.i=n?fs(e,!0):e}function Rr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cl(t,e,n){e instanceof As?(t.h=e,Zy(t.h,t.g)):(n||(e=is(e,Yy)),t.h=new As(e,t.g))}function ae(t,e,n){t.h.set(e,n)}function ci(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zy(t){return t instanceof un?Tt(t):new un(t,void 0)}function Gy(t,e,n,s){var r=new un(null,void 0);return t&&Nr(r,t),e&&kr(r,e),n&&Rr(r,n),s&&(r.l=s),r}function fs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function is(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Wy),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Wy(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ll=/[#\/\?@]/g,Qy=/[#\?:]/g,Xy=/[#\?]/g,Yy=/[#\?@]/g,Jy=/#/g;function As(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jt(t){t.g||(t.g=new Wn,t.h=0,t.i&&qy(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=As.prototype;D.add=function(t,e){jt(this),this.i=null,t=Qn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ah(t,e){jt(t),e=Qn(t,e),ln(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ln(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Aa(t)))}function Dh(t,e){return jt(t),e=Qn(t,e),ln(t.g.h,e)}D.forEach=function(t,e){jt(this),this.g.forEach(function(n,s){eh(n,function(r){t.call(e,r,s,this)},this)},this)};D.T=function(){jt(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var r=t[s],i=0;i<r.length;i++)n.push(e[s]);return n};D.R=function(t){jt(this);var e=[];if(typeof t=="string")Dh(this,t)&&(e=Zc(e,this.g.get(Qn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Zc(e,t[n])}return e};D.set=function(t,e){return jt(this),this.i=null,t=Qn(this,t),Dh(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function xh(t,e,n){Ah(t,e),0<n.length&&(t.i=null,t.g.set(Qn(t,e),fa(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};function Qn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Zy(t,e){e&&!t.j&&(jt(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Ah(this,s),xh(this,r,n))},t)),t.j=e}var ev=class{constructor(t,e){this.h=t,this.g=e}};function Nh(t){this.l=t||tv,P.PerformanceNavigationTiming?(t=P.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(P.g&&P.g.Ea&&P.g.Ea()&&P.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tv=10;function kh(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rh(t){return t.h?1:t.g?t.g.size:0}function Ro(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Da(t,e){t.g?t.g.add(e):t.h=e}function Oh(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nh.prototype.cancel=function(){if(this.i=Mh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mh(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return fa(t.i)}function xa(){}xa.prototype.stringify=function(t){return P.JSON.stringify(t,void 0)};xa.prototype.parse=function(t){return P.JSON.parse(t,void 0)};function nv(){this.g=new xa}function sv(t,e,n){const s=n||"";try{Sa(t,function(r,i){let o=r;Ls(r)&&(o=wa(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function rv(t,e){const n=new si;if(P.Image){const s=new Image;s.onload=ir(ar,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ir(ar,n,s,"TestLoadImage: error",!1,e),s.onabort=ir(ar,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ir(ar,n,s,"TestLoadImage: timeout",!1,e),P.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ar(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function $s(t){this.l=t.$b||null,this.j=t.ib||!1}xe($s,_a);$s.prototype.g=function(){return new li(this.l,this.j)};$s.prototype.i=function(t){return function(){return t}}({});function li(t,e){be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Na,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(li,be);var Na=0;D=li.prototype;D.open=function(t,e){if(this.readyState!=Na)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ds(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||P).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,js(this)),this.readyState=Na};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Lh(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Lh(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?js(this):Ds(this),this.readyState==3&&Lh(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,js(this))};D.Ta=function(t){this.g&&(this.response=t,js(this))};D.ha=function(){this.g&&js(this)};function js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ds(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ds(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var iv=P.JSON.parse;function pe(t){be.call(this),this.headers=new Wn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Fh,this.K=this.L=!1}xe(pe,be);var Fh="",ov=/^https?$/i,av=["POST","PUT"];D=pe.prototype;D.ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Do.g(),this.C=this.u?al(this.u):al(Do),this.g.onreadystatechange=Se(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){ul(this,i);return}t=n||"";const r=new Wn(this.headers);s&&Sa(s,function(i,o){r.set(o,i)}),s=vy(r.T()),n=P.FormData&&t instanceof P.FormData,!(0<=Zu(av,e))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bh(this),0<this.B&&((this.K=cv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.pa,this)):this.A=Ta(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){ul(this,i)}};function cv(t){return Ln&&_y()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function lv(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof ha<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function ul(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ph(t),ui(t)}function Ph(t){t.D||(t.D=!0,Ae(t,"complete"),Ae(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),ui(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ui(this,!0)),pe.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Vh(this):this.cb())};D.cb=function(){Vh(this)};function Vh(t){if(t.h&&typeof ha<"u"&&(!t.C[1]||yt(t)!=4||t.ba()!=2)){if(t.v&&yt(t)==4)Ta(t.Fa,0,t);else if(Ae(t,"readystatechange"),yt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Sh)[1]||null;if(!r&&P.self&&P.self.location){var i=P.self.location.protocol;r=i.substr(0,i.length-1)}s=!ov.test(r?r.toLowerCase():"")}n=s}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var o=2<yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Ph(t)}}finally{ui(t)}}}}function ui(t,e){if(t.g){Bh(t);const n=t.g,s=t.C[0]?Sr:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=s}catch{}}}function Bh(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(P.clearTimeout(t.A),t.A=null)}function yt(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<yt(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),iv(e)}};function hl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Fh:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function uv(t){let e="";return da(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function ka(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=uv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Uh(t){this.za=0,this.l=[],this.h=new si,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ns("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ns("baseRetryDelayMs",5e3,t),this.$a=ns("retryDelaySeedMs",1e4,t),this.Ya=ns("forwardChannelMaxRetries",2,t),this.ra=ns("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Nh(t&&t.concurrentRequestLimit),this.Ca=new nv,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=Uh.prototype;D.ma=8;D.G=1;function Ra(t){if($h(t),t.G==3){var e=t.V++,n=Tt(t.F);ae(n,"SID",t.J),ae(n,"RID",e),ae(n,"TYPE","terminate"),Ks(t,n),e=new Bs(t,t.h,e,void 0),e.K=2,e.v=ci(Tt(n)),n=!1,P.navigator&&P.navigator.sendBeacon&&(n=P.navigator.sendBeacon(e.v.toString(),"")),!n&&P.Image&&(new Image().src=e.v,n=!0),n||(e.g=Qh(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Us(e)}Gh(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function hi(t){t.g&&(Ma(t),t.g.cancel(),t.g=null)}function $h(t){hi(t),t.u&&(P.clearTimeout(t.u),t.u=null),Or(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&P.clearTimeout(t.m),t.m=null)}function Wi(t,e){t.l.push(new ev(t.Za++,e)),t.G==3&&fi(t)}function fi(t){kh(t.i)||t.m||(t.m=!0,Ea(t.Ha,t),t.C=0)}function hv(t,e){return Rh(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ps(Se(t.Ha,t,e),zh(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Bs(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=th(i),nh(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=jh(this,r,e),n=Tt(this.F),ae(n,"RID",t),ae(n,"CVER",22),this.D&&ae(n,"X-HTTP-Session-Id",this.D),Ks(this,n),this.o&&i&&ka(n,this.o,i),Da(this.i,r),this.Ra&&ae(n,"TYPE","init"),this.ja?(ae(n,"$req",e),ae(n,"SID","null"),r.$=!0,No(r,n,null)):No(r,n,e),this.G=2}}else this.G==3&&(t?fl(this,t):this.l.length==0||kh(this.i)||fl(this))};function fl(t,e){var n;e?n=e.m:n=t.V++;const s=Tt(t.F);ae(s,"SID",t.J),ae(s,"RID",n),ae(s,"AID",t.U),Ks(t,s),t.o&&t.s&&ka(s,t.o,t.s),n=new Bs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=jh(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Da(t.i,n),No(n,s,e)}function Ks(t,e){t.j&&Sa({},function(n,s){ae(e,s,n)})}function jh(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Se(t.j.Oa,t.j,t):null;e:{var r=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].h;const u=r[c].g;if(l-=i,0>l)i=Math.max(0,r[c].h-100),a=!1;else try{sv(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,s}function Kh(t){t.g||t.u||(t.Y=1,Ea(t.Ga,t),t.A=0)}function Oa(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ps(Se(t.Ga,t),zh(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Hh(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ps(Se(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ve(10),hi(this),Hh(this))};function Ma(t){t.B!=null&&(P.clearTimeout(t.B),t.B=null)}function Hh(t){t.g=new Bs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Tt(t.oa);ae(e,"RID","rpc"),ae(e,"SID",t.J),ae(e,"CI",t.N?"0":"1"),ae(e,"AID",t.U),Ks(t,e),ae(e,"TYPE","xmlhttp"),t.o&&t.s&&ka(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ci(Tt(e)),n.s=null,n.U=!0,Th(n,t)}D.ab=function(){this.v!=null&&(this.v=null,hi(this),Oa(this),Ve(19))};function Or(t){t.v!=null&&(P.clearTimeout(t.v),t.v=null)}function qh(t,e){var n=null;if(t.g==e){Or(t),Ma(t),t.g=null;var s=2}else if(Ro(t.i,e))n=e.D,Oh(t.i,e),s=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=ri(),Ae(s,new vh(s,n)),fi(t)}else Kh(t);else if(r=e.o,r==3||r==0&&0<t.I||!(s==1&&hv(t,e)||s==2&&Oa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Jt(t,5);break;case 4:Jt(t,10);break;case 3:Jt(t,6);break;default:Jt(t,2)}}}function zh(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Jt(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var s=Se(t.jb,t);n||(n=new un("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||Nr(n,"https"),ci(n)),rv(n.toString(),s)}else Ve(2);t.G=0,t.j&&t.j.va(e),Gh(t),$h(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ve(2)):(this.h.info("Failed to ping google.com"),Ve(1))};function Gh(t){t.G=0,t.I=-1,t.j&&((Mh(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,fa(t.l),t.l.length=0),t.j.ua())}function Wh(t,e,n){let s=zy(n);if(s.i!="")e&&kr(s,e+"."+s.i),Rr(s,s.m);else{const r=P.location;s=Gy(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&da(t.aa,function(r,i){ae(s,i,r)}),e=t.D,n=t.sa,e&&n&&ae(s,e,n),ae(s,"VER",t.ma),Ks(t,s),s}function Qh(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new pe(new $s({ib:!0})):new pe(t.qa),e.L=t.H,e}function Xh(){}D=Xh.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function Mr(){if(Ln&&!(10<=Number(Iy)))throw Error("Environmental error: no available transport.")}Mr.prototype.g=function(t,e){return new Qe(t,e)};function Qe(t,e){be.call(this),this.g=new Uh(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ar(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ar(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xn(this)}xe(Qe,be);Qe.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ea(Se(t.hb,t,e))),Ve(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Wh(t,null,t.W),fi(t)};Qe.prototype.close=function(){Ra(this.g)};Qe.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Wi(this.g,e)}else this.v?(e={},e.__data__=wa(t),Wi(this.g,e)):Wi(this.g,t)};Qe.prototype.M=function(){this.g.j=null,delete this.j,Ra(this.g),delete this.g,Qe.Z.M.call(this)};function Yh(t){Ia.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(Yh,Ia);function Jh(){Ca.call(this),this.status=1}xe(Jh,Ca);function Xn(t){this.g=t}xe(Xn,Xh);Xn.prototype.xa=function(){Ae(this.g,"a")};Xn.prototype.wa=function(t){Ae(this.g,new Yh(t))};Xn.prototype.va=function(t){Ae(this.g,new Jh)};Xn.prototype.ua=function(){Ae(this.g,"b")};Mr.prototype.createWebChannel=Mr.prototype.g;Qe.prototype.send=Qe.prototype.u;Qe.prototype.open=Qe.prototype.m;Qe.prototype.close=Qe.prototype.close;ii.NO_ERROR=0;ii.TIMEOUT=8;ii.HTTP_ERROR=6;wh.COMPLETE="complete";Eh.EventType=Vs;Vs.OPEN="a";Vs.CLOSE="b";Vs.ERROR="c";Vs.MESSAGE="d";be.prototype.listen=be.prototype.N;pe.prototype.listenOnce=pe.prototype.O;pe.prototype.getLastError=pe.prototype.La;pe.prototype.getLastErrorCode=pe.prototype.Da;pe.prototype.getStatus=pe.prototype.ba;pe.prototype.getResponseJson=pe.prototype.Qa;pe.prototype.getResponseText=pe.prototype.ga;pe.prototype.send=pe.prototype.ea;var fv=function(){return new Mr},dv=function(){return ri()},Qi=ii,pv=wh,gv=dn,dl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},mv=$s,cr=Eh,yv=pe;const pl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Gu("@firebase/firestore");function gl(){return hn.logLevel}function k(t,...e){if(hn.logLevel<=X.DEBUG){const n=e.map(La);hn.debug(`Firestore (${Yn}): ${t}`,...n)}}function _t(t,...e){if(hn.logLevel<=X.ERROR){const n=e.map(La);hn.error(`Firestore (${Yn}): ${t}`,...n)}}function ml(t,...e){if(hn.logLevel<=X.WARN){const n=e.map(La);hn.warn(`Firestore (${Yn}): ${t}`,...n)}}function La(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Yn}) INTERNAL ASSERTION FAILED: `+t;throw _t(e),new Error(e)}function se(t,e){t||B()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class Ev{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(se(typeof s.accessToken=="string"),new vv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new je(e)}}class bv{constructor(e,n,s){this.type="FirstParty",this.user=je.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Tv{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new bv(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _v{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Iv{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const s=i=>{i.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string"),this.p=n.token,new _v(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Cv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function Y(t,e){return t<e?-1:t>e?1:0}function Fn(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ge(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new ge(0,0))}static max(){return new K(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s){n===void 0?n=0:n>e.length&&B(),s===void 0?s=e.length-n:s>e.length-n&&B(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return xs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xs?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends xs{construct(e,n,s){return new ce(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const Sv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends xs{construct(e,n,s){return new ke(e,n,s)}static isValidIdentifier(e){return Sv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(n)}static emptyPath(){return new ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ce.fromString(e))}static fromName(e){return new L(ce.fromString(e).popFirst(5))}static empty(){return new L(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ce(e.slice()))}}function Av(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=K.fromTimestamp(s===1e9?new ge(n+1,0):new ge(n,s));return new Vt(r,L.empty(),e)}function Dv(t){return new Vt(t.readTime,t.key,-1)}class Vt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Vt(K.min(),L.empty(),-1)}static max(){return new Vt(K.max(),L.empty(),-1)}}function xv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Nv)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ef(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fa.ot=-1;class ye{constructor(e,n){this.comparator=e,this.root=n||_e.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_e.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lr(this.root,e,this.comparator,!1)}getReverseIterator(){return new lr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lr(this.root,e,this.comparator,!0)}}class lr{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _e{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:_e.RED,this.left=r!=null?r:_e.EMPTY,this.right=i!=null?i:_e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new _e(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return _e.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}_e.EMPTY=null,_e.RED=!0,_e.BLACK=!1;_e.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,s,r){return this}insert(t,e,n){return new _e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vl(this.data.getIterator())}getIteratorFrom(e){return new vl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class vl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Je([])}unionWith(e){let n=new me(ke.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Je(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fn(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new De(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new De(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Rv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bt(t){if(se(!!t),typeof t=="string"){let e=0;const n=Rv.exec(t);if(se(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pn(t){return typeof t=="string"?De.fromBase64String(t):De.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nf(t){const e=t.mapValue.fields.__previous_value__;return tf(e)?nf(e):e}function Ns(t){const e=Bt(t.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Vn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){return t==null}function Lr(t){return t===0&&1/t==-1/0}function Mv(t){return typeof t=="number"&&Number.isInteger(t)&&!Lr(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tf(t)?4:Lv(t)?9007199254740991:10:B()}function ft(t,e){if(t===e)return!0;const n=fn(t);if(n!==fn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ns(t).isEqual(Ns(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Bt(s.timestampValue),o=Bt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Pn(s.bytesValue).isEqual(Pn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return de(s.geoPointValue.latitude)===de(r.geoPointValue.latitude)&&de(s.geoPointValue.longitude)===de(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return de(s.integerValue)===de(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=de(s.doubleValue),o=de(r.doubleValue);return i===o?Lr(i)===Lr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Fn(t.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(yl(i)!==yl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ft(i[a],o[a])))return!1;return!0}(t,e);default:return B()}}function ks(t,e){return(t.values||[]).find(n=>ft(n,e))!==void 0}function Bn(t,e){if(t===e)return 0;const n=fn(t),s=fn(e);if(n!==s)return Y(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=de(r.integerValue||r.doubleValue),a=de(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wl(t.timestampValue,e.timestampValue);case 4:return wl(Ns(t),Ns(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Pn(r),a=Pn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=Y(o[c],a[c]);if(l!==0)return l}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=Y(de(r.latitude),de(i.latitude));return o!==0?o:Y(de(r.longitude),de(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Bn(o[c],a[c]);if(l)return l}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ur.mapValue&&i===ur.mapValue)return 0;if(r===ur.mapValue)return 1;if(i===ur.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const f=Y(a[u],l[u]);if(f!==0)return f;const p=Bn(o[a[u]],c[l[u]]);if(p!==0)return p}return Y(a.length,l.length)}(t.mapValue,e.mapValue);default:throw B()}}function wl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Bt(t),s=Bt(e),r=Y(n.seconds,s.seconds);return r!==0?r:Y(n.nanos,s.nanos)}function Nn(t){return Oo(t)}function Oo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Bt(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Oo(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Oo(s.fields[a])}`;return i+"}"}(t.mapValue):B();var e,n}function Mo(t){return!!t&&"integerValue"in t}function Pa(t){return!!t&&"arrayValue"in t}function El(t){return!!t&&"nullValue"in t}function bl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gr(t){return!!t&&"mapValue"in t}function ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ds(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ds(n)}setAll(e){let n=ke.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=ds(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());gr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];gr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){pn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ke(ds(this.value))}}function sf(t){const e=[];return pn(t.fields,(n,s)=>{const r=new ke([n]);if(gr(s)){const i=sf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n,s,r,i,o){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ie(e,0,K.min(),K.min(),Ke.empty(),0)}static newFoundDocument(e,n,s){return new Ie(e,1,n,K.min(),s,0)}static newNoDocument(e,n){return new Ie(e,2,n,K.min(),Ke.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,K.min(),Ke.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Tl(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Fv(t,e,n,s,r,i,o)}function Va(t){const e=$(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+Nn(r.value);var r}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),di(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Nn(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Nn(s)).join(",")),e.ut=n}return e.ut}function Pv(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Nn(s.value)}`;var s}).join(", ")}]`),di(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Nn(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Nn(n)).join(",")),`Target(${e})`}function Ba(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!qv(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],s=e.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!ft(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Il(t.startAt,e.startAt)&&Il(t.endAt,e.endAt)}function Lo(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class He extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,s):new Vv(e,n,s):n==="array-contains"?new $v(e,s):n==="in"?new jv(e,s):n==="not-in"?new Kv(e,s):n==="array-contains-any"?new Hv(e,s):new He(e,n,s)}static ct(e,n,s){return n==="in"?new Bv(e,s):new Uv(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Bn(n,this.value)):n!==null&&fn(this.value)===fn(n)&&this.at(Bn(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Vv extends He{constructor(e,n,s){super(e,n,s),this.key=L.fromName(s.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.at(n)}}class Bv extends He{constructor(e,n){super(e,"in",n),this.keys=rf("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Uv extends He{constructor(e,n){super(e,"not-in",n),this.keys=rf("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rf(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>L.fromName(s.referenceValue))}class $v extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pa(n)&&ks(n.arrayValue,this.value)}}class jv extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ks(this.value.arrayValue,n)}}class Kv extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ks(this.value.arrayValue,n)}}class Hv extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ks(this.value.arrayValue,s))}}class Fr{constructor(e,n){this.position=e,this.inclusive=n}}class kn{constructor(e,n="asc"){this.field=e,this.dir=n}}function qv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function _l(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=L.comparator(L.fromName(o.referenceValue),n.key):s=Bn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Il(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ft(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt}}function zv(t,e,n,s,r,i,o,a){return new zs(t,e,n,s,r,i,o,a)}function Ua(t){return new zs(t)}function Cl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function of(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function af(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Gv(t){return t.collectionGroup!==null}function Rs(t){const e=$(t);if(e.lt===null){e.lt=[];const n=af(e),s=of(e);if(n!==null&&s===null)n.isKeyField()||e.lt.push(new kn(n)),e.lt.push(new kn(ke.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new kn(ke.keyField(),i))}}}return e.lt}function It(t){const e=$(t);if(!e.ft)if(e.limitType==="F")e.ft=Tl(e.path,e.collectionGroup,Rs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Rs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new kn(i.field,o))}const s=e.endAt?new Fr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fr(e.startAt.position,e.startAt.inclusive):null;e.ft=Tl(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.ft}function Fo(t,e,n){return new zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pi(t,e){return Ba(It(t),It(e))&&t.limitType===e.limitType}function cf(t){return`${Va(It(t))}|lt:${t.limitType}`}function Po(t){return`Query(target=${Pv(It(t))}; limitType=${t.limitType})`}function $a(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):L.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=_l(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Rs(n),s)||n.endAt&&!function(r,i,o){const a=_l(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Rs(n),s))}(t,e)}function Wv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lf(t){return(e,n)=>{let s=!1;for(const r of Rs(t)){const i=Qv(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Qv(t,e,n){const s=t.field.isKeyField()?L.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Bn(a,c):B()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(e)?"-0":e}}function hf(t){return{integerValue:""+t}}function Xv(t,e){return Mv(e)?hf(e):uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(){this._=void 0}}function Yv(t,e,n){return t instanceof Pr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Os?df(t,e):t instanceof Ms?pf(t,e):function(s,r){const i=ff(s,r),o=Sl(i)+Sl(s._t);return Mo(i)&&Mo(s._t)?hf(o):uf(s.wt,o)}(t,e)}function Jv(t,e,n){return t instanceof Os?df(t,e):t instanceof Ms?pf(t,e):n}function ff(t,e){return t instanceof Vr?Mo(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Pr extends gi{}class Os extends gi{constructor(e){super(),this.elements=e}}function df(t,e){const n=gf(e);for(const s of t.elements)n.some(r=>ft(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ms extends gi{constructor(e){super(),this.elements=e}}function pf(t,e){let n=gf(e);for(const s of t.elements)n=n.filter(r=>!ft(r,s));return{arrayValue:{values:n}}}class Vr extends gi{constructor(e,n){super(),this.wt=e,this._t=n}}function Sl(t){return de(t.integerValue||t.doubleValue)}function gf(t){return Pa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Zv(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Os&&s instanceof Os||n instanceof Ms&&s instanceof Ms?Fn(n.elements,s.elements,ft):n instanceof Vr&&s instanceof Vr?ft(n._t,s._t):n instanceof Pr&&s instanceof Pr}(t.transform,e.transform)}class ew{constructor(e,n){this.version=e,this.transformResults=n}}class ot{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ot}static exists(e){return new ot(void 0,e)}static updateTime(e){return new ot(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mi{}function mf(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ja(t.key,ot.none()):new Gs(t.key,t.data,ot.none());{const n=t.data,s=Ke.empty();let r=new me(ke.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Kt(t.key,s,new Je(r.toArray()),ot.none())}}function tw(t,e,n){t instanceof Gs?function(s,r,i){const o=s.value.clone(),a=Dl(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Kt?function(s,r,i){if(!mr(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Dl(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(yf(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function ps(t,e,n,s){return t instanceof Gs?function(r,i,o,a){if(!mr(r.precondition,i))return o;const c=r.value.clone(),l=xl(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Kt?function(r,i,o,a){if(!mr(r.precondition,i))return o;const c=xl(r.fieldTransforms,a,i),l=i.data;return l.setAll(yf(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return mr(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function nw(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=ff(s.transform,r||null);i!=null&&(n===null&&(n=Ke.empty()),n.set(s.field,i))}return n||null}function Al(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Fn(n,s,(r,i)=>Zv(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gs extends mi{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Kt extends mi{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yf(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Dl(t,e,n){const s=new Map;se(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Jv(o,a,n[r]))}return s}function xl(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Yv(i,o,e))}return s}class ja extends mi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sw extends mi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,q;function iw(t){switch(t){default:return B();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function vf(t){if(t===void 0)return _t("GRPC error has no .code"),E.UNKNOWN;switch(t){case fe.OK:return E.OK;case fe.CANCELLED:return E.CANCELLED;case fe.UNKNOWN:return E.UNKNOWN;case fe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case fe.INTERNAL:return E.INTERNAL;case fe.UNAVAILABLE:return E.UNAVAILABLE;case fe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case fe.NOT_FOUND:return E.NOT_FOUND;case fe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case fe.ABORTED:return E.ABORTED;case fe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case fe.DATA_LOSS:return E.DATA_LOSS;default:return B()}}(q=fe||(fe={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){pn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ef(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=new ye(L.comparator);function Ct(){return ow}const wf=new ye(L.comparator);function os(...t){let e=wf;for(const n of t)e=e.insert(n.key,n);return e}function Ef(t){let e=wf;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zt(){return gs()}function bf(){return gs()}function gs(){return new Jn(t=>t.toString(),(t,e)=>t.isEqual(e))}const aw=new ye(L.comparator),cw=new me(L.comparator);function H(...t){let e=cw;for(const n of t)e=e.add(n);return e}const lw=new me(Y);function Tf(){return lw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const s=new Map;return s.set(e,Ws.createSynthesizedTargetChangeForCurrentChange(e,n)),new yi(K.min(),s,Tf(),Ct(),H())}}class Ws{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ws(De.EMPTY_BYTE_STRING,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,s,r){this.gt=e,this.removedTargetIds=n,this.key=s,this.yt=r}}class _f{constructor(e,n){this.targetId=e,this.It=n}}class If{constructor(e,n,s=De.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Nl{constructor(){this.Tt=0,this.Et=Rl(),this.At=De.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=H(),n=H(),s=H();return this.Et.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:B()}}),new Ws(this.At,this.Rt,e,n,s)}Dt(){this.bt=!1,this.Et=Rl()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class uw{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Ct(),this.Bt=kl(),this.Lt=new me(Y)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const s=this.Qt(n);switch(e.state){case 0:this.jt(n)&&s.Vt(e.resumeToken);break;case 1:s.kt(),s.Pt||s.Dt(),s.Vt(e.resumeToken);break;case 2:s.kt(),s.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(s.Mt(),s.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),s.Vt(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((s,r)=>{this.jt(r)&&n(r)})}zt(e){const n=e.targetId,s=e.It.count,r=this.Ht(n);if(r){const i=r.target;if(Lo(i))if(s===0){const o=new L(i.path);this.Kt(n,o,Ie.newNoDocument(o,K.min()))}else se(s===1);else this.Jt(n)!==s&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((i,o)=>{const a=this.Ht(o);if(a){if(i.current&&Lo(a.target)){const c=new L(a.target.path);this.$t.get(c)!==null||this.Xt(o,c)||this.Kt(o,c,Ie.newNoDocument(c,e))}i.vt&&(n.set(o,i.St()),i.Dt())}});let s=H();this.Bt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ht(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.$t.forEach((i,o)=>o.setReadTime(e));const r=new yi(e,n,this.Lt,this.$t,s);return this.$t=Ct(),this.Bt=kl(),this.Lt=new me(Y),r}qt(e,n){if(!this.jt(e))return;const s=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,s),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,s){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,n)?r.Ct(n,1):r.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),s&&(this.$t=this.$t.insert(n,s))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Nl,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new me(Y),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Nl),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function kl(){return new ye(L.comparator)}function Rl(){return new ye(L.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),fw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dw{constructor(e,n){this.databaseId=e,this.dt=n}}function Br(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cf(t,e){return t.dt?e.toBase64():e.toUint8Array()}function pw(t,e){return Br(t,e.toTimestamp())}function wt(t){return se(!!t),K.fromTimestamp(function(e){const n=Bt(e);return new ge(n.seconds,n.nanos)}(t))}function Ka(t,e){return function(n){return new ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Sf(t){const e=ce.fromString(t);return se(xf(e)),e}function Vo(t,e){return Ka(t.databaseId,e.path)}function Xi(t,e){const n=Sf(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(Af(n))}function Bo(t,e){return Ka(t.databaseId,e)}function gw(t){const e=Sf(t);return e.length===4?ce.emptyPath():Af(e)}function Uo(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Af(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ol(t,e,n){return{name:Vo(t,e),fields:n.value.mapValue.fields}}function mw(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.dt?(se(l===void 0||typeof l=="string"),De.fromBase64String(l||"")):(se(l===void 0||l instanceof Uint8Array),De.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:vf(c.code);return new M(l,c.message||"")}(o);n=new If(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Xi(t,s.document.name),i=wt(s.document.updateTime),o=new Ke({mapValue:{fields:s.document.fields}}),a=Ie.newFoundDocument(r,i,o),c=s.targetIds||[],l=s.removedTargetIds||[];n=new yr(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Xi(t,s.document),i=s.readTime?wt(s.readTime):K.min(),o=Ie.newNoDocument(r,i),a=s.removedTargetIds||[];n=new yr([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Xi(t,s.document),i=s.removedTargetIds||[];n=new yr([],i,r,null)}else{if(!("filter"in e))return B();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new rw(r),o=s.targetId;n=new _f(o,i)}}return n}function yw(t,e){let n;if(e instanceof Gs)n={update:Ol(t,e.key,e.value)};else if(e instanceof ja)n={delete:Vo(t,e.key)};else if(e instanceof Kt)n={update:Ol(t,e.key,e.data),updateMask:Aw(e.fieldMask)};else{if(!(e instanceof sw))return B();n={verify:Vo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Pr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Os)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ms)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Vr)return{fieldPath:i.field.canonicalString(),increment:o._t};throw B()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:pw(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:B()}(t,e.precondition)),n}function vw(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?wt(s.updateTime):wt(r);return i.isEqual(K.min())&&(i=wt(r)),new ew(i,s.transformResults||[])}(n,e))):[]}function ww(t,e){return{documents:[Bo(t,e.path)]}}function Ew(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Bo(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Bo(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const l=c.map(u=>function(f){if(f.op==="=="){if(bl(f.value))return{unaryFilter:{field:wn(f.field),op:"IS_NAN"}};if(El(f.value))return{unaryFilter:{field:wn(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(bl(f.value))return{unaryFilter:{field:wn(f.field),op:"IS_NOT_NAN"}};if(El(f.value))return{unaryFilter:{field:wn(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wn(f.field),op:Iw(f.op),value:f.value}}}(u));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:wn(u.field),direction:_w(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.dt||di(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function bw(t){let e=gw(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){se(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=Df(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(f){return new kn(In(f.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(u)));let a=null;n.limit&&(a=function(u){let f;return f=typeof u=="object"?u.value:u,di(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(u){const f=!!u.before,p=u.values||[];return new Fr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const f=!u.before,p=u.values||[];return new Fr(p,f)}(n.endAt)),zv(e,r,o,i,a,"F",c,l)}function Tw(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Df(t){return t?t.unaryFilter!==void 0?[Sw(t)]:t.fieldFilter!==void 0?[Cw(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Df(e)).reduce((e,n)=>e.concat(n)):B():[]}function _w(t){return hw[t]}function Iw(t){return fw[t]}function wn(t){return{fieldPath:t.canonicalString()}}function In(t){return ke.fromServerFormat(t.fieldPath)}function Cw(t){return He.create(In(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}function Sw(t){switch(t.unaryFilter.op){case"IS_NAN":const e=In(t.unaryFilter.field);return He.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=In(t.unaryFilter.field);return He.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=In(t.unaryFilter.field);return He.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=In(t.unaryFilter.field);return He.create(r,"!=",{nullValue:"NULL_VALUE"});default:return B()}}function Aw(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&tw(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ps(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ps(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=bf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=mf(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(K.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&Fn(this.mutations,e.mutations,(n,s)=>Al(n,s))&&Fn(this.baseMutations,e.baseMutations,(n,s)=>Al(n,s))}}class Ha{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){se(e.mutations.length===s.length);let r=aw;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ha(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,s,r,i=K.min(),o=K.min(),a=De.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.ne=e}}function kw(t){const e=bw({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.ze=new Ow}addToCollectionParentIndex(e,n){return this.ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Vt.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Ow{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new me(ce.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new me(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Un(0)}static Rn(){return new Un(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.changes=new Jn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.getBaseDocument(e,n,s))).next(r=>(s!==null&&ps(s.mutation,r,Je.empty(),ge.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,H()).next(()=>s))}getLocalViewOfDocuments(e,n,s=H()){const r=Zt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=os();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Zt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,H()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Ct();const o=gs(),a=gs();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Kt)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),ps(u.mutation,l,u.mutation.getFieldMask(),ge.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var f;return a.set(l,new Lw(u,(f=o.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=gs();let r=new ye((o,a)=>o-a),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Je.empty();u=a.applyToLocalView(l,u),s.set(c,u);const f=(r.get(a.batchId)||H()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,f=bf();u.forEach(p=>{if(!i.has(p)){const m=mf(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,f))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return L.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(Zt());let a=-1,c=i;return o.next(l=>b.forEach(l,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(u)?b.resolve():this.getBaseDocument(e,u,f).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,H())).next(u=>({batchId:a,changes:Ef(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(s=>{let r=os();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=os();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(l,u){return new zs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,f)=>{i=i.insert(u,f)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,Ie.newInvalidDocument(l)))});let o=os();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ps(l.mutation,c,Je.empty(),ge.now()),$a(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):b.resolve(Ie.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return b.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:wt(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:kw(s.bundledQuery),readTime:wt(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(){this.overlays=new ye(L.comparator),this.Xn=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zt();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ie(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=Zt(),i=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ye((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Zt(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Zt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return b.resolve(a)}ie(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new xw(n,s));let i=this.Xn.get(n);i===void 0&&(i=H(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.Zn=new me(ve.ts),this.es=new me(ve.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const s=new ve(e,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.rs(new ve(e,n))}os(e,n){e.forEach(s=>this.removeReference(s,n))}us(e){const n=new L(new ce([])),s=new ve(n,e),r=new ve(n,e+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new L(new ce([])),s=new ve(n,e),r=new ve(n,e+1);let i=H();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ve(e,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ve{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return L.comparator(e.key,n.key)||Y(e.ls,n.ls)}static ns(e,n){return Y(e.ls,n.ls)||L.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new me(ve.ts)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dw(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new ve(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ve(n,0),r=new ve(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new me(Y);return n.forEach(r=>{const i=new ve(r,0),o=new ve(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),b.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;L.isDocumentKey(i)||(i=i.child(""));const o=new ve(new L(i),0);let a=new me(Y);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.ls)),!0)},o),b.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){se(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return b.forEach(n.mutations,r=>{const i=new ve(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ds=s})}In(e){}containsKey(e,n){const s=new ve(n,0),r=this.ds.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.ps=e,this.docs=new ye(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let s=Ct();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ie.newInvalidDocument(r))}),b.resolve(s)}getAllFromCollection(e,n,s){let r=Ct();const i=new L(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||xv(Dv(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,n,s,r){B()}Is(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new $w(this)}getSize(e){return b.resolve(this.size)}}class $w extends Mw{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(e,r)):this.zn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.persistence=e,this.Ts=new Jn(n=>Va(n),Ba),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Es=0,this.As=new qa,this.targetCount=0,this.Rs=Un.An()}forEachTarget(e,n){return this.Ts.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),b.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Un(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.vn(n),b.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.Ts.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.As.ss(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.As.hs(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Fa(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new jw(this),this.indexManager=new Rw,this.remoteDocumentCache=function(s){return new Uw(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Nw(n),this.Ds=new Pw(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Vw,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.bs[e.toKey()];return s||(s=new Bw(n,this.referenceDelegate),this.bs[e.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,s){k("MemoryPersistence","Starting transaction:",e);const r=new Hw(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(e,n){return b.or(Object.values(this.bs).map(s=>()=>s.containsKey(e,n)))}}class Hw extends kv{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.ks=new qa,this.Ms=null}static Os(e){return new za(e)}get Fs(){if(this.Ms)return this.Ms;throw B()}addReference(e,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),b.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Fs,s=>{const r=L.fromPath(s);return this.$s(e,r).next(i=>{i||n.removeEntry(r,K.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return b.or([()=>b.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(e,n){let s=H(),r=H();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ga(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ci(e,n).next(i=>i||this.xi(e,n,r,s)).next(i=>i||this.Ni(e,n))}Ci(e,n){if(Cl(n))return b.resolve(null);let s=It(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Fo(n,null,"F"),s=It(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=H(...i);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ki(n,a);return this.Mi(n,l,o,c.readTime)?this.Ci(e,Fo(n,null,"F")):this.Oi(e,l,n,c)}))})))}xi(e,n,s,r){return Cl(n)||r.isEqual(K.min())?this.Ni(e,n):this.Di.getDocuments(e,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(e,n):(gl()<=X.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Po(n)),this.Oi(e,o,n,Av(r,-1)))})}ki(e,n){let s=new me(lf(e));return n.forEach((r,i)=>{$a(e,i)&&(s=s.add(i))}),s}Mi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,n){return gl()<=X.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Po(n)),this.Di.getDocumentsMatchingQuery(e,n,Vt.min())}Oi(e,n,s,r){return this.Di.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n,s,r){this.persistence=e,this.Fi=n,this.wt=r,this.$i=new ye(Y),this.Bi=new Jn(i=>Va(i),Ba),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(s)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fw(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function Gw(t,e,n,s){return new zw(t,e,n,s)}async function Nf(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=H();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Ki:l,removedBatchIds:o,addedBatchIds:a}))})})}function Ww(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,f=u.keys();let p=b.resolve();return f.forEach(m=>{p=p.next(()=>l.getEntry(a,m)).next(T=>{const x=c.docVersions.get(m);se(x!==null),T.version.compareTo(x)<0&&(u.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),l.addEntry(T)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=H();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function kf(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function Qw(t,e){const n=$(t),s=e.snapshotVersion;let r=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});r=n.$i;const a=[];e.targetChanges.forEach((u,f)=>{const p=r.get(f);if(!p)return;a.push(n.Vs.removeMatchingKeys(i,u.removedDocuments,f).next(()=>n.Vs.addMatchingKeys(i,u.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(f)?m=m.withResumeToken(De.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):u.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(u.resumeToken,s)),r=r.insert(f,m),function(T,x,S){return T.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(p,m,u)&&a.push(n.Vs.updateTargetData(i,m))});let c=Ct(),l=H();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Xw(i,o,e.documentUpdates).next(u=>{c=u.Gi,l=u.Qi})),!s.isEqual(K.min())){const u=n.Vs.getLastRemoteSnapshotVersion(i).next(f=>n.Vs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.$i=r,i))}function Xw(t,e,n){let s=H(),r=H();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Ct();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Gi:o,Qi:r}})}function Yw(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Jw(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Vs.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Vs.allocateTargetId(s).next(o=>(r=new rn(e,o,0,s.currentSequenceNumber),n.Vs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.$i.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(s.targetId,s),n.Bi.set(e,s.targetId)),s})}async function $o(t,e,n){const s=$(t),r=s.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qs(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.$i=s.$i.remove(e),s.Bi.delete(r.target)}function Ml(t,e,n){const s=$(t);let r=K.min(),i=H();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=$(a),f=u.Bi.get(l);return f!==void 0?b.resolve(u.$i.get(f)):u.Vs.getTargetData(c,l)}(s,o,It(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Vs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Fi.getDocumentsMatchingQuery(o,e,n?r:K.min(),n?i:H())).next(a=>(Zw(s,Wv(e),a),{documents:a,ji:i})))}function Zw(t,e,n){let s=K.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Li.set(e,s)}class Ll{constructor(){this.activeTargetIds=Tf()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eE{constructor(){this.Fr=new Ll,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,s){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Ll,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,s,r,i){const o=this.oo(e,n);k("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(e,o,a,s).then(c=>(k("RestConnection","Received: ",c),c),c=>{throw ml("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}ao(e,n,s,r,i,o){return this.ro(e,n,s,r,i)}uo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}oo(e,n){const s=nE[e];return`${this.so}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,s,r){return new Promise((i,o)=>{const a=new yv;a.listenOnce(pv.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qi.NO_ERROR:const l=a.getResponseJson();k("Connection","XHR received:",JSON.stringify(l)),i(l);break;case Qi.TIMEOUT:k("Connection",'RPC "'+e+'" timed out'),o(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Qi.HTTP_ERROR:const u=a.getStatus();if(k("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const p=function(m){const T=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(T)>=0?T:E.UNKNOWN}(f.status);o(new M(p,f.message))}else o(new M(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(E.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{k("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}ho(e,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=fv(),o=dv(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new mv({})),this.uo(a.initMessageHeaders,n,s),zg()||Wg()||Qg()||Xg()||Yg()||Gg()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");k("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,f=!1;const p=new sE({jr:T=>{f?k("Connection","Not sending because WebChannel is closed:",T):(u||(k("Connection","Opening WebChannel transport."),l.open(),u=!0),k("Connection","WebChannel sending:",T),l.send(T))},Wr:()=>l.close()}),m=(T,x,S)=>{T.listen(x,F=>{try{S(F)}catch(te){setTimeout(()=>{throw te},0)}})};return m(l,cr.EventType.OPEN,()=>{f||k("Connection","WebChannel transport opened.")}),m(l,cr.EventType.CLOSE,()=>{f||(f=!0,k("Connection","WebChannel transport closed"),p.eo())}),m(l,cr.EventType.ERROR,T=>{f||(f=!0,ml("Connection","WebChannel transport errored:",T),p.eo(new M(E.UNAVAILABLE,"The operation could not be completed")))}),m(l,cr.EventType.MESSAGE,T=>{var x;if(!f){const S=T.data[0];se(!!S);const F=S,te=F.error||((x=F[0])===null||x===void 0?void 0:x.error);if(te){k("Connection","WebChannel received error:",te);const re=te.status;let ne=function(At){const at=fe[At];if(at!==void 0)return vf(at)}(re),Te=te.message;ne===void 0&&(ne=E.INTERNAL,Te="Unknown error status: "+re+" with message "+te.message),f=!0,p.eo(new M(ne,Te)),l.close()}else k("Connection","WebChannel received:",S),p.no(S)}}),m(o,gv.STAT_EVENT,T=>{T.stat===dl.PROXY?k("Connection","Detected buffering proxy"):T.stat===dl.NOPROXY&&k("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function Yi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return new dw(t,!0)}class Rf{constructor(e,n,s=1e3,r=1.5,i=6e4){this.js=e,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&k("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n,s,r,i,o,a,c){this.js=e,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Rf(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(_t(n.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{e(()=>{const r=new M(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(e,n){const s=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iE extends Of{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.wt=i}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=mw(this.wt,e),s=function(r){if(!("targetChange"in r))return K.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?K.min():i.readTime?wt(i.readTime):K.min()}(e);return this.listener.Go(n,s)}Qo(e){const n={};n.database=Uo(this.wt),n.addTarget=function(r,i){let o;const a=i.target;return o=Lo(a)?{documents:ww(r,a)}:{query:Ew(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Cf(r,i.resumeToken):i.snapshotVersion.compareTo(K.min())>0&&(o.readTime=Br(r,i.snapshotVersion.toTimestamp())),o}(this.wt,e);const s=Tw(this.wt,e);s&&(n.labels=s),this.Oo(n)}jo(e){const n={};n.database=Uo(this.wt),n.removeTarget=e,this.Oo(n)}}class oE extends Of{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=vw(e.writeResults,e.commitTime),s=wt(e.commitTime);return this.listener.Jo(s,n)}return se(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Uo(this.wt),this.Oo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>yw(this.wt,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(E.UNKNOWN,r.toString())})}ao(e,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class cE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(_t(n),this.su=!1):k("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{gn(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=$(a);c.lu.add(4),await Qs(c),c._u.set("Unknown"),c.lu.delete(4),await wi(c)}(this))})}),this._u=new cE(s,r)}}async function wi(t){if(gn(t))for(const e of t.fu)await e(!0)}async function Qs(t){for(const e of t.fu)await e(!1)}function Mf(t,e){const n=$(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Xa(n)?Qa(n):Zn(n).Co()&&Wa(n,e))}function Lf(t,e){const n=$(t),s=Zn(n);n.hu.delete(e),s.Co()&&Ff(n,e),n.hu.size===0&&(s.Co()?s.ko():gn(n)&&n._u.set("Unknown"))}function Wa(t,e){t.wu.Nt(e.targetId),Zn(t).Qo(e)}function Ff(t,e){t.wu.Nt(e),Zn(t).jo(e)}function Qa(t){t.wu=new uw({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Zn(t).start(),t._u.iu()}function Xa(t){return gn(t)&&!Zn(t).Do()&&t.hu.size>0}function gn(t){return $(t).lu.size===0}function Pf(t){t.wu=void 0}async function uE(t){t.hu.forEach((e,n)=>{Wa(t,e)})}async function hE(t,e){Pf(t),Xa(t)?(t._u.uu(e),Qa(t)):t._u.set("Unknown")}async function fE(t,e,n){if(t._u.set("Online"),e instanceof If&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.hu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.hu.delete(o),s.wu.removeTarget(o))}(t,e)}catch(s){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ur(t,s)}else if(e instanceof yr?t.wu.Ut(e):e instanceof _f?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(K.min()))try{const s=await kf(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.wu.Yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.hu.get(c);l&&r.hu.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.hu.get(a);if(!c)return;r.hu.set(a,c.withResumeToken(De.EMPTY_BYTE_STRING,c.snapshotVersion)),Ff(r,a);const l=new rn(c.target,a,1,c.sequenceNumber);Wa(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){k("RemoteStore","Failed to raise snapshot:",s),await Ur(t,s)}}async function Ur(t,e,n){if(!qs(e))throw e;t.lu.add(1),await Qs(t),t._u.set("Offline"),n||(n=()=>kf(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await wi(t)})}function Vf(t,e){return e().catch(n=>Ur(t,n,e))}async function Ei(t){const e=$(t),n=Ut(e);let s=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;dE(e);)try{const r=await Yw(e.localStore,s);if(r===null){e.au.length===0&&n.ko();break}s=r.batchId,pE(e,r)}catch(r){await Ur(e,r)}Bf(e)&&Uf(e)}function dE(t){return gn(t)&&t.au.length<10}function pE(t,e){t.au.push(e);const n=Ut(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Bf(t){return gn(t)&&!Ut(t).Do()&&t.au.length>0}function Uf(t){Ut(t).start()}async function gE(t){Ut(t).Xo()}async function mE(t){const e=Ut(t);for(const n of t.au)e.Ho(n.mutations)}async function yE(t,e,n){const s=t.au.shift(),r=Ha.from(s,e,n);await Vf(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ei(t)}async function vE(t,e){e&&Ut(t).zo&&await async function(n,s){if(r=s.code,iw(r)&&r!==E.ABORTED){const i=n.au.shift();Ut(n).No(),await Vf(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ei(n)}var r}(t,e),Bf(t)&&Uf(t)}async function Pl(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const s=gn(n);n.lu.add(3),await Qs(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await wi(n)}async function wE(t,e){const n=$(t);e?(n.lu.delete(2),await wi(n)):e||(n.lu.add(2),await Qs(n),n._u.set("Unknown"))}function Zn(t){return t.mu||(t.mu=function(e,n,s){const r=$(e);return r.tu(),new iE(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:uE.bind(null,t),Jr:hE.bind(null,t),Go:fE.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Xa(t)?Qa(t):t._u.set("Unknown")):(await t.mu.stop(),Pf(t))})),t.mu}function Ut(t){return t.gu||(t.gu=function(e,n,s){const r=$(e);return r.tu(),new oE(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(t.datastore,t.asyncQueue,{zr:gE.bind(null,t),Jr:vE.bind(null,t),Yo:mE.bind(null,t),Jo:yE.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Ei(t)):(await t.gu.stop(),t.au.length>0&&(k("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ya(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ja(t,e){if(_t("AsyncQueue",`${e}: ${t}`),qs(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.comparator=e?(n,s)=>e(n,s)||L.comparator(n.key,s.key):(n,s)=>L.comparator(n.key,s.key),this.keyedMap=os(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new Rn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rn)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.yu=new ye(L.comparator)}track(e){const n=e.doc.key,s=this.yu.get(n);s?e.type!==0&&s.type===3?this.yu=this.yu.insert(n,e):e.type===3&&s.type!==1?this.yu=this.yu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.yu=this.yu.remove(n):e.type===1&&s.type===2?this.yu=this.yu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):B():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,s)=>{e.push(s)}),e}}class $n{constructor(e,n,s,r,i,o,a,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new $n(e,n,Rn.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.Iu=void 0,this.listeners=[]}}class bE{constructor(){this.queries=new Jn(e=>cf(e),pi),this.onlineState="Unknown",this.Tu=new Set}}async function TE(t,e){const n=$(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new EE),r)try{i.Iu=await n.onListen(s)}catch(o){const a=Ja(o,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Za(n)}async function _E(t,e){const n=$(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function IE(t,e){const n=$(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Au(r)&&(s=!0);o.Iu=r}}s&&Za(n)}function CE(t,e,n){const s=$(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Za(t){t.Tu.forEach(e=>{e.next()})}class SE{constructor(e,n,s){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=s||{}}Au(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new $n(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Du||!s)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=$n.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.key=e}}class jf{constructor(e){this.key=e}}class AE{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=H(),this.mutatedKeys=H(),this.Lu=lf(e),this.Uu=new Rn(this.Lu)}get qu(){return this.Fu}Ku(e,n){const s=n?n.Gu:new Vl,r=n?n.Uu:this.Uu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,f)=>{const p=r.get(u),m=$a(this.query,f)?f:null,T=!!p&&this.mutatedKeys.has(p.key),x=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let S=!1;p&&m?p.data.isEqual(m.data)?T!==x&&(s.track({type:3,doc:m}),S=!0):this.Qu(p,m)||(s.track({type:2,doc:m}),S=!0,(c&&this.Lu(m,c)>0||l&&this.Lu(m,l)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),S=!0):p&&!m&&(s.track({type:1,doc:p}),S=!0,(c||l)&&(a=!0)),S&&(m?(o=o.add(m),i=x?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{Uu:o,Gu:s,Mi:a,mutatedKeys:i}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort((l,u)=>function(f,p){const m=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return m(f)-m(p)}(l.type,u.type)||this.Lu(l.doc,u.doc)),this.ju(s);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new $n(this.query,e.Uu,r,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Vl,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=H(),this.Uu.forEach(s=>{this.Hu(s.key)&&(this.Bu=this.Bu.add(s.key))});const n=[];return e.forEach(s=>{this.Bu.has(s)||n.push(new jf(s))}),this.Bu.forEach(s=>{e.has(s)||n.push(new $f(s))}),n}Ju(e){this.Fu=e.ji,this.Bu=H();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return $n.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class DE{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class xE{constructor(e){this.key=e,this.Xu=!1}}class NE{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new Jn(a=>cf(a),pi),this.ec=new Map,this.nc=new Set,this.sc=new ye(L.comparator),this.ic=new Map,this.rc=new qa,this.oc={},this.uc=new Map,this.cc=Un.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function kE(t,e){const n=$E(t);let s,r;const i=n.tc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.Yu();else{const o=await Jw(n.localStore,It(e));n.isPrimaryClient&&Mf(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await RE(n,e,s,a==="current")}return r}async function RE(t,e,n,s){t.hc=(u,f,p)=>async function(m,T,x,S){let F=T.view.Ku(x);F.Mi&&(F=await Ml(m.localStore,T.query,!1).then(({documents:ne})=>T.view.Ku(ne,F)));const te=S&&S.targetChanges.get(T.targetId),re=T.view.applyChanges(F,m.isPrimaryClient,te);return Ul(m,T.targetId,re.zu),re.snapshot}(t,u,f,p);const r=await Ml(t.localStore,e,!0),i=new AE(e,r.ji),o=i.Ku(r.documents),a=Ws.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline"),c=i.applyChanges(o,t.isPrimaryClient,a);Ul(t,n,c.zu);const l=new DE(e,n,i);return t.tc.set(e,l),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function OE(t,e){const n=$(t),s=n.tc.get(e),r=n.ec.get(s.targetId);if(r.length>1)return n.ec.set(s.targetId,r.filter(i=>!pi(i,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await $o(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Lf(n.remoteStore,s.targetId),jo(n,s.targetId)}).catch(Hs)):(jo(n,s.targetId),await $o(n.localStore,s.targetId,!0))}async function ME(t,e,n){const s=jE(t);try{const r=await function(i,o){const a=$(i),c=ge.now(),l=o.reduce((p,m)=>p.add(m.key),H());let u,f;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Ct(),T=H();return a.Ui.getEntries(p,l).next(x=>{m=x,m.forEach((S,F)=>{F.isValidDocument()||(T=T.add(S))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,m)).next(x=>{u=x;const S=[];for(const F of o){const te=nw(F,u.get(F.key).overlayedDocument);te!=null&&S.push(new Kt(F.key,te,sf(te.value.mapValue),ot.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,S,o)}).next(x=>{f=x;const S=x.applyToLocalDocumentSet(u,T);return a.documentOverlayCache.saveOverlays(p,x.batchId,S)})}).then(()=>({batchId:f.batchId,changes:Ef(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.oc[i.currentUser.toKey()];c||(c=new ye(Y)),c=c.insert(o,a),i.oc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Xs(s,r.changes),await Ei(s.remoteStore)}catch(r){const i=Ja(r,"Failed to persist write");n.reject(i)}}async function Kf(t,e){const n=$(t);try{const s=await Qw(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.ic.get(i);o&&(se(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Xu=!0:r.modifiedDocuments.size>0?se(o.Xu):r.removedDocuments.size>0&&(se(o.Xu),o.Xu=!1))}),await Xs(n,s,e)}catch(s){await Hs(s)}}function Bl(t,e,n){const s=$(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=$(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const f of u.listeners)f.Eu(o)&&(c=!0)}),c&&Za(a)}(s.eventManager,e),r.length&&s.Zu.Go(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function LE(t,e,n){const s=$(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.ic.get(e),i=r&&r.key;if(i){let o=new ye(L.comparator);o=o.insert(i,Ie.newNoDocument(i,K.min()));const a=H().add(i),c=new yi(K.min(),new Map,new me(Y),o,a);await Kf(s,c),s.sc=s.sc.remove(i),s.ic.delete(e),ec(s)}else await $o(s.localStore,e,!1).then(()=>jo(s,e,n)).catch(Hs)}async function FE(t,e){const n=$(t),s=e.batch.batchId;try{const r=await Ww(n.localStore,e);qf(n,s,null),Hf(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xs(n,r)}catch(r){await Hs(r)}}async function PE(t,e,n){const s=$(t);try{const r=await function(i,o){const a=$(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(se(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);qf(s,e,n),Hf(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xs(s,r)}catch(r){await Hs(r)}}function Hf(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function qf(t,e,n){const s=$(t);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.oc[s.currentUser.toKey()]=r}}function jo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ec.get(e))t.tc.delete(s),n&&t.Zu.lc(s,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(s=>{t.rc.containsKey(s)||zf(t,s)})}function zf(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(Lf(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),ec(t))}function Ul(t,e,n){for(const s of n)s instanceof $f?(t.rc.addReference(s.key,e),VE(t,s)):s instanceof jf?(k("SyncEngine","Document no longer in limbo: "+s.key),t.rc.removeReference(s.key,e),t.rc.containsKey(s.key)||zf(t,s.key)):B()}function VE(t,e){const n=e.key,s=n.path.canonicalString();t.sc.get(n)||t.nc.has(s)||(k("SyncEngine","New document in limbo: "+n),t.nc.add(s),ec(t))}function ec(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new L(ce.fromString(e)),s=t.cc.next();t.ic.set(s,new xE(n)),t.sc=t.sc.insert(n,s),Mf(t.remoteStore,new rn(It(Ua(n.path)),s,2,Fa.ot))}}async function Xs(t,e,n){const s=$(t),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,c)=>{o.push(s.hc(c,e,n).then(l=>{if(l){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),r.push(l);const u=Ga.Vi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,c){const l=$(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(c,f=>b.forEach(f.Pi,p=>l.persistence.referenceDelegate.addReference(u,f.targetId,p)).next(()=>b.forEach(f.vi,p=>l.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))}catch(u){if(!qs(u))throw u;k("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const f=u.targetId;if(!u.fromCache){const p=l.$i.get(f),m=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(m);l.$i=l.$i.insert(f,T)}}}(s.localStore,i))}async function BE(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const s=await Nf(n.localStore,e);n.currentUser=e,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new M(E.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xs(n,s.Ki)}}function UE(t,e){const n=$(t),s=n.ic.get(e);if(s&&s.Xu)return H().add(s.key);{let r=H();const i=n.ec.get(e);if(!i)return r;for(const o of i){const a=n.tc.get(o);r=r.unionWith(a.view.qu)}return r}}function $E(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LE.bind(null,e),e.Zu.Go=IE.bind(null,e.eventManager),e.Zu.lc=CE.bind(null,e.eventManager),e}function jE(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PE.bind(null,e),e}class KE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=vi(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return Gw(this.persistence,new qw,e.initialUser,this.wt)}_c(e){return new Kw(za.Os,this.wt)}dc(e){return new eE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HE{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Bl(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BE.bind(null,this.syncEngine),await wE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bE}createDatastore(e){const n=vi(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new rE(r));var r;return function(i,o,a,c){return new aE(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Bl(this.syncEngine,a,0),o=Fl.V()?new Fl:new tE,new lE(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new NE(s,r,i,o,a,c);return l&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);k("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Qs(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=je.UNAUTHENTICATED,this.clientId=Zh.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{k("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(k("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Ja(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function GE(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Nf(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function WE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QE(t);k("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Pl(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Pl(e.remoteStore,i)),t.onlineComponents=e}async function QE(t){return t.offlineComponents||(k("FirestoreClient","Using default OfflineComponentProvider"),await GE(t,new KE)),t.offlineComponents}async function Gf(t){return t.onlineComponents||(k("FirestoreClient","Using default OnlineComponentProvider"),await WE(t,new HE)),t.onlineComponents}function XE(t){return Gf(t).then(e=>e.syncEngine)}async function $l(t){const e=await Gf(t),n=e.eventManager;return n.onListen=kE.bind(null,e.syncEngine),n.onUnlisten=OE.bind(null,e.syncEngine),n}const jl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YE(t,e,n,s){if(e===!0&&s===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kl(t){if(!L.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hl(t){if(L.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function on(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tc(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ql({}),this._settingsFrozen=!1,e instanceof Vn?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vn(r.options.projectId)}(e))}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ql(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new wv;switch(n.type){case"gapi":const s=n.client;return se(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Tv(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=jl.get(e);n&&(k("ComponentProvider","Removing Datastore"),jl.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Ys{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ys(this.firestore,e,this._query)}}class Lt extends Ys{constructor(e,n,s){super(e,n,Ua(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new L(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function JE(t,e,...n){if(t=bt(t),Wf("collection","path",e),t instanceof nc){const s=ce.fromString(e,...n);return Hl(s),new Lt(t,null,s)}{if(!(t instanceof Ge||t instanceof Lt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return Hl(s),new Lt(t.firestore,null,s)}}function Ko(t,e,...n){if(t=bt(t),arguments.length===1&&(e=Zh.I()),Wf("doc","path",e),t instanceof nc){const s=ce.fromString(e,...n);return Kl(s),new Ge(t,null,new L(s))}{if(!(t instanceof Ge||t instanceof Lt))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ce.fromString(e,...n));return Kl(s),new Ge(t.firestore,t instanceof Lt?t.converter:null,new L(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Rf(this,"async_queue_retry"),this.Kc=()=>{const n=Yi();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=Yi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=Yi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new sn;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!qs(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw _t("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(e,n,s){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const r=Ya.createAndSchedule(this,e,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&B()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function zl(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class jn extends nc{constructor(e,n,s){super(e,n,s),this.type="firestore",this._queue=new ZE,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Xf(this),this._firestoreClient.terminate()}}function e0(t=ny()){return Ym(t,"firestore").getImmediate()}function Qf(t){return t._firestoreClient||Xf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Xf(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Ov(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zE(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(De.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kn(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=/^__.*__$/;class n0{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gs(e,this.data,n,this.fieldTransforms)}}class Yf{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Kt(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Jf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class ic{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new ic(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.sa(e),r}ia(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return $r(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(Jf(this.Zc)&&t0.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class s0{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=s||vi(e)}aa(e,n,s,r=!1){return new ic({Zc:e,methodName:n,ca:s,path:ke.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Zf(t){const e=t._freezeSettings(),n=vi(t._databaseId);return new s0(t._databaseId,!!e.ignoreUndefinedProperties,n)}function r0(t,e,n,s,r,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,r);oc("Data must be an object, but it was:",o,s);const a=ed(s,o);let c,l;if(i.merge)c=new Je(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const f of i.mergeFields){const p=Ho(e,f,n);if(!o.contains(p))throw new M(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);nd(u,p)||u.push(p)}c=new Je(u),l=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=o.fieldTransforms;return new n0(new Ke(a),c,l)}class Ti extends sc{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ti}}function i0(t,e,n,s){const r=t.aa(1,e,n);oc("Data must be an object, but it was:",r,s);const i=[],o=Ke.empty();pn(s,(c,l)=>{const u=ac(e,c,n);l=bt(l);const f=r.ia(u);if(l instanceof Ti)i.push(u);else{const p=_i(l,f);p!=null&&(i.push(u),o.set(u,p))}});const a=new Je(i);return new Yf(o,a,r.fieldTransforms)}function o0(t,e,n,s,r,i){const o=t.aa(1,e,n),a=[Ho(e,s,n)],c=[r];if(i.length%2!=0)throw new M(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Ho(e,i[p])),c.push(i[p+1]);const l=[],u=Ke.empty();for(let p=a.length-1;p>=0;--p)if(!nd(l,a[p])){const m=a[p];let T=c[p];T=bt(T);const x=o.ia(m);if(T instanceof Ti)l.push(m);else{const S=_i(T,x);S!=null&&(l.push(m),u.set(m,S))}}const f=new Je(l);return new Yf(u,f,o.fieldTransforms)}function _i(t,e){if(td(t=bt(t)))return oc("Unsupported field value:",e,t),ed(t,e);if(t instanceof sc)return function(n,s){if(!Jf(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=_i(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=bt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xv(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ge.fromDate(n);return{timestampValue:Br(s.wt,r)}}if(n instanceof ge){const r=new ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Br(s.wt,r)}}if(n instanceof rc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Kn)return{bytesValue:Cf(s.wt,n._byteString)};if(n instanceof Ge){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ka(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${tc(n)}`)}(t,e)}function ed(t,e){const n={};return ef(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pn(t,(s,r)=>{const i=_i(r,e.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function td(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof rc||t instanceof Kn||t instanceof Ge||t instanceof sc)}function oc(t,e,n){if(!td(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=tc(n);throw s==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+s)}}function Ho(t,e,n){if((e=bt(e))instanceof bi)return e._internalPath;if(typeof e=="string")return ac(t,e);throw $r("Field path arguments must be of type string or ",t,!1,void 0,n)}const a0=new RegExp("[~\\*/\\[\\]]");function ac(t,e,n){if(e.search(a0)>=0)throw $r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bi(...e.split("."))._internalPath}catch{throw $r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $r(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function nd(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c0 extends sd{data(){return super.data()}}function cc(t,e){return typeof e=="string"?ac(t,e):e instanceof bi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rd extends sd{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vr extends rd{data(e={}){return super.data(e)}}class l0{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new as(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vr(this._firestore,this._userDataWriter,s.key,s,new as(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new vr(s._firestore,s._userDataWriter,o.doc.key,o.doc,new as(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:u0(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function u0(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f0{}function d0(t,...e){for(const n of e)t=n._apply(t);return t}class p0 extends f0{constructor(e,n){super(),this.fa=e,this.wa=n,this.type="orderBy"}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new kn(r,i);return function(a,c){if(of(a)===null){const l=af(a);l!==null&&m0(a,l,c.field)}}(s,o),o}(e._query,this.fa,this.wa);return new Ys(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new zs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function g0(t,e="asc"){const n=e,s=cc("orderBy",t);return new p0(s,n)}function m0(t,e,n){if(!n.isEqual(e))throw new M(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{convertValue(e,n="none"){switch(fn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const s={};return pn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new rc(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=nf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ns(e));default:return null}}convertTimestamp(e){const n=Bt(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ce.fromString(e);se(xf(s));const r=new Vn(s.get(1),s.get(3)),i=new L(s.popFirst(5));return r.isEqual(n)||_t(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class id extends y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function w0(t,e,n,...s){t=on(t,Ge);const r=on(t.firestore,jn),i=Zf(r);let o;return o=typeof(e=bt(e))=="string"||e instanceof bi?o0(i,"updateDoc",t._key,e,n,s):i0(i,"updateDoc",t._key,e),lc(r,[o.toMutation(t._key,ot.exists(!0))])}function E0(t){return lc(on(t.firestore,jn),[new ja(t._key,ot.none())])}function b0(t,e){const n=on(t.firestore,jn),s=Ko(t),r=v0(t.converter,e);return lc(n,[r0(Zf(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,ot.exists(!1))]).then(()=>s)}function T0(t,...e){var n,s,r;t=bt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||zl(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(zl(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let c,l,u;if(t instanceof Ge)l=on(t.firestore,jn),u=Ua(t._key.path),c={next:f=>{e[o]&&e[o](_0(l,t,f))},error:e[o+1],complete:e[o+2]};else{const f=on(t,Ys);l=on(f.firestore,jn),u=f._query;const p=new id(l);c={next:m=>{e[o]&&e[o](new l0(l,p,f,m))},error:e[o+1],complete:e[o+2]},h0(t._query)}return function(f,p,m,T){const x=new qE(T),S=new SE(p,x,m);return f.asyncQueue.enqueueAndForget(async()=>TE(await $l(f),S)),()=>{x.Tc(),f.asyncQueue.enqueueAndForget(async()=>_E(await $l(f),S))}}(Qf(l),u,a,c)}function lc(t,e){return function(n,s){const r=new sn;return n.asyncQueue.enqueueAndForget(async()=>ME(await XE(n),s,r)),r.promise}(Qf(t),e)}function _0(t,e,n){const s=n.docs.get(e._key),r=new id(t);return new rd(t,r,e._key,s,new as(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Yn=n})(ey),Cr(new Ts("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new jn(r,new Ev(n.getProvider("auth-internal")),new Iv(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i},"PUBLIC")),xn(pl,"3.4.14",t),xn(pl,"3.4.14","esm2017")})();var I0="firebase",C0="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xn(I0,C0,"app");const S0={apiKey:"AIzaSyAKmCvrajSmaMYY-oXeIPNaFReu9s6Wlz0",authDomain:"todolist-f9347.firebaseapp.com",projectId:"todolist-f9347",storageBucket:"todolist-f9347.appspot.com",messagingSenderId:"936254511994",appId:"1:936254511994:web:d33f0df276b6eaee94d4c3"},A0=ty(S0),D0=e0(A0);const x0={class:"To-Do-List"},N0=Ne("div",{class:"title has-text-centered"},"To-Do-List",-1),k0=["onSubmit"],R0={class:"field is-grouped mb-5"},O0={class:"control is-expanded"},M0={class:"control"},L0=["disabled"],F0={class:"card-content"},P0={class:"content is-mobile is-vcentered"},V0={class:"columns"},B0={class:"column is-5 has-text-right"},U0=["onClick"],$0=["onClick"],j0={__name:"App",setup(t){const e=JE(D0,"todos"),n=d0(e,g0("date","desc")),s=_c([]);oa(async()=>{T0(n,c=>{const l=[];c.forEach(u=>{console.log(u.id," => ",u.data());const f={id:u.id,content:u.data().content,done:u.data().done};l.push(f)}),s.value=l})});const r=_c(""),i=()=>{b0(e,{content:r.value,done:!1,date:Date.now()}),r.value=""},o=c=>{console.log(c),E0(Ko(e,c))},a=c=>{const l=s.value.findIndex(u=>u.id===c);w0(Ko(e,c),{done:!s.value[l].done})};return(c,l)=>(Mi(),Li("div",x0,[N0,Ne("form",{onSubmit:Pg(i,["prevent"])},[Ne("div",R0,[Ne("p",O0,[Np(Ne("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>r.value=u),class:"input",type:"text",placeholder:"Add a todo"},null,512),[[Mg,r.value]])]),Ne("p",M0,[Ne("button",{disabled:!r.value,class:"button is-info"}," Add ",8,L0)])])],40,k0),(Mi(!0),Li(tt,null,Rp(s.value,u=>(Mi(),Li("div",{class:Cn(["card mb-5",{"has-background-success-light":u.done}])},[Ne("div",F0,[Ne("div",P0,[Ne("div",V0,[Ne("div",{class:Cn(["column",{"has-text-success line-through":u.done}])},dd(u.content),3),Ne("div",B0,[Ne("button",{onClick:f=>a(u.id),class:Cn(["button",u.done?"is-success":"is-light"])}," \u2713 ",10,U0),Ne("button",{onClick:f=>o(u.id),class:"button is-danger ml-2"}," \u2717 ",8,$0)])])])])],2))),256))]))}};Ug(j0).mount("#app");
