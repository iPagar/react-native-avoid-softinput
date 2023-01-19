"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,f=l["".concat(u,".").concat(m)]||l[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={id:"set-adjust-pan",title:"setAdjustPan",sidebar_label:"setAdjustPan"},i=void 0,s={unversionedId:"api/module/set-adjust-pan",id:"version-3.0.x/api/module/set-adjust-pan",title:"setAdjustPan",description:"Use setAdjustPan, to set android:windowSoftInputMode attribute to adjustPan value.",source:"@site/versioned_docs/version-3.0.x/api/module/SET_ADJUST_PAN.mdx",sourceDirName:"api/module",slug:"/api/module/set-adjust-pan",permalink:"/react-native-avoid-softinput/docs/api/module/set-adjust-pan",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-3.0.x/api/module/SET_ADJUST_PAN.mdx",tags:[],version:"3.0.x",frontMatter:{id:"set-adjust-pan",title:"setAdjustPan",sidebar_label:"setAdjustPan"},sidebar:"docsSidebar",previous:{title:"setAdjustNothing",permalink:"/react-native-avoid-softinput/docs/api/module/set-adjust-nothing"},next:{title:"setAdjustResize",permalink:"/react-native-avoid-softinput/docs/api/module/set-adjust-resize"}},u={},p=[{value:"Example",id:"example",level:3}],d={toc:p};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"setAdjustPan"),", to set ",(0,a.kt)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"adjustPan")," value."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { AvoidSoftInput } from "react-native-avoid-softinput";\n\nAvoidSoftInput.setAdjustPan();\n')))}l.isMDXComponent=!0}}]);