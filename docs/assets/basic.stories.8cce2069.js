import"./jsx-runtime.2cd39b80.js";import{c as i,A as Wt,M as _t,C as I,S as O}from"./Props.9ae9ed7d.js";import"./iframe.77a01171.js";import{j as Bt,f as z,r as d,u as $t,a as S,o as Vt,w as K,l as H,b as q,d as W,F as Xt,e as Ht,n as ve,i as Oe,m as Ye,g as de,p as Ee,q as Q,t as Y,v as M,x as X,y as Ke,z as Lt,A as jt}from"./vue.esm-bundler.b7b75245.js";import"./string.091f1772.js";import"./es.map.constructor.ff42f4fa.js";import"./es.number.to-fixed.a7cb1d76.js";function ke(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Function]"}function J(a,e,t,l=1){const[u,N]=typeof l=="number"?[l,l]:l,$=Math.round(e/u/a[0])*a[0],R=Math.round(t/N/a[1])*a[1];return[$,R]}function pe(a,e,t){return a-e-t}function ce(a,e,t){return a-e-t}function _(a,e,t){return e!==null&&a<e?e:t!==null&&t<a?t:a}function Ge(a,e,t){let l=a;const u=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(N=>ke(l[N]));if(!ke(l[u]))return!1;do{if(l[u](e))return!0;if(l===t)return!1;l=l.parentNode}while(l);return!1}function Ut(a){const e=window.getComputedStyle(a);return[parseFloat(e.getPropertyValue("width"),10),parseFloat(e.getPropertyValue("height"),10)]}function G(a,e,t){!a||(a.attachEvent?a.attachEvent("on"+e,t):a.addEventListener?a.addEventListener(e,t,!0):a["on"+e]=t)}function Fe(a,e,t){!a||(a.detachEvent?a.detachEvent("on"+e,t):a.removeEventListener?a.removeEventListener(e,t,!0):a["on"+e]=null)}const Ct=["onMousedown","onTouchstart"],B={__name:"DraggableResizableVue3",props:{className:{type:String,default:"drv"},classNameDraggable:{type:String,default:"drv-draggable"},classNameResizable:{type:String,default:"drv-resizable"},classNameDragging:{type:String,default:"drv-dragging"},classNameResizing:{type:String,default:"drv-resizing"},classNameActive:{type:String,default:"drv-active"},classNameHandle:{type:String,default:"drv-handle"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},activeOnHover:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},lockAspectRatio:{type:Boolean,default:!1},w:{type:[Number,String],validator:a=>typeof a=="number"?a>0:a==="auto"},h:{type:[Number,String],validator:a=>typeof a=="number"?a>0:a==="auto"},minWidth:{type:Number,default:0,validator:a=>a>=0},minHeight:{type:Number,default:0,validator:a=>a>=0},maxWidth:{type:Number,default:null,validator:a=>a>=0},maxHeight:{type:Number,default:null,validator:a=>a>=0},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:a=>typeof a=="string"?a==="auto":a>=0},handlesType:{type:String,default:"handles",validator:a=>["handles","borders","custom"].includes(a)},handles:{type:Array,default:()=>["tl","tm","tr","mr","br","bm","bl","ml"],validator:a=>{const e=new Set(["tl","tm","tr","mr","br","bm","bl","ml"]);return new Set(a.filter(t=>e.has(t))).size===a.length}},handlesSize:{type:Number,default:10},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:a=>["x","y","both"].includes(a)},grid:{type:Array,default:()=>[1,1]},showGrid:{type:[Boolean,String],default:!1,validator:a=>[!0,!1,"x","y","both"].includes(a)},gridColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},parent:{type:[Boolean,String],default:!1},scale:{type:[Number,Array],default:1,validator:a=>typeof a=="number"?a>0:a.length===2&&a[0]>0&&a[1]>0},onDragStart:{type:Function,default:()=>!0},onDrag:{type:Function,default:()=>!0},onResizeStart:{type:Function,default:()=>!0},onResize:{type:Function,default:()=>!0}},emits:["update:x","update:y","update:w","update:h","update:active","resizing","resizestop","dragging","dragstop","activated","deactivated"],setup(a,{emit:e}){const t=a;Bt(n=>({"1a20c8a4":z(vt),"3fb0e001":z(dt)}));const l={mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"},touch:{start:"touchstart",move:"touchmove",stop:"touchend"}},u={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},N={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"};let $=l.mouse;const R=d(null),ee=d(null),L=d({h:200,w:200,active:!1,x:0,y:0}),_e=$t(),f=S({get(){return t.w||L.value.w},set(n){e("update:w",n),L.value.w=n}}),x=S({get(){return t.h||L.value.h},set(n){e("update:h",n),L.value.h=n}}),r=S({get(){return t.x||L.value.x},set(n){e("update:x",n),L.value.x=n}}),m=S({get(){return t.y||L.value.y},set(n){e("update:y",n),L.value.y=n}}),c=d(null),g=d(null),j=S({get(){return t.active||L.value.active},set(n){e("update:active",n),L.value.active=n}}),vt=S(()=>t.handlesSize+"px"),dt=S(()=>t.handlesSize/2+"px"),ue=d(!1),oe=d(!1),y=d(null),P=d(null),T=d(null),D=d(null),U=d(!1),V=d(!1),ie=d(!1),Be=d(!1),pt=d(t.z),h=d(null),v=d(null),ct=S(()=>({transform:`translate(${r.value}px, ${m.value}px)`,width:ft.value,height:xt.value,zIndex:pt.value,...V.value&&t.disableUserSelect?u:N})),gt=S(()=>{const n={x:`linear-gradient(-90deg, ${t.gridColor} 1px, transparent 1px) 0px 0px / ${t.grid[0]}px ${t.grid[0]}px`,y:`linear-gradient(0deg, ${t.gridColor} 1px, transparent 1px) 0px 0px / ${t.grid[1]}px ${t.grid[1]}px`};return t.showGrid==="x"||t.showGrid==="y"?n[t.showGrid]:t.showGrid?`${n.x}, ${n.y}`:null}),ht=S(()=>t.resizable?t.handles:[]),ft=S(()=>f.value==="auto"&&!ue.value?"auto":f.value+"px"),xt=S(()=>x.value==="auto"&&!oe.value?"auto":x.value+"px"),E=d(t.minWidth),k=d(t.minHeight),b=d(t.maxWidth),w=d(t.maxHeight),$e=S(()=>Boolean(D.value)&&(D.value.includes("l")||D.value.includes("r"))),Ve=S(()=>Boolean(D.value)&&(D.value.includes("t")||D.value.includes("b"))),se=()=>{h.value={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},v.value={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},yt=()=>{if(t.parent){const[n,s]=Xe();P.value=n,T.value=s,c.value=P.value-f.value-r.value,g.value=T.value-x.value-m.value}},Xe=()=>{if(t.parent){const n=typeof t.parent=="string"?R.value.closest(t.parent):R.value.parentNode;ee.value=n;const s=window.getComputedStyle(n,null);return[parseInt(s.getPropertyValue("width"),10),parseInt(s.getPropertyValue("height"),10)]}return[null,null]},He=()=>{if(t.parent&&t.showGrid){if(!ee.value){const n=typeof t.parent=="string"?R.value.closest(t.parent):R.value.parentNode;ee.value=n}ee.value.style.background=gt.value}},bt=n=>{$=l.touch,Le(n)},wt=n=>{$=l.mouse,Le(n)},Le=n=>{if(n instanceof MouseEvent&&n.which!==1)return;const s=n.target||n.srcElement;if(R.value.contains(s)){if(t.onDragStart(n)===!1)return;if(t.dragHandle&&!Ge(s,t.dragHandle,R.value)||t.dragCancel&&Ge(s,t.dragCancel,R.value)){V.value=!1;return}j.value||(j.value=!0,e("activated")),t.draggable&&(ie.value=!0),h.value.mouseX=n.touches?n.touches[0].pageX:n.pageX,h.value.mouseY=n.touches?n.touches[0].pageY:n.pageY,h.value.left=r.value,h.value.right=c.value,h.value.top=m.value,h.value.bottom=g.value,t.parent&&(v.value=re()),G(document.documentElement,$.move,Nt),G(document.documentElement,$.stop,Ce)}},re=()=>({minLeft:r.value%t.grid[0],maxLeft:Math.floor((P.value-f.value-r.value)/t.grid[0])*t.grid[0]+r.value,minRight:c.value%t.grid[0],maxRight:Math.floor((P.value-f.value-c.value)/t.grid[0])*t.grid[0]+c.value,minTop:m.value%t.grid[1],maxTop:Math.floor((T.value-x.value-m.value)/t.grid[1])*t.grid[1]+m.value,minBottom:g.value%t.grid[1],maxBottom:Math.floor((T.value-x.value-g.value)/t.grid[1])*t.grid[1]+g.value}),je=n=>{const s=n.target||n.srcElement,o=new RegExp(t.className+"-([trmbl]{2})","");(!R.value||!R.value.contains(s)&&!o.test(s.className))&&(j.value&&!t.preventDeactivation&&(j.value=!1,e("deactivated")),Fe(document.documentElement,$.move,te)),se()},zt=(n,s)=>{$=l.touch,Ue(n,s)},Ue=(n,s)=>{s instanceof MouseEvent&&s.which!==1||t.onResizeStart(n,s)!==!1&&(s.stopPropagation&&s.stopPropagation(),t.lockAspectRatio&&!n.includes("m")?D.value="m"+n.substring(1):D.value=n,Be.value=!0,h.value.mouseX=s.touches?s.touches[0].pageX:s.pageX,h.value.mouseY=s.touches?s.touches[0].pageY:s.pageY,h.value.left=r.value,h.value.right=c.value,h.value.top=m.value,h.value.bottom=g.value,v.value=me(),G(document.documentElement,$.move,te),G(document.documentElement,$.stop,Ce))},me=()=>{const[n,s]=t.grid;t.lockAspectRatio&&(E.value/k.value>y.value?k.value=E.value/y.value:E.value=y.value*k.value,b.value&&w.value?(b.value=Math.min(b.value,y.value*w.value),w.value=Math.min(w.value,b.value/y.value)):b.value?w.value=b.value/y.value:w.value&&(b.value=y.value*w.value)),b.value=b.value-b.value%n,w.value=w.value-w.value%s;const o={minLeft:null,maxLeft:null,minTop:null,maxTop:null,minRight:null,maxRight:null,minBottom:null,maxBottom:null};return t.parent?(o.minLeft=r.value%n,o.maxLeft=r.value+Math.floor((f.value-E.value)/n)*n,o.minTop=m.value%s,o.maxTop=m.value+Math.floor((x.value-k.value)/s)*s,o.minRight=c.value%n,o.maxRight=c.value+Math.floor((f.value-E.value)/n)*n,o.minBottom=g.value%s,o.maxBottom=g.value+Math.floor((x.value-k.value)/s)*s,b.value&&(o.minLeft=Math.max(o.minLeft,P.value-c.value-b.value),o.minRight=Math.max(o.minRight,P.value-r.value-b.value)),w.value&&(o.minTop=Math.max(o.minTop,T.value-g.value-w.value),o.minBottom=Math.max(o.minBottom,T.value-m.value-w.value)),t.lockAspectRatio&&(o.minLeft=Math.max(o.minLeft,r.value-m.value*y.value),o.minTop=Math.max(o.minTop,m.value-r.value/y.value),o.minRight=Math.max(o.minRight,c.value-g.value*y.value),o.minBottom=Math.max(o.minBottom,g.value-c.value/y.value))):(o.minLeft=null,o.maxLeft=r.value+Math.floor((f.value-E.value)/n)*n,o.minTop=null,o.maxTop=m.value+Math.floor((x.value-k.value)/s)*s,o.minRight=null,o.maxRight=c.value+Math.floor((f.value-E.value)/n)*n,o.minBottom=null,o.maxBottom=g.value+Math.floor((x.value-k.value)/s)*s,b.value&&(o.minLeft=-(c.value+b.value),o.minRight=-(r.value+b.value)),w.value&&(o.minTop=-(g.value+w.value),o.minBottom=-(m.value+w.value)),t.lockAspectRatio&&b.value&&w.value&&(o.minLeft=Math.min(o.minLeft,-(c.value+b.value)),o.minTop=Math.min(o.minTop,-(w.value+g.value)),o.minRight=Math.min(o.minRight,-r.value-b.value),o.minBottom=Math.min(o.minBottom,-m.value-w.value))),o},Nt=n=>{U.value?te(n):ie.value&&Mt(n)},Mt=n=>{const s=t.grid,o=t.axis&&t.axis!=="y"?h.value.mouseX-(n.touches?n.touches[0].pageX:n.pageX):0,p=t.axis&&t.axis!=="x"?h.value.mouseY-(n.touches?n.touches[0].pageY:n.pageY):0,[A,C]=J(s,o,p,t.scale),F=_(h.value.left-A,v.value.minLeft,v.value.maxLeft),ae=_(h.value.top-C,v.value.minTop,v.value.maxTop);if(t.onDrag(r,m)===!1)return;const le=_(h.value.right+A,v.value.minRight,v.value.maxRight),ne=_(h.value.bottom+C,v.value.minBottom,v.value.maxBottom);r.value=F,m.value=ae,c.value=le,g.value=ne,e("dragging",r.value,m.value),V.value=!0},Rt=n=>{const[s,o]=J(t.grid,n,m.value,1),p=_(s,v.value.minLeft,v.value.maxLeft);r.value=p,c.value=P.value-f.value-p},Dt=n=>{const[s,o]=J(t.grid,r.value,n,1),p=_(o,v.value.minTop,v.value.maxTop);m.value=p,g.value=T.value-x.value-p},te=n=>{let s=r.value,o=m.value,p=c.value,A=g.value;const C=h.value.mouseX-(n.touches?n.touches[0].pageX:n.pageX),F=h.value.mouseY-(n.touches?n.touches[0].pageY:n.pageY);!ue.value&&C&&(ue.value=!0),!oe.value&&F&&(oe.value=!0);const[ae,le]=J(t.grid,C,F,t.scale);D.value.includes("b")?(A=_(h.value.bottom+le,v.value.minBottom,v.value.maxBottom),t.lockAspectRatio&&Ve&&(p=c.value-(g.value-A)*y.value)):D.value.includes("t")&&(o=_(h.value.top-le,v.value.minTop,v.value.maxTop),t.lockAspectRatio&&Ve&&(s=r.value-(m.value-o)*y.value)),D.value.includes("r")?(p=_(h.value.right+ae,v.value.minRight,v.value.maxRight),t.lockAspectRatio&&$e&&(A=g.value-(c.value-p)/y.value)):D.value.includes("l")&&(s=_(h.value.left-ae,v.value.minLeft,v.value.maxLeft),t.lockAspectRatio&&$e&&(o=m.value-(r.value-s)/y.value));const ne=pe(P.value,s,p),Ie=ce(T.value,o,A);t.onResize(D.value,s,o,ne,Ie)!==!1&&(r.value=s,m.value=o,c.value=p,g.value=A,f.value=ne,x.value=Ie,e("resizing",r.value,m.value,f.value,x.value),U.value=!0)},At=n=>{const[s]=J(t.grid,n,0,1);let o=_(P.value-s-r.value,v.value.minRight,v.value.maxRight),p=g.value;t.lockAspectRatio&&(p=g.value-(c.value-o)/y.value);const A=pe(P.value,r.value,o),C=ce(T.value,m.value,p);c.value=o,g.value=p,f.value=A,x.value=C},St=n=>{const[s,o]=J(t.grid,0,n,1);let p=_(T.value-o-m.value,v.value.minBottom,v.value.maxBottom),A=c.value;t.lockAspectRatio&&(A=c.value-(g.value-p)*y.value);const C=pe(P.value,r.value,A),F=ce(T.value,m.value,p);c.value=A,g.value=p,f.value=C,x.value=F},Ce=n=>{D.value=null,se(),ie.value=!1,Be.value=!1,U.value&&(U.value=!1,e("resizestop",r.value,m.value,f.value,x.value)),V.value&&(V.value=!1,e("dragstop",r.value,m.value)),Fe(document.documentElement,$.move,te)},Pt=()=>{t.activeOnHover&&(j.value=!0)},Tt=()=>{t.activeOnHover&&!V.value&&(j.value=!1)};return Vt(()=>{se(),t.enableNativeDrag||(R.value.ondragstart=()=>!1);const[n,s]=Xe();P.value=n,T.value=s;const[o,p]=Ut(R.value);y.value=(f.value!=="auto"?f.value:o)/(x.value!=="auto"?x.value:p),f.value=f.value!=="auto"?f.value:o,x.value=x.value!=="auto"?x.value:p,c.value=P.value-f.value-r.value,g.value=T.value-x.value-m.value,j.value&&e("activated"),t.showGrid&&He(),G(document.documentElement,"mousedown",je),G(document.documentElement,"touchend touchcancel",je),G(window,"resize",yt)}),K(()=>t.x,n=>{U.value||V.value||(t.parent&&(v.value=re()),Rt(n))}),K(()=>t.y,n=>{U.value||V.value||(t.parent&&(v.value=re()),Dt(n))}),K(()=>t.lockAspectRatio,n=>{n?y.value=f.value/x.value:y.value=void 0}),K(()=>t.w,n=>{U.value||V.value||(t.parent&&(v.value=me()),At(n))}),K(()=>t.h,n=>{U.value||V.value||(t.parent&&(v.value=me()),St(n))}),K(()=>t.showGrid,()=>{He()}),(n,s)=>(H(),q("div",{ref_key:"el",ref:R,style:Oe(z(ct)),class:ve([{[a.classNameActive]:z(j),[a.classNameDragging]:V.value,[a.classNameResizing]:U.value,[a.classNameDraggable]:a.draggable,[a.classNameResizable]:a.resizable},a.className]),onMousedown:wt,onTouchstart:bt,onMouseover:Pt,onMouseleave:Tt},[W("div",{class:ve("drv-"+a.handlesType)},[(H(!0),q(Xt,null,Ht(z(ht),o=>(H(),q("div",{key:o,class:ve([a.classNameHandle,a.classNameHandle+"-"+o,a.classNameHandle!=="drv-handle"?"drv-handle":"",a.classNameHandle!=="drv-handle"?"drv-handle-"+o:""]),style:Oe({display:z(j)?"block":"none"}),onMousedown:Ye(p=>Ue(o,p),["stop","prevent"]),onTouchstart:Ye(p=>zt(o,p),["stop","prevent"])},[z(_e)["handle-"+o]?de(n.$slots,"handle-"+o,{key:0}):Ee("",!0),z(_e)["handle-"+o]?Ee("",!0):de(n.$slots,"handle",{key:1})],46,Ct))),128))],2),de(n.$slots,"default")],38))}};B.__docgenInfo={exportName:"default",displayName:"DraggableResizableVue3",description:"",tags:{},props:[{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"'drv'"}},{name:"classNameDraggable",type:{name:"string"},defaultValue:{func:!1,value:"'drv-draggable'"}},{name:"classNameResizable",type:{name:"string"},defaultValue:{func:!1,value:"'drv-resizable'"}},{name:"classNameDragging",type:{name:"string"},defaultValue:{func:!1,value:"'drv-dragging'"}},{name:"classNameResizing",type:{name:"string"},defaultValue:{func:!1,value:"'drv-resizing'"}},{name:"classNameActive",type:{name:"string"},defaultValue:{func:!1,value:"'drv-active'"}},{name:"classNameHandle",type:{name:"string"},defaultValue:{func:!1,value:"'drv-handle'"}},{name:"disableUserSelect",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"enableNativeDrag",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"preventDeactivation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeOnHover",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"draggable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"resizable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"lockAspectRatio",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"w",type:{name:"number|string"}},{name:"h",type:{name:"number|string"}},{name:"minWidth",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"minHeight",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxWidth",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"x",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"y",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"z",type:{name:"string|number"},defaultValue:{func:!1,value:"'auto'"}},{name:"handlesType",type:{name:"string"},defaultValue:{func:!1,value:"'handles'"},values:["handles","borders","custom"]},{name:"handles",type:{name:"array"},defaultValue:{func:!1,value:"['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']"}},{name:"handlesSize",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"dragHandle",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"dragCancel",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"axis",type:{name:"string"},defaultValue:{func:!1,value:"'both'"},values:["x","y","both"]},{name:"grid",type:{name:"array"},defaultValue:{func:!1,value:"[1, 1]"}},{name:"showGrid",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"},values:[!0,"x","y","both"]},{name:"gridColor",type:{name:"string"},defaultValue:{func:!1,value:"'rgba(0, 0, 0, 0.1)'"}},{name:"parent",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"scale",type:{name:"number|array"},defaultValue:{func:!1,value:"1"}},{name:"onDragStart",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onDrag",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onResizeStart",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onResize",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}}],events:[{name:"update:x"},{name:"update:y"},{name:"update:w"},{name:"update:h"},{name:"update:active"},{name:"resizing"},{name:"resizestop"},{name:"dragging"},{name:"dragstop"},{name:"activated"},{name:"deactivated"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"handle"}]};B.install=a=>(a.component(B.name,B),a);const It=M(" Draggable and resizable element "),Me={__name:"NoProps",setup(a){return(e,t)=>(H(),Q(z(B),null,{default:Y(()=>[It]),_:1}))}};Me.__docgenInfo={exportName:"default",displayName:"NoProps",description:"",tags:{}};const Ot=W("br",null,null,-1),Yt=W("br",null,null,-1),Et=W("br",null,null,-1),kt=W("br",null,null,-1),Re={__name:"WithBasicProps",setup(a){const e=d({x:20,y:20,width:200,height:200,isActive:!1});return(t,l)=>(H(),Q(z(B),{x:e.value.x,"onUpdate:x":l[0]||(l[0]=u=>e.value.x=u),y:e.value.y,"onUpdate:y":l[1]||(l[1]=u=>e.value.y=u),h:e.value.height,"onUpdate:h":l[2]||(l[2]=u=>e.value.height=u),w:e.value.width,"onUpdate:w":l[3]||(l[3]=u=>e.value.width=u),active:e.value.isActive,"onUpdate:active":l[4]||(l[4]=u=>e.value.isActive=u)},{default:Y(()=>[M(" x="+X(e.value.x),1),Ot,M(" y="+X(e.value.y),1),Yt,M(" height="+X(e.value.height),1),Et,M(" width="+X(e.value.width),1),kt,M(" isActive="+X(e.value.isActive),1)]),_:1},8,["x","y","h","w","active"]))}};Re.__docgenInfo={exportName:"default",displayName:"WithBasicProps",description:"",tags:{}};const Gt=W("br",null,null,-1),Ft=W("br",null,null,-1),Kt=W("br",null,null,-1),Jt=W("br",null,null,-1),De={__name:"WithMinMax",setup(a){const e=d({x:20,y:20,width:200,height:200,isActive:!1});return(t,l)=>(H(),Q(z(B),{x:e.value.x,"onUpdate:x":l[0]||(l[0]=u=>e.value.x=u),y:e.value.y,"onUpdate:y":l[1]||(l[1]=u=>e.value.y=u),h:e.value.height,"onUpdate:h":l[2]||(l[2]=u=>e.value.height=u),w:e.value.width,"onUpdate:w":l[3]||(l[3]=u=>e.value.width=u),active:e.value.isActive,"onUpdate:active":l[4]||(l[4]=u=>e.value.isActive=u),"min-width":150,"min-height":150,"max-width":300,"max-height":300},{default:Y(()=>[M(" x="+X(e.value.x),1),Gt,M(" y="+X(e.value.y),1),Ft,M(" height="+X(e.value.height),1),Kt,M(" width="+X(e.value.width),1),Jt,M(" isActive="+X(e.value.isActive),1)]),_:1},8,["x","y","h","w","active"]))}};De.__docgenInfo={exportName:"default",displayName:"WithMinMax",description:"",tags:{}};const Qt={class:"toolbar"},qt=M("Text: "),Ae={__name:"WidthAuto",setup(a){const e=d("lorem ipsum dolor sit amet, consectetur adipiscing"),t=d({x:20,y:80,height:20,isActive:!1});return(l,u)=>(H(),q("div",null,[Ke(z(B),{x:t.value.x,"onUpdate:x":u[0]||(u[0]=N=>t.value.x=N),y:t.value.y,"onUpdate:y":u[1]||(u[1]=N=>t.value.y=N),h:t.value.height,"onUpdate:h":u[2]||(u[2]=N=>t.value.height=N),active:t.value.isActive,"onUpdate:active":u[3]||(u[3]=N=>t.value.isActive=N),w:"auto"},{default:Y(()=>[M(X(e.value),1)]),_:1},8,["x","y","h","active"]),W("div",Qt,[qt,Lt(W("input",{"onUpdate:modelValue":u[4]||(u[4]=N=>e.value=N)},null,512),[[jt,e.value]])])]))}};Ae.__docgenInfo={exportName:"default",displayName:"WidthAuto",description:"",tags:{}};const Zt=W("img",{class:"image",src:"https://unsplash.com/photos/KjBH8dJYcfQ/download?ixid=MnwxMjA3fDB8MXxhbGx8MjN8fHx8fHwyfHwxNjYwNDg1NjEz&force=true&w=640"},null,-1),Se={__name:"ResizeImage",setup(a){const e=d({x:20,y:80,width:640,height:426,isActive:!1});return(t,l)=>(H(),q("div",null,[Ke(z(B),{x:e.value.x,"onUpdate:x":l[0]||(l[0]=u=>e.value.x=u),y:e.value.y,"onUpdate:y":l[1]||(l[1]=u=>e.value.y=u),h:e.value.height,"onUpdate:h":l[2]||(l[2]=u=>e.value.height=u),w:e.value.width,"onUpdate:w":l[3]||(l[3]=u=>e.value.width=u),active:e.value.isActive,"onUpdate:active":l[4]||(l[4]=u=>e.value.isActive=u)},{default:Y(()=>[Zt]),_:1},8,["x","y","h","w","active"])]))}};Se.__docgenInfo={exportName:"default",displayName:"ResizeImage",description:"",tags:{}};const ea=W("img",{class:"image",src:"https://unsplash.com/photos/KjBH8dJYcfQ/download?ixid=MnwxMjA3fDB8MXxhbGx8MjN8fHx8fHwyfHwxNjYwNDg1NjEz&force=true&w=640"},null,-1),Pe={__name:"ResizeImageAspectRatio",setup(a){const e=d({x:20,y:80,width:640,height:426,isActive:!1});return(t,l)=>(H(),Q(z(B),{x:e.value.x,"onUpdate:x":l[0]||(l[0]=u=>e.value.x=u),y:e.value.y,"onUpdate:y":l[1]||(l[1]=u=>e.value.y=u),h:e.value.height,"onUpdate:h":l[2]||(l[2]=u=>e.value.height=u),w:e.value.width,"onUpdate:w":l[3]||(l[3]=u=>e.value.width=u),active:e.value.isActive,"onUpdate:active":l[4]||(l[4]=u=>e.value.isActive=u),"lock-aspect-ratio":!0},{default:Y(()=>[ea]),_:1},8,["x","y","h","w","active"]))}};Pe.__docgenInfo={exportName:"default",displayName:"ResizeImageAspectRatio",description:"",tags:{}};const ta=M(" Not draggable but resizable "),Te={__name:"NotDraggable",setup(a){const e=d({x:20,y:20,width:200,height:200,isActive:!1});return(t,l)=>(H(),Q(z(B),{x:e.value.x,"onUpdate:x":l[0]||(l[0]=u=>e.value.x=u),y:e.value.y,"onUpdate:y":l[1]||(l[1]=u=>e.value.y=u),h:e.value.height,"onUpdate:h":l[2]||(l[2]=u=>e.value.height=u),w:e.value.width,"onUpdate:w":l[3]||(l[3]=u=>e.value.width=u),active:e.value.isActive,"onUpdate:active":l[4]||(l[4]=u=>e.value.isActive=u),draggable:!1},{default:Y(()=>[ta]),_:1},8,["x","y","h","w","active"]))}};Te.__docgenInfo={exportName:"default",displayName:"NotDraggable",description:"",tags:{}};const aa=M(" Not draggable but resizable "),We={__name:"NotResizable",setup(a){const e=d({x:20,y:20,width:200,height:200,isActive:!1});return(t,l)=>(H(),Q(z(B),{x:e.value.x,"onUpdate:x":l[0]||(l[0]=u=>e.value.x=u),y:e.value.y,"onUpdate:y":l[1]||(l[1]=u=>e.value.y=u),h:e.value.height,"onUpdate:h":l[2]||(l[2]=u=>e.value.height=u),w:e.value.width,"onUpdate:w":l[3]||(l[3]=u=>e.value.width=u),active:e.value.isActive,"onUpdate:active":l[4]||(l[4]=u=>e.value.isActive=u),resizable:!1},{default:Y(()=>[aa]),_:1},8,["x","y","h","w","active"]))}};We.__docgenInfo={exportName:"default",displayName:"NotResizable",description:"",tags:{}};function ge(){return ge=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},ge.apply(this,arguments)}const la={},na="wrapper";function Je({components:a,...e}){return i(na,ge({},la,e,{components:a,mdxType:"MDXLayout"}),i("pre",null,i("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue>
    Draggable and resizable element
  </draggable-resizable-vue>
</template>

<script setup>
import DraggableResizableVue from "draggable-resizable-vue3";
<\/script>
`)))}Je.isMDXComponent=!0;function he(){return he=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},he.apply(this,arguments)}const ua={},oa="wrapper";function Qe({components:a,...e}){return i(oa,he({},ua,e,{components:a,mdxType:"MDXLayout"}),i("pre",null,i("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: false,
})
<\/script>

`)))}Qe.isMDXComponent=!0;function fe(){return fe=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},fe.apply(this,arguments)}const ia={},sa="wrapper";function qe({components:a,...e}){return i(sa,fe({},ia,e,{components:a,mdxType:"MDXLayout"}),i("pre",null,i("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :min-width="150"
    :min-height="150"
    :max-width="300"
    :max-height="300"
  >
    x={{ element.x }}<br />
    y={{ element.y }}<br />
    height={{ element.height }}<br />
    width={{ element.width }}<br />
    isActive={{ element.isActive }}
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: false,
})
<\/script>

`)))}qe.isMDXComponent=!0;function xe(){return xe=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},xe.apply(this,arguments)}const ra={},ma="wrapper";function Ze({components:a,...e}){return i(ma,xe({},ra,e,{components:a,mdxType:"MDXLayout"}),i("pre",null,i("code",{parentName:"pre",className:"language-html"},`<template>
  <div>
    <draggable-resizable-vue
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:active="element.isActive"
      w="auto"
    >
      {{ text }}
    </draggable-resizable-vue>
    <div class="toolbar">Text: <input v-model="text" /></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const text = ref('lorem ipsum dolor sit amet, consectetur adipiscing')

const element = ref({
  x: 20,
  y: 80,
  height: 20,
  isActive: false,
})
<\/script>

`)))}Ze.isMDXComponent=!0;function ye(){return ye=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},ye.apply(this,arguments)}const va={},da="wrapper";function et({components:a,...e}){return i(da,ye({},va,e,{components:a,mdxType:"MDXLayout"}),i("pre",null,i("code",{parentName:"pre",className:"language-html"},`<template>
  <div>
    <draggable-resizable-vue
      v-model:x="element.x"
      v-model:y="element.y"
      v-model:h="element.height"
      v-model:w="element.width"
      v-model:active="element.isActive"
    >
      <img
        class="image"
        src="https://unsplash.com/photos/KjBH8dJYcfQ/download?ixid=MnwxMjA3fDB8MXxhbGx8MjN8fHx8fHwyfHwxNjYwNDg1NjEz&force=true&w=640"
      />
    </draggable-resizable-vue>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 80,
  width: 640,
  height: 426,
  isActive: false,
})
<\/script>

