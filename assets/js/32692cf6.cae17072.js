"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1526],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=d(t),f=i,m=l["".concat(s,".").concat(f)]||l[f]||c[f]||a;return t?o.createElement(m,r(r({ref:n},u),{},{components:t})):o.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[l]="string"==typeof e?e:i,r[1]=p;for(var d=2;d<a;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var o=t(7462),i=(t(7294),t(3905));const a={id:"recipes-animations",title:"Animations recipe",sidebar_label:"Animations"},r=void 0,p={unversionedId:"recipes/recipes-animations",id:"recipes/recipes-animations",title:"Animations recipe",description:"Animations based on AvoidSoftInput module events",source:"@site/docs/recipes/ANIMATIONS.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-animations",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-animations",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/recipes/ANIMATIONS.mdx",tags:[],version:"current",frontMatter:{id:"recipes-animations",title:"Animations recipe",sidebar_label:"Animations"},sidebar:"docsSidebar",previous:{title:"Sticky footer",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-sticky-footer"},next:{title:"Custom config",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-custom-config"}},s={},d=[{value:"Animations based on AvoidSoftInput module events",id:"animations-based-on-avoidsoftinput-module-events",level:3},{value:"Animations based on AvoidSoftInputView callbacks",id:"animations-based-on-avoidsoftinputview-callbacks",level:3}],u={toc:d};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"animations-based-on-avoidsoftinput-module-events"},"Animations based on AvoidSoftInput module events"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputShown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputHidden"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputHeightChange")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput.onSoftInputAppliedOffsetChange")," methods to listen for soft input events."),(0,i.kt)("p",null,"If you plan to use those methods in ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),", you can instead use shortcut hooks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useSoftInputShown")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useSoftInputHidden")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useSoftInputHeightChanged")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useSoftInputAppliedOffsetChanged"))),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export const AnimationExample = () => {\n  /**\n   * You can make animations with React Native's Animated API or Reanimated library\n   */\n  const animatedValue = useRef(new Animated.Value(0)).current;\n\n  useSoftInputShown(({ softInputHeight }) => {\n    /**\n     * Animate based on event value\n     */\n    Animated.timing(animatedValue, {\n      toValue: softInputHeight,\n      duration: 1000,\n    }).start();\n  });\n\n  useSoftInputHidden(() => {\n    /**\n     * Animate based on event value\n     */\n    Animated.timing(animatedValue, {\n      toValue: 0,\n      duration: 1000,\n    }).start();\n  });\n\n  return (\n    <View>\n      // ... some JSX\n      <Animated.View /** apply animated style */>\n        // ... animated content\n      </Animated.View>\n      // ... some JSX\n    </View>\n  );\n};\n")),(0,i.kt)("h3",{id:"animations-based-on-avoidsoftinputview-callbacks"},"Animations based on AvoidSoftInputView callbacks"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AvoidSoftInputView")," receives events through ",(0,i.kt)("inlineCode",{parentName:"p"},"onSoftInputShown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onSoftInputHidden"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onSoftInputHeightChange"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"onSoftInputAppliedOffsetChange")," callbacks."),(0,i.kt)("p",null,"Based on those callbacks, you can apply animations in similar way as when using ",(0,i.kt)("inlineCode",{parentName:"p"},"useSoftInputShown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useSoftInputHidden"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useSoftInputHeightChanged")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useSoftInputAppliedOffsetChanged")," hooks."),(0,i.kt)("p",null,"Additionally, when using Reanimated library from v2.3.0, you can create ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/custom_events"},"custom event handlers")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export function useSoftInputAppliedOffsetHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      "worklet";\n      const { onSoftInputAppliedOffsetChange } = handlers;\n\n      if (\n        onSoftInputAppliedOffsetChange &&\n        event.eventName.endsWith("onSoftInputAppliedOffsetChange")\n      ) {\n        onSoftInputAppliedOffsetChange(event, context);\n      }\n    },\n    ["onSoftInputAppliedOffsetChange"],\n    doDependenciesDiffer\n  );\n}\n\nexport function useSoftInputHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      "worklet";\n      const { onSoftInputHidden, onSoftInputShown, onSoftInputHeightChange } =\n        handlers;\n\n      if (onSoftInputHidden && event.eventName.endsWith("onSoftInputHidden")) {\n        onSoftInputHidden(event, context);\n      }\n\n      if (onSoftInputShown && event.eventName.endsWith("onSoftInputShown")) {\n        onSoftInputShown(event, context);\n      }\n\n      if (\n        onSoftInputHeightChange &&\n        event.eventName.endsWith("onSoftInputHeightChange")\n      ) {\n        onSoftInputHeightChange(event, context);\n      }\n    },\n    ["onSoftInputHidden", "onSoftInputShown", "onSoftInputHeightChange"],\n    doDependenciesDiffer\n  );\n}\n')),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/packages/mobile"},"example app")," for a detailed usage example."))}l.isMDXComponent=!0}}]);