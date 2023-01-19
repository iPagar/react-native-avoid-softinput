"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4985],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),l=r,v=d["".concat(u,".").concat(l)]||d[l]||f[l]||i;return t?o.createElement(v,a(a({ref:n},p),{},{components:t})):o.createElement(v,a({ref:n},p))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=l;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const i={id:"usage-view",title:"Usage - view",sidebar_label:"Usage - view"},a=void 0,s={unversionedId:"guides/usage-view",id:"version-2.0.x/guides/usage-view",title:"Usage - view",description:"",source:"@site/versioned_docs/version-2.0.x/guides/USAGE_VIEW.mdx",sourceDirName:"guides",slug:"/guides/usage-view",permalink:"/react-native-avoid-softinput/docs/2.0.x/guides/usage-view",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-2.0.x/guides/USAGE_VIEW.mdx",tags:[],version:"2.0.x",frontMatter:{id:"usage-view",title:"Usage - view",sidebar_label:"Usage - view"},sidebar:"docsSidebar",previous:{title:"Usage - module",permalink:"/react-native-avoid-softinput/docs/2.0.x/guides/usage-module"},next:{title:"Form",permalink:"/react-native-avoid-softinput/docs/2.0.x/recipes/recipes-form"}},u={},c=[],p={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport { AvoidSoftInputView } from "react-native-avoid-softinput";\n\n/**\n * If you want to use `AvoidSoftInputView` on Android,\n * remember to call `setAdjustNothing()` somewhere in the root component\n * or inside `useFocusEffect` callback, if you use react-navigation and want to use\n * `AvoidSoftInputView` only on specific screen\n * \n * ```ts\n * React.useEffect(() => {\n *   AvoidSoftInput.setAdjustNothing();\n * }, []);\n * ```\n */\n\nconst MyComponent = () => {\n  function onSoftInputShown(e) {\n    // Do sth\n  }\n  function onSoftInputHidden() {\n    // Do sth\n  }\n  function onSoftInputHeightChange(e) {\n    // Do sth\n  }\n  function onSoftInputAppliedOffsetChange(e) {\n    // Do sth\n  }\n  return (\n    <AvoidSoftInputView\n      avoidOffset={10}\n      easing="easeIn"\n      hideAnimationDelay={100}\n      hideAnimationDuration={300}\n      onSoftInputShown={onSoftInputShown}\n      onSoftInputHidden={onSoftInputHidden}\n      onSoftInputHeightChange={onSoftInputHeightChange}\n      showAnimationDelay={100}\n      showAnimationDuration={800}\n      style={styles.avoidSoftInputView}\n    >\n      {/** Content that should be pushed above the keyboard */}\n    </AvoidSoftInputView>\n  );\n};\n')))}d.isMDXComponent=!0}}]);