<style>
.image {
  width: 100%;
  height: 100%;
}
</style>

`)))}et.isMDXComponent=!0;function be(){return be=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},be.apply(this,arguments)}const pa={},ca="wrapper";function tt({components:a,...e}){return i(ca,be({},pa,e,{components:a,mdxType:"MDXLayout"}),i("pre",null,i("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :lock-aspect-ratio="true"
  >
    <img
      class="image"
      src="https://unsplash.com/photos/KjBH8dJYcfQ/download?ixid=MnwxMjA3fDB8MXxhbGx8MjN8fHx8fHwyfHwxNjYwNDg1NjEz&force=true&w=640"
    />
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 80,
  width: 640,
  height: 426,
  isActive: false,
})
<\/script>

<style>
.image {
  width: 100%;
  height: 100%;
}
</style>

`)))}tt.isMDXComponent=!0;function we(){return we=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},we.apply(this,arguments)}const ga={},ha="wrapper";function ze({components:a,...e}){return i(ha,we({},ga,e,{components:a,mdxType:"MDXLayout"}),i("pre",null,i("code",{parentName:"pre",className:"language-html"},`<template>
  <draggable-resizable-vue
    v-model:x="element.x"
    v-model:y="element.y"
    v-model:h="element.height"
    v-model:w="element.width"
    v-model:active="element.isActive"
    :draggable="false"
  >
   Not draggable
  </draggable-resizable-vue>
</template>

<script setup>
import { ref } from 'vue'
import DraggableResizableVue from 'draggable-resizable-vue3'

const element = ref({
  x: 20,
  y: 20,
  width: 200,
  height: 200,
  isActive: false,
})
<\/script>

`)))}ze.isMDXComponent=!0;function Ne(){return Ne=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(a[l]=t[l])}return a},Ne.apply(this,arguments)}const fa={},xa="wrapper";function at({components:a,...e}){return i(xa,Ne({},fa,e,{components:a,mdxType:"MDXLayout"}),i(_t,{title:"Examples",mdxType:"Meta"}),i("h1",null,"No props"),i(I,{mdxType:"Canvas"},i(O,{name:"No props",height:"300px",mdxType:"Story"},{components:{NoProps:Me},template:"<NoProps />"})),i(Je,{mdxType:"NoPropsDocs"}),i("h1",null,"With basic props"),i(I,{mdxType:"Canvas"},i(O,{name:"With basic props",height:"300px",mdxType:"Story"},{components:{WithBasicProps:Re},template:"<WithBasicProps />"})),i(Qe,{mdxType:"WithBasicPropsDocs"}),i("h1",null,"With min-width, min-height, max-width, max-height"),i(I,{mdxType:"Canvas"},i(O,{name:"With min-width, min-height, max-width, max-height",height:"300px",mdxType:"Story"},{components:{WithMinMax:De},template:"<WithMinMax />"})),i(qe,{mdxType:"WithMinMaxDocs"}),i("h1",null,"With auto width"),i(I,{mdxType:"Canvas"},i(O,{name:"With auto width",height:"300px",mdxType:"Story"},{components:{WidthAuto:Ae},template:"<WidthAuto />"})),i(Ze,{mdxType:"WidthAutoDocs"}),i("h1",null,"Resize image"),i(I,{mdxType:"Canvas"},i(O,{name:"Resize image",height:"300px",mdxType:"Story"},{components:{ResizeImage:Se},template:"<ResizeImage />"})),i(et,{mdxType:"ResizeImageDocs"}),i("h1",null,"Resize image with locked aspect ratio"),i(I,{mdxType:"Canvas"},i(O,{name:"Resize image with locked aspect ratio",height:"300px",mdxType:"Story"},{components:{ResizeImageAspectRatio:Pe},template:"<ResizeImageAspectRatio />"})),i(tt,{mdxType:"ResizeImageAspectRatioDocs"}),i("h1",null,"Not draggable"),i(I,{mdxType:"Canvas"},i(O,{name:"Not draggable",height:"300px",mdxType:"Story"},{components:{NotDraggable:Te},template:"<NotDraggable />"})),i(ze,{mdxType:"NotDraggableDocs"}),i("h1",null,"Not resizable"),i(I,{mdxType:"Canvas"},i(O,{name:"Not resizable",height:"300px",mdxType:"Story"},{components:{NotResizable:We},template:"<NotResizable />"})),i(ze,{mdxType:"NotResizableDocs"}))}at.isMDXComponent=!0;const lt=()=>({components:{NoProps:Me},template:"<NoProps />"});lt.storyName="No props";lt.parameters={storySource:{source:`{
  components: {
    NoProps
  },
  template: "<NoProps />"
}`}};const nt=()=>({components:{WithBasicProps:Re},template:"<WithBasicProps />"});nt.storyName="With basic props";nt.parameters={storySource:{source:`{
  components: {
    WithBasicProps
  },
  template: "<WithBasicProps />"
}`}};const ut=()=>({components:{WithMinMax:De},template:"<WithMinMax />"});ut.storyName="With min-width, min-height, max-width, max-height";ut.parameters={storySource:{source:`{
  components: {
    WithMinMax
  },
  template: "<WithMinMax />"
}`}};const ot=()=>({components:{WidthAuto:Ae},template:"<WidthAuto />"});ot.storyName="With auto width";ot.parameters={storySource:{source:`{
  components: {
    WidthAuto
  },
  template: "<WidthAuto />"
}`}};const it=()=>({components:{ResizeImage:Se},template:"<ResizeImage />"});it.storyName="Resize image";it.parameters={storySource:{source:`{
  components: {
    ResizeImage
  },
  template: "<ResizeImage />"
}`}};const st=()=>({components:{ResizeImageAspectRatio:Pe},template:"<ResizeImageAspectRatio />"});st.storyName="Resize image with locked aspect ratio";st.parameters={storySource:{source:`{
  components: {
    ResizeImageAspectRatio
  },
  template: "<ResizeImageAspectRatio />"
}`}};const rt=()=>({components:{NotDraggable:Te},template:"<NotDraggable />"});rt.storyName="Not draggable";rt.parameters={storySource:{source:`{
  components: {
    NotDraggable
  },
  template: "<NotDraggable />"
}`}};const mt=()=>({components:{NotResizable:We},template:"<NotResizable />"});mt.storyName="Not resizable";mt.parameters={storySource:{source:`{
  components: {
    NotResizable
  },
  template: "<NotResizable />"
}`}};const Z={title:"Examples",includeStories:["noProps","withBasicProps","withMinWidthMinHeightMaxWidthMaxHeight","withAutoWidth","resizeImage","resizeImageWithLockedAspectRatio","notDraggable","notResizable"]},ya={"No props":"noProps","With basic props":"withBasicProps","With min-width, min-height, max-width, max-height":"withMinWidthMinHeightMaxWidthMaxHeight","With auto width":"withAutoWidth","Resize image":"resizeImage","Resize image with locked aspect ratio":"resizeImageWithLockedAspectRatio","Not draggable":"notDraggable","Not resizable":"notResizable"};Z.parameters=Z.parameters||{};Z.parameters.docs={...Z.parameters.docs||{},page:()=>i(Wt,{mdxStoryNameToKey:ya,mdxComponentAnnotations:Z},i(at,null))};const Aa=["noProps","withBasicProps","withMinWidthMinHeightMaxWidthMaxHeight","withAutoWidth","resizeImage","resizeImageWithLockedAspectRatio","notDraggable","notResizable"];export{Aa as __namedExportsOrder,Z as default,lt as noProps,rt as notDraggable,mt as notResizable,it as resizeImage,st as resizeImageWithLockedAspectRatio,ot as withAutoWidth,nt as withBasicProps,ut as withMinWidthMinHeightMaxWidthMaxHeight};
//# sourceMappingURL=basic.stories.8cce2069.js.map
