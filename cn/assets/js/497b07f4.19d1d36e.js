"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[3980],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,s=g["".concat(a,".").concat(m)]||g[m]||d[m]||c;return n?r.createElement(s,l(l({ref:t},u),{},{components:n})):r.createElement(s,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=g;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9959:function(e,t,n){n.r(t),n.d(t,{default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return p}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),l=["components"],i={},a={unversionedId:"concept",id:"concept",isDocsHomePage:!1,title:"\u6982\u5ff5\u4ecb\u7ecd",description:"go-zero",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/concept.md",sourceDirName:".",slug:"/concept",permalink:"/cn/docs/concept",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/concept.md",version:"current",lastUpdatedAt:1662083518,formattedLastUpdatedAt:"9/2/2022",frontMatter:{},sidebar:"docs",previous:{title:"\u9879\u76ee\u4ecb\u7ecd",permalink:"/cn/docs/introduction"},next:{title:"\u73af\u5883\u51c6\u5907",permalink:"/cn/docs/prepare/prepare"}},p=[{value:"go-zero",id:"go-zero",children:[]},{value:"goctl",id:"goctl",children:[]},{value:"goctl\u63d2\u4ef6",id:"goctl\u63d2\u4ef6",children:[]},{value:"intellij/vscode\u63d2\u4ef6",id:"intellijvscode\u63d2\u4ef6",children:[]},{value:"api\u6587\u4ef6",id:"api\u6587\u4ef6",children:[]},{value:"goctl\u73af\u5883",id:"goctl\u73af\u5883",children:[]},{value:"go-zero-demo",id:"go-zero-demo",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"go-zero"},"go-zero"),(0,c.kt)("p",null,"\u6653\u9ed1\u677fgolang\u5f00\u6e90\u9879\u76ee\uff0c\u96c6\u5404\u79cd\u5de5\u7a0b\u5b9e\u8df5\u4e8e\u4e00\u8eab\u7684web\u548crpc\u6846\u67b6\u3002"),(0,c.kt)("h2",{id:"goctl"},"goctl"),(0,c.kt)("p",null,"\u4e00\u4e2a\u65e8\u5728\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u9ad8\u5de5\u7a0b\u6548\u7387\u3001\u964d\u4f4e\u51fa\u9519\u7387\u7684\u8f85\u52a9\u5de5\u5177\u3002"),(0,c.kt)("h2",{id:"goctl\u63d2\u4ef6"},"goctl\u63d2\u4ef6"),(0,c.kt)("p",null,"\u6307\u4ee5goctl\u4e3a\u4e2d\u5fc3\u7684\u5468\u8fb9\u4e8c\u8fdb\u5236\u8d44\u6e90\uff0c\u80fd\u591f\u6ee1\u8db3\u4e00\u4e9b\u4e2a\u6027\u5316\u7684\u4ee3\u7801\u751f\u6210\u9700\u6c42\uff0c\u5982\u8def\u7531\u5408\u5e76\u63d2\u4ef6",(0,c.kt)("inlineCode",{parentName:"p"},"goctl-go-compact"),"\u63d2\u4ef6\uff0c\n\u751f\u6210swagger\u6587\u6863\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"goctl-swagger"),"\u63d2\u4ef6\uff0c\u751f\u6210php\u8c03\u7528\u7aef\u7684",(0,c.kt)("inlineCode",{parentName:"p"},"goctl-php"),"\u63d2\u4ef6\u7b49\u3002"),(0,c.kt)("h2",{id:"intellijvscode\u63d2\u4ef6"},"intellij/vscode\u63d2\u4ef6"),(0,c.kt)("p",null,"\u5728intellij\u7cfb\u5217\u4ea7\u54c1\u4e0a\u914d\u5408goctl\u5f00\u53d1\u7684\u63d2\u4ef6\uff0c\u5176\u5c06goctl\u547d\u4ee4\u884c\u64cd\u4f5c\u4f7f\u7528UI\u8fdb\u884c\u66ff\u4ee3\u3002"),(0,c.kt)("h2",{id:"api\u6587\u4ef6"},"api\u6587\u4ef6"),(0,c.kt)("p",null,"api\u6587\u4ef6\u662f\u6307\u7528\u4e8e\u5b9a\u4e49\u548c\u63cf\u8ff0api\u670d\u52a1\u7684\u6587\u672c\u6587\u4ef6\uff0c\u5176\u4ee5.api\u540e\u7f00\u7ed3\u5c3e\uff0c\u5305\u542bapi\u8bed\u6cd5\u63cf\u8ff0\u5185\u5bb9\u3002"),(0,c.kt)("h2",{id:"goctl\u73af\u5883"},"goctl\u73af\u5883"),(0,c.kt)("p",null,"goctl\u73af\u5883\u662f\u4f7f\u7528goctl\u524d\u7684\u51c6\u5907\u73af\u5883\uff0c\u5305\u542b"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"golang\u73af\u5883"),(0,c.kt)("li",{parentName:"ul"},"protoc"),(0,c.kt)("li",{parentName:"ul"},"protoc-gen-go\u63d2\u4ef6"),(0,c.kt)("li",{parentName:"ul"},"go module | gopath")),(0,c.kt)("h2",{id:"go-zero-demo"},"go-zero-demo"),(0,c.kt)("p",null,"go-zero-demo\u91cc\u9762\u5305\u542b\u4e86\u6587\u6863\u4e2d\u6240\u6709\u6e90\u7801\u7684\u4e00\u4e2a\u5927\u4ed3\u5e93\uff0c\u540e\u7eed\u6211\u4eec\u5728\u7f16\u5199\u6f14\u793ademo\u65f6\uff0c\u6211\u4eec\u5747\u5728\u6b64\u9879\u76ee\u4e0b\u521b\u5efa\u5b50\u9879\u76ee\uff0c\n\u56e0\u6b64\u6211\u4eec\u9700\u8981\u63d0\u524d\u521b\u5efa\u4e00\u4e2a\u5927\u4ed3\u5e93",(0,c.kt)("inlineCode",{parentName:"p"},"go-zero-demo"),"\uff0c\u6211\u8fd9\u91cc\u628a\u8fd9\u4e2a\u4ed3\u5e93\u653e\u5728home\u76ee\u5f55\u4e0b\u3002"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ cd ~\n$ mkdir go-zero-demo&&cd go-zero-demo\n$ go mod init go-zero-demo\n")))}d.isMDXComponent=!0}}]);