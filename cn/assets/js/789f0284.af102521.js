"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[7872],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,d=m["".concat(i,".").concat(g)]||m[g]||p[g]||c;return n?o.createElement(d,l(l({ref:t},s),{},{components:n})):o.createElement(d,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<c;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8629:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var o=n(7462),r=n(3366),c=(n(7294),n(3905)),l=["components"],a={},i={unversionedId:"goctl/completion",id:"goctl/completion",isDocsHomePage:!1,title:"goctl \u81ea\u52a8\u8865\u5168",description:"goctl \u81ea\u52a8\u8865\u5168\u4ec5\u652f\u6301 unix-like \u64cd\u4f5c\u7cfb\u7edf",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/goctl/completion.md",sourceDirName:"goctl",slug:"/goctl/completion",permalink:"/cn/docs/goctl/completion",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/goctl/completion.md",version:"current",lastUpdatedAt:1662083518,formattedLastUpdatedAt:"9/2/2022",frontMatter:{},sidebar:"goctl",previous:{title:"goctl \u6307\u4ee4\u5927\u5168",permalink:"/cn/docs/goctl/commands"}},u=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u751f\u6210\u81ea\u52a8\u8865\u5168\u6587\u4ef6",id:"\u751f\u6210\u81ea\u52a8\u8865\u5168\u6587\u4ef6",children:[]},{value:"shell \u914d\u7f6e",id:"shell-\u914d\u7f6e",children:[]},{value:"\u6f14\u793a\u6548\u679c",id:"\u6f14\u793a\u6548\u679c",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,c.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"goctl \u81ea\u52a8\u8865\u5168\u4ec5\u652f\u6301 unix-like \u64cd\u4f5c\u7cfb\u7edf"),(0,c.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl completion -h\nNAME:\n   goctl completion - generation completion script, it only works for unix-like OS\n\nUSAGE:\n   goctl completion [command options] [arguments...]\n\nOPTIONS:\n   --name value, -n value  the filename of auto complete script, default is [goctl_autocomplete]\n")),(0,c.kt)("h2",{id:"\u751f\u6210\u81ea\u52a8\u8865\u5168\u6587\u4ef6"},"\u751f\u6210\u81ea\u52a8\u8865\u5168\u6587\u4ef6"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl completion\ngeneration auto completion success!\nexecutes the following script to setting shell:\necho PROG=goctl source /Users/keson/.goctl/.auto_complete/zsh/goctl_autocomplete >> ~/.zshrc && source ~/.zshrc\nor\necho PROG=goctl source /Users/keson/.goctl/.auto_complete/bash/goctl_autocomplete >> ~/.bashrc && source ~/.bashrc\n")),(0,c.kt)("h2",{id:"shell-\u914d\u7f6e"},"shell \u914d\u7f6e"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"zsh")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo PROG=goctl source /Users/keson/.goctl/.auto_complete/zsh/goctl_autocomplete >> ~/.zshrc && source ~/.zshrc\n")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"bash")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ echo PROG=goctl source /Users/keson/.goctl/.auto_complete/bash/goctl_autocomplete >> ~/.bashrc && source ~/.bashrc\n")),(0,c.kt)("h2",{id:"\u6f14\u793a\u6548\u679c"},"\u6f14\u793a\u6548\u679c"),(0,c.kt)("p",null,"\u4f7f\u7528 ",(0,c.kt)("inlineCode",{parentName:"p"},"tab")," \u952e\u51fa\u73b0\u81ea\u52a8\u8865\u5168\u63d0\u793a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"$ goctl\napi            -- generate api related files\nbug            -- report a bug\ncompletion     -- generation completion script, it only works for unix-like OS\ndocker         -- generate Dockerfile\nhelp        h  -- Shows a list of commands or help for one command\nkube           -- generate kubernetes files\nmigrate        -- migrate from tal-tech to zeromicro\nmodel          -- generate model code\nrpc            -- generate rpc code\ntemplate       -- template operation\nupgrade        -- upgrade goctl to latest version\n")))}p.isMDXComponent=!0}}]);