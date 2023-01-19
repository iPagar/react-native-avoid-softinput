"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"recipes-modal",title:"Modal recipe",sidebar_label:"Modal"},i=void 0,c={unversionedId:"recipes/recipes-modal",id:"recipes/recipes-modal",title:"Modal recipe",description:"To handle React Native Modal components, you must wrap modal content in AvoidSoftInputView.",source:"@site/docs/recipes/MODAL.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-modal",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-modal",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/recipes/MODAL.mdx",tags:[],version:"current",frontMatter:{id:"recipes-modal",title:"Modal recipe",sidebar_label:"Modal"},sidebar:"docsSidebar",previous:{title:"Form",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-form"},next:{title:"Bottom sheet",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-bottom-sheet"}},l={},p=[{value:"Example",id:"example",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To handle React Native ",(0,o.kt)("inlineCode",{parentName:"p"},"Modal")," components, you must wrap modal content in ",(0,o.kt)("inlineCode",{parentName:"p"},"AvoidSoftInputView"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'export const ModalExample: React.FC = () => {\n  return (\n    // ... some JSX\n\n    <Modal /** ...modal props */>\n      <AvoidSoftInputView>\n        // ... wrapped content\n        <ScrollView>\n          <View>\n            <TextInput placeholder="Single line" />\n            <TextInput placeholder="Multiline" />\n            <Button />\n          </View>\n        </ScrollView>\n      </AvoidSoftInputView>\n    </Modal>\n\n    //... some JSX\n  );\n};\n')))}d.isMDXComponent=!0}}]);