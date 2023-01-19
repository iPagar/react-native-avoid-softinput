"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={id:"usage-module",title:"Usage - module",sidebar_label:"Usage - module"},i=void 0,s={unversionedId:"guides/usage-module",id:"version-3.0.x/guides/usage-module",title:"Usage - module",description:"iOS",source:"@site/versioned_docs/version-3.0.x/guides/USAGE_MODULE.mdx",sourceDirName:"guides",slug:"/guides/usage-module",permalink:"/react-native-avoid-softinput/docs/guides/usage-module",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-3.0.x/guides/USAGE_MODULE.mdx",tags:[],version:"3.0.x",frontMatter:{id:"usage-module",title:"Usage - module",sidebar_label:"Usage - module"},sidebar:"docsSidebar",previous:{title:"Migration to 3.0.x",permalink:"/react-native-avoid-softinput/docs/guides/migration_to_3_0_x"},next:{title:"Usage - view",permalink:"/react-native-avoid-softinput/docs/guides/usage-view"}},d={},u=[{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Enable module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport { AvoidSoftInput } from "react-native-avoid-softinput";\n\nReact.useEffect(() => {\n  AvoidSoftInput.setEnabled(true);\n}, []);\n')),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"Enable module:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Before using module on Android, check if system support (",(0,o.kt)("inlineCode",{parentName:"strong"},'android:windowSoftInputMode="adjustResize"')," in Android manifest for ",(0,o.kt)("inlineCode",{parentName:"strong"},"<activity>")," tag) is enough for your use case."))),(0,o.kt)("p",null,"If you cannot, or don't want to use Android system support, then enable module and call ",(0,o.kt)("inlineCode",{parentName:"p"},"setShouldMimicIOSBehavior(true)")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Do not enable module with ",(0,o.kt)("inlineCode",{parentName:"strong"},"adjustResize")," value set, as it will result in padding being applied to already resized android window"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import * as React from "react";\nimport { AvoidSoftInput } from "react-native-avoid-softinput";\n\nReact.useEffect(() => {\n  AvoidSoftInput.setShouldMimicIOSBehavior(true);\n  AvoidSoftInput.setEnabled(true);\n}, []);\n')))}p.isMDXComponent=!0}}]);