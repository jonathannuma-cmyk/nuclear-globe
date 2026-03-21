(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gm={exports:{}},Cl={},vm={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),uv=Symbol.for("react.portal"),dv=Symbol.for("react.fragment"),fv=Symbol.for("react.strict_mode"),hv=Symbol.for("react.profiler"),pv=Symbol.for("react.provider"),mv=Symbol.for("react.context"),gv=Symbol.for("react.forward_ref"),vv=Symbol.for("react.suspense"),_v=Symbol.for("react.memo"),yv=Symbol.for("react.lazy"),Tf=Symbol.iterator;function xv(t){return t===null||typeof t!="object"?null:(t=Tf&&t[Tf]||t["@@iterator"],typeof t=="function"?t:null)}var _m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ym=Object.assign,xm={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=xm,this.updater=n||_m}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sm(){}Sm.prototype=Ls.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=xm,this.updater=n||_m}var hd=fd.prototype=new Sm;hd.constructor=fd;ym(hd,Ls.prototype);hd.isPureReactComponent=!0;var wf=Array.isArray,Mm=Object.prototype.hasOwnProperty,pd={current:null},Em={key:!0,ref:!0,__self:!0,__source:!0};function Tm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Mm.call(e,i)&&!Em.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ra,type:t,key:s,ref:a,props:r,_owner:pd.current}}function Sv(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function md(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function Mv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Af=/\/+/g;function Jl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Mv(""+t.key):e.toString(36)}function Do(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ra:case uv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Jl(a,0):i,wf(r)?(n="",t!=null&&(n=t.replace(Af,"$&/")+"/"),Do(r,e,n,"",function(c){return c})):r!=null&&(md(r)&&(r=Sv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Af,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",wf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Jl(s,o);a+=Do(s,e,n,l,r)}else if(l=xv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Jl(s,o++),a+=Do(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ha(t,e,n){if(t==null)return t;var i=[],r=0;return Do(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Io={transition:null},Tv={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Io,ReactCurrentOwner:pd};function wm(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ls;Ye.Fragment=dv;Ye.Profiler=hv;Ye.PureComponent=fd;Ye.StrictMode=fv;Ye.Suspense=vv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tv;Ye.act=wm;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ym({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=pd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Mm.call(e,l)&&!Em.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:a}};Ye.createContext=function(t){return t={$$typeof:mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pv,_context:t},t.Consumer=t};Ye.createElement=Tm;Ye.createFactory=function(t){var e=Tm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:gv,render:t}};Ye.isValidElement=md;Ye.lazy=function(t){return{$$typeof:yv,_payload:{_status:-1,_result:t},_init:Ev}};Ye.memo=function(t,e){return{$$typeof:_v,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Io.transition;Io.transition={};try{t()}finally{Io.transition=e}};Ye.unstable_act=wm;Ye.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Ye.useContext=function(t){return Zt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Ye.useId=function(){return Zt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Zt.current.useRef(t)};Ye.useState=function(t){return Zt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Zt.current.useTransition()};Ye.version="18.3.1";vm.exports=Ye;var be=vm.exports;const wv=cv(be);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=be,Cv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,bv=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lv={key:!0,ref:!0,__self:!0,__source:!0};function Am(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Pv.call(e,i)&&!Lv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Cv,type:t,key:s,ref:a,props:r,_owner:bv.current}}Cl.Fragment=Rv;Cl.jsx=Am;Cl.jsxs=Am;gm.exports=Cl;var U=gm.exports,lu={},Cm={exports:{}},hn={},Rm={exports:{}},Pm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,ne){var re=F.length;F.push(ne);e:for(;0<re;){var q=re-1>>>1,me=F[q];if(0<r(me,ne))F[q]=ne,F[re]=me,re=q;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var ne=F[0],re=F.pop();if(re!==ne){F[0]=re;e:for(var q=0,me=F.length,Ce=me>>>1;q<Ce;){var Y=2*(q+1)-1,oe=F[Y],ve=Y+1,pe=F[ve];if(0>r(oe,re))ve<me&&0>r(pe,oe)?(F[q]=pe,F[ve]=re,q=ve):(F[q]=oe,F[Y]=re,q=Y);else if(ve<me&&0>r(pe,re))F[q]=pe,F[ve]=re,q=ve;else break e}}return ne}function r(F,ne){var re=F.sortIndex-ne.sortIndex;return re!==0?re:F.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(F){for(var ne=n(c);ne!==null;){if(ne.callback===null)i(c);else if(ne.startTime<=F)i(c),ne.sortIndex=ne.expirationTime,e(l,ne);else break;ne=n(c)}}function x(F){if(y=!1,g(F),!_)if(n(l)!==null)_=!0,$(C);else{var ne=n(c);ne!==null&&ie(x,ne.startTime-F)}}function C(F,ne){_=!1,y&&(y=!1,u(R),R=-1),p=!0;var re=f;try{for(g(ne),h=n(l);h!==null&&(!(h.expirationTime>ne)||F&&!L());){var q=h.callback;if(typeof q=="function"){h.callback=null,f=h.priorityLevel;var me=q(h.expirationTime<=ne);ne=t.unstable_now(),typeof me=="function"?h.callback=me:h===n(l)&&i(l),g(ne)}else i(l);h=n(l)}if(h!==null)var Ce=!0;else{var Y=n(c);Y!==null&&ie(x,Y.startTime-ne),Ce=!1}return Ce}finally{h=null,f=re,p=!1}}var w=!1,A=null,R=-1,M=5,S=-1;function L(){return!(t.unstable_now()-S<M)}function H(){if(A!==null){var F=t.unstable_now();S=F;var ne=!0;try{ne=A(!0,F)}finally{ne?B():(w=!1,A=null)}}else w=!1}var B;if(typeof v=="function")B=function(){v(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ee=K.port2;K.port1.onmessage=H,B=function(){ee.postMessage(null)}}else B=function(){m(H,0)};function $(F){A=F,w||(w=!0,B())}function ie(F,ne){R=m(function(){F(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,$(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var ne=3;break;default:ne=f}var re=f;f=ne;try{return F()}finally{f=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,ne){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var re=f;f=F;try{return ne()}finally{f=re}},t.unstable_scheduleCallback=function(F,ne,re){var q=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?q+re:q):re=q,F){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=re+me,F={id:d++,callback:ne,priorityLevel:F,startTime:re,expirationTime:me,sortIndex:-1},re>q?(F.sortIndex=re,e(c,F),n(l)===null&&F===n(c)&&(y?(u(R),R=-1):y=!0,ie(x,re-q))):(F.sortIndex=me,e(l,F),_||p||(_=!0,$(C))),F},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(F){var ne=f;return function(){var re=f;f=ne;try{return F.apply(this,arguments)}finally{f=re}}}})(Pm);Rm.exports=Pm;var Nv=Rm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv=be,fn=Nv;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bm=new Set,ua={};function wr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(ua[t]=e,t=0;t<e.length;t++)bm.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=Object.prototype.hasOwnProperty,Iv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cf={},Rf={};function Uv(t){return cu.call(Rf,t)?!0:cu.call(Cf,t)?!1:Iv.test(t)?Rf[t]=!0:(Cf[t]=!0,!1)}function Fv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ov(t,e,n,i){if(e===null||typeof e>"u"||Fv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gd=/[\-:]([a-z])/g;function vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gd,vd);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gd,vd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gd,vd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _d(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ov(e,n,r,i)&&(n=null),i||r===null?Uv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var vi=Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Nm=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),fu=Symbol.for("react.suspense_list"),Sd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),Dm=Symbol.for("react.offscreen"),Pf=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=Pf&&t[Pf]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,ec;function $s(t){if(ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ec=e&&e[1]||""}return`
`+ec+t}var tc=!1;function nc(t,e){if(!t||tc)return"";tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function kv(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=nc(t.type,!1),t;case 11:return t=nc(t.type.render,!1),t;case 1:return t=nc(t.type,!0),t;default:return""}}function hu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qr:return"Fragment";case Yr:return"Portal";case uu:return"Profiler";case yd:return"StrictMode";case du:return"Suspense";case fu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nm:return(t.displayName||"Context")+".Consumer";case Lm:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sd:return e=t.displayName||null,e!==null?e:hu(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return hu(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(e);case 8:return e===yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Im(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zv(t){var e=Im(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=zv(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Im(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fm(t,e){e=e.checked,e!=null&&_d(t,"checked",e,!1)}function mu(t,e){Fm(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&gu(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gu(t,e,n){(e!=="number"||qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function vu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Zs(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function Om(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Df(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _u(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,Bm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hv=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){Hv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function Hm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=zm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Vv=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(Vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function Md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mu=null,us=null,ds=null;function If(t){if(t=La(t)){if(typeof Mu!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Nl(e),Mu(t.stateNode,t.type,e))}}function Vm(t){us?ds?ds.push(t):ds=[t]:us=t}function Gm(){if(us){var t=us,e=ds;if(ds=us=null,If(t),e)for(t=0;t<e.length;t++)If(e[t])}}function Wm(t,e){return t(e)}function Xm(){}var ic=!1;function jm(t,e,n){if(ic)return t(e,n);ic=!0;try{return Wm(t,e,n)}finally{ic=!1,(us!==null||ds!==null)&&(Xm(),Gm())}}function fa(t,e){var n=t.stateNode;if(n===null)return null;var i=Nl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Eu=!1;if(hi)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{Eu=!1}function Gv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var na=!1,Ko=null,$o=!1,Tu=null,Wv={onError:function(t){na=!0,Ko=t}};function Xv(t,e,n,i,r,s,a,o,l){na=!1,Ko=null,Gv.apply(Wv,arguments)}function jv(t,e,n,i,r,s,a,o,l){if(Xv.apply(this,arguments),na){if(na){var c=Ko;na=!1,Ko=null}else throw Error(le(198));$o||($o=!0,Tu=c)}}function Ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uf(t){if(Ar(t)!==t)throw Error(le(188))}function Yv(t){var e=t.alternate;if(!e){if(e=Ar(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Uf(r),t;if(s===i)return Uf(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function qm(t){return t=Yv(t),t!==null?Km(t):null}function Km(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Km(t);if(e!==null)return e;t=t.sibling}return null}var $m=fn.unstable_scheduleCallback,Ff=fn.unstable_cancelCallback,qv=fn.unstable_shouldYield,Kv=fn.unstable_requestPaint,xt=fn.unstable_now,$v=fn.unstable_getCurrentPriorityLevel,Ed=fn.unstable_ImmediatePriority,Zm=fn.unstable_UserBlockingPriority,Zo=fn.unstable_NormalPriority,Zv=fn.unstable_LowPriority,Qm=fn.unstable_IdlePriority,Rl=null,Kn=null;function Qv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var Un=Math.clz32?Math.clz32:t_,Jv=Math.log,e_=Math.LN2;function t_(t){return t>>>=0,t===0?32:31-(Jv(t)/e_|0)|0}var Xa=64,ja=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Qs(o):(s&=a,s!==0&&(i=Qs(s)))}else a=n&~r,a!==0?i=Qs(a):s!==0&&(i=Qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Un(e),r=1<<n,i|=t[n],e&=~r;return i}function n_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function i_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Un(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=n_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jm(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Un(e),t[e]=n}function r_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Un(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Un(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tg,wd,ng,ig,rg,Au=!1,Ya=[],Ui=null,Fi=null,Oi=null,ha=new Map,pa=new Map,Pi=[],s_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Of(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Fi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":ha.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(e.pointerId)}}function ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function a_(t,e,n,i,r){switch(e){case"focusin":return Ui=ks(Ui,t,e,n,i,r),!0;case"dragenter":return Fi=ks(Fi,t,e,n,i,r),!0;case"mouseover":return Oi=ks(Oi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ha.set(s,ks(ha.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pa.set(s,ks(pa.get(s)||null,t,e,n,i,r)),!0}return!1}function sg(t){var e=hr(t.target);if(e!==null){var n=Ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Ym(n),e!==null){t.blockedOn=e,rg(t.priority,function(){ng(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Su=i,n.target.dispatchEvent(i),Su=null}else return e=La(n),e!==null&&wd(e),t.blockedOn=n,!1;e.shift()}return!0}function kf(t,e,n){Uo(t)&&n.delete(e)}function o_(){Au=!1,Ui!==null&&Uo(Ui)&&(Ui=null),Fi!==null&&Uo(Fi)&&(Fi=null),Oi!==null&&Uo(Oi)&&(Oi=null),ha.forEach(kf),pa.forEach(kf)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Au||(Au=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,o_)))}function ma(t){function e(r){return Bs(r,t)}if(0<Ya.length){Bs(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Bs(Ui,t),Fi!==null&&Bs(Fi,t),Oi!==null&&Bs(Oi,t),ha.forEach(e),pa.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)sg(n),n.blockedOn===null&&Pi.shift()}var fs=vi.ReactCurrentBatchConfig,Jo=!0;function l_(t,e,n,i){var r=Je,s=fs.transition;fs.transition=null;try{Je=1,Ad(t,e,n,i)}finally{Je=r,fs.transition=s}}function c_(t,e,n,i){var r=Je,s=fs.transition;fs.transition=null;try{Je=4,Ad(t,e,n,i)}finally{Je=r,fs.transition=s}}function Ad(t,e,n,i){if(Jo){var r=Cu(t,e,n,i);if(r===null)pc(t,e,i,el,n),Of(t,i);else if(a_(r,t,e,n,i))i.stopPropagation();else if(Of(t,i),e&4&&-1<s_.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&tg(s),s=Cu(t,e,n,i),s===null&&pc(t,e,i,el,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else pc(t,e,i,null,n)}}var el=null;function Cu(t,e,n,i){if(el=null,t=Md(i),t=hr(t),t!==null)if(e=Ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return el=t,null}function ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case Ed:return 1;case Zm:return 4;case Zo:case Zv:return 16;case Qm:return 536870912;default:return 16}default:return 16}}var Ni=null,Cd=null,Fo=null;function og(){if(Fo)return Fo;var t,e=Cd,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Fo=r.slice(t,1<i?1-i:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Bf(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Bf,this.isPropagationStopped=Bf,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rd=pn(Ns),ba=mt({},Ns,{view:0,detail:0}),u_=pn(ba),sc,ac,zs,Pl=mt({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(sc=t.screenX-zs.screenX,ac=t.screenY-zs.screenY):ac=sc=0,zs=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),zf=pn(Pl),d_=mt({},Pl,{dataTransfer:0}),f_=pn(d_),h_=mt({},ba,{relatedTarget:0}),oc=pn(h_),p_=mt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),m_=pn(p_),g_=mt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v_=pn(g_),__=mt({},Ns,{data:0}),Hf=pn(__),y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S_[t])?!!e[t]:!1}function Pd(){return M_}var E_=mt({},ba,{key:function(t){if(t.key){var e=y_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pd,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T_=pn(E_),w_=mt({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=pn(w_),A_=mt({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pd}),C_=pn(A_),R_=mt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),P_=pn(R_),b_=mt({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L_=pn(b_),N_=[9,13,27,32],bd=hi&&"CompositionEvent"in window,ia=null;hi&&"documentMode"in document&&(ia=document.documentMode);var D_=hi&&"TextEvent"in window&&!ia,lg=hi&&(!bd||ia&&8<ia&&11>=ia),Gf=" ",Wf=!1;function cg(t,e){switch(t){case"keyup":return N_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function I_(t,e){switch(t){case"compositionend":return ug(e);case"keypress":return e.which!==32?null:(Wf=!0,Gf);case"textInput":return t=e.data,t===Gf&&Wf?null:t;default:return null}}function U_(t,e){if(Kr)return t==="compositionend"||!bd&&cg(t,e)?(t=og(),Fo=Cd=Ni=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lg&&e.locale!=="ko"?null:e.data;default:return null}}var F_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F_[t.type]:e==="textarea"}function dg(t,e,n,i){Vm(i),e=tl(e,"onChange"),0<e.length&&(n=new Rd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ra=null,ga=null;function O_(t){Mg(t,0)}function bl(t){var e=Qr(t);if(Um(e))return t}function k_(t,e){if(t==="change")return e}var fg=!1;if(hi){var lc;if(hi){var cc="oninput"in document;if(!cc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),cc=typeof jf.oninput=="function"}lc=cc}else lc=!1;fg=lc&&(!document.documentMode||9<document.documentMode)}function Yf(){ra&&(ra.detachEvent("onpropertychange",hg),ga=ra=null)}function hg(t){if(t.propertyName==="value"&&bl(ga)){var e=[];dg(e,ga,t,Md(t)),jm(O_,e)}}function B_(t,e,n){t==="focusin"?(Yf(),ra=e,ga=n,ra.attachEvent("onpropertychange",hg)):t==="focusout"&&Yf()}function z_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(ga)}function H_(t,e){if(t==="click")return bl(e)}function V_(t,e){if(t==="input"||t==="change")return bl(e)}function G_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:G_;function va(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!cu.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function qf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kf(t,e){var n=qf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qf(n)}}function pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mg(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qo(t.document)}return e}function Ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function W_(t){var e=mg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pg(n.ownerDocument.documentElement,n)){if(i!==null&&Ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kf(n,s);var a=Kf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X_=hi&&"documentMode"in document&&11>=document.documentMode,$r=null,Ru=null,sa=null,Pu=!1;function $f(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||$r==null||$r!==qo(i)||(i=$r,"selectionStart"in i&&Ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sa&&va(sa,i)||(sa=i,i=tl(Ru,"onSelect"),0<i.length&&(e=new Rd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$r)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},uc={},gg={};hi&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Ll(t){if(uc[t])return uc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gg)return uc[t]=e[n];return t}var vg=Ll("animationend"),_g=Ll("animationiteration"),yg=Ll("animationstart"),xg=Ll("transitionend"),Sg=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){Sg.set(t,e),wr(e,[t])}for(var dc=0;dc<Zf.length;dc++){var fc=Zf[dc],j_=fc.toLowerCase(),Y_=fc[0].toUpperCase()+fc.slice(1);Ki(j_,"on"+Y_)}Ki(vg,"onAnimationEnd");Ki(_g,"onAnimationIteration");Ki(yg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(xg,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Qf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jv(i,e,void 0,t),t.currentTarget=null}function Mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Qf(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Qf(r,o,c),s=l}}}if($o)throw t=Tu,$o=!1,Tu=null,t}function rt(t,e){var n=e[Iu];n===void 0&&(n=e[Iu]=new Set);var i=t+"__bubble";n.has(i)||(Eg(e,t,2,!1),n.add(i))}function hc(t,e,n){var i=0;e&&(i|=4),Eg(n,t,i,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[$a]){t[$a]=!0,bm.forEach(function(n){n!=="selectionchange"&&(q_.has(n)||hc(n,!1,t),hc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,hc("selectionchange",!1,e))}}function Eg(t,e,n,i){switch(ag(e)){case 1:var r=l_;break;case 4:r=c_;break;default:r=Ad}n=r.bind(null,e,n,t),r=void 0,!Eu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function pc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}jm(function(){var c=s,d=Md(n),h=[];e:{var f=Sg.get(t);if(f!==void 0){var p=Rd,_=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":p=T_;break;case"focusin":_="focus",p=oc;break;case"focusout":_="blur",p=oc;break;case"beforeblur":case"afterblur":p=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=f_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=C_;break;case vg:case _g:case yg:p=m_;break;case xg:p=P_;break;case"scroll":p=u_;break;case"wheel":p=L_;break;case"copy":case"cut":case"paste":p=v_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vf}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,u!==null&&(x=fa(v,u),x!=null&&y.push(ya(v,x,g)))),m)break;v=v.return}0<y.length&&(f=new p(f,_,null,n,d),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Su&&(_=n.relatedTarget||n.fromElement)&&(hr(_)||_[pi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?hr(_):null,_!==null&&(m=Ar(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=zf,x="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vf,x="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?f:Qr(p),g=_==null?f:Qr(_),f=new y(x,v+"leave",p,n,d),f.target=m,f.relatedTarget=g,x=null,hr(d)===c&&(y=new y(u,v+"enter",_,n,d),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,u=_,v=0,g=y;g;g=Rr(g))v++;for(g=0,x=u;x;x=Rr(x))g++;for(;0<v-g;)y=Rr(y),v--;for(;0<g-v;)u=Rr(u),g--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Rr(y),u=Rr(u)}y=null}else y=null;p!==null&&Jf(h,f,p,y,!1),_!==null&&m!==null&&Jf(h,m,_,y,!0)}}e:{if(f=c?Qr(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=k_;else if(Xf(f))if(fg)C=V_;else{C=z_;var w=B_}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=H_);if(C&&(C=C(t,c))){dg(h,C,n,d);break e}w&&w(t,f,c),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&gu(f,"number",f.value)}switch(w=c?Qr(c):window,t){case"focusin":(Xf(w)||w.contentEditable==="true")&&($r=w,Ru=c,sa=null);break;case"focusout":sa=Ru=$r=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,$f(h,n,d);break;case"selectionchange":if(X_)break;case"keydown":case"keyup":$f(h,n,d)}var A;if(bd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Kr?cg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(lg&&n.locale!=="ko"&&(Kr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Kr&&(A=og()):(Ni=d,Cd="value"in Ni?Ni.value:Ni.textContent,Kr=!0)),w=tl(c,R),0<w.length&&(R=new Hf(R,t,null,n,d),h.push({event:R,listeners:w}),A?R.data=A:(A=ug(n),A!==null&&(R.data=A)))),(A=D_?I_(t,n):U_(t,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(d=new Hf("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}Mg(h,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=fa(t,n),s!=null&&i.unshift(ya(t,s,r)),s=fa(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function Rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=fa(n,s),l!=null&&a.unshift(ya(n,l,o))):r||(l=fa(n,s),l!=null&&a.push(ya(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var K_=/\r\n?/g,$_=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(K_,`
`).replace($_,"")}function Za(t,e,n){if(e=eh(e),eh(t)!==e&&n)throw Error(le(425))}function nl(){}var bu=null,Lu=null;function Nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,Q_=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(J_)}:Du;function J_(t){setTimeout(function(){throw t})}function mc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ma(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),jn="__reactFiber$"+Ds,xa="__reactProps$"+Ds,pi="__reactContainer$"+Ds,Iu="__reactEvents$"+Ds,ey="__reactListeners$"+Ds,ty="__reactHandles$"+Ds;function hr(t){var e=t[jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nh(t);t!==null;){if(n=t[jn])return n;t=nh(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[jn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Nl(t){return t[xa]||null}var Uu=[],Jr=-1;function $i(t){return{current:t}}function ot(t){0>Jr||(t.current=Uu[Jr],Uu[Jr]=null,Jr--)}function nt(t,e){Jr++,Uu[Jr]=t.current,t.current=e}var ji={},Wt=$i(ji),nn=$i(!1),yr=ji;function ys(t,e){var n=t.type.contextTypes;if(!n)return ji;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function il(){ot(nn),ot(Wt)}function ih(t,e,n){if(Wt.current!==ji)throw Error(le(168));nt(Wt,e),nt(nn,n)}function Tg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,Bv(t)||"Unknown",r));return mt({},n,i)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ji,yr=Wt.current,nt(Wt,t),nt(nn,nn.current),!0}function rh(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=Tg(t,e,yr),i.__reactInternalMemoizedMergedChildContext=t,ot(nn),ot(Wt),nt(Wt,t)):ot(nn),nt(nn,n)}var oi=null,Dl=!1,gc=!1;function wg(t){oi===null?oi=[t]:oi.push(t)}function ny(t){Dl=!0,wg(t)}function Zi(){if(!gc&&oi!==null){gc=!0;var t=0,e=Je;try{var n=oi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Dl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),$m(Ed,Zi),r}finally{Je=e,gc=!1}}return null}var es=[],ts=0,sl=null,al=0,vn=[],_n=0,xr=null,li=1,ci="";function or(t,e){es[ts++]=al,es[ts++]=sl,sl=t,al=e}function Ag(t,e,n){vn[_n++]=li,vn[_n++]=ci,vn[_n++]=xr,xr=t;var i=li;t=ci;var r=32-Un(i)-1;i&=~(1<<r),n+=1;var s=32-Un(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Un(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Nd(t){t.return!==null&&(or(t,1),Ag(t,1,0))}function Dd(t){for(;t===sl;)sl=es[--ts],es[ts]=null,al=es[--ts],es[ts]=null;for(;t===xr;)xr=vn[--_n],vn[_n]=null,ci=vn[--_n],vn[_n]=null,li=vn[--_n],vn[_n]=null}var dn=null,un=null,ct=!1,Dn=null;function Cg(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function Fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ou(t){if(ct){var e=un;if(e){var n=e;if(!sh(t,e)){if(Fu(t))throw Error(le(418));e=ki(n.nextSibling);var i=dn;e&&sh(t,e)?Cg(i,n):(t.flags=t.flags&-4097|2,ct=!1,dn=t)}}else{if(Fu(t))throw Error(le(418));t.flags=t.flags&-4097|2,ct=!1,dn=t}}}function ah(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Qa(t){if(t!==dn)return!1;if(!ct)return ah(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nu(t.type,t.memoizedProps)),e&&(e=un)){if(Fu(t))throw Rg(),Error(le(418));for(;e;)Cg(t,e),e=ki(e.nextSibling)}if(ah(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?ki(t.stateNode.nextSibling):null;return!0}function Rg(){for(var t=un;t;)t=ki(t.nextSibling)}function xs(){un=dn=null,ct=!1}function Id(t){Dn===null?Dn=[t]:Dn.push(t)}var iy=vi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function oh(t){var e=t._init;return e(t._payload)}function Pg(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Vi(u,v),u.index=0,u.sibling=null,u}function s(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,g,x){return v===null||v.tag!==6?(v=Ec(g,u.mode,x),v.return=u,v):(v=r(v,g),v.return=u,v)}function l(u,v,g,x){var C=g.type;return C===qr?d(u,v,g.props.children,x,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ci&&oh(C)===v.type)?(x=r(v,g.props),x.ref=Hs(u,v,g),x.return=u,x):(x=Wo(g.type,g.key,g.props,null,u.mode,x),x.ref=Hs(u,v,g),x.return=u,x)}function c(u,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Tc(g,u.mode,x),v.return=u,v):(v=r(v,g.children||[]),v.return=u,v)}function d(u,v,g,x,C){return v===null||v.tag!==7?(v=_r(g,u.mode,x,C),v.return=u,v):(v=r(v,g),v.return=u,v)}function h(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ec(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return g=Wo(v.type,v.key,v.props,null,u.mode,g),g.ref=Hs(u,null,v),g.return=u,g;case Yr:return v=Tc(v,u.mode,g),v.return=u,v;case Ci:var x=v._init;return h(u,x(v._payload),g)}if(Zs(v)||Fs(v))return v=_r(v,u.mode,g,null),v.return=u,v;Ja(u,v)}return null}function f(u,v,g,x){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:o(u,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:return g.key===C?l(u,v,g,x):null;case Yr:return g.key===C?c(u,v,g,x):null;case Ci:return C=g._init,f(u,v,C(g._payload),x)}if(Zs(g)||Fs(g))return C!==null?null:d(u,v,g,x,null);Ja(u,g)}return null}function p(u,v,g,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return u=u.get(g)||null,o(v,u,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return u=u.get(x.key===null?g:x.key)||null,l(v,u,x,C);case Yr:return u=u.get(x.key===null?g:x.key)||null,c(v,u,x,C);case Ci:var w=x._init;return p(u,v,g,w(x._payload),C)}if(Zs(x)||Fs(x))return u=u.get(g)||null,d(v,u,x,C,null);Ja(v,x)}return null}function _(u,v,g,x){for(var C=null,w=null,A=v,R=v=0,M=null;A!==null&&R<g.length;R++){A.index>R?(M=A,A=null):M=A.sibling;var S=f(u,A,g[R],x);if(S===null){A===null&&(A=M);break}t&&A&&S.alternate===null&&e(u,A),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S,A=M}if(R===g.length)return n(u,A),ct&&or(u,R),C;if(A===null){for(;R<g.length;R++)A=h(u,g[R],x),A!==null&&(v=s(A,v,R),w===null?C=A:w.sibling=A,w=A);return ct&&or(u,R),C}for(A=i(u,A);R<g.length;R++)M=p(A,u,R,g[R],x),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?R:M.key),v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return t&&A.forEach(function(L){return e(u,L)}),ct&&or(u,R),C}function y(u,v,g,x){var C=Fs(g);if(typeof C!="function")throw Error(le(150));if(g=C.call(g),g==null)throw Error(le(151));for(var w=C=null,A=v,R=v=0,M=null,S=g.next();A!==null&&!S.done;R++,S=g.next()){A.index>R?(M=A,A=null):M=A.sibling;var L=f(u,A,S.value,x);if(L===null){A===null&&(A=M);break}t&&A&&L.alternate===null&&e(u,A),v=s(L,v,R),w===null?C=L:w.sibling=L,w=L,A=M}if(S.done)return n(u,A),ct&&or(u,R),C;if(A===null){for(;!S.done;R++,S=g.next())S=h(u,S.value,x),S!==null&&(v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return ct&&or(u,R),C}for(A=i(u,A);!S.done;R++,S=g.next())S=p(A,u,R,S.value,x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?R:S.key),v=s(S,v,R),w===null?C=S:w.sibling=S,w=S);return t&&A.forEach(function(H){return e(u,H)}),ct&&or(u,R),C}function m(u,v,g,x){if(typeof g=="object"&&g!==null&&g.type===qr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:e:{for(var C=g.key,w=v;w!==null;){if(w.key===C){if(C=g.type,C===qr){if(w.tag===7){n(u,w.sibling),v=r(w,g.props.children),v.return=u,u=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ci&&oh(C)===w.type){n(u,w.sibling),v=r(w,g.props),v.ref=Hs(u,w,g),v.return=u,u=v;break e}n(u,w);break}else e(u,w);w=w.sibling}g.type===qr?(v=_r(g.props.children,u.mode,x,g.key),v.return=u,u=v):(x=Wo(g.type,g.key,g.props,null,u.mode,x),x.ref=Hs(u,v,g),x.return=u,u=x)}return a(u);case Yr:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(u,v.sibling),v=r(v,g.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Tc(g,u.mode,x),v.return=u,u=v}return a(u);case Ci:return w=g._init,m(u,v,w(g._payload),x)}if(Zs(g))return _(u,v,g,x);if(Fs(g))return y(u,v,g,x);Ja(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,g),v.return=u,u=v):(n(u,v),v=Ec(g,u.mode,x),v.return=u,u=v),a(u)):n(u,v)}return m}var Ss=Pg(!0),bg=Pg(!1),ol=$i(null),ll=null,ns=null,Ud=null;function Fd(){Ud=ns=ll=null}function Od(t){var e=ol.current;ot(ol),t._currentValue=e}function ku(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){ll=t,Ud=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Ud!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(ll===null)throw Error(le(308));ns=t,ll.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var pr=null;function kd(t){pr===null?pr=[t]:pr.push(t)}function Lg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kd(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function Bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,kd(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}function lh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function cl(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,y=o;switch(f=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=mt({},h,f);break e;case 2:Ri=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Mr|=a,t.lanes=a,t.memoizedState=h}}function ch(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Na={},$n=$i(Na),Sa=$i(Na),Ma=$i(Na);function mr(t){if(t===Na)throw Error(le(174));return t}function zd(t,e){switch(nt(Ma,e),nt(Sa,t),nt($n,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_u(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_u(e,t)}ot($n),nt($n,e)}function Ms(){ot($n),ot(Sa),ot(Ma)}function Dg(t){mr(Ma.current);var e=mr($n.current),n=_u(e,t.type);e!==n&&(nt(Sa,t),nt($n,n))}function Hd(t){Sa.current===t&&(ot($n),ot(Sa))}var ht=$i(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Vd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Bo=vi.ReactCurrentDispatcher,_c=vi.ReactCurrentBatchConfig,Sr=0,pt=null,Tt=null,bt=null,dl=!1,aa=!1,Ea=0,ry=0;function kt(){throw Error(le(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Wd(t,e,n,i,r,s){if(Sr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?ly:cy,t=n(i,r),aa){s=0;do{if(aa=!1,Ea=0,25<=s)throw Error(le(301));s+=1,bt=Tt=null,e.updateQueue=null,Bo.current=uy,t=n(i,r)}while(aa)}if(Bo.current=fl,e=Tt!==null&&Tt.next!==null,Sr=0,bt=Tt=pt=null,dl=!1,e)throw Error(le(300));return t}function Xd(){var t=Ea!==0;return Ea=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?pt.memoizedState=bt=t:bt=bt.next=t,bt}function Tn(){if(Tt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=bt===null?pt.memoizedState:bt.next;if(e!==null)bt=e,Tt=t;else{if(t===null)throw Error(le(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},bt===null?pt.memoizedState=bt=t:bt=bt.next=t}return bt}function Ta(t,e){return typeof e=="function"?e(t):e}function yc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Sr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,pt.lanes|=d,Mr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,kn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Mr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);kn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ig(){}function Ug(t,e){var n=pt,i=Tn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,jd(kg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,wa(9,Og.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(le(349));Sr&30||Fg(n,e,r)}return r}function Fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,i){e.value=n,e.getSnapshot=i,Bg(e)&&zg(t)}function kg(t,e,n){return n(function(){Bg(e)&&zg(t)})}function Bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function zg(t){var e=mi(t,1);e!==null&&Fn(e,t,1,-1)}function uh(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:t},e.queue=t,t=t.dispatch=oy.bind(null,pt,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hg(){return Tn().memoizedState}function zo(t,e,n,i){var r=Gn();pt.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function Il(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var a=Tt.memoizedState;if(s=a.destroy,i!==null&&Gd(i,a.deps)){r.memoizedState=wa(e,n,s,i);return}}pt.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function dh(t,e){return zo(8390656,8,t,e)}function jd(t,e){return Il(2048,8,t,e)}function Vg(t,e){return Il(4,2,t,e)}function Gg(t,e){return Il(4,4,t,e)}function Wg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xg(t,e,n){return n=n!=null?n.concat([t]):null,Il(4,4,Wg.bind(null,e,t),n)}function Yd(){}function jg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function qg(t,e,n){return Sr&21?(kn(n,e)||(n=Jm(),pt.lanes|=n,Mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function sy(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=_c.transition;_c.transition={};try{t(!1),e()}finally{Je=n,_c.transition=i}}function Kg(){return Tn().memoizedState}function ay(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$g(t))Zg(e,n);else if(n=Lg(t,e,n,i),n!==null){var r=qt();Fn(n,t,i,r),Qg(n,e,i)}}function oy(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($g(t))Zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,kn(o,a)){var l=e.interleaved;l===null?(r.next=r,kd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Lg(t,e,r,i),n!==null&&(r=qt(),Fn(n,t,i,r),Qg(n,e,i))}}function $g(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Zg(t,e){aa=dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Td(t,n)}}var fl={readContext:En,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},ly={readContext:En,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:dh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zo(4194308,4,Wg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return zo(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ay.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:uh,useDebugValue:Yd,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=uh(!1),e=t[0];return t=sy.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Gn();if(ct){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Nt===null)throw Error(le(349));Sr&30||Fg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dh(kg.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,Og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Nt.identifierPrefix;if(ct){var n=ci,i=li;n=(i&~(1<<32-Un(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ea++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ry++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cy={readContext:En,useCallback:jg,useContext:En,useEffect:jd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:Yg,useReducer:yc,useRef:Hg,useState:function(){return yc(Ta)},useDebugValue:Yd,useDeferredValue:function(t){var e=Tn();return qg(e,Tt.memoizedState,t)},useTransition:function(){var t=yc(Ta)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Ig,useSyncExternalStore:Ug,useId:Kg,unstable_isNewReconciler:!1},uy={readContext:En,useCallback:jg,useContext:En,useEffect:jd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:Yg,useReducer:xc,useRef:Hg,useState:function(){return xc(Ta)},useDebugValue:Yd,useDeferredValue:function(t){var e=Tn();return Tt===null?e.memoizedState=t:qg(e,Tt.memoizedState,t)},useTransition:function(){var t=xc(Ta)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Ig,useSyncExternalStore:Ug,useId:Kg,unstable_isNewReconciler:!1};function bn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?Ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Hi(t),s=fi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Fn(e,t,r,i),ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Hi(t),s=fi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bi(t,s,r),e!==null&&(Fn(e,t,r,i),ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Hi(t),r=fi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Bi(t,r,i),e!==null&&(Fn(e,t,i,n),ko(e,t,i))}};function fh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!va(n,i)||!va(r,s):!0}function Jg(t,e,n){var i=!1,r=ji,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=rn(e)?yr:Wt.current,i=e.contextTypes,s=(i=i!=null)?ys(t,r):ji),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=rn(e)?yr:Wt.current,r.context=ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ul.enqueueReplaceState(r,r.state,null),cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Es(t,e){try{var n="",i=e;do n+=kv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Sc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dy=typeof WeakMap=="function"?WeakMap:Map;function e0(t,e,n){n=fi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){pl||(pl=!0,Zu=i),Hu(t,e)},n}function t0(t,e,n){n=fi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hu(t,e),typeof i!="function"&&(zi===null?zi=new Set([this]):zi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ph(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=wy.bind(null,t,e,n),e.then(t,t))}function mh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fi(-1,1),e.tag=2,Bi(n,e,1))),n.lanes|=1),t)}var fy=vi.ReactCurrentOwner,tn=!1;function Yt(t,e,n,i){e.child=t===null?bg(e,null,n,i):Ss(e,t.child,n,i)}function vh(t,e,n,i,r){n=n.render;var s=e.ref;return hs(e,r),i=Wd(t,e,n,i,s,r),n=Xd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&n&&Nd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function _h(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!tf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,n0(t,e,s,i,r)):(t=Wo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function n0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(va(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Vu(t,e,n,i,r)}function i0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(rs,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(rs,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(rs,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(rs,cn),cn|=i;return Yt(t,e,r,n),e.child}function r0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vu(t,e,n,i,r){var s=rn(n)?yr:Wt.current;return s=ys(e,s),hs(e,r),n=Wd(t,e,n,i,s,r),i=Xd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ct&&i&&Nd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function yh(t,e,n,i,r){if(rn(n)){var s=!0;rl(e)}else s=!1;if(hs(e,r),e.stateNode===null)Ho(t,e),Jg(e,n,i),zu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=En(c):(c=rn(n)?yr:Wt.current,c=ys(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&hh(e,a,i,c),Ri=!1;var f=e.memoizedState;a.state=f,cl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||nn.current||Ri?(typeof d=="function"&&(Bu(e,n,d,i),l=e.memoizedState),(o=Ri||fh(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ng(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:bn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=En(l):(l=rn(n)?yr:Wt.current,l=ys(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&hh(e,a,i,l),Ri=!1,f=e.memoizedState,a.state=f,cl(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||nn.current||Ri?(typeof p=="function"&&(Bu(e,n,p,i),_=e.memoizedState),(c=Ri||fh(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Gu(t,e,n,i,s,r)}function Gu(t,e,n,i,r,s){r0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&rh(e,n,!1),gi(t,e,s);i=e.stateNode,fy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):Yt(t,e,o,s),e.memoizedState=i.state,r&&rh(e,n,!0),e.child}function s0(t){var e=t.stateNode;e.pendingContext?ih(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ih(t,e.context,!1),zd(t,e.containerInfo)}function xh(t,e,n,i,r){return xs(),Id(r),e.flags|=256,Yt(t,e,n,i),e.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function Xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function a0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ht,r&1),t===null)return Ou(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=kl(a,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Xu(n),e.memoizedState=Wu,t):qd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return hy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Vi(o,s):(s=_r(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Xu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Wu,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function qd(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function eo(t,e,n,i){return i!==null&&Id(i),Ss(e,t.child,null,n),t=qd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Sc(Error(le(422))),eo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=Xu(a),e.memoizedState=Wu,s);if(!(e.mode&1))return eo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=Sc(s,i,void 0),eo(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Nt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Fn(i,t,r,-1))}return ef(),i=Sc(Error(le(421))),eo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ay.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=ki(r.nextSibling),dn=e,ct=!0,Dn=null,t!==null&&(vn[_n++]=li,vn[_n++]=ci,vn[_n++]=xr,li=t.id,ci=t.overflow,xr=e),e=qd(e,i.children),e.flags|=4096,e)}function Sh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ku(t.return,e,n)}function Mc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function o0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sh(t,n,e);else if(t.tag===19)Sh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mc(e,!0,n,null,s);break;case"together":Mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function py(t,e,n){switch(e.tag){case 3:s0(e),xs();break;case 5:Dg(e);break;case 1:rn(e.type)&&rl(e);break;case 4:zd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(ol,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?a0(t,e,n):(nt(ht,ht.current&1),t=gi(t,e,n),t!==null?t.sibling:null);nt(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return o0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,i0(t,e,n)}return gi(t,e,n)}var l0,ju,c0,u0;l0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};c0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr($n.current);var s=null;switch(n){case"input":r=pu(t,r),i=pu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=vu(t,r),i=vu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=nl)}yu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ua.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ua.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};u0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Vs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function my(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return rn(e.type)&&il(),Bt(e),null;case 3:return i=e.stateNode,Ms(),ot(nn),ot(Wt),Vd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(ed(Dn),Dn=null))),ju(t,e),Bt(e),null;case 5:Hd(e);var r=mr(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)c0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Bt(e),null}if(t=mr($n.current),Qa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[jn]=e,i[xa]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)rt(Js[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":bf(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Nf(i,s),rt("invalid",i)}yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Za(i.textContent,o,t),r=["children",""+o]):ua.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":Ga(i),Lf(i,s,!0);break;case"textarea":Ga(i),Df(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=km(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[jn]=e,t[xa]=i,l0(t,e,!1,!1),e.stateNode=t;e:{switch(a=xu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)rt(Js[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":bf(t,i),r=pu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Nf(t,i),r=vu(t,i),rt("invalid",t);break;default:r=i}yu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Hm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&da(t,l):typeof l=="number"&&da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&_d(t,s,l,a))}switch(n){case"input":Ga(t),Lf(t,i,!1);break;case"textarea":Ga(t),Df(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)u0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=mr(Ma.current),mr($n.current),Qa(e)){if(i=e.stateNode,n=e.memoizedProps,i[jn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[jn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ot(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&un!==null&&e.mode&1&&!(e.flags&128))Rg(),xs(),e.flags|=98560,s=!1;else if(s=Qa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[jn]=e}else xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Dn!==null&&(ed(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?wt===0&&(wt=3):ef())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Ms(),ju(t,e),t===null&&_a(e.stateNode.containerInfo),Bt(e),null;case 10:return Od(e.type._context),Bt(e),null;case 17:return rn(e.type)&&il(),Bt(e),null;case 19:if(ot(ht),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Vs(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=ul(t),a!==null){for(e.flags|=128,Vs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ts&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304)}else{if(!i)if(t=ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Bt(e),null}else 2*xt()-s.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,i=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ht.current,nt(ht,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Jd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function gy(t,e){switch(Dd(e),e.tag){case 1:return rn(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),ot(nn),ot(Wt),Vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hd(e),null;case 13:if(ot(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ht),null;case 4:return Ms(),null;case 10:return Od(e.type._context),null;case 22:case 23:return Jd(),null;case 24:return null;default:return null}}var to=!1,Vt=!1,vy=typeof WeakSet=="function"?WeakSet:Set,xe=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Yu(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Mh=!1;function _y(t,e){if(bu=Jo,t=mg(),Ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Lu={focusedElem:t,selectionRange:n},Jo=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:bn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(x){yt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=Mh,Mh=!1,_}function oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yu(e,n,s)}r=r.next}while(r!==i)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function d0(t){var e=t.alternate;e!==null&&(t.alternate=null,d0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jn],delete e[xa],delete e[Iu],delete e[ey],delete e[ty])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function f0(t){return t.tag===5||t.tag===3||t.tag===4}function Eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nl));else if(i!==4&&(t=t.child,t!==null))for(Ku(t,e,n),t=t.sibling;t!==null;)Ku(t,e,n),t=t.sibling}function $u(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}var It=null,Ln=!1;function yi(t,e,n){for(n=n.child;n!==null;)h0(t,e,n),n=n.sibling}function h0(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Vt||is(n,e);case 6:var i=It,r=Ln;It=null,yi(t,e,n),It=i,Ln=r,It!==null&&(Ln?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Ln?(t=It,n=n.stateNode,t.nodeType===8?mc(t.parentNode,n):t.nodeType===1&&mc(t,n),ma(t)):mc(It,n.stateNode));break;case 4:i=It,r=Ln,It=n.stateNode.containerInfo,Ln=!0,yi(t,e,n),It=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Yu(n,e,a),r=r.next}while(r!==i)}yi(t,e,n);break;case 1:if(!Vt&&(is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,yi(t,e,n),Vt=i):yi(t,e,n);break;default:yi(t,e,n)}}function Th(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vy),e.forEach(function(i){var r=Cy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:It=o.stateNode,Ln=!1;break e;case 3:It=o.stateNode.containerInfo,Ln=!0;break e;case 4:It=o.stateNode.containerInfo,Ln=!0;break e}o=o.return}if(It===null)throw Error(le(160));h0(s,a,r),It=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)p0(e,t),e=e.sibling}function p0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Hn(t),i&4){try{oa(3,t,t.return),Fl(3,t)}catch(y){yt(t,t.return,y)}try{oa(5,t,t.return)}catch(y){yt(t,t.return,y)}}break;case 1:wn(e,t),Hn(t),i&512&&n!==null&&is(n,n.return);break;case 5:if(wn(e,t),Hn(t),i&512&&n!==null&&is(n,n.return),t.flags&32){var r=t.stateNode;try{da(r,"")}catch(y){yt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Fm(r,s),xu(o,a);var c=xu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?Hm(r,h):d==="dangerouslySetInnerHTML"?Bm(r,h):d==="children"?da(r,h):_d(r,d,h,c)}switch(o){case"input":mu(r,s);break;case"textarea":Om(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?cs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?cs(r,!!s.multiple,s.defaultValue,!0):cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(y){yt(t,t.return,y)}}break;case 6:if(wn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){yt(t,t.return,y)}}break;case 3:if(wn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ma(e.containerInfo)}catch(y){yt(t,t.return,y)}break;case 4:wn(e,t),Hn(t);break;case 13:wn(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zd=xt())),i&4&&Th(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||d,wn(e,t),Vt=c):wn(e,t),Hn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(xe=t,d=t.child;d!==null;){for(h=xe=d;xe!==null;){switch(f=xe,p=f.child,f.tag){case 0:case 11:case 14:case 15:oa(4,f,f.return);break;case 1:is(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){yt(i,n,y)}}break;case 5:is(f,f.return);break;case 22:if(f.memoizedState!==null){Ah(h);continue}}p!==null?(p.return=f,xe=p):Ah(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=zm("display",a))}catch(y){yt(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){yt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wn(e,t),Hn(t),i&4&&Th(t);break;case 21:break;default:wn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(f0(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(da(r,""),i.flags&=-33);var s=Eh(t);$u(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Eh(t);Ku(t,o,a);break;default:throw Error(le(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yy(t,e,n){xe=t,m0(t)}function m0(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||to;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Vt;o=to;var c=Vt;if(to=a,(Vt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?Ch(r):l!==null?(l.return=a,xe=l):Ch(r);for(;s!==null;)xe=s,m0(s),s=s.sibling;xe=r,to=o,Vt=c}wh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):wh(t)}}function wh(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ch(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ch(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ma(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Vt||e.flags&512&&qu(e)}catch(f){yt(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Ah(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Ch(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{qu(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{qu(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var xy=Math.ceil,hl=vi.ReactCurrentDispatcher,Kd=vi.ReactCurrentOwner,Mn=vi.ReactCurrentBatchConfig,Ke=0,Nt=null,Et=null,Ft=0,cn=0,rs=$i(0),wt=0,Aa=null,Mr=0,Ol=0,$d=0,la=null,en=null,Zd=0,Ts=1/0,ai=null,pl=!1,Zu=null,zi=null,no=!1,Di=null,ml=0,ca=0,Qu=null,Vo=-1,Go=0;function qt(){return Ke&6?xt():Vo!==-1?Vo:Vo=xt()}function Hi(t){return t.mode&1?Ke&2&&Ft!==0?Ft&-Ft:iy.transition!==null?(Go===0&&(Go=Jm()),Go):(t=Je,t!==0||(t=window.event,t=t===void 0?16:ag(t.type)),t):1}function Fn(t,e,n,i){if(50<ca)throw ca=0,Qu=null,Error(le(185));Pa(t,n,i),(!(Ke&2)||t!==Nt)&&(t===Nt&&(!(Ke&2)&&(Ol|=n),wt===4&&bi(t,Ft)),sn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ts=xt()+500,Dl&&Zi()))}function sn(t,e){var n=t.callbackNode;i_(t,e);var i=Qo(t,t===Nt?Ft:0);if(i===0)n!==null&&Ff(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ff(n),e===1)t.tag===0?ny(Rh.bind(null,t)):wg(Rh.bind(null,t)),Q_(function(){!(Ke&6)&&Zi()}),n=null;else{switch(eg(i)){case 1:n=Ed;break;case 4:n=Zm;break;case 16:n=Zo;break;case 536870912:n=Qm;break;default:n=Zo}n=E0(n,g0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function g0(t,e){if(Vo=-1,Go=0,Ke&6)throw Error(le(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var i=Qo(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=Ke;Ke|=2;var s=_0();(Nt!==t||Ft!==e)&&(ai=null,Ts=xt()+500,vr(t,e));do try{Ey();break}catch(o){v0(t,o)}while(!0);Fd(),hl.current=s,Ke=r,Et!==null?e=0:(Nt=null,Ft=0,e=wt)}if(e!==0){if(e===2&&(r=wu(t),r!==0&&(i=r,e=Ju(t,r))),e===1)throw n=Aa,vr(t,0),bi(t,i),sn(t,xt()),n;if(e===6)bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sy(r)&&(e=gl(t,i),e===2&&(s=wu(t),s!==0&&(i=s,e=Ju(t,s))),e===1))throw n=Aa,vr(t,0),bi(t,i),sn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:lr(t,en,ai);break;case 3:if(bi(t,i),(i&130023424)===i&&(e=Zd+500-xt(),10<e)){if(Qo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Du(lr.bind(null,t,en,ai),e);break}lr(t,en,ai);break;case 4:if(bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Un(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*xy(i/1960))-i,10<i){t.timeoutHandle=Du(lr.bind(null,t,en,ai),i);break}lr(t,en,ai);break;case 5:lr(t,en,ai);break;default:throw Error(le(329))}}}return sn(t,xt()),t.callbackNode===n?g0.bind(null,t):null}function Ju(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=en,en=n,e!==null&&ed(e)),t}function ed(t){en===null?en=t:en.push.apply(en,t)}function Sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bi(t,e){for(e&=~$d,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),i=1<<n;t[n]=-1,e&=~i}}function Rh(t){if(Ke&6)throw Error(le(327));ps();var e=Qo(t,0);if(!(e&1))return sn(t,xt()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=wu(t);i!==0&&(e=i,n=Ju(t,i))}if(n===1)throw n=Aa,vr(t,0),bi(t,e),sn(t,xt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,en,ai),sn(t,xt()),null}function Qd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ts=xt()+500,Dl&&Zi())}}function Er(t){Di!==null&&Di.tag===0&&!(Ke&6)&&ps();var e=Ke;Ke|=1;var n=Mn.transition,i=Je;try{if(Mn.transition=null,Je=1,t)return t()}finally{Je=i,Mn.transition=n,Ke=e,!(Ke&6)&&Zi()}}function Jd(){cn=rs.current,ot(rs)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z_(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&il();break;case 3:Ms(),ot(nn),ot(Wt),Vd();break;case 5:Hd(i);break;case 4:Ms();break;case 13:ot(ht);break;case 19:ot(ht);break;case 10:Od(i.type._context);break;case 22:case 23:Jd()}n=n.return}if(Nt=t,Et=t=Vi(t.current,null),Ft=cn=e,wt=0,Aa=null,$d=Ol=Mr=0,en=la=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function v0(t,e){do{var n=Et;try{if(Fd(),Bo.current=fl,dl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}dl=!1}if(Sr=0,bt=Tt=pt=null,aa=!1,Ea=0,Kd.current=null,n===null||n.return===null){wt=1,Aa=e,Et=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ft,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=mh(a);if(p!==null){p.flags&=-257,gh(p,a,o,s,e),p.mode&1&&ph(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){ph(s,c,e),ef();break e}l=Error(le(426))}}else if(ct&&o.mode&1){var m=mh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),gh(m,a,o,s,e),Id(Es(l,o));break e}}s=l=Es(l,o),wt!==4&&(wt=2),la===null?la=[s]:la.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=e0(s,l,e);lh(s,u);break e;case 1:o=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zi===null||!zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=t0(s,o,e);lh(s,x);break e}}s=s.return}while(s!==null)}x0(n)}catch(C){e=C,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(!0)}function _0(){var t=hl.current;return hl.current=fl,t===null?fl:t}function ef(){(wt===0||wt===3||wt===2)&&(wt=4),Nt===null||!(Mr&268435455)&&!(Ol&268435455)||bi(Nt,Ft)}function gl(t,e){var n=Ke;Ke|=2;var i=_0();(Nt!==t||Ft!==e)&&(ai=null,vr(t,e));do try{My();break}catch(r){v0(t,r)}while(!0);if(Fd(),Ke=n,hl.current=i,Et!==null)throw Error(le(261));return Nt=null,Ft=0,wt}function My(){for(;Et!==null;)y0(Et)}function Ey(){for(;Et!==null&&!qv();)y0(Et)}function y0(t){var e=M0(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?x0(t):Et=e,Kd.current=null}function x0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gy(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,Et=null;return}}else if(n=my(n,e,cn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);wt===0&&(wt=5)}function lr(t,e,n){var i=Je,r=Mn.transition;try{Mn.transition=null,Je=1,Ty(t,e,n,i)}finally{Mn.transition=r,Je=i}return null}function Ty(t,e,n,i){do ps();while(Di!==null);if(Ke&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(r_(t,s),t===Nt&&(Et=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||no||(no=!0,E0(Zo,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=Je;Je=1;var o=Ke;Ke|=4,Kd.current=null,_y(t,n),p0(n,t),W_(Lu),Jo=!!bu,Lu=bu=null,t.current=n,yy(n),Kv(),Ke=o,Je=a,Mn.transition=s}else t.current=n;if(no&&(no=!1,Di=t,ml=r),s=t.pendingLanes,s===0&&(zi=null),Qv(n.stateNode),sn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(pl)throw pl=!1,t=Zu,Zu=null,t;return ml&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===Qu?ca++:(ca=0,Qu=t):ca=0,Zi(),null}function ps(){if(Di!==null){var t=eg(ml),e=Mn.transition,n=Je;try{if(Mn.transition=null,Je=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,ml=0,Ke&6)throw Error(le(331));var r=Ke;for(Ke|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var d=xe;switch(d.tag){case 0:case 11:case 15:oa(8,d,s)}var h=d.child;if(h!==null)h.return=d,xe=h;else for(;xe!==null;){d=xe;var f=d.sibling,p=d.return;if(d0(d),d===c){xe=null;break}if(f!==null){f.return=p,xe=f;break}xe=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){a=xe;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,xe=g;else e:for(a=v;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Fl(9,o)}}catch(C){yt(o,o.return,C)}if(o===a){xe=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,xe=x;break e}xe=o.return}}if(Ke=r,Zi(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Rl,t)}catch{}i=!0}return i}finally{Je=n,Mn.transition=e}}return!1}function Ph(t,e,n){e=Es(n,e),e=e0(t,e,1),t=Bi(t,e,1),e=qt(),t!==null&&(Pa(t,1,e),sn(t,e))}function yt(t,e,n){if(t.tag===3)Ph(t,t,n);else for(;e!==null;){if(e.tag===3){Ph(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zi===null||!zi.has(i))){t=Es(n,t),t=t0(e,t,1),e=Bi(e,t,1),t=qt(),e!==null&&(Pa(e,1,t),sn(e,t));break}}e=e.return}}function wy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(wt===4||wt===3&&(Ft&130023424)===Ft&&500>xt()-Zd?vr(t,0):$d|=n),sn(t,e)}function S0(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=qt();t=mi(t,e),t!==null&&(Pa(t,e,n),sn(t,n))}function Ay(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),S0(t,n)}function Cy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),S0(t,n)}var M0;M0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,py(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ct&&e.flags&1048576&&Ag(e,al,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ho(t,e),t=e.pendingProps;var r=ys(e,Wt.current);hs(e,n),r=Wd(null,e,i,t,r,n);var s=Xd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bd(e),r.updater=Ul,e.stateNode=r,r._reactInternals=e,zu(e,i,t,n),e=Gu(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Nd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Py(i),t=bn(i,t),r){case 0:e=Vu(null,e,i,t,n);break e;case 1:e=yh(null,e,i,t,n);break e;case 11:e=vh(null,e,i,t,n);break e;case 14:e=_h(null,e,i,bn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Vu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),yh(t,e,i,r,n);case 3:e:{if(s0(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ng(t,e),cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Es(Error(le(423)),e),e=xh(t,e,i,n,r);break e}else if(i!==r){r=Es(Error(le(424)),e),e=xh(t,e,i,n,r);break e}else for(un=ki(e.stateNode.containerInfo.firstChild),dn=e,ct=!0,Dn=null,n=bg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xs(),i===r){e=gi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return Dg(e),t===null&&Ou(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Nu(i,r)?a=null:s!==null&&Nu(i,s)&&(e.flags|=32),r0(t,e),Yt(t,e,a,n),e.child;case 6:return t===null&&Ou(e),null;case 13:return a0(t,e,n);case 4:return zd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),vh(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,nt(ol,i._currentValue),i._currentValue=a,s!==null)if(kn(s.value,a)){if(s.children===r.children&&!nn.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=fi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ku(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ku(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,hs(e,n),r=En(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=bn(i,e.pendingProps),r=bn(i.type,r),_h(t,e,i,r,n);case 15:return n0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:bn(i,r),Ho(t,e),e.tag=1,rn(i)?(t=!0,rl(e)):t=!1,hs(e,n),Jg(e,i,r),zu(e,i,r,n),Gu(null,e,i,!0,t,n);case 19:return o0(t,e,n);case 22:return i0(t,e,n)}throw Error(le(156,e.tag))};function E0(t,e){return $m(t,e)}function Ry(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,i){return new Ry(t,e,n,i)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Py(t){if(typeof t=="function")return tf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===Sd)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")tf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case qr:return _r(n.children,r,s,e);case yd:a=8,r|=8;break;case uu:return t=xn(12,n,e,r|2),t.elementType=uu,t.lanes=s,t;case du:return t=xn(13,n,e,r),t.elementType=du,t.lanes=s,t;case fu:return t=xn(19,n,e,r),t.elementType=fu,t.lanes=s,t;case Dm:return kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Lm:a=10;break e;case Nm:a=9;break e;case xd:a=11;break e;case Sd:a=14;break e;case Ci:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=xn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=xn(7,t,i,e),t.lanes=n,t}function kl(t,e,n,i){return t=xn(22,t,i,e),t.elementType=Dm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ec(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function by(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nf(t,e,n,i,r,s,a,o,l){return t=new by(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(s),t}function Ly(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function T0(t){if(!t)return ji;t=t._reactInternals;e:{if(Ar(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(rn(n))return Tg(t,n,e)}return e}function w0(t,e,n,i,r,s,a,o,l){return t=nf(n,i,!0,t,r,s,a,o,l),t.context=T0(null),n=t.current,i=qt(),r=Hi(n),s=fi(i,r),s.callback=e??null,Bi(n,s,r),t.current.lanes=r,Pa(t,r,i),sn(t,i),t}function Bl(t,e,n,i){var r=e.current,s=qt(),a=Hi(r);return n=T0(n),e.context===null?e.context=n:e.pendingContext=n,e=fi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Bi(r,e,a),t!==null&&(Fn(t,r,a,s),ko(t,r,a)),a}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rf(t,e){bh(t,e),(t=t.alternate)&&bh(t,e)}function Ny(){return null}var A0=typeof reportError=="function"?reportError:function(t){console.error(t)};function sf(t){this._internalRoot=t}zl.prototype.render=sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Bl(t,e,null,null)};zl.prototype.unmount=sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Bl(null,t,null,null)}),e[pi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&sg(t)}};function af(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function Dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=vl(a);s.call(c)}}var a=w0(e,i,t,0,null,!1,!1,"",Lh);return t._reactRootContainer=a,t[pi]=a.current,_a(t.nodeType===8?t.parentNode:t),Er(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=vl(l);o.call(c)}}var l=nf(t,0,!1,null,null,!1,!1,"",Lh);return t._reactRootContainer=l,t[pi]=l.current,_a(t.nodeType===8?t.parentNode:t),Er(function(){Bl(e,l,n,i)}),l}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=vl(a);o.call(l)}}Bl(e,a,t,r)}else a=Dy(n,e,t,r,i);return vl(a)}tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(Td(e,n|1),sn(e,xt()),!(Ke&6)&&(Ts=xt()+500,Zi()))}break;case 13:Er(function(){var i=mi(t,1);if(i!==null){var r=qt();Fn(i,t,1,r)}}),rf(t,1)}};wd=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=qt();Fn(e,t,134217728,n)}rf(t,134217728)}};ng=function(t){if(t.tag===13){var e=Hi(t),n=mi(t,e);if(n!==null){var i=qt();Fn(n,t,e,i)}rf(t,e)}};ig=function(){return Je};rg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Mu=function(t,e,n){switch(e){case"input":if(mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Nl(i);if(!r)throw Error(le(90));Um(i),mu(i,r)}}}break;case"textarea":Om(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};Wm=Qd;Xm=Er;var Iy={usingClientEntryPoint:!1,Events:[La,Qr,Nl,Vm,Gm,Qd]},Gs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uy={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qm(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||Ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{Rl=io.inject(Uy),Kn=io}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(e))throw Error(le(200));return Ly(t,e,null,n)};hn.createRoot=function(t,e){if(!af(t))throw Error(le(299));var n=!1,i="",r=A0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=nf(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,_a(t.nodeType===8?t.parentNode:t),new sf(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=qm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Er(t)};hn.hydrate=function(t,e,n){if(!Hl(e))throw Error(le(200));return Vl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!af(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=A0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=w0(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};hn.render=function(t,e,n){if(!Hl(e))throw Error(le(200));return Vl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(le(40));return t._reactRootContainer?(Er(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};hn.unstable_batchedUpdates=Qd;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Hl(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return Vl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(t){console.error(t)}}C0(),Cm.exports=hn;var Fy=Cm.exports,Nh=Fy;lu.createRoot=Nh.createRoot,lu.hydrateRoot=Nh.hydrateRoot;const Xo={"United States":"#3b82f6",Russia:"#ef4444",China:"#f59e0b",France:"#8b5cf6","United Kingdom":"#06b6d4",India:"#f97316",Pakistan:"#22c55e",Israel:"#a855f7","North Korea":"#ec4899"},Dh={"United States":5044,Russia:5580,China:500,France:290,"United Kingdom":225,India:172,Pakistan:170,Israel:90,"North Korea":50},Ih={"United States":{1945:6,1950:369,1955:3057,1960:20434,1965:31642,1970:26662,1975:27519,1980:24304,1985:23368,1990:21211,1995:10953,2e3:10577,2005:10295,2010:5113,2015:4571,2020:5800,2025:5044},Russia:{1945:0,1950:5,1955:200,1960:1627,1965:6144,1970:11736,1975:23435,1980:30665,1985:39197,1990:33417,1995:18399,2e3:12188,2005:17e3,2010:12e3,2015:7700,2020:6375,2025:5580},China:{1945:0,1950:0,1955:0,1960:0,1965:5,1970:75,1975:185,1980:280,1985:425,1990:430,1995:400,2e3:400,2005:400,2010:280,2015:260,2020:350,2025:500},France:{1945:0,1950:0,1955:0,1960:1,1965:32,1970:36,1975:188,1980:250,1985:360,1990:505,1995:500,2e3:470,2005:350,2010:300,2015:300,2020:290,2025:290},"United Kingdom":{1945:0,1950:0,1955:10,1960:30,1965:310,1970:394,1975:350,1980:350,1985:300,1990:300,1995:300,2e3:280,2005:281,2010:225,2015:215,2020:225,2025:225},India:{1945:0,1950:0,1955:0,1960:0,1965:0,1970:0,1975:0,1980:0,1985:0,1990:0,1995:0,2e3:60,2005:40,2010:80,2015:120,2020:156,2025:172},Pakistan:{1945:0,1950:0,1955:0,1960:0,1965:0,1970:0,1975:0,1980:0,1985:0,1990:0,1995:0,2e3:24,2005:30,2010:90,2015:130,2020:160,2025:170},Israel:{1945:0,1950:0,1955:0,1960:0,1965:0,1970:8,1975:20,1980:37,1985:44,1990:55,1995:64,2e3:78,2005:82,2010:80,2015:80,2020:90,2025:90},"North Korea":{1945:0,1950:0,1955:0,1960:0,1965:0,1970:0,1975:0,1980:0,1985:0,1990:0,1995:0,2e3:0,2005:0,2010:0,2015:10,2020:40,2025:50}},ro=[1945,1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2e3,2005,2010,2015,2020,2025];function Oy(t,e){if(t[e]!==void 0)return t[e];let n=ro[0],i=ro[ro.length-1];for(const o of ro)if(o<=e&&(n=o),o>=e&&i>e){i=o;break}const r=t[n]??0,s=t[i]??0;if(n===i)return r;const a=(e-n)/(i-n);return Math.round(r+a*(s-r))}function ky(t){const e={};let n=0;for(const r of Object.keys(Ih)){const s=Oy(Ih[r],t);e[r]=s,n+=s}const i=Object.values(e).filter(r=>r>0).length;return{total:n,byCountry:e,nuclearStatesCount:i}}const R0={icbm:"ICBM / Missile Silo",submarine:"Submarine Base",airbase:"Nuclear Air Base",storage:"Storage / Production",test:"Test Site"},Uh=[{name:"New York",country:"United States",lat:40.71,lng:-74.01},{name:"Washington DC",country:"United States",lat:38.9,lng:-77.04},{name:"Los Angeles",country:"United States",lat:34.05,lng:-118.24},{name:"Chicago",country:"United States",lat:41.88,lng:-87.63},{name:"San Francisco",country:"United States",lat:37.77,lng:-122.42},{name:"Houston",country:"United States",lat:29.76,lng:-95.37},{name:"Honolulu",country:"United States",lat:21.31,lng:-157.86},{name:"Toronto",country:"Canada",lat:43.65,lng:-79.38},{name:"London",country:"United Kingdom",lat:51.51,lng:-.13},{name:"Paris",country:"France",lat:48.86,lng:2.35},{name:"Berlin",country:"Germany",lat:52.52,lng:13.41},{name:"Rome",country:"Italy",lat:41.9,lng:12.5},{name:"Kyiv",country:"Ukraine",lat:50.45,lng:30.52},{name:"Moscow",country:"Russia",lat:55.75,lng:37.62},{name:"Beijing",country:"China",lat:39.9,lng:116.4},{name:"Shanghai",country:"China",lat:31.23,lng:121.47},{name:"Tokyo",country:"Japan",lat:35.68,lng:139.69},{name:"Seoul",country:"South Korea",lat:37.57,lng:126.98},{name:"Taipei",country:"Taiwan",lat:25.03,lng:121.57},{name:"Mumbai",country:"India",lat:19.08,lng:72.88},{name:"New Delhi",country:"India",lat:28.61,lng:77.21},{name:"Islamabad",country:"Pakistan",lat:33.69,lng:73.04},{name:"Tehran",country:"Iran",lat:35.69,lng:51.39},{name:"Tel Aviv",country:"Israel",lat:32.08,lng:34.78},{name:"Riyadh",country:"Saudi Arabia",lat:24.71,lng:46.68},{name:"Dubai",country:"UAE",lat:25.2,lng:55.27},{name:"Istanbul",country:"Turkey",lat:41.01,lng:28.98},{name:"Singapore",country:"Singapore",lat:1.35,lng:103.82},{name:"Sydney",country:"Australia",lat:-33.87,lng:151.21}],Fh=[{name:"Ohio-class SSBN (Atlantic)",country:"United States",baseName:"Kings Bay Naval Base",missiles:"Trident II D5",warheads:192,range:12e3,waypoints:[{lat:30.8,lng:-81.5},{lat:35,lng:-65},{lat:42,lng:-55},{lat:50,lng:-40},{lat:55,lng:-30},{lat:50,lng:-20},{lat:42,lng:-35},{lat:35,lng:-55}]},{name:"Ohio-class SSBN (Pacific)",country:"United States",baseName:"Bangor Naval Base",missiles:"Trident II D5",warheads:192,range:12e3,waypoints:[{lat:47.7,lng:-122.7},{lat:45,lng:-140},{lat:40,lng:-155},{lat:35,lng:-170},{lat:30,lng:175},{lat:35,lng:-165},{lat:42,lng:-150},{lat:47,lng:-135}]},{name:"Borei-class SSBN (Northern Fleet)",country:"Russia",baseName:"Gadzhiyevo",missiles:"Bulava SLBM",warheads:96,range:9300,waypoints:[{lat:69.2,lng:33.3},{lat:72,lng:25},{lat:75,lng:15},{lat:78,lng:5},{lat:80,lng:-10},{lat:78,lng:-20},{lat:74,lng:-5},{lat:71,lng:20}]},{name:"Delta IV SSBN (Pacific Fleet)",country:"Russia",baseName:"Vilyuchinsk",missiles:"Sineva SLBM",warheads:64,range:11500,waypoints:[{lat:52.9,lng:158.4},{lat:55,lng:165},{lat:58,lng:175},{lat:55,lng:-175},{lat:50,lng:-170},{lat:48,lng:-178},{lat:50,lng:170},{lat:52,lng:162}]},{name:"Vanguard-class SSBN (CASD)",country:"United Kingdom",baseName:"HMNB Clyde (Faslane)",missiles:"Trident II D5",warheads:40,range:12e3,waypoints:[{lat:56,lng:-4.8},{lat:58,lng:-12},{lat:60,lng:-20},{lat:58,lng:-28},{lat:55,lng:-25},{lat:52,lng:-18},{lat:54,lng:-10},{lat:56,lng:-6}]},{name:"Triomphant-class SSBN",country:"France",baseName:"Île Longue",missiles:"M51 SLBM",warheads:80,range:1e4,waypoints:[{lat:48.3,lng:-4.5},{lat:46,lng:-10},{lat:43,lng:-15},{lat:40,lng:-20},{lat:38,lng:-25},{lat:40,lng:-22},{lat:44,lng:-14},{lat:47,lng:-8}]},{name:"Jin-class SSBN (Type 094)",country:"China",baseName:"Yulin Naval Base",missiles:"JL-3 SLBM",warheads:72,range:1e4,waypoints:[{lat:18.2,lng:109.6},{lat:15,lng:114},{lat:12,lng:118},{lat:10,lng:122},{lat:13,lng:125},{lat:16,lng:120},{lat:18,lng:115},{lat:18.5,lng:111}]},{name:"Arihant-class SSBN",country:"India",baseName:"INS Arihant Base",missiles:"K-4 SLBM",warheads:12,range:3500,waypoints:[{lat:17.7,lng:83.3},{lat:15,lng:80},{lat:12,lng:76},{lat:10,lng:73},{lat:12,lng:70},{lat:15,lng:74},{lat:17,lng:78},{lat:17.5,lng:82}]}],By=6371,zy=["United States","Russia","China","France","United Kingdom","India","Pakistan","Israel","North Korea"],Hy=new Set(["United States","United Kingdom","France"]),Vy=new Set(["United States","United Kingdom","France","Germany","Belgium","Netherlands","Italy","Turkey","Canada","Japan","South Korea","Australia","Poland","Spain","Portugal","Norway","Denmark","Czech Republic","Romania","Bulgaria","Greece","Hungary","Latvia","Lithuania","Estonia","Croatia","Slovenia","Slovakia","Albania","Montenegro","North Macedonia","Finland","Sweden","Iceland","Luxembourg","Ukraine","Taiwan","Singapore","UAE","Israel","Brazil","Mexico","Colombia","Philippines","Thailand"]);function Gy(t){const e=n=>n.filter(i=>i!==t);return t==="India"?["China","Pakistan","North Korea"]:t==="Pakistan"?["India","Israel"]:t==="China"?["United States","United Kingdom","France","India","Russia"]:t==="Russia"?["United States","United Kingdom","France","China"]:t==="North Korea"?["United States","United Kingdom","France"]:t==="Japan"||t==="South Korea"?["Russia","China","North Korea"]:t==="Iran"?["Israel","United States","United Kingdom","France"]:t==="Israel"?["Pakistan","North Korea"]:Hy.has(t)||Vy.has(t)?e(["Russia","China","North Korea","India","Pakistan"]):e([...zy])}function Wy(t,e,n,i){const r=h=>h*Math.PI/180,s=r(t),a=r(n),o=r(n-t),l=r(i-e),c=Math.sin(o/2)**2+Math.cos(s)*Math.cos(a)*Math.sin(l/2)**2,d=2*Math.asin(Math.sqrt(c));return By*d}function Xy(t,e){let n;return t==="icbm"?n=7:t==="submarine"?n=5:t==="airbase"?n=.28:n=7,e/n/60}const jo=[{name:"Malmstrom AFB",country:"United States",lat:47.506,lng:-111.183,type:"icbm",missiles:"Minuteman III",warheads:150,range:13e3,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"St Petersburg",lat:59.93,lng:30.32},{name:"Novosibirsk",lat:55,lng:82.9},{name:"Beijing",lat:39.9,lng:116.4}]},{name:"Minot AFB",country:"United States",lat:48.416,lng:-101.358,type:"icbm",missiles:"Minuteman III",warheads:150,range:13e3,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"St Petersburg",lat:59.93,lng:30.32},{name:"Novosibirsk",lat:55,lng:82.9},{name:"Beijing",lat:39.9,lng:116.4}]},{name:"F.E. Warren AFB",country:"United States",lat:41.153,lng:-104.866,type:"icbm",missiles:"Minuteman III",warheads:150,range:13e3,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"St Petersburg",lat:59.93,lng:30.32},{name:"Novosibirsk",lat:55,lng:82.9},{name:"Beijing",lat:39.9,lng:116.4}]},{name:"Kings Bay Naval Base",country:"United States",lat:30.796,lng:-81.563,type:"submarine",missiles:"Trident II D5",warheads:960,range:12e3,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"Beijing",lat:39.9,lng:116.4},{name:"Pyongyang",lat:39.03,lng:125.73}]},{name:"Bangor Naval Base",country:"United States",lat:47.722,lng:-122.714,type:"submarine",missiles:"Trident II D5",warheads:960,range:12e3,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"Beijing",lat:39.9,lng:116.4},{name:"Pyongyang",lat:39.03,lng:125.73}]},{name:"Whiteman AFB",country:"United States",lat:38.73,lng:-93.548,type:"airbase",missiles:"B-2 Spirit / B-61, B-83",warheads:20,range:11100,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"Tehran",lat:35.69,lng:51.39}]},{name:"Barksdale AFB",country:"United States",lat:32.501,lng:-93.663,type:"airbase",missiles:"B-52H / AGM-86B ALCM",warheads:44,range:16232,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"Tehran",lat:35.69,lng:51.39}]},{name:"Pantex Plant",country:"United States",lat:35.317,lng:-101.571,type:"storage",missiles:"Assembly/Disassembly",warheads:2e3,range:0,status:"Active"},{name:"Kirtland AFB Storage",country:"United States",lat:35.049,lng:-106.567,type:"storage",missiles:"Underground Vaults",warheads:0,range:0,status:"Active"},{name:"Nevada National Security Site",country:"United States",lat:37,lng:-116.05,type:"test",missiles:"Subcritical Tests",warheads:0,range:0,status:"Active"},{name:"Fort Greely (GBI Site)",country:"United States",lat:63.96,lng:-145.73,type:"icbm",missiles:"Ground-Based Interceptors (GBI) - Missile Defense",warheads:0,range:6e3,status:"Active",likelyTargets:[{name:"Pyongyang",lat:39.03,lng:125.73}]},{name:"Eielson AFB",country:"United States",lat:64.66,lng:-147.1,type:"airbase",missiles:"F-35A (nuclear-capable, DCA role)",warheads:0,range:2200,status:"Active",likelyTargets:[]},{name:"Clear Space Force Station",country:"United States",lat:64.29,lng:-149.19,type:"storage",missiles:"LRDR Missile Warning Radar",warheads:0,range:0,status:"Active"},{name:"Büchel Air Base",country:"United States",lat:50.17,lng:7.06,type:"storage",missiles:"B-61 Tactical Nukes (NATO Sharing - Germany)",warheads:20,range:0,status:"Active"},{name:"Kleine Brogel Air Base",country:"United States",lat:51.17,lng:5.47,type:"storage",missiles:"B-61 Tactical Nukes (NATO Sharing - Belgium)",warheads:20,range:0,status:"Active"},{name:"Volkel Air Base",country:"United States",lat:51.66,lng:5.71,type:"storage",missiles:"B-61 Tactical Nukes (NATO Sharing - Netherlands)",warheads:20,range:0,status:"Active"},{name:"Aviano Air Base",country:"United States",lat:46.03,lng:12.6,type:"storage",missiles:"B-61 Tactical Nukes (NATO Sharing - Italy)",warheads:40,range:0,status:"Active"},{name:"Incirlik Air Base",country:"United States",lat:37,lng:35.43,type:"storage",missiles:"B-61 Tactical Nukes (NATO Sharing - Turkey)",warheads:50,range:0,status:"Active"},{name:"Kozelsk (60th Missile Div.)",country:"Russia",lat:54.033,lng:36,type:"icbm",missiles:"SS-27 Topol-M",warheads:60,range:11e3,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"New York",lat:40.71,lng:-74.01},{name:"Chicago",lat:41.88,lng:-87.63},{name:"Los Angeles",lat:34.05,lng:-118.24}]},{name:"Tatishchevo (60th Army)",country:"Russia",lat:51.7,lng:45.4,type:"icbm",missiles:"SS-27 / SS-29 Sarmat",warheads:120,range:18e3,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"New York",lat:40.71,lng:-74.01},{name:"Chicago",lat:41.88,lng:-87.63},{name:"Los Angeles",lat:34.05,lng:-118.24}]},{name:"Dombarovsky",country:"Russia",lat:50.75,lng:59.53,type:"icbm",missiles:"SS-18 Satan / SS-29",warheads:100,range:16e3,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"New York",lat:40.71,lng:-74.01},{name:"Chicago",lat:41.88,lng:-87.63},{name:"Los Angeles",lat:34.05,lng:-118.24}]},{name:"Uzhur (62nd Missile Div.)",country:"Russia",lat:55.3,lng:89.8,type:"icbm",missiles:"SS-18 Satan",warheads:60,range:16e3,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"New York",lat:40.71,lng:-74.01},{name:"Chicago",lat:41.88,lng:-87.63},{name:"Los Angeles",lat:34.05,lng:-118.24}]},{name:"Novosibirsk (39th Div.)",country:"Russia",lat:55,lng:82.9,type:"icbm",missiles:"SS-25 Topol",warheads:36,range:10500,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"New York",lat:40.71,lng:-74.01},{name:"Chicago",lat:41.88,lng:-87.63},{name:"Los Angeles",lat:34.05,lng:-118.24}]},{name:"Yoshkar-Ola (14th Div.)",country:"Russia",lat:56.6,lng:47.9,type:"icbm",missiles:"Yars RS-24",warheads:36,range:12e3,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"New York",lat:40.71,lng:-74.01},{name:"Chicago",lat:41.88,lng:-87.63},{name:"Los Angeles",lat:34.05,lng:-118.24}]},{name:"Gadzhiyevo (Northern Fleet)",country:"Russia",lat:69.25,lng:33.33,type:"submarine",missiles:"Bulava SLBM",warheads:384,range:9300,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"London",lat:51.51,lng:-.13},{name:"New York",lat:40.71,lng:-74.01}]},{name:"Vilyuchinsk (Pacific Fleet)",country:"Russia",lat:52.93,lng:158.4,type:"submarine",missiles:"Sineva / Liner SLBM",warheads:256,range:11500,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"London",lat:51.51,lng:-.13},{name:"New York",lat:40.71,lng:-74.01}]},{name:"Engels-2 Air Base",country:"Russia",lat:51.483,lng:46.2,type:"airbase",missiles:"Tu-160 / Kh-102 ALCM",warheads:60,range:5500,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"Ramstein AFB Germany",lat:49.44,lng:7.6}]},{name:"Ukrainka Air Base",country:"Russia",lat:51.17,lng:128.4,type:"airbase",missiles:"Tu-95MS / Kh-55",warheads:40,range:3e3,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"Ramstein AFB Germany",lat:49.44,lng:7.6}]},{name:"Sarov (Arzamas-16)",country:"Russia",lat:54.933,lng:43.317,type:"storage",missiles:"Research/Production",warheads:0,range:0,status:"Active"},{name:"Novaya Zemlya Test Site",country:"Russia",lat:73.37,lng:54.97,type:"test",missiles:"Nuclear Test Range",warheads:0,range:0,status:"Standby"},{name:"Jianshui (Base 63)",country:"China",lat:23.6,lng:102.8,type:"icbm",missiles:"DF-31AG",warheads:12,range:11200,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"Los Angeles",lat:34.05,lng:-118.24},{name:"Guam",lat:13.44,lng:144.79},{name:"New Delhi",lat:28.61,lng:77.21}]},{name:"Sundian (Base 65)",country:"China",lat:40.5,lng:110.3,type:"icbm",missiles:"DF-41",warheads:36,range:15e3,status:"Active",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"Los Angeles",lat:34.05,lng:-118.24},{name:"Guam",lat:13.44,lng:144.79},{name:"New Delhi",lat:28.61,lng:77.21}]},{name:"Haiyan (Yumen Silos)",country:"China",lat:40.1,lng:97,type:"icbm",missiles:"DF-41 (silo-based)",warheads:120,range:15e3,status:"Under Construction",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"Los Angeles",lat:34.05,lng:-118.24},{name:"Guam",lat:13.44,lng:144.79},{name:"New Delhi",lat:28.61,lng:77.21}]},{name:"Hami Silo Field",country:"China",lat:42.8,lng:93.5,type:"icbm",missiles:"DF-41 (silo-based)",warheads:110,range:15e3,status:"Under Construction",likelyTargets:[{name:"Washington DC",lat:38.9,lng:-77.04},{name:"Los Angeles",lat:34.05,lng:-118.24},{name:"Guam",lat:13.44,lng:144.79},{name:"New Delhi",lat:28.61,lng:77.21}]},{name:"Yulin Naval Base (Hainan)",country:"China",lat:18.22,lng:109.57,type:"submarine",missiles:"JL-3 SLBM",warheads:72,range:1e4,status:"Active",likelyTargets:[{name:"Guam",lat:13.44,lng:144.79},{name:"Honolulu",lat:21.31,lng:-157.86},{name:"Tokyo",lat:35.68,lng:139.69}]},{name:"Jianjiangkou Sub Base",country:"China",lat:36.1,lng:120.6,type:"submarine",missiles:"JL-2 SLBM",warheads:48,range:7400,status:"Active",likelyTargets:[{name:"Guam",lat:13.44,lng:144.79},{name:"Honolulu",lat:21.31,lng:-157.86},{name:"Tokyo",lat:35.68,lng:139.69}]},{name:"Lop Nur Test Site",country:"China",lat:41.55,lng:88.37,type:"test",missiles:"Historic Test Range",warheads:0,range:0,status:"Inactive"},{name:"Île Longue Submarine Base",country:"France",lat:48.3,lng:-4.517,type:"submarine",missiles:"M51 SLBM",warheads:240,range:1e4,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"Tehran",lat:35.69,lng:51.39}]},{name:"Istres-Le Tubé Air Base",country:"France",lat:43.517,lng:4.917,type:"airbase",missiles:"ASMP-A / Rafale",warheads:40,range:600,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"Tehran",lat:35.69,lng:51.39}]},{name:"Saint-Dizier Air Base",country:"France",lat:48.633,lng:4.9,type:"airbase",missiles:"ASMP-A / Rafale",warheads:20,range:600,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"Tehran",lat:35.69,lng:51.39}]},{name:"HMNB Clyde (Faslane)",country:"United Kingdom",lat:56.067,lng:-4.817,type:"submarine",missiles:"Trident II D5",warheads:225,range:12e3,status:"Active",likelyTargets:[{name:"Moscow",lat:55.75,lng:37.62},{name:"St Petersburg",lat:59.93,lng:30.32}]},{name:"AWE Aldermaston",country:"United Kingdom",lat:51.367,lng:-1.15,type:"storage",missiles:"Warhead Production",warheads:0,range:0,status:"Active"},{name:"RNAD Coulport",country:"United Kingdom",lat:56.05,lng:-4.883,type:"storage",missiles:"Warhead Storage",warheads:0,range:0,status:"Active"},{name:"INS Arihant Base (Vizag)",country:"India",lat:17.7,lng:83.3,type:"submarine",missiles:"K-4 / K-15 SLBM",warheads:12,range:3500,status:"Active",likelyTargets:[{name:"Islamabad",lat:33.69,lng:73.04},{name:"Beijing",lat:39.9,lng:116.4}]},{name:"Agni Launch Complex (Wheeler Is.)",country:"India",lat:20.74,lng:87.09,type:"icbm",missiles:"Agni-V",warheads:0,range:5500,status:"Active",likelyTargets:[{name:"Islamabad",lat:33.69,lng:73.04},{name:"Beijing",lat:39.9,lng:116.4}]},{name:"Chandipur (ITR)",country:"India",lat:21.45,lng:86.74,type:"test",missiles:"Missile Test Range",warheads:0,range:0,status:"Active"},{name:"Pokhran Test Range",country:"India",lat:26.73,lng:71.37,type:"test",missiles:"Nuclear Test Range",warheads:0,range:0,status:"Standby"},{name:"Sargodha Air Base",country:"Pakistan",lat:32.05,lng:72.67,type:"airbase",missiles:"Ra'ad ALCM / F-16",warheads:36,range:2750,status:"Active",likelyTargets:[{name:"New Delhi",lat:28.61,lng:77.21},{name:"Mumbai",lat:19.08,lng:72.88}]},{name:"Giri Habibullah (storage)",country:"Pakistan",lat:34.13,lng:73.32,type:"storage",missiles:"Shaheen / Ghauri",warheads:0,range:2750,status:"Active"},{name:"Khuzdar (suspected)",country:"Pakistan",lat:27.8,lng:66.6,type:"storage",missiles:"Mobile TELs",warheads:0,range:1500,status:"Suspected"},{name:"Sonmiani Test Range",country:"Pakistan",lat:25.2,lng:66.6,type:"test",missiles:"Missile Test Range",warheads:0,range:0,status:"Active"},{name:"Negev Nuclear Research Center",country:"Israel",lat:31,lng:35.15,type:"storage",missiles:"Estimated Jericho III",warheads:90,range:6500,status:"Undeclared"},{name:"Palmachim Air Base",country:"Israel",lat:31.9,lng:34.69,type:"icbm",missiles:"Jericho III",warheads:0,range:6500,status:"Undeclared",likelyTargets:[{name:"Tehran",lat:35.69,lng:51.39},{name:"Damascus",lat:33.51,lng:36.29}]},{name:"Sdot Micha (Zekharyah)",country:"Israel",lat:31.72,lng:34.93,type:"icbm",missiles:"Jericho II/III",warheads:25,range:6500,status:"Undeclared",likelyTargets:[{name:"Tehran",lat:35.69,lng:51.39},{name:"Damascus",lat:33.51,lng:36.29}]},{name:"Yongbyon Nuclear Complex",country:"North Korea",lat:39.8,lng:125.75,type:"storage",missiles:"Plutonium Production",warheads:0,range:0,status:"Active"},{name:"Sanum-dong Missile Base",country:"North Korea",lat:39.03,lng:125.72,type:"icbm",missiles:"Hwasong-17/18",warheads:10,range:15e3,status:"Active",likelyTargets:[{name:"Seoul",lat:37.57,lng:126.98},{name:"Tokyo",lat:35.68,lng:139.69},{name:"Guam",lat:13.44,lng:144.79}]},{name:"Sinpo Submarine Base",country:"North Korea",lat:40.03,lng:128.17,type:"submarine",missiles:"Pukguksong SLBM",warheads:0,range:2e3,status:"Testing",likelyTargets:[{name:"Seoul",lat:37.57,lng:126.98},{name:"Tokyo",lat:35.68,lng:139.69},{name:"Guam",lat:13.44,lng:144.79}]},{name:"Punggye-ri Test Site",country:"North Korea",lat:41.28,lng:129.09,type:"test",missiles:"Nuclear Test Tunnels",warheads:0,range:0,status:"Collapsed/Standby"}];function Vn(t,e,n){const i=(90-t)*Math.PI/180,r=(e+180)*Math.PI/180;return{x:-n*Math.sin(i)*Math.cos(r),y:n*Math.cos(i),z:n*Math.sin(i)*Math.sin(r)}}function Oh(t,e,n){const i=Math.acos(Math.max(-1,Math.min(1,e))),r=Math.atan2(n,-t),s=90-i*180/Math.PI,a=r*180/Math.PI-180;return{lat:s,lng:a}}function jy({activeFilter:t,onChangeFilter:e,activeCountry:n,onChangeCountry:i,totalWarheads:r,warheadsByCountry:s,nuclearStatesCount:a,threatMode:o=!1,onThreatModeChange:l,selectedCity:c=null,onSelectCity:d}){const[h,f]=be.useState(""),[p,_]=be.useState(!1),y=be.useMemo(()=>{if(!h.trim())return Uh;const C=h.trim().toLowerCase();return Uh.filter(w=>w.name.toLowerCase().includes(C)||w.country.toLowerCase().includes(C))},[h]),m=[{id:"all",label:"All"},{id:"icbm",label:"ICBM Silo"},{id:"submarine",label:"Sub Base"},{id:"airbase",label:"Air Base"},{id:"storage",label:"Storage"},{id:"test",label:"Test Site"}],u=r??Object.values(Dh).reduce((C,w)=>C+w,0),v=s??Dh,g=a??Object.values(v).filter(C=>C>0).length,x=Object.entries(v).sort((C,w)=>w[1]-C[1]);return U.jsxs("div",{className:"side-panel",children:[l&&U.jsxs("div",{className:"panel-card threat-toggle-card",children:[U.jsxs("button",{type:"button",className:`threat-toggle-btn ${o?"active":""}`,onClick:()=>l(!o),children:[U.jsx("span",{className:"threat-toggle-icon",children:"⊕"}),"THREAT ASSESSMENT"]}),o&&d&&U.jsxs("div",{className:"threat-city-picker",children:[U.jsx("input",{type:"text",className:"threat-city-search",placeholder:"Type to search cities...",value:h,onChange:C=>{f(C.target.value),_(!0)},onFocus:()=>_(!0)}),p&&U.jsxs(U.Fragment,{children:[U.jsx("div",{className:"threat-city-dropdown-backdrop",onClick:()=>_(!1),"aria-hidden":!0}),U.jsxs("div",{className:"threat-city-dropdown",children:[U.jsx("div",{className:"threat-city-hint",children:h.trim()?"Select a city":"Type to search, or click the globe to drop a pin"}),y.slice(0,50).map(C=>U.jsxs("button",{type:"button",className:"threat-city-option",onClick:()=>{d(C),_(!1),f("")},children:[U.jsx("span",{className:"threat-city-option-name",children:C.name}),U.jsx("span",{className:"threat-city-option-country",children:C.country})]},`${C.name}-${C.country}`)),y.length===0&&U.jsx("div",{className:"threat-city-empty",children:"No cities match"})]})]}),c&&U.jsxs("div",{className:"threat-city-selected",children:[c.name,", ",c.country]})]})]}),!o&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"panel-card",children:[U.jsx("h3",{children:"Global Overview"}),U.jsxs("div",{className:"stat-grid",children:[U.jsxs("div",{className:"stat-item",children:[U.jsx("div",{className:"stat-value",id:"total-warheads",children:u.toLocaleString()}),U.jsx("div",{className:"stat-label",children:"Total Warheads"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsx("div",{className:"stat-value",id:"nuclear-states-count",children:g}),U.jsx("div",{className:"stat-label",children:"Nuclear States"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsx("div",{className:"stat-value",children:"—"}),U.jsx("div",{className:"stat-label",children:"Deployed"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsx("div",{className:"stat-value",children:"70"}),U.jsx("div",{className:"stat-label",children:"Known Facilities"})]})]})]}),U.jsxs("div",{className:"panel-card",children:[U.jsx("h3",{children:"Filter by Type"}),U.jsx("div",{className:"filter-row",children:m.map(C=>U.jsx("button",{className:`filter-btn ${t===C.id?"active":""}`,onClick:()=>e(C.id),children:C.label},C.id))})]}),U.jsxs("div",{className:"panel-card",children:[U.jsx("h3",{children:"Nuclear States"}),U.jsx("div",{className:"country-list",children:x.map(([C,w])=>{const A=n===C;return U.jsxs("div",{className:`country-item ${A?"active":""}`,onClick:()=>i(A?null:C),children:[U.jsxs("div",{className:"country-left",children:[U.jsx("div",{className:"country-dot",style:{background:Xo[C]}}),U.jsx("div",{className:"country-name",children:C})]}),U.jsx("div",{className:"country-count",children:w.toLocaleString()})]},C)})})]})]})]})}function Yy({facility:t,onClose:e,rangeDomeVisible:n=!1,onShowRange:i,onHideRange:r,onShowTargets:s}){var c;const a=!!t,l=t&&t.range?Math.min(t.range/18e3*100,100):0;return U.jsx("div",{className:`detail-panel ${a?"open":""}`,children:U.jsxs("div",{className:"panel-card",children:[U.jsxs("div",{className:"detail-header",children:[U.jsx("div",{className:"detail-title",children:t?t.name:"—"}),U.jsx("button",{className:"detail-close",onClick:e,children:"✕"})]}),U.jsx("div",{id:"detail-content",children:t&&U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"detail-row",children:[U.jsx("span",{className:"detail-label",children:"Country"}),U.jsx("span",{className:"detail-value",children:t.country})]}),U.jsxs("div",{className:"detail-row",children:[U.jsx("span",{className:"detail-label",children:"Type"}),U.jsx("span",{className:"detail-value",children:R0[t.type]})]}),U.jsxs("div",{className:"detail-row",children:[U.jsx("span",{className:"detail-label",children:"System"}),U.jsx("span",{className:"detail-value",children:t.missiles})]}),U.jsxs("div",{className:"detail-row",children:[U.jsx("span",{className:"detail-label",children:"Status"}),U.jsx("span",{className:"detail-value",children:t.status})]}),t.baseName?U.jsxs("div",{className:"detail-row",children:[U.jsx("span",{className:"detail-label",children:"Base"}),U.jsx("span",{className:"detail-value",children:t.baseName})]}):null,t.warheads?U.jsxs("div",{className:"detail-row",children:[U.jsx("span",{className:"detail-label",children:"Est. Warheads"}),U.jsx("span",{className:"detail-value",style:{color:"var(--danger)"},children:t.warheads.toLocaleString()})]}):null,t.range>0&&U.jsxs("div",{className:"detail-range",children:[U.jsx("div",{className:"detail-range-title",children:"Maximum Range"}),U.jsx("div",{className:"range-bar-bg",children:U.jsx("div",{className:"range-bar-fill",style:{width:`${l}%`}})}),U.jsxs("div",{className:"range-km",children:[t.range.toLocaleString()," km"]})]}),U.jsxs("div",{className:"detail-actions",children:[t.range>0&&(i||r)&&U.jsx("button",{type:"button",className:"detail-action-btn",onClick:()=>n?r==null?void 0:r():i==null?void 0:i(t),children:n?"Hide Range":"Show Range"}),["icbm","submarine","airbase"].includes(t.type)&&((c=t.likelyTargets)==null?void 0:c.length)&&s&&U.jsx("button",{type:"button",className:"detail-action-btn",onClick:()=>s(t),children:"Show Targets"})]})]})})]})})}function qy(t,e){const n=Xy(t.type,e);return n<1?"< 1 min":n<60?`~${Math.round(n)} min`:`~${(n/60).toFixed(1)} hr`}function Ky({targetCity:t,threateningFacilities:e,onClose:n}){const i=e.reduce((a,o)=>a+(o.facility.warheads||0),0),r=e.reduce((a,o)=>{const l=o.facility.country;return a[l]||(a[l]=[]),a[l].push(o),a},{}),s=Object.keys(r).sort();return U.jsx("div",{className:"threat-panel open",children:U.jsxs("div",{className:"threat-panel-card",children:[U.jsxs("div",{className:"threat-panel-header",children:[U.jsxs("div",{className:"threat-panel-title-block",children:[U.jsx("span",{className:"threat-panel-badge",children:"THREAT ASSESSMENT"}),U.jsx("h2",{className:"threat-panel-city",children:t.name}),U.jsx("div",{className:"threat-panel-country",children:t.country})]}),U.jsx("button",{type:"button",className:"threat-panel-close",onClick:n,"aria-label":"Close threat assessment",children:"✕"})]}),U.jsxs("div",{className:"threat-panel-stats",children:[U.jsxs("div",{className:"threat-stat",children:[U.jsx("span",{className:"threat-stat-value",children:e.length}),U.jsx("span",{className:"threat-stat-label",children:"Facilities in range"})]}),U.jsxs("div",{className:"threat-stat",children:[U.jsx("span",{className:"threat-stat-value",children:i.toLocaleString()}),U.jsx("span",{className:"threat-stat-label",children:"Warheads in range"})]})]}),U.jsx("div",{className:"threat-panel-list-label",children:"Threatening facilities"}),U.jsx("div",{className:"threat-panel-list",children:s.map(a=>U.jsxs("div",{className:"threat-country-group",children:[U.jsx("div",{className:"threat-country-name",children:a}),r[a].map(({facility:o,distanceKm:l})=>U.jsxs("div",{className:"threat-facility-row",children:[U.jsxs("div",{className:"threat-facility-main",children:[U.jsx("span",{className:"threat-facility-name",children:o.name}),U.jsx("span",{className:"threat-facility-missiles",children:o.missiles})]}),U.jsx("div",{className:"threat-facility-time",children:qy(o,l)})]},`${o.name}-${o.lat}`))]},a))})]})})}function $y({getSceneApi:t}){return be.useEffect(()=>{let e=!1;async function n(){try{const i=await fetch("/ne_110m_admin_0_countries.geojson");if(!i.ok)return;const r=await i.json(),s=()=>{if(e)return;const a=t();if(!a){setTimeout(s,100);return}a.addCountryBorders(r)};s()}catch{}}return n(),()=>{e=!0}},[t]),null}const Pr=1945,so=2025,Zy=[{year:1945,label:"First Test (Trinity)"},{year:1949,label:"USSR Tests"},{year:1952,label:"US H-Bomb"},{year:1962,label:"Cuban Missile Crisis"},{year:1968,label:"NPT Signed"},{year:1986,label:"Peak: ~70,300 Warheads"},{year:1991,label:"START I / USSR Collapse"},{year:1996,label:"CTBT"},{year:2002,label:"SORT Treaty"},{year:2010,label:"New START"},{year:2023,label:"Russia Suspends New START"}],Qy=[1950,1960,1970,1980,1990,2e3,2010,2020];function Jy({year:t,onChangeYear:e,totalWarheads:n,isPlaying:i,onPlayPause:r}){const[s,a]=be.useState(!1),o=be.useRef(null),l=be.useRef(!1),c=be.useCallback(m=>(m-Pr)/(so-Pr)*100,[]),d=be.useCallback(m=>{const u=Pr+m/100*(so-Pr);return Math.round(Math.max(Pr,Math.min(so,u)))},[]),h=be.useCallback(m=>{if(!o.current||l.current)return;const u=o.current.getBoundingClientRect(),v=(m.clientX-u.left)/u.width*100;e(d(v))},[e,d]),f=be.useCallback(m=>{var u,v;m.preventDefault(),l.current=!0,(v=(u=m.target).setPointerCapture)==null||v.call(u,m.pointerId)},[]),p=be.useCallback(m=>{if(!l.current||!o.current)return;const u=o.current.getBoundingClientRect(),v=(m.clientX-u.left)/u.width*100;e(d(v))},[e,d]),_=be.useCallback(()=>{l.current=!1},[]);be.useEffect(()=>{const m=()=>{l.current=!1};return window.addEventListener("pointerup",m),()=>window.removeEventListener("pointerup",m)},[]);const y=c(t);return U.jsxs("div",{className:`timeline-slider ${s?"timeline-slider--expanded":""}`,children:[U.jsxs("div",{className:"timeline-bar",onClick:()=>!s&&a(!0),role:"button",tabIndex:0,onKeyDown:m=>{!s&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),a(!0))},"aria-expanded":s,"aria-label":s?"Timeline expanded":"Expand timeline",children:[U.jsxs("div",{className:"timeline-year-block",children:[U.jsx("span",{className:"timeline-year-value",children:t}),U.jsxs("span",{className:"timeline-total-label",children:[n.toLocaleString()," warheads"]})]}),s?U.jsxs(U.Fragment,{children:[U.jsx("button",{type:"button",className:"timeline-play-btn",onClick:m=>{m.stopPropagation(),r()},title:i?"Pause":"Play","aria-label":i?"Pause":"Play",children:i?"⏸ Pause":"▶ Play"}),U.jsx("button",{type:"button",className:"timeline-collapse-btn",onClick:m=>{m.stopPropagation(),a(!1)},title:"Collapse","aria-label":"Collapse timeline",children:"↓"})]}):U.jsx("button",{type:"button",className:"timeline-expand-btn",onClick:m=>{m.stopPropagation(),a(!0)},title:"Expand timeline","aria-label":"Expand timeline",children:"↑"})]}),U.jsxs("div",{className:"timeline-expanded-content",children:[U.jsxs("div",{ref:o,className:"timeline-track",onClick:h,role:"slider","aria-valuemin":Pr,"aria-valuemax":so,"aria-valuenow":t,"aria-label":"Timeline year",children:[U.jsx("div",{className:"timeline-track-fill",style:{width:`${y}%`}}),Qy.map(m=>U.jsx("div",{className:"timeline-tick",style:{left:`${c(m)}%`}},m)),U.jsx("div",{className:"timeline-handle",style:{left:`${y}%`},onPointerDown:f,onPointerMove:p,onPointerUp:_,onPointerCancel:_,onClick:m=>m.stopPropagation(),children:U.jsx("span",{className:"timeline-handle-inner"})})]}),U.jsx("div",{className:"timeline-events",children:Zy.map(m=>{const u=c(m.year),v=m.year<=t;return U.jsxs("div",{className:`timeline-event ${v?"past":""}`,style:{left:`${u}%`},title:m.label,children:[U.jsx("span",{className:"timeline-event-dot"}),U.jsx("span",{className:"timeline-event-tooltip",children:m.label})]},m.year)})})]})]})}function ex({showLanding:t,blockSceneInteraction:e,onEnter:n}){const i=be.useMemo(()=>["> INITIALIZING SECURE CONNECTION...","> LOADING GEOSPATIAL DATA...","> MAPPING 70 NUCLEAR FACILITIES...","> TRACKING 9 NUCLEAR STATES...","> CALCULATING THREAT VECTORS...","> SYSTEM READY"],[]),[r,s]=be.useState([]),[a,o]=be.useState(!1),l=be.useRef(!1);return be.useEffect(()=>{let c=!1;l.current=!1,s([]),o(!1);async function d(h){return new Promise(f=>setTimeout(f,h))}return async function(){const f=[];for(let p=0;p<i.length;p++){if(c)return;f.push(""),s([...f]),p>0&&await d(400);const _=i[p];for(let y=0;y<_.length;y++){if(c)return;f[p]=_.slice(0,y+1),s([...f]),await d(18)}}o(!0)}(),()=>{c=!0}},[i]),U.jsx("div",{className:`landing-overlay ${t?"show":"hide"}`,style:{pointerEvents:e?"auto":"none"},"aria-hidden":!t,children:U.jsxs("div",{className:"landing-content",children:[U.jsx("div",{className:"landing-symbol","aria-hidden":!0,children:"☢"}),U.jsx("div",{className:"landing-title",children:"GLOBAL NUCLEAR ARSENAL TRACKER"}),U.jsx("div",{className:"landing-subtitle",children:"Real-time visualization of the world's nuclear forces"}),U.jsx("div",{className:"landing-data-line",children:"Data sourced from FAS • SIPRI • NTI"}),U.jsx("div",{className:"landing-terminal",children:r.map((c,d)=>U.jsx("div",{className:"landing-terminal-line",children:c},d))}),U.jsx("div",{className:"landing-enter-row",children:a&&U.jsx("button",{type:"button",className:"landing-enter-btn",onClick:()=>{l.current||(l.current=!0,n())},children:"ENTER"})})]})})}function tx({open:t,onClose:e}){return be.useEffect(()=>{if(!t)return;const n=i=>{i.key==="Escape"&&e()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[t,e]),t?U.jsx("div",{className:"data-sources-backdrop",role:"dialog","aria-modal":"true","aria-label":"Data Sources & Methodology",onMouseDown:n=>{n.target===n.currentTarget&&e()},children:U.jsxs("div",{className:"data-sources-modal",children:[U.jsxs("div",{className:"data-sources-header",children:[U.jsx("div",{className:"data-sources-title",children:"DATA SOURCES & METHODOLOGY"}),U.jsx("button",{type:"button",className:"data-sources-close",onClick:e,"aria-label":"Close sources modal",children:"✕"})]}),U.jsxs("div",{className:"data-sources-body",children:[U.jsxs("div",{className:"data-sources-section",children:[U.jsx("div",{className:"data-sources-section-title",children:"Primary Data Sources"}),U.jsxs("div",{className:"data-sources-paragraph",children:[U.jsx("b",{children:"Federation of American Scientists (FAS)"})," — Warhead counts,"," ","facility locations, deployment status. Nuclear Notebook series by Hans Kristensen & Matt Korda."," ",U.jsx("a",{href:"https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces",target:"_blank",rel:"noreferrer",children:"fas.org"})]}),U.jsxs("div",{className:"data-sources-paragraph",children:[U.jsx("b",{children:"Stockholm International Peace Research Institute (SIPRI)"})," — Historical warhead data, annual yearbook estimates."," ",U.jsx("a",{href:"https://sipri.org/yearbook",target:"_blank",rel:"noreferrer",children:"sipri.org"})]}),U.jsxs("div",{className:"data-sources-paragraph",children:[U.jsx("b",{children:"Nuclear Threat Initiative (NTI)"})," — Country profiles, facility details, treaty information."," ",U.jsx("a",{href:"https://nti.org",target:"_blank",rel:"noreferrer",children:"nti.org"})]}),U.jsxs("div",{className:"data-sources-paragraph",children:[U.jsx("b",{children:"CSIS Missile Threat Project"})," — Missile specifications, range data, technical capabilities."," ",U.jsx("a",{href:"https://missilethreat.csis.org",target:"_blank",rel:"noreferrer",children:"missilethreat.csis.org"})]})]}),U.jsxs("div",{className:"data-sources-section",children:[U.jsx("div",{className:"data-sources-section-title",children:"Important Disclaimers"}),U.jsx("div",{className:"data-sources-disclaimer",children:'"This visualization uses publicly available estimates from open-source intelligence. Exact warhead counts, facility capabilities, and deployment details are classified by all nuclear states."'}),U.jsx("div",{className:"data-sources-disclaimer",children:'"Targeting trajectories shown are educated estimates based on publicly known strategic doctrine, geography, and deterrence theory. They do not represent confirmed targeting data."'}),U.jsx("div",{className:"data-sources-disclaimer",children:'"Submarine patrol routes are approximate representations of general patrol areas known from open-source analysis. Actual patrol routes are among the most closely guarded military secrets."'}),U.jsx("div",{className:"data-sources-disclaimer",children:'"This tool is for educational and research purposes only."'})]}),U.jsxs("div",{className:"data-sources-section",children:[U.jsx("div",{className:"data-sources-section-title",children:"Last Updated"}),U.jsx("div",{className:"data-sources-last-updated",children:"March 2025"})]})]})]})}):null}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const of="165",nx=0,kh=1,ix=2,P0=1,rx=2,si=3,Yi=0,Kt=1,Ut=2,Gi=0,ms=1,td=2,Bh=3,zh=4,sx=5,dr=100,ax=101,ox=102,lx=103,cx=104,ux=200,dx=201,fx=202,hx=203,nd=204,id=205,px=206,mx=207,gx=208,vx=209,_x=210,yx=211,xx=212,Sx=213,Mx=214,Ex=0,Tx=1,wx=2,_l=3,Ax=4,Cx=5,Rx=6,Px=7,lf=0,bx=1,Lx=2,Wi=0,Nx=1,Dx=2,Ix=3,Ux=4,Fx=5,Ox=6,kx=7,b0=300,ws=301,As=302,rd=303,sd=304,Gl=306,ad=1e3,ui=1001,od=1002,Sn=1003,Bx=1004,ao=1005,In=1006,wc=1007,gr=1008,qi=1009,zx=1010,Hx=1011,yl=1012,L0=1013,Cs=1014,Ii=1015,Wl=1016,N0=1017,D0=1018,Rs=1020,Vx=35902,Gx=1021,Wx=1022,qn=1023,Xx=1024,jx=1025,gs=1026,Ps=1027,Yx=1028,I0=1029,qx=1030,U0=1031,F0=1033,Ac=33776,Cc=33777,Rc=33778,Pc=33779,Hh=35840,Vh=35841,Gh=35842,Wh=35843,Xh=36196,jh=37492,Yh=37496,qh=37808,Kh=37809,$h=37810,Zh=37811,Qh=37812,Jh=37813,ep=37814,tp=37815,np=37816,ip=37817,rp=37818,sp=37819,ap=37820,op=37821,bc=36492,lp=36494,cp=36495,Kx=36283,up=36284,dp=36285,fp=36286,$x=3200,Zx=3201,O0=0,Qx=1,Li="",Wn="srgb",Qi="srgb-linear",cf="display-p3",Xl="display-p3-linear",xl="linear",st="srgb",Sl="rec709",Ml="p3",br=7680,hp=519,Jx=512,eS=513,tS=514,k0=515,nS=516,iS=517,rS=518,sS=519,pp=35044,mp="300 es",di=2e3,El=2001;class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,ld=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function aS(t,e){return(t%e+e)%e}function Nc(t,e,n){return(1-n)*t+n*e}function Ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,a,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],p=i[5],_=i[8],y=r[0],m=r[3],u=r[6],v=r[1],g=r[4],x=r[7],C=r[2],w=r[5],A=r[8];return s[0]=a*y+o*v+l*C,s[3]=a*m+o*g+l*w,s[6]=a*u+o*x+l*A,s[1]=c*y+d*v+h*C,s[4]=c*m+d*g+h*w,s[7]=c*u+d*x+h*A,s[2]=f*y+p*v+_*C,s[5]=f*m+p*g+_*w,s[8]=f*u+p*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,p=c*s-a*l,_=n*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Dc.makeScale(e,n)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new ke;function B0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function oS(){const t=Ca("canvas");return t.style.display="block",t}const gp={};function z0(t){t in gp||(gp[t]=!0,console.warn(t))}function lS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const vp=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_p=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[Qi]:{transfer:xl,primaries:Sl,toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:st,primaries:Sl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Xl]:{transfer:xl,primaries:Ml,toReference:t=>t.applyMatrix3(_p),fromReference:t=>t.applyMatrix3(vp)},[cf]:{transfer:st,primaries:Ml,toReference:t=>t.convertSRGBToLinear().applyMatrix3(_p),fromReference:t=>t.applyMatrix3(vp).convertLinearToSRGB()}},cS=new Set([Qi,Xl]),Qe={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=oo[e].toReference,r=oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return oo[t].primaries},getTransfer:function(t){return t===Li?xl:oo[t].transfer}};function vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ic(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Lr;class uS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lr===void 0&&(Lr=Ca("canvas")),Lr.width=e.width,Lr.height=e.height;const i=Lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Lr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vs(n[i]/255)*255):n[i]=vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class H0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uc(r[a].image)):s.push(Uc(r[a]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?uS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fS=0;class $t extends Is{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=ui,r=ui,s=In,a=gr,o=qn,l=qi,c=$t.DEFAULT_ANISOTROPY,d=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Da(),this.name="",this.source=new H0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ad:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ad:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=b0;$t.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,x=(p+1)/2,C=(u+1)/2,w=(d+f)/4,A=(h+y)/4,R=(_+m)/4;return g>x&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=A/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-y)/v,this.z=(f-d)/v,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hS extends Is{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new H0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends hS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class V0 extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pS extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],p=s[a+1],_=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==f||c!==p||d!==_){let m=1-o;const u=l*f+c*p+d*_+h*y,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),w=Math.atan2(C,u*v);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const x=o*v;if(l=l*m+f*x,c=c*m+p*x,d=d*m+_*x,h=h*m+y*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*p-c*f,e[n+1]=l*_+d*f+c*h-o*p,e[n+2]=c*_+d*p+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"YXZ":this._x=f*d*h+c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"ZXY":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h-f*p*_;break;case"ZYX":this._x=f*d*h-c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h+f*p*_;break;case"YZX":this._x=f*d*h+c*p*_,this._y=c*p*h+f*d*_,this._z=c*d*_-f*p*h,this._w=c*d*h-f*p*_;break;case"XZY":this._x=f*d*h-c*p*_,this._y=c*p*h-f*d*_,this._z=c*d*_+f*p*h,this._w=c*d*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new I,yp=new Ia;class Ua{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(An.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(An.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=An.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(s,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),co.subVectors(this.max,Xs),Nr.subVectors(e.a,Xs),Dr.subVectors(e.b,Xs),Ir.subVectors(e.c,Xs),xi.subVectors(Dr,Nr),Si.subVectors(Ir,Dr),tr.subVectors(Nr,Ir);let n=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-tr.z,tr.y,xi.z,0,-xi.x,Si.z,0,-Si.x,tr.z,0,-tr.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-tr.y,tr.x,0];return!Oc(n,Nr,Dr,Ir,co)||(n=[1,0,0,0,1,0,0,0,1],!Oc(n,Nr,Dr,Ir,co))?!1:(uo.crossVectors(xi,Si),n=[uo.x,uo.y,uo.z],Oc(n,Nr,Dr,Ir,co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new I,new I,new I,new I,new I,new I,new I,new I],An=new I,lo=new Ua,Nr=new I,Dr=new I,Ir=new I,xi=new I,Si=new I,tr=new I,Xs=new I,co=new I,uo=new I,nr=new I;function Oc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=n.dot(nr),d=i.dot(nr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const mS=new Ua,js=new I,kc=new I;class Fa{constructor(e=new I,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(kc)),this.expandByPoint(js.copy(e.center).sub(kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new I,Bc=new I,fo=new I,Mi=new I,zc=new I,ho=new I,Hc=new I;class jl{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bc.copy(e).add(n).multiplyScalar(.5),fo.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(Bc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(fo),o=Mi.dot(this.direction),l=-Mi.dot(fo),c=Mi.lengthSq(),d=Math.abs(1-a*a);let h,f,p,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const y=1/d;h*=y,f*=y,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Bc).addScaledVector(fo,f),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){zc.subVectors(n,e),ho.subVectors(i,e),Hc.crossVectors(zc,ho);let a=this.direction.dot(Hc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(ho.crossVectors(Mi,ho));if(l<0)return null;const c=o*this.direction.dot(zc.cross(Mi));if(c<0||l+c>a)return null;const d=-o*Mi.dot(Hc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,n,i,r,s,a,o,l,c,d,h,f,p,_,y,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,p,_,y,m)}set(e,n,i,r,s,a,o,l,c,d,h,f,p,_,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=p,u[7]=_,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ur.setFromMatrixColumn(e,0).length(),s=1/Ur.setFromMatrixColumn(e,1).length(),a=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,_=c*d,y=c*h;n[0]=f+y*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-_,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,_=c*d,y=c*h;n[0]=f-y*o,n[4]=-a*h,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*d,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,_=o*d,y=o*h;n[0]=l*d,n[4]=_*c-p,n[8]=f*c+y,n[1]=l*h,n[5]=y*c+f,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=y-f*h,n[8]=_*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*h+_,n[10]=f-y*h}else if(e.order==="XZY"){const f=a*l,p=a*c,_=o*l,y=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+y,n[5]=a*d,n[9]=p*h-_,n[2]=_*h-p,n[6]=o*d,n[10]=y*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gS,e,vS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ei.crossVectors(i,on),Ei.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ei.crossVectors(i,on)),Ei.normalize(),po.crossVectors(on,Ei),r[0]=Ei.x,r[4]=po.x,r[8]=on.x,r[1]=Ei.y,r[5]=po.y,r[9]=on.y,r[2]=Ei.z,r[6]=po.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],p=i[13],_=i[2],y=i[6],m=i[10],u=i[14],v=i[3],g=i[7],x=i[11],C=i[15],w=r[0],A=r[4],R=r[8],M=r[12],S=r[1],L=r[5],H=r[9],B=r[13],K=r[2],ee=r[6],$=r[10],ie=r[14],F=r[3],ne=r[7],re=r[11],q=r[15];return s[0]=a*w+o*S+l*K+c*F,s[4]=a*A+o*L+l*ee+c*ne,s[8]=a*R+o*H+l*$+c*re,s[12]=a*M+o*B+l*ie+c*q,s[1]=d*w+h*S+f*K+p*F,s[5]=d*A+h*L+f*ee+p*ne,s[9]=d*R+h*H+f*$+p*re,s[13]=d*M+h*B+f*ie+p*q,s[2]=_*w+y*S+m*K+u*F,s[6]=_*A+y*L+m*ee+u*ne,s[10]=_*R+y*H+m*$+u*re,s[14]=_*M+y*B+m*ie+u*q,s[3]=v*w+g*S+x*K+C*F,s[7]=v*A+g*L+x*ee+C*ne,s[11]=v*R+g*H+x*$+C*re,s[15]=v*M+g*B+x*ie+C*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*p-i*l*p)+y*(+n*l*p-n*c*f+s*a*f-r*a*p+r*c*d-s*l*d)+m*(+n*c*h-n*o*p-s*a*h+i*a*p+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],u=e[15],v=h*m*c-y*f*c+y*l*p-o*m*p-h*l*u+o*f*u,g=_*f*c-d*m*c-_*l*p+a*m*p+d*l*u-a*f*u,x=d*y*c-_*h*c+_*o*p-a*y*p-d*o*u+a*h*u,C=_*h*l-d*y*l-_*o*f+a*y*f+d*o*m-a*h*m,w=n*v+i*g+r*x+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(y*f*s-h*m*s-y*r*p+i*m*p+h*r*u-i*f*u)*A,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*A,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*p-i*l*p)*A,e[4]=g*A,e[5]=(d*m*s-_*f*s+_*r*p-n*m*p-d*r*u+n*f*u)*A,e[6]=(_*l*s-a*m*s-_*r*c+n*m*c+a*r*u-n*l*u)*A,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*p+n*l*p)*A,e[8]=x*A,e[9]=(_*h*s-d*y*s-_*i*p+n*y*p+d*i*u-n*h*u)*A,e[10]=(a*y*s-_*o*s+_*i*c-n*y*c-a*i*u+n*o*u)*A,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*p-n*o*p)*A,e[12]=C*A,e[13]=(d*y*r-_*h*r+_*i*f-n*y*f-d*i*m+n*h*m)*A,e[14]=(_*o*r-a*y*r-_*i*l+n*y*l+a*i*m-n*o*m)*A,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,p=s*d,_=s*h,y=a*d,m=a*h,u=o*h,v=l*c,g=l*d,x=l*h,C=i.x,w=i.y,A=i.z;return r[0]=(1-(y+u))*C,r[1]=(p+x)*C,r[2]=(_-g)*C,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+u))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+g)*A,r[9]=(m-v)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ur.set(r[0],r[1],r[2]).length();const a=Ur.set(r[4],r[5],r[6]).length(),o=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,d=1/a,h=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=d,Cn.elements[5]*=d,Cn.elements[6]*=d,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,n.setFromRotationMatrix(Cn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=di){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let p,_;if(o===di)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===El)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,p=(i+r)*d;let _,y;if(o===di)_=(a+s)*h,y=-2*h;else if(o===El)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ur=new I,Cn=new lt,gS=new I(0,0,0),vS=new I(1,1,1),Ei=new I,po=new I,on=new I,xp=new lt,Sp=new Ia;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const Mp=new I,Fr=new Ia,ni=new lt,mo=new I,Ys=new I,yS=new I,xS=new Ia,Ep=new I(1,0,0),Tp=new I(0,1,0),wp=new I(0,0,1),Ap={type:"added"},SS={type:"removed"},Or={type:"childadded",child:null},Vc={type:"childremoved",child:null};class Dt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,n=new Zn,i=new Ia,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,n){return Fr.setFromAxisAngle(e,n),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Ep,e)}rotateY(e){return this.rotateOnAxis(Tp,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,n){return Mp.copy(e).applyQuaternion(this.quaternion),this.position.add(Mp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ep,e)}translateY(e){return this.translateOnAxis(Tp,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ys,mo,this.up):ni.lookAt(mo,Ys,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Fr.setFromRotationMatrix(ni),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ap),Or.child=e,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(SS),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ap),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,xS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new I,ii=new I,Gc=new I,ri=new I,kr=new I,Br=new I,Cp=new I,Wc=new I,Xc=new I,jc=new I;class Yn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Rn.subVectors(e,n),r.cross(Rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Rn.subVectors(r,n),ii.subVectors(i,n),Gc.subVectors(e,n);const a=Rn.dot(Rn),o=Rn.dot(ii),l=Rn.dot(Gc),c=ii.dot(ii),d=ii.dot(Gc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static isFrontFacing(e,n,i,r){return Rn.subVectors(i,n),ii.subVectors(e,n),Rn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Rn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;kr.subVectors(r,i),Br.subVectors(s,i),Wc.subVectors(e,i);const l=kr.dot(Wc),c=Br.dot(Wc);if(l<=0&&c<=0)return n.copy(i);Xc.subVectors(e,r);const d=kr.dot(Xc),h=Br.dot(Xc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(kr,a);jc.subVectors(e,s);const p=kr.dot(jc),_=Br.dot(jc);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Br,o);const m=d*_-p*h;if(m<=0&&h-d>=0&&p-_>=0)return Cp.subVectors(s,r),o=(h-d)/(h-d+(p-_)),n.copy(r).addScaledVector(Cp,o);const u=1/(m+y+f);return a=y*u,o=f*u,n.copy(i).addScaledVector(kr,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},go={h:0,s:0,l:0};function Yc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=aS(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Yc(a,s,e+1/3),this.g=Yc(a,s,e),this.b=Yc(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=G0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Ic(e.r),this.g=Ic(e.g),this.b=Ic(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Gt(Ht.r*255,0,255))*65536+Math.round(Gt(Ht.g*255,0,255))*256+Math.round(Gt(Ht.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Wn){Qe.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(go);const i=Nc(Ti.h,go.h,n),r=Nc(Ti.s,go.s,n),s=Nc(Ti.l,go.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new We;We.NAMES=G0;let MS=0;class Cr extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=ms,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=_l,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nd&&(i.blendSrc=this.blendSrc),this.blendDst!==id&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_l&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,vo=new Fe;class On{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return z0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pp&&(e.usage=this.usage),e}}class W0 extends On{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class X0 extends On{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ut extends On{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ES=0;const gn=new lt,qc=new Dt,zr=new I,ln=new Ua,qs=new Ua,Pt=new I;class Mt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?X0:W0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(ln.min,qs.min),ln.expandByPoint(Pt),Pt.addVectors(ln.max,qs.max),ln.expandByPoint(Pt)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Pt.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),Pt.add(zr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new I,l[R]=new I;const c=new I,d=new I,h=new I,f=new Fe,p=new Fe,_=new Fe,y=new I,m=new I;function u(R,M,S){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),d.sub(c),h.sub(c),p.sub(f),_.sub(f);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(y.copy(d).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(L),o[R].add(y),o[M].add(y),o[S].add(y),l[R].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const S=v[R],L=S.start,H=S.count;for(let B=L,K=L+H;B<K;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new I,x=new I,C=new I,w=new I;function A(R){C.fromBufferAttribute(r,R),w.copy(C);const M=o[R];g.copy(M),g.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(w,M);const L=x.dot(l[R])<0?-1:1;a.setXYZW(R,g.x,g.y,g.z,L)}for(let R=0,M=v.length;R<M;++R){const S=v[R],L=S.start,H=S.count;for(let B=L,K=L+H;B<K;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,d=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let u=0;u<d;u++)f[_++]=c[p++]}return new On(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rp=new lt,ir=new jl,_o=new Fa,Pp=new I,Hr=new I,Vr=new I,Gr=new I,Kc=new I,yo=new I,xo=new Fe,So=new Fe,Mo=new Fe,bp=new I,Lp=new I,Np=new I,Eo=new I,To=new I;class at extends Dt{constructor(e=new Mt,n=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(Kc.fromBufferAttribute(h,e),a?yo.addScaledVector(Kc,d):yo.addScaledVector(Kc.sub(n),d))}n.add(yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(_o.containsPoint(ir.origin)===!1&&(ir.intersectSphere(_o,Pp)===null||ir.origin.distanceToSquared(Pp)>(e.far-e.near)**2))&&(Rp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Rp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=g;x<C;x+=3){const w=o.getX(x),A=o.getX(x+1),R=o.getX(x+2);r=wo(this,u,e,i,c,d,h,w,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const v=o.getX(m),g=o.getX(m+1),x=o.getX(m+2);r=wo(this,a,e,i,c,d,h,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){const m=f[_],u=a[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,C=g;x<C;x+=3){const w=x,A=x+1,R=x+2;r=wo(this,u,e,i,c,d,h,w,A,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,u=y;m<u;m+=3){const v=m,g=m+1,x=m+2;r=wo(this,a,e,i,c,d,h,v,g,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function TS(t,e,n,i,r,s,a,o){let l;if(e.side===Kt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Yi,o),l===null)return null;To.copy(o),To.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(To);return c<n.near||c>n.far?null:{distance:c,point:To.clone(),object:t}}function wo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Hr),t.getVertexPosition(l,Vr),t.getVertexPosition(c,Gr);const d=TS(t,e,n,i,Hr,Vr,Gr,Eo);if(d){r&&(xo.fromBufferAttribute(r,o),So.fromBufferAttribute(r,l),Mo.fromBufferAttribute(r,c),d.uv=Yn.getInterpolation(Eo,Hr,Vr,Gr,xo,So,Mo,new Fe)),s&&(xo.fromBufferAttribute(s,o),So.fromBufferAttribute(s,l),Mo.fromBufferAttribute(s,c),d.uv1=Yn.getInterpolation(Eo,Hr,Vr,Gr,xo,So,Mo,new Fe)),a&&(bp.fromBufferAttribute(a,o),Lp.fromBufferAttribute(a,l),Np.fromBufferAttribute(a,c),d.normal=Yn.getInterpolation(Eo,Hr,Vr,Gr,bp,Lp,Np,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};Yn.getNormal(Hr,Vr,Gr,h.normal),d.face=h}return d}class Oa extends Mt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(h,2));function _(y,m,u,v,g,x,C,w,A,R,M){const S=x/A,L=C/R,H=x/2,B=C/2,K=w/2,ee=A+1,$=R+1;let ie=0,F=0;const ne=new I;for(let re=0;re<$;re++){const q=re*L-B;for(let me=0;me<ee;me++){const Ce=me*S-H;ne[y]=Ce*v,ne[m]=q*g,ne[u]=K,c.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[u]=w>0?1:-1,d.push(ne.x,ne.y,ne.z),h.push(me/A),h.push(1-re/R),ie+=1}}for(let re=0;re<R;re++)for(let q=0;q<A;q++){const me=f+q+ee*re,Ce=f+q+ee*(re+1),Y=f+(q+1)+ee*(re+1),oe=f+(q+1)+ee*re;l.push(me,Ce,oe),l.push(Ce,Y,oe),F+=6}o.addGroup(p,F,M),p+=F,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function wS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function j0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const AS={clone:bs,merge:jt};var CS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=wS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Y0 extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new I,Dp=new Fe,Ip=new Fe;class yn extends Y0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ld*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ld*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,Dp,Ip),n.subVectors(Ip,Dp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class PS extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new yn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new yn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new yn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new yn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new yn(Wr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class q0 extends $t{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ws,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new q0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oa(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Gi});s.uniforms.tEquirect.value=n;const a=new at(r,s),o=n.minFilter;return n.minFilter===gr&&(n.minFilter=In),new PS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const $c=new I,LS=new I,NS=new ke;class cr{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$c.subVectors(i,n).cross(LS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||NS.getNormalMatrix(e),r=this.coplanarPoint($c).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Fa,Ao=new I;class df{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],y=r[10],m=r[11],u=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-u).normalize(),i[1].setComponents(l+s,f+c,m+p,x+u).normalize(),i[2].setComponents(l+a,f+d,m+_,x+v).normalize(),i[3].setComponents(l-a,f-d,m-_,x-v).normalize(),i[4].setComponents(l-o,f-h,m-y,x-g).normalize(),n===di)i[5].setComponents(l+o,f+h,m+y,x+g).normalize();else if(n===El)i[5].setComponents(o,h,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function K0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DS(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,o),h.count===-1&&f.length===0&&t.bufferSubData(c,0,d),f.length!==0){for(let p=0,_=f.length;p<_;p++){const y=f[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Yl extends Mt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,p=[],_=[],y=[],m=[];for(let u=0;u<d;u++){const v=u*f-a;for(let g=0;g<c;g++){const x=g*h-s;_.push(x,-v,0),y.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const g=v+c*u,x=v+c*(u+1),C=v+1+c*(u+1),w=v+1+c*u;p.push(g,x,w),p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}var IS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,GS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,iM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$M=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,HE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:IS,alphahash_pars_fragment:US,alphamap_fragment:FS,alphamap_pars_fragment:OS,alphatest_fragment:kS,alphatest_pars_fragment:BS,aomap_fragment:zS,aomap_pars_fragment:HS,batching_pars_vertex:VS,batching_vertex:GS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:jS,iridescence_fragment:YS,bumpmap_pars_fragment:qS,clipping_planes_fragment:KS,clipping_planes_pars_fragment:$S,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:QS,color_fragment:JS,color_pars_fragment:eM,color_pars_vertex:tM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:aM,displacementmap_vertex:oM,emissivemap_fragment:lM,emissivemap_pars_fragment:cM,colorspace_fragment:uM,colorspace_pars_fragment:dM,envmap_fragment:fM,envmap_common_pars_fragment:hM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:vM,fog_pars_vertex:_M,fog_fragment:yM,fog_pars_fragment:xM,gradientmap_pars_fragment:SM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:wM,lights_toon_fragment:CM,lights_toon_pars_fragment:RM,lights_phong_fragment:PM,lights_phong_pars_fragment:bM,lights_physical_fragment:LM,lights_physical_pars_fragment:NM,lights_fragment_begin:DM,lights_fragment_maps:IM,lights_fragment_end:UM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:BM,map_fragment:zM,map_pars_fragment:HM,map_particle_fragment:VM,map_particle_pars_fragment:GM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:XM,morphinstance_vertex:jM,morphcolor_vertex:YM,morphnormal_vertex:qM,morphtarget_pars_vertex:KM,morphtarget_vertex:$M,normal_fragment_begin:ZM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:aE,opaque_fragment:oE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:dE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:vE,shadowmask_pars_fragment:_E,skinbase_vertex:yE,skinning_pars_vertex:xE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:wE,tonemapping_pars_fragment:AE,transmission_fragment:CE,transmission_pars_fragment:RE,uv_pars_fragment:PE,uv_pars_vertex:bE,uv_vertex:LE,worldpos_vertex:NE,background_vert:DE,background_frag:IE,backgroundCube_vert:UE,backgroundCube_frag:FE,cube_vert:OE,cube_frag:kE,depth_vert:BE,depth_frag:zE,distanceRGBA_vert:HE,distanceRGBA_frag:VE,equirect_vert:GE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:jE,meshbasic_vert:YE,meshbasic_frag:qE,meshlambert_vert:KE,meshlambert_frag:$E,meshmatcap_vert:ZE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:e1,meshphong_vert:t1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:r1,meshtoon_vert:s1,meshtoon_frag:a1,points_vert:o1,points_frag:l1,shadow_vert:c1,shadow_frag:u1,sprite_vert:d1,sprite_frag:f1},ge={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Xn={basic:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:jt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:jt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:jt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new We(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:jt([ge.points,ge.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:jt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:jt([ge.common,ge.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:jt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:jt([ge.sprite,ge.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:jt([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:jt([ge.lights,ge.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Xn.physical={uniforms:jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Co={r:0,b:0,g:0},sr=new Zn,h1=new lt;function p1(t,e,n,i,r,s,a){const o=new We(0);let l=s===!0?0:1,c,d,h=null,f=0,p=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?n:e).get(g)),g}function y(v){let g=!1;const x=_(v);x===null?u(o,l):x&&x.isColor&&(u(x,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const x=_(g);x&&(x.isCubeTexture||x.mapping===Gl)?(d===void 0&&(d=new at(new Oa(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:bs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),sr.copy(g.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(sr)),d.material.toneMapped=Qe.getTransfer(x.colorSpace)!==st,(h!==x||f!==x.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new at(new Yl(2,2),new Qn({name:"BackgroundMaterial",uniforms:bs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(Co,j0(t)),i.buffers.color.setClear(Co.r,Co.g,Co.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(v,g=1){o.set(v),l=g,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:y,addToRenderList:m}}function m1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,L,H,B,K){let ee=!1;const $=h(B,H,L);s!==$&&(s=$,c(s.object)),ee=p(S,B,H,K),ee&&_(S,B,H,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,x(S,L,H,B),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function h(S,L,H){const B=H.wireframe===!0;let K=i[S.id];K===void 0&&(K={},i[S.id]=K);let ee=K[L.id];ee===void 0&&(ee={},K[L.id]=ee);let $=ee[B];return $===void 0&&($=f(l()),ee[B]=$),$}function f(S){const L=[],H=[],B=[];for(let K=0;K<n;K++)L[K]=0,H[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,L,H,B){const K=s.attributes,ee=L.attributes;let $=0;const ie=H.getAttributes();for(const F in ie)if(ie[F].location>=0){const re=K[F];let q=ee[F];if(q===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),re===void 0||re.attribute!==q||q&&re.data!==q.data)return!0;$++}return s.attributesNum!==$||s.index!==B}function _(S,L,H,B){const K={},ee=L.attributes;let $=0;const ie=H.getAttributes();for(const F in ie)if(ie[F].location>=0){let re=ee[F];re===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const q={};q.attribute=re,re&&re.data&&(q.data=re.data),K[F]=q,$++}s.attributes=K,s.attributesNum=$,s.index=B}function y(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){u(S,0)}function u(S,L){const H=s.newAttributes,B=s.enabledAttributes,K=s.attributeDivisors;H[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),K[S]!==L&&(t.vertexAttribDivisor(S,L),K[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,B=L.length;H<B;H++)L[H]!==S[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function g(S,L,H,B,K,ee,$){$===!0?t.vertexAttribIPointer(S,L,H,K,ee):t.vertexAttribPointer(S,L,H,B,K,ee)}function x(S,L,H,B){y();const K=B.attributes,ee=H.getAttributes(),$=L.defaultAttributeValues;for(const ie in ee){const F=ee[ie];if(F.location>=0){let ne=K[ie];if(ne===void 0&&(ie==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),ie==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){const re=ne.normalized,q=ne.itemSize,me=e.get(ne);if(me===void 0)continue;const Ce=me.buffer,Y=me.type,oe=me.bytesPerElement,ve=Y===t.INT||Y===t.UNSIGNED_INT||ne.gpuType===L0;if(ne.isInterleavedBufferAttribute){const pe=ne.data,Be=pe.stride,Ie=ne.offset;if(pe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<F.locationSize;Xe++)u(F.location+Xe,pe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Xe=0;Xe<F.locationSize;Xe++)m(F.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Xe=0;Xe<F.locationSize;Xe++)g(F.location+Xe,q/F.locationSize,Y,re,Be*oe,(Ie+q/F.locationSize*Xe)*oe,ve)}else{if(ne.isInstancedBufferAttribute){for(let pe=0;pe<F.locationSize;pe++)u(F.location+pe,ne.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<F.locationSize;pe++)m(F.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let pe=0;pe<F.locationSize;pe++)g(F.location+pe,q/F.locationSize,Y,re,q*oe,q/F.locationSize*pe*oe,ve)}}else if($!==void 0){const re=$[ie];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(F.location,re);break;case 3:t.vertexAttrib3fv(F.location,re);break;case 4:t.vertexAttrib4fv(F.location,re);break;default:t.vertexAttrib1fv(F.location,re)}}}}v()}function C(){R();for(const S in i){const L=i[S];for(const H in L){const B=L[H];for(const K in B)d(B[K].object),delete B[K];delete L[H]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const B=L[H];for(const K in B)d(B[K].object),delete B[K];delete L[H]}delete i[S.id]}function A(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const B=H[S.id];for(const K in B)d(B[K].object),delete B[K];delete H[S.id]}}function R(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function g1(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h;p++)this.render(c[p],d[p]);else{f.multiDrawArraysWEBGL(i,c,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=d[_];n.update(p,i,1)}}function l(c,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=d[y];for(let y=0;y<f.length;y++)n.update(_,i,f[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function v1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==qn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===Wl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ii&&!A)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:u,maxVaryings:v,maxFragmentUniforms:g,vertexTextures:x,maxSamples:C}}function _1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?d(null):c();else{const v=s?0:i,g=v*4;let x=u.clippingState||null;l.value=x,x=d(_,f,g,p);for(let C=0;C!==g;++C)x[C]=n[C];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const u=p+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,x=p;g!==y;++g,x+=4)a.copy(h[g]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function y1(t){let e=new WeakMap;function n(a,o){return o===rd?a.mapping=ws:o===sd&&(a.mapping=As),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===rd||o===sd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bS(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $0 extends Y0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ss=4,Up=[.125,.215,.35,.446,.526,.582],fr=20,Zc=new $0,Fp=new We;let Qc=null,Jc=0,eu=0,tu=!1;const ur=(1+Math.sqrt(5))/2,jr=1/ur,Op=[new I(-ur,jr,0),new I(ur,jr,0),new I(-jr,0,ur),new I(jr,0,ur),new I(0,ur,-jr),new I(0,ur,jr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,eu),this._renderer.xr.enabled=tu,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ws||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:Wl,format:qn,colorSpace:Qi,depthBuffer:!1},r=Bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x1(s)),this._blurMaterial=S1(s,e,n)}return r}_compileMaterial(e){const n=new at(this._lodPlanes[0],e);this._renderer.compile(n,Zc)}_sceneToCubeUV(e,n,i,r){const o=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Fp),d.toneMapping=Wi,d.autoClear=!1;const p=new Pn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),_=new at(new Oa,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Fp),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const g=this._cubeSize;Ro(r,v*g,u>2?g:0,g,g),d.setRenderTarget(r),y&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ws||e.mapping===As;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ro(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Zc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Op[(r-s-1)%Op.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new at(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),y=s/_,m=isFinite(s)?1+Math.floor(d*y):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const u=[];let v=0;for(let A=0;A<fr;++A){const R=A/y,M=Math.exp(-R*R/2);u.push(M),A===0?v+=M:A<m&&(v+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const x=this._sizeLods[r],C=3*x*(r>g-ss?r-g+ss:0),w=4*(this._cubeSize-x);Ro(n,C,w,3*x,2*x),l.setRenderTarget(n),l.render(h,Zc)}}function x1(t){const e=[],n=[],i=[];let r=t;const s=t-ss+1+Up.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ss?l=Up[a-t+ss-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,_=6,y=3,m=2,u=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(u*_*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,R=w>2?0:-1,M=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];v.set(M,y*_*w),g.set(f,m*_*w);const S=[w,w,w,w,w,w];x.set(S,u*_*w)}const C=new Mt;C.setAttribute("position",new On(v,y)),C.setAttribute("uv",new On(g,m)),C.setAttribute("faceIndex",new On(x,u)),e.push(C),r>ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bp(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function S1(t,e,n){const i=new Float32Array(fr),r=new I(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function zp(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Hp(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===rd||l===sd,d=l===ws||l===As;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new kp(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new kp(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function E1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&z0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function T1(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const C=v[g+0],w=v[g+1],A=v[g+2];f.push(C,w,w,A,A,C)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const C=g+0,w=g+1,A=g+2;f.push(C,w,w,A,A,C)}}else return;const m=new(B0(f)?X0:W0)(f,1);m.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function w1(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function c(f,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,f*a,_),n.update(p,i,_))}function d(f,p,_){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<_;m++)this.render(f[m]/a,p[m]);else{y.multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}}function h(f,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,_);let u=0;for(let v=0;v<_;v++)u+=p[v];for(let v=0;v<y.length;v++)n.update(u,i,y[v])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function A1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function C1(t,e,n){const i=new WeakMap,r=new Lt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*w*4*h),R=new V0(A,C,w,h);R.type=Ii,R.needsUpdate=!0;const M=x*4;for(let L=0;L<h;L++){const H=u[L],B=v[L],K=g[L],ee=C*w*4*L;for(let $=0;$<H.count;$++){const ie=$*M;_===!0&&(r.fromBufferAttribute(H,$),A[ee+ie+0]=r.x,A[ee+ie+1]=r.y,A[ee+ie+2]=r.z,A[ee+ie+3]=0),y===!0&&(r.fromBufferAttribute(B,$),A[ee+ie+4]=r.x,A[ee+ie+5]=r.y,A[ee+ie+6]=r.z,A[ee+ie+7]=0),m===!0&&(r.fromBufferAttribute(K,$),A[ee+ie+8]=r.x,A[ee+ie+9]=r.y,A[ee+ie+10]=r.z,A[ee+ie+11]=K.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Fe(C,w)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function R1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Z0 extends $t{constructor(e,n,i,r,s,a,o,l,c,d=gs){if(d!==gs&&d!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===gs&&(i=Cs),i===void 0&&d===Ps&&(i=Rs),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Q0=new $t,J0=new Z0(1,1);J0.compareFunction=k0;const ev=new V0,tv=new pS,nv=new q0,Vp=[],Gp=[],Wp=new Float32Array(16),Xp=new Float32Array(9),jp=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vp[r];if(s===void 0&&(s=new Float32Array(r),Vp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ql(t,e){let n=Gp[e];n===void 0&&(n=new Int32Array(e),Gp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function D1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;jp.set(i),t.uniformMatrix2fv(this.addr,!1,jp),Ct(n,i)}}function I1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Xp.set(i),t.uniformMatrix3fv(this.addr,!1,Xp),Ct(n,i)}}function U1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(At(n,i))return;Wp.set(i),t.uniformMatrix4fv(this.addr,!1,Wp),Ct(n,i)}}function F1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function W1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?J0:Q0;n.setTexture2D(e||s,r)}function X1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tv,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||nv,r)}function Y1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ev,r)}function q1(t){switch(t){case 5126:return P1;case 35664:return b1;case 35665:return L1;case 35666:return N1;case 35674:return D1;case 35675:return I1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return k1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return H1;case 36295:return V1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Y1}}function K1(t,e){t.uniform1fv(this.addr,e)}function $1(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function Z1(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function Q1(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function J1(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eT(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tT(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nT(t,e){t.uniform1iv(this.addr,e)}function iT(t,e){t.uniform2iv(this.addr,e)}function rT(t,e){t.uniform3iv(this.addr,e)}function sT(t,e){t.uniform4iv(this.addr,e)}function aT(t,e){t.uniform1uiv(this.addr,e)}function oT(t,e){t.uniform2uiv(this.addr,e)}function lT(t,e){t.uniform3uiv(this.addr,e)}function cT(t,e){t.uniform4uiv(this.addr,e)}function uT(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Q0,s[a])}function dT(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||tv,s[a])}function fT(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||nv,s[a])}function hT(t,e,n){const i=this.cache,r=e.length,s=ql(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ev,s[a])}function pT(t){switch(t){case 5126:return K1;case 35664:return $1;case 35665:return Z1;case 35666:return Q1;case 35674:return J1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return hT}}class mT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=q1(n.type)}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pT(n.type)}}class vT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nu=/(\w+)(\])?(\[|\.)?/g;function Yp(t,e){t.seq.push(e),t.map[e.id]=e}function _T(t,e,n){const i=t.name,r=i.length;for(nu.lastIndex=0;;){const s=nu.exec(i),a=nu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Yp(n,c===void 0?new mT(o,t,e):new gT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new vT(o),Yp(n,h)),n=h}}}class Yo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);_T(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yT=37297;let xT=0;function ST(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function MT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Ml&&n===Sl?i="LinearDisplayP3ToLinearSRGB":e===Sl&&n===Ml&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Xl:return[i,"LinearTransferOETF"];case Wn:case cf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Kp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ST(t.getShaderSource(e),a)}else return r}function ET(t,e){const n=MT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function TT(t,e){let n;switch(e){case Nx:n="Linear";break;case Dx:n="Reinhard";break;case Ix:n="OptimizedCineon";break;case Ux:n="ACESFilmic";break;case Ox:n="AgX";break;case kx:n="Neutral";break;case Fx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function wT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function AT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ea(t){return t!==""}function $p(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RT=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(t){return t.replace(RT,bT)}const PT=new Map;function bT(t,e){let n=Oe[e];if(n===void 0){const i=PT.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cd(n)}const LT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(t){return t.replace(LT,NT)}function NT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Jp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function IT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ws:case As:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function FT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case lf:e="ENVMAP_BLENDING_MULTIPLY";break;case bx:e="ENVMAP_BLENDING_MIX";break;case Lx:e="ENVMAP_BLENDING_ADD";break}return e}function OT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=DT(n),c=IT(n),d=UT(n),h=FT(n),f=OT(n),p=wT(n),_=AT(s),y=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ea).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ea).join(`
`),u.length>0&&(u+=`
`)):(m=[Jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),u=[Jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Wi?TT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,ET("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ea).join(`
`)),a=cd(a),a=$p(a,n),a=Zp(a,n),o=cd(o),o=$p(o,n),o=Zp(o,n),a=Qp(a),o=Qp(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===mp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+m+a,x=v+u+o,C=qp(r,r.VERTEX_SHADER,g),w=qp(r,r.FRAGMENT_SHADER,x);r.attachShader(y,C),r.attachShader(y,w),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(w).trim();let ee=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,w);else{const ie=Kp(r,C,"vertex"),F=Kp(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+ie+`
`+F)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||K==="")&&($=!1);$&&(L.diagnostics={runnable:ee,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:K,prefix:u}})}r.deleteShader(C),r.deleteShader(w),R=new Yo(r,y),M=CT(r,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,yT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=w,this}let BT=0;class zT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HT(e),n.set(e,i)),i}}class HT{constructor(e){this.id=BT++,this.code=e,this.usedTimes=0}}function VT(t,e,n,i,r,s,a){const o=new uf,l=new zT,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,H,B){const K=H.fog,ee=B.geometry,$=M.isMeshStandardMaterial?H.environment:null,ie=(M.isMeshStandardMaterial?n:e).get(M.envMap||$),F=ie&&ie.mapping===Gl?ie.image.height:null,ne=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const re=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,q=re!==void 0?re.length:0;let me=0;ee.morphAttributes.position!==void 0&&(me=1),ee.morphAttributes.normal!==void 0&&(me=2),ee.morphAttributes.color!==void 0&&(me=3);let Ce,Y,oe,ve;if(ne){const et=Xn[ne];Ce=et.vertexShader,Y=et.fragmentShader}else Ce=M.vertexShader,Y=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),ve=l.getFragmentShaderID(M);const pe=t.getRenderTarget(),Be=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Xe=!!M.map,D=!!M.matcap,He=!!ie,Ve=!!M.aoMap,it=!!M.lightMap,Re=!!M.bumpMap,je=!!M.normalMap,ze=!!M.displacementMap,Ue=!!M.emissiveMap,dt=!!M.metalnessMap,b=!!M.roughnessMap,E=M.anisotropy>0,j=M.clearcoat>0,se=M.dispersion>0,P=M.iridescence>0,O=M.sheen>0,J=M.transmission>0,W=E&&!!M.anisotropyMap,X=j&&!!M.clearcoatMap,ue=j&&!!M.clearcoatNormalMap,Z=j&&!!M.clearcoatRoughnessMap,ce=P&&!!M.iridescenceMap,ye=P&&!!M.iridescenceThicknessMap,Se=O&&!!M.sheenColorMap,ae=O&&!!M.sheenRoughnessMap,we=!!M.specularMap,Le=!!M.specularColorMap,Ge=!!M.specularIntensityMap,N=J&&!!M.transmissionMap,fe=J&&!!M.thicknessMap,Q=!!M.gradientMap,te=!!M.alphaMap,de=M.alphaTest>0,Ae=!!M.alphaHash,qe=!!M.extensions;let ft=Wi;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ft=t.toneMapping);const gt={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:Ce,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Qi,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:D,envMap:He,envMapMode:He&&ie.mapping,envMapCubeUVHeight:F,aoMap:Ve,lightMap:it,bumpMap:Re,normalMap:je,displacementMap:f&&ze,emissiveMap:Ue,normalMapObjectSpace:je&&M.normalMapType===Qx,normalMapTangentSpace:je&&M.normalMapType===O0,metalnessMap:dt,roughnessMap:b,anisotropy:E,anisotropyMap:W,clearcoat:j,clearcoatMap:X,clearcoatNormalMap:ue,clearcoatRoughnessMap:Z,dispersion:se,iridescence:P,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:O,sheenColorMap:Se,sheenRoughnessMap:ae,specularMap:we,specularColorMap:Le,specularIntensityMap:Ge,transmission:J,transmissionMap:N,thicknessMap:fe,gradientMap:Q,opaque:M.transparent===!1&&M.blending===ms&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:de,alphaHash:Ae,combine:M.combine,mapUv:Xe&&y(M.map.channel),aoMapUv:Ve&&y(M.aoMap.channel),lightMapUv:it&&y(M.lightMap.channel),bumpMapUv:Re&&y(M.bumpMap.channel),normalMapUv:je&&y(M.normalMap.channel),displacementMapUv:ze&&y(M.displacementMap.channel),emissiveMapUv:Ue&&y(M.emissiveMap.channel),metalnessMapUv:dt&&y(M.metalnessMap.channel),roughnessMapUv:b&&y(M.roughnessMap.channel),anisotropyMapUv:W&&y(M.anisotropyMap.channel),clearcoatMapUv:X&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ae&&y(M.sheenRoughnessMap.channel),specularMapUv:we&&y(M.specularMap.channel),specularColorMapUv:Le&&y(M.specularColorMap.channel),specularIntensityMapUv:Ge&&y(M.specularIntensityMap.channel),transmissionMapUv:N&&y(M.transmissionMap.channel),thicknessMapUv:fe&&y(M.thicknessMap.channel),alphaMapUv:te&&y(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(je||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!ee.attributes.uv&&(Xe||te),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ft,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ut,flipSided:M.side===Kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:qe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qe&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(S,M),g(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function g(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),M.push(o.mask)}function x(M){const S=_[M.type];let L;if(S){const H=Xn[S];L=AS.clone(H.uniforms)}else L=M.uniforms;return L}function C(M,S){let L;for(let H=0,B=d.length;H<B;H++){const K=d[H];if(K.cacheKey===S){L=K,++L.usedTimes;break}}return L===void 0&&(L=new kT(t,S,M,s),d.push(L)),L}function w(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function A(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:A,programs:d,dispose:R}}function GT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function WT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function em(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function tm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,p,_,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function o(h,f,p,_,y,m){const u=a(h,f,p,_,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(h,f,p,_,y,m){const u=a(h,f,p,_,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||WT),i.length>1&&i.sort(f||em),r.length>1&&r.sort(f||em)}function d(){for(let h=e,f=t.length;h<f;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function XT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new tm,t.set(i,[a])):r>=s.length?(a=new tm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function jT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new We};break;case"SpotLight":n={position:new I,direction:new I,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qT=0;function KT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $T(t){const e=new jT,n=YT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new lt,a=new lt;function o(c){let d=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,y=0,m=0,u=0,v=0,g=0,x=0,C=0,w=0,A=0;c.sort(KT);for(let M=0,S=c.length;M<S;M++){const L=c[M],H=L.color,B=L.intensity,K=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=H.r*B,h+=H.g*B,f+=H.b*B;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],B);A++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ie=L.shadow,F=n.get(L);F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(H).multiplyScalar(B),$.distance=K,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[y]=$;const ie=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,ie.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[y]=ie.matrix,L.castShadow){const F=n.get(L);F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=ee,x++}y++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(H).multiplyScalar(B),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const ie=L.shadow,F=n.get(L);F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,F.shadowCameraNear=ie.camera.near,F.shadowCameraFar=ie.camera.far,i.pointShadow[_]=F,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=L.shadow.matrix,g++}i.point[_]=$,_++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(B),$.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[u]=$,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==v||R.numPointShadows!==g||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=x+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=v,R.numPointShadows=g,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=A,i.version=qT++)}function l(c,d){let h=0,f=0,p=0,_=0,y=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(g.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(g.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(g.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function nm(t){const e=new $T(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ZT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new nm(t),e.set(r,[o])):s>=a.length?(o=new nm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class QT extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JT extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nw(t,e,n){let i=new df;const r=new Fe,s=new Fe,a=new Lt,o=new QT({depthPacking:Zx}),l=new JT,c={},d=n.maxTextureSize,h={[Yi]:Kt,[Kt]:Yi,[Ut]:Ut},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Mt;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new at(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P0;let u=this.type;this.render=function(w,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Gi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=u!==si&&this.type===si,K=u===si&&this.type!==si;for(let ee=0,$=w.length;ee<$;ee++){const ie=w[ee],F=ie.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const ne=F.getFrameExtents();if(r.multiply(ne),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ne.x),r.x=s.x*ne.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ne.y),r.y=s.y*ne.y,F.mapSize.y=s.y)),F.map===null||B===!0||K===!0){const q=this.type!==si?{minFilter:Sn,magFilter:Sn}:{};F.map!==null&&F.map.dispose(),F.map=new Tr(r.x,r.y,q),F.map.texture.name=ie.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const re=F.getViewportCount();for(let q=0;q<re;q++){const me=F.getViewport(q);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(a),F.updateMatrices(ie,q),i=F.getFrustum(),x(A,R,F.camera,ie,this.type)}F.isPointLightShadow!==!0&&this.type===si&&v(F,R),F.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(M,S,L)};function v(w,A){const R=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Tr(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,R,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,R,p,y,null)}function g(w,A,R,M){let S=null;const L=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,B=A.uuid;let K=c[H];K===void 0&&(K={},c[H]=K);let ee=K[B];ee===void 0&&(ee=S.clone(),K[B]=ee,A.addEventListener("dispose",C)),S=ee}if(S.visible=A.visible,S.wireframe=A.wireframe,M===si?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=R}return S}function x(w,A,R,M,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===si)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=e.update(w),K=w.material;if(Array.isArray(K)){const ee=B.groups;for(let $=0,ie=ee.length;$<ie;$++){const F=ee[$],ne=K[F.materialIndex];if(ne&&ne.visible){const re=g(w,ne,M,S);w.onBeforeShadow(t,w,A,R,B,re,F),t.renderBufferDirect(R,null,B,re,w,F),w.onAfterShadow(t,w,A,R,B,re,F)}}}else if(K.visible){const ee=g(w,K,M,S);w.onBeforeShadow(t,w,A,R,B,ee,null),t.renderBufferDirect(R,null,B,ee,w,null),w.onAfterShadow(t,w,A,R,B,ee,null)}}const H=w.children;for(let B=0,K=H.length;B<K;B++)x(H[B],A,R,M,S)}function C(w){w.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function iw(t){function e(){let N=!1;const fe=new Lt;let Q=null;const te=new Lt(0,0,0,0);return{setMask:function(de){Q!==de&&!N&&(t.colorMask(de,de,de,de),Q=de)},setLocked:function(de){N=de},setClear:function(de,Ae,qe,ft,gt){gt===!0&&(de*=ft,Ae*=ft,qe*=ft),fe.set(de,Ae,qe,ft),te.equals(fe)===!1&&(t.clearColor(de,Ae,qe,ft),te.copy(fe))},reset:function(){N=!1,Q=null,te.set(-1,0,0,0)}}}function n(){let N=!1,fe=null,Q=null,te=null;return{setTest:function(de){de?ve(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(de){fe!==de&&!N&&(t.depthMask(de),fe=de)},setFunc:function(de){if(Q!==de){switch(de){case Ex:t.depthFunc(t.NEVER);break;case Tx:t.depthFunc(t.ALWAYS);break;case wx:t.depthFunc(t.LESS);break;case _l:t.depthFunc(t.LEQUAL);break;case Ax:t.depthFunc(t.EQUAL);break;case Cx:t.depthFunc(t.GEQUAL);break;case Rx:t.depthFunc(t.GREATER);break;case Px:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=de}},setLocked:function(de){N=de},setClear:function(de){te!==de&&(t.clearDepth(de),te=de)},reset:function(){N=!1,fe=null,Q=null,te=null}}}function i(){let N=!1,fe=null,Q=null,te=null,de=null,Ae=null,qe=null,ft=null,gt=null;return{setTest:function(et){N||(et?ve(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(et){fe!==et&&!N&&(t.stencilMask(et),fe=et)},setFunc:function(et,Bn,zn){(Q!==et||te!==Bn||de!==zn)&&(t.stencilFunc(et,Bn,zn),Q=et,te=Bn,de=zn)},setOp:function(et,Bn,zn){(Ae!==et||qe!==Bn||ft!==zn)&&(t.stencilOp(et,Bn,zn),Ae=et,qe=Bn,ft=zn)},setLocked:function(et){N=et},setClear:function(et){gt!==et&&(t.clearStencil(et),gt=et)},reset:function(){N=!1,fe=null,Q=null,te=null,de=null,Ae=null,qe=null,ft=null,gt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],p=null,_=!1,y=null,m=null,u=null,v=null,g=null,x=null,C=null,w=new We(0,0,0),A=0,R=!1,M=null,S=null,L=null,H=null,B=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const ie=t.getParameter(t.VERSION);ie.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ee=$>=1):ie.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ee=$>=2);let F=null,ne={};const re=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),me=new Lt().fromArray(re),Ce=new Lt().fromArray(q);function Y(N,fe,Q,te){const de=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(N,Ae),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Q;qe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(fe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Ae}const oe={};oe[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ve(t.DEPTH_TEST),s.setFunc(_l),Re(!1),je(kh),ve(t.CULL_FACE),Ve(Gi);function ve(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function pe(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Be(N,fe){return d[N]!==fe?(t.bindFramebuffer(N,fe),d[N]=fe,N===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),N===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ie(N,fe){let Q=f,te=!1;if(N){Q=h.get(fe),Q===void 0&&(Q=[],h.set(fe,Q));const de=N.textures;if(Q.length!==de.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,qe=de.length;Ae<qe;Ae++)Q[Ae]=t.COLOR_ATTACHMENT0+Ae;Q.length=de.length,te=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,te=!0);te&&t.drawBuffers(Q)}function Xe(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const D={[dr]:t.FUNC_ADD,[ax]:t.FUNC_SUBTRACT,[ox]:t.FUNC_REVERSE_SUBTRACT};D[lx]=t.MIN,D[cx]=t.MAX;const He={[ux]:t.ZERO,[dx]:t.ONE,[fx]:t.SRC_COLOR,[nd]:t.SRC_ALPHA,[_x]:t.SRC_ALPHA_SATURATE,[gx]:t.DST_COLOR,[px]:t.DST_ALPHA,[hx]:t.ONE_MINUS_SRC_COLOR,[id]:t.ONE_MINUS_SRC_ALPHA,[vx]:t.ONE_MINUS_DST_COLOR,[mx]:t.ONE_MINUS_DST_ALPHA,[yx]:t.CONSTANT_COLOR,[xx]:t.ONE_MINUS_CONSTANT_COLOR,[Sx]:t.CONSTANT_ALPHA,[Mx]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(N,fe,Q,te,de,Ae,qe,ft,gt,et){if(N===Gi){_===!0&&(pe(t.BLEND),_=!1);return}if(_===!1&&(ve(t.BLEND),_=!0),N!==sx){if(N!==y||et!==R){if((m!==dr||g!==dr)&&(t.blendEquation(t.FUNC_ADD),m=dr,g=dr),et)switch(N){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case td:t.blendFunc(t.ONE,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case td:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Bh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}u=null,v=null,x=null,C=null,w.set(0,0,0),A=0,y=N,R=et}return}de=de||fe,Ae=Ae||Q,qe=qe||te,(fe!==m||de!==g)&&(t.blendEquationSeparate(D[fe],D[de]),m=fe,g=de),(Q!==u||te!==v||Ae!==x||qe!==C)&&(t.blendFuncSeparate(He[Q],He[te],He[Ae],He[qe]),u=Q,v=te,x=Ae,C=qe),(ft.equals(w)===!1||gt!==A)&&(t.blendColor(ft.r,ft.g,ft.b,gt),w.copy(ft),A=gt),y=N,R=!1}function it(N,fe){N.side===Ut?pe(t.CULL_FACE):ve(t.CULL_FACE);let Q=N.side===Kt;fe&&(Q=!Q),Re(Q),N.blending===ms&&N.transparent===!1?Ve(Gi):Ve(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const te=N.stencilWrite;a.setTest(te),te&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ve(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(N){M!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),M=N)}function je(N){N!==nx?(ve(t.CULL_FACE),N!==S&&(N===kh?t.cullFace(t.BACK):N===ix?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),S=N}function ze(N){N!==L&&(ee&&t.lineWidth(N),L=N)}function Ue(N,fe,Q){N?(ve(t.POLYGON_OFFSET_FILL),(H!==fe||B!==Q)&&(t.polygonOffset(fe,Q),H=fe,B=Q)):pe(t.POLYGON_OFFSET_FILL)}function dt(N){N?ve(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function b(N){N===void 0&&(N=t.TEXTURE0+K-1),F!==N&&(t.activeTexture(N),F=N)}function E(N,fe,Q){Q===void 0&&(F===null?Q=t.TEXTURE0+K-1:Q=F);let te=ne[Q];te===void 0&&(te={type:void 0,texture:void 0},ne[Q]=te),(te.type!==N||te.texture!==fe)&&(F!==Q&&(t.activeTexture(Q),F=Q),t.bindTexture(N,fe||oe[N]),te.type=N,te.texture=fe)}function j(){const N=ne[F];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(N){me.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),me.copy(N))}function ae(N){Ce.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Ce.copy(N))}function we(N,fe){let Q=l.get(fe);Q===void 0&&(Q=new WeakMap,l.set(fe,Q));let te=Q.get(N);te===void 0&&(te=t.getUniformBlockIndex(fe,N.name),Q.set(N,te))}function Le(N,fe){const te=l.get(fe).get(N);o.get(fe)!==te&&(t.uniformBlockBinding(fe,te,N.__bindingPointIndex),o.set(fe,te))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},F=null,ne={},d={},h=new WeakMap,f=[],p=null,_=!1,y=null,m=null,u=null,v=null,g=null,x=null,C=null,w=new We(0,0,0),A=0,R=!1,M=null,S=null,L=null,H=null,B=null,me.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ve,disable:pe,bindFramebuffer:Be,drawBuffers:Ie,useProgram:Xe,setBlending:Ve,setMaterial:it,setFlipSided:Re,setCullFace:je,setLineWidth:ze,setPolygonOffset:Ue,setScissorTest:dt,activeTexture:b,bindTexture:E,unbindTexture:j,compressedTexImage2D:se,compressedTexImage3D:P,texImage2D:ce,texImage3D:ye,updateUBOMapping:we,uniformBlockBinding:Le,texStorage2D:ue,texStorage3D:Z,texSubImage2D:O,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:X,scissor:Se,viewport:ae,reset:Ge}}function rw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,E){return p?new OffscreenCanvas(b,E):Ca("canvas")}function y(b,E,j){let se=1;const P=dt(b);if((P.width>j||P.height>j)&&(se=j/Math.max(P.width,P.height)),se<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const O=Math.floor(se*P.width),J=Math.floor(se*P.height);h===void 0&&(h=_(O,J));const W=E?_(O,J):h;return W.width=O,W.height=J,W.getContext("2d").drawImage(b,0,0,O,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+O+"x"+J+")."),W}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Sn&&b.minFilter!==In}function u(b){t.generateMipmap(b)}function v(b,E,j,se,P=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let O=E;if(E===t.RED&&(j===t.FLOAT&&(O=t.R32F),j===t.HALF_FLOAT&&(O=t.R16F),j===t.UNSIGNED_BYTE&&(O=t.R8)),E===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(O=t.R8UI),j===t.UNSIGNED_SHORT&&(O=t.R16UI),j===t.UNSIGNED_INT&&(O=t.R32UI),j===t.BYTE&&(O=t.R8I),j===t.SHORT&&(O=t.R16I),j===t.INT&&(O=t.R32I)),E===t.RG&&(j===t.FLOAT&&(O=t.RG32F),j===t.HALF_FLOAT&&(O=t.RG16F),j===t.UNSIGNED_BYTE&&(O=t.RG8)),E===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(O=t.RG8UI),j===t.UNSIGNED_SHORT&&(O=t.RG16UI),j===t.UNSIGNED_INT&&(O=t.RG32UI),j===t.BYTE&&(O=t.RG8I),j===t.SHORT&&(O=t.RG16I),j===t.INT&&(O=t.RG32I)),E===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(O=t.RGB9_E5),E===t.RGBA){const J=P?xl:Qe.getTransfer(se);j===t.FLOAT&&(O=t.RGBA32F),j===t.HALF_FLOAT&&(O=t.RGBA16F),j===t.UNSIGNED_BYTE&&(O=J===st?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(O=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(O=t.RGB5_A1)}return(O===t.R16F||O===t.R32F||O===t.RG16F||O===t.RG32F||O===t.RGBA16F||O===t.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function g(b,E){let j;return b?E===null||E===Cs||E===Rs?j=t.DEPTH24_STENCIL8:E===Ii?j=t.DEPTH32F_STENCIL8:E===yl&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cs||E===Rs?j=t.DEPTH_COMPONENT24:E===Ii?j=t.DEPTH_COMPONENT32F:E===yl&&(j=t.DEPTH_COMPONENT16),j}function x(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Sn&&b.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function C(b){const E=b.target;E.removeEventListener("dispose",C),A(E),E.isVideoTexture&&d.delete(E)}function w(b){const E=b.target;E.removeEventListener("dispose",w),M(E)}function A(b){const E=i.get(b);if(E.__webglInit===void 0)return;const j=b.source,se=f.get(j);if(se){const P=se[E.__cacheKey];P.usedTimes--,P.usedTimes===0&&R(b),Object.keys(se).length===0&&f.delete(j)}i.remove(b)}function R(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const j=b.source,se=f.get(j);delete se[E.__cacheKey],a.memory.textures--}function M(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let P=0;P<E.__webglFramebuffer[se].length;P++)t.deleteFramebuffer(E.__webglFramebuffer[se][P]);else t.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)t.deleteFramebuffer(E.__webglFramebuffer[se]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=b.textures;for(let se=0,P=j.length;se<P;se++){const O=i.get(j[se]);O.__webglTexture&&(t.deleteTexture(O.__webglTexture),a.memory.textures--),i.remove(j[se])}i.remove(b)}let S=0;function L(){S=0}function H(){const b=S;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),S+=1,b}function B(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function K(b,E){const j=i.get(b);if(b.isVideoTexture&&ze(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const se=b.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(j,b,E);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+E)}function ee(b,E){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Ce(j,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+E)}function $(b,E){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Ce(j,b,E);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+E)}function ie(b,E){const j=i.get(b);if(b.version>0&&j.__version!==b.version){Y(j,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+E)}const F={[ad]:t.REPEAT,[ui]:t.CLAMP_TO_EDGE,[od]:t.MIRRORED_REPEAT},ne={[Sn]:t.NEAREST,[Bx]:t.NEAREST_MIPMAP_NEAREST,[ao]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},re={[Jx]:t.NEVER,[sS]:t.ALWAYS,[eS]:t.LESS,[k0]:t.LEQUAL,[tS]:t.EQUAL,[rS]:t.GEQUAL,[nS]:t.GREATER,[iS]:t.NOTEQUAL};function q(b,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===wc||E.magFilter===ao||E.magFilter===gr||E.minFilter===In||E.minFilter===wc||E.minFilter===ao||E.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,F[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,F[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,F[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ne[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ne[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==ao&&E.minFilter!==gr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function me(b,E){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",C));const se=E.source;let P=f.get(se);P===void 0&&(P={},f.set(se,P));const O=B(E);if(O!==b.__cacheKey){P[O]===void 0&&(P[O]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),P[O].usedTimes++;const J=P[b.__cacheKey];J!==void 0&&(P[b.__cacheKey].usedTimes--,J.usedTimes===0&&R(E)),b.__cacheKey=O,b.__webglTexture=P[O].texture}return j}function Ce(b,E,j){let se=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=t.TEXTURE_3D);const P=me(b,E),O=E.source;n.bindTexture(se,b.__webglTexture,t.TEXTURE0+j);const J=i.get(O);if(O.version!==J.__version||P===!0){n.activeTexture(t.TEXTURE0+j);const W=Qe.getPrimaries(Qe.workingColorSpace),X=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),ue=E.colorSpace===Li||W===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let Z=y(E.image,!1,r.maxTextureSize);Z=Ue(E,Z);const ce=s.convert(E.format,E.colorSpace),ye=s.convert(E.type);let Se=v(E.internalFormat,ce,ye,E.colorSpace,E.isVideoTexture);q(se,E);let ae;const we=E.mipmaps,Le=E.isVideoTexture!==!0,Ge=J.__version===void 0||P===!0,N=O.dataReady,fe=x(E,Z);if(E.isDepthTexture)Se=g(E.format===Ps,E.type),Ge&&(Le?n.texStorage2D(t.TEXTURE_2D,1,Se,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,Se,Z.width,Z.height,0,ce,ye,null));else if(E.isDataTexture)if(we.length>0){Le&&Ge&&n.texStorage2D(t.TEXTURE_2D,fe,Se,we[0].width,we[0].height);for(let Q=0,te=we.length;Q<te;Q++)ae=we[Q],Le?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ae.width,ae.height,ce,ye,ae.data):n.texImage2D(t.TEXTURE_2D,Q,Se,ae.width,ae.height,0,ce,ye,ae.data);E.generateMipmaps=!1}else Le?(Ge&&n.texStorage2D(t.TEXTURE_2D,fe,Se,Z.width,Z.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,ce,ye,Z.data)):n.texImage2D(t.TEXTURE_2D,0,Se,Z.width,Z.height,0,ce,ye,Z.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Le&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Se,we[0].width,we[0].height,Z.depth);for(let Q=0,te=we.length;Q<te;Q++)if(ae=we[Q],E.format!==qn)if(ce!==null)if(Le){if(N)if(E.layerUpdates.size>0){for(const de of E.layerUpdates){const Ae=ae.width*ae.height;n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,de,ae.width,ae.height,1,ce,ae.data.slice(Ae*de,Ae*(de+1)),0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,Z.depth,ce,ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Se,ae.width,ae.height,Z.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,Z.depth,ce,ye,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Se,ae.width,ae.height,Z.depth,0,ce,ye,ae.data)}else{Le&&Ge&&n.texStorage2D(t.TEXTURE_2D,fe,Se,we[0].width,we[0].height);for(let Q=0,te=we.length;Q<te;Q++)ae=we[Q],E.format!==qn?ce!==null?Le?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,ae.width,ae.height,ce,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ae.width,ae.height,ce,ye,ae.data):n.texImage2D(t.TEXTURE_2D,Q,Se,ae.width,ae.height,0,ce,ye,ae.data)}else if(E.isDataArrayTexture)if(Le){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Se,Z.width,Z.height,Z.depth),N)if(E.layerUpdates.size>0){let Q;switch(ye){case t.UNSIGNED_BYTE:switch(ce){case t.ALPHA:Q=1;break;case t.LUMINANCE:Q=1;break;case t.LUMINANCE_ALPHA:Q=2;break;case t.RGB:Q=3;break;case t.RGBA:Q=4;break;default:throw new Error(`Unknown texel size for format ${ce}.`)}break;case t.UNSIGNED_SHORT_4_4_4_4:case t.UNSIGNED_SHORT_5_5_5_1:case t.UNSIGNED_SHORT_5_6_5:Q=1;break;default:throw new Error(`Unknown texel size for type ${ye}.`)}const te=Z.width*Z.height*Q;for(const de of E.layerUpdates)n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,Z.width,Z.height,1,ce,ye,Z.data.slice(te*de,te*(de+1)));E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,ye,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,Z.width,Z.height,Z.depth,0,ce,ye,Z.data);else if(E.isData3DTexture)Le?(Ge&&n.texStorage3D(t.TEXTURE_3D,fe,Se,Z.width,Z.height,Z.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,ye,Z.data)):n.texImage3D(t.TEXTURE_3D,0,Se,Z.width,Z.height,Z.depth,0,ce,ye,Z.data);else if(E.isFramebufferTexture){if(Ge)if(Le)n.texStorage2D(t.TEXTURE_2D,fe,Se,Z.width,Z.height);else{let Q=Z.width,te=Z.height;for(let de=0;de<fe;de++)n.texImage2D(t.TEXTURE_2D,de,Se,Q,te,0,ce,ye,null),Q>>=1,te>>=1}}else if(we.length>0){if(Le&&Ge){const Q=dt(we[0]);n.texStorage2D(t.TEXTURE_2D,fe,Se,Q.width,Q.height)}for(let Q=0,te=we.length;Q<te;Q++)ae=we[Q],Le?N&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ce,ye,ae):n.texImage2D(t.TEXTURE_2D,Q,Se,ce,ye,ae);E.generateMipmaps=!1}else if(Le){if(Ge){const Q=dt(Z);n.texStorage2D(t.TEXTURE_2D,fe,Se,Q.width,Q.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,ye,Z)}else n.texImage2D(t.TEXTURE_2D,0,Se,ce,ye,Z);m(E)&&u(se),J.__version=O.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Y(b,E,j){if(E.image.length!==6)return;const se=me(b,E),P=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+j);const O=i.get(P);if(P.version!==O.__version||se===!0){n.activeTexture(t.TEXTURE0+j);const J=Qe.getPrimaries(Qe.workingColorSpace),W=E.colorSpace===Li?null:Qe.getPrimaries(E.colorSpace),X=E.colorSpace===Li||J===W?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const ue=E.isCompressedTexture||E.image[0].isCompressedTexture,Z=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let te=0;te<6;te++)!ue&&!Z?ce[te]=y(E.image[te],!0,r.maxCubemapSize):ce[te]=Z?E.image[te].image:E.image[te],ce[te]=Ue(E,ce[te]);const ye=ce[0],Se=s.convert(E.format,E.colorSpace),ae=s.convert(E.type),we=v(E.internalFormat,Se,ae,E.colorSpace),Le=E.isVideoTexture!==!0,Ge=O.__version===void 0||se===!0,N=P.dataReady;let fe=x(E,ye);q(t.TEXTURE_CUBE_MAP,E);let Q;if(ue){Le&&Ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,we,ye.width,ye.height);for(let te=0;te<6;te++){Q=ce[te].mipmaps;for(let de=0;de<Q.length;de++){const Ae=Q[de];E.format!==qn?Se!==null?Le?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,Ae.width,Ae.height,Se,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,we,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,Ae.width,Ae.height,Se,ae,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,we,Ae.width,Ae.height,0,Se,ae,Ae.data)}}}else{if(Q=E.mipmaps,Le&&Ge){Q.length>0&&fe++;const te=dt(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,we,te.width,te.height)}for(let te=0;te<6;te++)if(Z){Le?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ce[te].width,ce[te].height,Se,ae,ce[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,we,ce[te].width,ce[te].height,0,Se,ae,ce[te].data);for(let de=0;de<Q.length;de++){const qe=Q[de].image[te].image;Le?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,qe.width,qe.height,Se,ae,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,we,qe.width,qe.height,0,Se,ae,qe.data)}}else{Le?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se,ae,ce[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,we,Se,ae,ce[te]);for(let de=0;de<Q.length;de++){const Ae=Q[de];Le?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,Se,ae,Ae.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,we,Se,ae,Ae.image[te])}}}m(E)&&u(t.TEXTURE_CUBE_MAP),O.__version=P.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function oe(b,E,j,se,P,O){const J=s.convert(j.format,j.colorSpace),W=s.convert(j.type),X=v(j.internalFormat,J,W,j.colorSpace);if(!i.get(E).__hasExternalTextures){const Z=Math.max(1,E.width>>O),ce=Math.max(1,E.height>>O);P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?n.texImage3D(P,O,X,Z,ce,E.depth,0,J,W,null):n.texImage2D(P,O,X,Z,ce,0,J,W,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,P,i.get(j).__webglTexture,0,Re(E)):(P===t.TEXTURE_2D||P>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,P,i.get(j).__webglTexture,O),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(b,E,j){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const se=E.depthTexture,P=se&&se.isDepthTexture?se.type:null,O=g(E.stencilBuffer,P),J=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=Re(E);je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,W,O,E.width,E.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,W,O,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,O,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,b)}else{const se=E.textures;for(let P=0;P<se.length;P++){const O=se[P],J=s.convert(O.format,O.colorSpace),W=s.convert(O.type),X=v(O.internalFormat,J,W,O.colorSpace),ue=Re(E);j&&je(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,X,E.width,E.height):je(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,X,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,X,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const se=i.get(E.depthTexture).__webglTexture,P=Re(E);if(E.depthTexture.format===gs)je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,P):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(E.depthTexture.format===Ps)je(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,P):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Be(b){const E=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,b)}else if(j){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]=t.createRenderbuffer(),ve(E.__webglDepthbuffer[se],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),ve(E.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(b,E,j){const se=i.get(b);E!==void 0&&oe(se.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Be(b)}function Xe(b){const E=b.texture,j=i.get(b),se=i.get(E);b.addEventListener("dispose",w);const P=b.textures,O=b.isWebGLCubeRenderTarget===!0,J=P.length>1;if(J||(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=E.version,a.memory.textures++),O){j.__webglFramebuffer=[];for(let W=0;W<6;W++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[W]=[];for(let X=0;X<E.mipmaps.length;X++)j.__webglFramebuffer[W][X]=t.createFramebuffer()}else j.__webglFramebuffer[W]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let W=0;W<E.mipmaps.length;W++)j.__webglFramebuffer[W]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(J)for(let W=0,X=P.length;W<X;W++){const ue=i.get(P[W]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&je(b)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let W=0;W<P.length;W++){const X=P[W];j.__webglColorRenderbuffer[W]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[W]);const ue=s.convert(X.format,X.colorSpace),Z=s.convert(X.type),ce=v(X.internalFormat,ue,Z,X.colorSpace,b.isXRRenderTarget===!0),ye=Re(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ce,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+W,t.RENDERBUFFER,j.__webglColorRenderbuffer[W])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),ve(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(O){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),q(t.TEXTURE_CUBE_MAP,E);for(let W=0;W<6;W++)if(E.mipmaps&&E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)oe(j.__webglFramebuffer[W][X],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,X);else oe(j.__webglFramebuffer[W],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);m(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){for(let W=0,X=P.length;W<X;W++){const ue=P[W],Z=i.get(ue);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture),q(t.TEXTURE_2D,ue),oe(j.__webglFramebuffer,b,ue,t.COLOR_ATTACHMENT0+W,t.TEXTURE_2D,0),m(ue)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let W=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(W=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(W,se.__webglTexture),q(W,E),E.mipmaps&&E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)oe(j.__webglFramebuffer[X],b,E,t.COLOR_ATTACHMENT0,W,X);else oe(j.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,W,0);m(E)&&u(W),n.unbindTexture()}b.depthBuffer&&Be(b)}function D(b){const E=b.textures;for(let j=0,se=E.length;j<se;j++){const P=E[j];if(m(P)){const O=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,J=i.get(P).__webglTexture;n.bindTexture(O,J),u(O),n.unbindTexture()}}}const He=[],Ve=[];function it(b){if(b.samples>0){if(je(b)===!1){const E=b.textures,j=b.width,se=b.height;let P=t.COLOR_BUFFER_BIT;const O=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=i.get(b),W=E.length>1;if(W)for(let X=0;X<E.length;X++)n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let X=0;X<E.length;X++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(P|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(P|=t.STENCIL_BUFFER_BIT)),W){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,J.__webglColorRenderbuffer[X]);const ue=i.get(E[X]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,j,se,0,0,j,se,P,t.NEAREST),l===!0&&(He.length=0,Ve.length=0,He.push(t.COLOR_ATTACHMENT0+X),b.depthBuffer&&b.resolveDepthBuffer===!1&&(He.push(O),Ve.push(O),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,He))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),W)for(let X=0;X<E.length;X++){n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,J.__webglColorRenderbuffer[X]);const ue=i.get(E[X]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Re(b){return Math.min(r.maxSamples,b.samples)}function je(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(b){const E=a.render.frame;d.get(b)!==E&&(d.set(b,E),b.update())}function Ue(b,E){const j=b.colorSpace,se=b.format,P=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||j!==Qi&&j!==Li&&(Qe.getTransfer(j)===st?(se!==qn||P!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function dt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=ie,this.rebindTextures=Ie,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=je}function sw(t,e){function n(i,r=Li){let s;const a=Qe.getTransfer(r);if(i===qi)return t.UNSIGNED_BYTE;if(i===N0)return t.UNSIGNED_SHORT_4_4_4_4;if(i===D0)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===zx)return t.BYTE;if(i===Hx)return t.SHORT;if(i===yl)return t.UNSIGNED_SHORT;if(i===L0)return t.INT;if(i===Cs)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===Wl)return t.HALF_FLOAT;if(i===Gx)return t.ALPHA;if(i===Wx)return t.RGB;if(i===qn)return t.RGBA;if(i===Xx)return t.LUMINANCE;if(i===jx)return t.LUMINANCE_ALPHA;if(i===gs)return t.DEPTH_COMPONENT;if(i===Ps)return t.DEPTH_STENCIL;if(i===Yx)return t.RED;if(i===I0)return t.RED_INTEGER;if(i===qx)return t.RG;if(i===U0)return t.RG_INTEGER;if(i===F0)return t.RGBA_INTEGER;if(i===Ac||i===Cc||i===Rc||i===Pc)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ac)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ac)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hh||i===Vh||i===Gh||i===Wh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xh||i===jh||i===Yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xh||i===jh)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qh||i===Kh||i===$h||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===ap||i===op)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$h)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jh)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ep)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===np)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ip)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sp)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ap)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===op)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bc||i===lp||i===cp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bc)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kx||i===up||i===dp||i===fp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===up)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class aw extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ow={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ow)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new at(new Yl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class dw extends Is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,p=null,_=null;const y=new uw,m=n.getContextAttributes();let u=null,v=null;const g=[],x=[],C=new Fe;let w=null;const A=new yn;A.layers.enable(1),A.viewport=new Lt;const R=new yn;R.layers.enable(2),R.viewport=new Lt;const M=[A,R],S=new aw;S.layers.enable(1),S.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=g[Y];return oe===void 0&&(oe=new iu,g[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=g[Y];return oe===void 0&&(oe=new iu,g[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=g[Y];return oe===void 0&&(oe=new iu,g[Y]=oe),oe.getHandSpace()};function B(Y){const oe=x.indexOf(Y.inputSource);if(oe===-1)return;const ve=g[oe];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<g.length;Y++){const oe=x[Y];oe!==null&&(x[Y]=null,g[Y].disconnect(oe))}L=null,H=null,y.reset(),e.setRenderTarget(u),p=null,f=null,h=null,r=null,v=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Tr(p.framebufferWidth,p.framebufferHeight,{format:qn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ve=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?Ps:gs,ve=m.stencil?Rs:Cs);const Be={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Tr(f.textureWidth,f.textureHeight,{format:qn,type:qi,depthTexture:new Z0(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ee(Y){for(let oe=0;oe<Y.removed.length;oe++){const ve=Y.removed[oe],pe=x.indexOf(ve);pe>=0&&(x[pe]=null,g[pe].disconnect(ve))}for(let oe=0;oe<Y.added.length;oe++){const ve=Y.added[oe];let pe=x.indexOf(ve);if(pe===-1){for(let Ie=0;Ie<g.length;Ie++)if(Ie>=x.length){x.push(ve),pe=Ie;break}else if(x[Ie]===null){x[Ie]=ve,pe=Ie;break}if(pe===-1)break}const Be=g[pe];Be&&Be.connect(ve)}}const $=new I,ie=new I;function F(Y,oe,ve){$.setFromMatrixPosition(oe.matrixWorld),ie.setFromMatrixPosition(ve.matrixWorld);const pe=$.distanceTo(ie),Be=oe.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,Xe=Be[14]/(Be[10]-1),D=Be[14]/(Be[10]+1),He=(Be[9]+1)/Be[5],Ve=(Be[9]-1)/Be[5],it=(Be[8]-1)/Be[0],Re=(Ie[8]+1)/Ie[0],je=Xe*it,ze=Xe*Re,Ue=pe/(-it+Re),dt=Ue*-it;oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(dt),Y.translateZ(Ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Xe+Ue,E=D+Ue,j=je-dt,se=ze+(pe-dt),P=He*D/E*b,O=Ve*D/E*b;Y.projectionMatrix.makePerspective(j,se,P,O,b,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ne(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;y.texture!==null&&(Y.near=y.depthNear,Y.far=y.depthFar),S.near=R.near=A.near=Y.near,S.far=R.far=A.far=Y.far,(L!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far,A.near=L,A.far=H,R.near=L,R.far=H,A.updateProjectionMatrix(),R.updateProjectionMatrix(),Y.updateProjectionMatrix());const oe=Y.parent,ve=S.cameras;ne(S,oe);for(let pe=0;pe<ve.length;pe++)ne(ve[pe],oe);ve.length===2?F(S,A,R):S.projectionMatrix.copy(A.projectionMatrix),re(Y,S,oe)};function re(Y,oe,ve){ve===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ld*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let q=null;function me(Y,oe){if(d=oe.getViewerPose(c||a),_=oe,d!==null){const ve=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let pe=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Ie=0;Ie<ve.length;Ie++){const Xe=ve[Ie];let D=null;if(p!==null)D=p.getViewport(Xe);else{const Ve=h.getViewSubImage(f,Xe);D=Ve.viewport,Ie===0&&(e.setRenderTargetTextures(v,Ve.colorTexture,f.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(v))}let He=M[Ie];He===void 0&&(He=new yn,He.layers.enable(Ie),He.viewport=new Lt,M[Ie]=He),He.matrix.fromArray(Xe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Xe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(D.x,D.y,D.width,D.height),Ie===0&&(S.matrix.copy(He.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(He)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ie=h.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&y.init(e,Ie,r.renderState)}}for(let ve=0;ve<g.length;ve++){const pe=x[ve],Be=g[ve];pe!==null&&Be!==void 0&&Be.update(pe,oe,c||a)}q&&q(Y,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Ce=new K0;Ce.setAnimationLoop(me),this.setAnimationLoop=function(Y){q=Y},this.dispose=function(){}}}const ar=new Zn,fw=new lt;function hw(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,j0(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,g,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,v,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Kt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Kt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,x=v.envMapRotation;g&&(m.envMap.value=g,ar.copy(x),ar.x*=-1,ar.y*=-1,ar.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(ar)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function pw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function c(v,g){let x=r[v.id];x===void 0&&(_(v),x=d(v),r[v.id]=x,v.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function d(v){const g=h();v.__bindingPointIndex=g;const x=t.createBuffer(),C=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,x),x}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const g=r[v.id],x=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let w=0,A=x.length;w<A;w++){const R=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=R.length;M<S;M++){const L=R[M];if(p(L,w,M,C)===!0){const H=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let ee=0;ee<B.length;ee++){const $=B[ee],ie=y($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,H+K,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,K),K+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,x,C){const w=v.value,A=g+"_"+x;if(C[A]===void 0)return typeof w=="number"||typeof w=="boolean"?C[A]=w:C[A]=w.clone(),!0;{const R=C[A];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[A]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(v){const g=v.uniforms;let x=0;const C=16;for(let A=0,R=g.length;A<R;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let S=0,L=M.length;S<L;S++){const H=M[S],B=Array.isArray(H.value)?H.value:[H.value];for(let K=0,ee=B.length;K<ee;K++){const $=B[K],ie=y($),F=x%C;F!==0&&C-F<ie.boundary&&(x+=C-F),H.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=ie.storage}}}const w=x%C;return w>0&&(x+=C-w),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=a.indexOf(g.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class mw{constructor(e={}){const{canvas:n=oS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this.toneMapping=Wi,this.toneMappingExposure=1;const g=this;let x=!1,C=0,w=0,A=null,R=-1,M=null;const S=new Lt,L=new Lt;let H=null;const B=new We(0);let K=0,ee=n.width,$=n.height,ie=1,F=null,ne=null;const re=new Lt(0,0,ee,$),q=new Lt(0,0,ee,$);let me=!1;const Ce=new df;let Y=!1,oe=!1;const ve=new lt,pe=new I,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function Xe(){return A===null?ie:1}let D=i;function He(T,k){return n.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${of}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",te,!1),D===null){const k="webgl2";if(D=He(k,T),D===null)throw He(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,it,Re,je,ze,Ue,dt,b,E,j,se,P,O,J,W,X,ue,Z,ce,ye,Se,ae,we,Le;function Ge(){Ve=new E1(D),Ve.init(),ae=new sw(D,Ve),it=new v1(D,Ve,e,ae),Re=new iw(D),je=new A1(D),ze=new GT,Ue=new rw(D,Ve,Re,ze,it,ae,je),dt=new y1(g),b=new M1(g),E=new DS(D),we=new m1(D,E),j=new T1(D,E,je,we),se=new R1(D,j,E,je),ce=new C1(D,it,Ue),X=new _1(ze),P=new VT(g,dt,b,Ve,it,we,X),O=new hw(g,ze),J=new XT,W=new ZT(Ve),Z=new p1(g,dt,b,Re,se,f,l),ue=new nw(g,se,it),Le=new pw(D,je,it,Re),ye=new g1(D,Ve,je),Se=new w1(D,Ve,je),je.programs=P.programs,g.capabilities=it,g.extensions=Ve,g.properties=ze,g.renderLists=J,g.shadowMap=ue,g.state=Re,g.info=je}Ge();const N=new dw(g,D);this.xr=N,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(ee,$,!1))},this.getSize=function(T){return T.set(ee,$)},this.setSize=function(T,k,V=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=T,$=k,n.width=Math.floor(T*ie),n.height=Math.floor(k*ie),V===!0&&(n.style.width=T+"px",n.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(ee*ie,$*ie).floor()},this.setDrawingBufferSize=function(T,k,V){ee=T,$=k,ie=V,n.width=Math.floor(T*V),n.height=Math.floor(k*V),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,k,V,G){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,k,V,G),Re.viewport(S.copy(re).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,k,V,G){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,k,V,G),Re.scissor(L.copy(q).multiplyScalar(ie).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){Re.setScissorTest(me=T)},this.setOpaqueSort=function(T){F=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(T=!0,k=!0,V=!0){let G=0;if(T){let z=!1;if(A!==null){const he=A.texture.format;z=he===F0||he===U0||he===I0}if(z){const he=A.texture.type,_e=he===qi||he===Cs||he===yl||he===Rs||he===N0||he===D0,Me=Z.getClearColor(),Ee=Z.getClearAlpha(),Ne=Me.r,De=Me.g,Pe=Me.b;_e?(p[0]=Ne,p[1]=De,p[2]=Pe,p[3]=Ee,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Ne,_[1]=De,_[2]=Pe,_[3]=Ee,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}k&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",te,!1),J.dispose(),W.dispose(),ze.dispose(),dt.dispose(),b.dispose(),se.dispose(),we.dispose(),Le.dispose(),P.dispose(),N.dispose(),N.removeEventListener("sessionstart",Bn),N.removeEventListener("sessionend",zn),Ji.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=je.autoReset,k=ue.enabled,V=ue.autoUpdate,G=ue.needsUpdate,z=ue.type;Ge(),je.autoReset=T,ue.enabled=k,ue.autoUpdate=V,ue.needsUpdate=G,ue.type=z}function te(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function de(T){const k=T.target;k.removeEventListener("dispose",de),Ae(k)}function Ae(T){qe(T),ze.remove(T)}function qe(T){const k=ze.get(T).programs;k!==void 0&&(k.forEach(function(V){P.releaseProgram(V)}),T.isShaderMaterial&&P.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,V,G,z,he){k===null&&(k=Be);const _e=z.isMesh&&z.matrixWorld.determinant()<0,Me=sv(T,k,V,G,z);Re.setMaterial(G,_e);let Ee=V.index,Ne=1;if(G.wireframe===!0){if(Ee=j.getWireframeAttribute(V),Ee===void 0)return;Ne=2}const De=V.drawRange,Pe=V.attributes.position;let $e=De.start*Ne,vt=(De.start+De.count)*Ne;he!==null&&($e=Math.max($e,he.start*Ne),vt=Math.min(vt,(he.start+he.count)*Ne)),Ee!==null?($e=Math.max($e,0),vt=Math.min(vt,Ee.count)):Pe!=null&&($e=Math.max($e,0),vt=Math.min(vt,Pe.count));const _t=vt-$e;if(_t<0||_t===1/0)return;we.setup(z,G,Me,V,Ee);let an,Ze=ye;if(Ee!==null&&(an=E.get(Ee),Ze=Se,Ze.setIndex(an)),z.isMesh)G.wireframe===!0?(Re.setLineWidth(G.wireframeLinewidth*Xe()),Ze.setMode(D.LINES)):Ze.setMode(D.TRIANGLES);else if(z.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),Re.setLineWidth(Te*Xe()),z.isLineSegments?Ze.setMode(D.LINES):z.isLineLoop?Ze.setMode(D.LINE_LOOP):Ze.setMode(D.LINE_STRIP)}else z.isPoints?Ze.setMode(D.POINTS):z.isSprite&&Ze.setMode(D.TRIANGLES);if(z.isBatchedMesh)z._multiDrawInstances!==null?Ze.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances):Ze.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)Ze.renderInstances($e,_t,z.count);else if(V.isInstancedBufferGeometry){const Te=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xt=Math.min(V.instanceCount,Te);Ze.renderInstances($e,_t,Xt)}else Ze.render($e,_t)};function ft(T,k,V){T.transparent===!0&&T.side===Ut&&T.forceSinglePass===!1?(T.side=Kt,T.needsUpdate=!0,Ba(T,k,V),T.side=Yi,T.needsUpdate=!0,Ba(T,k,V),T.side=Ut):Ba(T,k,V)}this.compile=function(T,k,V=null){V===null&&(V=T),m=W.get(V),m.init(k),v.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),T!==V&&T.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const G=new Set;return T.traverse(function(z){const he=z.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){const Me=he[_e];ft(Me,V,z),G.add(Me)}else ft(he,V,z),G.add(he)}),v.pop(),m=null,G},this.compileAsync=function(T,k,V=null){const G=this.compile(T,k,V);return new Promise(z=>{function he(){if(G.forEach(function(_e){ze.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){z(T);return}setTimeout(he,10)}Ve.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let gt=null;function et(T){gt&&gt(T)}function Bn(){Ji.stop()}function zn(){Ji.start()}const Ji=new K0;Ji.setAnimationLoop(et),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(T){gt=T,N.setAnimationLoop(T),T===null?Ji.stop():Ji.start()},N.addEventListener("sessionstart",Bn),N.addEventListener("sessionend",zn),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(k),k=N.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,k,A),m=W.get(T,v.length),m.init(k),v.push(m),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ce.setFromProjectionMatrix(ve),oe=this.localClippingEnabled,Y=X.init(this.clippingPlanes,oe),y=J.get(T,u.length),y.init(),u.push(y),N.enabled===!0&&N.isPresenting===!0){const he=g.xr.getDepthSensingMesh();he!==null&&Kl(he,k,-1/0,g.sortObjects)}Kl(T,k,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(F,ne),Ie=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,Ie&&Z.addToRenderList(y,T),this.info.render.frame++,Y===!0&&X.beginShadows();const V=m.state.shadowsArray;ue.render(V,T,k),Y===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=y.opaque,z=y.transmissive;if(m.setupLights(),k.isArrayCamera){const he=k.cameras;if(z.length>0)for(let _e=0,Me=he.length;_e<Me;_e++){const Ee=he[_e];yf(G,z,T,Ee)}Ie&&Z.render(T);for(let _e=0,Me=he.length;_e<Me;_e++){const Ee=he[_e];_f(y,T,Ee,Ee.viewport)}}else z.length>0&&yf(G,z,T,k),Ie&&Z.render(T),_f(y,T,k);A!==null&&(Ue.updateMultisampleRenderTarget(A),Ue.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(g,T,k),we.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],Y===!0&&X.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function Kl(T,k,V,G){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ce.intersectsSprite(T)){G&&pe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const _e=se.update(T),Me=T.material;Me.visible&&y.push(T,_e,Me,V,pe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ce.intersectsObject(T))){const _e=se.update(T),Me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),pe.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),pe.copy(_e.boundingSphere.center)),pe.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Me)){const Ee=_e.groups;for(let Ne=0,De=Ee.length;Ne<De;Ne++){const Pe=Ee[Ne],$e=Me[Pe.materialIndex];$e&&$e.visible&&y.push(T,_e,$e,V,pe.z,Pe)}}else Me.visible&&y.push(T,_e,Me,V,pe.z,null)}}const he=T.children;for(let _e=0,Me=he.length;_e<Me;_e++)Kl(he[_e],k,V,G)}function _f(T,k,V,G){const z=T.opaque,he=T.transmissive,_e=T.transparent;m.setupLightsView(V),Y===!0&&X.setGlobalState(g.clippingPlanes,V),G&&Re.viewport(S.copy(G)),z.length>0&&ka(z,k,V),he.length>0&&ka(he,k,V),_e.length>0&&ka(_e,k,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function yf(T,k,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Tr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Wl:qi,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const he=m.state.transmissionRenderTarget[G.id],_e=G.viewport||S;he.setSize(_e.z,_e.w);const Me=g.getRenderTarget();g.setRenderTarget(he),g.getClearColor(B),K=g.getClearAlpha(),K<1&&g.setClearColor(16777215,.5),Ie?Z.render(V):g.clear();const Ee=g.toneMapping;g.toneMapping=Wi;const Ne=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),Y===!0&&X.setGlobalState(g.clippingPlanes,G),ka(T,V,G),Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Pe=0,$e=k.length;Pe<$e;Pe++){const vt=k[Pe],_t=vt.object,an=vt.geometry,Ze=vt.material,Te=vt.group;if(Ze.side===Ut&&_t.layers.test(G.layers)){const Xt=Ze.side;Ze.side=Kt,Ze.needsUpdate=!0,xf(_t,V,G,an,Ze,Te),Ze.side=Xt,Ze.needsUpdate=!0,De=!0}}De===!0&&(Ue.updateMultisampleRenderTarget(he),Ue.updateRenderTargetMipmap(he))}g.setRenderTarget(Me),g.setClearColor(B,K),Ne!==void 0&&(G.viewport=Ne),g.toneMapping=Ee}function ka(T,k,V){const G=k.isScene===!0?k.overrideMaterial:null;for(let z=0,he=T.length;z<he;z++){const _e=T[z],Me=_e.object,Ee=_e.geometry,Ne=G===null?_e.material:G,De=_e.group;Me.layers.test(V.layers)&&xf(Me,k,V,Ee,Ne,De)}}function xf(T,k,V,G,z,he){T.onBeforeRender(g,k,V,G,z,he),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(g,k,V,G,T,he),z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,g.renderBufferDirect(V,k,G,z,T,he),z.side=Yi,z.needsUpdate=!0,g.renderBufferDirect(V,k,G,z,T,he),z.side=Ut):g.renderBufferDirect(V,k,G,z,T,he),T.onAfterRender(g,k,V,G,z,he)}function Ba(T,k,V){k.isScene!==!0&&(k=Be);const G=ze.get(T),z=m.state.lights,he=m.state.shadowsArray,_e=z.state.version,Me=P.getParameters(T,z.state,he,k,V),Ee=P.getProgramCacheKey(Me);let Ne=G.programs;G.environment=T.isMeshStandardMaterial?k.environment:null,G.fog=k.fog,G.envMap=(T.isMeshStandardMaterial?b:dt).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",de),Ne=new Map,G.programs=Ne);let De=Ne.get(Ee);if(De!==void 0){if(G.currentProgram===De&&G.lightsStateVersion===_e)return Mf(T,Me),De}else Me.uniforms=P.getUniforms(T),T.onBuild(V,Me,g),T.onBeforeCompile(Me,g),De=P.acquireProgram(Me,Ee),Ne.set(Ee,De),G.uniforms=Me.uniforms;const Pe=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=X.uniform),Mf(T,Me),G.needsLights=ov(T),G.lightsStateVersion=_e,G.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=De,G.uniformsList=null,De}function Sf(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Yo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Mf(T,k){const V=ze.get(T);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function sv(T,k,V,G,z){k.isScene!==!0&&(k=Be),Ue.resetTextureUnits();const he=k.fog,_e=G.isMeshStandardMaterial?k.environment:null,Me=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Qi,Ee=(G.isMeshStandardMaterial?b:dt).get(G.envMap||_e),Ne=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,vt=!!V.morphAttributes.color;let _t=Wi;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=g.toneMapping);const an=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ze=an!==void 0?an.length:0,Te=ze.get(G),Xt=m.state.lights;if(Y===!0&&(oe===!0||T!==M)){const mn=T===M&&G.id===R;X.setState(G,T,mn)}let tt=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Xt.state.version||Te.outputColorSpace!==Me||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Ee||G.fog===!0&&Te.fog!==he||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==X.numPlanes||Te.numIntersection!==X.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==De||Te.morphTargets!==Pe||Te.morphNormals!==$e||Te.morphColors!==vt||Te.toneMapping!==_t||Te.morphTargetsCount!==Ze)&&(tt=!0):(tt=!0,Te.__version=G.version);let Jn=Te.currentProgram;tt===!0&&(Jn=Ba(G,k,z));let za=!1,er=!1,$l=!1;const Rt=Jn.getUniforms(),_i=Te.uniforms;if(Re.useProgram(Jn.program)&&(za=!0,er=!0,$l=!0),G.id!==R&&(R=G.id,er=!0),za||M!==T){Rt.setValue(D,"projectionMatrix",T.projectionMatrix),Rt.setValue(D,"viewMatrix",T.matrixWorldInverse);const mn=Rt.map.cameraPosition;mn!==void 0&&mn.setValue(D,pe.setFromMatrixPosition(T.matrixWorld)),it.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,er=!0,$l=!0)}if(z.isSkinnedMesh){Rt.setOptional(D,z,"bindMatrix"),Rt.setOptional(D,z,"bindMatrixInverse");const mn=z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Rt.setValue(D,"boneTexture",mn.boneTexture,Ue))}z.isBatchedMesh&&(Rt.setOptional(D,z,"batchingTexture"),Rt.setValue(D,"batchingTexture",z._matricesTexture,Ue),Rt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&Rt.setValue(D,"batchingColorTexture",z._colorsTexture,Ue));const Zl=V.morphAttributes;if((Zl.position!==void 0||Zl.normal!==void 0||Zl.color!==void 0)&&ce.update(z,V,Jn),(er||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,Rt.setValue(D,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(_i.envMap.value=Ee,_i.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&k.environment!==null&&(_i.envMapIntensity.value=k.environmentIntensity),er&&(Rt.setValue(D,"toneMappingExposure",g.toneMappingExposure),Te.needsLights&&av(_i,$l),he&&G.fog===!0&&O.refreshFogUniforms(_i,he),O.refreshMaterialUniforms(_i,G,ie,$,m.state.transmissionRenderTarget[T.id]),Yo.upload(D,Sf(Te),_i,Ue)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Yo.upload(D,Sf(Te),_i,Ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(D,"center",z.center),Rt.setValue(D,"modelViewMatrix",z.modelViewMatrix),Rt.setValue(D,"normalMatrix",z.normalMatrix),Rt.setValue(D,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const mn=G.uniformsGroups;for(let Ql=0,lv=mn.length;Ql<lv;Ql++){const Ef=mn[Ql];Le.update(Ef,Jn),Le.bind(Ef,Jn)}}return Jn}function av(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function ov(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,k,V){ze.get(T.texture).__webglTexture=k,ze.get(T.depthTexture).__webglTexture=V;const G=ze.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const V=ze.get(T);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,V=0){A=T,C=k,w=V;let G=!0,z=null,he=!1,_e=!1;if(T){const Ee=ze.get(T);Ee.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(D.FRAMEBUFFER,null),G=!1):Ee.__webglFramebuffer===void 0?Ue.setupRenderTarget(T):Ee.__hasExternalTextures&&Ue.rebindTextures(T,ze.get(T.texture).__webglTexture,ze.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const De=ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[k])?z=De[k][V]:z=De[k],he=!0):T.samples>0&&Ue.useMultisampledRTT(T)===!1?z=ze.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[V]:z=De,S.copy(T.viewport),L.copy(T.scissor),H=T.scissorTest}else S.copy(re).multiplyScalar(ie).floor(),L.copy(q).multiplyScalar(ie).floor(),H=me;if(Re.bindFramebuffer(D.FRAMEBUFFER,z)&&G&&Re.drawBuffers(T,z),Re.viewport(S),Re.scissor(L),Re.setScissorTest(H),he){const Ee=ze.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ee.__webglTexture,V)}else if(_e){const Ee=ze.get(T.texture),Ne=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Ne)}R=-1},this.readRenderTargetPixels=function(T,k,V,G,z,he,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Re.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Ee=T.texture,Ne=Ee.format,De=Ee.type;if(!it.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-G&&V>=0&&V<=T.height-z&&D.readPixels(k,V,G,z,ae.convert(Ne),ae.convert(De),he)}finally{const Ee=A!==null?ze.get(A).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,k,V,G,z,he,_e){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){Re.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Ee=T.texture,Ne=Ee.format,De=Ee.type;if(!it.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-G&&V>=0&&V<=T.height-z){const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(k,V,G,z,ae.convert(Ne),ae.convert(De),0),D.flush();const $e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await lS(D,$e,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he)}finally{D.deleteBuffer(Pe),D.deleteSync($e)}return he}}finally{const Ee=A!==null?ze.get(A).__webglFramebuffer:null;Re.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,k=null,V=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),z=Math.floor(T.image.width*G),he=Math.floor(T.image.height*G),_e=k!==null?k.x:0,Me=k!==null?k.y:0;Ue.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,_e,Me,z,he),Re.unbindTexture()},this.copyTextureToTexture=function(T,k,V=null,G=null,z=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],k=arguments[2],z=arguments[3]||0,V=null);let he,_e,Me,Ee,Ne,De;V!==null?(he=V.max.x-V.min.x,_e=V.max.y-V.min.y,Me=V.min.x,Ee=V.min.y):(he=T.image.width,_e=T.image.height,Me=0,Ee=0),G!==null?(Ne=G.x,De=G.y):(Ne=0,De=0);const Pe=ae.convert(k.format),$e=ae.convert(k.type);Ue.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const vt=D.getParameter(D.UNPACK_ROW_LENGTH),_t=D.getParameter(D.UNPACK_IMAGE_HEIGHT),an=D.getParameter(D.UNPACK_SKIP_PIXELS),Ze=D.getParameter(D.UNPACK_SKIP_ROWS),Te=D.getParameter(D.UNPACK_SKIP_IMAGES),Xt=T.isCompressedTexture?T.mipmaps[z]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ee),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ne,De,he,_e,Pe,$e,Xt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ne,De,Xt.width,Xt.height,Pe,Xt.data):D.texSubImage2D(D.TEXTURE_2D,z,Ne,De,Pe,$e,Xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t),D.pixelStorei(D.UNPACK_SKIP_PIXELS,an),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),z===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,k,V=null,G=null,z=0){T.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],k=arguments[3],z=arguments[4]||0);let he,_e,Me,Ee,Ne,De,Pe,$e,vt;const _t=T.isCompressedTexture?T.mipmaps[z]:T.image;V!==null?(he=V.max.x-V.min.x,_e=V.max.y-V.min.y,Me=V.max.z-V.min.z,Ee=V.min.x,Ne=V.min.y,De=V.min.z):(he=_t.width,_e=_t.height,Me=_t.depth,Ee=0,Ne=0,De=0),G!==null?(Pe=G.x,$e=G.y,vt=G.z):(Pe=0,$e=0,vt=0);const an=ae.convert(k.format),Ze=ae.convert(k.type);let Te;if(k.isData3DTexture)Ue.setTexture3D(k,0),Te=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ue.setTexture2DArray(k,0),Te=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Xt=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Jn=D.getParameter(D.UNPACK_SKIP_PIXELS),za=D.getParameter(D.UNPACK_SKIP_ROWS),er=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Te,z,Pe,$e,vt,he,_e,Me,an,Ze,_t.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,z,Pe,$e,vt,he,_e,Me,an,_t.data):D.texSubImage3D(Te,z,Pe,$e,vt,he,_e,Me,an,Ze,_t),D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Jn),D.pixelStorei(D.UNPACK_SKIP_ROWS,za),D.pixelStorei(D.UNPACK_SKIP_IMAGES,er),z===0&&k.generateMipmaps&&D.generateMipmap(Te),Re.unbindTexture()},this.initRenderTarget=function(T){ze.get(T).__webglFramebuffer===void 0&&Ue.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Ue.setTextureCube(T,0):T.isData3DTexture?Ue.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ue.setTexture2DArray(T,0):Ue.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){C=0,w=0,A=null,Re.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===cf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Xl?"display-p3":"srgb"}}class gw extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class as extends Cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new I,wl=new I,im=new lt,Ks=new jl,Po=new Fa,ru=new I,rm=new I;class Ai extends Dt{constructor(e=new Mt,n=new as){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Tl.fromBufferAttribute(n,r-1),wl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Tl.distanceTo(wl);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;im.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(im);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){const u=d.getX(y),v=d.getX(y+1),g=bo(this,e,Ks,l,u,v);g&&n.push(g)}if(this.isLineLoop){const y=d.getX(_-1),m=d.getX(p),u=bo(this,e,Ks,l,y,m);u&&n.push(u)}}else{const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let y=p,m=_-1;y<m;y+=c){const u=bo(this,e,Ks,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=bo(this,e,Ks,l,_-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function bo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Tl.fromBufferAttribute(a,r),wl.fromBufferAttribute(a,s),n.distanceSqToSegment(Tl,wl,ru,rm)>i)return;ru.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(ru);if(!(l<e.near||l>e.far))return{distance:l,point:rm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const sm=new I,am=new I;class vw extends Ai{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)sm.fromBufferAttribute(n,r),am.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sm.distanceTo(am);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iv extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const om=new lt,ud=new jl,Lo=new Fa,No=new I;class _w extends Dt{constructor(e=new Mt,n=new iv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(r),Lo.radius+=s,e.ray.intersectsSphere(Lo)===!1)return;om.copy(r).invert(),ud.copy(e.ray).applyMatrix4(om);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,y=p;_<y;_++){const m=c.getX(_);No.fromBufferAttribute(h,m),lm(No,m,l,r,e,n,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,y=p;_<y;_++)No.fromBufferAttribute(h,_),lm(No,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lm(t,e,n,i,r,s,a){const o=ud.distanceSqToPoint(t);if(o<n){const l=new I;ud.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class yw{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],f=i[r+1]-d,p=(a-d)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new Fe:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new I,r=[],s=[],a=[],o=new I,l=new lt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function xw(t,e){const n=1-t;return n*n*e}function Sw(t,e){return 2*(1-t)*t*e}function Mw(t,e){return t*t*e}function su(t,e,n,i){return xw(t,e)+Sw(t,n)+Mw(t,i)}class cm extends yw{constructor(e=new I,n=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new I){const i=n,r=this.v0,s=this.v1,a=this.v2;return i.set(su(e,r.x,s.x,a.x),su(e,r.y,s.y,a.y),su(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Al extends Mt{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new I,d=new Fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const p=i+h/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Al(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hf extends Mt{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],p=[];let _=0;const y=[],m=i/2;let u=0;v(),a===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function v(){const x=new I,C=new I;let w=0;const A=(n-e)/i;for(let R=0;R<=s;R++){const M=[],S=R/s,L=S*(n-e)+e;for(let H=0;H<=r;H++){const B=H/r,K=B*l+o,ee=Math.sin(K),$=Math.cos(K);C.x=L*ee,C.y=-S*i+m,C.z=L*$,h.push(C.x,C.y,C.z),x.set(ee,A,$).normalize(),f.push(x.x,x.y,x.z),p.push(B,1-S),M.push(_++)}y.push(M)}for(let R=0;R<r;R++)for(let M=0;M<s;M++){const S=y[M][R],L=y[M+1][R],H=y[M+1][R+1],B=y[M][R+1];d.push(S,L,B),d.push(L,H,B),w+=6}c.addGroup(u,w,0),u+=w}function g(x){const C=_,w=new Fe,A=new I;let R=0;const M=x===!0?e:n,S=x===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),_++;const L=_;for(let H=0;H<=r;H++){const K=H/r*l+o,ee=Math.cos(K),$=Math.sin(K);A.x=M*$,A.y=m*S,A.z=M*ee,h.push(A.x,A.y,A.z),f.push(0,S,0),w.x=ee*.5+.5,w.y=$*.5*S+.5,p.push(w.x,w.y),_++}for(let H=0;H<r;H++){const B=C+H,K=L+H;x===!0?d.push(K,K+1,B):d.push(K+1,K,B),R+=3}c.addGroup(u,R,x===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pf extends hf{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new pf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mf extends Mt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),d(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const g=new I,x=new I,C=new I;for(let w=0;w<n.length;w+=3)p(n[w+0],g),p(n[w+1],x),p(n[w+2],C),l(g,x,C,v)}function l(v,g,x,C){const w=C+1,A=[];for(let R=0;R<=w;R++){A[R]=[];const M=v.clone().lerp(x,R/w),S=g.clone().lerp(x,R/w),L=w-R;for(let H=0;H<=L;H++)H===0&&R===w?A[R][H]=M:A[R][H]=M.clone().lerp(S,H/L)}for(let R=0;R<w;R++)for(let M=0;M<2*(w-R)-1;M++){const S=Math.floor(M/2);M%2===0?(f(A[R][S+1]),f(A[R+1][S]),f(A[R][S])):(f(A[R][S+1]),f(A[R+1][S+1]),f(A[R+1][S]))}}function c(v){const g=new I;for(let x=0;x<s.length;x+=3)g.x=s[x+0],g.y=s[x+1],g.z=s[x+2],g.normalize().multiplyScalar(v),s[x+0]=g.x,s[x+1]=g.y,s[x+2]=g.z}function d(){const v=new I;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const x=m(v)/2/Math.PI+.5,C=u(v)/Math.PI+.5;a.push(x,1-C)}_(),h()}function h(){for(let v=0;v<a.length;v+=6){const g=a[v+0],x=a[v+2],C=a[v+4],w=Math.max(g,x,C),A=Math.min(g,x,C);w>.9&&A<.1&&(g<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,g){const x=v*3;g.x=e[x+0],g.y=e[x+1],g.z=e[x+2]}function _(){const v=new I,g=new I,x=new I,C=new I,w=new Fe,A=new Fe,R=new Fe;for(let M=0,S=0;M<s.length;M+=9,S+=6){v.set(s[M+0],s[M+1],s[M+2]),g.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),w.set(a[S+0],a[S+1]),A.set(a[S+2],a[S+3]),R.set(a[S+4],a[S+5]),C.copy(v).add(g).add(x).divideScalar(3);const L=m(C);y(w,S+0,v,L),y(A,S+2,g,L),y(R,S+4,x,L)}}function y(v,g,x,C){C<0&&v.x===1&&(a[g]=v.x-1),x.x===0&&x.z===0&&(a[g]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mf(e.vertices,e.indices,e.radius,e.details)}}class gf extends mf{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new gf(e.radius,e.detail)}}class os extends Mt{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,p=new I,_=new Fe;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const u=s+m/i*a;p.x=h*Math.cos(u),p.y=h*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,d.push(_.x,_.y)}h+=f}for(let y=0;y<r;y++){const m=y*(i+1);for(let u=0;u<i;u++){const v=u+m,g=v,x=v+i+1,C=v+i+2,w=v+1;o.push(g,x,w),o.push(x,C,w)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ls extends Mt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],h=new I,f=new I,p=[],_=[],y=[],m=[];for(let u=0;u<=i;u++){const v=[],g=u/i;let x=0;u===0&&a===0?x=.5/n:u===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const w=C/n;h.x=-e*Math.cos(r+w*s)*Math.sin(a+g*o),h.y=e*Math.cos(a+g*o),h.z=e*Math.sin(r+w*s)*Math.sin(a+g*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),y.push(f.x,f.y,f.z),m.push(w+x,1-g),v.push(c++)}d.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const g=d[u][v+1],x=d[u][v],C=d[u+1][v],w=d[u+1][v+1];(u!==0||a>0)&&p.push(g,x,w),(u!==i-1||l<Math.PI)&&p.push(x,C,w)}this.setIndex(p),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ew extends Cr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O0,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tw extends as{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const um={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class ww{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null}}}const Aw=new ww;class vf{constructor(e){this.manager=e!==void 0?e:Aw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vf.DEFAULT_MATERIAL_NAME="__DEFAULT";class Cw extends vf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=um.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ca("img");function l(){d(),um.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Rw extends vf{constructor(e){super(e)}load(e,n,i,r){const s=new $t,a=new Cw(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class rv extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const au=new lt,dm=new I,fm=new I;class Pw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new df,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),n.position.copy(dm),fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fm),n.updateMatrixWorld(),au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bw extends Pw{constructor(){super(new $0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hm extends rv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new bw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lw extends rv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const pm=new lt;class Nw{constructor(e,n,i=0,r=1/0){this.ray=new jl(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return pm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pm),this}intersectObject(e,n=!0,i=[]){return dd(e,this,i,n),i.sort(mm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)dd(e[r],this,i,n);return i.sort(mm),i}}function mm(t,e){return t.distance-e.distance}function dd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)dd(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=of);function Dw(t,e,n){const i=new gw,r=new yn(45,window.innerWidth/window.innerHeight,.1,1e3),s=3.2;r.position.z=n==null?void 0:n.initialCameraZ;const a=new mw({antialias:!0,alpha:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setClearColor(658448,1),t.innerHTML="",t.appendChild(a.domElement);const o=new Nw;o.params.Points={threshold:.06};const l=new Fe;let c=!1,d={x:0,y:0},h={x:0,y:0},f={x:.3,y:0},p=!0,_=null,y=null,m="all",u=null;const v=[];let g,x=null,C=null,w=null,A=!1,R=null,M=null,S=null,L=null;const H=[];function B(){const P=new Mt,O=new Float32Array(3e3*3);for(let W=0;W<3e3;W++)O[W*3]=(Math.random()-.5)*100,O[W*3+1]=(Math.random()-.5)*100,O[W*3+2]=(Math.random()-.5)*100;P.setAttribute("position",new On(O,3));const J=new iv({color:3359061,size:.08,sizeAttenuation:!0});i.add(new _w(P,J))}function K(){const P=new ls(1,64,64),O=new Rw().load("/earth-night.jpg");O.wrapS=ui,O.wrapT=ui;const J=new Ew({map:O,emissiveMap:O,color:16777215,emissive:1118481,emissiveIntensity:.8,specular:1981023,shininess:18});g=new at(P,J),i.add(g);const W=new ls(1.002,36,18),X=new Pn({color:1981023,wireframe:!0,transparent:!0,opacity:.08}),ue=new at(W,X);g.add(ue);const Z=new os(1.003,1.007,128),ce=new Pn({color:3718648,transparent:!0,opacity:.1,side:Ut}),ye=new at(Z,ce);ye.rotation.x=Math.PI/2,g.add(ye)}function ee(){jo.forEach((P,O)=>{const J=Vn(P.lat,P.lng,1.01),W=new I(J.x,J.y,J.z),X=new We(Xo[P.country]||"#ffffff"),ue=new os(.015,.025,16),Z=new Pn({color:X,transparent:!0,opacity:.35,side:Ut}),ce=new at(ue,Z);ce.position.copy(W),ce.lookAt(W.clone().multiplyScalar(2)),ce.userData={facilityIndex:O},g.add(ce);const ye=new Al(.015,12),Se=new Pn({color:X,transparent:!0,opacity:.9,side:Ut}),ae=new at(ye,Se);ae.position.copy(W),ae.lookAt(W.clone().multiplyScalar(2)),ae.userData={facilityIndex:O},g.add(ae);const we=new os(.014,.018,16),Le=new Pn({color:X,transparent:!0,opacity:.5,side:Ut}),Ge=new at(we,Le);Ge.position.copy(W),Ge.lookAt(W.clone().multiplyScalar(2)),Ge.userData={facilityIndex:O,isPulse:!0},g.add(Ge),v.push({ring:ce,dot:ae,pulse:Ge,facility:P,yearScale:1})})}function $(P){const O=Object.values(P).filter(W=>W>0),J=O.length?Math.max(...O):1;v.forEach(W=>{const X=P[W.facility.country]??0,ue=X===0?0:Math.max(.5,.25+.75*Math.min(1,X/J));W.yearScale=ue,W.ring.scale.set(ue,ue,1),W.dot.scale.set(ue,ue,1)})}function ie(P,O,J){return{name:P.name,country:P.country,lat:O,lng:J,type:"submarine",missiles:P.missiles,warheads:P.warheads,range:P.range,status:"Patrol",baseName:P.baseName}}function F(){if(!g)return;const P=new Nn;L=P,g.add(P);const O=1.005;Fh.forEach(J=>{if(J.waypoints.length<2)return;const W=new We(Xo[J.country]||"#ffffff"),X=J.waypoints.map(N=>{const fe=Vn(N.lat,N.lng,O);return new I(fe.x,fe.y,fe.z)});X.push(X[0].clone());const ue=new Mt().setFromPoints(X),Z=new Tw({color:W,transparent:!0,opacity:.15,dashSize:.015,gapSize:.01}),ce=new Ai(ue,Z);ce.computeLineDistances(),P.add(ce);const ye=new pf(.012,.028,4),Se=new Pn({color:W,transparent:!0,opacity:.95,side:Ut}),ae=new at(ye,Se);ae.userData={patrolIndex:H.length,isPatrolSub:!0};const we=X[0];ae.position.copy(we),ae.lookAt(we.clone().multiplyScalar(2)),P.add(ae);const Le=J.waypoints.map(N=>{const fe=Vn(N.lat,N.lng,O);return new I(fe.x,fe.y,fe.z)}),Ge=J.waypoints[0];H.push({patrol:J,pathLine:ce,subMesh:ae,pathVecs:Le,currentLat:Ge.lat,currentLng:Ge.lng})})}function ne(){if(!L)return;const P=(m==="all"||m==="submarine")&&(!u||Fh.some(O=>O.country===u));L.visible=P,P&&H.forEach(O=>{const J=!u||O.patrol.country===u;O.pathLine.visible=J,O.subMesh.visible=J})}function re(){const P=new ls(1.05,64,64),O=new Qn({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.22, 0.74, 0.97, 0.15) * intensity;
        }
      `,blending:td,side:Kt,transparent:!0});i.add(new at(P,O))}function q(){i.add(new Lw(3359061,1.2));const P=new hm(9741240,1.5);P.position.set(5,3,5),i.add(P);const O=new hm(3718648,.3);O.position.set(-5,-2,-3),i.add(O)}function me(P){return!(m!=="all"&&P.type!==m||u&&P.country!==u)}function Ce(){v.forEach(P=>{const O=me(P.facility)&&P.yearScale>0;P.ring.visible=O,P.dot.visible=O,P.pulse.visible=O}),ne()}function Y(){C&&g&&(g.remove(C),C.children.forEach(P=>{const O=P;O.geometry.dispose(),O.material.dispose()}),C=null)}function oe(){x&&g&&(g.remove(x),x.children.forEach(P=>{const O=P;O.geometry.dispose(),O.material.dispose()}),x=null)}function ve(P){if(!g)return;oe(),x=new Nn,g.add(x);const O=new Set(["United States","Russia","China","France","United Kingdom","India","Pakistan","Israel","North Korea"]);(P.features||[]).forEach(W=>{var Se,ae,we;const X=W.geometry;if(!X)return;const ue=((Se=W.properties)==null?void 0:Se.ADMIN)||((ae=W.properties)==null?void 0:ae.SOVEREIGNT)||((we=W.properties)==null?void 0:we.NAME)||"",ce=O.has(ue)?.7:.3,ye=Le=>{Le.forEach(Ge=>{const N=[];if(Ge.forEach(([qe,ft])=>{const gt=Vn(ft,qe,1.003);N.push(new I(gt.x,gt.y,gt.z))}),N.length<2)return;const fe=N[0],Q=N[N.length-1];fe.equals(Q)||N.push(fe.clone());const te=new Mt().setFromPoints(N),de=new as({color:1981023,transparent:!0,opacity:ce}),Ae=new Ai(te,de);x==null||x.add(Ae)})};X.type==="Polygon"?ye(X.coordinates):X.type==="MultiPolygon"&&X.coordinates.forEach(Le=>ye(Le))})}function pe(P){if(!P.range)return;const O=1.02,J=P.range/6371,W=Vn(P.lat,P.lng,1),X=new I(W.x,W.y,W.z).normalize(),ue=new ls(O,64,64),Z={uCenterDir:{value:X},uCosRadius:{value:Math.cos(J)}},ce=new Qn({uniforms:Z,vertexShader:`
        varying float vDot;
        uniform vec3 uCenterDir;
        void main() {
          vec3 n = normalize(position);
          vDot = dot(n, normalize(uCenterDir));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying float vDot;
        uniform float uCosRadius;
        void main() {
          float edgeDist = vDot - uCosRadius;
          if (edgeDist < 0.0) discard;
          float edgeWidth = 0.015;
          float alpha;
          if (edgeDist < edgeWidth) {
            alpha = 0.7;
          } else {
            alpha = 0.08;
          }
          gl_FragColor = vec4(0.93, 0.27, 0.27, alpha);
        }
      `,transparent:!0,depthWrite:!1,side:Ut}),ye=new at(ue,ce);C==null||C.add(ye)}function Be(P){Y(),!(!P||!P.range)&&(C=new Nn,g.add(C),pe(P))}function Ie(){w&&g&&(g.remove(w),w.children.forEach(P=>{(P instanceof Ai||P instanceof at)&&(P.geometry.dispose(),P.material.dispose())}),w=null)}function Xe(P){var Z;if(Ie(),!P||!((Z=P.likelyTargets)!=null&&Z.length))return;const O=1.01,J=1.01+.3,W=Vn(P.lat,P.lng,O),X=new I(W.x,W.y,W.z),ue=new We(Xo[P.country]||"#ffffff");w=new Nn,g.add(w),P.likelyTargets.forEach(ce=>{const ye=Vn(ce.lat,ce.lng,O),Se=new I(ye.x,ye.y,ye.z),we=new I().addVectors(X,Se).normalize().multiplyScalar(J),Ge=new cm(X,we,Se).getPoints(64),N=new Mt().setFromPoints(Ge),fe=new as({color:ue,transparent:!0,opacity:.6}),Q=new Ai(N,fe);w.add(Q);const te=new gf(.018,0),de=new Pn({color:15680580,transparent:!0,opacity:.95}),Ae=new at(te,de);Ae.position.copy(Se),Ae.lookAt(Se.clone().multiplyScalar(2)),Ae.userData={isTargetDiamond:!0},w.add(Ae)})}function D(){M&&g&&(g.remove(M),M.children.forEach(P=>{(P instanceof Ai||P instanceof at)&&(P.geometry.dispose(),P.material.dispose())}),M=null)}function He(){S&&g&&(g.remove(S),S.children.forEach(P=>{(P instanceof Ai||P instanceof at)&&(P.geometry.dispose(),P.material.dispose())}),S=null)}function Ve(P){if(D(),R=P,!P)return;const J=Vn(P.lat,P.lng,1.01),W=new I(J.x,J.y,J.z);M=new Nn,M.position.copy(W),M.lookAt(W.clone().multiplyScalar(2));const X=.035,ue=new Mt().setFromPoints([new I(-X,0,0),new I(X,0,0),new I(0,-X,0),new I(0,X,0)]),Z=new as({color:15680580,transparent:!0,opacity:.9,linewidth:1}),ce=new vw(ue,Z);ce.userData={isThreatMarker:!0},M.add(ce);const ye=new os(.012,.02,16),Se=new Pn({color:15680580,transparent:!0,opacity:.8,side:Ut}),ae=new at(ye,Se);ae.userData={isThreatMarker:!0},M.add(ae),g.add(M)}function it(P){if(He(),!R||!P.length)return;const O=1.01,J=1.01+.3,W=Vn(R.lat,R.lng,O),X=new I(W.x,W.y,W.z);S=new Nn,g.add(S);const ue=new We(15680580);P.forEach(Z=>{const ce=Vn(Z.lat,Z.lng,O),ye=new I(ce.x,ce.y,ce.z),ae=new I().addVectors(ye,X).normalize().clone().multiplyScalar(J),Le=new cm(ye,ae,X).getPoints(48),Ge=new Mt().setFromPoints(Le),N=new as({color:ue,transparent:!0,opacity:.7,linewidth:1}),fe=new Ai(Ge,N);S.add(fe);const Q=new Al(.006,12),te=new Pn({color:ue,transparent:!0,opacity:.95,side:Ut}),de=new at(Q,te);de.position.copy(ye),de.lookAt(ye.clone().multiplyScalar(2)),S.add(de)})}function Re(P){Y(),P.length&&(C=new Nn,g.add(C),P.forEach(O=>{O.range>0&&pe(O)}))}function je(P,O){f.x=P*(Math.PI/180),f.y=-(O+90)*(Math.PI/180),p=!1}function ze(P){const O=a.domElement.getBoundingClientRect();l.x=(P.clientX-O.left)/O.width*2-1,l.y=-((P.clientY-O.top)/O.height)*2+1,o.setFromCamera(l,r);const J=v.flatMap(X=>[X.ring,X.dot]),W=o.intersectObjects(J);if(W.length>0){const X=W[0].object.userData.facilityIndex;if(X!==void 0){const ue=jo[X];if(me(ue)){e.onHoverFacility(ue,{x:P.clientX+14,y:P.clientY-10}),a.domElement.style.cursor=A?"crosshair":"pointer";return}}}if(L!=null&&L.visible){const X=H.filter(Z=>Z.subMesh.visible).map(Z=>Z.subMesh),ue=o.intersectObjects(X);if(ue.length>0){const Z=ue[0].object.userData.patrolIndex;if(Z!==void 0&&H[Z]){const ce=H[Z],ye=ie(ce.patrol,ce.currentLat,ce.currentLng);e.onHoverFacility(ye,{x:P.clientX+14,y:P.clientY-10}),a.domElement.style.cursor=A?"crosshair":"pointer";return}}}e.onHoverFacility(null,null),a.domElement.style.cursor=A?"crosshair":"grab"}function Ue(P){const O=a.domElement.getBoundingClientRect();if(l.x=(P.clientX-O.left)/O.width*2-1,l.y=-((P.clientY-O.top)/O.height)*2+1,o.setFromCamera(l,r),A&&e.onGlobeClick){const X=o.intersectObject(g);if(X.length>0){const ue=X[0],Z=g.worldToLocal(ue.point.clone()),{lat:ce,lng:ye}=Oh(Z.x,Z.y,Z.z);e.onGlobeClick(ce,ye);return}}let J=v.flatMap(X=>[X.ring,X.dot]),W=o.intersectObjects(J);if(W.length>0){const X=W[0].object.userData.facilityIndex;if(X!==void 0){const ue=jo[X];me(ue)&&(Xe(null),e.onSelectFacility(ue),_&&(clearTimeout(_),_=null),p=!1,je(ue.lat,ue.lng),Y())}return}if(L!=null&&L.visible){const X=H.filter(ue=>ue.subMesh.visible).map(ue=>ue.subMesh);if(W=o.intersectObjects(X),W.length>0){const ue=W[0].object.userData.patrolIndex;if(ue!==void 0&&H[ue]){const Z=H[ue],ce=ie(Z.patrol,Z.currentLat,Z.currentLng);Xe(null),e.onSelectFacility(ce),_&&(clearTimeout(_),_=null),p=!1,je(Z.currentLat,Z.currentLng),Y()}}}}function dt(){_&&clearTimeout(_),_=setTimeout(()=>{_=null,p=!0},3e3)}function b(){const P=a.domElement;P.addEventListener("mousedown",O=>{c=!0,p=!1,d={x:O.clientX,y:O.clientY}}),P.addEventListener("mousemove",O=>{const J=a.domElement.getBoundingClientRect();if(l.x=(O.clientX-J.left)/J.width*2-1,l.y=-((O.clientY-J.top)/J.height)*2+1,c){const W=O.clientX-d.x;h={x:(O.clientY-d.y)*.003,y:W*.003},f.x+=h.x,f.y+=h.y,d={x:O.clientX,y:O.clientY}}ze(O)}),P.addEventListener("mouseup",()=>{c=!1,dt()}),P.addEventListener("wheel",O=>{O.preventDefault(),r.position.z=Math.max(1.8,Math.min(6,r.position.z+O.deltaY*.002))},{passive:!1}),P.addEventListener("click",O=>{Ue(O)}),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)})}function E(P){return 1-Math.pow(1-P,3)}function j(P,O){const J=r.position.z,W=Date.now();return y&&(y.resolve(),y=null),p=!1,new Promise(X=>{y={fromZ:J,toZ:P,startMs:W,durationMs:O,resolve:X}})}function se(){if(requestAnimationFrame(se),p&&(f.y+=.0012),h.x*=.92,h.y*=.92,g.rotation.x+=(f.x-g.rotation.x)*.05,g.rotation.y+=(f.y-g.rotation.y)*.05,y){const W=(Date.now()-y.startMs)/y.durationMs,X=Math.min(1,Math.max(0,W)),ue=E(X);if(r.position.z=y.fromZ+(y.toZ-y.fromZ)*ue,X>=1){const Z=y.resolve;y=null,p=!0,Z()}}const P=Date.now()*.001;if(v.forEach((J,W)=>{if(J.pulse.visible&&J.yearScale>0){const X=J.yearScale*(1+Math.sin(P*2+W*.5)*.8);J.pulse.scale.set(X,X,1);const ue=J.pulse.material;ue.opacity=.4*(1-(X/J.yearScale-1)/.8)}}),w&&w.children.forEach(J=>{if(J instanceof at&&J.userData.isTargetDiamond){const W=.85+Math.sin(P*2.5)*.2;J.scale.set(W,W,W)}}),M){const J=.92+Math.sin(P*2.2)*.1;M.scale.set(J,J,1)}const O=Date.now()/6e4%1;H.forEach((J,W)=>{const X=J.pathVecs.length,ue=O*X%X,Z=Math.floor(ue)%X,ce=ue-Math.floor(ue),ye=J.pathVecs[Z],Se=J.pathVecs[(Z+1)%X],ae=new I().lerpVectors(ye,Se,ce);J.subMesh.position.copy(ae);const we=new I().subVectors(Se,ye).normalize();J.subMesh.lookAt(ae.clone().add(we));const{lat:Le,lng:Ge}=Oh(ae.x,ae.y,ae.z);J.currentLat=Le,J.currentLng=Ge;const N=.95+Math.sin(P*2.5+W*.7)*.1;J.subMesh.scale.set(N,N,N)}),a.render(i,r)}return B(),K(),ee(),F(),re(),q(),b(),Ce(),se(),{setFilter(P){m=P,Ce()},setCountry(P){u=P,Ce()},setWarheadsByYear(P){$(P),Ce()},addCountryBorders:ve,showRangeForFacility(P){Be(P)},showTargetsForFacility(P){Xe(P)},setThreatMode(P){A=P,P||(Ve(null),He()),Y(),a.domElement.style.cursor=P?"crosshair":"grab"},setThreatTarget(P){Ve(P),P&&je(P.lat,P.lng)},setThreatArcs(P){it(P)},setThreatRangeDomes(P){Re(P)},centerGlobeOn(P,O){je(P,O)},scheduleAutoRotateResume(){dt()},flyCameraToDefault(){return j(s,2e3)},dispose(){_&&(clearTimeout(_),_=null),Y(),Ie(),D(),He(),oe(),L&&g&&(H.forEach(P=>{P.pathLine.geometry.dispose(),P.pathLine.material.dispose(),P.subMesh.geometry.dispose(),P.subMesh.material.dispose()}),H.length=0,g.remove(L),L=null),a.dispose(),t.innerHTML=""}}}const ou=2025,Iw=200;function Uw(){const[t,e]=be.useState(!0),[n,i]=be.useState(!1),[r,s]=be.useState(!1),[a,o]=be.useState(!1),[l,c]=be.useState("all"),[d,h]=be.useState(null),[f,p]=be.useState(null),[_,y]=be.useState(null),[m,u]=be.useState(null),[v,g]=be.useState(ou),[x,C]=be.useState(!1),[w,A]=be.useState(!1),[R,M]=be.useState(null),[S,L]=be.useState(!1),H=be.useRef(null),B=be.useRef(null),K=be.useMemo(()=>ky(v),[v]),ee=be.useMemo(()=>{if(!R)return[];const q=new Set(Gy(R.country)),me=[];for(const Ce of jo){if(!q.has(Ce.country))continue;const Y=Wy(Ce.lat,Ce.lng,R.lat,R.lng);Ce.range>0&&Ce.range>=Y&&me.push({facility:Ce,distanceKm:Y})}return me},[R]);be.useEffect(()=>{if(!(!H.current||B.current))return B.current=Dw(H.current,{onSelectFacility:q=>{p(q)},onHoverFacility:(q,me)=>{y(q),u(me)},onGlobeClick:(q,me)=>{M({name:"Selected point",country:"—",lat:q,lng:me})}},{initialCameraZ:8}),()=>{var q;(q=B.current)==null||q.dispose(),B.current=null}},[]);const $=async()=>{var q;if(!r){s(!0),e(!1);try{await((q=B.current)==null?void 0:q.flyCameraToDefault())}finally{i(!0)}}};be.useEffect(()=>{var q;(q=B.current)==null||q.setFilter(l)},[l]),be.useEffect(()=>{var q;(q=B.current)==null||q.setCountry(d)},[d]),be.useEffect(()=>{var q;(q=B.current)==null||q.setWarheadsByYear(K.byCountry)},[K.byCountry]),be.useEffect(()=>{var q;(q=B.current)==null||q.setThreatMode(w)},[w]),be.useEffect(()=>{var me,Ce,Y,oe,ve;if(!R){(me=B.current)==null||me.setThreatTarget(null),(Ce=B.current)==null||Ce.setThreatArcs([]);return}(Y=B.current)==null||Y.setThreatTarget({lat:R.lat,lng:R.lng,name:R.name,country:R.country});const q=ee.map(pe=>pe.facility);(oe=B.current)==null||oe.setThreatArcs(q),(ve=B.current)==null||ve.centerGlobeOn(R.lat,R.lng)},[R,ee]),be.useEffect(()=>{if(!x)return;const q=setInterval(()=>{g(me=>me>=ou?(C(!1),ou):me+1)},Iw);return()=>clearInterval(q)},[x]),be.useEffect(()=>{L(!1)},[f]);const ie=()=>{var q,me,Ce;(q=B.current)==null||q.showRangeForFacility(null),(me=B.current)==null||me.showTargetsForFacility(null),L(!1),p(null),(Ce=B.current)==null||Ce.scheduleAutoRotateResume()},F=q=>{var me;(me=B.current)==null||me.showRangeForFacility(q),L(!0)},ne=()=>{var q;(q=B.current)==null||q.showRangeForFacility(null),L(!1)},re=q=>{var me;(me=B.current)==null||me.showTargetsForFacility(q)};return U.jsxs(U.Fragment,{children:[U.jsx("div",{id:"canvas-container",ref:H}),U.jsx(ex,{showLanding:t,blockSceneInteraction:t,onEnter:$}),U.jsxs("div",{className:`ui-layer ${n?"ui-layer--visible":""}`,children:[U.jsxs("header",{className:"header",children:[U.jsxs("div",{className:"header-left",children:[U.jsx("div",{className:"logo-icon"}),U.jsxs("h1",{children:["Global ",U.jsx("span",{children:"Nuclear"})," Arsenal Tracker"]})]}),U.jsxs("div",{className:"header-right",children:[U.jsxs("div",{children:[U.jsx("span",{className:"live-dot"}),"OPEN SOURCE INTELLIGENCE"]}),U.jsx("div",{style:{marginTop:2,opacity:.6},children:"DATA: FAS / SIPRI / NTI — EST. 2025"})]})]}),U.jsx(jy,{activeFilter:l,activeCountry:d,onChangeFilter:q=>c(q),onChangeCountry:h,totalWarheads:K.total,warheadsByCountry:K.byCountry,nuclearStatesCount:K.nuclearStatesCount,threatMode:w,onThreatModeChange:q=>{A(q),q||M(null)},selectedCity:R&&R.country!=="—"?R:null,onSelectCity:q=>M(q)}),U.jsx($y,{getSceneApi:()=>B.current}),w&&R?U.jsx(Ky,{targetCity:R,threateningFacilities:ee,onClose:()=>{A(!1),M(null)}}):U.jsx(Yy,{facility:f,onClose:ie,rangeDomeVisible:S,onShowRange:F,onHideRange:ne,onShowTargets:re}),_&&m&&U.jsxs("div",{className:`tooltip ${_?"visible":""}`,style:{left:m.x,top:m.y},children:[U.jsx("div",{className:"tooltip-name",children:_.name}),U.jsxs("div",{className:"tooltip-type",children:[_.country," · ",R0[_.type]]})]}),U.jsx("div",{className:"controls-hint",children:"Drag to rotate · Scroll to zoom · Click markers for details"}),U.jsx(Jy,{year:v,onChangeYear:g,totalWarheads:K.total,isPlaying:x,onPlayPause:()=>C(q=>!q)}),U.jsxs("button",{type:"button",className:"sources-button",onClick:()=>o(!0),"aria-label":"Open data sources and methodology",children:[U.jsx("span",{children:"ℹ"}),"SOURCES"]}),U.jsx(tx,{open:a,onClose:()=>o(!1)})]})]})}lu.createRoot(document.getElementById("root")).render(U.jsx(wv.StrictMode,{children:U.jsx(Uw,{})}));
