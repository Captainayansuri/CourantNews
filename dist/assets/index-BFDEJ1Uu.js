(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cs={exports:{}},mi={},ds={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),Lc=Symbol.for("react.portal"),Pc=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),Ic=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Oc=Symbol.for("react.context"),Dc=Symbol.for("react.forward_ref"),Fc=Symbol.for("react.suspense"),Uc=Symbol.for("react.memo"),$c=Symbol.for("react.lazy"),ta=Symbol.iterator;function Hc(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var ps={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fs=Object.assign,gs={};function vn(e,t,n){this.props=e,this.context=t,this.refs=gs,this.updater=n||ps}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hs(){}hs.prototype=vn.prototype;function to(e,t,n){this.props=e,this.context=t,this.refs=gs,this.updater=n||ps}var no=to.prototype=new hs;no.constructor=to;fs(no,vn.prototype);no.isPureReactComponent=!0;var na=Array.isArray,ms=Object.prototype.hasOwnProperty,ro={current:null},vs={key:!0,ref:!0,__self:!0,__source:!0};function ys(e,t,n){var r,i={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)ms.call(t,r)&&!vs.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:or,type:e,key:l,ref:a,props:i,_owner:ro.current}}function Vc(e,t){return{$$typeof:or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function io(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function Bc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Ai(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bc(""+e.key):t.toString(36)}function Lr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case or:case Lc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Ai(a,0):r,na(i)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Lr(i,t,n,"",function(d){return d})):i!=null&&(io(i)&&(i=Vc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(ra,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",na(e))for(var s=0;s<e.length;s++){l=e[s];var u=r+Ai(l,s);a+=Lr(l,t,n,u,i)}else if(u=Hc(e),typeof u=="function")for(e=u.call(e),s=0;!(l=e.next()).done;)l=l.value,u=r+Ai(l,s++),a+=Lr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function fr(e,t,n){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Wc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Pr={transition:null},Qc={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Pr,ReactCurrentOwner:ro};function xs(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:fr,forEach:function(e,t,n){fr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fr(e,function(){t++}),t},toArray:function(e){return fr(e,function(t){return t})||[]},only:function(e){if(!io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=vn;R.Fragment=Pc;R.Profiler=Ic;R.PureComponent=to;R.StrictMode=Ac;R.Suspense=Fc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qc;R.act=xs;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fs({},e.props),i=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=ro.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ms.call(t,u)&&!vs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:or,type:e.type,key:i,ref:l,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:Oc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Rc,_context:e},e.Consumer=e};R.createElement=ys;R.createFactory=function(e){var t=ys.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Dc,render:e}};R.isValidElement=io;R.lazy=function(e){return{$$typeof:$c,_payload:{_status:-1,_result:e},_init:Wc}};R.memo=function(e,t){return{$$typeof:Uc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Pr.transition;Pr.transition={};try{e()}finally{Pr.transition=t}};R.unstable_act=xs;R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.3.1";ds.exports=R;var z=ds.exports;const qc=Mc(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=z,Zc=Symbol.for("react.element"),Yc=Symbol.for("react.fragment"),Xc=Object.prototype.hasOwnProperty,Gc=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jc={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,t,n){var r,i={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Xc.call(t,r)&&!Jc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Zc,type:e,key:l,ref:a,props:i,_owner:Gc.current}}mi.Fragment=Yc;mi.jsx=ws;mi.jsxs=ws;cs.exports=mi;var o=cs.exports,sl={},ks={exports:{}},Ce={},Ss={exports:{}},js={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,M){var P=C.length;C.push(M);e:for(;0<P;){var V=P-1>>>1,Y=C[V];if(0<i(Y,M))C[V]=M,C[P]=Y,P=V;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var M=C[0],P=C.pop();if(P!==M){C[0]=P;e:for(var V=0,Y=C.length,_t=Y>>>1;V<_t;){var Ve=2*(V+1)-1,L=C[Ve],ie=Ve+1,Ae=C[ie];if(0>i(L,P))ie<Y&&0>i(Ae,L)?(C[V]=Ae,C[ie]=P,V=ie):(C[V]=L,C[Ve]=P,V=Ve);else if(ie<Y&&0>i(Ae,P))C[V]=Ae,C[ie]=P,V=ie;else break e}}return M}function i(C,M){var P=C.sortIndex-M.sortIndex;return P!==0?P:C.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],m=1,h=null,g=3,y=!1,x=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(C){for(var M=n(d);M!==null;){if(M.callback===null)r(d);else if(M.startTime<=C)r(d),M.sortIndex=M.expirationTime,t(u,M);else break;M=n(d)}}function v(C){if(k=!1,f(C),!x)if(n(u)!==null)x=!0,wn(S);else{var M=n(d);M!==null&&ot(v,M.startTime-C)}}function S(C,M){x=!1,k&&(k=!1,p(N),N=-1),y=!0;var P=g;try{for(f(M),h=n(u);h!==null&&(!(h.expirationTime>M)||C&&!G());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var Y=V(h.expirationTime<=M);M=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(u)&&r(u),f(M)}else r(u);h=n(u)}if(h!==null)var _t=!0;else{var Ve=n(d);Ve!==null&&ot(v,Ve.startTime-M),_t=!1}return _t}finally{h=null,g=P,y=!1}}var b=!1,j=null,N=-1,O=5,T=-1;function G(){return!(e.unstable_now()-T<O)}function I(){if(j!==null){var C=e.unstable_now();T=C;var M=!0;try{M=j(!0,C)}finally{M?ke():(b=!1,j=null)}}else b=!1}var ke;if(typeof c=="function")ke=function(){c(I)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,pr=He.port2;He.port1.onmessage=I,ke=function(){pr.postMessage(null)}}else ke=function(){A(I,0)};function wn(C){j=C,b||(b=!0,ke())}function ot(C,M){N=A(function(){C(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,wn(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var M=3;break;default:M=g}var P=g;g=M;try{return C()}finally{g=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,M){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var P=g;g=C;try{return M()}finally{g=P}},e.unstable_scheduleCallback=function(C,M,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,C){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,C={id:m++,callback:M,priorityLevel:C,startTime:P,expirationTime:Y,sortIndex:-1},P>V?(C.sortIndex=P,t(d,C),n(u)===null&&C===n(d)&&(k?(p(N),N=-1):k=!0,ot(v,P-V))):(C.sortIndex=Y,t(u,C),x||y||(x=!0,wn(S))),C},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(C){var M=g;return function(){var P=g;g=M;try{return C.apply(this,arguments)}finally{g=P}}}})(js);Ss.exports=js;var ed=Ss.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td=z,Ne=ed;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bs=new Set,Vn={};function $t(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Vn[e]=t,e=0;e<t.length;e++)bs.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,nd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia={},la={};function rd(e){return ul.call(la,e)?!0:ul.call(ia,e)?!1:nd.test(e)?la[e]=!0:(ia[e]=!0,!1)}function id(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ld(e,t,n,r){if(t===null||typeof t>"u"||id(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var lo=/[\-:]([a-z])/g;function oo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lo,oo);ae[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lo,oo);ae[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lo,oo);ae[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function ao(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ld(t,n,i,r)&&(n=null),r||i===null?rd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),so=Symbol.for("react.strict_mode"),cl=Symbol.for("react.profiler"),Ns=Symbol.for("react.provider"),Cs=Symbol.for("react.context"),uo=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),co=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),_s=Symbol.for("react.offscreen"),oa=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=oa&&e[oa]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Ii;function Tn(e){if(Ii===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ii=t&&t[1]||""}return`
`+Ii+e}var Ri=!1;function Oi(e,t){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,s=l.length-1;1<=a&&0<=s&&i[a]!==l[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==l[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==l[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Tn(e):""}function od(e){switch(e.tag){case 5:return Tn(e.type);case 16:return Tn("Lazy");case 13:return Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case Bt:return"Portal";case cl:return"Profiler";case so:return"StrictMode";case dl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cs:return(e.displayName||"Context")+".Consumer";case Ns:return(e._context.displayName||"Context")+".Provider";case uo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case co:return t=e.displayName||null,t!==null?t:fl(e.type)||"Memo";case st:t=e._payload,e=e._init;try{return fl(e(t))}catch{}}return null}function ad(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fl(t);case 8:return t===so?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function St(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sd(e){var t=zs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hr(e){e._valueTracker||(e._valueTracker=sd(e))}function Es(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=St(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ts(e,t){t=t.checked,t!=null&&ao(e,"checked",t,!1)}function hl(e,t){Ts(e,t);var n=St(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&ml(e,t.type,St(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ml(e,t,n){(t!=="number"||Br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mn=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+St(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Mn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:St(n)}}function Ms(e,t){var n=St(t.value),r=St(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ls(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ls(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mr,Ps=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var An={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ud=["Webkit","ms","Moz","O"];Object.keys(An).forEach(function(e){ud.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),An[t]=An[e]})});function As(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||An.hasOwnProperty(e)&&An[e]?(""+t).trim():t+"px"}function Is(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=As(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xl(e,t){if(t){if(cd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,rn=null,ln=null;function da(e){if(e=ur(e)){if(typeof Sl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ki(t),Sl(e.stateNode,e.type,t))}}function Rs(e){rn?ln?ln.push(e):ln=[e]:rn=e}function Os(){if(rn){var e=rn,t=ln;if(ln=rn=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Ds(e,t){return e(t)}function Fs(){}var Di=!1;function Us(e,t,n){if(Di)return e(t,n);Di=!0;try{return Ds(e,t,n)}finally{Di=!1,(rn!==null||ln!==null)&&(Fs(),Os())}}function Wn(e,t){var n=e.stateNode;if(n===null)return null;var r=ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var jl=!1;if(tt)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){jl=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{jl=!1}function dd(e,t,n,r,i,l,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var In=!1,Wr=null,Qr=!1,bl=null,pd={onError:function(e){In=!0,Wr=e}};function fd(e,t,n,r,i,l,a,s,u){In=!1,Wr=null,dd.apply(pd,arguments)}function gd(e,t,n,r,i,l,a,s,u){if(fd.apply(this,arguments),In){if(In){var d=Wr;In=!1,Wr=null}else throw Error(w(198));Qr||(Qr=!0,bl=d)}}function Ht(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pa(e){if(Ht(e)!==e)throw Error(w(188))}function hd(e){var t=e.alternate;if(!t){if(t=Ht(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return pa(i),e;if(l===r)return pa(i),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a){for(s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Hs(e){return e=hd(e),e!==null?Vs(e):null}function Vs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vs(e);if(t!==null)return t;e=e.sibling}return null}var Bs=Ne.unstable_scheduleCallback,fa=Ne.unstable_cancelCallback,md=Ne.unstable_shouldYield,vd=Ne.unstable_requestPaint,X=Ne.unstable_now,yd=Ne.unstable_getCurrentPriorityLevel,fo=Ne.unstable_ImmediatePriority,Ws=Ne.unstable_UserBlockingPriority,qr=Ne.unstable_NormalPriority,xd=Ne.unstable_LowPriority,Qs=Ne.unstable_IdlePriority,vi=null,qe=null;function wd(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:jd,kd=Math.log,Sd=Math.LN2;function jd(e){return e>>>=0,e===0?32:31-(kd(e)/Sd|0)|0}var vr=64,yr=4194304;function Ln(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~i;s!==0?r=Ln(s):(l&=a,l!==0&&(r=Ln(l)))}else a=n&~i,a!==0?r=Ln(a):l!==0&&(r=Ln(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Fe(t),i=1<<n,r|=e[n],t&=~i;return r}function bd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Fe(l),s=1<<a,u=i[a];u===-1?(!(s&n)||s&r)&&(i[a]=bd(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qs(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Fe(t),e[t]=n}function Cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Fe(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function go(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Ks(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zs,ho,Ys,Xs,Gs,Cl=!1,xr=[],gt=null,ht=null,mt=null,Qn=new Map,qn=new Map,ct=[],_d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ga(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function jn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ur(t),t!==null&&ho(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zd(e,t,n,r,i){switch(t){case"focusin":return gt=jn(gt,e,t,n,r,i),!0;case"dragenter":return ht=jn(ht,e,t,n,r,i),!0;case"mouseover":return mt=jn(mt,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Qn.set(l,jn(Qn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,qn.set(l,jn(qn.get(l)||null,e,t,n,r,i)),!0}return!1}function Js(e){var t=Mt(e.target);if(t!==null){var n=Ht(t);if(n!==null){if(t=n.tag,t===13){if(t=$s(n),t!==null){e.blockedOn=t,Gs(e.priority,function(){Ys(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=ur(n),t!==null&&ho(t),e.blockedOn=n,!1;t.shift()}return!0}function ha(e,t,n){Ar(e)&&n.delete(t)}function Ed(){Cl=!1,gt!==null&&Ar(gt)&&(gt=null),ht!==null&&Ar(ht)&&(ht=null),mt!==null&&Ar(mt)&&(mt=null),Qn.forEach(ha),qn.forEach(ha)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority,Ed)))}function Kn(e){function t(i){return bn(i,e)}if(0<xr.length){bn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&bn(gt,e),ht!==null&&bn(ht,e),mt!==null&&bn(mt,e),Qn.forEach(t),qn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Js(n),n.blockedOn===null&&ct.shift()}var on=lt.ReactCurrentBatchConfig,Zr=!0;function Td(e,t,n,r){var i=F,l=on.transition;on.transition=null;try{F=1,mo(e,t,n,r)}finally{F=i,on.transition=l}}function Md(e,t,n,r){var i=F,l=on.transition;on.transition=null;try{F=4,mo(e,t,n,r)}finally{F=i,on.transition=l}}function mo(e,t,n,r){if(Zr){var i=_l(e,t,n,r);if(i===null)Zi(e,t,r,Yr,n),ga(e,r);else if(zd(i,e,t,n,r))r.stopPropagation();else if(ga(e,r),t&4&&-1<_d.indexOf(e)){for(;i!==null;){var l=ur(i);if(l!==null&&Zs(l),l=_l(e,t,n,r),l===null&&Zi(e,t,r,Yr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Zi(e,t,r,null,n)}}var Yr=null;function _l(e,t,n,r){if(Yr=null,e=po(r),e=Mt(e),e!==null)if(t=Ht(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$s(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yr=e,null}function eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yd()){case fo:return 1;case Ws:return 4;case qr:case xd:return 16;case Qs:return 536870912;default:return 16}default:return 16}}var pt=null,vo=null,Ir=null;function tu(){if(Ir)return Ir;var e,t=vo,n=t.length,r,i="value"in pt?pt.value:pt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Ir=i.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wr(){return!0}function ma(){return!1}function _e(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?wr:ma,this.isPropagationStopped=ma,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wr)},persist:function(){},isPersistent:wr}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yo=_e(yn),sr=q({},yn,{view:0,detail:0}),Ld=_e(sr),Ui,$i,Nn,yi=q({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(Ui=e.screenX-Nn.screenX,$i=e.screenY-Nn.screenY):$i=Ui=0,Nn=e),Ui)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),va=_e(yi),Pd=q({},yi,{dataTransfer:0}),Ad=_e(Pd),Id=q({},sr,{relatedTarget:0}),Hi=_e(Id),Rd=q({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Od=_e(Rd),Dd=q({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fd=_e(Dd),Ud=q({},yn,{data:0}),ya=_e(Ud),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vd[e])?!!t[e]:!1}function xo(){return Bd}var Wd=q({},sr,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xo,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qd=_e(Wd),qd=q({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xa=_e(qd),Kd=q({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xo}),Zd=_e(Kd),Yd=q({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=_e(Yd),Gd=q({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jd=_e(Gd),ep=[9,13,27,32],wo=tt&&"CompositionEvent"in window,Rn=null;tt&&"documentMode"in document&&(Rn=document.documentMode);var tp=tt&&"TextEvent"in window&&!Rn,nu=tt&&(!wo||Rn&&8<Rn&&11>=Rn),wa=" ",ka=!1;function ru(e,t){switch(e){case"keyup":return ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function np(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(ka=!0,wa);case"textInput":return e=t.data,e===wa&&ka?null:e;default:return null}}function rp(e,t){if(Qt)return e==="compositionend"||!wo&&ru(e,t)?(e=tu(),Ir=vo=pt=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nu&&t.locale!=="ko"?null:t.data;default:return null}}var ip={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ip[e.type]:t==="textarea"}function lu(e,t,n,r){Rs(r),t=Xr(t,"onChange"),0<t.length&&(n=new yo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var On=null,Zn=null;function lp(e){mu(e,0)}function xi(e){var t=Zt(e);if(Es(t))return e}function op(e,t){if(e==="change")return t}var ou=!1;if(tt){var Vi;if(tt){var Bi="oninput"in document;if(!Bi){var ja=document.createElement("div");ja.setAttribute("oninput","return;"),Bi=typeof ja.oninput=="function"}Vi=Bi}else Vi=!1;ou=Vi&&(!document.documentMode||9<document.documentMode)}function ba(){On&&(On.detachEvent("onpropertychange",au),Zn=On=null)}function au(e){if(e.propertyName==="value"&&xi(Zn)){var t=[];lu(t,Zn,e,po(e)),Us(lp,t)}}function ap(e,t,n){e==="focusin"?(ba(),On=t,Zn=n,On.attachEvent("onpropertychange",au)):e==="focusout"&&ba()}function sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(Zn)}function up(e,t){if(e==="click")return xi(t)}function cp(e,t){if(e==="input"||e==="change")return xi(t)}function dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:dp;function Yn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ul.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function Na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=Na(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Na(n)}}function su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uu(){for(var e=window,t=Br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function ko(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pp(e){var t=uu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&su(n.ownerDocument.documentElement,n)){if(r!==null&&ko(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Ca(n,l);var a=Ca(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fp=tt&&"documentMode"in document&&11>=document.documentMode,qt=null,zl=null,Dn=null,El=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;El||qt==null||qt!==Br(r)||(r=qt,"selectionStart"in r&&ko(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dn&&Yn(Dn,r)||(Dn=r,r=Xr(zl,"onSelect"),0<r.length&&(t=new yo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qt)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},Wi={},cu={};tt&&(cu=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function wi(e){if(Wi[e])return Wi[e];if(!Kt[e])return e;var t=Kt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cu)return Wi[e]=t[n];return e}var du=wi("animationend"),pu=wi("animationiteration"),fu=wi("animationstart"),gu=wi("transitionend"),hu=new Map,za="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){hu.set(e,t),$t(t,[e])}for(var Qi=0;Qi<za.length;Qi++){var qi=za[Qi],gp=qi.toLowerCase(),hp=qi[0].toUpperCase()+qi.slice(1);bt(gp,"on"+hp)}bt(du,"onAnimationEnd");bt(pu,"onAnimationIteration");bt(fu,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(gu,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));function Ea(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gd(r,t,void 0,e),e.currentTarget=null}function mu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;Ea(i,s,d),l=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;Ea(i,s,d),l=u}}}if(Qr)throw e=bl,Qr=!1,bl=null,e}function $(e,t){var n=t[Al];n===void 0&&(n=t[Al]=new Set);var r=e+"__bubble";n.has(r)||(vu(t,e,2,!1),n.add(r))}function Ki(e,t,n){var r=0;t&&(r|=4),vu(n,e,r,t)}var Sr="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[Sr]){e[Sr]=!0,bs.forEach(function(n){n!=="selectionchange"&&(mp.has(n)||Ki(n,!1,e),Ki(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sr]||(t[Sr]=!0,Ki("selectionchange",!1,t))}}function vu(e,t,n,r){switch(eu(t)){case 1:var i=Td;break;case 4:i=Md;break;default:i=mo}n=i.bind(null,t,n,e),i=void 0,!jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Zi(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Mt(s),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}s=s.parentNode}}r=r.return}Us(function(){var d=l,m=po(n),h=[];e:{var g=hu.get(e);if(g!==void 0){var y=yo,x=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":y=Qd;break;case"focusin":x="focus",y=Hi;break;case"focusout":x="blur",y=Hi;break;case"beforeblur":case"afterblur":y=Hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=va;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Zd;break;case du:case pu:case fu:y=Od;break;case gu:y=Xd;break;case"scroll":y=Ld;break;case"wheel":y=Jd;break;case"copy":case"cut":case"paste":y=Fd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xa}var k=(t&4)!==0,A=!k&&e==="scroll",p=k?g!==null?g+"Capture":null:g;k=[];for(var c=d,f;c!==null;){f=c;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,p!==null&&(v=Wn(c,p),v!=null&&k.push(Gn(c,v,f)))),A)break;c=c.return}0<k.length&&(g=new y(g,x,null,n,m),h.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==kl&&(x=n.relatedTarget||n.fromElement)&&(Mt(x)||x[nt]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=d,x=x?Mt(x):null,x!==null&&(A=Ht(x),x!==A||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(k=va,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=xa,v="onPointerLeave",p="onPointerEnter",c="pointer"),A=y==null?g:Zt(y),f=x==null?g:Zt(x),g=new k(v,c+"leave",y,n,m),g.target=A,g.relatedTarget=f,v=null,Mt(m)===d&&(k=new k(p,c+"enter",x,n,m),k.target=f,k.relatedTarget=A,v=k),A=v,y&&x)t:{for(k=y,p=x,c=0,f=k;f;f=Vt(f))c++;for(f=0,v=p;v;v=Vt(v))f++;for(;0<c-f;)k=Vt(k),c--;for(;0<f-c;)p=Vt(p),f--;for(;c--;){if(k===p||p!==null&&k===p.alternate)break t;k=Vt(k),p=Vt(p)}k=null}else k=null;y!==null&&Ta(h,g,y,k,!1),x!==null&&A!==null&&Ta(h,A,x,k,!0)}}e:{if(g=d?Zt(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=op;else if(Sa(g))if(ou)S=cp;else{S=sp;var b=ap}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=up);if(S&&(S=S(e,d))){lu(h,S,n,m);break e}b&&b(e,g,d),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&ml(g,"number",g.value)}switch(b=d?Zt(d):window,e){case"focusin":(Sa(b)||b.contentEditable==="true")&&(qt=b,zl=d,Dn=null);break;case"focusout":Dn=zl=qt=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,_a(h,n,m);break;case"selectionchange":if(fp)break;case"keydown":case"keyup":_a(h,n,m)}var j;if(wo)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Qt?ru(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(nu&&n.locale!=="ko"&&(Qt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Qt&&(j=tu()):(pt=m,vo="value"in pt?pt.value:pt.textContent,Qt=!0)),b=Xr(d,N),0<b.length&&(N=new ya(N,e,null,n,m),h.push({event:N,listeners:b}),j?N.data=j:(j=iu(n),j!==null&&(N.data=j)))),(j=tp?np(e,n):rp(e,n))&&(d=Xr(d,"onBeforeInput"),0<d.length&&(m=new ya("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:d}),m.data=j))}mu(h,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Wn(e,n),l!=null&&r.unshift(Gn(e,l,i)),l=Wn(e,t),l!=null&&r.push(Gn(e,l,i))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ta(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,i?(u=Wn(n,l),u!=null&&a.unshift(Gn(n,u,s))):i||(u=Wn(n,l),u!=null&&a.push(Gn(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var vp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function Ma(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(yp,"")}function jr(e,t,n){if(t=Ma(t),Ma(e)!==t&&n)throw Error(w(425))}function Gr(){}var Tl=null,Ml=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,La=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof La<"u"?function(e){return La.resolve(null).then(e).catch(kp)}:Pl;function kp(e){setTimeout(function(){throw e})}function Yi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Kn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Kn(t)}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+xn,Jn="__reactProps$"+xn,nt="__reactContainer$"+xn,Al="__reactEvents$"+xn,Sp="__reactListeners$"+xn,jp="__reactHandles$"+xn;function Mt(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pa(e);e!==null;){if(n=e[Qe])return n;e=Pa(e)}return t}e=n,n=e.parentNode}return null}function ur(e){return e=e[Qe]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ki(e){return e[Jn]||null}var Il=[],Yt=-1;function Nt(e){return{current:e}}function H(e){0>Yt||(e.current=Il[Yt],Il[Yt]=null,Yt--)}function U(e,t){Yt++,Il[Yt]=e.current,e.current=t}var jt={},de=Nt(jt),ye=Nt(!1),Rt=jt;function cn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Jr(){H(ye),H(de)}function Aa(e,t,n){if(de.current!==jt)throw Error(w(168));U(de,t),U(ye,n)}function yu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,ad(e)||"Unknown",i));return q({},n,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Rt=de.current,U(de,e),U(ye,ye.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=yu(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,H(ye),H(de),U(de,e)):H(ye),U(ye,n)}var Xe=null,Si=!1,Xi=!1;function xu(e){Xe===null?Xe=[e]:Xe.push(e)}function bp(e){Si=!0,xu(e)}function Ct(){if(!Xi&&Xe!==null){Xi=!0;var e=0,t=F;try{var n=Xe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Xe=null,Si=!1}catch(i){throw Xe!==null&&(Xe=Xe.slice(e+1)),Bs(fo,Ct),i}finally{F=t,Xi=!1}}return null}var Xt=[],Gt=0,ti=null,ni=0,ze=[],Ee=0,Ot=null,Ge=1,Je="";function Et(e,t){Xt[Gt++]=ni,Xt[Gt++]=ti,ti=e,ni=t}function wu(e,t,n){ze[Ee++]=Ge,ze[Ee++]=Je,ze[Ee++]=Ot,Ot=e;var r=Ge;e=Je;var i=32-Fe(r)-1;r&=~(1<<i),n+=1;var l=32-Fe(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ge=1<<32-Fe(t)+i|n<<i|r,Je=l+e}else Ge=1<<l|n<<i|r,Je=e}function So(e){e.return!==null&&(Et(e,1),wu(e,1,0))}function jo(e){for(;e===ti;)ti=Xt[--Gt],Xt[Gt]=null,ni=Xt[--Gt],Xt[Gt]=null;for(;e===Ot;)Ot=ze[--Ee],ze[Ee]=null,Je=ze[--Ee],ze[Ee]=null,Ge=ze[--Ee],ze[Ee]=null}var be=null,je=null,B=!1,De=null;function ku(e,t){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,je=vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ge,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,be=e,je=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(B){var t=je;if(t){var n=t;if(!Ra(e,t)){if(Rl(e))throw Error(w(418));t=vt(n.nextSibling);var r=be;t&&Ra(e,t)?ku(r,n):(e.flags=e.flags&-4097|2,B=!1,be=e)}}else{if(Rl(e))throw Error(w(418));e.flags=e.flags&-4097|2,B=!1,be=e}}}function Oa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function br(e){if(e!==be)return!1;if(!B)return Oa(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=je)){if(Rl(e))throw Su(),Error(w(418));for(;t;)ku(e,t),t=vt(t.nextSibling)}if(Oa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){je=vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}je=null}}else je=be?vt(e.stateNode.nextSibling):null;return!0}function Su(){for(var e=je;e;)e=vt(e.nextSibling)}function dn(){je=be=null,B=!1}function bo(e){De===null?De=[e]:De.push(e)}var Np=lt.ReactCurrentBatchConfig;function Cn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var s=i.refs;a===null?delete s[l]:s[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Nr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Da(e){var t=e._init;return t(e._payload)}function ju(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=kt(p,c),p.index=0,p.sibling=null,p}function l(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,v){return c===null||c.tag!==6?(c=il(f,p.mode,v),c.return=p,c):(c=i(c,f),c.return=p,c)}function u(p,c,f,v){var S=f.type;return S===Wt?m(p,c,f.props.children,v,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&Da(S)===c.type)?(v=i(c,f.props),v.ref=Cn(p,c,f),v.return=p,v):(v=Vr(f.type,f.key,f.props,null,p.mode,v),v.ref=Cn(p,c,f),v.return=p,v)}function d(p,c,f,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ll(f,p.mode,v),c.return=p,c):(c=i(c,f.children||[]),c.return=p,c)}function m(p,c,f,v,S){return c===null||c.tag!==7?(c=It(f,p.mode,v,S),c.return=p,c):(c=i(c,f),c.return=p,c)}function h(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=il(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return f=Vr(c.type,c.key,c.props,null,p.mode,f),f.ref=Cn(p,null,c),f.return=p,f;case Bt:return c=ll(c,p.mode,f),c.return=p,c;case st:var v=c._init;return h(p,v(c._payload),f)}if(Mn(c)||kn(c))return c=It(c,p.mode,f,null),c.return=p,c;Nr(p,c)}return null}function g(p,c,f,v){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:s(p,c,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:return f.key===S?u(p,c,f,v):null;case Bt:return f.key===S?d(p,c,f,v):null;case st:return S=f._init,g(p,c,S(f._payload),v)}if(Mn(f)||kn(f))return S!==null?null:m(p,c,f,v,null);Nr(p,f)}return null}function y(p,c,f,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(f)||null,s(c,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case gr:return p=p.get(v.key===null?f:v.key)||null,u(c,p,v,S);case Bt:return p=p.get(v.key===null?f:v.key)||null,d(c,p,v,S);case st:var b=v._init;return y(p,c,f,b(v._payload),S)}if(Mn(v)||kn(v))return p=p.get(f)||null,m(c,p,v,S,null);Nr(c,v)}return null}function x(p,c,f,v){for(var S=null,b=null,j=c,N=c=0,O=null;j!==null&&N<f.length;N++){j.index>N?(O=j,j=null):O=j.sibling;var T=g(p,j,f[N],v);if(T===null){j===null&&(j=O);break}e&&j&&T.alternate===null&&t(p,j),c=l(T,c,N),b===null?S=T:b.sibling=T,b=T,j=O}if(N===f.length)return n(p,j),B&&Et(p,N),S;if(j===null){for(;N<f.length;N++)j=h(p,f[N],v),j!==null&&(c=l(j,c,N),b===null?S=j:b.sibling=j,b=j);return B&&Et(p,N),S}for(j=r(p,j);N<f.length;N++)O=y(j,p,N,f[N],v),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?N:O.key),c=l(O,c,N),b===null?S=O:b.sibling=O,b=O);return e&&j.forEach(function(G){return t(p,G)}),B&&Et(p,N),S}function k(p,c,f,v){var S=kn(f);if(typeof S!="function")throw Error(w(150));if(f=S.call(f),f==null)throw Error(w(151));for(var b=S=null,j=c,N=c=0,O=null,T=f.next();j!==null&&!T.done;N++,T=f.next()){j.index>N?(O=j,j=null):O=j.sibling;var G=g(p,j,T.value,v);if(G===null){j===null&&(j=O);break}e&&j&&G.alternate===null&&t(p,j),c=l(G,c,N),b===null?S=G:b.sibling=G,b=G,j=O}if(T.done)return n(p,j),B&&Et(p,N),S;if(j===null){for(;!T.done;N++,T=f.next())T=h(p,T.value,v),T!==null&&(c=l(T,c,N),b===null?S=T:b.sibling=T,b=T);return B&&Et(p,N),S}for(j=r(p,j);!T.done;N++,T=f.next())T=y(j,p,N,T.value,v),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?N:T.key),c=l(T,c,N),b===null?S=T:b.sibling=T,b=T);return e&&j.forEach(function(I){return t(p,I)}),B&&Et(p,N),S}function A(p,c,f,v){if(typeof f=="object"&&f!==null&&f.type===Wt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case gr:e:{for(var S=f.key,b=c;b!==null;){if(b.key===S){if(S=f.type,S===Wt){if(b.tag===7){n(p,b.sibling),c=i(b,f.props.children),c.return=p,p=c;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===st&&Da(S)===b.type){n(p,b.sibling),c=i(b,f.props),c.ref=Cn(p,b,f),c.return=p,p=c;break e}n(p,b);break}else t(p,b);b=b.sibling}f.type===Wt?(c=It(f.props.children,p.mode,v,f.key),c.return=p,p=c):(v=Vr(f.type,f.key,f.props,null,p.mode,v),v.ref=Cn(p,c,f),v.return=p,p=v)}return a(p);case Bt:e:{for(b=f.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=i(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=ll(f,p.mode,v),c.return=p,p=c}return a(p);case st:return b=f._init,A(p,c,b(f._payload),v)}if(Mn(f))return x(p,c,f,v);if(kn(f))return k(p,c,f,v);Nr(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,f),c.return=p,p=c):(n(p,c),c=il(f,p.mode,v),c.return=p,p=c),a(p)):n(p,c)}return A}var pn=ju(!0),bu=ju(!1),ri=Nt(null),ii=null,Jt=null,No=null;function Co(){No=Jt=ii=null}function _o(e){var t=ri.current;H(ri),e._currentValue=t}function Dl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){ii=e,No=Jt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},Jt===null){if(ii===null)throw Error(w(308));Jt=e,ii.dependencies={lanes:0,firstContext:e}}else Jt=Jt.next=e;return t}var Lt=null;function zo(e){Lt===null?Lt=[e]:Lt.push(e)}function Nu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,zo(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ut=!1;function Eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,zo(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,go(e,n)}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var i=e.updateQueue;ut=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?l=d:a.next=d,a=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==a&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(l!==null){var h=i.baseState;a=0,m=d=u=null,s=l;do{var g=s.lane,y=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,k=s;switch(g=t,y=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){h=x.call(y,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,g=typeof x=="function"?x.call(y,h,g):x,g==null)break e;h=q({},h,g);break e;case 2:ut=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=y,u=h):m=m.next=y,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(m===null&&(u=h),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Ft|=a,e.lanes=a,e.memoizedState=h}}function Ua(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var cr={},Ke=Nt(cr),er=Nt(cr),tr=Nt(cr);function Pt(e){if(e===cr)throw Error(w(174));return e}function To(e,t){switch(U(tr,t),U(er,e),U(Ke,cr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yl(t,e)}H(Ke),U(Ke,t)}function fn(){H(Ke),H(er),H(tr)}function _u(e){Pt(tr.current);var t=Pt(Ke.current),n=yl(t,e.type);t!==n&&(U(er,e),U(Ke,n))}function Mo(e){er.current===e&&(H(Ke),H(er))}var W=Nt(0);function oi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Lo(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var Dr=lt.ReactCurrentDispatcher,Ji=lt.ReactCurrentBatchConfig,Dt=0,Q=null,ee=null,ne=null,ai=!1,Fn=!1,nr=0,Cp=0;function se(){throw Error(w(321))}function Po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Ao(e,t,n,r,i,l){if(Dt=l,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dr.current=e===null||e.memoizedState===null?Tp:Mp,e=n(r,i),Fn){l=0;do{if(Fn=!1,nr=0,25<=l)throw Error(w(301));l+=1,ne=ee=null,t.updateQueue=null,Dr.current=Lp,e=n(r,i)}while(Fn)}if(Dr.current=si,t=ee!==null&&ee.next!==null,Dt=0,ne=ee=Q=null,ai=!1,t)throw Error(w(300));return e}function Io(){var e=nr!==0;return nr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Q.memoizedState=ne=e:ne=ne.next=e,ne}function Pe(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?Q.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(w(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?Q.memoizedState=ne=e:ne=ne.next=e}return ne}function rr(e,t){return typeof t=="function"?t(e):t}function el(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=ee,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=a=null,u=null,d=l;do{var m=d.lane;if((Dt&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,a=r):u=u.next=h,Q.lanes|=m,Ft|=m}d=d.next}while(d!==null&&d!==l);u===null?a=r:u.next=s,$e(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Q.lanes|=l,Ft|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);$e(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function zu(){}function Eu(e,t){var n=Q,r=Pe(),i=t(),l=!$e(r.memoizedState,i);if(l&&(r.memoizedState=i,ve=!0),r=r.queue,Ro(Lu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,ir(9,Mu.bind(null,n,r,i,t),void 0,null),re===null)throw Error(w(349));Dt&30||Tu(n,t,i)}return i}function Tu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mu(e,t,n,r){t.value=n,t.getSnapshot=r,Pu(t)&&Au(e)}function Lu(e,t,n){return n(function(){Pu(t)&&Au(e)})}function Pu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Au(e){var t=rt(e,1);t!==null&&Ue(t,e,1,-1)}function $a(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ep.bind(null,Q,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Iu(){return Pe().memoizedState}function Fr(e,t,n,r){var i=We();Q.flags|=e,i.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function ji(e,t,n,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(ee!==null){var a=ee.memoizedState;if(l=a.destroy,r!==null&&Po(r,a.deps)){i.memoizedState=ir(t,n,l,r);return}}Q.flags|=e,i.memoizedState=ir(1|t,n,l,r)}function Ha(e,t){return Fr(8390656,8,e,t)}function Ro(e,t){return ji(2048,8,e,t)}function Ru(e,t){return ji(4,2,e,t)}function Ou(e,t){return ji(4,4,e,t)}function Du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fu(e,t,n){return n=n!=null?n.concat([e]):null,ji(4,4,Du.bind(null,t,e),n)}function Oo(){}function Uu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Po(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $u(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Po(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hu(e,t,n){return Dt&21?($e(n,t)||(n=qs(),Q.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n)}function _p(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),t()}finally{F=n,Ji.transition=r}}function Vu(){return Pe().memoizedState}function zp(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e))Wu(t,n);else if(n=Nu(e,t,n,r),n!==null){var i=fe();Ue(n,e,r,i),Qu(n,t,r)}}function Ep(e,t,n){var r=wt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Wu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,s=l(a,n);if(i.hasEagerState=!0,i.eagerState=s,$e(s,a)){var u=t.interleaved;u===null?(i.next=i,zo(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Nu(e,t,i,r),n!==null&&(i=fe(),Ue(n,e,r,i),Qu(n,t,r))}}function Bu(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Wu(e,t){Fn=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,go(e,n)}}var si={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Tp={readContext:Le,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,Du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=zp.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:$a,useDebugValue:Oo,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=$a(!1),t=e[0];return e=_p.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=We();if(B){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),re===null)throw Error(w(349));Dt&30||Tu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ha(Lu.bind(null,r,l,e),[e]),r.flags|=2048,ir(9,Mu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=We(),t=re.identifierPrefix;if(B){var n=Je,r=Ge;n=(r&~(1<<32-Fe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mp={readContext:Le,useCallback:Uu,useContext:Le,useEffect:Ro,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Ou,useMemo:$u,useReducer:el,useRef:Iu,useState:function(){return el(rr)},useDebugValue:Oo,useDeferredValue:function(e){var t=Pe();return Hu(t,ee.memoizedState,e)},useTransition:function(){var e=el(rr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:Eu,useId:Vu,unstable_isNewReconciler:!1},Lp={readContext:Le,useCallback:Uu,useContext:Le,useEffect:Ro,useImperativeHandle:Fu,useInsertionEffect:Ru,useLayoutEffect:Ou,useMemo:$u,useReducer:tl,useRef:Iu,useState:function(){return tl(rr)},useDebugValue:Oo,useDeferredValue:function(e){var t=Pe();return ee===null?t.memoizedState=e:Hu(t,ee.memoizedState,e)},useTransition:function(){var e=tl(rr)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:zu,useSyncExternalStore:Eu,useId:Vu,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var bi={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fe(),i=wt(e),l=et(r,i);l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,i),t!==null&&(Ue(t,e,i,r),Or(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fe(),i=wt(e),l=et(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,i),t!==null&&(Ue(t,e,i,r),Or(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fe(),r=wt(e),i=et(n,r);i.tag=2,t!=null&&(i.callback=t),t=yt(e,i,r),t!==null&&(Ue(t,e,r,n),Or(t,e,r))}};function Va(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Yn(n,r)||!Yn(i,l):!0}function qu(e,t,n){var r=!1,i=jt,l=t.contextType;return typeof l=="object"&&l!==null?l=Le(l):(i=xe(t)?Rt:de.current,r=t.contextTypes,l=(r=r!=null)?cn(e,i):jt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=bi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ba(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bi.enqueueReplaceState(t,t.state,null)}function Ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Eo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Le(l):(l=xe(t)?Rt:de.current,i.context=cn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Fl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&bi.enqueueReplaceState(i,i.state,null),li(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=od(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pp=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,Xl=r),$l(e,t)},n}function Zu(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$l(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(xt===null?xt=new Set([this]):xt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wa(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pp;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=qp.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qa(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var Ap=lt.ReactCurrentOwner,ve=!1;function pe(e,t,n,r){t.child=e===null?bu(t,null,n,r):pn(t,e.child,n,r)}function Ka(e,t,n,r,i){n=n.render;var l=t.ref;return an(t,i),r=Ao(e,t,n,r,l,i),n=Io(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(B&&n&&So(t),t.flags|=1,pe(e,t,r,i),t.child)}function Za(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Wo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Yu(e,t,l,r,i)):(e=Vr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Yn,n(a,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=kt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Yu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Yn(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,it(e,t,i)}return Hl(e,t,n,r,i)}function Xu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(tn,Se),Se|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(tn,Se),Se|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(tn,Se),Se|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(tn,Se),Se|=r;return pe(e,t,i,n),t.child}function Gu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hl(e,t,n,r,i){var l=xe(n)?Rt:de.current;return l=cn(t,l),an(t,i),n=Ao(e,t,n,r,l,i),r=Io(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(B&&r&&So(t),t.flags|=1,pe(e,t,n,i),t.child)}function Ya(e,t,n,r,i){if(xe(n)){var l=!0;ei(t)}else l=!1;if(an(t,i),t.stateNode===null)Ur(e,t),qu(t,n,r),Ul(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=Le(d):(d=xe(n)?Rt:de.current,d=cn(t,d));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Ba(t,a,r,d),ut=!1;var g=t.memoizedState;a.state=g,li(t,r,a,i),u=t.memoizedState,s!==r||g!==u||ye.current||ut?(typeof m=="function"&&(Fl(t,n,m,r),u=t.memoizedState),(s=ut||Va(t,n,s,r,g,u,d))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Cu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Re(t.type,s),a.props=d,h=t.pendingProps,g=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=xe(n)?Rt:de.current,u=cn(t,u));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==h||g!==u)&&Ba(t,a,r,u),ut=!1,g=t.memoizedState,a.state=g,li(t,r,a,i);var x=t.memoizedState;s!==h||g!==x||ye.current||ut?(typeof y=="function"&&(Fl(t,n,y,r),x=t.memoizedState),(d=ut||Va(t,n,d,r,g,x,u)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),a.props=r,a.state=x,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Vl(e,t,n,r,l,i)}function Vl(e,t,n,r,i,l){Gu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ia(t,n,!1),it(e,t,l);r=t.stateNode,Ap.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=pn(t,e.child,null,l),t.child=pn(t,null,s,l)):pe(e,t,s,l),t.memoizedState=r.state,i&&Ia(t,n,!0),t.child}function Ju(e){var t=e.stateNode;t.pendingContext?Aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Aa(e,t.context,!1),To(e,t.containerInfo)}function Xa(e,t,n,r,i){return dn(),bo(i),t.flags|=256,pe(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ec(e,t,n){var r=t.pendingProps,i=W.current,l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(W,i&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=_i(a,r,0,null),e=It(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Wl(n),t.memoizedState=Bl,e):Do(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Ip(e,t,a,r,s,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=kt(s,l):(l=It(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Wl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Bl,r}return l=e.child,e=l.sibling,r=kt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Do(e,t){return t=_i({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Cr(e,t,n,r){return r!==null&&bo(r),pn(t,e.child,null,n),e=Do(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ip(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=nl(Error(w(422))),Cr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=_i({mode:"visible",children:r.children},i,0,null),l=It(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&pn(t,e.child,null,a),t.child.memoizedState=Wl(a),t.memoizedState=Bl,l);if(!(t.mode&1))return Cr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(w(419)),r=nl(l,r,void 0),Cr(e,t,a,r)}if(s=(a&e.childLanes)!==0,ve||s){if(r=re,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,rt(e,i),Ue(r,e,i,-1))}return Bo(),r=nl(Error(w(421))),Cr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kp.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,je=vt(i.nextSibling),be=t,B=!0,De=null,e!==null&&(ze[Ee++]=Ge,ze[Ee++]=Je,ze[Ee++]=Ot,Ge=e.id,Je=e.overflow,Ot=t),t=Do(t,r.children),t.flags|=4096,t)}function Ga(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Dl(e.return,t,n)}function rl(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function tc(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(pe(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ga(e,n,t);else if(e.tag===19)Ga(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(W,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&oi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rl(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&oi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rl(t,!0,n,null,l);break;case"together":rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Rp(e,t,n){switch(t.tag){case 3:Ju(t),dn();break;case 5:_u(t);break;case 1:xe(t.type)&&ei(t);break;case 4:To(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(ri,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?ec(e,t,n):(U(W,W.current&1),e=it(e,t,n),e!==null?e.sibling:null);U(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Xu(e,t,n)}return it(e,t,n)}var nc,Ql,rc,ic;nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ql=function(){};rc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pt(Ke.current);var l=null;switch(n){case"input":i=gl(e,i),r=gl(e,r),l=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),l=[];break;case"textarea":i=vl(e,i),r=vl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gr)}xl(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(s=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&$("scroll",e),l||s===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function _n(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Op(e,t,n){var r=t.pendingProps;switch(jo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return xe(t.type)&&Jr(),ue(t),null;case 3:return r=t.stateNode,fn(),H(ye),H(de),Lo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(eo(De),De=null))),Ql(e,t),ue(t),null;case 5:Mo(t);var i=Pt(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)rc(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return ue(t),null}if(e=Pt(Ke.current),br(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Qe]=t,r[Jn]=l,e=(t.mode&1)!==0,n){case"dialog":$("cancel",r),$("close",r);break;case"iframe":case"object":case"embed":$("load",r);break;case"video":case"audio":for(i=0;i<Pn.length;i++)$(Pn[i],r);break;case"source":$("error",r);break;case"img":case"image":case"link":$("error",r),$("load",r);break;case"details":$("toggle",r);break;case"input":aa(r,l),$("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},$("invalid",r);break;case"textarea":ua(r,l),$("invalid",r)}xl(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&jr(r.textContent,s,e),i=["children",""+s]):Vn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&$("scroll",r)}switch(n){case"input":hr(r),sa(r,l,!0);break;case"textarea":hr(r),ca(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Gr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ls(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Qe]=t,e[Jn]=r,nc(e,t,!1,!1),t.stateNode=e;e:{switch(a=wl(n,r),n){case"dialog":$("cancel",e),$("close",e),i=r;break;case"iframe":case"object":case"embed":$("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pn.length;i++)$(Pn[i],e);i=r;break;case"source":$("error",e),i=r;break;case"img":case"image":case"link":$("error",e),$("load",e),i=r;break;case"details":$("toggle",e),i=r;break;case"input":aa(e,r),i=gl(e,r),$("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),$("invalid",e);break;case"textarea":ua(e,r),i=vl(e,r),$("invalid",e);break;default:i=r}xl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="style"?Is(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ps(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bn(e,u):typeof u=="number"&&Bn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Vn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&$("scroll",e):u!=null&&ao(e,l,u,a))}switch(n){case"input":hr(e),sa(e,r,!1);break;case"textarea":hr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+St(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nn(e,!!r.multiple,l,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Pt(tr.current),Pt(Ke.current),br(t)){if(r=t.stateNode,n=t.memoizedProps,r[Qe]=t,(l=r.nodeValue!==n)&&(e=be,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qe]=t,t.stateNode=r}return ue(t),null;case 13:if(H(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&je!==null&&t.mode&1&&!(t.flags&128))Su(),dn(),t.flags|=98560,l=!1;else if(l=br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Qe]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),l=!1}else De!==null&&(eo(De),De=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?te===0&&(te=3):Bo())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return fn(),Ql(e,t),e===null&&Xn(t.stateNode.containerInfo),ue(t),null;case 10:return _o(t.type._context),ue(t),null;case 17:return xe(t.type)&&Jr(),ue(t),null;case 19:if(H(W),l=t.memoizedState,l===null)return ue(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)_n(l,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=oi(e),a!==null){for(t.flags|=128,_n(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&X()>hn&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304)}else{if(!r)if(e=oi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_n(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!B)return ue(t),null}else 2*X()-l.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,_n(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=X(),t.sibling=null,n=W.current,U(W,r?n&1|2:n&1),t):(ue(t),null);case 22:case 23:return Vo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Se&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Dp(e,t){switch(jo(t),t.tag){case 1:return xe(t.type)&&Jr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(),H(ye),H(de),Lo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mo(t),null;case 13:if(H(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(W),null;case 4:return fn(),null;case 10:return _o(t.type._context),null;case 22:case 23:return Vo(),null;case 24:return null;default:return null}}var _r=!1,ce=!1,Fp=typeof WeakSet=="function"?WeakSet:Set,_=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function ql(e,t,n){try{n()}catch(r){K(e,t,r)}}var Ja=!1;function Up(e,t){if(Tl=Zr,e=uu(),ko(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,m=0,h=e,g=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(s=a+i),h!==l||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++d===i&&(s=a),g===l&&++m===r&&(u=a),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},Zr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,A=x.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Re(t.type,k),A);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Ja,Ja=!1,x}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ql(t,n,l)}i=i.next}while(i!==r)}}function Ni(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function lc(e){var t=e.alternate;t!==null&&(e.alternate=null,lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Qe],delete t[Jn],delete t[Al],delete t[Sp],delete t[jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oc(e){return e.tag===5||e.tag===3||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gr));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var le=null,Oe=!1;function at(e,t,n){for(n=n.child;n!==null;)ac(e,t,n),n=n.sibling}function ac(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(vi,n)}catch{}switch(n.tag){case 5:ce||en(n,t);case 6:var r=le,i=Oe;le=null,at(e,t,n),le=r,Oe=i,le!==null&&(Oe?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Oe?(e=le,n=n.stateNode,e.nodeType===8?Yi(e.parentNode,n):e.nodeType===1&&Yi(e,n),Kn(e)):Yi(le,n.stateNode));break;case 4:r=le,i=Oe,le=n.stateNode.containerInfo,Oe=!0,at(e,t,n),le=r,Oe=i;break;case 0:case 11:case 14:case 15:if(!ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&ql(n,t,a),i=i.next}while(i!==r)}at(e,t,n);break;case 1:if(!ce&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){K(n,t,s)}at(e,t,n);break;case 21:at(e,t,n);break;case 22:n.mode&1?(ce=(r=ce)||n.memoizedState!==null,at(e,t,n),ce=r):at(e,t,n);break;default:at(e,t,n)}}function ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fp),t.forEach(function(r){var i=Zp.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ie(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Oe=!1;break e;case 3:le=s.stateNode.containerInfo,Oe=!0;break e;case 4:le=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(le===null)throw Error(w(160));ac(l,a,i),le=null,Oe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){K(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sc(t,e),t=t.sibling}function sc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Be(e),r&4){try{Un(3,e,e.return),Ni(3,e)}catch(k){K(e,e.return,k)}try{Un(5,e,e.return)}catch(k){K(e,e.return,k)}}break;case 1:Ie(t,e),Be(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Ie(t,e),Be(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{Bn(i,"")}catch(k){K(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ts(i,l),wl(s,a);var d=wl(s,l);for(a=0;a<u.length;a+=2){var m=u[a],h=u[a+1];m==="style"?Is(i,h):m==="dangerouslySetInnerHTML"?Ps(i,h):m==="children"?Bn(i,h):ao(i,m,h,d)}switch(s){case"input":hl(i,l);break;case"textarea":Ms(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?nn(i,!!l.multiple,y,!1):g!==!!l.multiple&&(l.defaultValue!=null?nn(i,!!l.multiple,l.defaultValue,!0):nn(i,!!l.multiple,l.multiple?[]:"",!1))}i[Jn]=l}catch(k){K(e,e.return,k)}}break;case 6:if(Ie(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){K(e,e.return,k)}}break;case 3:if(Ie(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kn(t.containerInfo)}catch(k){K(e,e.return,k)}break;case 4:Ie(t,e),Be(e);break;case 13:Ie(t,e),Be(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||($o=X())),r&4&&ts(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ce=(d=ce)||m,Ie(t,e),ce=d):Ie(t,e),Be(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(_=e,m=e.child;m!==null;){for(h=_=m;_!==null;){switch(g=_,y=g.child,g.tag){case 0:case 11:case 14:case 15:Un(4,g,g.return);break;case 1:en(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){K(r,n,k)}}break;case 5:en(g,g.return);break;case 22:if(g.memoizedState!==null){rs(h);continue}}y!==null?(y.return=g,_=y):rs(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=As("display",a))}catch(k){K(e,e.return,k)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){K(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ie(t,e),Be(e),r&4&&ts(e);break;case 21:break;default:Ie(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Bn(i,""),r.flags&=-33);var l=es(e);Yl(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,s=es(e);Zl(e,s,a);break;default:throw Error(w(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){_=e,uc(e)}function uc(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||_r;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ce;s=_r;var d=ce;if(_r=a,(ce=u)&&!d)for(_=i;_!==null;)a=_,u=a.child,a.tag===22&&a.memoizedState!==null?is(i):u!==null?(u.return=a,_=u):is(i);for(;l!==null;)_=l,uc(l),l=l.sibling;_=i,_r=s,ce=d}ns(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):ns(e)}}function ns(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||Ni(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ce)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ua(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ua(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Kn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ce||t.flags&512&&Kl(t)}catch(g){K(t,t.return,g)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function rs(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function is(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ni(4,t)}catch(u){K(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){K(t,i,u)}}var l=t.return;try{Kl(t)}catch(u){K(t,l,u)}break;case 5:var a=t.return;try{Kl(t)}catch(u){K(t,a,u)}}}catch(u){K(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Hp=Math.ceil,ui=lt.ReactCurrentDispatcher,Fo=lt.ReactCurrentOwner,Me=lt.ReactCurrentBatchConfig,D=0,re=null,J=null,oe=0,Se=0,tn=Nt(0),te=0,lr=null,Ft=0,Ci=0,Uo=0,$n=null,me=null,$o=0,hn=1/0,Ye=null,ci=!1,Xl=null,xt=null,zr=!1,ft=null,di=0,Hn=0,Gl=null,$r=-1,Hr=0;function fe(){return D&6?X():$r!==-1?$r:$r=X()}function wt(e){return e.mode&1?D&2&&oe!==0?oe&-oe:Np.transition!==null?(Hr===0&&(Hr=qs()),Hr):(e=F,e!==0||(e=window.event,e=e===void 0?16:eu(e.type)),e):1}function Ue(e,t,n,r){if(50<Hn)throw Hn=0,Gl=null,Error(w(185));ar(e,n,r),(!(D&2)||e!==re)&&(e===re&&(!(D&2)&&(Ci|=n),te===4&&dt(e,oe)),we(e,r),n===1&&D===0&&!(t.mode&1)&&(hn=X()+500,Si&&Ct()))}function we(e,t){var n=e.callbackNode;Nd(e,t);var r=Kr(e,e===re?oe:0);if(r===0)n!==null&&fa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fa(n),t===1)e.tag===0?bp(ls.bind(null,e)):xu(ls.bind(null,e)),wp(function(){!(D&6)&&Ct()}),n=null;else{switch(Ks(r)){case 1:n=fo;break;case 4:n=Ws;break;case 16:n=qr;break;case 536870912:n=Qs;break;default:n=qr}n=vc(n,cc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function cc(e,t){if($r=-1,Hr=0,D&6)throw Error(w(327));var n=e.callbackNode;if(sn()&&e.callbackNode!==n)return null;var r=Kr(e,e===re?oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pi(e,r);else{t=r;var i=D;D|=2;var l=pc();(re!==e||oe!==t)&&(Ye=null,hn=X()+500,At(e,t));do try{Wp();break}catch(s){dc(e,s)}while(!0);Co(),ui.current=l,D=i,J!==null?t=0:(re=null,oe=0,t=te)}if(t!==0){if(t===2&&(i=Nl(e),i!==0&&(r=i,t=Jl(e,i))),t===1)throw n=lr,At(e,0),dt(e,r),we(e,X()),n;if(t===6)dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Vp(i)&&(t=pi(e,r),t===2&&(l=Nl(e),l!==0&&(r=l,t=Jl(e,l))),t===1))throw n=lr,At(e,0),dt(e,r),we(e,X()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Tt(e,me,Ye);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=$o+500-X(),10<t)){if(Kr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pl(Tt.bind(null,e,me,Ye),t);break}Tt(e,me,Ye);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Fe(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=Pl(Tt.bind(null,e,me,Ye),r);break}Tt(e,me,Ye);break;case 5:Tt(e,me,Ye);break;default:throw Error(w(329))}}}return we(e,X()),e.callbackNode===n?cc.bind(null,e):null}function Jl(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=pi(e,t),e!==2&&(t=me,me=n,t!==null&&eo(t)),e}function eo(e){me===null?me=e:me.push.apply(me,e)}function Vp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!$e(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Uo,t&=~Ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Fe(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if(D&6)throw Error(w(327));sn();var t=Kr(e,0);if(!(t&1))return we(e,X()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=Nl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=lr,At(e,0),dt(e,t),we(e,X()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tt(e,me,Ye),we(e,X()),null}function Ho(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hn=X()+500,Si&&Ct())}}function Ut(e){ft!==null&&ft.tag===0&&!(D&6)&&sn();var t=D;D|=1;var n=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=n,D=t,!(D&6)&&Ct()}}function Vo(){Se=tn.current,H(tn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xp(n)),J!==null)for(n=J.return;n!==null;){var r=n;switch(jo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jr();break;case 3:fn(),H(ye),H(de),Lo();break;case 5:Mo(r);break;case 4:fn();break;case 13:H(W);break;case 19:H(W);break;case 10:_o(r.type._context);break;case 22:case 23:Vo()}n=n.return}if(re=e,J=e=kt(e.current,null),oe=Se=t,te=0,lr=null,Uo=Ci=Ft=0,me=$n=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}Lt=null}return e}function dc(e,t){do{var n=J;try{if(Co(),Dr.current=si,ai){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ai=!1}if(Dt=0,ne=ee=Q=null,Fn=!1,nr=0,Fo.current=null,n===null||n.return===null){te=1,lr=t,J=null;break}e:{var l=e,a=n.return,s=n,u=t;if(t=oe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Qa(a);if(y!==null){y.flags&=-257,qa(y,a,s,l,t),y.mode&1&&Wa(l,d,t),t=y,u=d;var x=t.updateQueue;if(x===null){var k=new Set;k.add(u),t.updateQueue=k}else x.add(u);break e}else{if(!(t&1)){Wa(l,d,t),Bo();break e}u=Error(w(426))}}else if(B&&s.mode&1){var A=Qa(a);if(A!==null){!(A.flags&65536)&&(A.flags|=256),qa(A,a,s,l,t),bo(gn(u,s));break e}}l=u=gn(u,s),te!==4&&(te=2),$n===null?$n=[l]:$n.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Ku(l,u,t);Fa(l,p);break e;case 1:s=u;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xt===null||!xt.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Zu(l,s,t);Fa(l,v);break e}}l=l.return}while(l!==null)}gc(n)}catch(S){t=S,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function pc(){var e=ui.current;return ui.current=si,e===null?si:e}function Bo(){(te===0||te===3||te===2)&&(te=4),re===null||!(Ft&268435455)&&!(Ci&268435455)||dt(re,oe)}function pi(e,t){var n=D;D|=2;var r=pc();(re!==e||oe!==t)&&(Ye=null,At(e,t));do try{Bp();break}catch(i){dc(e,i)}while(!0);if(Co(),D=n,ui.current=r,J!==null)throw Error(w(261));return re=null,oe=0,te}function Bp(){for(;J!==null;)fc(J)}function Wp(){for(;J!==null&&!md();)fc(J)}function fc(e){var t=mc(e.alternate,e,Se);e.memoizedProps=e.pendingProps,t===null?gc(e):J=t,Fo.current=null}function gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dp(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,J=null;return}}else if(n=Op(n,t,Se),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);te===0&&(te=5)}function Tt(e,t,n){var r=F,i=Me.transition;try{Me.transition=null,F=1,Qp(e,t,n,r)}finally{Me.transition=i,F=r}return null}function Qp(e,t,n,r){do sn();while(ft!==null);if(D&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Cd(e,l),e===re&&(J=re=null,oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,vc(qr,function(){return sn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Me.transition,Me.transition=null;var a=F;F=1;var s=D;D|=4,Fo.current=null,Up(e,n),sc(n,e),pp(Ml),Zr=!!Tl,Ml=Tl=null,e.current=n,$p(n),vd(),D=s,F=a,Me.transition=l}else e.current=n;if(zr&&(zr=!1,ft=e,di=i),l=e.pendingLanes,l===0&&(xt=null),wd(n.stateNode),we(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ci)throw ci=!1,e=Xl,Xl=null,e;return di&1&&e.tag!==0&&sn(),l=e.pendingLanes,l&1?e===Gl?Hn++:(Hn=0,Gl=e):Hn=0,Ct(),null}function sn(){if(ft!==null){var e=Ks(di),t=Me.transition,n=F;try{if(Me.transition=null,F=16>e?16:e,ft===null)var r=!1;else{if(e=ft,ft=null,di=0,D&6)throw Error(w(331));var i=D;for(D|=4,_=e.current;_!==null;){var l=_,a=l.child;if(_.flags&16){var s=l.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(_=d;_!==null;){var m=_;switch(m.tag){case 0:case 11:case 15:Un(8,m,l)}var h=m.child;if(h!==null)h.return=m,_=h;else for(;_!==null;){m=_;var g=m.sibling,y=m.return;if(lc(m),m===d){_=null;break}if(g!==null){g.return=y,_=g;break}_=y}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}_=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,_=a;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Un(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,_=p;break e}_=l.return}}var c=e.current;for(_=c;_!==null;){a=_;var f=a.child;if(a.subtreeFlags&2064&&f!==null)f.return=a,_=f;else e:for(a=c;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ni(9,s)}}catch(S){K(s,s.return,S)}if(s===a){_=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,_=v;break e}_=s.return}}if(D=i,Ct(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(vi,e)}catch{}r=!0}return r}finally{F=n,Me.transition=t}}return!1}function os(e,t,n){t=gn(n,t),t=Ku(e,t,1),e=yt(e,t,1),t=fe(),e!==null&&(ar(e,1,t),we(e,t))}function K(e,t,n){if(e.tag===3)os(e,e,n);else for(;t!==null;){if(t.tag===3){os(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xt===null||!xt.has(r))){e=gn(n,e),e=Zu(t,e,1),t=yt(t,e,1),e=fe(),t!==null&&(ar(t,1,e),we(t,e));break}}t=t.return}}function qp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(oe&n)===n&&(te===4||te===3&&(oe&130023424)===oe&&500>X()-$o?At(e,0):Uo|=n),we(e,t)}function hc(e,t){t===0&&(e.mode&1?(t=yr,yr<<=1,!(yr&130023424)&&(yr=4194304)):t=1);var n=fe();e=rt(e,t),e!==null&&(ar(e,t,n),we(e,n))}function Kp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hc(e,n)}function Zp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),hc(e,n)}var mc;mc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ve=!1,Rp(e,t,n);ve=!!(e.flags&131072)}else ve=!1,B&&t.flags&1048576&&wu(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var i=cn(t,de.current);an(t,n),i=Ao(null,t,r,e,i,n);var l=Io();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(l=!0,ei(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eo(t),i.updater=bi,t.stateNode=i,i._reactInternals=t,Ul(t,r,e,n),t=Vl(null,t,r,!0,l,n)):(t.tag=0,B&&l&&So(t),pe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xp(r),e=Re(r,e),i){case 0:t=Hl(null,t,r,e,n);break e;case 1:t=Ya(null,t,r,e,n);break e;case 11:t=Ka(null,t,r,e,n);break e;case 14:t=Za(null,t,r,Re(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Hl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Ya(e,t,r,i,n);case 3:e:{if(Ju(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Cu(e,t),li(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=gn(Error(w(423)),t),t=Xa(e,t,r,n,i);break e}else if(r!==i){i=gn(Error(w(424)),t),t=Xa(e,t,r,n,i);break e}else for(je=vt(t.stateNode.containerInfo.firstChild),be=t,B=!0,De=null,n=bu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=it(e,t,n);break e}pe(e,t,r,n)}t=t.child}return t;case 5:return _u(t),e===null&&Ol(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,Ll(r,i)?a=null:l!==null&&Ll(r,l)&&(t.flags|=32),Gu(e,t),pe(e,t,a,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return ec(e,t,n);case 4:return To(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):pe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Ka(e,t,r,i,n);case 7:return pe(e,t,t.pendingProps,n),t.child;case 8:return pe(e,t,t.pendingProps.children,n),t.child;case 12:return pe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,U(ri,r._currentValue),r._currentValue=a,l!==null)if($e(l.value,a)){if(l.children===i.children&&!ye.current){t=it(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){a=l.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=et(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Dl(l.return,n,t),s.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(w(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Dl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}pe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,an(t,n),i=Le(i),r=r(i),t.flags|=1,pe(e,t,r,n),t.child;case 14:return r=t.type,i=Re(r,t.pendingProps),i=Re(r.type,i),Za(e,t,r,i,n);case 15:return Yu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Re(r,i),Ur(e,t),t.tag=1,xe(r)?(e=!0,ei(t)):e=!1,an(t,n),qu(t,r,i),Ul(t,r,i,n),Vl(null,t,r,!0,e,n);case 19:return tc(e,t,n);case 22:return Xu(e,t,n)}throw Error(w(156,t.tag))};function vc(e,t){return Bs(e,t)}function Yp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,n,r){return new Yp(e,t,n,r)}function Wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xp(e){if(typeof e=="function")return Wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uo)return 11;if(e===co)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Te(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")Wo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Wt:return It(n.children,i,l,t);case so:a=8,i|=8;break;case cl:return e=Te(12,n,t,i|2),e.elementType=cl,e.lanes=l,e;case dl:return e=Te(13,n,t,i),e.elementType=dl,e.lanes=l,e;case pl:return e=Te(19,n,t,i),e.elementType=pl,e.lanes=l,e;case _s:return _i(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ns:a=10;break e;case Cs:a=9;break e;case uo:a=11;break e;case co:a=14;break e;case st:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Te(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function It(e,t,n,r){return e=Te(7,e,r,t),e.lanes=n,e}function _i(e,t,n,r){return e=Te(22,e,r,t),e.elementType=_s,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=Te(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gp(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qo(e,t,n,r,i,l,a,s,u){return e=new Gp(e,t,n,s,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Te(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eo(l),e}function Jp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function yc(e){if(!e)return jt;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(xe(n))return yu(e,n,t)}return t}function xc(e,t,n,r,i,l,a,s,u){return e=Qo(n,r,!0,e,i,l,a,s,u),e.context=yc(null),n=e.current,r=fe(),i=wt(n),l=et(r,i),l.callback=t??null,yt(n,l,i),e.current.lanes=i,ar(e,i,r),we(e,r),e}function zi(e,t,n,r){var i=t.current,l=fe(),a=wt(i);return n=yc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(i,t,a),e!==null&&(Ue(e,i,a,l),Or(e,i,a)),a}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function as(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qo(e,t){as(e,t),(e=e.alternate)&&as(e,t)}function ef(){return null}var wc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ko(e){this._internalRoot=e}Ei.prototype.render=Ko.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));zi(e,t,null,null)};Ei.prototype.unmount=Ko.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){zi(null,e,null,null)}),t[nt]=null}};function Ei(e){this._internalRoot=e}Ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Js(e)}};function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function tf(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=fi(a);l.call(d)}}var a=xc(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=a,e[nt]=a.current,Xn(e.nodeType===8?e.parentNode:e),Ut(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=fi(u);s.call(d)}}var u=Qo(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=u,e[nt]=u.current,Xn(e.nodeType===8?e.parentNode:e),Ut(function(){zi(t,u,n,r)}),u}function Mi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var s=i;i=function(){var u=fi(a);s.call(u)}}zi(t,a,e,i)}else a=tf(n,t,e,i,r);return fi(a)}Zs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ln(t.pendingLanes);n!==0&&(go(t,n|1),we(t,X()),!(D&6)&&(hn=X()+500,Ct()))}break;case 13:Ut(function(){var r=rt(e,1);if(r!==null){var i=fe();Ue(r,e,1,i)}}),qo(e,1)}};ho=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=fe();Ue(t,e,134217728,n)}qo(e,134217728)}};Ys=function(e){if(e.tag===13){var t=wt(e),n=rt(e,t);if(n!==null){var r=fe();Ue(n,e,t,r)}qo(e,t)}};Xs=function(){return F};Gs=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Sl=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ki(r);if(!i)throw Error(w(90));Es(r),hl(r,i)}}}break;case"textarea":Ms(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};Ds=Ho;Fs=Ut;var nf={usingClientEntryPoint:!1,Events:[ur,Zt,ki,Rs,Os,Ho]},zn={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rf={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hs(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{vi=Er.inject(rf),qe=Er}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nf;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zo(t))throw Error(w(200));return Jp(e,t,null,n)};Ce.createRoot=function(e,t){if(!Zo(e))throw Error(w(299));var n=!1,r="",i=wc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qo(e,1,!1,null,null,n,!1,r,i),e[nt]=t.current,Xn(e.nodeType===8?e.parentNode:e),new Ko(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Hs(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return Ut(e)};Ce.hydrate=function(e,t,n){if(!Ti(t))throw Error(w(200));return Mi(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Zo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=wc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=xc(t,null,e,1,n??null,i,!1,l,a),e[nt]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ei(t)};Ce.render=function(e,t,n){if(!Ti(t))throw Error(w(200));return Mi(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ti(e))throw Error(w(40));return e._reactRootContainer?(Ut(function(){Mi(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ho;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ti(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Mi(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kc)}catch(e){console.error(e)}}kc(),ks.exports=Ce;var lf=ks.exports,us=lf;sl.createRoot=us.createRoot,sl.hydrateRoot=us.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var of={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),E=(e,t)=>{const n=z.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:s="",children:u,...d},m)=>z.createElement("svg",{ref:m,...of,width:i,height:i,stroke:r,strokeWidth:a?Number(l)*24/Number(i):l,className:["lucide",`lucide-${af(e)}`,s].join(" "),...d},[...t.map(([h,g])=>z.createElement(h,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=E("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=E("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=E("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=E("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=E("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=E("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=E("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=E("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=E("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=E("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=E("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=E("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=E("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=E("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=E("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=E("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=E("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=E("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=E("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=E("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=E("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=E("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=E("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=E("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=E("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=E("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=E("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=E("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=E("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=E("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=E("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=E("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=E("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=E("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=E("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=E("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=E("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=E("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=E("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=E("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=E("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=E("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=E("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=E("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=E("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=E("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=E("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=E("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=E("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=E("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=E("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=E("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=E("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),qf=[{id:"all",name:"Home",slug:"home",icon:"Home"},{id:"world",name:"World",slug:"world",icon:"Globe"},{id:"national",name:"National",slug:"national",icon:"Flag"},{id:"business",name:"Business",slug:"business",icon:"Briefcase"},{id:"technology",name:"Technology",slug:"technology",icon:"Cpu"},{id:"entertainment",name:"Entertainment",slug:"entertainment",icon:"Film"},{id:"sports",name:"Sports",slug:"sports",icon:"Trophy"},{id:"science",name:"Science",slug:"science",icon:"Atom"},{id:"health",name:"Health",slug:"health",icon:"HeartPulse"},{id:"opinion",name:"Opinion",slug:"opinion",icon:"MessageSquare"}],Kf=[{id:"art-1",title:"Quantum Advantage Milestone: Autonomous AI Micro-Processors Pass Commercial Viability Threshold",slug:"quantum-advantage-milestone-ai-microchips",excerpt:"Engineers achieve stable 1,024-qubit error correction at room temperature, paving the way for instantaneous climate modeling and real-time medical simulation.",body:`<p>In a historic leap for computational physics, a international research consortium has announced the deployment of the world's first room-temperature, error-corrected quantum micro-processor operating reliably above 1,000 logical qubits.</p>
    <p>The breakthrough, detailed in today's benchmark paper, eliminates the expensive liquid-helium cooling infrastructure that previously restricted quantum hardware to specialized laboratory basements. Utilizing topological diamond nitrogen-vacancy centers, the chip maintains quantum coherence for over 45 minutes under ambient conditions.</p>
    <blockquote class="story-blockquote">"We have moved beyond theoretical proof-of-concept into the industrial era of quantum processing. Problems that once required ten thousand supercomputing years can now be resolved in seconds."</blockquote>
    <p>Industries spanning grid energy optimization, pharmaceutical enzyme design, and aerodynamic modeling are expected to adopt the technology within the next fiscal quarter.</p>
    <h3>Key Takeaways & Market Impact</h3>
    <ul>
      <li><strong>Energy Consumption:</strong> Reduces data center power draw by an estimated 74% per algorithmic workload.</li>
      <li><strong>Cryptography Transition:</strong> Accelerates the global mandate for post-quantum cryptographic standards.</li>
      <li><strong>Commercial Availability:</strong> Cloud access endpoints opening to registered research partners next month.</li>
    </ul>`,hero_image:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",caption:"Cleanroom technician holding the newly validated 1,024-qubit room-temperature quantum processor wafer.",category:"technology",tags:["Quantum Computing","AI Hardware","Semiconductors","Breakthrough"],status:"published",published_at:"2026-07-23T08:30:00Z",updated_at:"2026-07-23T09:15:00Z",byline:"Dr. Elena Vance, Senior Technology Correspondent",reading_time:"4 min read",featured_flag:!0,breaking_flag:!0,editors_pick_flag:!0,view_count:4820,related_article_ids:["art-3","art-7"]},{id:"art-2",title:"Global Energy Summit Accord Signed: 40 Nations Commit to Next-Gen Fusion Power Grid Integration",slug:"global-energy-summit-fusion-accord",excerpt:"World leaders assemble in Geneva to sign historic treaty establishing unified safety standards and cross-border clean grid interconnects by 2030.",body:`<p>Delegates from 40 nations concluded three days of intense negotiations today by signing the Geneva Clean Energy Integration Accord. The agreement sets mandatory targets for merging magnetic-confinement fusion reactors into national transmission grids over the coming decade.</p>
    <p>The summit follows consecutive net-energy-gain records achieved across multiple private and public tokamak installations over the past 18 months.</p>
    <blockquote class="story-blockquote">"This treaty guarantees that clean, boundless energy generation will be shared equitably across borders, preventing regional energy monopolies."</blockquote>
    <p>Financing mechanisms approved during the plenary session include a $120 billion multilateral infrastructure fund tailored for developing nations seeking grid modernization.</p>`,hero_image:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",caption:"Interior of the international magnetic fusion reactor torus during plasma containment testing.",category:"world",tags:["Fusion Energy","Clean Energy","Global Summit","Climate Action"],status:"published",published_at:"2026-07-23T07:15:00Z",updated_at:"2026-07-23T07:15:00Z",byline:"Marcus Vance, Diplomatic Bureau Chief",reading_time:"5 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!0,view_count:3105,related_article_ids:["art-1"]},{id:"art-3",title:"Federal Reserve Announces Digital Settlement Architecture Trial for Commercial Banks",slug:"fed-digital-settlement-trial-banks",excerpt:"Central bank initiates pilot program with major financial institutions for instantaneous 24/7 wholesale interbank liquidity settlement.",body:`<p>The Federal Reserve System today revealed plans for a pilot wholesale settlement network designed to modernize interbank clearing. Dubbed <em>FedNet Settlement</em>, the system promises zero-latency transactions between member institutions regardless of time zone or weekend market closures.</p>
    <p>Unlike consumer-facing digital currencies, FedNet targets enterprise liquidity management, overnight treasury repurchases, and automated cross-border currency conversion.</p>
    <p>Financial analysts project the infrastructure could save domestic banking operations upwards of $18 billion annually in collateral friction costs.</p>`,hero_image:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",caption:"Trading floor displays monitoring real-time liquidity flow metrics during market opening hours.",category:"business",tags:["Banking","Federal Reserve","Fintech","Markets"],status:"published",published_at:"2026-07-23T06:00:00Z",updated_at:"2026-07-23T06:00:00Z",byline:"Sarah Jenkins, Financial Analyst",reading_time:"3 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!0,view_count:2410,related_article_ids:["art-1","art-6"]},{id:"art-4",title:"James Webb Space Telescope Captures Atmospheric Water Vapor and Carbon Signatures on Earth-Sized Exoplanet",slug:"jwst-water-vapor-carbon-exoplanet-discovery",excerpt:"Spectroscopic analysis of LHS 475 b reveals dense clouds, water isotopes, and steady atmospheric pressure 41 light-years away.",body:`<p>Astrophysicists analyzing transmission spectroscopy data from the James Webb Space Telescope have confirmed the definitive detection of atmospheric water vapor and carbon dioxide on a rocky exoplanet in the habitable zone of a nearby red dwarf star.</p>
    <p>The candidate world, located 41 light-years from Earth, possesses a surface gravity roughly 92% of Earth's and maintains equilibrium temperatures conducive to liquid surface ocean stability.</p>
    <p>Further high-resolution observations scheduled for next spring will search for organic bio-signature traces including methane and nitrous oxide.</p>`,hero_image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",caption:"Artist rendering of planetary transit spectroscopy across red dwarf star stellar emissions.",category:"science",tags:["Astronomy","JWST","Exoplanets","NASA"],status:"published",published_at:"2026-07-23T05:30:00Z",updated_at:"2026-07-23T05:30:00Z",byline:"Prof. David Thorne, Space Science Editor",reading_time:"4 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!0,view_count:3890,related_article_ids:["art-1"]},{id:"art-5",title:"Universal mRNA Vaccine Candidate Enters Phase 3 Trials with 98% Efficacy Across Seasonal Strains",slug:"universal-mrna-vaccine-phase-3-trials",excerpt:"Clinical trial results demonstrate broad neutralization against influenza, RSV, and coronaviruses with a single annual booster.",body:`<p>A multi-antigen universal vaccine candidate developed using AI-designed lipid nanoparticles has shown exceptional protection across diverse viral strains in clinical trials involving over 25,000 participants.</p>
    <p>The trial data published in the <em>Journal of Immunology & Medicine</em> confirms durable antibody response lasting over 18 months without significant decay.</p>
    <p>Public health authorities anticipate potential fast-track regulatory clearance by late autumn prior to the winter respiratory season.</p>`,hero_image:"https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",caption:"Laboratory researcher preparing high-purity nanoparticle formulations in sterile cleanroom environment.",category:"health",tags:["Medicine","Vaccines","Public Health","Biotech"],status:"published",published_at:"2026-07-23T04:45:00Z",updated_at:"2026-07-23T04:45:00Z",byline:"Dr. Aris Thorne, Health & Medical Writer",reading_time:"4 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!1,view_count:1950,related_article_ids:["art-4"]},{id:"art-6",title:"National Infrastructure Modernization Bill Passes Senate with Bipartisan 84-16 Vote",slug:"national-infrastructure-modernization-bill-passes",excerpt:"$450 billion package guarantees high-speed fiber internet, electric vehicle corridor corridors, and resilient flood defense systems nationwide.",body:`<p>In a rare display of legislative consensus, the U.S. Senate passed landmark legislation today authorizing $450 billion over six years toward critical transport, communications, and power infrastructure upgrades.</p>
    <p>Key allocations include $85 billion for rural broadband connectivity, $110 billion for high-speed intercity rail networks, and $60 billion for coastal storm surge barrier construction.</p>
    <p>The bill now moves to the White House for executive signature expected later this week.</p>`,hero_image:"https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",caption:"Civil engineering crew supervising bridge structural reinforcement works during highway overhaul.",category:"national",tags:["Congress","Infrastructure","Policy","Transportation"],status:"published",published_at:"2026-07-23T03:20:00Z",updated_at:"2026-07-23T03:20:00Z",byline:"Rachel Adams, Capitol Hill Reporter",reading_time:"3 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!1,view_count:1640,related_article_ids:["art-3"]},{id:"art-7",title:"World Athletics Cup: 18-Year-Old Prodigy Breaks 100m Sprint World Record in Zurich",slug:"world-athletics-cup-100m-world-record",excerpt:"Sensational 9.54-second sprint stuns capacity crowd as new generation of track stars redefines human limits.",body:`<p>Zurich witnessed history tonight as 18-year-old sprinter Kaelen Croft shattered the long-standing 100-meter world record, crossing the finish line in a staggering 9.54 seconds under clear skies at Letzigrund Stadium.</p>
    <p>Croft's reaction time off the blocks was recorded at 0.108 seconds, followed by an unprecedented peak stride velocity exceeding 44.2 km/h through the 70-meter mark.</p>
    <blockquote class="story-blockquote">"I felt complete rhythm from the second my foot hit the block. I wasn't running against the clock; I was just flowing with the track."</blockquote>`,hero_image:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",caption:"Croft celebrating past the finish line illuminated by stadium floodlights and spectator cameras.",category:"sports",tags:["Track & Field","World Record","Olympics","Sports"],status:"published",published_at:"2026-07-22T21:10:00Z",updated_at:"2026-07-22T21:10:00Z",byline:"Julian Sterling, Sports Bureau Editor",reading_time:"3 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!0,view_count:5210,related_article_ids:[]},{id:"art-8",title:'Indie Sci-Fi Film "Chronos Shift" Sweeps Venice International Film Festival Awards',slug:"indie-scifi-chronos-shift-venice-film-festival",excerpt:"Shot on vintage 70mm film with practical effects, director Maya Lin’s temporal thriller takes home the Golden Lion and Best Screenplay.",body:`<p>The 83rd Venice International Film Festival concluded with a historic triumph for independent cinema, as Maya Lin's cerebral sci-fi drama <em>Chronos Shift</em> secured four major honors including the coveted Golden Lion for Best Picture.</p>
    <p>Critics praised the film’s atmospheric practical set designs, tactile cinematography, and haunting score composed by ambient pioneer Nils Frahm.</p>
    <p>A global theatrical release is scheduled across 2,400 IMAX screens starting early October.</p>`,hero_image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",caption:"Director Maya Lin addressing the press conference with cast members following the award ceremony.",category:"entertainment",tags:["Cinema","Film Festival","Venice","Culture"],status:"published",published_at:"2026-07-22T19:40:00Z",updated_at:"2026-07-22T19:40:00Z",byline:"Claire Fontaine, Arts & Culture Critic",reading_time:"4 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!1,view_count:1420,related_article_ids:[]},{id:"art-9",title:"Opinion: The Case for Architectural Calm in the Era of Hyper-Connected Interfaces",slug:"opinion-case-for-architectural-calm-interfaces",excerpt:"Why digital design must return to whitespace, intentional typography, and respectful information density.",body:`<p>We live in an epoch of visual noise. Notifications shimmer like neon billboards, feed algorithms optimize for micro-agitation, and interface real estate is routinely carved up by persistent banners designed to capture fleeting attention spans.</p>
    <p>Yet, when we look back at the origins of editorial typography—from the layout of classic broadsheet newspapers to modern minimalist architecture—we discover that clarity is not born from addition, but from deliberate subtraction.</p>
    <blockquote class="story-blockquote">"Whitespace is not empty space; it is the structural breath that allows ideas to resonate."</blockquote>
    <p>As software engineers and digital journalists, our responsibility is to build software that respects human cognitive bandwidth. By establishing crisp visual hierarchy, neutral color palettes, and clear modular clusters, we restore dignity to the act of reading news online.</p>`,hero_image:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",caption:"Minimalist workspace with clean printed press layout and neutral daylight illumination.",category:"opinion",tags:["Design","UX Architecture","Typography","Opinion"],status:"published",published_at:"2026-07-22T14:15:00Z",updated_at:"2026-07-22T14:15:00Z",byline:"Julian Vance, Contributing Columnist",reading_time:"5 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!0,view_count:2890,related_article_ids:["art-1"]}],Zf=[{id:"m1",name:"Quantum Chip Cleanroom",url:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",category:"technology"},{id:"m2",name:"Fusion Tokamak Interior",url:"https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",category:"world"},{id:"m3",name:"Financial Trading Desk",url:"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",category:"business"},{id:"m4",name:"JWST Space Nebula",url:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",category:"science"},{id:"m5",name:"Medical Lab Research",url:"https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",category:"health"},{id:"m6",name:"Highway Infrastructure",url:"https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80",category:"national"},{id:"m7",name:"Track Stadium Sprint",url:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80",category:"sports"},{id:"m8",name:"Cinema Director & Set",url:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",category:"entertainment"},{id:"m9",name:"Minimal Editorial Desk",url:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",category:"opinion"}],Ze="gn_articles_v1",ol="gn_categories_v1",En="gn_media_v1",al="gn_admin_auth_v1",Z={init(){localStorage.getItem(Ze)||localStorage.setItem(Ze,JSON.stringify(Kf)),localStorage.getItem(ol)||localStorage.setItem(ol,JSON.stringify(qf)),localStorage.getItem(En)||localStorage.setItem(En,JSON.stringify(Zf))},getArticles(e=!1){this.init();try{const t=JSON.parse(localStorage.getItem(Ze)||"[]");return e?t:t.filter(n=>n.status==="published")}catch(t){return console.error("Failed to parse articles",t),[]}},getArticleById(e){return this.getArticles(!0).find(n=>n.id===e)||null},getArticleBySlug(e){return this.getArticles(!0).find(n=>n.slug===e)||null},getArticlesByCategory(e,t=!1){const n=this.getArticles(t);return!e||e==="home"||e==="all"?n:n.filter(r=>r.category.toLowerCase()===e.toLowerCase())},searchArticles(e,t=!1){if(!e||!e.trim())return[];const n=e.toLowerCase().trim();return this.getArticles(t).filter(i=>{const l=i.title.toLowerCase().includes(n),a=i.excerpt.toLowerCase().includes(n),s=i.body.toLowerCase().includes(n),u=i.category.toLowerCase().includes(n),d=i.tags&&i.tags.some(m=>m.toLowerCase().includes(n));return l||a||s||u||d})},getAutocompleteSuggestions(e){if(!e||e.trim().length<2)return[];const t=e.toLowerCase().trim(),n=this.getArticles(!1),r=[];return n.forEach(l=>{l.title.toLowerCase().includes(t)&&r.push({type:"article",text:l.title,slug:l.slug,id:l.id})}),this.getCategories().forEach(l=>{l.name.toLowerCase().includes(t)&&r.push({type:"category",text:`Section: ${l.name}`,slug:l.slug,id:l.id})}),r.slice(0,6)},saveArticle(e){this.init();const t=JSON.parse(localStorage.getItem(Ze)||"[]"),n=new Date().toISOString();if(e.id){const r=t.findIndex(i=>i.id===e.id);r!==-1?t[r]={...t[r],...e,updated_at:n}:t.unshift({...e,updated_at:n})}else{const r={...e,id:"art-"+Date.now(),slug:e.slug||this.generateSlug(e.title),published_at:e.published_at||n,updated_at:n,view_count:0};t.unshift(r)}return localStorage.setItem(Ze,JSON.stringify(t)),!0},deleteArticle(e){this.init();const n=JSON.parse(localStorage.getItem(Ze)||"[]").filter(r=>r.id!==e);return localStorage.setItem(Ze,JSON.stringify(n)),!0},incrementViewCount(e){this.init();const t=JSON.parse(localStorage.getItem(Ze)||"[]"),n=t.findIndex(r=>r.id===e);n!==-1&&(t[n].view_count=(t[n].view_count||0)+1,localStorage.setItem(Ze,JSON.stringify(t)))},getCategories(){return this.init(),JSON.parse(localStorage.getItem(ol)||"[]")},getMediaAssets(){return this.init(),JSON.parse(localStorage.getItem(En)||"[]")},saveMediaAsset(e){this.init();const t=this.getMediaAssets(),n={id:"m-"+Date.now(),name:e.name||"Uploaded Media",url:e.url,category:e.category||"general"};return t.unshift(n),localStorage.setItem(En,JSON.stringify(t)),n},deleteMediaAsset(e){this.init();const n=this.getMediaAssets().filter(r=>r.id!==e);localStorage.setItem(En,JSON.stringify(n))},loginAdmin(e,t){if((e==="admin"||e==="admin@googlenews.com")&&t==="admin123"){const n={token:"token_"+Date.now(),user:{name:"Editor-in-Chief",role:"admin",email:"admin@googlenews.com"}};return localStorage.setItem(al,JSON.stringify(n)),{success:!0,user:n.user}}return{success:!1,message:"Invalid credentials. Use admin / admin123"}},getAdminSession(){try{const e=localStorage.getItem(al);return e?JSON.parse(e):null}catch{return null}},logoutAdmin(){localStorage.removeItem(al)},generateSlug(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}},Ec=z.createContext(null),Yf=({children:e})=>{const[t,n]=z.useState(null),[r,i]=z.useState(!1);z.useEffect(()=>{const s=Z.getAdminSession();s&&n(s.user)},[]);const l=(s,u)=>{const d=Z.loginAdmin(s,u);return d.success&&(n(d.user),i(!1)),d},a=()=>{Z.logoutAdmin(),n(null)};return o.jsx(Ec.Provider,{value:{user:t,isLoggedIn:!!t,login:l,logout:a,isAuthModalOpen:r,openAuthModal:()=>i(!0),closeAuthModal:()=>i(!1)},children:e})},dr=()=>z.useContext(Ec),Xf=({onToggleSidebar:e,currentCategory:t,onSelectCategory:n,onOpenArticle:r,onSearchSubmit:i,currentView:l,setCurrentView:a,darkMode:s,setDarkMode:u})=>{const{user:d,isLoggedIn:m,logout:h,openAuthModal:g}=dr(),[y,x]=z.useState(""),[k,A]=z.useState(!1),[p,c]=z.useState([]),[f,v]=z.useState(!1),[S,b]=z.useState(!1),j=z.useRef(null),N=z.useRef(null);z.useEffect(()=>{if(y.trim().length>=2){const I=Z.getAutocompleteSuggestions(y);c(I),v(!0)}else c([]),v(!1)},[y]),z.useEffect(()=>{const I=ke=>{N.current&&!N.current.contains(ke.target)&&v(!1)};return document.addEventListener("mousedown",I),()=>document.removeEventListener("mousedown",I)},[]);const O=()=>{A(!0),y.trim().length>=2&&v(!0)},T=I=>{I.preventDefault(),y.trim()&&(i(y.trim()),v(!1),A(!1))},G=I=>{I.type==="article"?r(I.id):I.type==="category"&&n(I.slug),v(!1),A(!1)};return o.jsxs("header",{className:"gn-header",children:[o.jsxs("div",{className:"gn-header-content",children:[o.jsxs("div",{className:"gn-header-left",children:[o.jsx("button",{className:"gn-icon-btn hamburger-btn",onClick:e,title:"Toggle Navigation Menu","aria-label":"Toggle Navigation Menu",children:o.jsx(Af,{size:22})}),m?o.jsxs("div",{className:"gn-user-menu-wrapper",children:[o.jsxs("button",{className:"gn-admin-badge-btn",onClick:()=>b(!S),children:[o.jsx("div",{className:"gn-admin-avatar",children:"A"}),o.jsx("span",{className:"gn-admin-label",children:"Admin CMS"}),o.jsx(Sc,{size:14})]}),S&&o.jsxs("div",{className:"gn-dropdown-menu",children:[o.jsxs("div",{className:"gn-dropdown-header",children:[o.jsx("strong",{children:d.name}),o.jsx("div",{className:"gn-dropdown-sub",children:d.email})]}),o.jsx("hr",{className:"gn-dropdown-divider"}),o.jsxs("button",{className:"gn-dropdown-item",onClick:()=>{a("admin-dashboard"),b(!1)},children:[o.jsx(Nc,{size:16}),o.jsx("span",{children:"CMS Dashboard"})]}),o.jsxs("button",{className:"gn-dropdown-item",onClick:()=>{a("admin-editor"),b(!1)},children:[o.jsx($f,{size:16}),o.jsx("span",{children:"Create New Article"})]}),o.jsx("hr",{className:"gn-dropdown-divider"}),o.jsxs("button",{className:"gn-dropdown-item text-danger",onClick:()=>{h(),b(!1),a("home")},children:[o.jsx(Mf,{size:16}),o.jsx("span",{children:"Sign out"})]})]})]}):o.jsxs("button",{className:"gn-signin-btn",onClick:g,title:"Admin Login",children:[o.jsx(Wf,{size:18}),o.jsx("span",{children:"Sign in"})]}),o.jsxs("div",{className:"gn-logo",onClick:()=>{n("home"),a("home")},role:"button",tabIndex:0,children:[o.jsxs("span",{className:"gn-logo-brand",children:[o.jsx("span",{style:{color:"#4285F4"},children:"B"}),o.jsx("span",{style:{color:"#EA4335"},children:"h"}),o.jsx("span",{style:{color:"#FBBC05"},children:"o"}),o.jsx("span",{style:{color:"#4285F4"},children:"o"}),o.jsx("span",{style:{color:"#34A853"},children:"g"}),o.jsx("span",{style:{color:"#EA4335"},children:"l"}),o.jsx("span",{style:{color:"#4285F4"},children:"e"})]}),o.jsx("span",{className:"gn-logo-sub",children:"News"})]})]}),o.jsxs("div",{ref:N,className:`gn-search-container ${k?"expanded":""}`,children:[o.jsxs("form",{className:"gn-search-form",onSubmit:T,children:[o.jsx("button",{type:"submit",className:"gn-search-icon-btn",children:o.jsx(hi,{size:18})}),o.jsx("input",{ref:j,type:"text",className:"gn-search-input",placeholder:"Search for topics, locations & sources...",value:y,onChange:I=>x(I.target.value),onFocus:O}),y&&o.jsx("button",{type:"button",className:"gn-search-clear-btn",onClick:()=>{x(""),c([])},children:o.jsx(Jo,{size:16})})]}),f&&p.length>0&&o.jsx("div",{className:"gn-autocomplete-dropdown animate-fade-in",children:p.map((I,ke)=>o.jsxs("div",{className:"gn-autocomplete-item",onClick:()=>G(I),children:[o.jsx(hi,{size:14,className:"sug-icon"}),o.jsx("span",{className:"sug-text",children:I.text}),o.jsx("span",{className:"sug-type",children:I.type})]},ke))})]}),o.jsx("div",{className:"gn-header-right",children:o.jsx("button",{className:"gn-icon-btn",onClick:()=>u(!s),title:s?"Switch to Light Mode":"Switch to Dark Mode",children:s?o.jsx(Hf,{size:20}):o.jsx(Rf,{size:20})})})]}),o.jsx("style",{children:`
        .gn-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background-color: var(--bg-surface);
          border-bottom: 1px solid var(--border-color);
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .gn-header-content {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .gn-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .gn-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: background-color 0.15s;
        }

        .gn-icon-btn:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-signin-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          color: var(--accent-color);
          font-weight: 500;
          font-size: 14px;
          transition: background-color 0.15s, border-color 0.15s;
        }

        .gn-signin-btn:hover {
          background-color: var(--accent-light);
          border-color: transparent;
        }

        .gn-admin-badge-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 20px;
          background-color: var(--accent-light);
          color: var(--accent-color);
          font-weight: 600;
          font-size: 13px;
        }

        .gn-admin-avatar {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: var(--accent-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .gn-user-menu-wrapper {
          position: relative;
        }

        .gn-dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 220px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: var(--shadow-modal);
          padding: 8px 0;
          z-index: 1100;
        }

        .gn-dropdown-header {
          padding: 8px 16px;
        }

        .gn-dropdown-sub {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .gn-dropdown-divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 6px 0;
        }

        .gn-dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          font-size: 14px;
          color: var(--text-primary);
          transition: background-color 0.15s;
        }

        .gn-dropdown-item:hover {
          background-color: var(--bg-hover);
        }

        .gn-dropdown-item.text-danger {
          color: #d93025;
        }

        .gn-logo {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          user-select: none;
        }

        .gn-logo-brand {
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.5px;
        }

        .gn-logo-sub {
          font-size: 20px;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .gn-search-container {
          position: relative;
          flex: 1;
          max-width: 680px;
          transition: all 0.2s ease;
        }

        .gn-search-form {
          display: flex;
          align-items: center;
          background-color: var(--bg-main);
          border-radius: 24px;
          padding: 0 16px;
          height: 46px;
          border: 1px solid transparent;
          transition: background-color 0.2s, box-shadow 0.2s, border-color 0.2s;
        }

        .gn-search-container.expanded .gn-search-form,
        .gn-search-form:focus-within {
          background-color: var(--bg-surface);
          border-color: var(--border-color);
          box-shadow: var(--shadow-subtle);
        }

        .gn-search-icon-btn {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          margin-right: 8px;
        }

        .gn-search-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 15px;
          color: var(--text-primary);
          outline: none;
        }

        .gn-search-clear-btn {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          padding: 4px;
        }

        .gn-autocomplete-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background-color: var(--bg-surface);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-modal);
          overflow: hidden;
          z-index: 1050;
        }

        .gn-autocomplete-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .gn-autocomplete-item:hover {
          background-color: var(--bg-hover);
        }

        .sug-icon {
          color: var(--text-muted);
        }

        .sug-text {
          flex: 1;
          font-size: 14px;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sug-type {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          background-color: var(--bg-hover);
          color: var(--text-secondary);
          padding: 2px 6px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .gn-logo-sub {
            display: none;
          }
          .gn-admin-label {
            display: none;
          }
          .gn-signin-btn span {
            display: none;
          }
          .gn-signin-btn {
            padding: 8px;
            border-radius: 50%;
          }
        }
      `})]})},Gf={Home:bc,Globe:Nf,Flag:bf,Briefcase:gf,Cpu:xf,Film:jf,Trophy:Bf,Atom:cf,HeartPulse:_f,MessageSquare:If},Jf=({categories:e,activeCategory:t,onSelectCategory:n,isOpen:r,onClose:i,currentView:l,setCurrentView:a})=>{const{isLoggedIn:s}=dr(),u=d=>{const m=Gf[d]||bc;return o.jsx(m,{size:18})};return o.jsxs(o.Fragment,{children:[r&&o.jsx("div",{className:"gn-sidebar-overlay",onClick:i}),o.jsx("aside",{className:`gn-sidebar ${r?"open":""}`,children:o.jsxs("div",{className:"gn-sidebar-inner",children:[o.jsxs("div",{className:"gn-nav-section",children:[o.jsx("div",{className:"gn-section-label",children:"Feeds & Topics"}),e.map(d=>{const m=t===d.slug&&l==="home";return o.jsxs("button",{className:`gn-nav-item ${m?"active":""}`,onClick:()=>{n(d.slug),a("home"),window.innerWidth<=768&&i()},children:[o.jsx("span",{className:"gn-nav-icon",children:u(d.icon)}),o.jsx("span",{className:"gn-nav-text",children:d.name})]},d.id)})]}),o.jsx("hr",{className:"gn-sidebar-divider"}),s&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"gn-nav-section",children:[o.jsx("div",{className:"gn-section-label",children:"Management"}),o.jsxs("button",{className:`gn-nav-item ${l.startsWith("admin")?"active":""}`,onClick:()=>{a("admin-dashboard"),window.innerWidth<=768&&i()},children:[o.jsx("span",{className:"gn-nav-icon",children:o.jsx(Nc,{size:18})}),o.jsx("span",{className:"gn-nav-text",children:"CMS Dashboard"})]})]}),o.jsx("hr",{className:"gn-sidebar-divider"})]}),o.jsxs("div",{className:"gn-nav-section gn-utility-section",children:[o.jsx("div",{className:"gn-section-label",children:"Journal & Meta"}),o.jsxs("button",{className:"gn-nav-item",onClick:()=>{alert(`Chronicle News - Google News UI Replica v1.0
All content published by single-admin editorial CMS.`)},children:[o.jsx("span",{className:"gn-nav-icon",children:o.jsx(Ef,{size:18})}),o.jsx("span",{className:"gn-nav-text",children:"About"})]}),o.jsxs("button",{className:"gn-nav-item",onClick:()=>{alert(`Editorial Desk Contact:
editor@chroniclenews.org`)},children:[o.jsx("span",{className:"gn-nav-icon",children:o.jsx(Lf,{size:18})}),o.jsx("span",{className:"gn-nav-text",children:"Contact"})]}),o.jsxs("div",{className:"gn-footer-terms",children:[o.jsx("span",{children:"Settings"})," · ",o.jsx("span",{children:"Privacy"})," · ",o.jsx("span",{children:"Terms"}),o.jsx("div",{className:"gn-copyright",children:"© 2026 Chronicle News"})]})]})]})}),o.jsx("style",{children:`
        .gn-sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 990;
        }

        .gn-sidebar {
          width: var(--sidebar-width);
          position: fixed;
          top: var(--header-height);
          bottom: 0;
          left: 0;
          background-color: var(--bg-surface);
          border-right: 1px solid var(--border-color);
          overflow-y: auto;
          z-index: 995;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gn-sidebar-inner {
          padding: 12px 8px 24px 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .gn-nav-section {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gn-section-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--text-muted);
          padding: 8px 16px 4px 16px;
        }

        .gn-nav-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 10px 16px;
          border-radius: 20px;
          color: var(--text-primary);
          font-size: 14px;
          font-weight: 500;
          transition: background-color 0.15s, color 0.15s;
          width: 100%;
          text-align: left;
        }

        .gn-nav-item:hover {
          background-color: var(--bg-hover);
        }

        .gn-nav-item.active {
          background-color: var(--accent-light);
          color: var(--accent-color);
          font-weight: 600;
        }

        .gn-nav-icon {
          display: flex;
          align-items: center;
          color: inherit;
        }

        .gn-sidebar-divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 8px 0;
        }

        .gn-footer-terms {
          padding: 12px 16px;
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .gn-footer-terms span {
          cursor: pointer;
        }

        .gn-footer-terms span:hover {
          text-decoration: underline;
        }

        .gn-copyright {
          margin-top: 6px;
          font-size: 11px;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .gn-sidebar {
            transform: translateX(-100%);
          }
          .gn-sidebar.open {
            transform: translateX(0);
          }
        }
      `})]})},eg=({categories:e,activeCategory:t,onSelectCategory:n})=>o.jsxs("div",{className:"gn-pills-bar",children:[o.jsx("div",{className:"gn-pills-scroll",children:e.map(r=>{const i=t===r.slug;return o.jsx("button",{className:`gn-pill-chip ${i?"active":""}`,onClick:()=>n(r.slug),children:r.name},r.id)})}),o.jsx("style",{children:`
        .gn-pills-bar {
          margin-bottom: 20px;
          overflow: hidden;
        }

        .gn-pills-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 6px;
          scrollbar-width: none; /* Firefox */
        }

        .gn-pills-scroll::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .gn-pill-chip {
          padding: 8px 16px;
          border-radius: var(--chip-radius);
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          transition: all 0.15s;
        }

        .gn-pill-chip:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-pill-chip.active {
          background-color: var(--accent-light);
          color: var(--accent-color);
          border-color: transparent;
          font-weight: 600;
        }
      `})]}),tg=({article:e,onOpenArticle:t})=>e?o.jsxs("div",{className:"gn-breaking-banner animate-fade-in",onClick:()=>t(e.id),children:[o.jsxs("div",{className:"gn-breaking-tag",children:[o.jsx(Xo,{size:16}),o.jsx("span",{children:"BREAKING NEWS"})]}),o.jsx("div",{className:"gn-breaking-title",children:e.title}),o.jsxs("div",{className:"gn-breaking-action",children:[o.jsx("span",{children:"Read Report"}),o.jsx(uf,{size:14})]}),o.jsx("style",{children:`
        .gn-breaking-banner {
          background: linear-gradient(90deg, #d93025 0%, #b31412 100%);
          color: white;
          padding: 10px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(217, 48, 37, 0.25);
          transition: transform 0.15s;
        }

        .gn-breaking-banner:hover {
          transform: translateY(-1px);
        }

        .gn-breaking-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .gn-breaking-title {
          flex: 1;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .gn-breaking-action {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0.9;
        }

        @media (max-width: 600px) {
          .gn-breaking-banner {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
          .gn-breaking-title {
            white-space: normal;
          }
        }
      `})]}):null,ng=({article:e,relatedArticles:t=[],onOpenArticle:n})=>{const[r,i]=z.useState(!1);if(!e)return null;const l=a=>new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric"});return o.jsxs("div",{className:"gn-top-story-card",children:[o.jsxs("div",{className:"gn-top-story-header",children:[o.jsx("span",{className:"gn-category-badge",children:e.category.toUpperCase()}),o.jsx("span",{className:"gn-top-story-tag",children:"TOP STORY"})]}),o.jsxs("div",{className:"gn-top-story-grid",children:[o.jsxs("div",{className:"gn-top-story-content",children:[o.jsx("h2",{className:"gn-top-story-headline",onClick:()=>n(e.id),children:e.title}),o.jsx("p",{className:"gn-top-story-excerpt",children:e.excerpt}),o.jsxs("div",{className:"gn-top-story-meta",children:[o.jsx("span",{className:"gn-byline",children:e.byline}),o.jsx("span",{className:"gn-dot",children:"•"}),o.jsxs("span",{className:"gn-timestamp",children:[o.jsx(jc,{size:13}),l(e.published_at)]}),o.jsx("span",{className:"gn-dot",children:"•"}),o.jsx("span",{className:"gn-read-time",children:e.reading_time})]})]}),e.hero_image&&o.jsx("div",{className:"gn-top-story-media",onClick:()=>n(e.id),children:o.jsx("img",{src:e.hero_image,alt:e.title,loading:"lazy"})})]}),t&&t.length>0&&o.jsxs("div",{className:"gn-context-module",children:[o.jsxs("button",{className:"gn-context-toggle-btn",onClick:()=>i(!r),children:[o.jsxs("div",{className:"gn-context-label",children:[o.jsx(Li,{size:16,className:"sparkle-icon"}),o.jsx("span",{children:"Get background & related coverage"}),o.jsxs("span",{className:"gn-context-count",children:["(",t.length,")"]})]}),r?o.jsx(vf,{size:16}):o.jsx(Sc,{size:16})]}),r&&o.jsx("div",{className:"gn-context-list animate-fade-in",children:t.map(a=>o.jsxs("div",{className:"gn-context-item",onClick:()=>n(a.id),children:[o.jsx(ff,{size:14,className:"gn-context-icon"}),o.jsxs("div",{className:"gn-context-info",children:[o.jsx("div",{className:"gn-context-title",children:a.title}),o.jsxs("div",{className:"gn-context-sub",children:[o.jsx("span",{children:a.category})," • ",o.jsx("span",{children:l(a.published_at)})]})]})]},a.id))})]}),o.jsx("style",{children:`
        .gn-top-story-card {
          background:
            linear-gradient(180deg, rgba(26, 115, 232, 0.07), transparent 30%),
            var(--bg-surface);
          border: 1px solid rgba(26, 115, 232, 0.15);
          border-radius: 24px;
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .gn-top-story-card:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-2px);
        }

        .gn-top-story-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }

        .gn-category-badge {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.6px;
          color: var(--accent-color);
          background-color: var(--accent-light);
          padding: 4px 9px;
          border-radius: 999px;
        }

        .gn-top-story-tag {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.6px;
          text-transform: uppercase;
        }

        .gn-top-story-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(300px, 360px);
          gap: 24px;
          align-items: stretch;
        }

        .gn-top-story-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .gn-top-story-headline {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          line-height: 1.08;
          color: var(--text-primary);
          cursor: pointer;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          transition: color 0.15s;
        }

        .gn-top-story-headline:hover {
          color: var(--accent-color);
        }

        .gn-top-story-excerpt {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gn-top-story-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          flex-wrap: wrap;
        }

        .gn-byline {
          font-weight: 700;
          color: var(--text-secondary);
        }

        .gn-timestamp {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .gn-dot {
          color: var(--border-color);
        }

        .gn-top-story-media {
          width: 100%;
          min-height: 280px;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          background-color: var(--bg-hover);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
        }

        .gn-top-story-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .gn-top-story-media:hover img {
          transform: scale(1.04);
        }

        .gn-context-module {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .gn-context-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 12px;
          background-color: var(--bg-hover);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 700;
        }

        .gn-context-label {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sparkle-icon {
          color: var(--accent-color);
        }

        .gn-context-count {
          color: var(--text-muted);
          font-weight: 500;
        }

        .gn-context-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
          padding-left: 4px;
        }

        .gn-context-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .gn-context-item:hover {
          background-color: var(--bg-hover);
        }

        .gn-context-icon {
          color: var(--accent-color);
          flex-shrink: 0;
        }

        .gn-context-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .gn-context-sub {
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 860px) {
          .gn-top-story-grid {
            grid-template-columns: 1fr;
          }
          .gn-top-story-media {
            order: -1;
            min-height: 230px;
          }
        }
      `})]})},mn=({article:e,variant:t="standard",onOpenArticle:n})=>{var i,l,a,s;if(!e)return null;const r=u=>u?new Date(u).toLocaleDateString("en-US",{month:"short",day:"numeric"}):"";return t==="compact"?o.jsxs("div",{className:"gn-card-compact",onClick:()=>n(e.id),children:[o.jsxs("div",{className:"gn-card-compact-content",children:[o.jsx("h4",{className:"gn-card-compact-title",children:e.title}),o.jsxs("div",{className:"gn-card-meta",children:[o.jsx("span",{className:"gn-card-byline",children:(i=e.byline)==null?void 0:i.split(",")[0]}),o.jsx("span",{className:"gn-card-dot",children:"•"}),o.jsx("span",{className:"gn-card-time",children:r(e.published_at)})]})]}),e.hero_image&&o.jsx("div",{className:"gn-card-compact-thumb",children:o.jsx("img",{src:e.hero_image,alt:e.title,loading:"lazy"})}),o.jsx("style",{children:`
          .gn-card-compact {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid var(--border-subtle);
            cursor: pointer;
          }
          .gn-card-compact:last-child {
            border-bottom: none;
          }
          .gn-card-compact-content {
            flex: 1;
            min-width: 0;
          }
          .gn-card-compact-title {
            font-size: 14px;
            font-weight: 700;
            line-height: 1.35;
            color: var(--text-primary);
            margin-bottom: 4px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            transition: color 0.15s;
          }
          .gn-card-compact:hover .gn-card-compact-title {
            color: var(--accent-color);
          }
          .gn-card-compact-thumb {
            width: 70px;
            height: 70px;
            border-radius: 10px;
            overflow: hidden;
            flex-shrink: 0;
            background-color: var(--bg-hover);
          }
          .gn-card-compact-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gn-card-meta {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: var(--text-muted);
          }
          .gn-card-byline {
            font-weight: 700;
            color: var(--text-secondary);
          }
          .gn-card-dot {
            color: var(--border-color);
          }
        `})]}):t==="lead"?o.jsxs("div",{className:"gn-card-lead",onClick:()=>n(e.id),children:[e.hero_image&&o.jsx("div",{className:"gn-card-lead-image",children:o.jsx("img",{src:e.hero_image,alt:e.title,loading:"lazy"})}),o.jsxs("div",{className:"gn-card-lead-body",children:[o.jsx("span",{className:"gn-card-category-tag",children:(l=e.category)==null?void 0:l.toUpperCase()}),o.jsx("h3",{className:"gn-card-lead-title",children:e.title}),o.jsx("p",{className:"gn-card-lead-excerpt",children:e.excerpt}),o.jsxs("div",{className:"gn-card-meta",children:[o.jsx("span",{className:"gn-card-byline",children:e.byline}),o.jsx("span",{className:"gn-card-dot",children:"•"}),o.jsx("span",{className:"gn-card-time",children:r(e.published_at)})]})]}),o.jsx("style",{children:`
          .gn-card-lead {
            display: flex;
            flex-direction: column;
            cursor: pointer;
            height: 100%;
          }
          .gn-card-lead-image {
            width: 100%;
            height: 240px;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 14px;
            background-color: var(--bg-hover);
          }
          .gn-card-lead-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.25s;
          }
          .gn-card-lead:hover .gn-card-lead-image img {
            transform: scale(1.03);
          }
          .gn-card-category-tag {
            font-size: 11px;
            font-weight: 800;
            color: var(--accent-color);
            letter-spacing: 0.6px;
            margin-bottom: 8px;
            display: inline-block;
            text-transform: uppercase;
          }
          .gn-card-lead-title {
            font-size: 20px;
            font-weight: 800;
            line-height: 1.3;
            color: var(--text-primary);
            margin-bottom: 8px;
            transition: color 0.15s;
          }
          .gn-card-lead:hover .gn-card-lead-title {
            color: var(--accent-color);
          }
          .gn-card-lead-excerpt {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.55;
            margin-bottom: 10px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `})]}):o.jsxs("div",{className:"gn-card-standard",onClick:()=>n(e.id),children:[o.jsxs("div",{className:"gn-card-standard-body",children:[o.jsx("span",{className:"gn-card-category-tag",children:(a=e.category)==null?void 0:a.toUpperCase()}),o.jsx("h3",{className:"gn-card-standard-title",children:e.title}),o.jsx("p",{className:"gn-card-standard-excerpt",children:e.excerpt}),o.jsxs("div",{className:"gn-card-meta",children:[o.jsx("span",{className:"gn-card-byline",children:(s=e.byline)==null?void 0:s.split(",")[0]}),o.jsx("span",{className:"gn-card-dot",children:"•"}),o.jsx("span",{className:"gn-card-time",children:r(e.published_at)})]})]}),e.hero_image&&o.jsx("div",{className:"gn-card-standard-thumb",children:o.jsx("img",{src:e.hero_image,alt:e.title,loading:"lazy"})}),o.jsx("style",{children:`
        .gn-card-standard {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 16px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.15s;
        }
        .gn-card-standard:hover {
          box-shadow: var(--shadow-hover);
          transform: translateY(-1px);
        }
        .gn-card-standard-body {
          flex: 1;
          min-width: 0;
        }
        .gn-card-standard-title {
          font-size: 17px;
          font-weight: 800;
          line-height: 1.35;
          color: var(--text-primary);
          margin-bottom: 6px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.15s;
        }
        .gn-card-standard:hover .gn-card-standard-title {
          color: var(--accent-color);
        }
        .gn-card-standard-excerpt {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 10px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .gn-card-standard-thumb {
          width: 104px;
          height: 104px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          background-color: var(--bg-hover);
        }
        .gn-card-standard-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `})]})},Tr=({title:e,categorySlug:t,articles:n=[],onSelectCategory:r,onOpenArticle:i})=>{if(!n||n.length===0)return null;const l=n[0],a=n.slice(1,4);return o.jsxs("div",{className:"gn-section-block",children:[o.jsxs("div",{className:"gn-section-header",children:[o.jsx("h3",{className:"gn-section-title",onClick:()=>r(t),children:e}),o.jsxs("button",{className:"gn-see-more-btn",onClick:()=>r(t),children:[o.jsx("span",{children:"See more"}),o.jsx(mf,{size:16})]})]}),o.jsxs("div",{className:"gn-section-grid",children:[o.jsx("div",{className:"gn-section-lead-col",children:o.jsx(mn,{article:l,variant:"lead",onOpenArticle:i})}),o.jsx("div",{className:"gn-section-side-col",children:a.map(s=>o.jsx(mn,{article:s,variant:"compact",onOpenArticle:i},s.id))})]}),o.jsx("style",{children:`
        .gn-section-block {
          background:
            linear-gradient(180deg, rgba(26, 115, 232, 0.04), transparent 24%),
            var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 22px;
          padding: 20px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
        }

        .gn-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .gn-section-title {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          cursor: pointer;
          transition: color 0.15s;
        }

        .gn-section-title:hover {
          color: var(--accent-color);
        }

        .gn-see-more-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent-color);
          padding: 4px 10px;
          border-radius: 999px;
          transition: background-color 0.15s;
        }

        .gn-see-more-btn:hover {
          background-color: var(--accent-light);
        }

        .gn-section-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr);
          gap: 20px;
        }

        .gn-section-lead-col {
          border-right: 1px solid var(--border-subtle);
          padding-right: 20px;
        }

        .gn-section-side-col {
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 768px) {
          .gn-section-grid {
            grid-template-columns: 1fr;
          }
          .gn-section-lead-col {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid var(--border-subtle);
            padding-bottom: 16px;
          }
        }
      `})]})},rg=({articles:e=[],onOpenArticle:t})=>{const[n,r]=z.useState("editors"),i=e.filter(s=>s.editors_pick_flag),l=[...e].sort((s,u)=>(u.view_count||0)-(s.view_count||0)).slice(0,5),a=n==="editors"?i:l;return o.jsxs("div",{className:"gn-widget gn-editors-widget",children:[o.jsxs("div",{className:"gn-widget-tabs",children:[o.jsxs("button",{className:`gn-tab-btn ${n==="editors"?"active":""}`,onClick:()=>r("editors"),children:[o.jsx(Go,{size:15}),o.jsx("span",{children:"Editor's Picks"})]}),o.jsxs("button",{className:`gn-tab-btn ${n==="mostread"?"active":""}`,onClick:()=>r("mostread"),children:[o.jsx(Vf,{size:15}),o.jsx("span",{children:"Most Read"})]})]}),o.jsx("div",{className:"gn-widget-list",children:a.slice(0,5).map((s,u)=>o.jsxs("div",{className:"gn-widget-item",children:[o.jsx("span",{className:"gn-rank-num",children:u+1}),o.jsx("div",{className:"gn-rank-content",children:o.jsx(mn,{article:s,variant:"compact",onOpenArticle:t})})]},s.id))}),o.jsx("style",{children:`
        .gn-editors-widget {
          background:
            linear-gradient(180deg, rgba(26, 115, 232, 0.05), transparent 24%),
            var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 16px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
        }

        .gn-widget-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 12px;
        }

        .gn-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          border-bottom: 2px solid transparent;
          transition: all 0.15s;
        }

        .gn-tab-btn.active {
          color: var(--accent-color);
          border-bottom-color: var(--accent-color);
        }

        .gn-widget-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .gn-rank-num {
          font-size: 16px;
          font-weight: 800;
          color: var(--text-muted);
          width: 20px;
          padding-top: 14px;
        }

        .gn-rank-content {
          flex: 1;
          min-width: 0;
        }
      `})]})},zt={city:"New York, NY",timezone:"America/New_York"},ig={0:"Clear sky",1:"Mostly clear",2:"Partly cloudy",3:"Overcast",45:"Foggy",48:"Rime fog",51:"Light drizzle",53:"Drizzle",55:"Heavy drizzle",61:"Light rain",63:"Rain",65:"Heavy rain",71:"Light snow",73:"Snow",75:"Heavy snow",80:"Rain showers",81:"Showers",82:"Heavy showers",95:"Thunderstorms",96:"Thunderstorms with hail",99:"Severe thunderstorms"},lg=e=>ig[e]||"Clear sky",Mr=e=>e?new Intl.DateTimeFormat(void 0,{timeZone:e,hour:"numeric",minute:"2-digit"}).format(new Date):"",og=()=>{const[e,t]=z.useState(zt.city),[n,r]=z.useState(zt.timezone),[i,l]=z.useState(Mr(zt.timezone)),[a,s]=z.useState({temperature:72,condition:"Partly Cloudy",high:76,low:62,unit:"F"}),[u,d]=z.useState(!0),m=()=>{t(zt.city),r(zt.timezone),l(Mr(zt.timezone)),s({temperature:72,condition:"Partly Cloudy",high:76,low:62,unit:"F"}),d(!1)},h=()=>{if(!navigator.geolocation){m();return}d(!0),navigator.geolocation.getCurrentPosition(async g=>{var k,A,p;const{latitude:y,longitude:x}=g.coords;try{const f=await(await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${y}&longitude=${x}&localityLanguage=en`)).json(),v=(f==null?void 0:f.city)||(f==null?void 0:f.locality)||(f==null?void 0:f.principalSubdivision)||`${y.toFixed(2)}, ${x.toFixed(2)}`,S=[f==null?void 0:f.city,f==null?void 0:f.principalSubdivision,f==null?void 0:f.countryName].filter(Boolean).slice(0,2).join(", ");t(S||v),r(Intl.DateTimeFormat().resolvedOptions().timeZone||zt.timezone);const j=await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${y}&longitude=${x}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)).json(),N=j==null?void 0:j.current,O=j==null?void 0:j.daily,T=Math.round((N==null?void 0:N.temperature_2m)??72),G=Math.round(((k=O==null?void 0:O.temperature_2m_max)==null?void 0:k[0])??76),I=Math.round(((A=O==null?void 0:O.temperature_2m_min)==null?void 0:A[0])??62),ke=((p=j==null?void 0:j.current_units)==null?void 0:p.temperature_2m)==="°C"?"C":"F";s({temperature:T,condition:lg((N==null?void 0:N.weather_code)??2),high:G,low:I,unit:ke}),d(!1)}catch{m()}},()=>{m()},{enableHighAccuracy:!0,maximumAge:6e4,timeout:1e4})};return z.useEffect(()=>{h()},[]),z.useEffect(()=>{l(Mr(n));const g=setInterval(()=>{l(Mr(n))},6e4);return()=>clearInterval(g)},[n]),o.jsxs("div",{className:"gn-weather-widget",children:[o.jsxs("div",{className:"gn-weather-header",children:[o.jsxs("div",{className:"gn-weather-location",children:[o.jsx(Pf,{size:15,className:"location-icon"}),o.jsx("span",{children:e})]}),o.jsxs("div",{className:"gn-weather-meta-right",children:[o.jsxs("span",{className:"gn-weather-type",children:[i," Local"]}),o.jsx("button",{className:"gn-weather-refresh-btn",onClick:h,title:"Refresh weather from current location",children:o.jsx(Df,{size:13})})]})]}),o.jsxs("div",{className:"gn-weather-main",children:[o.jsx(yf,{size:38,className:"weather-icon"}),o.jsxs("div",{className:"gn-weather-temp",children:[o.jsxs("span",{className:"temp-val",children:[a.temperature,"°"]}),o.jsx("span",{className:"temp-unit",children:a.unit||"F"})]}),o.jsxs("div",{className:"gn-weather-details",children:[o.jsx("div",{className:"condition",children:u?"Loading your local weather…":a.condition}),o.jsxs("div",{className:"sub-details",children:["H: ",a.high,"° • L: ",a.low,"°"]})]})]}),o.jsx("style",{children:`
        .gn-weather-widget {
          background: linear-gradient(135deg, #e8f0fe 0%, #ffffff 100%);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 16px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-subtle);
        }

        .dark-theme .gn-weather-widget {
          background: linear-gradient(135deg, #2b384e 0%, #202124 100%);
        }

        .gn-weather-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 12px;
        }

        .gn-weather-meta-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gn-weather-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .location-icon {
          color: var(--accent-color);
        }

        .gn-weather-type {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .gn-weather-refresh-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 999px;
          background-color: var(--bg-hover);
          color: var(--text-secondary);
        }

        .gn-weather-refresh-btn:hover {
          background-color: var(--accent-light);
          color: var(--accent-color);
        }

        .gn-weather-main {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .weather-icon {
          color: #fbbc04;
        }

        .gn-weather-temp {
          display: flex;
          align-items: flex-start;
        }

        .temp-val {
          font-size: 32px;
          font-weight: 800;
          line-height: 1;
          color: var(--text-primary);
        }

        .temp-unit {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .gn-weather-details {
          display: flex;
          flex-direction: column;
        }

        .condition {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .sub-details {
          font-size: 12px;
          color: var(--text-muted);
        }
      `})]})},ag=({articleId:e,onBack:t,onOpenArticle:n,onEditArticle:r})=>{const[i,l]=z.useState(null),[a,s]=z.useState([]),[u,d]=z.useState(!1),{isLoggedIn:m}=dr();if(z.useEffect(()=>{if(e){const y=Z.getArticleById(e);if(y){l(y),Z.incrementViewCount(y.id);const x=Z.getArticlesByCategory(y.category).filter(k=>k.id!==y.id).slice(0,3);s(x)}window.scrollTo(0,0)}},[e]),!i)return o.jsxs("div",{className:"gn-article-not-found",children:[o.jsxs("button",{className:"gn-back-btn",onClick:t,children:[o.jsx(gi,{size:16})," Back to feed"]}),o.jsx("p",{children:"Article not found or has been deleted."})]});const h=()=>{navigator.clipboard.writeText(window.location.href),d(!0),setTimeout(()=>d(!1),2e3)},g=y=>new Date(y).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return o.jsxs("article",{className:"gn-article-detail animate-fade-in",children:[o.jsxs("div",{className:"gn-article-nav",children:[o.jsxs("button",{className:"gn-back-btn",onClick:t,children:[o.jsx(gi,{size:18}),o.jsx("span",{children:"Back to Top Stories"})]}),o.jsxs("div",{className:"gn-article-actions",children:[m&&o.jsxs("button",{className:"gn-action-btn gn-edit-btn",onClick:()=>r(i.id),children:[o.jsx(_c,{size:16}),o.jsx("span",{children:"Edit Post"})]}),o.jsxs("button",{className:"gn-action-btn",onClick:h,title:"Copy article link",children:[u?o.jsx(Yo,{size:16,className:"text-success"}):o.jsx(Uf,{size:16}),o.jsx("span",{children:u?"Copied!":"Share"})]})]})]}),o.jsxs("header",{className:"gn-article-header",children:[o.jsxs("div",{className:"gn-article-breadcrumb",children:[o.jsx("span",{className:"gn-category-chip",children:i.category.toUpperCase()}),i.breaking_flag&&o.jsx("span",{className:"gn-flag-tag breaking",children:"BREAKING"}),i.editors_pick_flag&&o.jsx("span",{className:"gn-flag-tag editors",children:"EDITOR'S PICK"})]}),o.jsx("h1",{className:"gn-article-title",children:i.title}),i.excerpt&&o.jsx("p",{className:"gn-article-dek",children:i.excerpt}),o.jsxs("div",{className:"gn-article-byline-bar",children:[o.jsx("div",{className:"gn-author-avatar",children:i.byline?i.byline[0]:"E"}),o.jsxs("div",{className:"gn-byline-info",children:[o.jsx("div",{className:"gn-author-name",children:i.byline}),o.jsxs("div",{className:"gn-pub-date",children:["Published ",g(i.published_at)," • ",i.reading_time||"4 min read"]})]}),o.jsxs("div",{className:"gn-view-badge",children:[o.jsx(kf,{size:14}),o.jsxs("span",{children:[i.view_count||1," views"]})]})]})]}),i.hero_image&&o.jsxs("figure",{className:"gn-article-hero",children:[o.jsx("img",{src:i.hero_image,alt:i.title}),i.caption&&o.jsx("figcaption",{className:"gn-hero-caption",children:i.caption})]}),o.jsx("div",{className:"gn-article-body",dangerouslySetInnerHTML:{__html:i.body}}),i.tags&&i.tags.length>0&&o.jsxs("div",{className:"gn-article-tags",children:[o.jsx("span",{className:"tags-label",children:"Topics:"}),i.tags.map((y,x)=>o.jsxs("span",{className:"gn-tag-pill",children:["#",y]},x))]}),o.jsx("hr",{className:"gn-article-divider"}),a.length>0&&o.jsxs("section",{className:"gn-related-section",children:[o.jsxs("h3",{className:"gn-related-heading",children:[o.jsx(Li,{size:18,className:"sparkle-icon"}),o.jsx("span",{children:"Related Coverage from Chronicle Desk"})]}),o.jsx("div",{className:"gn-related-grid",children:a.map(y=>o.jsx(mn,{article:y,variant:"standard",onOpenArticle:n},y.id))})]}),o.jsx("style",{children:`
        .gn-article-detail {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 32px;
          margin-bottom: 40px;
          box-shadow: var(--shadow-subtle);
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .gn-article-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .gn-back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-color);
          font-weight: 500;
          font-size: 14px;
          padding: 6px 12px;
          border-radius: 20px;
          transition: background-color 0.15s;
        }

        .gn-back-btn:hover {
          background-color: var(--accent-light);
        }

        .gn-article-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gn-action-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: background-color 0.15s;
        }

        .gn-action-btn:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-edit-btn {
          background-color: var(--accent-light);
          color: var(--accent-color);
          border-color: transparent;
        }

        .gn-article-header {
          margin-bottom: 24px;
        }

        .gn-article-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .gn-category-chip {
          font-size: 12px;
          font-weight: 700;
          color: var(--accent-color);
          background-color: var(--accent-light);
          padding: 4px 10px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .gn-flag-tag {
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          color: white;
        }

        .gn-flag-tag.breaking {
          background-color: #d93025;
        }

        .gn-flag-tag.editors {
          background-color: #fbbc04;
          color: #202124;
        }

        .gn-article-title {
          font-family: var(--font-sans);
          font-size: 32px;
          font-weight: 700;
          line-height: 1.25;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .gn-article-dek {
          font-size: 18px;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .gn-article-byline-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }

        .gn-author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--accent-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
        }

        .gn-byline-info {
          flex: 1;
        }

        .gn-author-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .gn-pub-date {
          font-size: 12px;
          color: var(--text-muted);
        }

        .gn-view-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: var(--text-muted);
          background-color: var(--bg-hover);
          padding: 4px 10px;
          border-radius: 12px;
        }

        .gn-article-hero {
          margin: 0 0 28px 0;
          border-radius: 12px;
          overflow: hidden;
        }

        .gn-article-hero img {
          width: 100%;
          max-height: 440px;
          object-fit: cover;
          display: block;
        }

        .gn-hero-caption {
          font-size: 13px;
          color: var(--text-secondary);
          padding: 8px 12px;
          background-color: var(--bg-hover);
          font-style: italic;
        }

        .gn-article-body {
          font-family: var(--font-sans);
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-primary);
        }

        .gn-article-body p {
          margin-bottom: 20px;
        }

        .gn-article-body h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 28px 0 14px 0;
        }

        .gn-article-body ul {
          margin: 0 0 20px 24px;
        }

        .gn-article-body li {
          margin-bottom: 8px;
        }

        .story-blockquote {
          border-left: 4px solid var(--accent-color);
          padding: 12px 20px;
          margin: 24px 0;
          background-color: var(--accent-light);
          font-style: italic;
          font-size: 18px;
          line-height: 1.5;
          border-radius: 0 8px 8px 0;
        }

        .gn-article-tags {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .tags-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .gn-tag-pill {
          font-size: 13px;
          color: var(--accent-color);
          background-color: var(--bg-hover);
          padding: 4px 10px;
          border-radius: 14px;
        }

        .gn-article-divider {
          border: none;
          border-top: 1px solid var(--border-color);
          margin: 32px 0;
        }

        .gn-related-section {
          margin-top: 24px;
        }

        .gn-related-heading {
          font-size: 18px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          color: var(--text-primary);
        }

        .gn-related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }

        @media (max-width: 600px) {
          .gn-article-detail {
            padding: 16px;
          }
          .gn-article-title {
            font-size: 24px;
          }
          .gn-article-dek {
            font-size: 15px;
          }
        }
      `})]})},sg=({query:e,results:t=[],onOpenArticle:n,onBackToHome:r})=>o.jsxs("div",{className:"gn-search-results-page animate-fade-in",children:[o.jsxs("div",{className:"gn-search-results-header",children:[o.jsxs("button",{className:"gn-back-btn",onClick:r,children:[o.jsx(gi,{size:18}),o.jsx("span",{children:"Back to Feed"})]}),o.jsxs("div",{className:"gn-search-meta",children:[o.jsxs("h2",{className:"gn-search-title",children:["Search results for ",o.jsxs("span",{className:"gn-query-text",children:['"',e,'"']})]}),o.jsxs("div",{className:"gn-search-count",children:["Found ",t.length," matching articles"]})]})]}),t.length===0?o.jsxs("div",{className:"gn-search-empty",children:[o.jsx(hi,{size:48,className:"empty-icon"}),o.jsxs("h3",{children:['No articles found matching "',e,'"']}),o.jsx("p",{children:"Try searching for different keywords, categories, or tech topics."})]}):o.jsx("div",{className:"gn-search-grid",children:t.map(i=>o.jsx(mn,{article:i,variant:"standard",onOpenArticle:n},i.id))}),o.jsx("style",{children:`
        .gn-search-results-page {
          max-width: 900px;
          margin: 0 auto;
        }

        .gn-search-results-header {
          margin-bottom: 24px;
        }

        .gn-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-color);
          font-weight: 500;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .gn-search-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-query-text {
          color: var(--accent-color);
        }

        .gn-search-count {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .gn-search-empty {
          text-align: center;
          padding: 60px 20px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
        }

        .empty-icon {
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .gn-search-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `})]}),ug=({onCreateArticle:e,onEditArticle:t,onOpenArticle:n})=>{const[r,i]=z.useState(Z.getArticles(!0)),[l,a]=z.useState("all"),[s,u]=z.useState(""),d=()=>{i(Z.getArticles(!0))},m=(p,c)=>{confirm(`Delete article "${c}"?`)&&(Z.deleteArticle(p),d())},h=(p,c)=>{const f=r.find(v=>v.id===p);f&&(Z.saveArticle({...f,[c]:!f[c]}),d())},g=r.filter(p=>{const c=l==="all"||l==="published"&&p.status==="published"||l==="drafts"&&p.status==="draft",f=p.title.toLowerCase().includes(s.toLowerCase())||p.category.toLowerCase().includes(s.toLowerCase());return c&&f}),y=r.reduce((p,c)=>p+(c.view_count||0),0),x=r.filter(p=>p.status==="published").length,k=r.filter(p=>p.status==="draft").length,A=p=>p?new Date(p).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"";return o.jsxs("div",{className:"gn-dashboard animate-fade-in",children:[o.jsxs("div",{className:"gn-dashboard-header",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"gn-dashboard-title",children:"Editorial Management CMS"}),o.jsx("p",{className:"gn-dashboard-sub",children:"Publish, curate, and review your original news publications."})]}),o.jsxs("button",{className:"gn-create-article-btn",onClick:e,children:[o.jsx(Cc,{size:18}),o.jsx("span",{children:"New Article"})]})]}),o.jsxs("div",{className:"gn-stats-grid",children:[o.jsxs("div",{className:"gn-stat-card",children:[o.jsx("div",{className:"gn-stat-icon blue",children:o.jsx(Sf,{size:20})}),o.jsxs("div",{children:[o.jsx("div",{className:"gn-stat-val",children:r.length}),o.jsx("div",{className:"gn-stat-lbl",children:"Total Articles"})]})]}),o.jsxs("div",{className:"gn-stat-card",children:[o.jsx("div",{className:"gn-stat-icon green",children:o.jsx(hf,{size:20})}),o.jsxs("div",{children:[o.jsx("div",{className:"gn-stat-val",children:x}),o.jsx("div",{className:"gn-stat-lbl",children:"Published"})]})]}),o.jsxs("div",{className:"gn-stat-card",children:[o.jsx("div",{className:"gn-stat-icon orange",children:o.jsx(jc,{size:20})}),o.jsxs("div",{children:[o.jsx("div",{className:"gn-stat-val",children:k}),o.jsx("div",{className:"gn-stat-lbl",children:"Drafts"})]})]}),o.jsxs("div",{className:"gn-stat-card",children:[o.jsx("div",{className:"gn-stat-icon purple",children:o.jsx(df,{size:20})}),o.jsxs("div",{children:[o.jsx("div",{className:"gn-stat-val",children:y.toLocaleString()}),o.jsx("div",{className:"gn-stat-lbl",children:"Total Read Views"})]})]})]}),o.jsxs("div",{className:"gn-dashboard-table-card",children:[o.jsxs("div",{className:"gn-table-toolbar",children:[o.jsxs("div",{className:"gn-table-tabs",children:[o.jsxs("button",{className:`gn-table-tab ${l==="all"?"active":""}`,onClick:()=>a("all"),children:["All (",r.length,")"]}),o.jsxs("button",{className:`gn-table-tab ${l==="published"?"active":""}`,onClick:()=>a("published"),children:["Published (",x,")"]}),o.jsxs("button",{className:`gn-table-tab ${l==="drafts"?"active":""}`,onClick:()=>a("drafts"),children:["Drafts (",k,")"]})]}),o.jsxs("div",{className:"gn-dashboard-search",children:[o.jsx(hi,{size:16}),o.jsx("input",{type:"text",placeholder:"Filter by title or section...",value:s,onChange:p=>u(p.target.value)})]})]}),o.jsx("div",{className:"gn-table-responsive",children:o.jsxs("table",{className:"gn-articles-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Article Headline"}),o.jsx("th",{children:"Category"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Flags"}),o.jsx("th",{children:"Views"}),o.jsx("th",{children:"Published"}),o.jsx("th",{className:"text-right",children:"Actions"})]})}),o.jsx("tbody",{children:g.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:7,className:"text-center py-4",children:"No articles found matching filters."})}):g.map(p=>o.jsxs("tr",{children:[o.jsx("td",{children:o.jsxs("div",{className:"gn-table-title-cell",children:[p.hero_image&&o.jsx("img",{src:p.hero_image,alt:"",className:"gn-table-thumb"}),o.jsx("span",{className:"gn-table-title-link",onClick:()=>n(p.id),children:p.title})]})}),o.jsx("td",{children:o.jsx("span",{className:"gn-table-cat-badge",children:p.category})}),o.jsx("td",{children:o.jsx("span",{className:`gn-status-pill ${p.status}`,children:p.status})}),o.jsx("td",{children:o.jsxs("div",{className:"gn-table-flags",children:[o.jsx("button",{className:`gn-flag-btn ${p.breaking_flag?"active breaking":""}`,onClick:()=>h(p.id,"breaking_flag"),title:"Toggle Breaking News",children:o.jsx(Xo,{size:14})}),o.jsx("button",{className:`gn-flag-btn ${p.featured_flag?"active featured":""}`,onClick:()=>h(p.id,"featured_flag"),title:"Toggle Top Story Lead",children:o.jsx(Li,{size:14})}),o.jsx("button",{className:`gn-flag-btn ${p.editors_pick_flag?"active editors":""}`,onClick:()=>h(p.id,"editors_pick_flag"),title:"Toggle Editor's Pick",children:o.jsx(Go,{size:14})})]})}),o.jsx("td",{children:p.view_count||0}),o.jsx("td",{children:A(p.published_at)}),o.jsx("td",{className:"text-right",children:o.jsxs("div",{className:"gn-table-actions",children:[o.jsx("button",{className:"gn-icon-action",onClick:()=>n(p.id),title:"Preview Article",children:o.jsx(wf,{size:16})}),o.jsx("button",{className:"gn-icon-action",onClick:()=>t(p.id),title:"Edit Article",children:o.jsx(_c,{size:16})}),o.jsx("button",{className:"gn-icon-action danger",onClick:()=>m(p.id,p.title),title:"Delete Article",children:o.jsx(zc,{size:16})})]})})]},p.id))})]})})]}),o.jsx("style",{children:`
        .gn-dashboard {
          max-width: 1100px;
          margin: 0 auto;
        }

        .gn-dashboard-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .gn-dashboard-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-dashboard-sub {
          font-size: 14px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .gn-create-article-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 24px;
          background-color: var(--accent-color);
          color: white;
          font-weight: 600;
          font-size: 14px;
          transition: background-color 0.15s;
        }

        .gn-create-article-btn:hover {
          background-color: var(--accent-hover);
        }

        .gn-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .gn-stat-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: var(--shadow-subtle);
        }

        .gn-stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gn-stat-icon.blue { background-color: var(--accent-light); color: var(--accent-color); }
        .gn-stat-icon.green { background-color: #e6f4ea; color: #137333; }
        .gn-stat-icon.orange { background-color: #feefc3; color: #b06000; }
        .gn-stat-icon.purple { background-color: #f3e8fd; color: #9334e8; }

        .gn-stat-val {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-stat-lbl {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .gn-dashboard-table-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          box-shadow: var(--shadow-subtle);
          overflow: hidden;
        }

        .gn-table-toolbar {
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          gap: 16px;
          flex-wrap: wrap;
        }

        .gn-table-tabs {
          display: flex;
          gap: 8px;
        }

        .gn-table-tab {
          padding: 6px 14px;
          border-radius: 16px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.15s;
        }

        .gn-table-tab.active {
          background-color: var(--accent-light);
          color: var(--accent-color);
          font-weight: 600;
        }

        .gn-dashboard-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--bg-main);
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          width: 260px;
        }

        .gn-dashboard-search input {
          border: none;
          background: transparent;
          font-size: 13px;
          color: var(--text-primary);
          outline: none;
          width: 100%;
        }

        .gn-table-responsive {
          overflow-x: auto;
        }

        .gn-articles-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 14px;
        }

        .gn-articles-table th {
          padding: 12px 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
          border-bottom: 1px solid var(--border-color);
          background-color: var(--bg-main);
        }

        .gn-articles-table td {
          padding: 14px 20px;
          border-bottom: 1px solid var(--border-subtle);
          color: var(--text-primary);
          vertical-align: middle;
        }

        .gn-table-title-cell {
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 320px;
        }

        .gn-table-thumb {
          width: 44px;
          height: 44px;
          border-radius: 6px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .gn-table-title-link {
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gn-table-title-link:hover {
          color: var(--accent-color);
        }

        .gn-table-cat-badge {
          font-size: 12px;
          text-transform: uppercase;
          background-color: var(--bg-hover);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .gn-status-pill {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 8px;
          border-radius: 12px;
        }

        .gn-status-pill.published { background-color: #e6f4ea; color: #137333; }
        .gn-status-pill.draft { background-color: #feefc3; color: #b06000; }

        .gn-table-flags {
          display: flex;
          gap: 4px;
        }

        .gn-flag-btn {
          padding: 4px;
          border-radius: 4px;
          color: var(--border-color);
        }

        .gn-flag-btn.active.breaking { color: #d93025; }
        .gn-flag-btn.active.featured { color: #1a73e8; }
        .gn-flag-btn.active.editors { color: #fbbc04; }

        .gn-table-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
        }

        .gn-icon-action {
          padding: 6px;
          border-radius: 50%;
          color: var(--text-secondary);
          transition: background-color 0.15s;
        }

        .gn-icon-action:hover {
          background-color: var(--bg-hover);
          color: var(--text-primary);
        }

        .gn-icon-action.danger:hover {
          background-color: #fce8e6;
          color: #c5221f;
        }
      `})]})},cg=({onSelectImage:e,onClose:t})=>{const[n,r]=z.useState(Z.getMediaAssets()),[i,l]=z.useState(""),[a,s]=z.useState(""),u=d=>{if(d.preventDefault(),i.trim()){const m=Z.saveMediaAsset({name:a.trim()||"Uploaded Media",url:i.trim(),category:"general"});r([m,...n]),l(""),s("")}};return o.jsx("div",{className:"gn-modal-overlay",children:o.jsxs("div",{className:"gn-media-card animate-fade-in",children:[o.jsxs("div",{className:"gn-media-header",children:[o.jsx("h3",{children:"Media Library & Presets"}),o.jsx("button",{className:"gn-close-modal-btn",onClick:t,children:o.jsx(Jo,{size:18})})]}),o.jsxs("form",{onSubmit:u,className:"gn-media-add-form",children:[o.jsx("input",{type:"url",placeholder:"Paste Image URL (https://...)",required:!0,value:i,onChange:d=>l(d.target.value)}),o.jsx("input",{type:"text",placeholder:"Caption / Name (Optional)",value:a,onChange:d=>s(d.target.value)}),o.jsxs("button",{type:"submit",className:"gn-add-media-btn",children:[o.jsx(Cc,{size:16})," Add Image"]})]}),o.jsx("div",{className:"gn-media-grid",children:n.map(d=>o.jsxs("div",{className:"gn-media-item",onClick:()=>{e(d.url),t()},children:[o.jsx("img",{src:d.url,alt:d.name}),o.jsxs("div",{className:"gn-media-overlay",children:[o.jsx("span",{children:d.name}),o.jsx(Yo,{size:18})]})]},d.id))}),o.jsx("style",{children:`
          .gn-media-card {
            background-color: var(--bg-surface);
            border-radius: var(--card-radius);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-modal);
            width: 100%;
            max-width: 680px;
            padding: 24px;
            max-height: 80vh;
            display: flex;
            flex-direction: column;
          }

          .gn-media-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
          }

          .gn-media-add-form {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
          }

          .gn-media-add-form input {
            flex: 1;
            padding: 8px 12px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            background-color: var(--bg-main);
            color: var(--text-primary);
            font-size: 13px;
          }

          .gn-add-media-btn {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 8px 16px;
            border-radius: 8px;
            background-color: var(--accent-color);
            color: white;
            font-size: 13px;
            font-weight: 600;
          }

          .gn-media-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 12px;
            overflow-y: auto;
            padding-right: 4px;
          }

          .gn-media-item {
            position: relative;
            height: 100px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.15s;
          }

          .gn-media-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .gn-media-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.15s;
            padding: 4px;
            text-align: center;
            font-size: 11px;
          }

          .gn-media-item:hover .gn-media-overlay {
            opacity: 1;
          }
        `})]})})},dg=({articleId:e,onSaveSuccess:t,onCancel:n})=>{const r=Z.getCategories(),[i,l]=z.useState({title:"",slug:"",excerpt:"",body:"",hero_image:"",caption:"",category:"technology",tags:[],status:"published",byline:"Editor-in-Chief",reading_time:"4 min read",featured_flag:!1,breaking_flag:!1,editors_pick_flag:!1,published_at:new Date().toISOString().slice(0,16)}),[a,s]=z.useState(""),[u,d]=z.useState(!1),[m,h]=z.useState(!1);z.useEffect(()=>{if(e){const c=Z.getArticleById(e);c&&l({...c,tags:c.tags||[],published_at:c.published_at?new Date(c.published_at).toISOString().slice(0,16):new Date().toISOString().slice(0,16)})}},[e]);const g=c=>{const f=c.target.value;l(v=>({...v,title:f,slug:v.id?v.slug:Z.generateSlug(f)}))},y=c=>{if((c.key==="Enter"||c.key===",")&&a.trim()){c.preventDefault();const f=a.trim().replace(/^#/,"");i.tags.includes(f)||l(v=>({...v,tags:[...v.tags,f]})),s("")}},x=c=>{l(f=>({...f,tags:f.tags.filter(v=>v!==c)}))},k=c=>{const f=document.getElementById("gn-body-textarea");if(!f)return;const v=f.selectionStart,S=f.selectionEnd,b=f.value;let j="";c==="bold"&&(j=`<strong>${b.substring(v,S)||"bold text"}</strong>`),c==="h3"&&(j=`<h3>${b.substring(v,S)||"Subheading Title"}</h3>`),c==="quote"&&(j=`<blockquote class="story-blockquote">${b.substring(v,S)||"Pull quote text here..."}</blockquote>`),c==="paragraph"&&(j=`<p>${b.substring(v,S)||"New paragraph text..."}</p>`),c==="video"&&(j='<div className="video-embed-frame"><iframe width="100%" height="365" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe></div>');const N=b.substring(0,v)+j+b.substring(S);l(O=>({...O,body:N}))},A=(c,f)=>{if(c&&c.preventDefault(),!i.title.trim()){alert("Please enter an article title.");return}const v={...i,status:f||i.status,published_at:new Date(i.published_at).toISOString()};Z.saveArticle(v),h(!0),setTimeout(()=>{h(!1),t()},600)},p=()=>{i.id&&confirm("Are you sure you want to delete this article?")&&(Z.deleteArticle(i.id),t())};return o.jsxs("div",{className:"gn-editor-page animate-fade-in",children:[o.jsxs("div",{className:"gn-editor-header",children:[o.jsxs("button",{className:"gn-back-btn",onClick:n,children:[o.jsx(gi,{size:18}),o.jsx("span",{children:"Back to Dashboard"})]}),o.jsxs("div",{className:"gn-editor-header-actions",children:[i.id&&o.jsxs("button",{className:"gn-btn-danger",onClick:p,children:[o.jsx(zc,{size:16})," Delete"]}),o.jsx("button",{type:"button",className:"gn-btn-secondary",onClick:c=>A(c,"draft"),children:"Save as Draft"}),o.jsxs("button",{type:"button",className:"gn-btn-primary",onClick:c=>A(c,"published"),children:[o.jsx(Ff,{size:16}),o.jsx("span",{children:"Publish Article"})]})]})]}),m&&o.jsxs("div",{className:"gn-alert-success",children:[o.jsx(Yo,{size:18}),o.jsx("span",{children:"Article saved successfully!"})]}),o.jsxs("form",{className:"gn-editor-grid",onSubmit:c=>A(c),children:[o.jsxs("div",{className:"gn-editor-main-col",children:[o.jsxs("div",{className:"gn-field-card",children:[o.jsx("input",{type:"text",className:"gn-input-title",placeholder:"Article Headline...",required:!0,value:i.title,onChange:g}),o.jsxs("div",{className:"gn-slug-row",children:[o.jsx("span",{className:"gn-slug-prefix",children:"Permalink: /article/"}),o.jsx("input",{type:"text",className:"gn-input-slug",value:i.slug,onChange:c=>l({...i,slug:c.target.value})})]})]}),o.jsxs("div",{className:"gn-field-card",children:[o.jsx("label",{className:"gn-field-label",children:"Dek / Excerpt (Summary)"}),o.jsx("textarea",{className:"gn-input-excerpt",rows:3,placeholder:"Brief summary appearing under headline on Google News cards...",value:i.excerpt,onChange:c=>l({...i,excerpt:c.target.value})})]}),o.jsxs("div",{className:"gn-field-card",children:[o.jsxs("div",{className:"gn-editor-toolbar",children:[o.jsx("span",{className:"gn-field-label",children:"Article Body Content"}),o.jsxs("div",{className:"gn-toolbar-btns",children:[o.jsx("button",{type:"button",onClick:()=>k("paragraph"),children:"Paragraph"}),o.jsxs("button",{type:"button",onClick:()=>k("bold"),children:[o.jsx(pf,{size:14})," Bold"]}),o.jsxs("button",{type:"button",onClick:()=>k("h3"),children:[o.jsx(Cf,{size:14})," Subhead"]}),o.jsxs("button",{type:"button",onClick:()=>k("quote"),children:[o.jsx(Of,{size:14})," Quote"]}),o.jsxs("button",{type:"button",onClick:()=>k("video"),children:[o.jsx(Qf,{size:14})," Embed Video"]})]})]}),o.jsx("textarea",{id:"gn-body-textarea",className:"gn-input-body",rows:16,placeholder:"Write full article body text in rich HTML or Markdown paragraph tags...",required:!0,value:i.body,onChange:c=>l({...i,body:c.target.value})})]})]}),o.jsxs("div",{className:"gn-editor-side-col",children:[o.jsxs("div",{className:"gn-side-card",children:[o.jsx("h4",{children:"Publishing Workflow"}),o.jsxs("div",{className:"gn-form-row",children:[o.jsx("label",{children:"Status"}),o.jsxs("select",{value:i.status,onChange:c=>l({...i,status:c.target.value}),children:[o.jsx("option",{value:"published",children:"Published"}),o.jsx("option",{value:"draft",children:"Draft"})]})]}),o.jsxs("div",{className:"gn-form-row",children:[o.jsx("label",{children:"Publish Date & Time"}),o.jsx("input",{type:"datetime-local",value:i.published_at,onChange:c=>l({...i,published_at:c.target.value})})]}),o.jsxs("div",{className:"gn-form-row",children:[o.jsx("label",{children:"Author / Byline"}),o.jsx("input",{type:"text",value:i.byline,onChange:c=>l({...i,byline:c.target.value})})]})]}),o.jsxs("div",{className:"gn-side-card",children:[o.jsx("h4",{children:"Editorial Flags"}),o.jsxs("div",{className:"gn-flags-list",children:[o.jsxs("label",{className:"gn-checkbox-row",children:[o.jsx("input",{type:"checkbox",checked:i.breaking_flag,onChange:c=>l({...i,breaking_flag:c.target.checked})}),o.jsx(Xo,{size:16,className:"flag-icon breaking"}),o.jsx("span",{children:"Breaking News Banner"})]}),o.jsxs("label",{className:"gn-checkbox-row",children:[o.jsx("input",{type:"checkbox",checked:i.featured_flag,onChange:c=>l({...i,featured_flag:c.target.checked})}),o.jsx(Li,{size:16,className:"flag-icon featured"}),o.jsx("span",{children:"Lead Hero Top Story"})]}),o.jsxs("label",{className:"gn-checkbox-row",children:[o.jsx("input",{type:"checkbox",checked:i.editors_pick_flag,onChange:c=>l({...i,editors_pick_flag:c.target.checked})}),o.jsx(Go,{size:16,className:"flag-icon editors"}),o.jsx("span",{children:"Editor's Pick"})]})]})]}),o.jsxs("div",{className:"gn-side-card",children:[o.jsx("h4",{children:"Category & Tags"}),o.jsxs("div",{className:"gn-form-row",children:[o.jsx("label",{children:"Section Category"}),o.jsx("select",{value:i.category,onChange:c=>l({...i,category:c.target.value}),children:r.map(c=>o.jsx("option",{value:c.slug,children:c.name},c.id))})]}),o.jsxs("div",{className:"gn-form-row",children:[o.jsx("label",{children:"Tags (Press Enter)"}),o.jsx("input",{type:"text",placeholder:"Add tag and press Enter",value:a,onChange:c=>s(c.target.value),onKeyDown:y}),o.jsx("div",{className:"gn-tags-wrapper",children:i.tags.map((c,f)=>o.jsxs("span",{className:"gn-tag-chip",children:["#",c,o.jsx("button",{type:"button",onClick:()=>x(c),children:"×"})]},f))})]})]}),o.jsxs("div",{className:"gn-side-card",children:[o.jsx("h4",{children:"Hero Image"}),i.hero_image&&o.jsx("div",{className:"gn-image-preview",children:o.jsx("img",{src:i.hero_image,alt:"Hero Preview"})}),o.jsx("div",{className:"gn-form-row",children:o.jsx("input",{type:"text",placeholder:"Image URL...",value:i.hero_image,onChange:c=>l({...i,hero_image:c.target.value})})}),o.jsxs("button",{type:"button",className:"gn-btn-preset-media",onClick:()=>d(!0),children:[o.jsx(zf,{size:16})," Pick from Media Library"]}),o.jsxs("div",{className:"gn-form-row",style:{marginTop:"10px"},children:[o.jsx("label",{children:"Photo Caption / Credit"}),o.jsx("input",{type:"text",placeholder:"e.g. Courtesy of NASA/JWST",value:i.caption,onChange:c=>l({...i,caption:c.target.value})})]})]})]})]}),u&&o.jsx(cg,{onSelectImage:c=>l(f=>({...f,hero_image:c})),onClose:()=>d(!1)}),o.jsx("style",{children:`
        .gn-editor-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gn-editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .gn-editor-header-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .gn-btn-primary {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 20px;
          background-color: var(--accent-color);
          color: white;
          font-weight: 600;
          font-size: 14px;
        }

        .gn-btn-secondary {
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-surface);
          color: var(--text-primary);
          font-size: 14px;
        }

        .gn-btn-danger {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 8px 14px;
          border-radius: 20px;
          background-color: #fce8e6;
          color: #c5221f;
          font-size: 13px;
          font-weight: 500;
        }

        .gn-alert-success {
          background-color: #e6f4ea;
          color: #137333;
          padding: 12px 16px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .gn-editor-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
        }

        .gn-field-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 20px;
          margin-bottom: 20px;
        }

        .gn-input-title {
          width: 100%;
          border: none;
          font-size: 26px;
          font-weight: 700;
          color: var(--text-primary);
          outline: none;
          background: transparent;
        }

        .gn-slug-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 12px;
          color: var(--text-muted);
        }

        .gn-input-slug {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 12px;
          color: var(--accent-color);
          outline: none;
        }

        .gn-field-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 8px;
        }

        .gn-input-excerpt {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-main);
          color: var(--text-primary);
          font-size: 14px;
          outline: none;
        }

        .gn-editor-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .gn-toolbar-btns {
          display: flex;
          gap: 6px;
        }

        .gn-toolbar-btns button {
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          background-color: var(--bg-hover);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .gn-input-body {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-main);
          color: var(--text-primary);
          font-size: 15px;
          line-height: 1.6;
          outline: none;
          font-family: monospace;
        }

        .gn-side-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: var(--card-radius);
          padding: 16px;
          margin-bottom: 20px;
        }

        .gn-side-card h4 {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 8px;
        }

        .gn-form-row {
          margin-bottom: 14px;
        }

        .gn-form-row label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .gn-form-row input, .gn-form-row select {
          width: 100%;
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--bg-main);
          color: var(--text-primary);
          font-size: 13px;
        }

        .gn-flags-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .gn-checkbox-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-primary);
          cursor: pointer;
        }

        .flag-icon.breaking { color: #d93025; }
        .flag-icon.featured { color: #1a73e8; }
        .flag-icon.editors { color: #fbbc04; }

        .gn-tags-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }

        .gn-tag-chip {
          font-size: 12px;
          background-color: var(--accent-light);
          color: var(--accent-color);
          padding: 2px 8px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .gn-tag-chip button {
          color: var(--accent-color);
          font-size: 14px;
        }

        .gn-image-preview {
          width: 100%;
          height: 140px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 12px;
        }

        .gn-image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gn-btn-preset-media {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px;
          border-radius: 8px;
          background-color: var(--bg-hover);
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 500;
        }

        @media (max-width: 860px) {
          .gn-editor-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},pg=({onClose:e})=>{const{login:t}=dr(),[n,r]=z.useState("admin"),[i,l]=z.useState(""),[a,s]=z.useState(""),[u,d]=z.useState(!1),m=h=>{h.preventDefault(),d(!0),s(""),setTimeout(()=>{const g=t(n,i);g.success||s(g.message),d(!1)},400)};return o.jsx("div",{className:"gn-modal-overlay",children:o.jsxs("div",{className:"gn-login-card animate-fade-in",children:[o.jsxs("div",{className:"gn-login-header",children:[o.jsx("div",{className:"gn-login-badge",children:o.jsx(Tf,{size:20})}),o.jsx("h3",{children:"Editorial Admin Login"}),o.jsx("p",{children:"Sign in to manage news coverage and site publications."}),e&&o.jsx("button",{className:"gn-close-modal-btn",onClick:e,children:o.jsx(Jo,{size:18})})]}),a&&o.jsxs("div",{className:"gn-login-error",children:[o.jsx(sf,{size:16}),o.jsx("span",{children:a})]}),o.jsxs("form",{onSubmit:m,className:"gn-login-form",children:[o.jsxs("div",{className:"gn-form-group",children:[o.jsx("label",{children:"Username / Email"}),o.jsx("input",{type:"text",required:!0,value:n,onChange:h=>r(h.target.value),placeholder:"admin"})]}),o.jsxs("div",{className:"gn-form-group",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",required:!0,value:i,onChange:h=>l(h.target.value),placeholder:"admin123"})]}),o.jsx("div",{className:"gn-login-hint",children:o.jsxs("span",{children:["Default Admin Credentials: ",o.jsx("code",{children:"admin"})," / ",o.jsx("code",{children:"admin123"})]})}),o.jsx("button",{type:"submit",className:"gn-login-submit-btn",disabled:u,children:u?"Authenticating...":"Sign in to Admin CMS"})]}),o.jsx("style",{children:`
          .gn-modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1200;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px;
          }

          .gn-login-card {
            background-color: var(--bg-surface);
            border-radius: var(--card-radius);
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-modal);
            width: 100%;
            max-width: 400px;
            padding: 28px;
            position: relative;
          }

          .gn-login-header {
            text-align: center;
            margin-bottom: 20px;
          }

          .gn-login-badge {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: var(--accent-light);
            color: var(--accent-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 12px auto;
          }

          .gn-login-header h3 {
            font-size: 20px;
            font-weight: 700;
            color: var(--text-primary);
          }

          .gn-login-header p {
            font-size: 13px;
            color: var(--text-secondary);
            margin-top: 4px;
          }

          .gn-close-modal-btn {
            position: absolute;
            top: 16px;
            right: 16px;
            color: var(--text-muted);
            padding: 4px;
          }

          .gn-login-error {
            background-color: #fce8e6;
            color: #c5221f;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 13px;
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
          }

          .gn-form-group {
            margin-bottom: 16px;
            text-align: left;
          }

          .gn-form-group label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 6px;
          }

          .gn-form-group input {
            width: 100%;
            padding: 10px 14px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            background-color: var(--bg-main);
            color: var(--text-primary);
            font-size: 14px;
            outline: none;
          }

          .gn-form-group input:focus {
            border-color: var(--accent-color);
            background-color: var(--bg-surface);
          }

          .gn-login-hint {
            font-size: 12px;
            color: var(--text-muted);
            margin-bottom: 20px;
            text-align: center;
          }

          .gn-login-hint code {
            background-color: var(--bg-hover);
            padding: 2px 6px;
            border-radius: 4px;
            color: var(--accent-color);
          }

          .gn-login-submit-btn {
            width: 100%;
            padding: 12px;
            border-radius: 24px;
            background-color: var(--accent-color);
            color: white;
            font-size: 14px;
            font-weight: 600;
            transition: background-color 0.15s;
          }

          .gn-login-submit-btn:hover {
            background-color: var(--accent-hover);
          }
        `})]})})};function fg(){const{isLoggedIn:e,isAuthModalOpen:t,closeAuthModal:n}=dr(),[r,i]=z.useState([]),[l,a]=z.useState([]),[s,u]=z.useState("home"),[d,m]=z.useState("home"),[h,g]=z.useState([]),[y,x]=z.useState(null),[k,A]=z.useState(""),[p,c]=z.useState([]),[f,v]=z.useState(!1),[S,b]=z.useState(!1),[j,N]=z.useState(6);z.useEffect(()=>{Z.init(),i(Z.getCategories()),O()},[d,s]);const O=()=>{const L=Z.getArticles(!1);a(L)};z.useEffect(()=>{S?document.body.classList.add("dark-theme"):document.body.classList.remove("dark-theme")},[S]);const T=L=>{g(ie=>[...ie,d]),m(L)},G=()=>{g(L=>{if(L.length===0)return m("home"),L;const ie=L[L.length-1];return m(ie),L.slice(0,-1)})};z.useEffect(()=>{const L=ie=>{var ea;const Ae=ie.target,Pi=(ea=Ae==null?void 0:Ae.tagName)==null?void 0:ea.toLowerCase(),Tc=Pi==="input"||Pi==="textarea"||Pi==="select"||(Ae==null?void 0:Ae.isContentEditable);ie.key==="Backspace"&&!Tc&&d!=="home"&&(ie.preventDefault(),G())};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[d,G]);const I=L=>{x(L),T("article"),window.scrollTo(0,0)},ke=L=>{A(L);const ie=Z.searchArticles(L,!1);c(ie),T("search"),window.scrollTo(0,0)},He=L=>{u(L),T("home"),N(6),window.scrollTo(0,0)},pr=L=>{x(L),T("admin-editor"),window.scrollTo(0,0)},wn=()=>{x(null),T("admin-editor"),window.scrollTo(0,0)},ot=s==="home"||s==="all"?l:l.filter(L=>L.category.toLowerCase()===s.toLowerCase()),C=l.find(L=>L.breaking_flag),M=ot.find(L=>L.featured_flag)||ot[0],P=M?l.filter(L=>L.id!==M.id&&L.category===M.category).slice(0,3):[],V=l.filter(L=>L.category==="technology"),Y=l.filter(L=>L.category==="world"),_t=l.filter(L=>L.category==="business"),Ve=l.filter(L=>L.category==="sports");return o.jsxs("div",{className:"app-layout",children:[o.jsx(Xf,{onToggleSidebar:()=>v(!f),currentCategory:s,onSelectCategory:He,onOpenArticle:I,onSearchSubmit:ke,currentView:d,setCurrentView:T,darkMode:S,setDarkMode:b}),o.jsx(Jf,{categories:r,activeCategory:s,onSelectCategory:He,isOpen:f,onClose:()=>v(!1),currentView:d,setCurrentView:T}),o.jsx("div",{className:"main-content-wrapper",children:o.jsxs("main",{className:"content-body",style:{marginLeft:"var(--sidebar-width)"},children:[t&&o.jsx(pg,{onClose:n}),d==="article"&&o.jsx(ag,{articleId:y,onBack:G,onOpenArticle:I,onEditArticle:pr}),d==="search"&&o.jsx(sg,{query:k,results:p,onOpenArticle:I,onBackToHome:G}),d==="admin-dashboard"&&o.jsx(ug,{onCreateArticle:wn,onEditArticle:pr,onOpenArticle:I}),d==="admin-editor"&&o.jsx(dg,{articleId:y,onSaveSuccess:()=>{O(),T("admin-dashboard")},onCancel:()=>T("admin-dashboard")}),d==="home"&&o.jsxs("div",{className:"gn-feed-view animate-fade-in",children:[o.jsx(eg,{categories:r,activeCategory:s,onSelectCategory:He}),C&&o.jsx(tg,{article:C,onOpenArticle:I}),s!=="home"&&o.jsxs("div",{className:"gn-category-title-head",children:[o.jsxs("h2",{children:[s.toUpperCase()," COVERAGE"]}),o.jsxs("p",{children:["Latest stories and background context in ",s,"."]})]}),o.jsxs("div",{className:"gn-feed-grid",children:[o.jsxs("div",{className:"gn-feed-main-column",children:[M&&o.jsx(ng,{article:M,relatedArticles:P,onOpenArticle:I}),s==="home"?o.jsxs(o.Fragment,{children:[V.length>0&&o.jsx(Tr,{title:"Technology & Innovation",categorySlug:"technology",articles:V,onSelectCategory:He,onOpenArticle:I}),Y.length>0&&o.jsx(Tr,{title:"World News",categorySlug:"world",articles:Y,onSelectCategory:He,onOpenArticle:I}),_t.length>0&&o.jsx(Tr,{title:"Business & Markets",categorySlug:"business",articles:_t,onSelectCategory:He,onOpenArticle:I}),Ve.length>0&&o.jsx(Tr,{title:"Sports Coverage",categorySlug:"sports",articles:Ve,onSelectCategory:He,onOpenArticle:I})]}):o.jsxs("div",{className:"gn-category-feed-list",children:[ot.slice(0,j).map(L=>o.jsx(mn,{article:L,variant:"standard",onOpenArticle:I},L.id)),j<ot.length&&o.jsx("button",{className:"gn-load-more-btn",onClick:()=>N(L=>L+6),children:"Load More Coverage"})]})]}),o.jsxs("div",{className:"gn-feed-right-column",children:[o.jsx(og,{}),o.jsx(rg,{articles:l,onOpenArticle:I})]})]})]})]})}),o.jsx("style",{children:`
        .gn-feed-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
          align-items: start;
        }

        .gn-category-title-head {
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .gn-category-title-head h2 {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .gn-category-title-head p {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .gn-category-feed-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gn-load-more-btn {
          width: 100%;
          padding: 12px;
          border-radius: 24px;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-color);
          color: var(--accent-color);
          font-size: 14px;
          font-weight: 600;
          margin-top: 12px;
          transition: background-color 0.15s;
        }

        .gn-load-more-btn:hover {
          background-color: var(--accent-light);
        }

        @media (max-width: 960px) {
          .gn-feed-grid {
            grid-template-columns: 1fr;
          }
          .gn-feed-right-column {
            order: 2;
          }
        }

        @media (max-width: 768px) {
          .content-body {
            margin-left: 0 !important;
          }
        }
      `})]})}function gg(){return o.jsx(Yf,{children:o.jsx(fg,{})})}sl.createRoot(document.getElementById("root")).render(o.jsx(qc.StrictMode,{children:o.jsx(gg,{})}));
