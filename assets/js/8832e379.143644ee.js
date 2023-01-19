"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5704],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return o?n.createElement(f,a(a({ref:t},c),{},{components:o})):n.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},4211:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={id:"recipes-bottom-sheet",title:"Bottom sheet recipe",sidebar_label:"Bottom sheet"},a=void 0,l={unversionedId:"recipes/recipes-bottom-sheet",id:"recipes/recipes-bottom-sheet",title:"Bottom sheet recipe",description:"Depending on bottom sheet implementation in your project, you should use either AvoidSoftInput module or AvoidSoftInputView component.",source:"@site/docs/recipes/BOTTOM_SHEET.mdx",sourceDirName:"recipes",slug:"/recipes/recipes-bottom-sheet",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-bottom-sheet",draft:!1,editUrl:"https://github.com/mateusz1913/react-native-avoid-softinput/tree/main/docs/docs/recipes/BOTTOM_SHEET.mdx",tags:[],version:"current",frontMatter:{id:"recipes-bottom-sheet",title:"Bottom sheet recipe",sidebar_label:"Bottom sheet"},sidebar:"docsSidebar",previous:{title:"Modal",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-modal"},next:{title:"Sticky footer",permalink:"/react-native-avoid-softinput/docs/next/recipes/recipes-sticky-footer"}},s={},p=[{value:"Example (bottom sheet without modal implementation)",id:"example-bottom-sheet-without-modal-implementation",level:3},{value:"Example (bottom sheet with modal implementation)",id:"example-bottom-sheet-with-modal-implementation",level:3}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Depending on bottom sheet implementation in your project, you should use either ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput")," module or ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInputView")," component."),(0,r.kt)("p",null,"If your bottom sheet implementation uses React Native ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal")," component, you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInputView")," component (",(0,r.kt)("a",{parentName:"p",href:"recipes-modal"},"check Modal recipe"),"). Otherwise use ",(0,r.kt)("inlineCode",{parentName:"p"},"AvoidSoftInput")," module (",(0,r.kt)("a",{parentName:"p",href:"recipes-form"},"check Form recipe"),")."),(0,r.kt)("h3",{id:"example-bottom-sheet-without-modal-implementation"},"Example (bottom sheet without modal implementation)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export const BottomSheetExample: React.FC = () => {\n  /**\n   * If you use react-navigation and want to enable module only in specific screen,\n   * you can call it in react-navigation `useFocusEffect` callback\n   *\n   * If you want to have module always enabled,\n   * just call it inside `useEffect` in your root component\n   *\n   * ```\n   * useEffect(() => {\n   *   AvoidSoftInput.setShouldMimicIOSBehavior(true); // <---- Tell Android that library will handle keyboard insets manually to match iOS behavior\n   *   AvoidSoftInput.setEnabled(true); // <---- Enable module\n   * }, [])\n   * ```\n   */\n  const onFocusEffect = useCallback(() => {\n    AvoidSoftInput.setShouldMimicIOSBehavior(true); // <---- Tell Android that library will handle keyboard insets manually to match iOS behavior\n    AvoidSoftInput.setEnabled(true); // <---- Enable module\n    AvoidSoftInput.setAvoidOffset(50); // <---- if you have CTA button at the bottom of the screen, set additional offset to make button also visible\n\n    return () => {\n      AvoidSoftInput.setAvoidOffset(0);\n      AvoidSoftInput.setEnabled(false);\n      AvoidSoftInput.setShouldMimicIOSBehavior(false);\n    };\n  }, []);\n\n  useFocusEffect(onFocusEffect);\n\n  // Sample bottom sheet\n  return (\n    <SafeAreaView>\n      // ... some JSX\n      <BottomSheetComponent>\n        <SafeAreaView>\n          <Text>Header</Text>\n          <TextInput />\n          <View>\n            <Button />\n          </View>\n        </SafeAreaView>\n      </BottomSheetComponent>\n    </SafeAreaView>\n  );\n};\n")),(0,r.kt)("h3",{id:"example-bottom-sheet-with-modal-implementation"},"Example (bottom sheet with modal implementation)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const ModalBottomSheetExample: React.FC = () => {\n  // Sample modal bottom sheet\n  return (\n    // ... some JSX\n    <ModalBottomSheetComponent>\n      <SafeAreaView>\n        {/** if you have CTA button at the bottom of the screen, set additional offset to make button also visible */}\n        <AvoidSoftInputView avoidOffset={50}>\n          <Text>Header</Text>\n          <TextInput />\n          <View>\n            <Button />\n          </View>\n        </AvoidSoftInputView>\n      </SafeAreaView>\n    </ModalBottomSheetComponent>\n    // ... some JSX\n  );\n};\n")))}m.isMDXComponent=!0}}]);