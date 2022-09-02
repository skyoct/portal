"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[8942],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,s=d["".concat(c,".").concat(m)]||d[m]||g[m]||i;return n?r.createElement(s,a(a({ref:t},u),{},{components:n})):r.createElement(s,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9994:function(e,t,n){n.r(t),n.d(t,{default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},c={unversionedId:"goctl/plugin",id:"goctl/plugin",isDocsHomePage:!1,title:"plugin \u6307\u4ee4",description:"goctl\u652f\u6301\u9488\u5bf9api\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u90a3\u6211\u600e\u4e48\u6765\u81ea\u5b9a\u4e49\u4e00\u4e2a\u63d2\u4ef6\u4e86\uff1f\u6765\u770b\u770b\u4e0b\u9762\u6700\u7ec8\u600e\u4e48\u4f7f\u7528\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/goctl/plugin.md",sourceDirName:"goctl",slug:"/goctl/plugin",permalink:"/cn/docs/goctl/plugin",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/goctl/plugin.md",version:"current",lastUpdatedAt:1662083518,formattedLastUpdatedAt:"9/2/2022",frontMatter:{},sidebar:"goctl",previous:{title:"model \u6307\u4ee4",permalink:"/cn/docs/goctl/model"},next:{title:"template \u6307\u4ee4",permalink:"/cn/docs/goctl/template-cmd"}},p=[{value:"\u600e\u4e48\u7f16\u5199\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff1f",id:"\u600e\u4e48\u7f16\u5199\u81ea\u5b9a\u4e49\u63d2\u4ef6",children:[]}],u={toc:p};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"goctl\u652f\u6301\u9488\u5bf9api\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u90a3\u6211\u600e\u4e48\u6765\u81ea\u5b9a\u4e49\u4e00\u4e2a\u63d2\u4ef6\u4e86\uff1f\u6765\u770b\u770b\u4e0b\u9762\u6700\u7ec8\u600e\u4e48\u4f7f\u7528\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl api plugin -p goctl-android="android -package com.tal" -api user.api -dir .\n')),(0,i.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5206\u89e3\u6210\u5982\u4e0b\u51e0\u6b65\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"goctl \u89e3\u6790api\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"goctl \u5c06\u89e3\u6790\u540e\u7684\u7ed3\u6784 ApiSpec \u548c\u53c2\u6570\u4f20\u9012\u7ed9goctl-android\u53ef\u6267\u884c\u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"goctl-android \u6839\u636e ApiSpec \u7ed3\u6784\u4f53\u81ea\u5b9a\u4e49\u751f\u6210\u903b\u8f91\u3002 ")),(0,i.kt)("p",null,'\u6b64\u547d\u4ee4\u524d\u9762\u90e8\u5206 goctl api plugin -p \u662f\u56fa\u5b9a\u53c2\u6570\uff0cgoctl-android="android -package com.tal" \u662fplugin\u53c2\u6570\uff0c\u5176\u4e2dgoctl-android\u662f\u63d2\u4ef6\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0candroid -package com.tal\u662f\u63d2\u4ef6\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c-api user.api -dir .\u662fgoctl\u901a\u7528\u81ea\u5b9a\u4e49\u53c2\u6570\u3002'),(0,i.kt)("h2",{id:"\u600e\u4e48\u7f16\u5199\u81ea\u5b9a\u4e49\u63d2\u4ef6"},"\u600e\u4e48\u7f16\u5199\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff1f"),(0,i.kt)("p",null,"go-zero\u6846\u67b6\u4e2d\u5305\u542b\u4e86\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u63d2\u4ef6 demo\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    \n    "github.com/zeromicro/go-zero/tools/goctl/plugin"\n)\n\nfunc main() {\n    plugin, err := plugin.NewPlugin()\n    if err != nil {\n        panic(err)\n    }\n    if plugin.Api != nil {\n        fmt.Printf("api: %+v \\n", plugin.Api)\n    }\n    fmt.Printf("dir: %s \\n", plugin.Dir)\n    fmt.Println("Enjoy anything you want.")\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"plugin, err := plugin.NewPlugin()")," \u8fd9\u884c\u4ee3\u7801\u4f5c\u7528\u662f\u89e3\u6790\u4ecegoctl\u4f20\u9012\u8fc7\u6765\u7684\u6570\u636e\uff0c\u91cc\u9762\u5305\u542b\u5982\u4e0b\u90e8\u5206\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Plugin struct {\n    Api   *spec.ApiSpec\n    Style string\n    Dir   string\n}\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Api\uff1a\u5b9a\u4e49\u4e86api\u6587\u4ef6\u7684\u7ed3\u6784\u6570\u636e"),(0,i.kt)("p",{parentName:"div"},"Style\uff1a\u53ef\u9009\u53c2\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u63a7\u5236\u6587\u4ef6\u547d\u540d\u89c4\u8303"),(0,i.kt)("p",{parentName:"div"},"Dir\uff1a\u5de5\u4f5c\u76ee\u5f55"))),(0,i.kt)("p",null,"\u5b8c\u6574\u7684\u57fa\u4e8eplugin\u5b9e\u73b0\u7684android plugin\u6f14\u793a\u9879\u76ee\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/goctl-android"},"https://github.com/zeromicro/goctl-android")))}g.isMDXComponent=!0}}]);