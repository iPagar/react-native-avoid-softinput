"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=i,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||r;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={id:"recipes-custom-config",title:"Custom config recipe",sidebar_label:"Custom config"},a=void 0,s={unversionedId:"recipes/recipes-custom-config",id:"version-3.0.x/recipes/recipes-custom-config",title:"Custom config recipe",description:"Applied offset animation can be configured both when using AvoidSoftInput module and AvoidSoftInputView component.",source:"@site/versioned_docs/version-3.0.x/recipes/CUSTOM_CONFIG.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-custom-config",permalink:"/react-native-avoid-softinput/docs/recipes/recipes-custom-config",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/versioned_docs/version-3.0.x/recipes/CUSTOM_CONFIG.mdx",tags:[],version:"3.0.x",frontMatter:{id:"recipes-custom-config",title:"Custom config recipe",sidebar_label:"Custom config"},sidebar:"docsSidebar",previous:{title:"Animations",permalink:"/react-native-avoid-softinput/docs/recipes/recipes-animations"},next:{title:"setEnabled",permalink:"/react-native-avoid-softinput/docs/api/module/set-enabled"}},c={},u=[{value:"Example - module",id:"example---module",level:3},{value:"Example - view",id:"example---view",level:3}],p={toc:u};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Applied offset animation can be configured both when using ",(0,i.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput")," module and ",(0,i.kt)("inlineCode",{parentName:"p"},"AvoidSoftInputView")," component."),(0,i.kt)("h3",{id:"example---module"},"Example - module"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export const CustomAnimationConfigModuleExample: React.FC = () => {\n  const onFocusEffect = useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true);\n    AvoidSoftInput.setEnabled(true);\n\n    /** Customize animation delay, duration & easing */\n    AvoidSoftInput.setEasing("easeOut");\n    AvoidSoftInput.setHideAnimationDelay(1000);\n    AvoidSoftInput.setHideAnimationDuration(600);\n    AvoidSoftInput.setShowAnimationDelay(1000);\n    AvoidSoftInput.setShowAnimationDuration(1200);\n    return () => {\n      /** Rest to default values */\n      AvoidSoftInput.setEasing("linear");\n      AvoidSoftInput.setHideAnimationDelay();\n      AvoidSoftInput.setHideAnimationDuration();\n      AvoidSoftInput.setShowAnimationDelay();\n      AvoidSoftInput.setShowAnimationDuration();\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  // ...\n};\n')),(0,i.kt)("h3",{id:"example---view"},"Example - view"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'export const CustomAnimationConfigViewExample: React.FC = () => {\n  // ...\n\n  return (\n    <SafeAreaView>\n      {/** Customize animation delay, duration & easing */}\n      <AvoidSoftInputView\n        easing="easeOut"\n        hideAnimationDelay={1000}\n        hideAnimationDuration={600}\n        showAnimationDelay={1000}\n        showAnimationDuration={1200}\n      >\n        // ...\n        <TextInput />\n        // ...\n      </AvoidSoftInputView>\n    </SafeAreaView>\n  );\n};\n')))}l.isMDXComponent=!0}}]);