"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||c[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={id:"use-soft-input-hidden",title:"useSoftInputHidden",sidebar_label:"useSoftInputHidden"},a=void 0,p={unversionedId:"api/hooks/use-soft-input-hidden",id:"version-2.0.x/api/hooks/use-soft-input-hidden",title:"useSoftInputHidden",description:"useSoftInputHidden is a shortcut for using AvoidSoftInput.onSoftInputHidden method inside useEffect.",source:"@site/versioned_docs/version-2.0.x/api/hooks/USE_SOFT_INPUT_HIDDEN.mdx",sourceDirName:"api/hooks",slug:"/api/hooks/use-soft-input-hidden",permalink:"/react-native-avoid-softinput/docs/2.0.x/api/hooks/use-soft-input-hidden",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-2.0.x/api/hooks/USE_SOFT_INPUT_HIDDEN.mdx",tags:[],version:"2.0.x",frontMatter:{id:"use-soft-input-hidden",title:"useSoftInputHidden",sidebar_label:"useSoftInputHidden"},sidebar:"docsSidebar",previous:{title:"AvoidSoftInputView",permalink:"/react-native-avoid-softinput/docs/2.0.x/api/view/"},next:{title:"useSoftInputShown",permalink:"/react-native-avoid-softinput/docs/2.0.x/api/hooks/use-soft-input-shown"}},s={},u=[{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}],d={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useSoftInputHidden")," is a shortcut for using ",(0,o.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputHidden")," method inside ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect"),"."),(0,o.kt)("h3",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"() => void"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"function called when soft input is hidden")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { useSoftInputHidden } from "react-native-avoid-softinput";\n\nuseSoftInputHidden(() => {\n  // Do sth\n});\n')))}l.isMDXComponent=!0}}]);